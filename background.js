chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.visible) {
    console.log('Received page title from content script:', message.visible);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      console.log(currentTab)
      if (message.auto) {
        chrome.scripting.executeScript({
          target: { tabId: currentTab.id },
          function: () => location.reload()
        });
      }
    })
  }
});