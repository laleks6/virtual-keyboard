import keyObj from './key.js';

if (localStorage.getItem('leng') === 'en') {
  localStorage.setItem('leng', 'en');
} else if (localStorage.getItem('leng') === 'ru') {
  localStorage.setItem('leng', 'ru');
} else {
  localStorage.setItem('leng', 'en');
}

/* virtylakeybords */

/* creat blocks */

/* creat base block */
const page = document.body;
page.className = 'page';
const screen = document.createElement('div');
screen.className = 'screen';

const input = document.createElement('textarea');
input.className = 'textarea';

const keyBoardBlock = document.createElement('div');
keyBoardBlock.className = 'block-key-board block-key-board--eng';

const rules = document.createElement('div');
rules.className = 'rules';

const switchRul = document.createElement('span');
switchRul.className = 'rules_switch';
switchRul.textContent = 'AltLeft + Shift - переключение языка';

const imgWin = document.createElement('img');
imgWin.className = 'rules_img-win';
imgWin.src = './pngwing.com.png';

rules.prepend(switchRul);
rules.prepend(imgWin);

page.prepend(rules);
page.prepend(keyBoardBlock);
page.prepend(screen);
screen.append(input);

/* creat keys */

const creatKeys = () => {
  let leng;
  if (localStorage.getItem('leng') === 'en') {
    leng = keyObj.keyLengEn;
  } else if (localStorage.getItem('leng') === 'ru') {
    leng = keyObj.keyLengRu;
  }
  const keys = Object.keys(leng);
  const values = Object.values(leng);
  for (let i = 0; i < keys.length; i += 1) {
    const creatKey = document.createElement('div');
    creatKey.textContent = values[i];
    creatKey.className = 'key-board__key';
    if (values[i].length > 2) {
      creatKey.classList.add('key-board__key___key--bastard');
    }
    if (keys[i] === 'Backspace' || keys[i] === 'CapsLock') {
      creatKey.classList.add('keyMaxSize');
    }
    if (keys[i] === 'Tab') {
      creatKey.classList.add('keySizeTub');
      creatKey.textContent = keys[i];
    }
    if (keys[i] === 'Delete') {
      creatKey.classList.add('keySizeTub');
    }
    if (keys[i] === 'Enter') {
      creatKey.classList.add('keySizeEnter');
    }
    if (keys[i] === 'ShiftLeft') {
      creatKey.classList.add('keyMaxSize');
    }
    if (keys[i] === 'ShiftRight') {
      creatKey.classList.add('keySizeEnter');
    }
    if (keys[i] === 'Space') {
      creatKey.classList.add('keySizeSpace');
    }
    if (keys[i] === 'ControlLeft' || keys[i] === 'MetaLeft' || keys[i] === 'AltLeft' || keys[i] === 'AltRight') {
      creatKey.classList.add('keySizeTub');
    }
    creatKey.dataset.code = keys[i];
    keyBoardBlock.append(creatKey);
  }
};

creatKeys();
const allKeys = document.getElementsByClassName('key-board__key');

const changeLanguage = () => {
  const keysBoard = document.getElementsByClassName('key-board__key');
  let keys;
  let values;
  if (keyBoardBlock.classList.contains('block-key-board--eng')) {
    localStorage.leng = 'en';
    keys = Object.keys(keyObj.keyLengEn);
    values = Object.values(keyObj.keyLengEn);
  } else if (keyBoardBlock.classList.contains('block-key-board--ru')) {
    localStorage.leng = 'ru';
    keys = Object.keys(keyObj.keyLengRu);
    values = Object.values(keyObj.keyLengRu);
  }
  for (let i = 0; i < keys.length; i += 1) {
    if (values[i] !== keysBoard[i].textContent) {
      keysBoard[i].textContent = values[i];
    }
  }
};

/* key click */

/* text entry on key click  */
const addTextkeyInInput = (event) => {
  let text;
  let length;
  if (keyBoardBlock.classList.contains('caps--active') && keyBoardBlock.classList.contains('block-key-board--eng')) {
    length = keyObj.keyModEng;
  } else if (keyBoardBlock.classList.contains('caps--active') && keyBoardBlock.classList.contains('block-key-board--ru')) {
    length = keyObj.keyModRu;
  } else if (keyBoardBlock.classList.contains('block-key-board--eng')) {
    length = keyObj.keyLengEn;
  } else if (keyBoardBlock.classList.contains('block-key-board--ru')) {
    length = keyObj.keyLengRu;
  }
  for (let i = 0; i < allKeys.length; i += 1) {
    if (allKeys[i].dataset.code === event.code) {
      allKeys[i].classList.add('key-board__key--active');
      if (allKeys[i].dataset.code === 'Space') {
        text = ' ';
      } else if (allKeys[i].dataset.code === 'Tab') {
        allKeys[i].classList.remove('key-board__key___key--bastard');
        text = '  ';
      } else {
        if (keyBoardBlock.classList.contains('caps--active') && keyBoardBlock.classList.contains('block-key-board--eng')) {
          length = keyObj.keyLengEn;
        }
        if (keyBoardBlock.classList.contains('caps--active') && keyBoardBlock.classList.contains('block-key-board--ru')) {
          if (allKeys[i].dataset.code === 'Backquote'
          || allKeys[i].dataset.code === 'BracketLeft'
          || allKeys[i].dataset.code === 'BracketRight'
          || allKeys[i].dataset.code === 'Semicolon'
          || allKeys[i].dataset.code === 'Quote'
          || allKeys[i].dataset.code === 'Comma'
          || allKeys[i].dataset.code === 'Period') {
            length = keyObj.keyModRu;
          }
        }
        if (keyBoardBlock.classList.contains('caps--active') && keyBoardBlock.classList.contains('block-key-board--eng') && allKeys[i].dataset.code.length === 4) {
          length = keyObj.keyModEng;
        } else if (keyBoardBlock.classList.contains('caps--active') && keyBoardBlock.classList.contains('block-key-board--ru') && allKeys[i].dataset.code.length === 4) {
          length = keyObj.keyModRu;
        }
        text = length[event.code];
      }
      if (!allKeys[i].classList.contains('key-board__key___key--bastard')) {
        input.value += text;
      }
    }
  }
};

const backspaceInInput = () => {
  const countDelete = input.selectionStart;
  const resultInput = input.value.split('');
  resultInput.splice(countDelete - 1, 1);
  if (countDelete < 1) {
    input.selectionStart = countDelete;
    input.selectionEnd = countDelete;
  } else {
    input.value = resultInput.join('');
    input.selectionStart = countDelete - 1;
    input.selectionEnd = countDelete - 1;
  }
  input.focus();
};
const deleteInInput = () => {
  const countDelete = input.selectionStart;
  const resultInput = input.value.split('');
  resultInput.splice(countDelete, 1);

  input.value = resultInput.join('');
  input.selectionEnd = countDelete;
  input.selectionStart = countDelete;
  input.focus();
};
const enterInInput = () => {
  input.value = `${input.value.substring(0, input.selectionStart)
  }\n${input.value.substring(input.selectionEnd, input.value.length)}`;
};

const shiftMod = () => {
  let keys;
  let values;
  if (keyBoardBlock.classList.contains('shift--active')) {
    if (keyBoardBlock.classList.contains('block-key-board--eng')) {
      keys = Object.keys(keyObj.keyModEng);
      values = Object.values(keyObj.keyModEng);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (keys[i] === allKeys[k].dataset.code) {
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
    if (keyBoardBlock.classList.contains('block-key-board--ru')) {
      keys = Object.keys(keyObj.keyModRu);
      values = Object.values(keyObj.keyModRu);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (keys[i] === allKeys[k].dataset.code) {
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
  }
  if (!keyBoardBlock.classList.contains('shift--active')) {
    if (keyBoardBlock.classList.contains('block-key-board--eng')) {
      keys = Object.keys(keyObj.keyLengEn);
      values = Object.values(keyObj.keyLengEn);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (keys[i] === allKeys[k].dataset.code) {
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
    if (keyBoardBlock.classList.contains('block-key-board--ru')) {
      keys = Object.keys(keyObj.keyLengRu);
      values = Object.values(keyObj.keyLengRu);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (keys[i] === allKeys[k].dataset.code) {
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
  }
};

const capsMod = () => {
  let keys;
  let values;
  if (keyBoardBlock.classList.contains('caps--active')) {
    if (keyBoardBlock.classList.contains('block-key-board--eng')) {
      keys = Object.keys(keyObj.keyModEng);
      values = Object.values(keyObj.keyModEng);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (allKeys[k].dataset.code.length === 4 && keys[i] === allKeys[k].dataset.code) {
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
    if (keyBoardBlock.classList.contains('block-key-board--ru')) {
      keys = Object.keys(keyObj.keyModRu);
      values = Object.values(keyObj.keyModRu);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (allKeys[k].dataset.code.length === 4 && keys[i] === allKeys[k].dataset.code) {
            allKeys[k].textContent = values[i];
          } else if (allKeys[k].dataset.code === 'Backquote'
                    || allKeys[k].dataset.code === 'BracketLeft'
                    || allKeys[k].dataset.code === 'BracketRight'
                    || allKeys[k].dataset.code === 'Semicolon'
                    || allKeys[k].dataset.code === 'Quote'
                    || allKeys[k].dataset.code === 'Comma'
                    || allKeys[k].dataset.code === 'Period') {
            allKeys[k].textContent = keyObj.keyModRu[allKeys[k].dataset.code];
          }
        }
      }
    }
  }
  if (!keyBoardBlock.classList.contains('caps--active')) {
    if (keyBoardBlock.classList.contains('block-key-board--eng')) {
      keys = Object.keys(keyObj.keyLengEn);
      values = Object.values(keyObj.keyLengEn);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (keys[i] === allKeys[k].dataset.code) {
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
    if (keyBoardBlock.classList.contains('block-key-board--ru')) {
      keys = Object.keys(keyObj.keyLengRu);
      values = Object.values(keyObj.keyLengRu);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (keys[i] === allKeys[k].dataset.code) {
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
  }
};

/* key pressing an shift for switch language */
const secondClickHandlerKey = (event) => {
  if (event.shiftKey) {
    if (keyBoardBlock.classList.contains('block-key-board--eng')) {
      keyBoardBlock.classList.remove('block-key-board--eng');
      keyBoardBlock.classList.add('block-key-board--ru');
    } else {
      keyBoardBlock.classList.remove('block-key-board--ru');
      keyBoardBlock.classList.add('block-key-board--eng');
    }
    changeLanguage();
    document.removeEventListener('keyup', secondClickHandlerKey);
    capsMod(event);
  } else {
    document.removeEventListener('keyup', secondClickHandlerKey);
  }
};

const checKeyDown = (event) => {
  event.preventDefault();
  if (event.altKey) {
    document.addEventListener('keyup', secondClickHandlerKey);
    document.addEventListener('keydown', checKeyDown);
  }
  if (event.shiftKey) {
    keyBoardBlock.classList.toggle('shift--active');
    document.removeEventListener('keydown', checKeyDown);
    shiftMod(event);
  }
  if (event.code === 'CapsLock') {
    if (keyBoardBlock.classList.contains('caps--active')) {
      keyBoardBlock.classList.toggle('caps--active');
      capsMod(event);
    } else {
      keyBoardBlock.classList.toggle('caps--active');
      capsMod(event);
    }
  }
  if (event.code === 'Backspace') {
    backspaceInInput();
  }
  if (event.code === 'Delete') {
    deleteInInput();
  }
  if (event.code === 'Enter') {
    enterInInput();
  }
  addTextkeyInInput(event);
};
document.addEventListener('keydown', checKeyDown);

const checKeyUp = (event) => {
  if (keyBoardBlock.classList.contains('shift--active')) {
    keyBoardBlock.classList.toggle('shift--active');
    shiftMod(event);
    document.addEventListener('keydown', checKeyDown);
  }
  for (let i = 0; i < allKeys.length; i += 1) {
    if (allKeys[i].dataset.code === event.code) {
      allKeys[i].classList.remove('key-board__key--active');
    }
  }
};
document.addEventListener('keyup', checKeyUp);

/* mouse event */
const mouseClickDown = (event) => {
  if (event.target.classList.contains('key-board__key')) {
    if (event.target.dataset.code === 'ShiftLeft' || event.target.dataset.code === 'ShiftRight') {
      keyBoardBlock.classList.toggle('shift--active');
      shiftMod(event);
    }
    if (event.target.dataset.code === 'CapsLock') {
      if (keyBoardBlock.classList.contains('caps--active')) {
        keyBoardBlock.classList.toggle('caps--active');
        capsMod(event.target.dataset.code);
      } else {
        keyBoardBlock.classList.toggle('caps--active');
        capsMod(event.target.dataset.code);
      }
    }
    if (event.target.dataset.code === 'Backspace') {
      backspaceInInput();
    }
    if (event.target.dataset.code === 'Delete') {
      deleteInInput();
    }
    if (event.target.dataset.code === 'Enter') {
      enterInInput();
    }
    addTextkeyInInput(event.target.dataset);
  }
};

keyBoardBlock.addEventListener('mousedown', mouseClickDown);
const mouseClickUp = (event) => {
  if (keyBoardBlock.classList.contains('shift--active')) {
    keyBoardBlock.classList.toggle('shift--active');
    shiftMod(event);
  }
  for (let i = 0; i < allKeys.length; i += 1) {
    if (allKeys[i].dataset.code === event.target.dataset.code) {
      allKeys[i].classList.remove('key-board__key--active');
    }
  }
};
keyBoardBlock.addEventListener('mouseup', mouseClickUp);
