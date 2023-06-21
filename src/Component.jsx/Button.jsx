import React from 'react'

function Button({name}) {
  return (
    <div className=''>
        <button className='my-5 mx-1 px-5 rounded-md bg-slate-200 capitalize'>{name}</button>
    </div>
  )
}

export default Button;