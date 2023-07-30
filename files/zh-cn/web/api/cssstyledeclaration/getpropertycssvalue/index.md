---
title: CSSStyleDeclaration.getPropertyCSSValue()
slug: Web/API/CSSStyleDeclaration/getPropertyCSSValue
---

{{ APIRef("CSSOM") }} {{deprecated_header}}

**CSSStyleDeclaration.getPropertyCSSValue()** 方法接口返回一个{{domxref('CSSValue')}} 包含一个属性的 CSS 值。请注意，如果属性名称是速记属性，则返回 null。

现在你应该使用 {{domxref("CSSStyleDeclaration.getPropertyValue()")}}。

## 语法

```plain
let value = style.getPropertyCSSValue(property);
```

### 参数

- _`property`_ is a {{domxref('DOMString')}} representing the property name to be retrieved.

### 返回值

- `value` is a {{domxref('CSSValue')}} containing the CSS value for a property. If none exists, returns `null`.

## 示例

The following JavaScript code gets an object containing the computed RGB values of the `color` CSS property:

```js
var style = window.getComputedStyle(elem, null);
var rgbObj = style.getPropertyCSSValue("color").getRGBColorValue();
```

## 规范

该特性最初在 [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) 中定义，但从那时起已从标准化工作中移除。

它已被现代、不兼容的 [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API) 取代，该 API 已被标准化。

## 浏览器兼容性

{{Compat}}
