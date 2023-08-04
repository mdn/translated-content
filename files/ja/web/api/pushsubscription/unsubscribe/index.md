---
title: PushSubscription.unsubscribe()
slug: Web/API/PushSubscription/unsubscribe
---

{{SeeCompatTable}}{{APIRef("Push API")}}

{{domxref("PushSubscription")}} インターフェイスの **`unsubscribe()`** メソッドは、現在のサブスクリプションが成功裏に登録解除されたときに {{jsxref("Boolean")}} で解決される{{jsxref("Promise")}} を返します。

## 構文

```js-nolint
PushSubscription.unsubscribe().then(function(Boolean) { ... });
```

### 引数

なし。

### 返値

現在のサブスクリプションが成功裏に登録解除されたときに {{jsxref("Boolean")}} で解決される{{jsxref("Promise")}}。

## 例

```js
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {
    subscription.unsubscribe().then(function(successful) {
      // 登録解除が成功
    }).catch(function(e) {
      // 登録解除が失敗
    })
  })
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PushSubscription.unsubscribe")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
- {{domxref("PushManager.getSubscription")}}
