// popup.js

document.getElementById('applyComicSans').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['applyComicSans.js'],
    }, () => {
      chrome.storage.local.set({ comicSansApplied: true });
    });
  });
});

document.getElementById('undoComicSansBtn').addEventListener('click', () => {
  chrome.storage.local.set({ comicSansApplied: false });
});
