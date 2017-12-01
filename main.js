/*!
 * Copyright(c) 2017 Yoann Chane Kive
 * MIT Licensed
 */

let init = false;
let index = 0;
const selectPost = () => {
  if (!init) { init = true; }
  const actual = document.querySelectorAll('article')[index];
  if (actual) {
    actual.classList.add('selected-post');
    actual.scrollIntoView();
  }
}
const like = () => {
  [].slice.call(document.querySelectorAll('.selected-post ._eszkz')).forEach( x => { x.click();} );
}
const comment = () => {
  [].slice.call(document.querySelectorAll('.selected-post ._p6oxf')).forEach( x => { x.click();} );
}
const previous = () => {
  recalculatePosition();
  index--;
  index = (index < 0) ? 0 : index;
  return selectPost();
};
const next = () => {
  recalculatePosition();
  index++;
  return selectPost();
}
// Define the real position because the stack is limited and it is replaced for each request.
const recalculatePosition = () => {
  document.querySelectorAll('article').forEach( (x, i) => {
    if (x.classList.contains('selected-post')) {
      x.classList.remove('selected-post');
      index = i;
    }
  });
}
window.addEventListener('keyup', (e) => {
  // console.log('keyboard', e.keyCode);
  let isShift = !!window.event.shiftKey;
  if (isShift) {
    if (e.keyCode === 90) { previous(); }
    if (e.keyCode === 88) { next(); }
    if (e.keyCode === 65) { like(); }
    if (e.keyCode === 67) { comment(); }
  }
});
