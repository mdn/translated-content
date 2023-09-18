---
title: Notification.icon
slug: Web/API/Notification/icon
l10n:
  sourceCommit: d42b609444efb915ab46117f59985d67dda21eb6
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`icon`** は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの `icon` オプションで指定された、通知の一部として表示されるアイコンの URL を含みます。

## 値

文字列です。

## 例

[To-do リストアプリ](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（[ライブ実行のアプリを表示](https://mdn.github.io/dom-examples/to-do-notifications/)）では、 {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用して通知を発行し、希望する本文、アイコン、タイトルを指定するために引数を渡します。

```js
const notification = new Notification("To do list", {
  body: text,
  icon: img,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
