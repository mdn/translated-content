---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
---

{{JSRef}} {{deprecated_header}}

The **`italics()`** method creates an {{HTMLElement("i")}} HTML element that causes a string to be italic.

## Syntax

```plain
str.italics()
```

## Description

The `italics()` method embeds a string in an `<i>` tag: `"<i>str</i>"`.

## Examples

### Using `italics()`

The following example uses string methods to change the formatting of a string:

```js
var worldString = 'Hello, world'; console.log(worldString.blink());  // Hello, world
console.log(worldString.bold());  // Hello, world
console.log(worldString.italics()); //Hello, world
console.log(worldString.strike());  // Hello, world
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
