---
title: CSSCounterStyleRule：suffix 属性
slug: Web/API/CSSCounterStyleRule/suffix
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

{{domxref("CSSCounterStyleRule")}} 接口的 **`suffix`** 属性用于获取或设置 {{cssxref("@counter-style/suffix","suffix")}} 描述符的值。如果描述符没有设置值，此属性返回空字符串。

## 值

字符串

## 示例

以下示例展示了 {{cssxref("@counter-style")}} 样式的规则。在 JavaScript 中，`myRules[0]` 为 `@counter-style` 规则，`suffix` 返回值为“:&nbsp;”。

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  negative: "-";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].suffix); // ": "
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
