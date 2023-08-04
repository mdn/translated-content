---
title: 'TypeError: property "x" is non-configurable and can''t be deleted'
slug: Web/JavaScript/Reference/Errors/Cant_delete
---

{{jsSidebar("Errors")}}

## 消息

```plain
TypeError: property "x" is non-configurable and can't be deleted. (Firefox)
TypeError: Cannot delete property 'x' of #<Object> (Chrome)
```

## 错误类型

{{jsxref("TypeError")}} 只出现在严格模式下。

## 哪里有问题？

尝试删除某个属性，但是这个属性是[不可配置的](/zh-CN/docs/Web/JavaScript/Data_structures#属性)。`configurable` 属性控制是否该属性能从对象上删除，以及它的属性（除了`writable`）能否被修改。

这个错误仅仅在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下出现。在非严格模式下，这个操作返回 `false`。

## 示例

不可配置的属性并不特别常见，但是它们可以使用 {{jsxref("Object.defineProperty()")}} 或 {{jsxref("Object.freeze()")}} 创建。

```js example-bad
"use strict";
var obj = Object.freeze({ name: "Elsa", score: 157 });
delete obj.score; // TypeError

("use strict");
var obj = {};
Object.defineProperty(obj, "foo", { value: 2, configurable: false });
delete obj.foo; // TypeError

("use strict");
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop(); // TypeError
```

也有一些内建于 JavaScript 的不可配置属性。你可能会尝试删除一个数学常量。

```js example-bad
"use strict";
delete Math.PI; // TypeError
```

## 另见

- [delete operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
