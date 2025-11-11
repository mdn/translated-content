---
title: "Window: caches プロパティ"
short-title: caches
slug: Web/API/Window/caches
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{securecontext_header}}

**`caches`** は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、現在のコンテキストに関連付けられた {{domxref("CacheStorage")}} オブジェクトを返します。
このオブジェクトにより、オフライン利用のために資産 (assets) を保存したり、リクエストに対するカスタムレスポンスを生成したりするなどの機能を使用できます。

## 値

{{domxref("CacheStorage")}} オブジェクト。

## 例

次の例は、ウィンドウがキャッシュされたデータを取得する方法を示しています。

```js
window.caches.open("v1").then((cache) => {
  return cache.match("/list");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー](/ja/docs/Web/API/Service_Worker_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
