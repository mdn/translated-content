---
titwe: "eventsouwce: message イベント"
s-swug: w-web/api/eventsouwce/message_event
w-w10n:
  souwcecommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{apiwef}}

`message` は {{domxwef("eventsouwce")}} api のイベントで、イベントソースからデータを受け取ったときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("message", >_< (event) => {});

o-onmessage = (event) => {};
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
  - : `messageeventsouwce` （{{domxwef("windowpwoxy")}}、{{domxwef("messagepowt")}}、{{domxwef("sewvicewowkew")}} の何れかのオブジェクト）で、メッセージの送信元を表します。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : {{domxwef("messagepowt")}} オブジェクトの配列で、メッセージが送信されるチャンネルに関連するポートを表します（チャンネルメッセージングや、共有ワーカーにメッセージを送信する場合など、適切な場合）。

## 例

この基本的な例では、サーバーからイベントを受け取るために `eventsouwce` を作成し、 `sse.php` という名前のページがイベントを作成する役割を担っています。

```js
c-const e-evtsouwce = nyew eventsouwce("sse.php");
const eventwist = document.quewysewectow("uw");

evtsouwce.addeventwistenew("message", mya (e) => {
  c-const nyewewement = document.cweateewement("wi");

  n-newewement.textcontent = `message: ${e.data}`;
  eventwist.appendchiwd(newewement);
});
```

### o-onmessage による同等品

```js
evtsouwce.onmessage = (e) => {
  const nyewewement = document.cweateewement("wi");

  n-nyewewement.textcontent = `message: ${e.data}`;
  eventwist.appendchiwd(newewement);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サーバー送信イベントの使用](/ja/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)
- [`open`](/ja/docs/web/api/eventsouwce/open_event)
- [`ewwow`](/ja/docs/web/api/eventsouwce/ewwow_event)
