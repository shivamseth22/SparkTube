import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';


function Header() {
    const dispatch = useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }
  return (
    <div className='flex justify-between bg-slate-800 p-5 text-white shadow-xl items-center'>
        <div className='flex gap-5'>
            

           <div  onClick=  { ()=>toggleMenuHandler()}>
           <MenuIcon />
           </div>
           <h1>SparkTube</h1>
        </div>
        <div className='flex  '>
          <input type="text" className='text-slate-950 w-96  rounded-l-full' />
          <SearchIcon className=' text-slate-950 rounded-r-full bg-slate-200 '/>
        </div>
        <div>
        <PersonIcon/>

        </div>
    </div>
  )
}

export default Header