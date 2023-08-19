---
title: 通知 API
slug: Web/API/Notifications_API
---

{{DefaultAPISidebar("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

通知 API を使えば、ウェブページがエンドユーザーに表示するシステム通知を制御できるようになります。これらのシステムは、最上位の閲覧コンテキストのビューポートの外にあるため、ユーザーがタブを切り替えたり、別のアプリに移動していても表示されます。また、この API は既存の通知システムと互換性を持つように設計されているので、異なるプラットフォームでも動作します。

## 概要と使い方

対応済みのプラットフォームでは、システム通知を表示するには、一般的に 2 つのことが必要です。まず、ユーザーが現在のオリジンに対してシステム通知を表示する許可を与える必要があります。これは一般的にアプリやサイトが初期化されたとき、 {{domxref("Notification.requestPermission()")}} を使用して行われます。これは、例えばボタンをクリックするなど、ユーザーの操作に反応して行う必要があります。

```js
btn.addEventListener("click", function () {
  let promise = Notification.requestPermission();
  // wait for permission
});
```

これはベストプラクティスで、ユーザーが同意していない通知でユーザーに迷惑をかけるべきではありません。しかし、今後ブラウザーはユーザーの操作から起動されていない通知を明示的に拒否するようになるでしょう。例えば、 Firefox はバージョン 72 からすでにこれを行っています。

これは以下のようにリクエストダイアログを起動します。

![](screen_shot_2019-12-11_at_9.59.14_am.png)

ここでは、ユーザーはこのオリジンからの通知を許可するかどうかを選択できます。一度決定がなされると、現在のセッションの間はその設定が保存されます。

> **メモ:** Firefox 44 からは、通知と[プッシュ通知](/ja/docs/Web/API/Push_API)の許可が統合されました。通知に許可が与えられれば、プッシュ通知も同時に有効になります。

つぎに、新しい通知は {{domxref("Notification.Notification","Notification()")}} コンストラクターを使って作られます。このコンストラクターには、必須の title 引数と、オプションを指定する引数として options オブジェクトを与えることができます。オプションには、テキストの方向、本文テキスト、表示アイコン、通知サウンドなどが指定可能です。

さらに、通知 API の仕様には、いくつかの[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) が定義されており、サービスワーカーが通知を発行できるようになっています。

> **メモ:** 自分のアプリでの通知の詳しい使い方については、[通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)を参照してください。

## 通知インターフェイス

- {{domxref("Notification")}}
  - : 通知オブジェクトを定義します。

### サービスワーカーの追加要素

- {{domxref("ServiceWorkerRegistration")}}
  - : {{domxref("ServiceWorkerRegistration.showNotification()")}} および {{domxref("ServiceWorkerRegistration.getNotifications()")}} メソッドが含まれており、通知の表示の制御に使用できます。
- {{domxref("ServiceWorkerGlobalScope")}}
  - : {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "onnotificationclick")}} ハンドラーが含まれており、通知がクリックされた時にカスタム関数を実行させることができるようになります。
- {{domxref("NotificationEvent")}}
  - : {{domxref("ExtendableEvent")}} を基本とした、特定の型ののイベントオブジェクトです。すでに実行された通知を表現します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
