import React from 'react';
import LinearProgress from "@mui/material/LinearProgress";

const CreateNote = ({textHandler, saveHandler, inputText}) => {

    const charLimit = 100;
    const charLeft = charLimit - inputText.length;

    return (
        <div className='note' style={{background: "rgba(255, 255, 255, 0)"}}>
            <textarea value={inputText} onChange={textHandler} rows={5} cols={10} placeholder='Add Description here ...' maxLength={100}></textarea>

            <div className='note__footer'>
                <span className='label'>{charLeft} left</span>
                <button onClick={saveHandler} className='note__save'>Save</button>
            </div>

            <LinearProgress 
                className='char__progress'
                variant='determinate'
                value={charLeft}
            />
        </div>
    )
}

export default CreateNote