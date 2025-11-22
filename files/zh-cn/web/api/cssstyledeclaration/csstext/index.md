---
title: CSSStyleDeclaration：cssText 属性
short-title: cssText
slug: Web/API/CSSStyleDeclaration/cssText
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("CSSOM")}}

{{domxref("CSSStyleDeclaration")}} 接口的 **`cssText`** 属性仅返回或设置元素的**内联**样式声明文本。

要动态设置**样式表**规则，参见[使用动态样式信息](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)。

不要将其与样式表样式规则 {{domxref("CSSRule.cssText")}} 混淆。

## 值

包含元素内联样式声明文本的字符串。

## 示例

```html
<span id="s1" style="color: red;">一些文本</span>
```

```js
const elem = document.getElementById("s1");
console.log(elem.style.cssText); // “color: red;”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
