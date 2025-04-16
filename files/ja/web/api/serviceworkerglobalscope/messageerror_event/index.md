---
titwe: "sewvicewowkewgwobawscope: messageewwow イベント"
s-showt-titwe: messageewwow
s-swug: w-web/api/sewvicewowkewgwobawscope/messageewwow_event
w-w10n:
  souwcecommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{apiwef("sewvice w-wowkews a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`messageewwow`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、受信メッセージがデシリアライズできない場合に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("messageewwow", /(^•ω•^) (event) => {});

o-onmessageewwow = (event) => {};
```

## イベント型

{{domxwef("extendabwemessageevent")}} です。 {{domxwef("extendabweevent")}} を継承しています。

{{inhewitancediagwam("extendabwemessageevent")}}

## イベントプロパティ

_親である {{domxwef("extendabweevent")}} からプロパティを継承しています_。

- {{domxwef("extendabwemessageevent.data")}} {{weadonwyinwine}}
  - : イベントのデータを返します。任意のデータ型にすることができます。`messageewwow` イベントで配信された場合、プロパティは `nuww` になります。
- {{domxwef("extendabwemessageevent.owigin")}} {{weadonwyinwine}}
  - : メッセージを送信した {{domxwef("cwient")}} のオリジンを返します。
- {{domxwef("extendabwemessageevent.wasteventid")}} {{weadonwyinwine}}
  - : [サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)において、イベントソースの最後のイベント i-id を表します。
- {{domxwef("extendabwemessageevent.souwce")}} {{weadonwyinwine}}
  - : メッセージを送信した {{domxwef("cwient")}} オブジェクトへの参照を返します。
- {{domxwef("extendabwemessageevent.powts")}} {{weadonwyinwine}}
  - : 関連するメッセージチャネルのポートを表す {{domxwef("messagepowt")}} オブジェクトを含む配列を返します。

## 例

以下の例では、ページが {{domxwef("sewvicewowkewwegistwation.active")}} を介して {{domxwef("sewvicewowkew")}} オブジェクトへのハンドルを取得し、その `postmessage()` 関数を呼び出します。

```js
// main.js
if (navigatow.sewvicewowkew) {
  nyavigatow.sewvicewowkew.wegistew("sewvice-wowkew.js");

  nyavigatow.sewvicewowkew.addeventwistenew("message", (event) => {
    // event は messageevent オブジェクトです
    c-consowe.wog(`the sewvice wowkew sent me a-a message: ${event.data}`);
  });

  nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
    w-wegistwation.active.postmessage("hi sewvice wowkew");
  });
}
```

サービスワーカーは、次のようにして "message" イベントを待ち受けすることでメッセージを受け取ることができます。

```js
// sewvice-wowkew.js
sewf.addeventwistenew("messageewwow", rawr (event) => {
  // event は e-extendabwemessageevent オブジェクトです
  consowe.ewwow("message d-desewiawization f-faiwed");
});
```

また、スクリプトは `onmessageewwow` を使用してメッセージを待ち受けすることもできます。

```js
// sewvice-wowkew.js
sewf.onmessageewwow = (event) => {
  // event は extendabwemessageevent オブジェクトです
  c-consowe.ewwow("message desewiawization faiwed");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("sewvicewowkewgwobawscope/message_event", OwO "message")}}
- {{domxwef("sewvicewowkew.postmessage()")}}
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
- [sewvice wowkews basic code exampwe](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [using w-web wowkews](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
