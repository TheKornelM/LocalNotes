export default function renderNotes() {
    const notes = JSON.parse(localStorage.getItem('notes'));
    // If there are no notes stored, return an empty array
    //notes = notes ? JSON.parse(notes) : [];
    if (!notes)
        return;

    const noteContentDiv = document.getElementById('notes');

    // Clear the div before rendering new content
    noteContentDiv.innerHTML = '';

    // Loop through each note and create HTML structure
    notes.forEach((note, index) => {
        // Create a new div for each note
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        // Create the title element
        const id = document.createElement('div');
        id.classList.add('note-id');
        id.textContent = "(" + index + ") ";

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('note-title');
        titleDiv.textContent = note.title;

        // Create the content element
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('note-body');
        contentDiv.textContent = note;

        // Append title and content to the note div
        noteDiv.appendChild(id);
        noteDiv.appendChild(titleDiv);
        noteDiv.appendChild(contentDiv);

        // Append the note div to the main note-content div
        noteContentDiv.appendChild(noteDiv);
    });
}