---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
---

{{JSRef}}

**`has()`** 方法根据 `WeakSet` 是否存在相应对象返回布尔值。

## 语法

```plain
ws.has(value);
```

### 参数

- value
  - : 必须。测试 `WeakSet` 中是否存在该对象。

### 返回值

- Boolean
  - : 如果 `WeakSet` 对象中存在指定的元素，返回 true；否则返回 `false`。

## 示例

### 使用 `has` 方法

```js
var ws = new WeakSet();
var obj = {};
ws.add(window);

mySet.has(window); // 返回 true
mySet.has(obj); // 返回 false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
