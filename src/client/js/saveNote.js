import { displayNote } from './displayNote.js';
import { charCount } from './charCount.js';
function saveNote(){
  const placeholder = document.querySelector(".placeholder");
  const notesSection = document.querySelector(".notes");
  if(notesSection == ""){
    placeholder.classList.remove("invisible");
  }else{
    placeholder.classList.add("invisible");
  }
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
