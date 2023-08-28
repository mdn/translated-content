---
title: PushSubscriptionOptions.applicationServerKey
slug: Web/API/PushSubscriptionOptions/applicationServerKey
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{DefaultAPISidebar("Push API")}}

{{domxref("PushSubscriptionOptions")}} インターフェイスの **`applicationServerKey`** 読み取り専用プロパティは、プッシュサーバーが用いる公開鍵です。

## 値

プッシュサーバーがプッシュサーバーを通じてクライアントアプリケーションにメッセージを送信するのに用いる公開鍵です｡この値は､アプリケーションサーバーで生成された署名用鍵ペアの一部であり､P-256 曲線上での楕円曲線デジタル署名 (ECDSA) で利用可能です｡

## 例

この例では、`applicationServerKey` の値をコンソールに出力します。

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const options = subscription.options;
    console.log(options.applicationServerKey); // 公開鍵
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
