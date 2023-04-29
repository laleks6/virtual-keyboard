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
keyBoardBlock.className = 'block-key-board';

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
  for (let i = 0; i < keys.length; i += 1) {
    const creatKey = document.createElement('div');
    creatKey.textContent = values[i];
    creatKey.className = 'key-board__key';
    creatKey.dataset.code = keys[i];
    keyBoardBlock.append(creatKey);
    console.log(keys[i]);
  }
};
creatKeys();

const changeLetterCase = (argument) => {
  if (argument === 'upper') {

  } else {

  }
};

const mouseClick = (event) => {
  console.log(event);
  console.log(event.target.innerText);
  input.value += event.target.innerText;
};
keyBoardBlock.addEventListener('mousedown', mouseClick);

const keys = document.getElementsByClassName('key-board__key');
console.log(keys);

const secondClickHandlerKey = (event) => {
  if (event.shiftKey) {
    console.log('shift сработал');
    document.removeEventListener('keyup', secondClickHandlerKey);
  } else {
    console.log('убрал');
    document.removeEventListener('keyup', secondClickHandlerKey);
  }
};
const checKeyDown = (event) => {
  if (event.altKey) {
    console.log('нажад алт');
    event.preventDefault();
    document.addEventListener('keyup', secondClickHandlerKey);
    document.addEventListener('keydown', checKeyDown);
  }
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].dataset.code === event.code) {
      console.log(keys[i].dataset.code);
      keys[i].classList.add('key-board__key--active');
      console.log(keyObj.keyLengEn[event.code]);
      input.value += keyObj.keyLengEn[event.code];
    }
  }
};
document.addEventListener('keydown', checKeyDown);

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].dataset.code === event.code) {
      console.log(keys[i].dataset.code);
      keys[i].classList.remove('key-board__key--active');
    }
  }
});
const arrKeyCodeRu = {
  KeyQ: 'й',
  KeyW: 'ц',
  KeyE: 'у',
  KeyR: 'к',
  KeyT: 'е',
  KeyY: 'н',
  KeyU: 'г',
  KeyI: 'ш',
  KeyO: 'щ',
  KeyP: 'з',
  BracketLeft: 'х',
  BracketRight: 'ъ',
  KeyA: 'ф',
  KeyS: 'ы',
  KeyD: 'в',
  KeyF: 'а',
  KeyG: 'п',
  KeyH: 'р',
  KeyJ: 'о',
  KeyK: 'л',
  KeyL: 'д',
  Semicolon: 'ж',
  Quote: 'э',
  KeyZ: 'я',
  KeyX: 'ч',
  KeyC: 'с',
  KeyV: 'м',
  KeyB: 'и',
  KeyN: 'т',
  KeyM: 'ь',
  Comma: 'б',
  Period: 'ю',
};
document.addEventListener('keydown', (event) => {
  const code = event;
  console.log(event.key);
  console.log(code);
  arrKeyCodeRu[event.code] = event.key;
  console.log(arrKeyCodeRu);
});
/* for copirate keys code in arr
document.addEventListener('keydown', (event) => {
  const code = event;
  console.log(event.key);
  console.log(code);
  arrKeyCodeRu[event.code] = event.key;
  console.log(arrKeyCodeRu);
}); */
