---
title: WindowClient
slug: Web/API/WindowClient
---

{{APIRef("Service Workers API")}}

[Service Worker API](/ja/docs/Web/API/Service_Worker_API) の **`WindowClient`** インターフェイスは、アクティブなワーカーによって制御される閲覧コンテキスト内のドキュメントであるサービスワーカークライアントのスコープを表します。 サービスワーカークライアントは、それ自身の読み込みとサブリソースに対してサービスワーカーを個別に選択して使用します。

## メソッド

_`WindowClient` は、親インターフェースである {{domxref("Client")}} からメソッドを継承します。_

- {{domxref("WindowClient.focus()")}}
  - : 現在のクライアントにユーザー入力フォーカスを与えます。
- {{domxref("WindowClient.navigate()")}}
  - : 指定された URL を制御されたクライアントのページに読み込みます。

## プロパティ

_`WindowClient` は、親インターフェースである {{domxref("Client")}} からプロパティを継承します。_

- {{domxref("WindowClient.focused")}} {{readonlyInline}}
  - : 現在のクライアントにフォーカスがあるかどうかを示すブール値。
- {{domxref("WindowClient.visibilityState")}} {{readonlyInline}}
  - : 現在のクライアントの可視性を示します。 この値は、`"hidden"`、`"visible"`、`"prerender"` のいずれかです。

## 例

```js
self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // これは、クライアントが既に開いているかどうかを確認し、
  // 開いている場合にフォーカスを合わせます
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client) {
        client.focus();
        break;
      }
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
```

## 仕様

| 仕様                                                                                 | 状態                                 | コメント |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#windowclient', 'WindowClient')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WindowClient")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [Promises](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Web worker の使用](/ja/docs/Web/Guide/Performance/Using_web_workers)
- [Channel Messaging API](/ja/docs/Web/API/Channel_Messaging_API)
