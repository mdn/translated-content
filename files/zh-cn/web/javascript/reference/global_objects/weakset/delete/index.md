---
title: WeakSet.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/delete
---

{{JSRef}}

**`delete()`** 方法从 `WeakSet 对象中`移除指定的元素。

## 语法

```plain
ws.delete(value);
```

### 参数

- value
  - : 必须。从 `WeakSet` 对象中移除的对象。

### 返回值

如果在 `WeakSet` 对象中成功移除元素则返回 true。如果 key 没有在 WeakSet 中找到或者 key 不是一个对象，则返回 false。

## 示例

### 使用 `delete` 方法

```js
var ws = new WeakSet();
var obj = {};

ws.add(window);

ws.delete(obj); // 返回 false。因为找不到要删除的 obj
ws.delete(window); // 返回 true。成功地移除了元素

ws.has(window); // 返回 false。因为 WeakSet 中已经不存在 window 对象
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.clear()")}}
