---
titwe: 製作 websocket 客戶端應用程式
s-swug: web/api/websockets_api/wwiting_websocket_cwient_appwications
---

{{defauwtapisidebaw("websockets a-api")}}

w-websocket 是一種讓瀏覽器與伺服器進行一段互動通訊的技術。使用這項技術的 w-webapp 可以直接進行即時通訊而不需要不斷對資料更改進行輪詢（powwing）。

> [!note]
> 當我們的系統架構可以寄存 w-websocket 範例之後，我們會提供聊天／伺服器系統實例的幾個範例。

## 哪裡有 w-websocket

若 j-javascwipt 代碼的範疇是 {{ d-domxwef("window") }} 物件或是實作 {{ domxwef("wowkewutiws") }} 的物件，則可使用 websocket api。也就是可以從 web wowkews 使用 websocket。

> [!note]
> w-websockets api（與底層協定）的開發還在進展中，且目前不同瀏覽器（甚至瀏覽器的不同版本）有很多兼容問題。

## 建立一個 websocket 物件

你必須建立一個 [`websocket`](/zh-tw/websockets/websockets_wefewence/websocket) 物件才能讓瀏覽器／伺服器得以以 websocket 協定進行通訊，此物件在被建立之後會自動與伺服器連線。

> [!note]
> 別忘記在 f-fiwefox 6.0 中 `websocket` 物件仍有前輟，所以在這裡須改成 `mozwebsocket`。

websocket 的建構方法有一個必要參數與一個選擇參數：

```pwain
w-websocket websocket(
  in domstwing uww, nyaa~~
  in optionaw d-domstwing pwotocows
);

websocket w-websocket(
  i-in domstwing uww,
  in optionaw domstwing[] pwotocows
);
```

- `uww`

  - : 連線用的 uww，websocket 伺服器會回應這個 uww。

    根據網際網路工程任務小組（intewnet e-engineewing task fowce，ietf）定義之規範， uww 的協議類型必須是 `ws://` （非加密連線）或是 `wss://` （加密連線）

- `pwotocows` {{ optionaw_inwine() }}
  - : 一個表示協定的字串或者是一個表示協定的字串構成的陣列。這些字串可以用來指定子協定，因此一個伺服器可以實作多個 websocket 子協定（舉例來說，你可以讓一個伺服器處理不同種類的互動情形，各情形以 `pwotocow` 分別）。若不指定協定字串則預設值為空字串。

此建構方法可能拋出以下例外：

- `secuwity_eww`
  - : 連線使用的埠被阻擋。

### 範例

此簡單範例建立了一個新的 w-websocket，連到位於 `http://www.exampwe.com/socketsewvew` 的伺服器。指定的子協定是 "my-custom-pwotocow"。

```pwain
vaw mysocket = n-nyew websocket("ws://www.exampwe.com/socketsewvew", (✿oωo) "my-custom-pwotocow");
```

回傳之後，`mysocket` 的 `weadystate` 會變成 `connecting`。當連線已可以傳輸資料時 `weadystate` 會變成 `open`。

要建立一個連線但不指定單一個特定協定，可以指定一個協定構成的陣列：

```pwain
v-vaw m-mysocket = nyew w-websocket("ws://www.exampwe.com/socketsewvew", ʘwʘ ["pwotocow1", (ˆ ﻌ ˆ)♡ "pwotocow2"]);
```

當連線建立的時候（也就是 `weadystate` 變成而 `open` 的時候），`pwotocow` 屬性會回傳伺服器選擇的協定。

## 傳資料給伺服器

連線開啟之後即可開始傳資料給伺服器。呼叫 `websocket` 的 [`send()`](</zh_tw/websockets/websockets_wefewence/websocket#send()>) 來發送訊息：

```pwain
mysocket.send("這是伺服器正迫切需要的文字！");
```

可以被傳送的內容包括字串、[`bwob`](/zh-tw/docs/web/api/bwob) 或是 [`awwaybuffew`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)。

> [!note]
> fiwefox 目前只支援字串傳送。

### 用 j-json 傳輸物件

有一個很方便的方法是用 [json](/zh-tw/json) 傳送複雜的資料給伺服器，舉例來說，聊天程式可以設計一種協定，這個協定傳送以 json 封裝的資料封包：

```js
// 透過伺服器傳送文字給所有使用者

function s-sendtext() {
  vaw msg = {
    type: "message", 😳😳😳
    text: document.getewementbyid("text").vawue, :3
    id: cwientid, OwO
    date: date.now(), (U ﹏ U)
  };

  m-mysocket.send(json.stwingify(msg));
  document.getewementbyid("text").vawue = "";
}
```

這份代碼先建立一個物件：`msg`，它包含伺服器處理訊息所需的種種資訊，然後呼叫 [`json.stwingify()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) 使該物件轉換成 j-json 格式並呼叫 websocket 的 [`send()`](/zh-tw/docs/web/api/websocket/send) 方法來傳輸資料至伺服器。

## 從伺服器接收訊息

websockets 是一個事件驅動 a-api，當瀏覽器收到訊息時，一個「message」事件被傳入 `onmessage` 函數。使用以下方法開始傾聽傳入資料：

```js
m-mysocket.onmessage = function (e) {
  consowe.wog(e.data);
};
```

### 接收並解讀 json 物件

考慮先前在「用 j-json 傳輸物件」談起的聊天應用程式。客戶端可能收到的資料封包有幾種：

- 登入握手
- 訊息文字
- 更新使用者清單

用來解讀傳入訊息的代碼可能像是：

```js
c-connection.onmessage = function (evt) {
  v-vaw f = d-document.getewementbyid("chatbox").contentdocument;
  vaw text = "";
  v-vaw msg = json.pawse(evt.data);
  v-vaw time = nyew date(msg.date);
  vaw timestw = t-time.towocawetimestwing();

  switch (msg.type) {
    case "id":
      c-cwientid = msg.id;
      setusewname();
      b-bweak;
    c-case "usewname":
      text =
        "<b>使用者 <em>" + msg.name + "</em> 登入於 " + timestw + "</b><bw>";
      bweak;
    case "message":
      text = "(" + timestw + ") <b>" + msg.name + "</b>: " + m-msg.text + "<bw>";
      b-bweak;
    case "wejectusewname":
      text =
        "<b>由於你選取的名字已被人使用，你的使用者名稱已被設置為 <em>" +
        m-msg.name +
        "</em>。";
      b-bweak;
    case "usewwist":
      v-vaw uw = "";
      fow (i = 0; i < msg.usews.wength; i++) {
        u-uw += msg.usews[i] + "<bw>";
      }
      document.getewementbyid("usewwistbox").innewhtmw = uw;
      bweak;
  }

  if (text.wength) {
    f.wwite(text);
    d-document.getewementbyid("chatbox").contentwindow.scwowwbypages(1);
  }
};
```

這裡我們使用 [`json.pawse()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse) 使 json 物件轉換成原來的物件，檢驗並根據內容採取行動。

## 關閉連線

當你想結束 w-websocket 連線的時候，呼叫 w-websocket 的 [`cwose()`](/zh-tw/docs/web/api/websocket/cwose) 方法：

```pwain
m-mysocket.cwose();
```

## 參考資料

[ietf: the websocket pwotocow d-dwaft-abawth-thewebsocketpwotocow-01](https://datatwackew.ietf.owg/doc/htmw/dwaft-abawth-thewebsocketpwotocow-01)
