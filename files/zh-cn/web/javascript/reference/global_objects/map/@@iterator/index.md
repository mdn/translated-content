---
title: Map.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/@@iterator
---

{{JSRef}}

**`@@iterator`** 属性的初始值与 {{jsxref("Map.prototype.entries()", "entries")}} 属性的初始值是同一个函数对象。

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## 语法

```plain
myMap[Symbol.iterator]
```

### 返回值

map 的 **iterator** 函数默认就是 {{jsxref("Map.prototype.entries()", "entries()")}} 函数。

## 示例

### 使用 `[@@iterator]()`

```js
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter = myMap[Symbol.iterator]();
//返回的其实是个 generator
console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

### 在 `for..of` 中使用 `[@@iterator]()`

```js
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const entry of myMap) {
  console.log(entry);
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (var v of myMap) {
  console.log(v);
}

// 0: foo
// 1: bar
// [Object]: baz
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
