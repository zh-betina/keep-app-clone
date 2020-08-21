function changeView(mode){
  const iconList = document.querySelector('.icon--list');
  const iconGrid = document.querySelector('.icon--grid');
  const notes = document.querySelector('.notes');

  if(mode=="list"){
    iconList.classList.remove('visible');
    iconList.classList.add('hidden');
    iconGrid.classList.remove('hidden');
    iconGrid.classList.add('visible');
    notes.classList.remove('flex-grid');
    notes.classList.add('flex-list');
  }else{
    iconGrid.classList.add('hidden');
    iconList.classList.remove('hidden');
    notes.classList.remove('flex-list');
    notes.classList.add('flex-grid');
  }
}

export { changeView };
