const noteInput = document.getElementById('noteInput');
const saveNoteBtn = document.getElementById('saveNote');
const notesList = document.getElementById('notesList');

// Load saved notes
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
            ${note}
            <button class="deleteBtn" onclick="deleteNote(${index})">X</button>
        `;
        notesList.appendChild(noteDiv);
    });
}

// Save new note
saveNoteBtn.addEventListener('click', () => {
    const note = noteInput.value.trim();
    if (note) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = "";
        loadNotes();
    }
});

// Delete note
function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
}

// Initial load
loadNotes();
