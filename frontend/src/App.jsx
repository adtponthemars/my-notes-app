
import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import Navbar from './component/Navbar';

const App = () => {
  
  return (
    <div className='flex items-start relative'>
      {/* <div className=''> */}
      <Navbar/>
     {/* </div> */}
     <div className='px-6 py-4 w-full'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail/:id" element={<NoteDetailPage />} />
      </Routes>
      </div>
    </div>
  )
}

export default App