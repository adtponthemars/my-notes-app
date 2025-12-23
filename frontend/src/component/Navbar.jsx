import React from 'react'
import {House, Tag, Settings} from "lucide-react"
import { isCookie, Link } from 'react-router'

const Navbar = () => {
    const navItems = [
        {name:"Home", icon:<House size={22} />},
        {name: "Labels", icon:<Tag size={22}/>},
        {name: "Setting", icon:<Settings size={22} />}
    ]
  return (
    <div className='w-1/6 top-0 bg-[#C47BE4] text-white sticky p-4 h-screen shadow-[#3e0755a3] shadow-xl'>
       <div className='font-bold text-2xl mb-5 border-[#a25ebe] pb-2 border-b-2'>NoteBook</div>
       {navItems.map((item, index)=>(
        <Link key={index}>
            <div className='flex font-semibold gap-4 mb-5 '><span className=''>{item.icon}</span>{item.name}</div>
        </Link>
       ))}
    </div>
  )
}

export default Navbar