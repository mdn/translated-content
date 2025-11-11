---
title: "PerformanceElementTiming: intersectionRect プロパティ"
short-title: intersectionRect
slug: Web/API/PerformanceElementTiming/intersectionRect
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`intersectionRect`** は {{domxref("PerformanceElementTiming")}} インターフェイスの読み取り専用プロパティで、ビューポート内の要素の矩形を返します。

## 値

{{domxref("DOMRectReadOnly")}} で、ビューポートにおけるこの要素の矩形を表します。

表示画像の場合、これはビューポート内の画像の表示矩形です。テキストの場合、これはビューポート内のノードの表示矩形です。これは、要素に属するすべてのテキストノードを結合したものを格納する最小の長方形です。

## 例

### `intersectionRect` の出力

この例では、 [`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) 属性を追加して {{HTMLElement("img")}} 要素を監視しています。 {{domxref("PerformanceObserver")}} は `"element"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffered` フラグを用います。 `entry.intersectionRect` を呼び出すと、画像の表示矩形を持つ {{domxref("DOMRectReadOnly")}} オブジェクトが返されます。

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
      console.log(entry.intersectionRect);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
