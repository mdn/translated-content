---
title: "LargestContentfulPaint: element プロパティ"
short-title: element
slug: Web/API/LargestContentfulPaint/element
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

**`element`** は {{domxref("LargestContentfulPaint")}} インターフェイスの読み取り専用プロパティで、LCP となった {{domxref("Element")}} を表すオブジェクトを返します。

## 値

{{domxref("Element")}} です。

## 例

### LCP 要素をログ出力

この例では、ブラウザーのパフォーマンスタイムラインに新しい `largest-contentful-paint` パフォーマンス項目が記録されるたびに通知を行う {{domxref("PerformanceObserver")}} を使用しています。`buffered` オプションは、オブザーバーの作成以前に記録された項目にアクセスするために使用されます。

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // 最新の LCP 候補を使用
  console.log(lastEntry.element);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
