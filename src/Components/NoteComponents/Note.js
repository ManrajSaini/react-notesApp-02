import React from 'react';
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Note = () => {
  return (
    <div className="note">
        <div className="note__body"> </div>
        <div>
            <DeleteForeverOutlinedIcon
                className="note__delete" aria-hidden="true">
            </DeleteForeverOutlinedIcon>
        </div>
    </div>
  )
}

export default Note