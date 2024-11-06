---
title: "PushSubscription: endpoint プロパティ"
short-title: endpoint
slug: Web/API/PushSubscription/endpoint
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Push API")}}

**`endpoint`** は {{domxref("PushSubscription")}} インターフェイスの読み取り専用プロパティで、プッシュサブスクリプションに関連するエンドポイントの入った文字列を返します。

エンドポイントはカスタム URL の形式を取り、プッシュサービスに加入している特定のサービスワーカーにプッシュメッセージを送信するために使用するプッシュサーバーを指します。このため、他者がこれをハイジャックしてプッシュ機能を乱用しないように、エンドポイントは秘匿しておくことが大切です。

## 値

文字列です。

## 例

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.subscribe({ userVisibleOnly: true }).then((subscription) => {
    console.log(subscription.endpoint);

    // この時点で、サブスクリプションエンドポイントをサーバーに送信し、
    // 保存した後、後でプッシュメッセージを送信するために使用します。
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
