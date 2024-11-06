---
title: CSSStyleDeclaration.getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
---

{{ APIRef("CSSOM") }}

**CSSStyleDeclaration.getPropertyValue()** 接口返回一个 {{domxref('DOMString')}} ，其中包含请求的 CSS 属性的值。

## 语法

```plain
var value = style.getPropertyValue(property);
```

### 参数

- _`property`_ 是一个 {{domxref('DOMString')}}，是需要查询的 CSS 属性名称。

### 返回值

- `value` 是 {{domxref('DOMString')}} ，包含查找属性的值。若对应属性没有设置，则返回空字符串。

## 示例

下述示例使用一个 CSS 选择器规则查询对应的`margin` 属性的值：

```js
var declaration = document.styleSheets[0].cssRules[0].style;
var value = declaration.getPropertyValue("margin"); // "1px 2px"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
