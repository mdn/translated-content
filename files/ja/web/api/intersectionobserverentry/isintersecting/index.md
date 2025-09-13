---
title: "IntersectionObserverEntry: isIntersecting プロパティ"
short-title: isIntersecting
slug: Web/API/IntersectionObserverEntry/isIntersecting
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

**`isIntersecting`** は {{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用のプロパティで、対象要素が交差オブザーバーのルートと交差している場合に `true` になる論理値です。

この値が `true` の場合、 `IntersectionObserverEntry` は交差状態への変わり目にあります。 `false` の場合、交差ありから交差なしへの変わり目であることがわかります。

## 値

論理値で、 {{domxref("IntersectionObserverEntry.target", "target")}} 要素が交差状態に遷移したか (`true`) または交差状態から脱したか (`false`) を示します。

## 例

この単純な例では、交差コールバックを使用して、現在いくつの対象となる要素が{{domxref("IntersectionObserver.root", "交差ルート", "", 1)}}と交差しているかのカウンターを更新します。

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectingCount += 1;
    } else {
      intersectingCount -= 1;
    }
  });
}
```

より具体的な例については、[交差状態の変化の扱い](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#交差状態の変化の扱い)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
