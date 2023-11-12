---
title: "Element: ariaOrientation プロパティ"
short-title: ariaOrientation
slug: Web/API/Element/ariaOrientation
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaOrientation`** は {{domxref("Element")}} インターフェイスのプロパティで、この要素の方向が横方向、縦方向、または不明/あいまいであることを示す [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) 属性を反映します。

## 値

以下のいずれかの値を持つ文字列です。

- `"horizontal"`
  - : この要素は横方向です。
- `"vertical"`
  - : この要素は縦方向です。
- `"undefined"`
  - : この要素の方向は不明です。

## 例

この例では、IDが `handle_zoomSlider` の要素の [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) 属性は "`vertical`" に設定されています。`ariaOrientation` を使用して値を "`horizontal`" に更新します。

```html
<div
  id="handle_zoomSlider"
  role="slider"
  aria-orientation="vertical"
  aria-valuemin="0"
  aria-valuemax="17"
  aria-valuenow="14"
  tabindex="0">
  <span>11</span>
</div>
```

```js
let el = document.getElementById("handle_zoomSlider");
console.log(el.ariaOrientation); // "vertical"
el.ariaOrientation = "horizontal";
console.log(el.ariaOrientation); // "horizontal"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
