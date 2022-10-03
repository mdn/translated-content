---
title: Notification.permission
slug: Web/API/Notification/permission
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

`permission` は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、ユーザーが現在のオリジンに対してウェブ通知を表示することを許可したかどうか、現在の許可状態を表します。

## 値

文字列で、現在の許可の状態を表します。以下の値が可能です。

- `granted`
  - : 現在のオリジンがシステム通知を表示することについて、ユーザーが明示的な許可を与えている。
- `denied`
  - : 現在のオリジンがシステム通知を表示することについて、ユーザーが明示的に拒否している。
- `default`
  - : ユーザーの決定は分からない。この場合、アプリケーションは許可が `denied` であるかのように動作する。

## 例

以下のスニペットは、まず通知に対応しているかどうかをチェックし、現在のオリジンで通知を送信するための許可が付与されているかどうかをチェックし、必要であれば許可を要求してから通知を送信したい場合に使用することができます。

```js
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    let notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        let notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API](/ja/docs/Web/API/Notifications_API)
- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [許可 API](/ja/docs/Web/API/Permissions_API)
- [許可 API の使用](/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API)
