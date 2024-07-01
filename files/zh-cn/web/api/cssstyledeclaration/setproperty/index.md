---
title: CSSStyleDeclaration.setProperty()
slug: Web/API/CSSStyleDeclaration/setProperty
---

{{ APIRef("CSSOM") }}

**`CSSStyleDeclaration.setProperty()`** 方法接口为一个声明了 CSS 样式的对象设置一个新的值。

## 语法

```plain
style.setProperty(propertyName, value, priority);
```

### 参数

- _`propertyName`_ 是一个 {{domxref('DOMString')}} ，代表被更改的 CSS 属性。
- _`value`_{{optional_inline}} 是一个 {{domxref('DOMString')}} ，含有新的属性值。如果没有指定，则当作空字符串。

  - 注意：_`value`_ 不能包含 `"!important"` --那个应该使用 _`priority`_ 参数。

- _`priority`_{{optional_inline}} 是一个 {{domxref('DOMString')}} 允许设置 "important" CSS 优先级。如果没有指定，则当作空字符串。

### 返回值

- {{jsxref('undefined')}}

### 异常

- {{domxref('DOMException')}} (NoModificationAllowedError)：如果属性或装饰块为只读的，抛出此异常。

JavaScript 有一个特别的，更简单的在 CSSStyleDeclaration 对象上设置 CSS 属性值的语法：

```plain
style.cssPropertyName = 'value';
```

## 示例

下面的 Javascript 代码为一个选中元素样式的 `margin` 属性设置一个新的值：

```js
var declaration = document.styleSheets[0].rules[0].style;
declaration.setProperty("margin", "1px 2px");
// Equivalent to:
// declaration.margin = '1px 2px';
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
