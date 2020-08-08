function changeView(){
  const icon = document.querySelector("icon--"+"list");

    document.querySelector('.icon--list').classList.add('hidden');
    document.querySelector('.icon--grid').classList.remove('hidden');
    document.querySelector('.notes').classList.remove('flex-grid');
    document.querySelector('.notes').classList.add('flex-list');
}

export { changeView };
