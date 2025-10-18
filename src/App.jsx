import React from 'react'
import { useState } from 'react'
const App = () => {
  const [open, setOpen] =  useState()
  return (
    <div>
          <button onClick={()=>setOpen(!open)} >Open</button>
          <dialog open={open} >Message</dialog>
    </div>
  )
}

export default App
