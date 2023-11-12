---
title: "Element: ariaValueText プロパティ"
short-title: ariaValueText
slug: Web/API/Element/ariaValueText
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaValueText`** は {{domxref("Element")}} インターフェイスのプロパティで、範囲ウィジェットの aria-valuenow の代替となる人間が読み取り可能なテキストを定義する [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) 属性の値を反映します。

## 値

文字列です。

## 例

この例では、ID が `slider` の要素の `aria-valuetext` 属性に "Sunday" を設定し、人間が読み取り可能な範囲の値を与えています。`ariaValueText` を使用して、値を "Monday" に更新します。

```html
<div
  id="slider"
  role="slider"
  aria-valuenow="1"
  aria-valuemin="1"
  aria-valuemax="7"
  aria-valuetext="Sunday"></div>
```

```js
let el = document.getElementById("slider");
console.log(el.ariaValueText); // Sunday
el.ariaValueText = "Monday";
console.log(el.ariaValueText); // Monday
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
