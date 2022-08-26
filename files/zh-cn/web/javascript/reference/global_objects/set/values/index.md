---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
---
{{JSRef}}

**`values()`** 方法按照元素插入顺序返回一个具有 `Set` 对象每个元素值的全新 `Iterator` 对象。

**`keys()`** 方法是这个方法的别名（与 {{jsxref("Map")}} 对象相似）；他们的行为一致，都是返回`Set` 对象中的元素值。

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

## 语法

```plain
mySet.values();
```

### 返回值

按照元素插入顺序返回一个包含给定的 `Set` 对象中每个元素值的全新 **`Iterator`** 对象。

## 示例

### 使用 `values()`

```js
var mySet = new Set();
mySet.add('foo');
mySet.add('bar');
mySet.add('baz');

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set.prototype.entries()")}}
