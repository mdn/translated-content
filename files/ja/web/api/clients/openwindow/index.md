---
title: Clients.openWindow()
slug: Web/API/Clients/openWindow
---

{{APIRef("Service Workers API")}}

{{domxref("Clients")}} インターフェイスの **`openWindow()`** メソッドは、新しい最上位の閲覧コンテキストを作成し、所与の URL をロードします。 呼び出し元のスクリプトにポップアップを表示するパーミッションがない場合、`openWindow()` は `InvalidAccessError` をスローします。

Firefox では、このメソッドは、通知クリックイベントの結果として呼び出された場合にのみ、ポップアップを表示できます。

Android 版 Chrome では、メソッドは代わりに、以前にユーザーのホーム画面に追加された[スタンドアロンのウェブアプリ](/ja/docs/Web/Progressive_web_apps)によって提供される既存の閲覧コンテキストで URL を開く場合があります。 最近では、これは Windows 版 Chrome でも機能します。

## 構文

```
self.clients.openWindow(url).then(function(windowClient) {
  // WindowClient で何かをします
});
```

### パラメーター

- `url`
  - : ウィンドウで開くクライアントの URL を表す {{domxref("USVString")}}。 通常、この値は呼び出し元のスクリプトと同じオリジンからの URL でなければなりません。

### 戻り値

URL がサービスワーカーと同じオリジンからのものである場合は {{domxref("WindowClient")}} オブジェクトに解決され、それ以外の場合は {{Glossary("null", "null 値")}}に解決される {{jsxref("Promise")}}。

## 例

```js
// 適切な場合は OS に通知を送ります
if (self.Notification.permission === 'granted') {
  const notificationObject = {
    body: 'ここをクリックしてメッセージを表示してください。',
    data: { url: self.location.origin + '/some/path' },
    // data: { url: 'http://example.com' },
  };
  self.registration.showNotification('メッセージがあります！', notificationObject);
}

// 通知クリックイベントリスナー
self.addEventListener('notificationclick', e => {
  // 通知ポップアウトを閉じます
  e.notification.close();
  // すべての Window クライアントを取得します
  e.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr => {
    // 対象 URL に一致するウィンドウタブが既に存在する場合は、それにフォーカスします。
    const hadWindowToFocus = clientsArr.some(windowClient => windowClient.url === e.notification.data.url ? (windowClient.focus(), true) : false);
    // それ以外の場合は、適切な URL への新しいタブを開いてフォーカスします。
    if (!hadWindowToFocus) clients.openWindow(e.notification.data.url).then(windowClient => windowClient ? windowClient.focus() : null);
  }));
});
```

## 仕様

| 仕様                                                                                                         | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-clients-openwindow', 'Clients: openWindow')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Clients.openWindow")}}
