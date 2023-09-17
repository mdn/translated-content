---
title: "PushEvent: data プロパティ"
short-title: data
slug: Web/API/PushEvent/data
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Push API")}}

`data` は **`PushEvent`** インターフェイスの読み取り専用プロパティで、{{domxref("PushSubscription")}} に送信されたデータを含む {{domxref("PushMessageData")}} オブジェクトへの参照を返します。

## 値

{{domxref("PushMessageData")}} オブジェクトです。

## 例

次の例は、 `PushEvent` からデータを取得して、すべてのサービスワーカークライアントで表示しています。

```js
self.addEventListener("push", (event) => {
  if (!(self.Notification && self.Notification.permission === "granted")) {
    return;
  }

  const data = event.data?.json() ?? {};
  const title = data.title || "Something Has Happened";
  const message =
    data.message || "Here's something you might want to check out.";
  const icon = "images/new-notification.png";

  const notification = new Notification(title, {
    body: message,
    tag: "simple-push-demo-notification",
    icon,
  });

  notification.addEventListener("click", () => {
    clients.openWindow(
      "https://example.blog.com/2015/03/04/something-new.html",
    );
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
