function displayNote(note){
  const newEl = document.createElement('div');
  const notes = document.querySelector('.notes');
  notes.prepend(newEl);
  newEl.classList.add('note');

  newEl.innerHTML = `<p class="note__txt">${note.txt}</p>`;
}

export { displayNote };
