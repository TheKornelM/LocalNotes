"use strict";

export default function storeNotes(newNote) {
    // Retrieve current notes from localStorage
    const notes = readNotes();
    

    // Add the new note to the notes array
    notes.push(newNote);

    // Save the updated notes array back to localStorage as a JSON string
    localStorage.setItem('notes', JSON.stringify(notes));
}