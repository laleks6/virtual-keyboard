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
keyBoardBlock.className = 'key-board ';

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

const key = document.getElementsByClassName('key');
console.log(key);
const mouseClick = (event) => {
  console.log(event);
  console.log(event.target.innerText);
  input.value += event.target.innerText;
};

const arrKeyCodeRu = {
};
document.addEventListener('keydown', (event) => {
  const { code } = event;
  console.log(event.key);
  console.log(code);
  arrKeyCodeRu[event.code] = event.key;
  console.log(arrKeyCodeRu);
});
