import { displayNote } from './displayNote.js';

function saveNote(){
  const textarea = document.querySelector('textarea');
  let textareaValue;
  //Get the text:
  textareaValue = {
    "txt": `${textarea.value}`
  };

  console.log(textareaValue.txt);
  //Clear the textarea:
  textarea.value = "";
  return displayNote(textareaValue);
}

export { saveNote };
