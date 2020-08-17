import '../img/icon-128.png'

let currentUrl = '';
let tabId;

chrome.webNavigation.onHistoryStateUpdated.addListener(
    details => {
      if (currentUrl != details.url){
        currentUrl = details.url;
        tabId = details.tabId;
        chrome.tabs.sendMessage(tabId, {type: 'page-rendered'}).then(response => {
          console.log(response.response);
        }).catch(onError);
      }
    },
    {
      url: [
        {
          hostSuffix: 'pathstream.com'
        }
      ]
    }
  );