---
title: "IntersectionObserverEntry: intersectionRect プロパティ"
short-title: intersectionRect
slug: Web/API/IntersectionObserverEntry/intersectionRect
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

**`intersectionRect`** は {{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用のプロパティで、 {{domxref("DOMRectReadOnly")}} オブジェクトであり、交差ルート内に現在表示されている対象要素の部分全体を含む、最小の矩形を記述したものです。

## 値

{{domxref("DOMRectReadOnly")}} で、対象要素のうち、ルートの交差矩形内に現在表示されている部分を表します。

この矩形は {{domxref("IntersectionObserverEntry", "boundingClientRect")}} と {{domxref("IntersectionObserverEntry.target", "target")}} の各先祖のクリップ矩形の交差部分をとって算出されます。ただし、交差ルート ({{domxref("IntersectionObserver.root", "root")}}) 自体を除きます。

## 例

この単純な例では、交差コールバックは、対象要素のコンテンツを描画するコードが後で使用するために交差矩形を格納し、可視領域のみが再描画されるようにしています。

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    refreshZones.push({
      element: entry.target,
      rect: entry.intersectionRect,
    });
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
