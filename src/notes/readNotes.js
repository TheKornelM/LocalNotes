export default function readNotes() {
    // Retrieve the stored notes (as a JSON string) from localStorage
    const notes = localStorage.getItem('notes');
    
    // If there are no notes stored, return an empty array
    return notes ? JSON.parse(notes) : [];
}