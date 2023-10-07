---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
---

{{JSRef("Global_Objects", "WeakMap")}}

## 概述

**`delete()`** 方法可以从一个 `WeakMap` 对象中删除指定的元素。

## 语法

```plain
wm.delete(key);
```

### Parameters 参数

- key
  - : 需要删除的元素的键

### 返回值

如果成功删除，返回 `true`，否则返回 `false`。

## 示例

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.delete(window); // 返回 true，表示删除成功。

wm.has(window); // 返回 false，因为 window 对象已经被删除了。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("WeakMap")}}
