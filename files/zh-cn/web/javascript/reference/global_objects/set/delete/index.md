---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
---

{{JSRef}}

**`delete()`** 方法从 `Set` 对象中删除指定的值（如果该值在 `Set` 中）。

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## 语法

```js-nolint
delete(value)
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

因为对象是通过引用比较的，所以如果没有对原始对象的引用，就必须通过检查单个属性来删除它们。

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
