---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
---

{{JSRef}} {{deprecated_header}}

**`bold()`** 方法会创建 HTML 元素“b”，并将字符串加粗展示。

## 语法

```plain
str.bold()
```

### **返回值**

包含 HTML 元素 {{HTMLElement("b")}} 的字符串。

## 描述

`bold()` 方法将一个字符串嵌入到\<b>\</b>标记中。

## 示例

### 使用 `bold()`

下面的例子使用字符串方法来改变字符串的格式。

```js
var worldString = 'Hello, world';

console.log(worldString.blink());   // <blink>Hello, world</blink>
console.log(worldString.bold());    // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike());  // <strike>Hello, world</strike>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关连接

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
