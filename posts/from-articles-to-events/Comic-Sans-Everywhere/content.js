// content.js

chrome.storage.local.get(['comicSansApplied'], (result) => {
  if (result.comicSansApplied) {
    isComicSans = true;
    applyComicSans();
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'applyComicSans') {
    isComicSans = !isComicSans;
    applyComicSans();
  }
});

function applyComicSans() {
  const styleElement = document.getElementById('comicSansStyle');
  if (isComicSans) {
    if (!styleElement) {
      const newStyle = document.createElement('style');
      newStyle.id = 'comicSansStyle';
      newStyle.innerHTML = '* { font-family: "Comic Sans MS" !important; }';
      document.head.appendChild(newStyle);
    }
  } else {
    if (styleElement) {
      styleElement.remove();
    }
  }
}
