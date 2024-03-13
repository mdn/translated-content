---
title: Notification.requestPermission()
slug: Web/API/Notification/requestPermission_static
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

> **メモ:** Safari はまだ、許可を得るのにコールバック構文を使用します。適切に機能を検出してコードを実行する方法の良い例として、[通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)をご覧ください。

**`requestPermission()`** は {{domxref("Notification")}} インターフェイスのメソッドで、ユーザーに現在のオリジンが通知を表示することを許可するよう要求します。

## 構文

```js-nolint
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
  if (!("Notification" in window)) {
    // ブラウザーが通知に対応しているか調べる
    alert("このブラウザーはデスクトップ通知には対応していません。");
  } else if (Notification.permission === "granted") {
    // 通知権限が既に付与されているかどうかを調べる。
    // その場合は、通知を作成する。
    const notification = new Notification("こんにちは！");
    // …
  } else if (Notification.permission !== "denied") {
    // ユーザーにその権限を要求する必要がある
    Notification.requestPermission().then((permission) => {
      // ユーザーが受け入れたら、通知を作成する。
      if (permission === "granted") {
        const notification = new Notification("こんにちは！");
        // …
      }
    });
  }

  // 最後に、ユーザーが通知を拒否している場合は、これ以上
  // ユーザーに迷惑をかける必要はありません。
}
```

このページでライブ例を公開するのはやめました。 Chrome や Firefox が別オリジンの {{htmlelement("iframe")}} から要求された通知の許可をしないようになり、その他のブラウザーも従っているからです。動作する例を見る場合は、 [To-do リストの例](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（また、[ライブで動作するアプリ](https://mdn.github.io/dom-examples/to-do-notifications/)）を参照してください。

> **メモ:** 上記の例では、通知をユーザーの操作（ボタンのクリック）から起動しました。ユーザーが同意していない通知でユーザーに迷惑をかけるべきではないので、これはベストプラクティスであるだけでなく、今後ブラウザーはユーザーの操作によって起動されたものではない通知の許可の要求を明示的に拒否するようになるでしょう。例えば、 Firefox はバージョン 72 からすでにこれを行っており、 Safari もしばらく前からこれを行っています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
