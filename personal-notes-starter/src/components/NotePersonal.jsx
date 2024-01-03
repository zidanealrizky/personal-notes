import React from "react";
import { showFormattedDate } from "../utils";

function NotePersonal({id, title, body, createdAt, onDelete, buttonData, changeButton}) {
    return(
        <div className="note-item">
            <div className="note-item__content">
                <h5 className="note-item__title">{title}</h5>
                <span className="note-item__date">{createdAt}</span>
            </div>
            <p className="note-item__body">{body}</p>
            <div className="note-item__action">
                <button onClick={() => onDelete(id)} className="note-item__delete-button">delete</button>
                <button onClick={() => buttonData(id)} className="note-item__archive-button">{changeButton}</button>
            </div>
        </div>
    );
}

export default NotePersonal;