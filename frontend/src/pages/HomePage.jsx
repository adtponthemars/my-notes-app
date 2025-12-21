import React from 'react'
import { Search, FilePlusCorner, LayoutList, ArrowDownUp } from "lucide-react"


const HomePage = () => {
  return (
    <div className='p-4 bg-white'>
      <div className='bg-[#e4d5eb] m-auto flex w-1/2 p-3 gap-3 rounded-4xl'>
        <Search /> <input className=' w-full' type="text" placeholder='Search notes' />
      </div>
      {/* CREATE NEW NOTE BTN  */}
      <div className=' my-11 '>
        <button className='px-5 py-4 font-semibold rounded-4xl flex gap-3 text-white shadow-2xl shadow-[#ca71f0] bg-[#C47BE4]'>
          <FilePlusCorner /> Create Note</button>
      </div>
       <div className=' p-4 flex justify-between '>
        <div className='font-semibold'>Documents by title</div>
        <div className='flex gap-6'><LayoutList />
        <ArrowDownUp />
        </div>
       </div>
       {/* NOTES CONTAINER  */}
       <div className='bg-amber-200 mt-5 grid grid-cols-5 gap-8'>
           <div className='w-52 h-60 bg-amber-400'></div>
            <div className='w-52 h-60 bg-amber-400'></div>
             <div className='w-52 h-60 bg-amber-400'></div>
              <div className='w-52 h-60 bg-amber-400'></div>
               <div className='w-52 h-60 bg-amber-400'></div>
                <div className='w-52 h-60 bg-amber-400'></div>
                 <div className='w-52 h-60 bg-amber-400'></div>
                  <div className='w-52 h-60 bg-amber-400'></div>
       </div>
    </div>
  )
}

export default HomePage