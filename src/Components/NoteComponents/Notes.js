import React from 'react'
import Note from './Note'
import CreateNote from './CreateNote';

import "../css/Note.css"

import {v4 as uuid} from "uuid";

import { useState, useEffect } from "react";

const Notes = () => {

    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");

    const textHandler = (e) => {
        setInputText(e.target.value);
    }

    const saveHandler = () => {
        setNotes((oldNotes) => [
            ...oldNotes,
            {
                id: uuid(),
                text: inputText
            }
        ]);

        setInputText("");
    }

    const deleteHandler = (noteId) => {
        const filteredNotes = notes.filter(
            (note) => note.id !== noteId
        );

        setNotes(filteredNotes);
    }

    return (
        <div className='notes'>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    deleteHandler={deleteHandler}
                />
            ))}    

            <CreateNote 
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText}
            />
        </div>
    )
}

export default Notes