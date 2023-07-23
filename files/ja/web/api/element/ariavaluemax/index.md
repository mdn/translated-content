---
title: "Element: ariaValueMax プロパティ"
short-title: ariaValueMax
slug: Web/API/Element/ariaValueMax
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaValueMax`** は {{domxref("Element")}} インターフェイスのプロパティで、範囲ウィジェットの最大許容値を定義する [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) 属性の値を反映します。

## 値

数値の入った文字列です。

## 例

この例では、ID が `slider` の要素の [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) 属性は "7" に設定されています。`ariaValueMax` を使用して値を "6" に更新します。

```html
<div
  role="slider"
  aria-valuenow="1"
  aria-valuemin="1"
  aria-valuemax="7"
  aria-valuetext="Sunday"></div>
```

```js
let el = document.getElementById("slider");
console.log(el.ariaValueMax); // 7
el.ariaValueMax = "6";
console.log(el.ariaValueMax); // 6
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
