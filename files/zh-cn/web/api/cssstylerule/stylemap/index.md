---
title: CSSStyleRule：styleMap 属性
short-title: styleMap
slug: Web/API/CSSStyleRule/styleMap
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}

{{domxref("CSSStyleRule")}} 接口的只读属性 **`styleMap`** 返回提供对规则的属性—值对的访问的 {{domxref('StylePropertyMap')}} 对象。

## 值

{{domxref('StylePropertyMap')}} 对象。

## 示例

以下示例展示了如何使用 `styleMap` 并通过 {{domxref('StylePropertyMap.set()')}} 方法修改样式。

```js
const stylesheet = document.styleSheets[0];

Object.values(stylesheet.cssRules).forEach((block) => {
  if (block.selectorText === "button") {
    block.styleMap.set("--mainColor", "black");
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
