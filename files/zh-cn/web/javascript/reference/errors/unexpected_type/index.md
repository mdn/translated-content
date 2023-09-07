---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
---

{{jsSidebar("Errors")}}

JavaScript 异常“_x_ is (not) _y_”在出现与期望不符的类型（通常为意外获得的 {{jsxref("undefined")}} 或 {{jsxref("null")}} 值）时被抛出。

## 消息

```
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: "x" is undefined (Firefox)
TypeError: "undefined" is not an object (Firefox)
TypeError: undefined is not an object (evaluating 'obj.x') (Safari)

TypeError: "x" is not a symbol (V8-based & Firefox)
TypeError: Symbol.keyFor requires that the first argument be a symbol (Safari)
```

## 错误类型

{{jsxref("TypeError")}}。

## 什么地方出错了？

出现了与期望不符的类型。这个错误常常由 {{jsxref("undefined")}} 或 {{jsxref("null")}} 值引起。

此外，某些方法，例如 {{jsxref("Object.create()")}} 或 {{jsxref("Symbol.keyFor()")}}，要求必须提供特定类型的参数。

## 示例

### 错误情形

```js example-bad
// undefined and null cases on which the substring method won't work
const foo = undefined;
foo.substring(1); // TypeError: foo is undefined

const foo = null;
foo.substring(1); // TypeError: foo is null

// Certain methods might require a specific type
const foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

const foo = "bar";
Object.create(foo); // TypeError: "foo" is not an object or null
```

### 解决方法

要解决值为 `undefined` 或 `null` 的空指针问题，你可以首先测试值是否为 `undefined` 或 `null`。

```js example-good
if (foo !== undefined && foo !== null) {
  // Now we know that foo is defined, we are good to go.
}
```

或者，你如果能确定 `foo` 的值不会是其他的[假值](/zh-CN/docs/Glossary/Falsy)（如：`""` 或 `0`），或者排除这些情况不是问题，那你可以简单地测试其是否为真。

```js example-good
if (foo) {
  // Now we know that foo is truthy, it will necessarily not be null/undefined.
}
```

## 参见

- {{jsxref("undefined")}}
- {{jsxref("null")}}
