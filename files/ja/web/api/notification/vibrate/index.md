---
title: Notification.vibrate
slug: Web/API/Notification/vibrate
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

`vibrate` は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、通知が発行されたときに端末のバイブレーションハードウェアが出力する[バイブレーションパターン](/ja/docs/Web/API/Vibration_API#vibration_patterns)を指定します。これは {{domxref("Notification.Notification","Notification()")}} コンストラクターの `vibrate` オプションで指定されます。

## 値

[バイブレーションパターン](/ja/docs/Web/API/Vibration_API#vibration_patterns)で、これは[バイブレーション API 仕様書](https://w3c.github.io/vibration/)で定義されているものです。

## 例

次のスニペットは、端末の振動も発生させるような通知を作成するためのものです。シンプルな `options` オブジェクトが作成され、`Notification()` コンストラクターを使用して、通知が発行されます。

```js
const options = {
  body: "Do you like my body?",
  vibrate: [200, 100, 200],
};

const n = new Notification("Test notification", options);

console.log(n.vibrate); // should log [200,100,200]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
