---
title: CSSStyleDeclaration.removeProperty()
slug: Web/API/CSSStyleDeclaration/removeProperty
---

{{ APIRef("CSSOM") }}

`CSSStyleDeclaration.removeProperty()` 方法移除 style 对象的一个属性。

## 语法

```js
var oldValue = style.removeProperty(property);
```

### 参数

- _`property`_ 是一个 {{domxref('DOMString')}} ，代表要移除的属性名。注意由多个单词组成的属性要用连字符连接各个单词，不接收驼峰命名法的形式。

### 返回值

- `oldValue` 是一个 {{domxref('DOMString')}} ，等于被移除的属性在移除前的属性值。

### 异常

- {{domxref('DOMException')}} NO_MODIFICATION_ALLOWED_ERR: 如果属性或声明块为只读，抛出此异常。

## 例子

下面的 JavaScript 代码从样式表里移除了 `margin` 属性：

```js
var declaration = document.styleSheets[0].rules[0].style;
var oldValue = declaration.removeProperty("margin");
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}
