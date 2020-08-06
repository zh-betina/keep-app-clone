function charCount(i){
  let counter = document.querySelector('.input__counter');
  if(i<=500){
    return counter.innerHTML = `${i}/500`;
  }else{
    return counter.innerHTML = `The limit of 500 characters has been reached!`;
  }
}

export { charCount };
