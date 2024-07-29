---
title: "CacheStorage: open() メソッド"
short-title: open()
slug: Web/API/CacheStorage/open
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`open()`** は {{domxref("CacheStorage")}} インターフェイスのメソッドで、 `cacheName` に一致する {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}} を返します。

`CacheStorage` には、ウィンドウの {{domxref("Window.caches")}} プロパティまたはワーカーの {{domxref("WorkerGlobalScope.caches")}} を介してアクセスできます。

> [!NOTE]
> 指定した {{domxref("Cache")}} が存在しない場合、その `cacheName` で新しいキャッシュを作成し、この新しい {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
open(cacheName)
```

### 引数

- `cacheName`
  - : 開きたいキャッシュの名前。

### 返値

要求した {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}}。

## 例

このコードスニペットは、MDN の[単純なサービスワーカーの例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)からのものです（[単純なサービスワーカーがライブで実行する](https://bncb2v.csb.app/)のを見る）。
ここでは、 {{domxref("InstallEvent")}} が発生するのを待ち 、{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} を実行してアプリのインストールプロセスを処理します。 これは、 `CacheStorage.open()` を呼び出して新しいキャッシュを作成し、{{domxref("Cache.addAll()")}} を使用して一連のアセットを追加することで構成されます。

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} および {{domxref("WorkerGlobalScope.caches")}}
