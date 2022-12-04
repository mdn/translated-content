---
title: IntersectionObserverEntry.target
slug: Web/API/IntersectionObserverEntry/target
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用の **`target`** プロパティは、どの対象の {{domxref("Element")}} で交差ルートとの交差量が変化したかを示します。

## 値

`IntersectionObserverEntry` の `target` プロパティは、以前に {{domxref("IntersectionObserver.observe()")}} を呼び出して対象とした要素の中で、ルートとの交差が変化した要素を指定します。

## 例

この単純な例では、対象となるそれぞれの要素の {{cssxref("opacity")}} が、その {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} に設定されます。

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.opacity = entry.intersectionRatio;
  });
}
```

より具体的な例については、[交差状態の変化の扱い](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#交差状態の変化の扱い)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
