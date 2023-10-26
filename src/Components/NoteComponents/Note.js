import React from 'react';
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Note = ({id, text, deleteHandler}) => {
  return (
    <div className="note">
        <div className="note__body"> {text} </div>
        <div className='note__footer' style={{ justifyContent: "flex-end" }}>
            <DeleteForeverOutlinedIcon
                onClick={() => deleteHandler(id)} 
                className="note__delete" 
                aria-hidden="true">
            </DeleteForeverOutlinedIcon>
        </div>
    </div>
  )
}

export default Note