import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import NoteCard from './components/NoteCard';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NoteCard />
    </React.StrictMode>
);