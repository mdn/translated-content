---
title: CSSStyleDeclaration.getPropertyPriority()
slug: Web/API/CSSStyleDeclaration/getPropertyPriority
---

{{ APIRef("CSSOM") }}

**CSSStyleDeclaration.getPropertyPriority()** 方法会根据传入的 CSS 属性，返回一个 {{domxref('DOMString')}} 来表示该属性的优先级。

## Syntax

```plain
var priority = style.getPropertyPriority(property);
```

### 参数

- _`property`_ 是一个{{domxref('DOMString')}}，表示要检查的属性名。

### 返回值

- `priority` 是一个{{domxref('DOMString')}}，用以表示属性优先级。存在，就返回（例如：`"important"`）；不存在，则返回空字符串。

## 例子

下面的代码检查了`margin`，在 CSS 规则中是否被设置为 important 优先级。

```js
var declaration = document.styleSheets[0].cssRules[0].style;
var isImportant = declaration.getPropertyPriority("margin") === "important";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
