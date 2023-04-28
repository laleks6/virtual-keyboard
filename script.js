import keyObjEn from './key.js';

console.log(keyObjEn);
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
console.log(keyObjEn);
const creatKeys = () => {
  const keys = Object.keys(keyObjEn);
  const values = Object.values(keyObjEn);
  for (let i = 0; i < keys.length; i += 1) {
    const creatKey = document.createElement('div');
    if (keys[i] === 'ArrowLeft') {
      values[i] = '🠔';
    } else if (keys[i] === 'ArrowUp') {
      values[i] = '🠕';
    } else if (keys[i] === 'ArrowRight') {
      values[i] = '🠖';
    } else if (keys[i] === 'ArrowDown') {
      values[i] = '🠗';
    }
    creatKey.textContent = values[i];
    creatKey.className = 'key-board__key';
    creatKey.dataset.code = keys[i];
    keyBoardBlock.append(creatKey);
    console.log(keys[i]);
  }
};
creatKeys();

const mouseClick = (event) => {
  console.log(event);
  console.log(event.target.innerText);
  input.value += event.target.innerText;
};
keyBoardBlock.addEventListener('mousedown', mouseClick);
const arrKeyCodeRu = {
};

const keys = document.getElementsByClassName('key-board__key');
console.log(keys);
document.addEventListener('keydown', (event) => {
  console.log(keyObjEn[event.code]);
  input.value += keyObjEn[event.code];
});

/* for copirate keys code in arr
document.addEventListener('keydown', (event) => {
  const code = event;
  console.log(event.key);
  console.log(code);
  arrKeyCodeRu[event.code] = event.key;
  console.log(arrKeyCodeRu);
}); */
