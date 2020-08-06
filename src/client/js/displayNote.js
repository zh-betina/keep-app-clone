function displayNote(note){
  const newEl = document.createElement('div');
  const notes = document.querySelector('.notes');
  notes.prepend(newEl);
  newEl.classList.add('note');

  newEl.innerHTML = `<div class="note__txt">${note.txt}</div>`;
};

export { displayNote };
