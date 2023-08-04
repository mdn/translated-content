---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
---

{{JSRef}}

**`get()`** 方法从 `Map` 对象返回指定的元素。如果与所提供的键相关联的值是一个对象，那么你将获得该对象的引用，对该对象所做的任何更改都会有效地在 `Map` 对象中修改它。

{{EmbedInteractiveExample("pages/js/map-prototype-get.html")}}

## 语法

```js-nolint
get(key)
```

### 参数

- `key`
  - : 从 `Map` 对象返回的元素的键。

### 返回值

与指定键相关联的元素，如果键在 `Map` 对象中找不到，则返回 {{jsxref("undefined")}}。

## 示例

### 使用 get()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // 返回 "foo"
console.log(myMap.get("baz")); // 返回 undefined
```

### 使用 get() 检索对对象的引用

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

注意，持有原始对象引用的映射实际上意味着对象不能被垃圾回收，这可能会导致意外的内存问题。如果你希望存储在映射中的对象具有与原始对象相同的生命周期，请考虑使用 {{jsxref("WeakMap")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
