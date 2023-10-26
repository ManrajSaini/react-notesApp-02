import React, { useState } from 'react';
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

const Note = ({id, text, editHandler, deleteHandler}) => {

    const [isEditing, setIsEditing] = useState(false);
    let [editedText, setEditedText] = useState(text);

    const handleEditSave = () => {
        editHandler(id, editedText);
        setIsEditing(false);
    }

    const handleEditCancel = () => {
        setIsEditing(false);
    }

    return (
        <div className="note">
            {isEditing === true ? (
              <div>
                  <textarea value={editedText} onChange={(e) => setEditedText(e.target.value)} rows={5} cols={25} maxLength={100}></textarea>

                  <div className='note__footer' style={{ justifyContent: "flex-end" }}>
                      <SaveIcon
                          onClick={handleEditSave}
                          className='note__save__btn'
                          aria-hidden="true"
                      />

                      <CloseIcon
                          onClick={handleEditCancel}
                          className='note__cancel__btn'
                          aria-hidden="true"
                      />
                  </div>
              </div>

            ) : (
              <div>
                  <div className="note__body"> {text} </div>
                  <div className='note__footer' style={{ justifyContent: "flex-end" }}>
                      <EditIcon
                          onClick={() => setIsEditing(true)}
                          className='note__edit'
                          aria-hidden="true"
                      />

                      <DeleteForeverOutlinedIcon
                          onClick={() => deleteHandler(id)} 
                          className="note__delete" 
                          aria-hidden="true">
                      </DeleteForeverOutlinedIcon>
                  </div>
              </div>
            )}
        </div>
    )
}

export default Note