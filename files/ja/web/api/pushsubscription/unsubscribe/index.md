---
title: "PushSubscription: unsubscribe() メソッド"
short-title: unsubscribe()
slug: Web/API/PushSubscription/unsubscribe
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Push API")}}

`unsubscribe()` は {{domxref("PushSubscription")}} インターフェイスのメソッドで、現在のサブスクリプションから脱退に成功したときに論理値で解決される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
unsubscribe()
```

### 引数

なし。

### 返値

現在のサブスクリプションから脱退に成功したときに論理値で解決される {{jsxref("Promise")}} です。

## 例

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    subscription
      .unsubscribe()
      .then((successful) => {
        // 登録脱退が成功
      })
      .catch((e) => {
        // 登録脱退が失敗
      });
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- {{domxref("PushManager.getSubscription")}}
