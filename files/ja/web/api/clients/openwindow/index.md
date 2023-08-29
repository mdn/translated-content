---
title: "Clients: openWindow() メソッド"
slug: Web/API/Clients/openWindow
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Service Workers API")}}

**`openWindow()`** は {{domxref("Clients")}} インターフェイスのメソッドで、新しい最上位の閲覧コンテキストを作成し、指定された URL をロードします。 呼び出し元のスクリプトにポップアップを表示する権限がない場合、`openWindow()` は `InvalidAccessError` 例外を発生させます。

Firefox では、このメソッドは、通知クリックイベントの結果として呼び出された場合にのみ、ポップアップを表示できます。

Android 版 Chrome では、メソッドは代わりに、以前にユーザーのホーム画面に追加された[スタンドアロンのウェブアプリ](/ja/docs/Web/Progressive_web_apps)によって提供される既存の閲覧コンテキストで URL を開く場合があります。 最近では、これは Windows 版 Chrome でも機能します。

## 構文

```js-nolint
openWindow(url)
```

### 引数

- `url`
  - : ウィンドウで開くクライアントの URL を表す文字列。 通常、この値は呼び出し元のスクリプトと同じオリジンの URL でなければなりません。

### 返値

URL がサービスワーカーと同じオリジンからのものである場合は {{domxref("WindowClient")}} オブジェクトに解決され、それ以外の場合は {{Glossary("null", "null 値")}}に解決される {{jsxref("Promise")}}。

## 例

```js
// 適切な場合は OS に通知を送ります
if (self.Notification.permission === "granted") {
  const notificationObject = {
    body: "ここをクリックしてメッセージを表示してください。",
    data: { url: `${self.location.origin}/some/path` },
    // data: { url: 'http://example.com' },
  };
  self.registration.showNotification(
    "メッセージがあります！",
    notificationObject,
  );
}

// 通知クリックイベントリスナー
self.addEventListener("notificationclick", (e) => {
  // 通知ポップアウトを閉じます
  e.notification.close();
  // すべての Window クライアントを取得します
  e.waitUntil(
    clients.matchAll({ type: "window" }).then((clientsArr) => {
      // 対象 URL に一致するウィンドウタブが既に存在する場合は、それにフォーカスします。
      const hadWindowToFocus = clientsArr.some((windowClient) =>
        windowClient.url === e.notification.data.url
          ? (windowClient.focus(), true)
          : false,
      );
      // それ以外の場合は、適切な URL への新しいタブを開いてフォーカスします。
      if (!hadWindowToFocus)
        clients
          .openWindow(e.notification.data.url)
          .then((windowClient) => (windowClient ? windowClient.focus() : null));
    }),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
