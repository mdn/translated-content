---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
---

{{JSRef}}

**`Symbol.unscopables`** 指用于指定对象值，其对象自身和继承的从关联对象的 with 环境绑定中排除的属性名称。

{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}

## 描述

可以在任何对象上定义 `@@unscopables` symbol (`Symbol.unscopables`)，用于排除属性名称并与 `with` 环境绑定在一起作为词法变量公开。请注意，如果使用 [Strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)，语句将不可用，并且可能也不需要 symbol。

在 `unscopables` 对象上设置属性为 true，将使其 _unscopable_ 并且因此该属性也将不会在词法环境变量中出现。如果设置属性为 `false` ，则将使其可 `scopable` 并且该属性会出现在词法环境变量中。

{{js_property_attributes(0,0,0)}}

## 示例

下列的代码可兼容 ES5 及以下版本。然而，在 ECMAScript 2015 (ES6) 或其后续版本中，{{jsxref("Array.prototype.keys()")}} 方法才会出现。意味着内部 `with` 环境“关键字”存在该方法，但变量中不会存在。也就是说，当 `unscopable`s symbol 被展示时，内置的`unscopables` 设置是由 {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} 展示并实现的，一些 Array 的方法 将作为 scoped 放入 `with` 语句中。

```js
var keys = [];

with (Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

你也可以为你自己的对象设置 `unscopables` 。

```js
var obj = {
  foo: 1,
  bar: 2,
};

obj[Symbol.unscopables] = {
  foo: false,
  bar: true,
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
- [`with`](/zh-CN/docs/Web/JavaScript/Reference/Statements/with) statement (not available in [Strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode))
