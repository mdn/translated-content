---
title: WeakMap.prototype.clear()
slug: conflicting/Web/JavaScript/Reference/Deprecated_and_obsolete_features
original_slug: Web/JavaScript/Reference/Global_Objects/WeakMap/clear
---
{{JSRef}} {{deprecated_header}}

**`clear()`** 用来从 `WeakMap` 对象中移除所有元素。但不再是 ECMAScript 和它的实现部分。

## 语法

```js
clear()
```

## 示例

### 使用 `clear` 方法

```js example-bad
var wm = new WeakMap();
var obj = {};

wm.set(obj, "foo");
wm.set(window, "bar");

wm.has(obj); // true
wm.has(window); // true

wm.clear();

wm.has(obj)  // false
wm.has(window)  // false
```

## 规范

当前版本或者起草中没有这个方法，这个方法在版本 28（2014 年 10 月 14）之前是 ECMAScript 6 起草规范的一部分，但是在起草之后的版本中被移除了。它不在是最终标准的一部分了 。

## 浏览器兼容性

{{Compat}}

## 相近

- {{jsxref("WeakMap")}}
