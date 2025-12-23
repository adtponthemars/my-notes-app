import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import { FileText } from 'lucide-react'
import axios from 'axios';




const NoteDetailPage = () => {
  const [noteContent, setNoteContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {id} = useParams();

   useEffect(() => {
      const fetchNote = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5001/api/notes/${id}`
          );
          setNoteContent(response.data.content);
          setNoteTitle(response.data.title);
        } catch (error) {
          console.log("Error fetching notes:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchNote();
    }, []);

    const handleUpdate = async ()=>{
        try {
          const response = await axios.put(`http://localhost:5001/api/notes/${id}`, {
            title: noteTitle,
            content:noteContent
          })
          console.log(response.data)
        } catch (error) {
          console.log("Error updating note:", error);
        }
    }

    const handleDelete =  async()=>{
      try {
        const response = await axios.delete(`http://localhost:5001/api/notes/${id}`)
        console.log(response.data);
        navigate('/')
      } catch (error) {
        console.log("Error deleting note: ", error);
      }
    }
  return (
    <div>
      <div className='flex items-center justify-between w-3xl m-auto'>
        <div className='flex gap-4 font-semibold text-xl'><FileText /> <span>
          <textarea name="" id="" rows={1}
            value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} className='resize-none' ></textarea></span>
        </div>
        <div className='flex gap-2'><button className='px-5 py-2 font-semibold rounded-4xl flex gap-3 text-white shadow-xs shadow-[#ce8ceb] bg-[#C47BE4] hover:bg-violet-700 transition duration-500 ease-in-out' 
        onClick={handleUpdate}>Update</button> <button className='px-5 py-2 font-semibold rounded-4xl flex gap-3 text-white shadow-xs shadow-[#ce8ceb] bg-[#f0d96a] hover:bg-amber-300 transition duration-500 ease-in-out' onClick={handleDelete}>Delete</button></div>
      </div>
      <div className=' mt-3  p-4'>
        <textarea name="" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} rows={23} className='block p-4 bg-white border-2 border-fuchsia-800 w-3xl m-auto resize-none outline-0 rounded-md' id=""></textarea>
      </div>
    </div>
  )
}

export default NoteDetailPage