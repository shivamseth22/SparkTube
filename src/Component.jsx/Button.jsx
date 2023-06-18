import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className='my-5 mx-1 px-5 rounded-md bg-slate-300'>{name}</button>
    </div>
  )
}

export default Button;