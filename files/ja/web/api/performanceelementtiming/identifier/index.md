---
title: "PerformanceElementTiming: identifier プロパティ"
short-title: identifier
slug: Web/API/PerformanceElementTiming/identifier
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`identifier`** は {{domxref("PerformanceElementTiming")}} インターフェイスの読み取り専用のプロパティで、その要素の [`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) 属性の値を返します。

## 値

文字列です。

## 例

### `identifier` の使用

この例では、[`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) 属性を追加して {{HTMLElement("img")}} 要素を監視しています。 {{domxref("PerformanceObserver")}} は `"要素"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffered` フラグを用います。[`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) の値は `big-image` です。したがって `entry.identifier` を呼び出すと文字列 `big-image` を返します。

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.naturalWidth);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
