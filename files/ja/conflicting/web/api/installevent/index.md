---
title: InstallEvent.activeWorker
slug: conflicting/Web/API/InstallEvent
original_slug: Web/API/InstallEvent/activeWorker
---

{{APIRef("Service Workers API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`activeWorker`** は {{domxref("InstallEvent")}} インターフェイスの読み取り専用プロパティで、このメソッドは、現在ページをアクティブに制御しているサービスワーカー ({{domxref("ServiceWorker")}}) を返します。

すでにページを制御しているアクティブワーカーがいない場合、`null` を返します。

## 値

{{domxref("ServiceWorker")}} オブジェクト。

## 例

```js
self.addEventListener("install", (event) => {
  const myActiveWorker = event.activeWorker;
});
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
