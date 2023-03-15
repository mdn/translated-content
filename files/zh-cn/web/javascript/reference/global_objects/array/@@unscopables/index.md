---
title: 'Array.prototype[@@unscopables]'
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
---

{{JSRef}}

Symbol 属性 **`@@unscopable`** 包含了所有 ES2015 (ES6) 中新定义的、且并未被更早的 ECMAScript 标准收纳的属性名。这些属性被排除在由 [`with`](/zh-CN/docs/Web/JavaScript/Reference/Statements/with) 语句绑定的环境中。

## 描述

`with` 绑定中未包含的数组默认属性有：

- {{jsxref("Array.prototype.copyWithin()", "copyWithin()")}}
- {{jsxref("Array.prototype.entries()", "entries()")}}
- {{jsxref("Array.prototype.fill()", "fill()")}}
- {{jsxref("Array.prototype.find()", "find()")}}
- {{jsxref("Array.prototype.findIndex()", "findIndex()")}}
- {{jsxref("Array.prototype.includes()", "includes()")}}
- {{jsxref("Array.prototype.keys()", "keys()")}}
- {{jsxref("Array.prototype.values()", "values()")}}

参考 {{jsxref("Symbol.unscopables")}} 以了解如何为自定义的对象设置 `unscopables`。

{{js_property_attributes(0,0,1)}}

## 示例

以下的代码在 ES5 或更早的版本中能正常工作。然而 ECMAScript 2015 (ES6) 或之后的版本中新添加了 {{jsxref("Array.prototype.keys()")}} 这个方法。这意味着在 `with` 语句的作用域中，"keys"只能作为方法，而不能作为某个变量。这正是内置的 `@@unscopables` 即 `Array.prototype[@@unscopables]` symbol 属性所要解决的问题：防止某些数组方法被添加到 `with` 语句的作用域内。

```js
var keys = [];

with(Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Symbol.unscopables")}}
