---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
---

{{JSRef}}

{{jsxref("WeakSet")}} 实例的 **`has()`** 方法返回一个布尔值，指示该 `WeakSet` 中指定的对象是否存在。

{{EmbedInteractiveExample("pages/js/weakset-prototype-has.html")}}

## 语法

```js-nolint
has(value)
```

### 参数

- `value`
  - : 要测试是否在该 `WeakSet` 对象中存在的值。

### 返回值

如果指定的值存在于 `WeakSet` 对象中，则返回 `true`；否则返回 `false`。如果 `value` 不是对象或[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，则始终返回 `false`。

## 示例

### 使用 `has()` 方法

```js
const ws = new WeakSet();
const obj = {};
ws.add(window);

ws.has(window); // 返回 true
ws.has(obj); // 返回 false

// 存储非全局注册的符号
const sym = Symbol("foo");
ws.add(sym);
ws.add(Symbol.iterator);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
