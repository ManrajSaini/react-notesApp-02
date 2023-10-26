import React from 'react'

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
        </div>
    )
}

export default CreateNote