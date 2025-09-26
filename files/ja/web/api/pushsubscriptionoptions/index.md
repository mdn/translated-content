---
title: PushSubscriptionOptions
slug: Web/API/PushSubscriptionOptions
l10n:
  sourceCommit: db72d5612ada1d40cde0de191389dde2fe062c23
---

{{DefaultAPISidebar("Push API")}}

{{domxref('Push API','','',' ')}} の **`PushSubscriptionOptions`** インターフェイスは、プッシュサブスクリプションに関連付いたオプションを表します。

{{domxref("PushSubscription")}} で {{domxref("PushSubscription.options")}} を呼ぶと、読み取り専用の `PushSubscriptionOptions` オブジェクトが返ります。このインターフェイスは自身のコンストラクターを持ちません。

## インスタンスプロパティ

- {{domxref("PushSubscriptionOptions.userVisibleOnly")}} {{ReadOnlyInline}}
  - : プッシュサブスクリプションがユーザーに見える効果を持つメッセージのみに使われるかどうかを表す {{jsxref("boolean")}} 値です｡
- {{domxref("PushSubscriptionOptions.applicationServerKey")}} {{ReadOnlyInline}}
  - : プッシュサーバーがプッシュサーバーを通じてクライアントアプリケーションにメッセージを送信するのに用いる公開鍵です。

## 例

{{domxref("PushSubscription")}} で {{domxref("PushSubscription.options")}} を呼ぶと、`PushSubscriptionOptions` オブジェクトが返ります。この例では、これをコンソールに出力します。

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const options = subscription.options;
    console.log(options); // PushSubscriptionOptions オブジェクト
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
