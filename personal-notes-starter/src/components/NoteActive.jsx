import React from "react";
import NotePersonal from "./NotePersonal";

function NoteItem({onDelete, onActive, notes}) {
    return(
        <div className="active-button">
            {
                notes.map(note => (
                    <NotePersonal changeButton="arsipkan" key={note.id} onDelete={onDelete} buttonData={onActive} {...note} />
                ))
            }
        </div>
    );
}

export default NoteItem;