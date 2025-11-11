---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
---

{{jsxref("Set")}} 实例的 **`delete()`** 方法从该集合中删除指定值，如果该值在集合中。

{{InteractiveExample("JavaScript Demo: Set.prototype.delete()")}}

```js interactive-example
const set1 = new Set();
set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// Delete any point with `x > 10`.
set1.forEach((point) => {
  if (point.x > 10) {
    set1.delete(point);
  }
});

console.log(set1.size);
// Expected output: 1
```

## 语法

```js-nolint
setInstance.delete(value)
```

### 参数

- `value`
  - : 要从 `Set` 中移除的值。

### 返回值

成功删除返回 `true`，否则返回 `false`。

## 示例

### 使用 delete() 方法

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // 返回 false，不包含 "bar" 这个元素
console.log(mySet.delete("foo")); // 返回 true，删除成功

console.log(mySet.has("foo")); // 返回 false，"foo" 已经成功删除
```

### 从 Set 中删除对象

因为对象是通过引用比较的，所以如果没有对原始对象的引用，就必须通过检查各个属性来删除它们。

```js
const setObj = new Set(); // 创建一个新 set

setObj.add({ x: 10, y: 20 }); // 在 set 中添加对象

setObj.add({ x: 20, y: 30 }); // 在 set 中添加对象

// 删除任何 'x > 10' 的点
setObj.forEach((point) => {
  if (point.x > 10) {
    setObj.delete(point);
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}
