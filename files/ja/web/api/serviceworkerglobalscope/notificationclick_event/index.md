---
title: "ServiceWorkerGlobalScope: notificationclick イベント"
short-title: notificationclick
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`notificationclick`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、 {{domxref("ServiceWorkerRegistration.showNotification()")}} によって生み出されたシステム通知がクリックされたことを示すために発生します。

メインスレッドまたは {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用するサービスワーカーではないワーカーで作成された通知は、{{domxref("Notification/click_event", "click")}} イベントを代わりに {{domxref("Notification")}} オブジェクト自体で受け取ります。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("notificationclick", (event) => {});

onnotificationclick = (event) => {};
```

## イベント型

{{domxref("NotificationEvent")}} です。{{domxref("ExtendableEvent")}} および {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("NotificationEvent")}}

## イベントプロパティ

_祖先である {{domxref("ExtendableEvent")}} および {{domxref("Event")}} からプロパティを継承しています_。

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : クリックされイベントが発行された通知を表す {{domxref("Notification")}} オブジェクトを返します。
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : ユーザーがクリックした通知ボタンの文字列 ID を返します。この値は、ユーザーがアクションボタン以外のどこかで通知をクリックした場合、またはその通知にボタンがなかった場合、空文字列を返します。

## 例

`notificationclick` イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッド内で使用することができます。

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
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

または、 `onnotificationclick` イベントハンドラープロパティを使用してください。

```js
self.onnotificationclick = (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
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
};
```

イベントのアクションは `event.action` を使って `notificationclick` イベントハンドラーの中で処理することができます。

```js
navigator.serviceWorker.register("sw.js");
Notification.requestPermission().then((result) => {
  if (result === "granted") {
    navigator.serviceWorker.ready.then((registration) => {
      // Archive というタイトルのアクションを含んだ通知を表示します。
      registration.showNotification("New mail from Alice", {
        actions: [
          {
            action: "archive",
            title: "Archive",
          },
        ],
      });
    });
  }
});

self.addEventListener(
  "notificationclick",
  (event) => {
    event.notification.close();
    if (event.action === "archive") {
      // ユーザーが [Archive] アクションを選択しました。
      archiveEmail();
    } else {
      // ユーザーが通知本文を選択（例：クリック）した。
      clients.openWindow("/inbox");
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [通知 API](/ja/docs/Web/API/Notifications_API)
