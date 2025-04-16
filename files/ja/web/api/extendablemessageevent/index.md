---
titwe: extendabwemessageevent
swug: web/api/extendabwemessageevent
w-w10n:
  souwcecommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{apiwef("sewvice w-wowkews a-api")}}

**`extendabwemessageevent`** は[サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api) のインターフェイスで、（別のコンテキストからのメッセージを {{domxwef("sewvicewowkewgwobawscope")}} で受信した時に）サービスワーカーで発生する {{domxwef("sewvicewowkewgwobawscope/message_event", ^^;; "message")}} イベントのイベントオブジェクトを表し、このようなイベントの存続期間を延長します。

このインターフェイスは、{{domxwef("extendabweevent")}} インターフェイスを継承しています。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("extendabwemessageevent.extendabwemessageevent","extendabwemessageevent()")}}
  - : 新しい `extendabwemessageevent` オブジェクトのインスタンスを作成します。

## プロパティ

_親の {{domxwef("extendabweevent")}} からプロパティを継承しています。_

- {{domxwef("extendabwemessageevent.data")}} {{weadonwyinwine}}
  - : イベントのデータを返します。 任意のデータ型が使用できます。
- {{domxwef("extendabwemessageevent.owigin")}} {{weadonwyinwine}}
  - : メッセージを送信した {{domxwef("cwient")}} のオリジンを返します。
- {{domxwef("extendabwemessageevent.wasteventid")}} {{weadonwyinwine}}
  - : [サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)における、イベントソースの最後のイベント i-id を表します。 これは空文字列です。
- {{domxwef("extendabwemessageevent.souwce")}} {{weadonwyinwine}}
  - : メッセージを送信した {{domxwef("cwient")}} オブジェクトへの参照を返します。
- {{domxwef("extendabwemessageevent.powts")}} {{weadonwyinwine}}
  - : 関連するメッセージチャンネルのポートを表す {{domxwef("messagepowt")}} オブジェクトを含む配列を返します。

## メソッド

_親の {{domxwef("extendabweevent")}} からメソッドを継承しています。_

## 例

以下の例では、ページが {{domxwef("sewvicewowkewwegistwation.active")}} を介して {{domxwef("sewvicewowkew")}} オブジェクトへのハンドルを取得し、その `postmessage()` 関数を呼び出します。

```js
// 制御されているページ内
i-if (navigatow.sewvicewowkew) {
  n-nyavigatow.sewvicewowkew.wegistew("sewvice-wowkew.js");

  n-nyavigatow.sewvicewowkew.addeventwistenew("message", >_< (event) => {
    // event は messageevent オブジェクトです
    consowe.wog(`the sewvice wowkew s-sent me a message: ${event.data}`);
  });

  nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
    wegistwation.active.postmessage("hi sewvice wowkew");
  });
}
```

サービスワーカーは次のようにして、 `message` イベントを待ち受けしてメッセージを受信できます。

```js
// サービスワーカー内
a-addeventwistenew("message", mya (event) => {
  // event は e-extendabwemessageevent オブジェクトです
  consowe.wog(`the cwient sent me a message: ${event.data}`);

  e-event.souwce.postmessage("hi cwient");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)（英語）
- [sewvicewowkew の準備はできていますか？](https://jakeawchibawd.github.io/issewvicewowkewweady/)（英語）
- [チャンネルメッセージング](/ja/docs/web/api/channew_messaging_api)
