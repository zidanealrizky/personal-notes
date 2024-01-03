import React from "react";

function NoteNavbar({onSearch}) {
    return(
        <nav className="note-app__header">
            <div>
                <a href="/">
                    <span>Notes</span>
                </a>
                <div>
                    <input onChange={(event) => onSearch(event)} type="text" id="search-navbar" placeholder="Cari..." />
                </div>
            </div>
        </nav>
    );
}

export default NoteNavbar;