import React, { useState, useEffect} from 'react'
import { useNavigate, Link} from 'react-router'
import { Search, FilePlusCorner, LayoutList, ArrowDownUp, FileText} from "lucide-react"
import axios from 'axios';


const HomePage = () => {

  const [allNotes, setAllNotes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/notes"
        );
        setAllNotes(response.data);
      } catch (error) {
        console.log("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const navigate = useNavigate();
  return (
    <div className='p-4 bg-white'>
      <div className='bg-[#e4d5eb] m-auto flex w-1/2 p-3 gap-3 rounded-4xl'>
        <Search /> <input className=' w-full' type="text" placeholder='Search notes' />
      </div>
      {/* CREATE NEW NOTE BTN  */}
      <div className=' my-11 '>
        <button className='px-5 py-4 font-semibold rounded-4xl flex gap-3 text-white shadow-2xl shadow-[#ca71f0] bg-[#C47BE4]' onClick={() => {
          navigate('/create')
        }} >
          <FilePlusCorner /> Create Note</button>
      </div>
      <div className=' p-4 flex justify-between '>
        <div className='font-semibold'>Documents by title</div>
        <div className='flex gap-6'><LayoutList />
          <ArrowDownUp />
        </div>
      </div>
      {/* NOTES CONTAINER  */}
      <div className='mt-5 grid grid-cols-5 gap-8'>
        {loading
          ? <p>Loading notes...</p>
          : allNotes.map((note) => (
            <Link to={`/detail/${note._id}`} key={note._id} className=''>
            <div  className="shadow-md  shadow-violet-300 rounded-md  mb-2 w-52 h-60 hover:scale-105 duration-300 ease-in-out">
              <h3 className='bg-[#C47BE4]  rounded-t-md text-white p-2 flex gap-1'> <FileText />{note.title}</h3>
              <div className='p-2'><p className=''>{note.content}</p></div> 
            </div></Link>
          ))
        }

      </div>
    </div>
  )
}

export default HomePage