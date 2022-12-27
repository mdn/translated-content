---
title: 'ServiceWorkerGlobalScope: activate イベント'
slug: Web/API/ServiceWorkerGlobalScope/activate_event
---

{{DefaultAPISidebar("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **`activate`** イベントは、{{domxref("ServiceWorkerRegistration")}} が新しいアクティブワーカー（{{domxref("ServiceWorkerRegistration.active")}} worker）を取得すると発生します。

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
      <td>
        {{domxref("ServiceWorkerGlobalScope.onactivate")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

次のスニペットは、`activate` イベントハンドラーを使用してキャッシュをアップグレードする方法を示しています。

```js
globalScope.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.forEach(function(cache, cacheName) {
      if (cacheWhitelist.indexOf(cacheName) == -1) {
        return caches.delete(cacheName);
      }
    })
  );
});
```

次のように {{domxref("ServiceWorkerGlobalScope.onactivate")}} プロパティを使用してイベントハンドラーを設定することもできます。

```js
globalScope.onactivate = function(event) {
  ...
};
```

## 仕様

| 仕様                                                                                                                     | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#service-worker-global-scope-activate-event', 'activate')}} | {{Spec2('Service Workers')}} |          |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.activate_event")}}

## 関連情報

- [`install`](/ja/docs/Web/API/ServiceWorkerGlobalScope/install) イベント
- {{domxref("ServiceWorkerGlobalScope")}}
- [Service Worker API](/ja/docs/Web/API/Service_Worker_API)
