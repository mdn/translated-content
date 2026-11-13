---
title: "LargestContentfulPaint: loadTime プロパティ"
short-title: loadTime
slug: Web/API/LargestContentfulPaint/loadTime
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

**`loadTime`** は {{domxref("LargestContentfulPaint")}} インターフェイスの読み取り専用プロパティで、その要素が読み込まれた時刻を返します。

## 値

その要素が読み込まれた時刻をミリ秒単位で表す {{domxref("DOMHighResTimeStamp","timestamp")}} です。

## 例

### LCP 要素の loadTime をログ出力

この例では、ブラウザーのパフォーマンスタイムラインに新しい `largest-contentful-paint` パフォーマンス項目が記録されるたびに通知を行う {{domxref("PerformanceObserver")}} を使用しています。`buffered` オプションは、オブザーバーの作成以前に記録された項目にアクセスするために使用されます。

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // 最新の LCP 候補を使用
  console.log(lastEntry.loadTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
