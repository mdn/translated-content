---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
---

{{JSRef}} {{deprecated_header}}

fixed() 方法创建了一个 \<tt> 标签元素将字符串包裹起来，从而让这个字符串里面的内容具有固定间距。

## 语法

```plain
str.fixed()
```

### 返回值

返回一个表示 {{HTMLElement("tt")}} HTML 元素的字符串。

## 描述

`fixed()` 方法将一个字符串包裹在\<tt>\</tt>标签中，比如：`"<tt>str</tt>"`.

## 举例

### 使用 fixed()

下面的示例代码使用这个 fixed 方法来改变字符串的格式：

```js
var worldString = "Hello, world";
console.log(worldString.fixed()); // "<tt>Hello, world</tt>"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
