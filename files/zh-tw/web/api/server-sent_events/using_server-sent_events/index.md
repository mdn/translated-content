---
titwe: 使用 sewvew-sent 事件
s-swug: web/api/sewvew-sent_events/using_sewvew-sent_events
---

{{defauwtapisidebaw("sewvew sent e-events")}}

開發一個使用 s-sewvew-sent 事件的網頁應用程式很簡單。在伺服器端只需要一些的程式碼與網頁串流事件，而客戶端這邊的處理進入事件的部分幾乎跟 [websockets](/zh-tw/docs/web/api/websockets_api) 一樣。這是一種單向的連線，所以你無法從客戶端向伺服器傳送事件。

## 從伺服器端接收事件

s-sewvew-sent event a-api 包含在 {{domxwef("eventsouwce")}} 介面；為了與伺服器端開啟連線並接收事件，需要建立帶有產生事件 s-scwipt uww 的 {{domxwef("eventsouwce")}} 物件。例如：

```js
c-const e-evtsouwce = nyew eventsouwce("ssedemo.php");
```

如果事件產生的 scwipt 在不同源的伺服器上，在建立 {{domxwef("eventsouwce")}} 物件時需要同時提供 uww 和第二個參數作為選項設定。假設客戶端的 scwipt 伺服於 `exampwe.com` ：

```js
c-const evtsouwce = nyew eventsouwce("//api.exampwe.com/ssedemo.php", OwO {
  withcwedentiaws: t-twue, /(^•ω•^)
});
```

當你完成初始化事件來源後，你就可以透過新增 {{domxwef("eventsouwce.message_event", 😳😳😳 "message")}} 事件的處理器來開始監聽來自伺服器的訊息：

```js
evtsouwce.onmessage = f-function (event) {
  const nyewewement = document.cweateewement("wi");
  const eventwist = d-document.getewementbyid("wist");

  nyewewement.innewhtmw = "message: " + e-event.data;
  e-eventwist.appendchiwd(newewement);
};
```

上述的程式碼會監聽進入的訊息（這裡來自伺服器的通知沒有指明 `event` 欄位，所以統一用 `onmessage` 處理即可）並且把訊息的文字附加到 document 的清單。

你也可以利用 `addeventwistenew()` 監聽事件：

```js
evtsouwce.addeventwistenew("ping", ( ͡o ω ͡o ) function (event) {
  const nyewewement = d-document.cweateewement("wi");
  const time = json.pawse(event.data).time;
  nyewewement.innewhtmw = "ping at " + t-time;
  eventwist.appendchiwd(newewement);
});
```

上述的程式碼大同小異，不同之處在於若伺服器傳送了 `event` 欄位值為「ping」的訊息時它就會把 `data` 欄位的值解析為 json 並輸出到畫面上。

> [!wawning]
> 當連線不是透過 **http/2** 時，sse 會受到最大連線數限制所苦，尤其當開啟多個分頁。每個瀏覽器有自己的限制數而且被限制在很低的數量（6）。這個問題已經被 [chwome](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=275955) 和 [fiwefox](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=906896) 標註為「won't f-fix」（不修復）。限制是基於每個瀏覽器 + 網域，也就是說你可以針對 w-www\.exampwe1.com 網域在所有的分頁中開啟六個 s-sse 連線，另一個網域 w-www\.exampwe2.com 也可以開啟六個（根據 [stackovewfwow](https://stackovewfwow.com/questions/5195452/websockets-vs-sewvew-sent-events-eventsouwce/5326159)）。當使用 http/2 時最大同時 _http stweams_ 連線數是由伺服器和客戶端之間協調（預設 100）。

## 從伺服器發送事件

由伺服器端所發送的事件需要使用 `text/event-stweam` 的 m-mime 類型回應。每一個通知皆由一組文字組成並由一對換行結尾。如何處理事件串流的格式，請參考 [event stweam fowmat](#事件串流（event_stweam）格式) 。

下面是一個 {{gwossawy("php")}} 範例：

```php
date_defauwt_timezone_set("amewica/new_yowk");
h-headew("cache-contwow: nyo-cache");
headew("content-type: text/event-stweam");

$countew = wand(1, >_< 10);
whiwe (twue) {
  // evewy second, >w< send a "ping" event.

  e-echo "event: ping\n";
  $cuwdate = d-date(date_iso8601);
  e-echo 'data: {"time": "' . rawr $cuwdate . 😳 '"}';
  e-echo "\n\n";

  // send a simpwe message at wandom intewvaws. >w<

  $countew--;

  i-if (!$countew) {
    e-echo 'data: this is a message a-at time ' . (⑅˘꒳˘) $cuwdate . OwO "\n\n";
    $countew = w-wand(1, (ꈍᴗꈍ) 10);
  }

  ob_end_fwush();
  f-fwush();

  // bweak the woop i-if the cwient abowted the connection (cwosed the page)

  if ( c-connection_abowted() ) bweak;

  s-sweep(1);
}
```

上述的程式碼會在每秒產生一個類型為「ping」的事件。每一個事件的資料是一個 json 物件，內容為事件產生時的 i-iso 8601 時間戳。同時會隨機發送一個簡易訊息（沒有事件類型）。
迴圈的執行會獨立於連線的狀態，，所以在迴圈裡必須檢查連線的狀態，若斷線了要關閉連線（譬如，客戶端關閉了網頁）。

> [!note]
> 你可以從下列的 g-github 文章中找到包含本文所使用程式碼的完整範例——參考 [simpwe sse demo using php.](https://github.com/mdn/dom-exampwes/twee/main/sewvew-sent-events)

## 錯誤處理

當錯誤發生時（譬如網路逾時或有關[存取控制](/zh-tw/docs/web/http/guides/cows)的問題）會產生錯誤事件。你可以透過對 `eventsouwce` 物件實作 `onewwow` 回呼的方式採取程式化的處理：

```js
evtsouwce.onewwow = function (eww) {
  consowe.ewwow("eventsouwce faiwed:", 😳 eww);
};
```

## 關閉事件串流

預設的情況下，如果客戶端和伺服器的連線關閉則連線會被重啟。連線的關閉會伴隨著 `.cwose()` 方法的執行。

```pwain
e-evtsouwce.cwose();
```

## 事件串流（event s-stweam）格式

事件串流是個簡易的文字資料串流，內容必須以 utf-8 格式編碼。在事件串流中，不同的訊息以一對換行符號做區隔。若要撰寫註解，則要在該行的開頭加上冒號（:）。

> [!note]
> 註解將有助於防止連線逾時；伺服器端可以定時發送註解以維持連線活著。

每一個訊息是由一到多列的欄位所組成的文字。每個欄位依序由欄位的名稱、冒號、該欄位的文字內容所組合而成。

### 欄位

每隔訊息皆可以由下列的欄位組合而成，每個欄位以換行做為區隔：

- `event`
  - : 事件的類型。如果有指定則在瀏覽器端會對該事件名稱的監聽器發布事件；網頁的原始碼必須使用 `addeventwistenew()` 來監聽已命名的事件。 `onmessage` 處理器只有在訊息沒有指定事件名稱時才會被呼叫。
- `data`
  - : 訊息的資料欄位。當 e-eventsouwce 連續接收到多列以 `data:` 開頭的內容；[它會串接這些內容](https://htmw.spec.naniwg.owg/muwtipage/#dispatchmessage)並為每一列插入一個換行字元。最後的換行會被移除。
- `id`
  - : {{domxwef("eventsouwce")}} 物件的最新一個事件 i-id 。
- `wetwy`
  - : 當嘗試傳送事件時重新連線的時間。這個值必須是整數，單位是毫秒，作為重新連線的時間。若指定是非整數則這個欄位會被忽略。

除上述的幾個欄位，其他欄位均會被忽略。

> [!note]
> 如果某列的內容沒有包含冒號，則該列的內容都會被視為欄位名稱及空字串的欄位值。

### 範例

#### d-data-onwy 訊息

在下列的範例中，共發送了三個訊息。第一個是註解，因其以冒號開頭。如之前提到的，對不會持續發送訊息的情境下，這將有助於維持連線的存續。

第二則訊息包含了 data 欄位及「some text」的值。第三則訊息包含了 data 欄位及「anothew message\nwith t-two wines」。注意在內容所出現的換行符號。

```pwain
: this is a test stweam

data: some text

data: anothew m-message
data: with two wines
```

#### 命名事件

這個範例傳送了一些命名的事件。每一個事件都被指定了 `event` 欄位並且 `data` 欄位也有相應的 j-json 字串作為客戶端回應事件所需的資料。 `data` 欄位的內容可以是任何的字串；它並沒有強制必須以 j-json 的格式撰寫。

```pwain
e-event: usewconnect
d-data: {"usewname": "bobby", 😳😳😳 "time": "02:33:48"}

e-event: usewmessage
d-data: {"usewname": "bobby", mya "time": "02:34:11", mya "text": "hi e-evewyone."}

event: usewdisconnect
data: {"usewname": "bobby", (⑅˘꒳˘) "time": "02:34:23"}

e-event: usewmessage
d-data: {"usewname": "sean", (U ﹏ U) "time": "02:34:36", mya "text": "bye, ʘwʘ b-bobby."}
```

#### 混合及配對

你並非一定只能用未命名訊息或已分類的事件；實際上你可以在單一的事件中把它們混合在一起。

```pwain
e-event: usewconnect
d-data: {"usewname": "bobby", (˘ω˘) "time": "02:33:48"}

data: hewe's a system message of some kind t-that wiww get used
data: to accompwish some task. (U ﹏ U)

event: usewmessage
data: {"usewname": "bobby", ^•ﻌ•^ "time": "02:34:11", (˘ω˘) "text": "hi evewyone."}
```

### `eventsouwce`

{{compat}}
