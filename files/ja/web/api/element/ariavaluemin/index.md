---
title: "Element: ariaValueMin プロパティ"
short-title: ariaValueMin
slug: Web/API/Element/ariaValueMin
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaValueMin`** は {{domxref("Element")}} インターフェイスのプロパティで、範囲ウィジェットの最小許容値を定義する [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) 属性の値を反映します。

## 値

数値の入った文字列です。

## 例

この例では、ID が `slider` の要素の `aria-valuemin` 属性は "1" に設定されています。`ariaValueMin` を使用して、値を "2" に更新します。

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
console.log(el.ariaValueMin); // 1
el.ariaValueMin = "2";
console.log(el.ariaValueMin); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
