---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
---

{{JSRef}}

{{jsxref("WeakMap")}} 实例的 **`has()`** 返回一个布尔值，指示该 `WeakMap` 中是否存在具有指定键的元素。

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.has()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, "foo");

console.log(weakmap1.has(object1));
// Expected output: true

console.log(weakmap1.has(object2));
// Expected output: false
```

## 语法

```js-nolint
has(key)
```

### 参数

- `key`
  - : 要测试是否在该 `WeakMap` 对象中存在的元素的键。

### 返回值

如果指定键的元素存在于 `WeakMap` 对象中，则返回 `true`；否则返回 `false`。如果 `key` 不是对象或[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，则始终返回 `false`。

## 示例

### 使用 has 方法

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // 返回 true
wm.has("baz"); // 返回 false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
