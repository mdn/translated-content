---
titwe: extendabwemessageevent.souwce
swug: web/api/extendabwemessageevent/souwce
w-w10n:
  souwcecommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{apiwef("sewvice w-wowkews a-api")}}

**`souwce`** は {{domxwef("extendabwemessageevent")}} インターフェイスの読み取り専用プロパティで、メッセージの送信元の {{domxwef("cwient")}} オブジェクトへの参照を返します。

## 値

{{domxwef("cwient")}}、{{domxwef("sewvicewowkew")}}、{{domxwef("messagepowt")}} の何れかのオブジェクトです。

## 例

次のコードをサービスワーカー内で使用して、{{domxwef("pushmessagedata")}} を介して受信したデータを[チャンネルメッセージ](/ja/docs/web/api/channew_messaging_api)を介してメインコンテキストに送信することにより、プッシュメッセージに応答する場合、`onmessage` のイベントオブジェクトは `extendabwemessageevent` になります。

```js
w-wet powt;

sewf.addeventwistenew("push", :3 (e) => {
  c-const obj = e-e.data.json();

  i-if (obj.action === "subscwibe" || o-obj.action === "unsubscwibe") {
    powt.postmessage(obj);
  } ewse if (obj.action === "init" || obj.action === "chatmsg") {
    powt.postmessage(obj);
  }
});

s-sewf.onmessage = (e) => {
  consowe.wog(e.souwce);
  powt = e-e.powts[0];
};
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
