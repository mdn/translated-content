---
title: Notification.data
slug: Web/API/Notification/data
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`data`** は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの `data` オプションで指定された通知の構造化されたデータのクローンを返します。

通知のデータは、通知と関連付けたい任意のデータを使用することができます。

## 値

構造化されたクローン。

## 例

次のスニペットは通知を発行します。単純な `options` オブジェクトを生成し、それから `Notification()` コンストラクターを使用して通知を発行します。

```js
const options = {
  body: "Do you like my body?",
  data: "I like peas.",
};

const n = new Notification("Test notification", options);

console.log(n.data); // should return 'I like peas.'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
