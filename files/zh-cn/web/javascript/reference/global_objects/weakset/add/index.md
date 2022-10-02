---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
---

{{JSRef}}

**`add()`** 方法在 `WeakSet` 对象的最后一个元素后添加新的对象。

## 语法

```plain
ws.add(value);
```

### 参数

- value
  - : 必须。将对象添加进 `WeakSet` 集合中。

### 返回值

`WeakSet` 对象。

## 使用 `add` 方法

```js
var ws = new WeakSet();

ws.add(window); // 添加 window 对象进 WeakSet 中

ws.has(window); // true

// Weakset 仅取得对象作为参数
ws.add(1);
// 结果为 "TypeError: Invalid value used in weak set" 在 Chrome 浏览器中
// 并且 "TypeError: 1 is not a non-null object" 在 Firefox 浏览器中
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
