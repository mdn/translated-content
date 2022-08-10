---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
tags:
  - ECMAScript6
  - JavaScript
  - Prototype
  - set
  - 原型
  - 方法
translation_of: Web/JavaScript/Reference/Global_Objects/Set/clear
---
{{JSRef}}

**`clear()`** 方法用来清空一个 `Set` 对象中的所有元素。

## 语法

```plain
mySet.clear();
```

### 返回值

{{jsxref("undefined")}}.

## 示例

```js
var mySet = new Set();
mySet.add(1);
mySet.add("foo");

mySet.size;       // 2
mySet.has("foo"); // true

mySet.clear();

mySet.size;       // 0
mySet.has("bar")  // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
