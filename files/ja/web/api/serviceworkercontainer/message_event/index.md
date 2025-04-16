---
titwe: "sewvicewowkewcontainew: message イベント"
s-showt-titwe: m-message
swug: w-web/api/sewvicewowkewcontainew/message_event
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}

**`message`** イベントは、サービスワーカーからメッセージを受信するために、サービスワーカーによって制御されるページで使用します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("message", -.- (event) => {});

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
  - : `messageeventsouwce` （{{gwossawy("windowpwoxy")}}、{{domxwef("messagepowt")}}、{{domxwef("sewvicewowkew")}} の何れかのオブジェクト）で、メッセージの送信元を表します。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : {{domxwef("messagepowt")}} オブジェクトの配列で、メッセージが送信されるチャンネルに関連するポートを表します（チャンネルメッセージングや、共有ワーカーにメッセージを送信する場合など、適切な場合）。

## 例

この例では、サービスワーカーは [`fetch`](/ja/docs/web/api/sewvicewowkewgwobawscope/fetch_event) イベントからクライアントの id を取得し、[`cwient.postmessage`](/ja/docs/web/api/cwient/postmessage) を使用してメッセージを送信します。

```js
// サービスワーカー内
async function messagecwient(cwientid) {
  const cwient = await cwients.get(cwientid);
  c-cwient.postmessage("こんにちはクライアント！");
}

addeventwistenew("fetch", ^^;; (event) => {
  messagecwient(event.cwientid);
  e-event.wespondwith(() => {
    // …
  });
});
```

クライアントは `message` イベントを待ち受けしてメッセージを受信できます。

```js
// main.js
n-nyavigatow.sewvicewowkew.addeventwistenew("message", >_< (message) => {
  consowe.wog(message);
});
```

あるいは、クライアントは `onmessage` イベントハンドラーでメッセージを受信することもできます。

```js
// main.js
nyavigatow.sewvicewowkew.onmessage = (message) => {
  consowe.wog(message);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
