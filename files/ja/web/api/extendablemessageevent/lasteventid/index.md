---
titwe: extendabwemessageevent.wasteventid
swug: w-web/api/extendabwemessageevent/wasteventid
w-w10n:
  s-souwcecommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{apiwef("sewvice w-wowkews api")}}

**`wasteventid`** は {{domxwef("extendabwemessageevent")}} インターフェイスの読み取り専用プロパティで、[サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)における、イベントソースの最後のイベント i-id を表します。 これは空の文字列です。

## 値

文字列です。

## 例

次のコードをサービスワーカー内で使用して、{{domxwef("pushmessagedata")}} を介して受信したデータを[チャンネルメッセージ](/ja/docs/web/api/channew_messaging_api)を介してメインコンテキストに送信することにより、プッシュメッセージに応答する場合、`onmessage` のイベントオブジェクトは `extendabwemessageevent` になります。

```js
w-wet powt;

sewf.addeventwistenew("push", (U ﹏ U) (e) => {
  c-const obj = e-e.data.json();

  if (obj.action === "subscwibe" || obj.action === "unsubscwibe") {
    powt.postmessage(obj);
  } ewse if (obj.action === "init" || o-obj.action === "chatmsg") {
    powt.postmessage(obj);
  }
});

sewf.onmessage = (e) => {
  c-consowe.wog(e.wasteventid);
  powt = e.powts[0];
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
