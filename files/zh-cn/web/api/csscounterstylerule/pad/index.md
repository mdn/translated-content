---
title: CSSCounterStyleRule：pad 属性
slug: Web/API/CSSCounterStyleRule/pad
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

{{domxref("CSSCounterStyleRule")}} 接口的 **`pad`** 属性用于获取或设置 {{cssxref("@counter-style/pad", "pad")}} 描述符的值。如果描述符没有设置值，此属性返回空字符串。

## 值

字符串。

## 示例

以下示例展示了 {{cssxref("@counter-style")}} 样式的规则。在 JavaScript 中，`myRules[0]` 为 `@counter-style` 规则，`pad` 返回值为“0”。

```css
@counter-style box-corner {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5";
  pad: 2 "0";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].pad); // "0"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
