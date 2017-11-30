// TODO - Manage Ajax Posts

let init = false;
let index = 0;
const selectPost = () => {
  if (!init) {
    init = true;
    index = 0;
  }
  console.log(index);

  [].slice.call(document.querySelectorAll('.selected-post')).forEach( x => { x.classList.remove('selected-post'); } );
  const actual = document.getElementsByClassName('_s5vjd')[index];
  actual.classList.add('selected-post');
  return actual;
}
const like = () => {
  [].slice.call(document.querySelectorAll('.selected-post ._eszkz')).forEach( x => { x.click();} );
}
const comment = () => {
  [].slice.call(document.querySelectorAll('.selected-post ._p6oxf')).forEach( x => { x.click();} );
}
const previous = () => {
  index--;
  index = (index < 0) ? 0 : index;
  return selectPost();
};
const next = () => {
  index++;
  return selectPost();
}
window.addEventListener('keyup', (e) => {
  console.log('keyboard', e.keyCode);
  let isShift = !!window.event.shiftKey;
  if (isShift) {
    if (e.keyCode === 90) { previous().scrollIntoView(); }
    if (e.keyCode === 88) { next().scrollIntoView(); }
    if (e.keyCode === 65) { like(); }
    if (e.keyCode === 67) { comment(); }
  }
});
