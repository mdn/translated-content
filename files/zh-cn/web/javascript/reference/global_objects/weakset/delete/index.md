---
title: WeakSet.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/delete
---

{{jsxref("WeakSet")}} 实例的 **`delete()`** 方法从该 `WeakSet` 对象中删除指定的元素。

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.delete()")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};

weakset1.add(object1);

console.log(weakset1.has(object1));
// Expected output: true

weakset1.delete(object1);

console.log(weakset1.has(object1));
// Expected output: false
```

## 语法

```js-nolint
weakSetInstance.delete(value)
```

### 参数

- `value`
  - : 要从 `WeakSet` 对象中删除的值。

### 返回值

如果成功在 `WeakSet` 对象中删除了元素，则返回 `true`。如果未在 `WeakSet` 中找到该 `value`，则返回 `false`。如果 `value` 不是对象或[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，则始终返回 `false`。

## 示例

### 使用 delete() 方法

```js
const ws = new WeakSet();
const obj = {};

ws.add(window);

ws.delete(obj); // 返回 false。没有找到要删除的对象。
ws.delete(window); // 返回 true。成功删除。

ws.has(window); // 返回 false。WeakMap 中已经不存在 window 对象。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.has()")}}
