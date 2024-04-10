// applyComicSans.js

function changeFontToComicSans(element) {
  element.style.fontFamily = 'Comic Sans MS';
  for (let i = 0; i < element.children.length; i++) {
    changeFontToComicSans(element.children[i]);
  }
}

changeFontToComicSans(document.body);
