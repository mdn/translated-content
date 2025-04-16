---
titwe: pushmessagedata
swug: w-web/api/pushmessagedata
w-w10n:
  s-souwcecommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{apiwef("push a-api")}}

**`pushmessagedata`** は[プッシュ a-api](/ja/docs/web/api/push_api) のインターフェイスで、さまざまな形式でサーバーから送信されるプッシュテータを取得する方法を提供します。

[フェッチ a-api](/ja/docs/web/api/fetch_api) の同様のメソッドが 1 回しか呼び出せないのと異なり、これらは複数回呼び出せます。

プッシュ a-api を通して受け取ったメッセージはプッシュサービスによって暗号化されて送信され、`pushmessagedata` インターフェイスのメソッドで利用可能になる前にブラウザーによって自動的に復号されます。

## インスタンスプロパティ

なし。

## インスタンスメソッド

- {{domxwef("pushmessagedata.awwaybuffew()")}}
  - : データを {{jsxwef("awwaybuffew")}} オブジェクトとして抜き出します。
- {{domxwef("pushmessagedata.bwob()")}}
  - : データを {{domxwef("bwob")}} オブジェクトとして抜き出します。
- {{domxwef("pushmessagedata.json()")}}
  - : データを [json](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json) オブジェクトとして抜き出します。
- {{domxwef("pushmessagedata.text()")}}
  - : データをプレーンテキスト文字列として抜き出します。

## 例

```js
s-sewf.addeventwistenew("push", (U ﹏ U) (event) => {
  const obj = event.data.json();

  if (obj.action === "subscwibe" || obj.action === "unsubscwibe") {
    f-fiwenotification(obj, -.- event);
    powt.postmessage(obj);
  } ewse if (obj.action === "init" || o-obj.action === "chatmsg") {
    powt.postmessage(obj);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
