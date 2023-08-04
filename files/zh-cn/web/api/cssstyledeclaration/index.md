---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
---

{{ APIRef("CSSOM") }}

**`CSSStyleDeclaration`** 接口表示一个对象，它是一个 CSS 声明块，CSS 属性键值对的集合。它暴露了样式信息和各种与样式相关的方法和属性。

`CSSStyleDeclaration` 对象可被暴露于三种不同的 API 下：

- {{domxref("HTMLElement.style")}}，用于操作单个元素的样式（`<elem style="...">`）。
- {{domxref("CSSStyleSheet")}} API，举个例子，`document.styleSheets[0].cssRules[0].style` 会返回文档中第一个样式表中的第一条 CSS 规则。
- {{domxref("Window.getComputedStyle()")}}，将 `CSSStyleDeclaration` 对象作为一个**只读**的接口。

## 属性

- {{domxref("CSSStyleDeclaration.cssText")}}
  - : 当前声明块的文本内容。设置此属性会改变样式。
- {{domxref("CSSStyleDeclaration.length")}}
  - : 属性的数量。参照下面的 {{domxref("CSSStyleDeclaration.item()", 'item()')}} 方法。
- {{domxref("CSSStyleDeclaration.parentRule")}}
  - : 包含当前声明块的 {{domxref("CssRule")}}。

## 方法

- {{domxref("CSSStyleDeclaration.getPropertyPriority()")}}
  - : 返回可选的优先级，"important"。
- {{domxref("CSSStyleDeclaration.getPropertyValue()")}}
  - : 返回给定属性的值。
- {{domxref("CSSStyleDeclaration.item()")}}
  - : 返回用 index 标记的属性名，当 index 越界时返回空字符串。
    另一个可选方案：使用 nodeList\[_i_]（在 i 越界时返回 undefined）获取。通常在非 JavaScript Dom 实现方案是很有用。
- {{domxref("CSSStyleDeclaration.removeProperty()")}}
  - : 从 CSS 声明块中删除属性。
- {{domxref("CSSStyleDeclaration.setProperty()")}}
  - : 在 CSS 声明块中修改现有属性或设置新属性。
- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}} {{Deprecated_Inline}}
  - : **仅在火狐浏览器中支持 getComputedStyle.** 返回 {{ domxref("CSSPrimitiveValue") }} or `null` for [shorthand properties](/zh-CN/docs/Web/CSS/Shorthand_properties).

## 范例

```js
var styleObj = document.styleSheets[0].cssRules[0].style;
console.log(styleObj.cssText);

for (var i = styleObj.length; i--; ) {
  var nameString = styleObj[i];
  styleObj.removeProperty(nameString);
}

console.log(styleObj.cssText);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM CSS Properties](/zh-CN/docs/Web/CSS/CSS_Properties_Reference)
