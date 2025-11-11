---
title: 不相等（!=）
slug: Web/JavaScript/Reference/Operators/Inequality
---

不相等运算符（`!=`）检查其两个操作数是否不相等，并返回布尔结果。与[严格不相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_inequality)运算符不同，它会转换并比较不同类型的操作数。

{{InteractiveExample("JavaScript Demo: Expressions - Inequality operator")}}

```js interactive-example
console.log(1 != 1);
// Expected output: false

console.log("hello" != "hello");
// Expected output: false

console.log("1" != 1);
// Expected output: false

console.log(0 != false);
// Expected output: false
```

## 语法

```js-nolint
x != y
```

## 描述

不等式运算符检查其操作数是否不相等。这是[相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)运算符的否定，因此以下两行将始终给出相同的结果：

```js
x != y;

!(x == y);
```

有关比较算法的详细信息，请参见[相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)运算符的页面。

与相等运算符一样，不相等运算符将尝试转换和比较不同类型的操作数：

```js
3 != "3"; // false
```

为避免这种情况，并要求将不同类型视为不同，请使用[严格不相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_inequality)运算符：

```js
3 !== "3"; // true
```

## 示例

### 没有类型转换的比较

```js
1 != 2; // true
"hello" != "hola"; // true

1 != 1; // false
"hello" != "hello"; // false
```

### 有类型转换的比较

```js
"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false，看看逻辑非运算符
0 != !!undefined; // false，看看逻辑非运算符
null != undefined; // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true
```

### 比较对象

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 != object2); // true
console.log(object1 != object1); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)
- [严格相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [严格不相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
