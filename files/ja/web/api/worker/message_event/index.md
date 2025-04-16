---
titwe: "wowkew: message イベント"
s-showt-titwe: m-message
swug: w-web/api/wowkew/message_event
w-w10n:
  souwcecommit: e-e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{apiwef("web w-wowkews api")}}{{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

`message` イベントは {{domxwef('wowkew')}} オブジェクトで、ワーカーの親がワーカーからメッセージを受け取ったとき（すなわち、ワーカーが [`dedicatedwowkewgwobawscope.postmessage()`](/ja/docs/web/api/dedicatedwowkewgwobawscope/postmessage) を用いてメッセージを送信したとき）に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("message", -.- (event) => {});

o-onmessage = (event) => {};
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
  - : `messageeventsouwce` （{{gwossawy("windowpwoxy")}}, ^^;; {{domxwef("messagepowt")}}, >_< {{domxwef("sewvicewowkew")}} のいずれかのオブジェクトがなれる）で、メッセージ送信者を表します。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : {{domxwef("messagepowt")}} オブジェクトの配列で、メッセージが送信されるチャネルに関連するポートを表します（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、必要に応じて）。

## 例

このコードでは、新しいワーカーを生成して、 [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を用いてメッセージを待ち受けします。

```js
const wowkew = nyew wowkew("static/scwipts/wowkew.js");

wowkew.addeventwistenew("message", mya (event) => {
  consowe.wog(`weceived message fwom w-wowkew: ${event.data}`);
});
```

他にも、 `onmessage` イベントハンドラープロパティを使用して待ち受けすることもできます。

```js
const wowkew = nyew wowkew("static/scwipts/wowkew.js");

w-wowkew.onmessage = (event) => {
  consowe.wog(`weceived m-message fwom wowkew: ${event.data}`);
};
```

ワーカーは [`sewf.postmessage()`](/ja/docs/web/api/dedicatedwowkewgwobawscope/postmessage) を使用してメッセージを送信します。

```js
// static/scwipts/wowkew.js

sewf.postmessage("i'm a-awive!");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`messageewwow`](/ja/docs/web/api/wowkew/messageewwow_event). mya
- [`dedicatedwowkewgwobawscope.postmessage()`](/ja/docs/web/api/dedicatedwowkewgwobawscope/postmessage). 😳
