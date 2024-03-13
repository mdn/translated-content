---
title: "ServiceWorkerGlobalScope: notificationclose イベント"
slug: Web/API/ServiceWorkerGlobalScope/notificationclose_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Service Workers API")}}

**`notificationclose`** イベントは、 {{domxref("ServiceWorkerRegistration.showNotification()")}} によって生成された表示中の通知をユーザーが閉じたときに発生します。

メインスレッドや、サービスワーカー以外のワーカーが {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用して生成した通知では、`Notification` オブジェクト自身が {{domxref("Notification/close_event", "close")}} イベントを受け取ります。

> **メモ:** {{domxref("ServiceWorkerGlobalScope")}} 内で {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用して通知を生成しようとすると、エラーが発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("notificationclose", (event) => {});

onnotificationclose = (event) => {};
```

## イベント型

{{domxref("NotificationEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("NotificationEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} からプロパティを継承しています_。

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
