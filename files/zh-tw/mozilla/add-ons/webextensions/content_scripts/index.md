---
title: 內容腳本
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
---

{{AddonSidebar}}內容腳本（content script）是擴充套件的一部分，它會在在特定的網頁執行（與之相對的則是同樣屬於套件的後端腳本（background scripts）或者網站本身的腳本，像是那些那些透過 {{HTMLElement("script")}} 標籤讀取的內容）

[後端腳本](/zh-TW/Add-ons/WebExtensions/Background_scripts)可以使用所有的 [擴充套件 JavaScript APIs](/zh-TW/Add-ons/WebExtensions/API)，但它們無法直接使用網頁中的內容。所以如果你的套件必須要透過 content scripts 才能使用它們。

就像一般網頁裡的 scripts 一樣，content scripts 可以透過 standard DOM APIs 存取並修改頁面內容。

Content scripts 只能使用 can only access [一小部分的擴充套件 APIs](/zh-TW/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs)，但它們可以透過一個訊息系統[來與後端腳本溝通](/zh-TW/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts)，從而間接地使用擴充套件 APIs。

> **備註：** 留意到 content scripts 目前會在 addons.mozilla.org 和 testpilot.firefox.com 中被阻擋。如果你嘗試在這些網域下的頁面注入一段 content script 會失敗並且在日誌裡記下一個 [CSP](/zh-TW/docs/Web/HTTP/CSP) 錯誤。

> **備註：** 由於錯誤 [1408996](https://bugzilla.mozilla.org/show_bug.cgi?id=1408996)，透過 `var foo` or `window.foo = "bar"` 加入 content script 的 global 作用域的值可能會消失。

## 讀入內容腳本

你可以透過下列三種方式將內容腳本讀入頁面：

1. **在安裝時讀入至符合 URL 模式的頁面：**透過你的 manifest.json 中的 [`content_scripts`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 鍵，你可以要求瀏覽器在每次讀取 URL[符合給定模式](/zh-TW/Add-ons/WebExtensions/Match_patterns)的頁面時讀入內容腳本。
2. **在執行時讀入至符合 URL 模式的頁面：**透過 [`content_scripts`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) API，你可以要求瀏覽器在每次讀取 URL[符合給定模式](/zh-TW/Add-ons/WebExtensions/Match_patterns)的頁面時讀入內容腳本。這就像第一種方法，不同的是你可以在執行時增加或移除內容腳本。
3. **在執行時讀入至特定的頁籤：透過** [`tabs.executeScript()`](/zh-TW/Add-ons/WebExtensions/API/Tabs/executeScript) API，你可以在任何時候將內容腳本讀入特定的頁籤：舉例來說可以在使用者點擊[工具列按鈕](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Browser_action)時給予回應。

每個套件的每個架構裡都只有一個全局作用域，所以一個內容腳本的變數可以直接被其他內容腳本使用，不管那個內容腳本是怎麼被讀入的。

透過方法（1）和方法（2）你只能把內容腳本讀入至 URL 可以用[匹配模式](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)來呈現的頁面中。而透過方法 3 可以把腳本讀入與套件打包在一起的頁面之中，但是你不能在像是 "about:debugging" 或 "about:addons" 這類特別的瀏覽器頁面讀入腳本。

## 內容腳本環境

### 使用 DOM

內容腳本可以像一般頁面的腳本一樣使用並修改頁面的 DOM。它們也可以偵測到所有頁面 script 對 DOM 做的更動。

然而，內容腳本看到的是「乾淨的 DOM」。這表示：

- 內容腳本看不見頁面腳本的 Javascript 變數
- 如果頁面腳本修改了原有 DOM 的屬性，內容腳本會看見原來的屬性而非被修改過的。

在 Gecko 裡，這種行爲稱爲 [X 光視野](/zh-TW/docs/Xray_vision)。

舉例來說，有這樣一個網頁：

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  </head>

  <body>
    <script src="page-scripts/page-script.js"></script>
  </body>
</html>
```

"page-script.js" 做了這件事：

```js
// page-script.js

// 替DOM新增一個元素
var p = document.createElement("p");
p.textContent = "This paragraph was added by a page script.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);

// 替 window 定義一個新的屬性
window.foo = "This global variable was added by a page script";

// 重新定義內建的 window.confirm 函數
window.confirm = function () {
  alert("The page script has also redefined 'confirm'");
};
```

接著、一個套件把 content script 插入頁面：

```js
// content-script.js

// 可以使用與修改DOM
var pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// 看不見 page-script 增加的屬性
console.log(window.foo); // undefined

// 看見的是原有的形式
window.confirm("Are you sure?"); // 呼叫原本的 window.confirm()
```

反過來也是一樣，頁面腳本無法看到內容腳本增加的 Javascript 屬性。

這表示我們可以預期內容腳本依賴著 DOM 屬性，不需要擔心它的變數與頁面腳本中所定義的變數衝突。

這實際的影響就是內容腳本無法使用所有頁面腳本讀入的函式庫。所以，舉例來說，如果頁面包含了 JQuery，內容腳本將無法看到它。

如果內容腳本真的想要使用 javascript 函式庫，那麼函式庫本身必須要與要使用它的內容腳本一同插入：

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

注意到 Firefox 提供了一些 API 來使用被頁面腳本產生的 Javascript 物件以及對頁面腳本公開自己的 Javascript 物件。詳閱[與頁面腳本共用物件](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)。

### 擴充套件 APIs

除標準 DOM APIs 之外，內容腳本可以使用下列 擴充套件 APIs：

來自 [`extension`](/zh-TW/Add-ons/WebExtensions/API/extension):

- [`getURL()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/extension/getURL)
- [`inIncognitoContext`](/zh-TW/Add-ons/WebExtensions/API/extension#inIncognitoContext)

來自 [`runtime`](/zh-TW/Add-ons/WebExtensions/API/runtime):

- [`connect()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect)
- [`getManifest()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getManifest)
- [`getURL()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL)
- [`onConnect`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- [`onMessage`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- [`sendMessage()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)

來自 [`i18n`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/i18n):

- [`getMessage()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage)
- [`getAcceptLanguages()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages)
- [`getUILanguage()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage)
- [`detectLanguage()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage)

來自 [`storage`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/storage) 的全部。

### XHR 與 Fetch

內容腳本可以透過一般的 [`window.XMLHttpRequest`](/zh-TW/docs/Web/API/XMLHttpRequest) 與 [`window.fetch()`](/zh-TW/docs/Web/API/Fetch_API) APIs 來發出請求。

內容腳本跟套件的其他部分擁有相同的跨網域權限： 所以如果套件在 manifest.json 中透過 [`permissions`](/zh-TW/Add-ons/WebExtensions/manifest.json/permissions) 鍵要求了某一網域的使用，那麼它的內容腳本也能使用同樣的網域。

這是透過公開更多內容腳本中授權的 XHR 以及 fetch 實例來達成的。這件事情會導致標頭中不會設置 [`Origin`](/zh-TW/docs/Web/HTTP/Headers/Origin) 與 [`Referer`](/zh-TW/docs/Web/HTTP/Headers/Referer)的副作用，就像頁面請求自己一樣，一般會避免請求將跨來源泄露出去。從 58 版本號以後套件要傳送一些彷彿是頁面內容自己傳送的請求時可以改用 `content.XMLHttpRequest` 與 `content.fetch()`。對跨瀏覽器套件來說，這些事情的存在必須要能被做特徵檢測。

## 與後端腳本溝通

雖然內容腳本不能直接使用大部分的 擴充套件 APIs，但是透過使用訊息 APIs 與後端腳本溝通，它們能夠間接地使用與後端腳本一樣的 APIs。

後端腳本與內容腳本的溝通模式有兩種： 你可以傳送選擇性夾帶回應的一次性訊息，也可以在兩者之間建立一個長存的連線來交換訊息。

### 一次性訊息

要傳送選擇性夾帶回應的一次性訊息，你可以使用下列 APIs：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">在內容腳本處</th>
      <th scope="col">在後端腳本處</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">傳訊息</th>
      <td>
        <code
          ><a href="/zh-TW/Add-ons/WebExtensions/API/runtime/sendMessage"
            >browser.runtime.sendMessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a href="/zh-TW/Add-ons/WebExtensions/API/Tabs/sendMessage"
            >browser.tabs.sendMessage()</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">收訊息</th>
      <td>
        <code
          ><a href="/zh-TW/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a href="/zh-TW/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

舉例來說，有個監聽著頁面點擊事件的內容腳本。如果點擊對象是連結，它會傳送目標的 URL 給後端腳本：

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({ url: e.target.href });
}
```

後端腳本監聽這些訊息並且透過 [`notifications`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API 顯示通知：

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.extension.getURL("link.png"),
    title: "你點了個按鈕喲！",
    message: message.url,
  });
}
```

這個範例來自 GitHub 上的 [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)，稍微經過修改。

### 基於連線的訊息

當你在後端腳本與內容腳本間交換大量訊息時，使用一次性連線顯得沒效率。所以另一個替代方案是是在兩者間建立一個長存的連線，透過這個連線交換訊息。

兩邊都有一個 [`runtime.Port`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 物件可以用來交換訊息。

建立連線你需要：

- 一邊透過 [`runtime.onConnect`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) 監聽連線
- 另一邊呼叫 [`tabs.connect()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) （對內容腳本建立連線時）或 [`runtime.connect()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) （對後端腳本建立連線時）。這會回傳一個 [`runtime.Port`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 物件。
- [`runtime.onConnect`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) 監聽器傳送自己的 [`runtime.Port`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 物件。

當兩邊都有端口後，可以透過 `runtime.Port.postMessage()` 來傳送訊息，用 `runtime.Port.onMessage` 接收訊息。

舉例來說，當這讀取完成，這個內容腳本會：

- 連線至後端腳本，並將 `Port` 儲存在一個 `myPort` 變數
- 監聽並記錄 `myPort` 的訊息
- 當使用者點擊文件時，透過 `myPort` 傳送訊息給後端腳本

```js
// content-script.js

var myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ greeting: "內容腳本傳喜訊" });

myPort.onMessage.addListener(function (m) {
  console.log("內容腳本收到來自後端腳本的訊息： ");
  console.log(m.greeting);
});

document.body.addEventListener("click", function () {
  myPort.postMessage({ greeting: "它們點了網頁！" });
});
```

同樣地，後端腳本會：

- 監聽來自內容腳本的連線請求
- 當它收到連線請求：

  - 將端口儲存在 `portFromCS` 這個變數
  - 透過端口傳送訊息給內容腳本
  - 開始監聽並記錄端口上的訊息

- 當使用者點擊套件的工具列按鈕時，透過 `portFromCS` 傳送訊息給內容腳本

```js
// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "嘿！內容腳本！" });
  portFromCS.onMessage.addListener(function (m) {
    console.log("後端腳本收到來自內容腳本的訊息：");
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function () {
  portFromCS.postMessage({ greeting: "它們按了按鈕！" });
});
```

#### 複數內容腳本

如果你有多個內容腳本同時在溝通，你可能會想把這些連線儲存在陣列裡面。

```js
// background-script.js

var ports = [];

function connected(p) {
  ports[p.sender.tab.id] = p;
  //...
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function () {
  ports.forEach((p) => {
    p.postMessage({ greeting: "它們按了按鈕！" });
  });
});
```

## 與網頁溝通

雖說內容腳本預設不能存取頁面腳本產生的物件，但它們可以透過 DOM [`window.postMessage`](/zh-TW/docs/Web/API/Window/postMessage) 和 [`window.addEventListener`](/zh-TW/docs/Web/API/EventTarget/addEventListener) APIs 與頁面腳本溝通。

例如：

```js
// page-script.js

var messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage({
    direction: "from-page-script",
    message: "Message from the page"
  }, "*");
```

```js
// content-script.js

window.addEventListener("message", function (event) {
  if (
    event.source == window &&
    event.data &&
    event.data.direction == "from-page-script"
  ) {
    alert('內容腳本收到訊息： "' + event.data.message + '"');
  }
});
```

完全版的範例請[查看 GitHub 上的示範頁面](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html)並按照教學做。

> **警告：** 注意到當你透過這個方式跟不被信任的內容腳本互動時要非常小心。套件有很強的權限，惡意網頁可以輕易地騙出這些權限。
>
> 舉個簡單的例子，假設一接收訊息的內容腳本長這樣：
>
> ```js
> // content-script.js
>
> window.addEventListener("message", function (event) {
>   if (
>     event.source == window &&
>     event.data.direction &&
>     event.data.direction == "from-page-script"
>   ) {
>     eval(event.data.message);
>   }
> });
> ```
>
> 如此一來頁面腳本可以使用包含內容腳本全部權限的程式碼。

## 在內容腳本中使用 eval()

在 Chrome 裡， [`eval()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/eval) 只會在內容腳本而不會在頁面腳本裡執行。

在 Firefox 裡：

- 如果你呼叫 `eval()`，它會在內容腳本中執行
- 如果你呼叫 `window.eval()`，它會在頁面腳本中執行

例如，試想有一個內容腳本長這樣：

```js
// content-script.js

window.eval("window.x = 1;");
eval("window.y = 2");

console.log(`In content script, window.x: ${window.x}`);
console.log(`In content script, window.y: ${window.y}`);

window.postMessage(
  {
    message: "check",
  },
  "*",
);
```

這段程式碼透過 `window.eval()` 和 `eval()` 建立了些變數 x 和 y 、記錄下它們的值並且傳訊息給頁面。

接收訊息這邊，頁面腳本記錄下一樣的值：

```js
window.addEventListener("message", function (event) {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

在 Chrome 裡，這會產出這樣的結果：

```
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

而在 Firefox 裡會產生這些：

```
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

這些也適用於 [`setTimeout()`](/zh-TW/docs/Web/API/setTimeout)、[`setInterval()`](/zh-TW/docs/Web/API/setInterval)、與 [`Function()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function)。

當在頁面執行程式碼時一定要小一萬個心，頁面的環境有可能被惡意的網頁所控制，它們可以重新定義與你互動的物件來作出一些出乎意料的行爲：

```js
// page.js 重新定義 console.log

var original = console.log;

console.log = function () {
  original(true);
};
```

```js
// content-script.js 呼叫被重新定義的版本

window.eval("console.log(false)");
```
