import React from 'react';
import Button from './Button';

 const list = ["all", "music" ,"Food" , "Forest" , "Streaming" , "Night" , "Art" , "Horror", "News","Cricket" , "Football" , "Yoga"] ;
function ButtonList() {
  return (
    <div className='flex '>
       { list.map((item ,index)=><Button name={item} key={index} />)}
    </div>
  )
}

export default ButtonList;