---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---
{{JSRef}}

**`add()`** 方法用来向一个 `Set` 对象的末尾添加一个指定的值。

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

## 语法

```js
add(value)
```

### 参数

- `value`
  - : 必需。需要添加到 `Set` 对象的元素的值。

### 返回值

`Set` 对象本身。

## 示例

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // 可以链式调用

console.log(mySet);
// Set [1, 5, "some text"]

mySet.add(5).add(1);
console.log(mySet);
// Set [1, 5, "some text"]  // 重复的值没有被添加进去
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
