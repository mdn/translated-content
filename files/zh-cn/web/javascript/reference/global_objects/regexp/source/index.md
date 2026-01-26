---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
---

**`source`** 属性返回一个值为当前正则表达式对象的模式文本的字符串，该字符串不会包含正则字面量两边的斜杠以及任何的标志字符。

## 示例

### 使用 source

```js
const regex = /fooBar/gi;

console.log(regex.source); // “fooBar”，不包含 /.../ 和“gi”。
```

### 空正则表达式和转义

```js
new RegExp().source; // “(?:)”

new RegExp("\n").source === "\\n"; // true，从 ES5 开始
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("RegExp.prototype.flags")}}
