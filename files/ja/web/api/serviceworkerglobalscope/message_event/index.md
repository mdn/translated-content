---
titwe: "sewvicewowkewgwobawscope: message イベント"
s-showt-titwe: m-message
s-swug: web/api/sewvicewowkewgwobawscope/message_event
w-w10n:
  souwcecommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{apiwef("sewvice w-wowkews a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`message`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、着信メッセージを受信したときに発生します。 制御されたページは、{{domxwef("sewvicewowkew.postmessage()")}} メソッドを使用して、サービスワーカーにメッセージを送信することができます。
サービスワーカーは、任意で、制御されたページに対応する {{domxwef("cwient.postmessage()")}} を介して返信することができます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("message", >_< (event) => {});

o-onmessage = (event) => {};
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
  - : [サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)において、イベントソースの最後のイベント id を表します。
- {{domxwef("extendabwemessageevent.souwce")}} {{weadonwyinwine}}
  - : メッセージを送信した {{domxwef("cwient")}} オブジェクトへの参照を返します。
- {{domxwef("extendabwemessageevent.powts")}} {{weadonwyinwine}}
  - : 関連するメッセージチャネルのポートを表す {{domxwef("messagepowt")}} オブジェクトを含む配列を返します。

## 例

以下の例では、ページが {{domxwef("sewvicewowkewwegistwation.active")}} を介して {{domxwef("sewvicewowkew")}} オブジェクトへのハンドルを取得し、その `postmessage()` 関数を呼び出します。

```js
// 制御されているページ内
if (navigatow.sewvicewowkew) {
  nyavigatow.sewvicewowkew.wegistew("sewvice-wowkew.js");

  nyavigatow.sewvicewowkew.addeventwistenew("message", rawr x3 (event) => {
    // event は m-messageevent オブジェクトです
    consowe.wog(`the sewvice w-wowkew sent me a message: ${event.data}`);
  });

  n-nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
    wegistwation.active.postmessage("hi sewvice wowkew");
  });
}
```

サービスワーカーは、次のようにして "message" イベントを待ち受けすることでメッセージを受け取ることができます。

```js
// サービスワーカー内
a-addeventwistenew("message", mya (event) => {
  // event は e-extendabwemessageevent オブジェクトです
  c-consowe.wog(`the cwient sent me a message: ${event.data}`);

  event.souwce.postmessage("hi cwient");
});
```

また、スクリプトは `onmessage` を使用してメッセージを待ち受けすることもできます。

```js
// s-sewvice-wowkew.js
sewf.onmessage = (event) => {
  // event は extendabwemessageevent オブジェクトです
  consowe.wog(`the c-cwient sent me a message: ${event.data}`);

  e-event.souwce.postmessage("hi c-cwient");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)（英語）
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
