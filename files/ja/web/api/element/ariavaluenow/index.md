---
title: "Element: ariaValueNow プロパティ"
short-title: ariaValueNow
slug: Web/API/Element/ariaValueNow
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaValueNow`** は {{domxref("Element")}} インターフェイスのプロパティで、範囲ウィジェットの現在値を定義する [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) 属性の値を反映します。

## 値

数値の入った文字列です。

## 例

この例では、ID が `slider` の要素の [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) 属性は "1" に設定されています。`ariaValueNow` を使用して値を "2" に更新します。

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
console.log(el.ariaValueNow); // 1
el.ariaValueNow = "2";
console.log(el.ariaValueNow); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
