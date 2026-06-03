---
title: CSSStyleDeclaration：getPropertyCSSValue() 方法
short-title: getPropertyCSSValue()
slug: Web/API/CSSStyleDeclaration/getPropertyCSSValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("CSSOM") }} {{deprecated_header}}

**CSSStyleDeclaration.getPropertyCSSValue()** 方法返回一个包含指定属性 CSS 值的 {{domxref('CSSValue')}}。注意：如果属性名是一个简写属性，该方法会返回 `null`。

> [!NOTE]
> 此属性曾是创建类型化 CSS 对象模型尝试的一部分。该尝试已被放弃，大多数浏览器并未实现它。
>
> 要实现你的目的，你可以使用：
>
> - 无类型的 [CSS 对象模型](/zh-CN/docs/Web/API/CSS_Object_Model)中被广泛支持的 {{domxref("CSSStyleDeclaration.getPropertyValue()")}} 或
> - 现代化的 [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API) 中支持度较低且被视为实验性的 {{domxref("Element.computedStyleMap()")}}。

## 语法

```js-nolint
getPropertyCSSValue(property)
```

### 参数

- `property`
  - : 一个字符串，表示要获取的属性名称。

### 返回值

一个包含该属性 CSS 值的 {{domxref('CSSValue')}} 。如果不存在则返回 `null`。

## 示例

下面的 JavaScript 代码获取一个对象，其中包含 `color` CSS 属性的计算后的 RGB 值：

```js
const style = window.getComputedStyle(elem, null);
const rgbObj = style.getPropertyCSSValue("color").getRGBColorValue();
```

## 规范

此特性最初定义于 [DOM 样式第 2 版](https://www.w3.org/TR/DOM-Level-2-Style/)规范，但自那以后已从任何标准化工作中移除。

它已被现代但不兼容的 [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API) 所取代，后者现已进入标准轨道。

## 浏览器兼容性

{{Compat}}
