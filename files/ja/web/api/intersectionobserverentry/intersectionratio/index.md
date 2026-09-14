---
title: "IntersectionObserverEntry: intersectionRatio プロパティ"
short-title: intersectionRatio
slug: Web/API/IntersectionObserverEntry/intersectionRatio
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

**`intersectionRatio`** は {{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用のプロパティで、対象の要素が現在どの程度見えているかを、ルートの交差比率で 0.0 から 1.0 の間の値で示します。

## 値

0.0 から 1.0 の間の数値で、対象要素がルートの交差矩形内で実際にどの程度表示されているかを示します。
より正確には、この値は交差矩形の面積 ({{domxref("IntersectionObserverEntry.intersectionRect", "intersectionRect")}}) と対象の外接矩形の面積 ({{domxref("IntersectionObserverEntry.boundingClientRect", "boundingClientRect")}}) の比になります。

対象の外接矩形の面積が 0 の場合、 {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} が `true` ならば 1、そうでないならば 0 が返されます。

## 例

この単純な例では、交差コールバックはそれぞれの対象要素の {{cssxref("opacity")}} を、その要素とルートとの交差比率に設定します。

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
