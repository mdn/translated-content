---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
---

{{JSRef}}

{{jsxref("Set")}} 实例的 **`clear()`** 方法移除该集合中的所有元素。

{{EmbedInteractiveExample("pages/js/set-prototype-clear.html")}}

## 语法

```js-nolint
clear()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 使用 clear() 方法

```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
