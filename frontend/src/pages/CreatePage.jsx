import React from 'react'
import { FileText } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'

const CreatePage = () => {
  const [textValue, setTextValue] = useState("");
  const [noteTitle, setNoteTitle] = useState("Untitled");
  const [noteId, setNoteId] = useState(null);

  const saveText = async () => {
    if (noteId === null) {
      try {
        const response = await axios.post('http://localhost:5001/api/notes/create', {
          title: noteTitle,
          content: textValue
        })
        console.log(response.data);
        setNoteId(response.data.note.id);
        console.log(response.data.note.id)
      } catch (error) {
        console.log("Error saving new note: ", error);
      }
    }
    else {
      try {
        const response = await axios.put(`http://localhost:5001/api/notes/${noteId}`, {
          title: noteTitle,
          content: textValue
        })
        console.log(response.data)
        setNoteTitle(response.data.note.title);
        setTextValue(response.data.note.content);
      } catch (error) {
        console.log("Error updating note: ", error);
      }
    }
  }

  return (
    <div className=''>
      <div className='flex items-center justify-between w-3xl m-auto'>
        <div className='flex gap-4 font-semibold text-xl'><FileText /> <span>
          <textarea name="" id="" rows={1}
            value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} className='resize-none' ></textarea></span>
        </div>
        <div><button className='px-5 py-2 font-semibold rounded-4xl flex gap-3 text-white shadow-xs shadow-[#ce8ceb] bg-[#C47BE4] hover:bg-violet-700 transition duration-500 ease-in-out' onClick={saveText}>Save</button></div>
      </div>
      <div className=' mt-3  p-4'>
        <textarea name="" value={textValue} onChange={(e) => setTextValue(e.target.value)} rows={23} className='block p-4 bg-white border-2 border-fuchsia-800 w-3xl m-auto resize-none outline-0 rounded-md' id=""></textarea>
      </div>
    </div>

  )
}

export default CreatePage