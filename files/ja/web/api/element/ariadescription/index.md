---
title: "Element: ariaDescription プロパティ"
short-title: ariaDescription
slug: Web/API/Element/ariaDescription
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaDescription`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-description`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-description) 属性の値を反映し、この属性は、現在の要素を記述したり、注釈を付けたりする文字列値を定義します。

## 値

文字列です。

## 例

この例では、ID が `close-button` の要素の `aria-description` 属性に文字列 "A longer description of the function of this element" が設定されています。`ariaDescription` を用いて値を更新することができます。

```html
<button
  aria-label="Close"
  aria-description="A longer description of the function of this element"
  id="close-button">
  X
</button>
```

```js
let el = document.getElementById("close-button");
console.log(el.ariaDescription); // "A longer description of the function of this element"
el.ariaDescription = "A different description";
console.log(el.ariaDescription); // "A different description"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
