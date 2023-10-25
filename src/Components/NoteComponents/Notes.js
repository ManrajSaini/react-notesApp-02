import React from 'react'
import Note from './Note'
import "../css/Note.css"

import { useState, useEffect } from "react";

const Notes = () => {
  return (
    <div className='notes'>
        <Note />
        <Note />
        <Note />
        <Note />
    </div>
  )
}

export default Notes