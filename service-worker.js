function fixCatalyst() {
    className = "article_header_image_container pageHeader_image_articles"
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('chrome://')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fixCatalyst
    });
  }
});

chrome.scripting
  .registerContentScripts([{
    id: "session-script",
    js: ["content.js"],
    persistAcrossSessions: false,
    matches: ["*://catalystathletics.com/*"],
    runAt: "document_end",
  }])
  .then(() => console.log("registration complete"))
  .catch((err) => console.warn("unexpected error", err))