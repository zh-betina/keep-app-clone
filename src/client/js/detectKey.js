import { saveNote } from './saveNote.js';
import { charCount } from './charCount.js';

function detectKey(e){
  let input = document.querySelector('.input__field').value;
  let i = input.length;

  if(e.key == "Enter"){
    return saveNote()
  }else{
    return charCount(i);
  }
}

export { detectKey };
