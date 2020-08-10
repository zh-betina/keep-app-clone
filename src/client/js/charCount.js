function charCount(i){
  const counter = document.querySelector('.input__counter');
  if(i<=500){
    return counter.innerHTML = `${i}/500`;
  }else{
    const textarea = document.querySelector('.input__field');
    // TODO: take the value of the input, make an array,
    //split the characters and pop all items that have index
    //bigger than 499
    return counter.innerHTML = `The limit of 500 characters has been reached!`;
  }
}

export { charCount };
