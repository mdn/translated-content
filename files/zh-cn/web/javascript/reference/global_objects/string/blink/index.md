---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
---

{{JSRef}} {{deprecated_header}}

**`blink()`** 方法创建使字符串闪烁的 {{HTMLElement("blink")}} HTML 元素。

> **警告：** 闪烁文本被多种普及标准否决。 `<blink>`元素自身是非标准的，并且已废弃！

## 语法

```plain
str.blink()
```

### 返回值

包含 {{HTMLElement("blink")}} HTML 元素的字符串。

## 描述

`blink()`方法将字符串嵌入 `<blink>` 标签中： `"<blink>str</blink>"`.

## 示例

### 使用 `blink()` 函数

下面的示例使用了字符串方法来修改字符串格式：

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

## 相关链接

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
