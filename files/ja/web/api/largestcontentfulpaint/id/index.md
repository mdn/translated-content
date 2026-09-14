---
title: "LargestContentfulPaint: id プロパティ"
short-title: id
slug: Web/API/LargestContentfulPaint/id
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

**`id`** は {{domxref("LargestContentfulPaint")}} インターフェイスの読み取り専用プロパティで、LCP となった要素の ID を返します。

## 値

要素の ID を含む文字列です。該当する ID がない場合は、空文字列になります。

## 例

### LCP 要素の ID をログ出力

この例では、ブラウザーのパフォーマンスタイムラインに新しい `largest-contentful-paint` パフォーマンス項目が記録されるたびに通知を行う {{domxref("PerformanceObserver")}} を使用しています。`buffered` オプションは、オブザーバーの作成以前に記録された項目にアクセスするために使用されます。

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // 最新の LCP 候補を使用
  console.log(lastEntry.id);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
