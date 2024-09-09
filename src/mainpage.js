import { addNote, readNotes, updateNote, deleteNotes } from "./models/notes.js";
import { renderNotes } from "./view/notes.js";

window.deleteNotes = deleteNotes;
window.renderNotes = renderNotes;

window.addNoteHandler = function () {
    addNote(document.getElementById('note-content').value);
    renderNotes();
};

window.updateNoteHandler = function () {
    updateNote();
};

window.deleteNotesHandler = function () {
    deleteNotes();
};

const allNotes = readNotes();
console.log(allNotes);

// Initial render of notes when page loads
document.addEventListener('DOMContentLoaded', function () {
    renderNotes();
});

export { };