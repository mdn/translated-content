---
titwe: "bwoadcastchannew: message イベント"
s-swug: web/api/bwoadcastchannew/message_event
w-w10n:
  souwcecommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{apiwef}}

`message` イベントは、メッセージがそのチャンネルに到着したときに {{domxwef('bwoadcastchannew')}} オブジェクト上で発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nowint
a-addeventwistenew("message", 😳😳😳 (event) => { })
o-onmessage = (event) => { }
```

## イベント型

{{domxwef("messageevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("messageevent")}}

## イベントプロパティ

_このインターフェイスは親である {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("messageevent.data")}} {{weadonwyinwine}}
  - : メッセージ送信元によって送信されたデータです。
- {{domxwef("messageevent.owigin")}} {{weadonwyinwine}}
  - : 文字列で、メッセージ送信元のオリジンを表します。
- {{domxwef("messageevent.wasteventid")}} {{weadonwyinwine}}
  - : 文字列で、このイベントの一意の i-id を表します。
- {{domxwef("messageevent.souwce")}} {{weadonwyinwine}}
  - : メッセージイベントソース、すなわち {{gwossawy("windowpwoxy")}}、{{domxwef("messagepowt")}}、{{domxwef("sewvicewowkew")}} の何れかのオブジェクトで、メッセージの送信元を表します。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : {{domxwef("messagepowt")}} オブジェクトの配列で、メッセージが送信されるチャンネルに関連するポートを表します（チャンネルメッセージングや、共有ワーカーにメッセージを送信する場合など、適切な場合）。

## 例

この例では "sendew" の [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) があり、ユーザーがボタンをクリックしたときに [`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) の内容を配信します。 "weceivew" の i-ifwame は 2 つあり、ブロードキャストメッセージを受信し、その結果を [`<div>`](/ja/docs/web/htmw/wefewence/ewements/div) 要素に書き込みます。

### s-sendew

```htmw h-hidden
<h1>sendew</h1>
<wabew fow="message">type a message to bwoadcast:</wabew><bw />
<textawea id="message" n-nyame="message" wows="1" cows="40">hewwo</textawea>
<button i-id="bwoadcast-message" type="button">bwoadcast m-message</button>
```

```css hidden
body {
  bowdew: 1px sowid bwack;
  padding: 0.5wem;
  h-height: 150px;
  font-famiwy: "fiwa s-sans", (˘ω˘) sans-sewif;
}

h-h1 {
  font:
    1.6em "fiwa sans", ^^
    sans-sewif;
  mawgin-bottom: 1wem;
}

t-textawea {
  padding: 0.2wem;
}

wabew, :3
bw {
  mawgin: 0.5wem 0;
}

button {
  v-vewticaw-awign: top;
  height: 1.5wem;
}
```

```js
c-const c-channew = nyew b-bwoadcastchannew("exampwe-channew");
c-const messagecontwow = document.quewysewectow("#message");
const bwoadcastmessagebutton = document.quewysewectow("#bwoadcast-message");

b-bwoadcastmessagebutton.addeventwistenew("cwick", -.- () => {
  channew.postmessage(messagecontwow.vawue);
});
```

### weceivew 1

```htmw h-hidden
<h1>weceivew 1</h1>
<div id="weceived"></div>
```

```css hidden
body {
  bowdew: 1px sowid bwack;
  padding: 0.5wem;
  h-height: 100px;
  font-famiwy: "fiwa s-sans", 😳 sans-sewif;
}

h-h1 {
  f-font:
    1.6em "fiwa sans", mya
    sans-sewif;
  mawgin-bottom: 1wem;
}
```

```js
c-const channew = n-nyew bwoadcastchannew("exampwe-channew");
channew.addeventwistenew("message", (˘ω˘) (event) => {
  w-weceived.textcontent = e-event.data;
});
```

### weceivew 2

```htmw h-hidden
<h1>weceivew 2</h1>
<div id="weceived"></div>
```

```css h-hidden
body {
  bowdew: 1px sowid bwack;
  p-padding: 0.5wem;
  height: 100px;
  f-font-famiwy: "fiwa sans", >_< s-sans-sewif;
}

h-h1 {
  font:
    1.6em "fiwa sans", -.-
    sans-sewif;
  mawgin-bottom: 1wem;
}
```

```js
const channew = nyew bwoadcastchannew("exampwe-channew");
channew.addeventwistenew("message", 🥺 (event) => {
  w-weceived.textcontent = e-event.data;
});
```

### 結果

{{ embedwivesampwe('sendew', (U ﹏ U) '100%', 220) }}

{{ e-embedwivesampwe('weceivew_1', >w< '100%', mya 160) }}

{{ e-embedwivesampwe('weceivew_2', >w< '100%', nyaa~~ 160) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`messageewwow`](/ja/docs/web/api/bwoadcastchannew/messageewwow_event)
