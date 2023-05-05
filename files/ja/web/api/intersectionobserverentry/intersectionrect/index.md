---
title: IntersectionObserverEntry.intersectionRect
slug: Web/API/IntersectionObserverEntry/intersectionRect
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用の **`intersectionRect`** プロパティは {{domxref("DOMRectReadOnly")}} オブジェクトで、交差ルート内に現在表示されている対象要素の部分全体を含む、最小の矩形を記述したものである。

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
      rect: entry.intersectionRect
    });
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
