---
title: "Element: ariaLive プロパティ"
short-title: ariaLive
slug: Web/API/Element/ariaLive
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaLive`** は {{domxref("Element")}} インターフェイスのプロパティで、要素が更新されることを示す [`aria-live`](/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) 属性の値を反映し、ユーザーエージェント、支援技術、ユーザーがライブ領域から期待できる更新の種類を記述します。

## 値

以下のいずれかの値を持つ文字列です。

- `"assertive"`
  - : その領域への更新が最も優先度が高く、ユーザーにすぐに表示する必要があることを示します。
- `"off"`
  - : ユーザーがその領域にフォーカスしていない限り、その領域の更新をユーザーに表示しないことを示します。
- `"polite"`
  - : 現在の文を話し終わるときや、ユーザーが入力するのを一時停止したときなど、次の猶予のある機会に領域を更新することを説明しています。

## 例

この例では、ID が `planetInfo` の要素の [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-live) 属性は "polite" に設定されています。次に、値を "assertive" に更新します。

```html
<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">No planet selected</h2>
  <p id="planetDescription">Select a planet to view its description</p>
</div>
```

```js
let el = document.getElementById("planetInfo");
console.log(el.ariaLive); // "polite"
el.ariaLive = "assertive";
console.log(el.ariaLive); // assertive
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
