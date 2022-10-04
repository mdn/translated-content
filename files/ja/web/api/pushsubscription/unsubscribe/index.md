---
title: PushSubscription.unsubscribe()
slug: Web/API/PushSubscription/unsubscribe
---

{{SeeCompatTable}}{{APIRef("Push API")}}

{{domxref("PushSubscription")}} インターフェースの `unsubscribe()` メソッドは、現在のサブスクリプションが成功裏に登録解除されたときに {{domxref("Boolean")}} で解決される{{domxref("Promise")}} を返します。

## 構文

```
​PushSubscription.unsubscribe().then(function(Boolean) { ... });
```

### パラメーター

なし。

### 戻り値

現在のサブスクリプションが成功裏に登録解除されたときに {{domxref("Boolean")}} で解決される{{domxref("Promise")}}。

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

## 仕様

| 仕様                                                                                                                         | 状態                         | コメント   |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------- |
| {{SpecName('Push API','#widl-PushSubscription-unsubscribe-Promise-boolean','unsubscribe()')}} | {{Spec2('Push API')}} | 初期定義。 |

## ブラウザ実装状況

{{Compat("api.PushSubscription.unsubscribe")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
- {{domxref("PushManager.getSubscription")}}
