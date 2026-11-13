---
title: CSSRule：cssText 属性
short-title: cssText
slug: Web/API/CSSRule/cssText
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{APIRef("CSSOM")}}

{{domxref("CSSRule")}} 接口的 **`cssText`** 属性返回 {{domxref("CSSStyleSheet")}} 样式规则的实际文本。

> [!NOTE]
> 不要将此属性与元素样式 {{domxref("CSSStyleDeclaration.cssText")}} 混淆。

注意，此属性曾经可变，但现在是只读的。尝试设置它*完全不会产生任何效果*，甚至不会发出警告或错误。此外，它也没有可设置的子属性。因此，要修改它，请使用样式表 {{domxref("CSSRuleList", "cssRules[index]")}} 的 {{domxref("CSSStyleRule.selectorText", ".selectorText")}} 和 {{domxref("CSSStyleRule.style", ".style")}} 属性（或其子属性）。详见[使用动态样式信息](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)。

## 值

包含 {{domxref("CSSStyleSheet")}} 规则实际文本的字符串。

## 示例

```css
body {
  background-color: darkblue;
}
```

```js
let stylesheet = document.styleSheets[0];
console.log(stylesheet.cssRules[0].cssText); // body { background-color: darkblue; }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
