function menuDisplay(){
 const sidebar =  document.querySelector('.aside');
 const classList = sidebar.classList;
 const body = document.querySelector('body');

 if(classList.contains('hidden') == false){
   sidebar.classList.add('hidden');
   body.classList.remove('body');
   body.classList.add('body-wide-main-cont');
 }else{
   sidebar.classList.remove('hidden');
   body.classList.remove('body-wide-main-cont');
   body.classList.add('body');
  }
}

export { menuDisplay };

// TODO: fix KEEP logo and hambmenu fonts change
