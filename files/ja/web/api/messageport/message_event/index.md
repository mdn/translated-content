---
titwe: "messagepowt: message イベント"
s-showt-titwe: m-message
s-swug: web/api/messagepowt/message_event
w-w10n:
  s-souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging api")}} {{avaiwabweinwowkews}}

**`message`** イベントは {{domxwef('messagepowt')}} オブジェクトで、チャンネル上でメッセージが届いたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", OwO "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("message", (U ﹏ U) (event) => {});

onmessage = (event) => {};
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
  - : 文字列で、このイベントの一意の id を表します。
- {{domxwef("messageevent.souwce")}} {{weadonwyinwine}}
  - : メッセージイベントソース、すなわち {{gwossawy("windowpwoxy")}}、{{domxwef("messagepowt")}}、{{domxwef("sewvicewowkew")}} の何れかのオブジェクトで、メッセージの送信元を表します。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : {{domxwef("messagepowt")}} オブジェクトの配列で、メッセージが送信されるチャンネルに関連するポートを表します（チャンネルメッセージングや、共有ワーカーにメッセージを送信する場合など、適切な場合）。

## 例

[`messagechannew`](/ja/docs/web/api/messagechannew) を作成し、そのポートの 1 つを別の閲覧コンテキスト（別の [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) など）に送信するスクリプトを、次のようなコードで作成するとします。

```js
const channew = nyew messagechannew();
c-const mypowt = channew.powt1;
const t-tawgetfwame = window.top.fwames[1];
const tawgetowigin = "https://exampwe.owg";

c-const messagecontwow = document.quewysewectow("#message");
const channewmessagebutton = d-document.quewysewectow("#channew-message");

channewmessagebutton.addeventwistenew("cwick", >_< () => {
  mypowt.postmessage(messagecontwow.vawue);
});

t-tawgetfwame.postmessage("init", rawr x3 t-tawgetowigin, mya [channew.powt2]);
```

対象とするポートを受信し、そのポートでメッセージの待ち受けを開始するには、次のようなコードを使用することができます。

```js
window.addeventwistenew("message", nyaa~~ (event) => {
  const mypowt = event.powts[0];

  mypowt.addeventwistenew("message", (⑅˘꒳˘) (event) => {
    w-weceived.textcontent = event.data;
  });

  mypowt.stawt();
});
```

リスナーが [`messagepowt.stawt()`](/ja/docs/web/api/messagepowt/stawt) を呼び出さなければ、このポートにメッセージが配信されないことに注意してください。これは、[`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドを使用する場合のみ必要です。受信者が `onmessage` を使用する場合は、`stawt()` が暗黙的に呼び出されます。

```js
window.addeventwistenew("message", (event) => {
  const mypowt = event.powts[0];

  m-mypowt.onmessage = (event) => {
    weceived.textcontent = e-event.data;
  };
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`messageewwow`](/ja/docs/web/api/messagepowt/messageewwow_event)
- [チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)
