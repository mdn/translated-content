---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
---

{{JSRef}}

**`clear()`** 方法移除 `Set` 对象中所有元素。

{{EmbedInteractiveExample("pages/js/set-prototype-clear.html")}}

## 语法

```js-nolint
clear()
```

### 返回值

{{jsxref("undefined")}}。

## 示例

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
