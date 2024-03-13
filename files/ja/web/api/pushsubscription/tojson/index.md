---
title: "PushSubscription: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/PushSubscription/toJSON
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Push API")}}

**`toJSON()`** は {{domxref("PushSubscription")}} インターフェイスの メソッドで、標準のシリアライザーです。これは、このサブスクリプションのプロパティの JSON 表現を返す、便利なショートカットを提供します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

JSON オブジェクトです。現在は、`endpoint` メンバーとしてサブスクリプションエンドポイントのみを含みます。

## 例

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const mySubscription = subscription.toJSON();
    // サブスクリプションの詳細を使用して何かを実行する
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
