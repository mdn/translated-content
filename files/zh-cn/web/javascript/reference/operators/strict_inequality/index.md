---
title: 严格不相等（!==）
slug: Web/JavaScript/Reference/Operators/Strict_inequality
---

{{jsSidebar("Operators")}}

严格不相等运算符（`!==`）检查它的两个对象是否不相等，返回一个布尔结果。与[不相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Inequality)运算符不同，严格不相等运算符总是认为不同类型的对象是不同的。

{{InteractiveExample("JavaScript Demo: Expressions - Strict inequality operator")}}

```js interactive-example
console.log(1 !== 1);
// Expected output: false

console.log("hello" !== "hello");
// Expected output: false

console.log("1" !== 1);
// Expected output: true

console.log(0 !== false);
// Expected output: true
```

## 语法

```js-nolint
x !== y
```

## 描述

严格不相等运算符检查其对象是否不相等。它是[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)运算符的否定，因此下面两行总是会给出相同的结果：

```js
x !== y;

!(x === y);
```

有关比较算法的详细信息，请参阅[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)运算符的页面。

与严格相等运算符一样，严格不相等算符始终认为不同类型的对象是不同的：

```js
3 !== "3"; // true
```

## 示例

### 比较相同类型的对象

```js
"hello" !== "hello"; // false
"hello" !== "hola"; // true

3 !== 3; // false
3 !== 4; // true

true !== true; // false
true !== false; // true

null !== null; // false
```

### 比较不同类型的操作数

```js
"3" !== 3; // true
true !== 1; // true
null !== undefined; // true
```

### 比较对象

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 !== object2); // true
console.log(object1 !== object1); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)
- [不相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Inequality)
- [严格相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)
