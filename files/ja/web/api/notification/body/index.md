---
title: Notification.body
slug: Web/API/Notification/body
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`body`** は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの `body` オプションで指定された通知の本文の文字列を返します。

## 値

文字列です。

## 例

```js
function spawnNotification(theBody, theIcon, theTitle) {
  const options = {
    body: theBody,
    icon: theIcon,
  };
  const n = new Notification(theTitle, options);

  console.log(n.body);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{DOMxRef("Notification.maxActions")}}
