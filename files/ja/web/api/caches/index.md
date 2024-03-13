---
title: caches
slug: Web/API/caches
l10n:
  sourceCommit: e910d1f446a8b3fa8c60c7cb34c272f4a13b3892
---

{{APIRef("Service Workers API")}}

グローバルの **`caches`** 読み取り専用プロパティは、現在のコンテキストに関連付けられた {{domxref("CacheStorage")}} オブジェクトを返します。
このオブジェクトにより、オフライン利用のために資産 (assets) を保存したり、リクエストに対するカスタムレスポンスを生成したりするなどの機能を使用できます。

{{securecontext_header}}

## 値

{{domxref("CacheStorage")}} オブジェクト。

## 例

次の例では、資産をオフラインで利用できるようにするために、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)のコンテキストでキャッシュを使う方法を示しています。

```js
this.addEventListener("install", (event) => {
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
          "/gallery/",
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

- [サービスワーカー](/ja/docs/Web/API/Service_Worker_API)
- [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
