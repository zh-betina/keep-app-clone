import { saveNote } from './saveNote.js';

function detectEnterKey(e){
  if(e.key == "Enter"){
    return saveNote();
  }else{
    return;
  }
}

export { detectEnterKey };
