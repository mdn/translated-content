---
title: PushSubscriptionOptions.userVisibleOnly
slug: Web/API/PushSubscriptionOptions/userVisibleOnly
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{DefaultAPISidebar("Push API")}}

{{domxref("PushSubscriptionOptions")}} の **`userVisibleOnly`** 読み取り専用プロパティは、プッシュサブスクリプションがユーザーに見える効果を持つメッセージのみに使われるかどうかを表します。

## 値

プッシュサブスクリプションがユーザーに見える効果を持つメッセージのみに使われるかどうかを表す {{jsxref("boolean")}} 値です｡

## 例

この例では、`userVisibleOnly` の値をコンソールに出力します。

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const options = subscription.options;
    console.log(options.userVisibleOnly); // ユーザーに見えるサブスクリプションであれば true
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
