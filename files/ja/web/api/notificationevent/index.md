---
title: NotificationEvent
slug: Web/API/NotificationEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

**`NotificationEvent`** は{{domxref("Notifications API", "通知 API", "", "nocode")}}のインターフェイスで、サービスワーカー ({{domxref("ServiceWorker")}}) の {{domxref("ServiceWorkerGlobalScope")}} で配信される通知イベントを表します。

このインターフェイスは {{domxref("ExtendableEvent")}} インターフェイスを継承しています。

> [!NOTE]
> {{domxref("ServiceWorkerGlobalScope")}} オブジェクトで発行される持続的な通知イベントのみが、`NotificationEvent`インターフェイスを実装します。{{domxref("Notification")}} オブジェクトで発行される非持続的な通知イベントは、`Event`インターフェイスを実装します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("NotificationEvent.NotificationEvent","NotificationEvent()")}}
  - : 新しい `NotificationEvent` オブジェクトを作成します。

## インスタンスプロパティ

_親インターフェイスである {{domxref("ExtendableEvent")}} から継承したプロパティもあります。_

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : イベントを発生させるためにクリックされた通知を表す {{domxref("Notification")}} オブジェクトを返します。
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : ユーザーがクリックした通知ボタンの文字列 ID を返します。ユーザーがアクションボタン以外の場所で通知をクリックした場合、または通知にボタンがない場合、この値は空の文字列を返します。

## インスタンスメソッド

_親インターフェイスである {{domxref("ExtendableEvent")}} から継承したメソッドもあります。_

## 例

```js
self.addEventListener("notificationclick", (event) => {
  console.log(`On notification click: ${event.notification.tag}`);
  event.notification.close();

  // これは、現在のページが既に開いているかどうかを確認し、
  // そうならばフォーカスします
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## 仕様書

{{Specifications}}

> [!NOTE]
> このインターフェイスは[通知 API](/ja/docs/Web/API/Notifications_API) で定義されていますが、{{domxref("ServiceWorkerGlobalScope")}} を通してアクセスします。

## ブラウザーの互換性

{{Compat}}
