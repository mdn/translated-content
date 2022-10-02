---
title: 'ServiceWorkerGlobalScope: install event'
slug: Web/API/ServiceWorkerGlobalScope/install_event
---

{{DefaultAPISidebar("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **`install`** イベントは、{{domxref("ServiceWorkerRegistration")}} が新しいインストール中のワーカー（{{domxref("ServiceWorkerRegistration.installing")}} worker）を取得すると発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("ExtendableEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("ServiceWorkerGlobalScope.oninstall")}}</td>
    </tr>
  </tbody>
</table>

## 例

次のスニペットは、`install` イベントハンドラーを使用してキャッシュに多数のレスポンスを設定する方法を示しています。 サービスワーカーはこれを使用して、資産をオフラインで提供できます。

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
   caches.open('v1').then(function(cache) {
         return cache.add(
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
     );
   })
   );
});
```

次のように {{domxref("ServiceWorkerGlobalScope.oninstall")}} プロパティを使用してイベントハンドラーを設定することもできます。

```js
globalScope.oninstall = function(event) {
  ...
};
```

## 仕様

| 仕様                                                                                                                 | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#service-worker-global-scope-install-event', 'install')}} | {{Spec2('Service Workers')}} |          |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.install_event")}}

## 関連情報

- [`activate`](/ja/docs/Web/API/ServiceWorkerGlobalScope/activate) イベント
- {{domxref("ServiceWorkerGlobalScope")}}
- [Service Worker API](/ja/docs/Web/API/Service_Worker_API)
