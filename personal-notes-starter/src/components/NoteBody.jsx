import React from "react";
import NoteArchive from "./NoteArchive";
import NoteActive from "./NoteActive";

function NoteBody({onDelete, onActive, onArchive, activeDatas, archiveDatas}) {
    return(
        <React.Fragment>
            <section className="note-app__body">
                <div className="note-active">
                    <h2>Catatan Akhir</h2>
                    {
                        activeDatas.length !== 0
                            ? (<NoteActive onDelete={onDelete} notes={activeDatas} onActive={onActive} />)
                            : (<p>Tidak ada Catatan</p>) 
                    }
                </div>
            </section>
            <section className="container">
                <div className="note-archive">
                    <h2>Arsip</h2>
                    {
                        archiveDatas.length !== 0
                        ? (<NoteArchive onDelete={onDelete} notes={archiveDatas} onArchive={onArchive} />)
                        : (<p>Tidak ada Catatan</p>)
                    }
                </div>
            </section>
        </React.Fragment>
    );
}

export default NoteBody;