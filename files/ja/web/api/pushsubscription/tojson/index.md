---
title: PushSubscription.toJSON()
slug: Web/API/PushSubscription/toJSON
---

{{SeeCompatTable}}{{APIRef("Push API")}}

{{domxref("PushSubscription")}} インターフェイスの **`toJSON()`** メソッドは、スタンダードなシリアライザーです：これは、便利なショートカットを提供するサブスクリプションプロパティの JSON 表記を返します。

## 構文

```js-nolint
mySubscription = subscription.toJSON()
```

### 引数

なし。

### 返値

JSON オブジェクト。現在、`endpoint` メンバーとしてサブスクリプションエンドポイントのみを含みます。

## 例

```js
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {
    var mySubscription = subscription.toJSON();
    // サブスクリプションの詳細を使用して何かを実行する。
  })
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PushSubscription.toJSON")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
