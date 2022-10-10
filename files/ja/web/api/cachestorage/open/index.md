---
title: CacheStorage.open()
slug: Web/API/CacheStorage/open
---

{{APIRef("Service Workers API")}}

{{domxref("CacheStorage")}} インターフェイスの **`open()`** メソッドは、`cacheName` に一致する {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}} を返します。

グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して `CacheStorage` にアクセスできます。

> **メモ:** 指定した {{domxref("Cache")}} が存在しない場合、その `cacheName` で新しいキャッシュを作成し、この新しい {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}} を返します。

## 構文

```
caches.open(cacheName).then(function(cache) {
  // cache で何かをする
});
```

### パラメーター

- cacheName
  - : 開きたいキャッシュの名前。

### 戻り値

要求した {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}}。

## 例

この例は MDN の [sw-test の例](https://github.com/mdn/sw-test/)からのものです（[sw-test をライブで](https://mdn.github.io/sw-test/)見る）。 ここでは、{{domxref("InstallEvent")}} が発生するのを待ち、{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} を実行してアプリのインストールプロセスを処理します。 これは、`CacheStorage.open()` を呼び出して新しいキャッシュを作成し、{{domxref("Cache.addAll()")}} を使用して一連のアセットを追加することで構成されます。

```js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
```

## 仕様

| 仕様                                                                                                     | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-cachestorage-open', 'CacheStorage: open')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.CacheStorage.open")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WindowOrWorkerGlobalScope.caches")}}
