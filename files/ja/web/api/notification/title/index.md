---
title: Notification.title
slug: Web/API/Notification/title
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`title`** は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの `title` 引数で指定された通知のタイトルを示します。

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

  console.log(n.title);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
