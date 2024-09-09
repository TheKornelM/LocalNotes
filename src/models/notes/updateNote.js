"use strict";

export default function updateNote (note) {
    const notes = localStorage.getItem('notes');

    notes.forEach((notes, index) => {
        if (note.id === notes[index].id) {
            notes[index] = note;
        }
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}