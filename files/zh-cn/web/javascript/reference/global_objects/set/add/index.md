---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---

{{JSRef}}

{{jsxref("Set")}} 实例的 **`add()`** 方法会在该集合中插入一个具有指定值的新元素，如果该 `Set` 对象中没有具有相同值的元素。

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

## 语法

```js-nolint
add(value)
```

### 参数

- `value`
  - : 要添加到 `Set` 对象的元素的值。

### 返回值

添加了值的 `Set` 对象。

## 示例

### 使用 add() 方法

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // 可以链式调用

console.log(mySet);
// Set [1, 5, "some text"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
