---
title: Notification.permission
slug: Web/API/Notification/permission_static
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
  if (!("Notification" in window)) {
    // ブラウザーが通知に対応しているかどうかをチェックする
    alert("このブラウザーはデスクトップ通知に対応していません。");
  } else if (Notification.permission === "granted") {
    // 通知の許可が既に得られているかどうかをチェックする
    // それならば、通知を作成する
    const notification = new Notification("こんにちは！");
    // …
  } else if (Notification.permission !== "denied") {
    // そうでなければ、ユーザーに許可を求める必要がある
    Notification.requestPermission().then((permission) => {
      // ユーザーが許可したら、通知を作成する
      if (permission === "granted") {
        const notification = new Notification("こんにちは！");
        // …
      }
    });
  }

  // 最後に、ユーザーが通知を拒否していて、あなたが敬意を
  // 払いたい場合は、これ以上相手を煩わせることはありません。
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
