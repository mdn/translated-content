---
title: "IntersectionObserverEntry: target プロパティ"
short-title: target
slug: Web/API/IntersectionObserverEntry/target
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

**`target`** は {{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用プロパティで、交差ルートとの交差量が変化したのがどの対象要素であるかを {{domxref("Element")}} で示します。

## 値

`IntersectionObserverEntry` の `target` プロパティは、以前に {{domxref("IntersectionObserver.observe()")}} を呼び出して対象とした {{domxref("Element")}} の中で、ルートとの交差量が変化したものを示します。

## 例

この単純な例では、対象となるそれぞれの要素の {{cssxref("opacity")}} が、その {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} に設定されます。

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
}
```

より具体的な例については、[交差状態の変化の扱い](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#交差状態の変化の扱い)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
