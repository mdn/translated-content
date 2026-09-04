---
title: "LargestContentfulPaint: size プロパティ"
short-title: size
slug: Web/API/LargestContentfulPaint/size
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

**`size`** は {{domxref("LargestContentfulPaint")}} インターフェイスのプロパティで、LCP となった要素の内在サイズを返します。

要素の `size` は、この要素が画面に作成する{{domxref("DOMRectReadOnly","矩形","","nocode")}}の `width` と `height` の積です。

## 値

要素の幅と高さを掛けた値を表す整数です。

## 例

### LCP 要素の size をログ出力

この例では、ブラウザーのパフォーマンスタイムラインに新しい `largest-contentful-paint` パフォーマンス項目が記録されるたびに通知を行う {{domxref("PerformanceObserver")}} を使用しています。`buffered` オプションは、オブザーバーの作成以前に記録された項目にアクセスするために使用されます。

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // 最新の LCP 候補を使用
  console.log(lastEntry.size);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
