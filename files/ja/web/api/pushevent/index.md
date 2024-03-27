---
title: PushEvent
slug: Web/API/PushEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Push API")}}

**`PushEvent`** は[プッシュ API](/ja/docs/Web/API/Push_API) のインターフェイスで、受け取ったプッシュメッセージを表します。このイベントは、{{domxref("ServiceWorker")}} の [グローバルスコープ](/ja/docs/Web/API/ServiceWorkerGlobalScope)に送信されます。これは、アプリケーションサーバーから {{domxref("PushSubscription")}} に送信された情報を含みます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("PushEvent.PushEvent", "PushEvent()")}}
  - : 新しい `PushEvent` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{domxref("ExtendableEvent")}} からプロパティを継承しています。追加プロパティ：_

- {{domxref("PushEvent.data")}} {{ReadOnlyInline}}
  - : {{domxref("PushSubscription")}} に送信されたデータを含む {{domxref("PushMessageData")}} オブジェクトへの参照を返します。

## インスタンスメソッド

_親である {{domxref("ExtendableEvent")}} からメソッドを継承しています。_

## 例

次の例は、`PushEvent` からデータを取得して、すべてのサービスワーカークライアントで表示しています。

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

  const notification = new self.Notification(title, {
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

## 関連項目

- [プッシュ API](/ja/docs/Web/API/Push_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
