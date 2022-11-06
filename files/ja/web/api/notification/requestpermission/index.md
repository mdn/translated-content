---
title: Notification.requestPermission()
slug: Web/API/Notification/requestPermission
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

> **メモ:** Safari はまだ、許可を得るのにコールバック構文を使用します。適切に機能を検出してコードを実行する方法の良い例として、[通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)をご覧ください。

**`requestPermission()`** は {{domxref("Notification")}} インターフェイスのメソッドで、ユーザーに現在のオリジンが通知を表示することを許可するよう要求します。

## 構文

```js
// 最新の仕様では、このメソッドは次のようにプロミスベースの構文に更新されています。
requestPermission()

// 以前は、この構文は単純なコールバックに基づくものでした。このバージョンは非推奨になりました。
requestPermission(callback)
```

### 引数

- `callback` {{optional_inline}} {{deprecated_inline}}
  - : 省略可能なコールバック関数で、許可の値で呼び出されます。プロミスを返値にしたために非推奨になりました。

### 返値

{{jsxref("Promise")}} で、ユーザーが許可を選択したら文字列に解決します。この文字列の取りうる値は次の通りです。

- `granted`
- `denied`
- `default`

## 例

この基本的な HTML を想定してください。

```html
<button onclick="notifyMe()">Notify me!</button>
```

以下のように通知を送信することが可能です。 — ここでは、かなり冗長で完全なコードのセットを紹介しています。最初に通知に対応しているかどうかをチェックし、通知を送信するために現在のオリジンに許可が与えられているかどうかをチェックし、必要であれば許可を要求してから通知を送信したい場合に使用できます。

```js
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    const notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
```

このページでライブ例を公開するのはやめました。 Chrome や Firefox が別オリジンの {{htmlelement("iframe")}} から要求された通知の許可をしないようになり、その他のブラウザーも従っているからです。動作する例を見る場合は、 [To-do リストの例](https://github.com/mdn/to-do-notifications/tree/gh-pages) (また、[ライブで動作するアプリ](https://mdn.github.io/to-do-notifications/)) を参照してください。

> **メモ:** 上記の例では、通知をユーザーの操作（ボタンのクリック）から起動しました。ユーザーが同意していない通知でユーザーに迷惑をかけるべきではないので、これはベストプラクティスであるだけでなく、今後ブラウザーはユーザーの操作によって起動されたものではない通知の許可の要求を明示的に拒否するようになるでしょう。例えば、 Firefox はバージョン 72 からすでにこれを行っており、 Safari もしばらく前からこれを行っています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
