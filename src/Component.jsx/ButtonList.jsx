import React from 'react';
import Button from './Button';

const list = ["all", "music" , "Forest" , "Night" , "Art" , "Horror", "News","Cricket" , "Football" , "Yoga" , "music" ,"Food" , "Forest" , "Streaming"] ;
function ButtonList() {
  return (
    <div className='flex ml-5 bg-red-300 '>
       { list.map((item ,index)=><Button name={item} key={index} />)}
    </div>
  )
}

export default ButtonList;