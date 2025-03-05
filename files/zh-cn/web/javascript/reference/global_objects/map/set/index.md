---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
---

{{JSRef}}

{{jsxref("Map")}} 实例的 **`set()`** 方法会向 `Map` 对象添加或更新一个指定的键值对。

{{InteractiveExample("JavaScript Demo: Map.prototype.set()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.get("bar"));
// Expected output: "foo"

console.log(map1.get("baz"));
// Expected output: undefined
```

## 语法

```js-nolint
set(key, value)
```

### 参数

- `key`
  - : 要添加到 `Map` 对象的元素的键。该值可以是任何 [JavaScript 类型](/zh-CN/docs/Web/JavaScript/Data_structures)（任何[原始值](/zh-CN/docs/Web/JavaScript/Data_structures#原始值)或任何类型的 [JavaScript 对象](/zh-CN/docs/Web/JavaScript/Data_structures#object)）。
- `value`
  - : 要添加到 `Map` 对象的元素的值。该值可以是任何 [JavaScript 类型](/zh-CN/docs/Web/JavaScript/Data_structures)（任何[原始值](/zh-CN/docs/Web/JavaScript/Data_structures#原始值)或任何类型的 [JavaScript 对象](/zh-CN/docs/Web/JavaScript/Data_structures#object)）。

### 返回值

`Map` 对象。

## 示例

### 使用 set()

```js
const myMap = new Map();

// 将一个新元素添加到 Map 对象
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// 在 Map 对象中更新某个元素的值
myMap.set("bar", "baz");
```

### 链式使用 set()

因为 `set()` 方法返回 `Map` 对象本身，所以你可以像下面这样链式调用它：

```js
// 链式添加元素
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
