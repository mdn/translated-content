---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
---

{{JSRef}} {{deprecated_header}}

**`strike()`**方法创建{{HTMLElement("strike")}} HTML 元素，使字符串展示为被删除的文本。

## 语法

```plain
str.strike()
```

### 返回值

包含{{HTMLElement("strike")}} HTML 元素的字符串。

## 描述

`strike()`方法将字符串嵌入`<strike>`标签： `"<strike>str</strike>"`.

## 示例

### 使用`strike()`

下面的示例使用字符串方法来修改字符串的格式：

```js
var worldString = "Hello, world";

console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
