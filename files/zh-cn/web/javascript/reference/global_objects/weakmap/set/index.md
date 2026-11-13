---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
---

{{jsxref("WeakMap")}} 实例的 **`set()`** 方法根据指定的键值在该 `WeakMap` 中添加新元素。

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.set()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, "foo");
weakmap1.set(object2, "bar");

console.log(weakmap1.get(object1));
// Expected output: "foo"

console.log(weakmap1.get(object2));
// Expected output: "bar"
```

## 语法

```js-nolint
set(key, value)
```

### 参数

- `key`
  - : 必须是对象或[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)。要添加到 `WeakMap` 对象的元素的键。
- `value`
  - : 任何要添加到 `WeakMap` 对象的元素的值。

### 返回值

该 `WeakMap` 对象

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `key` 不是一个对象或[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，则抛出该异常。

## 示例

### 使用 set() 方法

```js
const wm = new WeakMap();
const obj = {};

// 将新元素添加到 WeakMap
wm.set(obj, "foo").set(window, "bar"); // 链式调用

// 更新 WeakMap 中的元素
wm.set(obj, "baz");

// 使用非全局注册的符号作为键
const sym = Symbol("foo");
wm.set(sym, "baz");
wm.set(Symbol.iterator, "qux");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
