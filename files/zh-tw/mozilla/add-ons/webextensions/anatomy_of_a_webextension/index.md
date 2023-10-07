---
title: Anatomy of an extension
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
---

{{AddonSidebar}}

附加元件是一群檔案的集合，基於發布及安裝的目的而包裝成一個檔案。在這個章節，我們將快速地瀏覽這些可能會放在附加元件中的檔案。

## manifest.json

這是每個附加元件中，唯一一個必要放置的檔案。它包含了附加元件的名稱、版本、及需要的權限等資訊，同時也提供了附加元件中其他檔案的路徑指標。

這份 manifest 也可以包含幾項其他種類檔案的指標路徑:

- [Background pages](/zh-TW/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts): 實作長時間執行的邏輯。
- 附加元件的圖示及任何定義的按鈕。
- [Sidebars, popups, and options pages](/zh-TW/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Sidebars_popups_options_pages): 提供各種使用者介面元件的 HTML 文件。
- [Content scripts](/zh-TW/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts): 包含於你附加元件中的 JavaScript。你將會利用它注入到網頁中。

![](webextension-anatomy.png)

參考 [manifest.json](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 參考頁取得全部的明細。

除了那些參考自 manifest 之外，附加元件可以包含額外支援的檔案作為 [Extension pages](/zh-TW/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Extension_pages) 。

## Background scripts 後台腳本

擴展套件通常需要保持長期狀態或長時間執行操作，而生命週期不依賴於任何特定網頁或瀏覽器視窗。這是後台腳本的用途。

後台腳本會在擴充套件讀取時立即執行且會持續執行直到擴充套件被禁用或是解除安裝。你可以在腳本裡使用任何 WebExtension APIs， 只要你已經申請了必要的權限。

### Specifying background scripts 載入後台腳本

你可以在"manifest.json"裡使用`background`關鍵字用來包含後台腳本。

```json
// manifest.json

"background": {
  "scripts": ["background-script.js"]
}
```

你可以同時載入後台腳本，而他們會運行於相同的環境中，就像是在一個網頁中同時載入一樣。

然而，你也可以先載入一個後台頁面，然後在後台頁面中載入腳本。這樣的做法能為後台腳本提供 ES 6 模組的支援，算是一个優點。

**manifest.json**

```json
// manifest.json

"background": {
  "page": "background-page.html"
}
```

**background-page.html**

```html
<!doctype html>
<html lang="zh-tw">
  <head>
    <meta charset="utf-8" />
    <script type="module" src="background-script.js"></script>
  </head>
</html>
```

### Background script environment 後台腳本環境

#### DOM APIs

後台腳本運行在一個特殊的網頁中，我們稱之為後台頁面(background pages) 。這個頁面會給予他們一個全域的變數[window](/zh-TW/docs/Web/API/Window)，並且提供腳本使用所有的標準 DOM API。

#### WebExtension APIs

只要你請求了必要的[權限](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)後，後台腳本可以使用任何的[WebExtension APIs](/zh-TW/Add-ons/WebExtensions/API) 。

#### Cross-origin access 跨域請求

當後台腳本擁有[host permissions](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 時，便能像任何主機發送 XHR 請求。

#### Web content 網頁內容

後台腳本沒辦法直接的存取前端的網頁。然而，你可以載入 [content scripts](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) 到前端網頁後，[透過 message-passing API 來與 content scripts 進行通訊](/zh-TW/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts) 。

#### Content security policy 內容安全策略

依據内容安全策略（Content Security Policy），後台腳本不能執行一些可能有危險的操作，例如使用 [`eval()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/eval)。 詳情请参考[内容安全策略](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)。

## Sidebars, popups, options pages 側邊欄、彈出視窗、選項頁面

Your extension can include various user interface components whose content is defined using an HTML document:

- a [sidebar](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) is a pane that is displayed at the left-hand side of the browser window, next to the web page
- a [popup](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) is a dialog that you can display when the user clicks on a [toolbar button](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action) or [address bar button](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- an [options page](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) is a page that's shown when the user accesses your add-on's preferences in the browser's native add-ons manager.

For each of these components, you create an HTML file and point to it using a specific property in [manifest.json](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json). The HTML file can include CSS and JavaScript files, just like a normal web page.

All of these are a type of [Extension pages](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), and unlike a normal web page, your JavaScript can use all the same privileged WebExtension APIs as your background script. They can even directly access variables in the background page using {{WebExtAPIRef("runtime.getBackgroundPage()")}}.

## Extension pages 擴充頁面

You can also include HTML documents in your extension which are not attached to some predefined user interface component. Unlike the documents you might provide for sidebars, popups, or options pages, these don't have an entry in manifest.json. However, they do also get access to all the same privileged WebExtension APIs as your background script.

You'd typically load a page like this using {{WebExtAPIRef("windows.create()")}} or {{WebExtAPIRef("tabs.create()")}}.

See [Extension pages](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) to learn more.

## Content scripts

Use content scripts to access and manipulate web pages. Content scripts are loaded into web pages and run in the context of that particular page.

Content scripts are extension-provided scripts which run in the context of a web page; this differs from scripts which are loaded by the page itself, including those which are provided in {{HTMLElement("script")}} elements within the page.

Content scripts can see and manipulate the page's DOM, just like normal scripts loaded by the page.

Unlike normal page scripts, they can:

- Make cross-domain XHR requests.
- Use a small subset of the [WebExtension APIs](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API).
- Exchange messages with their background scripts and can in this way indirectly access all the WebExtension APIs.

Content scripts cannot directly access normal page scripts but can exchange messages with them using the standard [`window.postMessage()`](/zh-TW/docs/Web/API/Window/postMessage) API.

Usually, when we talk about content scripts, we are referring to JavaScript, but you can inject CSS into web pages using the same mechanism.

See the [content scripts](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) article to learn more.

## Web accessible resources 網頁無障礙資源

Web accessible resources are resources such as images, HTML, CSS, and JavaScript that you include in the extension and want to make accessible to content scripts and page scripts. Resources which are made web-accessible can be referenced by page scripts and content scripts using a special URI scheme.

For example, if a content script wants to insert some images into web pages, you could include them in the extension and make them web accessible. Then the content script could create and append [`img`](/zh-TW/docs/Web/HTML/Element/img) tags which reference the images via the `src` attribute.

To learn more, see the documentation for the [web_accessible_resources](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) manifest.json key.
