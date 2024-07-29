---
title: Notification.silent
slug: Web/API/Notification/silent
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

**`silent`** は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、通知が静かに行われるべきかどうか、すなわち、端末の設定に関わらず、音やバイブレーションを発生させないようにするかを指定します。これは {{domxref("Notification.Notification","Notification()")}} コンストラクターの `silent` オプションで指定されます。

## 値

論理値です。 `false` が既定値です。 `true` で通知を静かに行います。

## 例

次のスニペットは静かな通知を発行するためのものです。単純な `options` オブジェクトが生成され、通知が {{DOMxRef("Notification.Notification","Notification()")}} コンストラクターを使用して発行されます。

```js
const options = {
  body: "Do you like my body?",
  silent: true,
};

const n = new Notification("Test notification", options);

console.log(n.silent); // should log true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
