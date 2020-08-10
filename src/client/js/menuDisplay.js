function menuDisplay(){
 const sidebar =  document.querySelector('.aside');
 const classList = sidebar.classList;
 console.log(classList);

 if(classList.contains('hidden') == false){
   sidebar.classList.add('hidden');

 }else{
   sidebar.classList.remove('hidden');
 }
}

export { menuDisplay };
