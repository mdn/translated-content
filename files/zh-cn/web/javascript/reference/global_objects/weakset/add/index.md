---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
---

{{JSRef}}

{{jsxref("WeakSet")}} 实例的 **`add()`** 方法在该 `WeakSet` 对象的末尾追加一个新的对象。

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.add()", "taller")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};

weakset1.add(object1);
console.log(weakset1.has(object1));
// Expected output: true

try {
  weakset1.add(1);
} catch (error) {
  console.log(error);
  // Expected output (Chrome): TypeError: Invalid value used in weak set
  // Expected output (Firefox): TypeError: WeakSet value must be an object, got 1
  // Expected output (Safari): TypeError: Attempted to add a non-object key to a WeakSet
}
```

## 语法

```js-nolint
add(value)
```

### 参数

- `value`
  - : 必须是对象或[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)。将要添加到 `WeakSet` 集合中的值。

### 返回值

该 `WeakSet` 对象。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `value` 不是一个对象或[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，则抛出该异常。

## 示例

### 使用 add

```js
const ws = new WeakSet();

ws.add(window); // 将 window 对象添加到 WeakSet

ws.has(window); // true

// WeakSet 只接受对象作为参数
ws.add(1);
// Chrome 中的结果：“TypeError: Invalid value used in weak set”
// Firefox 中的结果：“TypeError: 1 is not a non-null object”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
