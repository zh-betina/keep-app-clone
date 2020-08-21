import { displayNote } from './displayNote.js';
import { charCount } from './charCount.js';
function saveNote(){
  const textarea = document.querySelector('textarea');
  let textareaValue;
  //Get the text:
  textareaValue = {
    "txt": `${textarea.value}`
  };

  console.log(textareaValue);
  //Clear the textarea:
  textarea.value = "";
  charCount(0);
  return displayNote(textareaValue);
}

export { saveNote };
