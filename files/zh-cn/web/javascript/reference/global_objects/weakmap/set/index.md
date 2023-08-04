---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
---

{{JSRef}}

**`set()`** 方法根据指定的 `key` 和 `value` 在 `WeakMap`对象中添加新/更新元素。

{{EmbedInteractiveExample("pages/js/weakmap-prototype-set.html")}}

## 语法

```plain
wm.set(key, value);
```

### 参数

- key
  - : 必须的。必须是`对象`。是要在`WeakMap` 对象中添加元素的 key 部分。
- value
  - : 必须的。任意的值。是要在`WeakMap` 对象中添加/元素的 value 部分。

### 返回值

该`WeakMap`对象

## 示例

### 使用 `set` 方法

```js
var wm = new WeakMap();
var obj = {};

// Add new elements to the WeakMap
wm.set(obj, "foo").set(window, "bar"); // chainable

// Update an element in the WeakMap
wm.set(obj, "baz");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
