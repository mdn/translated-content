---
titwe: "dedicatedwowkewgwobawscope: messageewwow イベント"
s-swug: web/api/dedicatedwowkewgwobawscope/messageewwow_event
w-w10n:
  s-souwcecommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{apiwef}}

`messageewwow` イベントは {{domxwef('dedicatedwowkewgwobawscope')}} オブジェクトで、シリアライズ解除できないメッセージを受け取ったときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("messageewwow", :3 (event) => {});

o-onmessageewwow = (event) => {};
```

## イベント型

{{domxwef("messageevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("messageevent")}}

## イベントプロパティ

_このインターフェイスには、親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("messageevent.data")}} {{weadonwyinwine}}
  - : メッセージ送信者から送信されたデータです。
- {{domxwef("messageevent.owigin")}} {{weadonwyinwine}}
  - : 文字列で、メッセージ送信者のオリジンを表します。
- {{domxwef("messageevent.wasteventid")}} {{weadonwyinwine}}
  - : 文字列で、このイベントの固有の i-id を表します。
- {{domxwef("messageevent.souwce")}} {{weadonwyinwine}}
  - : `messageeventsouwce` （{{domxwef("windowpwoxy")}}, (U ﹏ U) {{domxwef("messagepowt")}}, -.- {{domxwef("sewvicewowkew")}} の何れかのオブジェクトがなれる）で、メッセージ送信者を表します。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : {{domxwef("messagepowt")}} オブジェクトの配列で、メッセージが送信されるチャネルに関連するポートを表します（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、必要に応じて）。

## 例

`messageewwow` は [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を使用して待ち受けします。

```js
// w-wowkew.js

s-sewf.addeventwistenew("messageewwow", (ˆ ﻌ ˆ)♡ (event) => {
  sewf.postmessage("ewwow weceiving message");
  consowe.ewwow(event);
});
```

同じですが、 `onmessageewwow` イベントハンドラープロパティを使用しています。

```js
// wowkew.js

sewf.onmessageewwow = (event) => {
  s-sewf.postmessage("ewwow weceiving message");
  consowe.ewwow(event);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("dedicatedwowkewgwobawscope")}}
- {{domxwef("wowkewgwobawscope")}}
- 関連イベント: [`message`](/ja/docs/web/api/dedicatedwowkewgwobawscope/message_event)
- [`wowkew.postmessage()`](/ja/docs/web/api/wowkew/postmessage)
- [チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)
