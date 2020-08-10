import './styles/main.scss';

import html from './views/index.html';

import logo from './views/media/icons/logo.svg';
import reminder from './views/media/icons/reminder.png';
import settings from './views/media/icons/settings.svg';
import notes from './views/media/icons/notes.svg';
import user from './views/media/icons/user.png';
import list from './views/media/icons/list.png';
import grid from './views/media/icons/grid.png';

import { detectKey } from './js/detectKey.js';
import { saveNote } from './js/saveNote.js';
import { displayNote } from './js/displayNote.js';
import { charCount } from './js/charCount.js';
import { changeView } from './js/gridListDisplay.js';
import { menuDisplay } from './js/menuDisplay.js';

export {
  detectKey,
  saveNote,
  displayNote,
  charCount,
  changeView,
  menuDisplay
}
