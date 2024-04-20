---
title: CSSCounterStyleRule：prefix 属性
slug: Web/API/CSSCounterStyleRule/prefix
---

{{DefaultAPISidebar("CSS Counter Styles")}}

{{domxref("CSSCounterStyleRule")}} 的 **`prefix`** 属性用于获取或设置 {{cssxref("@counter-style/prefix","prefix")}} 描述符的值。如果描述符没有设置值，此属性返回空字符串。

## 值

字符串

## 示例

<!-- git commit 后，“Chapter\s”会被格式化为“Chapter”，这与示例结果不符。加上 html 空白符临时解决改问题。-->

以下示例展示了 {{cssxref("@counter-style")}} 样式的规则。在 JavaScript 中，`myRules[0]` 为 `@counter-style` 规则，`prefix` 返回值为“Chapter&nbsp;”。

```css
@counter-style chapters {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "Chapter ";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].prefix); // "Chapter "
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
