---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---

{{jsxref("Set")}} 实例的 **`has()`** 方法返回一个布尔值来指示对应的值是否存在于该集合中。

{{InteractiveExample("JavaScript Demo: Set.prototype.has()")}}

```js interactive-example
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false
```

## 语法

```js-nolint
has(value)
```

### 参数

- `value`
  - : 要测试是否存在于 `Set` 对象中的值。

### 返回值

如果 `Set` 对象中存在具有指定值的元素，则返回 `true`；否则返回 `false`。

## 示例

### 使用 has() 方法

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.has("foo")); // true
console.log(mySet.has("bar")); // false

const set1 = new Set();
const obj1 = { key1: 1 };
set1.add(obj1);

console.log(set1.has(obj1)); // true
console.log(set1.has({ key1: 1 })); // false, 因为它们是不同的对象引用
console.log(set1.add({ key1: 1 })); // 现在 set1 包含 2 个条目
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
