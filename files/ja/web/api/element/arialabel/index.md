---
title: "Element: ariaLabel プロパティ"
short-title: ariaLabel
slug: Web/API/Element/ariaLabel
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaLabel`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性の値を反映し、現在の要素にラベル付けする文字列値を定義します。

## 値

文字列または `null` です。

## 例

この例では、`close-button` という ID を持つ要素の [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性には "Close" が設定されています。`ariaLabel` を使用して、値を "Close dialog" に更新します。

```html
<button aria-label="Close" id="close-button">X</button>
```

```js
let el = document.getElementById("close-button");
console.log(el.ariaLabel); // "Close"
el.ariaLabel = "Close dialog";
console.log(el.ariaLabel); // "Close dialog"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
