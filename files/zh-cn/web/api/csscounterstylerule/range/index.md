---
title: CSSCounterStyleRule：range 属性
slug: Web/API/CSSCounterStyleRule/range
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

{{domxref("CSSCounterStyleRule")}} 接口的 **`range`** 属性用于获取或设置 {{cssxref("@counter-style/range","range")}} 描述符的值。如果描述符没有设置值，此属性返回空字符串。

## 值

字符串。

## 示例

以下示例展示了 {{cssxref("@counter-style")}} 样式的规则。在 JavaScript 中，`myRules[0]` 为 `@counter-style` 规则，`range` 返回值为“2 4, 7 9”。

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range:
    2 4,
    7 9;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].range); // "2 4, 7 9"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
