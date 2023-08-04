---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
---

{{JSRef}}

**`has()`** 方法根据 WeakMap 对象的元素中是否存在 key 键返回一个 boolean 值。

## 语法

```plain
wm.has(key);
```

### Parameters

- key
  - : 必须的。用来检测 WeakMap 对象中是否存在元素的键为 key。

### Return value

- Boolean
  - : 如果指定的 key 存在于某个元素中则返回 true，否则返回 flase。

## 示例

### 使用 `has` 方法

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // returns true
wm.has("baz"); // returns false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
