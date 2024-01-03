import React from "react";
import NotePersonal from "./NotePersonal";

function NoteArchive({onDelete, notes, onArchive}) {
    return(
        <div className="archive-button">
            {
                notes.map(note => (
                    <NotePersonal changeButton='Pindah' key={note.id} onDelete={onDelete} buttonData={onArchive} {...note} />
                ))
            }
        </div>
    );
}

export default NoteArchive;