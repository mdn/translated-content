---
title: "ServiceWorkerGlobalScope: notificationclose イベント"
short-title: notificationclose
slug: Web/API/ServiceWorkerGlobalScope/notificationclose_event
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`notificationclose`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、{{domxref("ServiceWorkerRegistration.showNotification()")}} によって生成された表示中の通知をユーザーが閉じたときに発生します。

メインスレッドや、サービスワーカー以外のワーカーが {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用して生成した通知では、{{domxref("Notification/close_event", "close")}} イベントを {{domxref("Notification")}} オブジェクト自身が受け取ります。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("notificationclose", (event) => {});

onnotificationclose = (event) => {};
```

## イベント型

{{domxref("NotificationEvent")}} です。{{domxref("ExtendableEvent")}} および {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("NotificationEvent")}}

## イベントプロパティ

_祖先である {{domxref("ExtendableEvent")}} および {{domxref("Event")}} から継承したプロパティがあります_。

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : クリックされイベントが発行された通知を表す {{domxref("Notification")}} オブジェクトを返します。
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : ユーザーがクリックした通知ボタンの文字列 ID を返します。この値は、ユーザーがアクションボタン以外のどこかで通知をクリックした場合、またはその通知にボタンがなかった場合、空文字列を返します。

## 例

```js
// サービスワーカーの内部で
self.onnotificationclose = (event) => {
  console.log("On notification close: ", event.notification.tag);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
