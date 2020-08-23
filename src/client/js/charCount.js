function charCount(i){
  const counter = document.querySelector('.input__counter');
  if(i<=200){
    return counter.innerHTML = `${i}/200`;
  }else{
    const textarea = document.querySelector('.input__field');
    const toBeCut = [textarea.value];
    const cutText = toBeCut[0].split("", 200);
    const finalText = cutText.join('');
    textarea.value = finalText;
    return counter.innerHTML = `The limit of 200 characters has been reached!`;
  }
}

export { charCount };
