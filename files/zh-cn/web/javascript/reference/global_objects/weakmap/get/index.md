---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
---

{{JSRef}}

**`get()`** 方法返回 `WeakMap` 指定的元素。

## 语法

```plain
wm.get(key);
```

### 参数

- key
  - : 必须。想要从 `WeakMap` 获取的元素的键。

### 返回值

### 返回与指定键相关联的值，如果 `WeakMap` 对象找不到这个键则返回 `undefined`。

## 示例

### 使用 `get` 方法

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // 返回 "foo".
wm.get("baz"); // 返回 undefined.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.set()")}}
- {{jsxref("WeakMap.has()")}}
