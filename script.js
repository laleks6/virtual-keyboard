import keyObj from './key.js';

console.log(keyObj);
/* virtylakeybords */

/* creat blocks */

/* creat base block */
console.log('gggg');
const page = document.body;
page.className = 'page';
const screen = document.createElement('div');
screen.className = 'screen';

const input = document.createElement('textarea');
input.className = 'textarea';

const keyBoardBlock = document.createElement('div');
keyBoardBlock.className = 'block-key-board block-key-board--eng';

page.prepend(keyBoardBlock);
page.prepend(screen);
screen.append(input);

/* creat keys */

/* const creatKeys = () => {
  const key = document.createElement('button');
  key.className = 'key-board__key key';
  key.textContent = '2';
  keyBoardBlock.append(key);
};
creatKeys(); */
console.log(keyObj.keyLengEn);
const creatKeys = () => {
  const keys = Object.keys(keyObj.keyLengEn);
  const values = Object.values(keyObj.keyLengEn);
  console.log(`${keys}это мы`);
  console.log(`${values}это мы`);
  for (let i = 0; i < keys.length; i += 1) {
    const creatKey = document.createElement('div');
    creatKey.textContent = values[i];
    creatKey.className = 'key-board__key';
    if (values[i].length > 2) {
      creatKey.classList.add('key-board__key___key--bastard');
    }
    creatKey.dataset.code = keys[i];
    keyBoardBlock.append(creatKey);
    console.log(keys[i]);
  }
};
creatKeys();
const allKeys = document.getElementsByClassName('key-board__key');

const changeLanguage = () => {
  const keysBoard = document.getElementsByClassName('key-board__key');
  let keys;
  let values;
  if (keyBoardBlock.classList.contains('block-key-board--eng')) {
    keys = Object.keys(keyObj.keyLengEn);
    values = Object.values(keyObj.keyLengEn);
  } else if (keyBoardBlock.classList.contains('block-key-board--ru')) {
    keys = Object.keys(keyObj.keyLengRu);
    values = Object.values(keyObj.keyLengRu);
  }
  for (let i = 0; i < keys.length; i += 1) {
    if (values[i] !== keysBoard[i].textContent) {
      keysBoard[i].textContent = values[i];
    }
  }
};

/* mouse event */
const mouseClick = (event) => {
  console.log(event);
  console.log(event.target.innerText);
  console.log(event.target);
  if (!event.target.classList.contains('key-board__key___key--bastard')) {
    input.value += event.target.innerText;
  }
};
keyBoardBlock.addEventListener('mousedown', mouseClick);
console.log(allKeys);

/* key click */

/* text entry on key click  */
const addTextkeyInInput = (event) => {
  let text;
  for (let i = 0; i < allKeys.length; i += 1) {
    if (allKeys[i].dataset.code === event.code) {
      console.log(allKeys[i].dataset.code);
      allKeys[i].classList.add('key-board__key--active');
      if (keyBoardBlock.classList.contains('block-key-board--eng')) {
        text = keyObj.keyLengEn[event.code];
      } else if (keyBoardBlock.classList.contains('block-key-board--ru')) {
        text = keyObj.keyLengRu[event.code];
      }
      console.log(text);
      if (!allKeys[i].classList.contains('key-board__key___key--bastard')) {
        input.value += text;
      }
    }
  }
};
/* key pressing an shift for switch language */
const secondClickHandlerKey = (event) => {
  if (event.shiftKey) {
    console.log('shift сработал');
    if (keyBoardBlock.classList.contains('block-key-board--eng')) {
      keyBoardBlock.classList.remove('block-key-board--eng');
      keyBoardBlock.classList.add('block-key-board--ru');
    } else {
      keyBoardBlock.classList.remove('block-key-board--ru');
      keyBoardBlock.classList.add('block-key-board--eng');
    }
    changeLanguage();
    document.removeEventListener('keyup', secondClickHandlerKey);
  } else {
    console.log('убрал');
    document.removeEventListener('keyup', secondClickHandlerKey);
  }
};

const shiftMod = (event) => {
  let keys;
  let values;
  console.log(`shif Active -  ${event.shiftKey}`);
  if (keyBoardBlock.classList.contains('shift--active')) {
    console.log('SHIFT MOD On');
    if (keyBoardBlock.classList.contains('block-key-board--eng')) {
      keys = Object.keys(keyObj.keyModEng);
      values = Object.values(keyObj.keyModEng);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (keys[i] === allKeys[k].dataset.code) {
            console.log(`keys = ${keys[i]}  data = ${allKeys[k].dataset.code}`);
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
            console.log(`keys = ${keys[i]}  data = ${allKeys[k].dataset.code}`);
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
  }
  if (!keyBoardBlock.classList.contains('shift--active')) {
    console.log(`shif Active -  ${event.shiftKey}`);
    console.log('SHIFT MOD Off');
    if (keyBoardBlock.classList.contains('block-key-board--eng')) {
      keys = Object.keys(keyObj.keyLengEn);
      values = Object.values(keyObj.keyLengEn);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (keys[i] === allKeys[k].dataset.code) {
            console.log(`keys = ${keys[i]}  data = ${allKeys[k].dataset.code}`);
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
            console.log(`keys = ${keys[i]}  data = ${allKeys[k].dataset.code}`);
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
  }
};
const capsMod = (event) => {
  let keys;
  let values;
  console.log(`shif Active -  ${event.shiftKey}`);
  if (keyBoardBlock.classList.contains('caps--active')) {
    console.log('SHIFT MOD On');
    if (keyBoardBlock.classList.contains('block-key-board--eng')) {
      keys = Object.keys(keyObj.keyModEng);
      values = Object.values(keyObj.keyModEng);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (keys[i] === allKeys[k].dataset.code) {
            console.log(`keys = ${keys[i]}  data = ${allKeys[k].dataset.code}`);
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
            console.log(`keys = ${keys[i]}  data = ${allKeys[k].dataset.code}`);
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
  }
  if (!keyBoardBlock.classList.contains('caps--active')) {
    console.log(`shif Active -  ${event.shiftKey}`);
    console.log('SHIFT MOD Off');
    if (keyBoardBlock.classList.contains('block-key-board--eng')) {
      keys = Object.keys(keyObj.keyLengEn);
      values = Object.values(keyObj.keyLengEn);
      for (let i = 0; i < keys.length; i += 1) {
        for (let k = 0; k < allKeys.length; k += 1) {
          if (keys[i] === allKeys[k].dataset.code) {
            console.log(`keys = ${keys[i]}  data = ${allKeys[k].dataset.code}`);
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
            console.log(`keys = ${keys[i]}  data = ${allKeys[k].dataset.code}`);
            allKeys[k].textContent = values[i];
          }
        }
      }
    }
  }
};
const checKeyDown = (event) => {
  if (event.altKey) {
    console.log('нажад алт');
    event.preventDefault();
    document.addEventListener('keyup', secondClickHandlerKey);
    document.addEventListener('keydown', checKeyDown);
  }
  if (event.shiftKey) {
    console.log(event.shiftKey);
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
  addTextkeyInInput(event);
};
document.addEventListener('keydown', checKeyDown);

const checKeyUp = (event) => {
  if (keyBoardBlock.classList.contains('shift--active')) {
    keyBoardBlock.classList.toggle('shift--active');
    console.log('ppppppp');
    shiftMod(event);
    document.addEventListener('keydown', checKeyDown);
  }
  for (let i = 0; i < allKeys.length; i += 1) {
    if (allKeys[i].dataset.code === event.code) {
      console.log(allKeys[i].dataset.code);
      allKeys[i].classList.remove('key-board__key--active');
    }
  }
};
document.addEventListener('keyup', checKeyUp);

/* for copirate keys code in arr
document.addEventListener('keydown', (event) => {
  const code = event;
  console.log(event.key);
  console.log(code);
  arrKeyCodeRu[event.code] = event.key;
  console.log(arrKeyCodeRu);
}); */
