---
title: 使用 server-sent 事件
slug: Web/API/Server-sent_events/Using_server-sent_events
---

{{DefaultAPISidebar("Server Sent Events")}}

開發一個使用 server-sent 事件的網頁應用程式很簡單。在伺服器端只需要一些的程式碼與網頁串流事件，而客戶端這邊的處理進入事件的部分幾乎跟 [websockets](/zh-TW/docs/Web/API/WebSockets_API) 一樣。這是一種單向的連線，所以你無法從客戶端向伺服器傳送事件。

## 從伺服器端接收事件

server-sent event API 包含在 {{domxref("EventSource")}} 介面；為了與伺服器端開啟連線並接收事件，需要建立帶有產生事件 script URL 的 {{domxref("EventSource")}} 物件。例如：

```js
const evtSource = new EventSource("ssedemo.php");
```

如果事件產生的 script 在不同源的伺服器上，在建立 {{domxref("EventSource")}} 物件時需要同時提供 URL 和第二個參數作為選項設定。假設客戶端的 script 伺服於 `example.com` ：

```js
const evtSource = new EventSource("//api.example.com/ssedemo.php", {
  withCredentials: true,
});
```

當你完成初始化事件來源後，你就可以透過新增 {{domxref("EventSource.message_event", "message")}} 事件的處理器來開始監聽來自伺服器的訊息：

```js
evtSource.onmessage = function (event) {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.innerHTML = "message: " + event.data;
  eventList.appendChild(newElement);
};
```

上述的程式碼會監聽進入的訊息（這裡來自伺服器的通知沒有指明 `event` 欄位，所以統一用 `onmessage` 處理即可）並且把訊息的文字附加到 document 的清單。

你也可以利用 `addEventListener()` 監聽事件：

```js
evtSource.addEventListener("ping", function (event) {
  const newElement = document.createElement("li");
  const time = JSON.parse(event.data).time;
  newElement.innerHTML = "ping at " + time;
  eventList.appendChild(newElement);
});
```

上述的程式碼大同小異，不同之處在於若伺服器傳送了 `event` 欄位值為「ping」的訊息時它就會把 `data` 欄位的值解析為 JSON 並輸出到畫面上。

> [!WARNING]
> 當連線不是透過 **HTTP/2** 時，SSE 會受到最大連線數限制所苦，尤其當開啟多個分頁。每個瀏覽器有自己的限制數而且被限制在很低的數量（6）。這個問題已經被 [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=275955) 和 [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=906896) 標註為「Won't fix」（不修復）。限制是基於每個瀏覽器 + 網域，也就是說你可以針對 www\.example1.com 網域在所有的分頁中開啟六個 SSE 連線，另一個網域 www\.example2.com 也可以開啟六個（根據 [Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)）。當使用 HTTP/2 時最大同時 _HTTP streams_ 連線數是由伺服器和客戶端之間協調（預設 100）。

## 從伺服器發送事件

由伺服器端所發送的事件需要使用 `text/event-stream` 的 MIME 類型回應。每一個通知皆由一組文字組成並由一對換行結尾。如何處理事件串流的格式，請參考 [Event stream format](#事件串流（event_stream）格式) 。

下面是一個 {{Glossary("PHP")}} 範例：

```php
date_default_timezone_set("America/New_York");
header("Cache-Control: no-cache");
header("Content-Type: text/event-stream");

$counter = rand(1, 10);
while (true) {
  // Every second, send a "ping" event.

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // Send a simple message at random intervals.

  $counter--;

  if (!$counter) {
    echo 'data: This is a message at time ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  ob_end_flush();
  flush();

  // Break the loop if the client aborted the connection (closed the page)

  if ( connection_aborted() ) break;

  sleep(1);
}
```

上述的程式碼會在每秒產生一個類型為「ping」的事件。每一個事件的資料是一個 JSON 物件，內容為事件產生時的 ISO 8601 時間戳。同時會隨機發送一個簡易訊息（沒有事件類型）。
迴圈的執行會獨立於連線的狀態，，所以在迴圈裡必須檢查連線的狀態，若斷線了要關閉連線（譬如，客戶端關閉了網頁）。

> [!NOTE]
> 你可以從下列的 Github 文章中找到包含本文所使用程式碼的完整範例——參考 [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## 錯誤處理

當錯誤發生時（譬如網路逾時或有關[存取控制](/zh-TW/docs/Web/HTTP/CORS)的問題）會產生錯誤事件。你可以透過對 `EventSource` 物件實作 `onerror` 回呼的方式採取程式化的處理：

```js
evtSource.onerror = function (err) {
  console.error("EventSource failed:", err);
};
```

## 關閉事件串流

預設的情況下，如果客戶端和伺服器的連線關閉則連線會被重啟。連線的關閉會伴隨著 `.close()` 方法的執行。

```plain
evtSource.close();
```

## 事件串流（Event Stream）格式

事件串流是個簡易的文字資料串流，內容必須以 UTF-8 格式編碼。在事件串流中，不同的訊息以一對換行符號做區隔。若要撰寫註解，則要在該行的開頭加上冒號（:）。

> [!NOTE]
> 註解將有助於防止連線逾時；伺服器端可以定時發送註解以維持連線活著。

每一個訊息是由一到多列的欄位所組成的文字。每個欄位依序由欄位的名稱、冒號、該欄位的文字內容所組合而成。

### 欄位

每隔訊息皆可以由下列的欄位組合而成，每個欄位以換行做為區隔：

- `event`
  - : 事件的類型。如果有指定則在瀏覽器端會對該事件名稱的監聽器發布事件；網頁的原始碼必須使用 `addEventListener()` 來監聽已命名的事件。 `onmessage` 處理器只有在訊息沒有指定事件名稱時才會被呼叫。
- `data`
  - : 訊息的資料欄位。當 EventSource 連續接收到多列以 `data:` 開頭的內容；[它會串接這些內容](https://html.spec.whatwg.org/multipage/#dispatchMessage)並為每一列插入一個換行字元。最後的換行會被移除。
- `id`
  - : {{domxref("EventSource")}} 物件的最新一個事件 ID 。
- `retry`
  - : 當嘗試傳送事件時重新連線的時間。這個值必須是整數，單位是毫秒，作為重新連線的時間。若指定是非整數則這個欄位會被忽略。

除上述的幾個欄位，其他欄位均會被忽略。

> [!NOTE]
> 如果某列的內容沒有包含冒號，則該列的內容都會被視為欄位名稱及空字串的欄位值。

### 範例

#### Data-only 訊息

在下列的範例中，共發送了三個訊息。第一個是註解，因其以冒號開頭。如之前提到的，對不會持續發送訊息的情境下，這將有助於維持連線的存續。

第二則訊息包含了 data 欄位及「some text」的值。第三則訊息包含了 data 欄位及「another message\nwith two lines」。注意在內容所出現的換行符號。

```plain
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### 命名事件

這個範例傳送了一些命名的事件。每一個事件都被指定了 `event` 欄位並且 `data` 欄位也有相應的 JSON 字串作為客戶端回應事件所需的資料。 `data` 欄位的內容可以是任何的字串；它並沒有強制必須以 JSON 的格式撰寫。

```plain
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
```

#### 混合及配對

你並非一定只能用未命名訊息或已分類的事件；實際上你可以在單一的事件中把它們混合在一起。

```plain
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Here's a system message of some kind that will get used
data: to accomplish some task.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

### `EventSource`

{{Compat}}
