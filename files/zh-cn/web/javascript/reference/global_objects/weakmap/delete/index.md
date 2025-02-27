---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
---

{{JSRef}}

{{jsxref("WeakMap")}} 实例的 **`delete()`** 方法从该 `WeakMap` 中删除指定的元素。

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.delete()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};

weakmap1.set(object1, 42);

console.log(weakmap1.delete(object1));
// Expected output: true

console.log(weakmap1.has(object1));
// Expected output: false
```

## 概述

**`delete()`** 方法可以从一个 `WeakMap` 对象中删除指定的元素。

## 语法

```js-nolint
weakMapInstance.delete(key)
```

### 参数

- `key`
  - : 要从 `WeakMap` 对象中删除的元素的键。

### 返回值

如果成功在 `WeakMap` 对象中删除了元素，则返回 `true`。如果未在 `WeakMap` 中找到该键，则返回 `false`。如果 `key` 不是对象或[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，则始终返回 `false`。

## 示例

### 使用 delete() 方法

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.delete(window); // 返回 true。成功删除。

wm.has(window); // 返回 false。WeakMap 中已经不存在 window 对象。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("WeakMap")}}
