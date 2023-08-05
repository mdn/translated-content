---
title: 製作 WebSocket 客戶端應用程式
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
---

WebSocket 是一種讓瀏覽器與伺服器進行一段互動通訊的技術。使用這項技術的 Webapp 可以直接進行即時通訊而不需要不斷對資料更改進行輪詢（polling）。

> **備註：** 當我們的系統架構可以寄存 WebSocket 範例之後，我們會提供聊天／伺服器系統實例的幾個範例。

## 哪裡有 WebSocket

若 JavaScript 代碼的範疇是 {{ domxref("Window") }} 物件或是實作 {{ domxref("WorkerUtils") }} 的物件，則可使用 WebSocket API。也就是可以從 Web Workers 使用 WebSocket。

> **備註：** WebSockets API（與底層協定）的開發還在進展中，且目前不同瀏覽器（甚至瀏覽器的不同版本）有很多兼容問題。

## 建立一個 WebSocket 物件

你必須建立一個 [`WebSocket`](/zh_tw/WebSockets/WebSockets_reference/WebSocket) 物件才能讓瀏覽器／伺服器得以以 WebSocket 協定進行通訊，此物件在被建立之後會自動與伺服器連線。

> **備註：** 別忘記在 Firefox 6.0 中 `WebSocket` 物件仍有前輟，所以在這裡須改成 `MozWebSocket`。

WebSocket 的建構方法有一個必要參數與一個選擇參數：

```plain
WebSocket WebSocket(
  in DOMString url,
  in optional DOMString protocols
);

WebSocket WebSocket(
  in DOMString url,
  in optional DOMString[] protocols
);
```

- `url`

  - : 連線用的 URL，WebSocket 伺服器會回應這個 URL。

    根據網際網路工程任務小組（Internet Engineering Task Force，IETF）定義之規範， URL 的協議類型必須是 `ws://` （非加密連線）或是 `wss://` （加密連線）

- `protocols` {{ optional_inline() }}
  - : 一個表示協定的字串或者是一個表示協定的字串構成的陣列。這些字串可以用來指定子協定，因此一個伺服器可以實作多個 WebSocket 子協定（舉例來說，你可以讓一個伺服器處理不同種類的互動情形，各情形以 `protocol` 分別）。若不指定協定字串則預設值為空字串。

此建構方法可能拋出以下例外：

- `SECURITY_ERR`
  - : 連線使用的埠被阻擋。

### 範例

此簡單範例建立了一個新的 WebSocket，連到位於 `http://www.example.com/socketserver` 的伺服器。指定的子協定是 "my-custom-protocol"。

```plain
var mySocket = new WebSocket("ws://www.example.com/socketserver", "my-custom-protocol");
```

回傳之後，`mySocket` 的 `readyState` 會變成 `CONNECTING`。當連線已可以傳輸資料時 `readyState` 會變成 `OPEN`。

要建立一個連線但不指定單一個特定協定，可以指定一個協定構成的陣列：

```plain
var mySocket = new WebSocket("ws://www.example.com/socketserver", ["protocol1", "protocol2"]);
```

當連線建立的時候（也就是 `readyState` 變成而 `OPEN` 的時候），`protocol` 屬性會回傳伺服器選擇的協定。

## 傳資料給伺服器

連線開啟之後即可開始傳資料給伺服器。呼叫 `WebSocket` 的 [`send()`](</zh_tw/WebSockets/WebSockets_reference/WebSocket#send()>) 來發送訊息：

```plain
mySocket.send("這是伺服器正迫切需要的文字！");
```

可以被傳送的內容包括字串、[`Blob`](/zh-TW/DOM/Blob) 或是 [`ArrayBuffer`](/zh_tw/JavaScript_typed_arrays/ArrayBuffer)。

> **備註：** Firefox 目前只支援字串傳送。

### 用 JSON 傳輸物件

有一個很方便的方法是用 [JSON](/zh-TW/JSON) 傳送複雜的資料給伺服器，舉例來說，聊天程式可以設計一種協定，這個協定傳送以 JSON 封裝的資料封包：

```js
// 透過伺服器傳送文字給所有使用者

function sendText() {
  var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id: clientID,
    date: Date.now(),
  };

  mySocket.send(JSON.stringify(msg));
  document.getElementById("text").value = "";
}
```

這份代碼先建立一個物件：`msg`，它包含伺服器處理訊息所需的種種資訊，然後呼叫 [`JSON.stringify()`](/zh-TW/JavaScript/Reference/Global_Objects/JSON/stringify) 使該物件轉換成 JSON 格式並呼叫 WebSocket 的 [`send()`](</zh_tw/WebSockets/WebSockets_reference/WebSocket#send()>) 方法來傳輸資料至伺服器。

## 從伺服器接收訊息

WebSockets 是一個事件驅動 API，當瀏覽器收到訊息時，一個「message」事件被傳入 `onmessage` 函數。使用以下方法開始傾聽傳入資料：

```js
mySocket.onmessage = function (e) {
  console.log(e.data);
};
```

### 接收並解讀 JSON 物件

考慮先前在「用 JSON 傳輸物件」談起的聊天應用程式。客戶端可能收到的資料封包有幾種：

- 登入握手
- 訊息文字
- 更新使用者清單

用來解讀傳入訊息的代碼可能像是：

```js
connection.onmessage = function (evt) {
  var f = document.getElementById("chatbox").contentDocument;
  var text = "";
  var msg = JSON.parse(evt.data);
  var time = new Date(msg.date);
  var timeStr = time.toLocaleTimeString();

  switch (msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;
    case "username":
      text =
        "<b>使用者 <em>" + msg.name + "</em> 登入於 " + timeStr + "</b><br>";
      break;
    case "message":
      text = "(" + timeStr + ") <b>" + msg.name + "</b>: " + msg.text + "<br>";
      break;
    case "rejectusername":
      text =
        "<b>由於你選取的名字已被人使用，你的使用者名稱已被設置為 <em>" +
        msg.name +
        "</em>。";
      break;
    case "userlist":
      var ul = "";
      for (i = 0; i < msg.users.length; i++) {
        ul += msg.users[i] + "<br>";
      }
      document.getElementById("userlistbox").innerHTML = ul;
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};
```

這裡我們使用 [`JSON.parse()`](/zh-TW/JavaScript/Reference/Global_Objects/JSON/parse) 使 JSON 物件轉換成原來的物件，檢驗並根據內容採取行動。

## 關閉連線

當你想結束 WebSocket 連線的時候，呼叫 WebSocket 的 [`close()`](</zh_tw/WebSockets/WebSockets_reference/WebSocket#close()>) 方法：

```plain
mySocket.close();
```

## 參考資料

[IETF: The WebSocket protocol draft-abarth-thewebsocketprotocol-01](https://tools.ietf.org/html/draft-abarth-thewebsocketprotocol-01)
