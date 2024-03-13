---
title: 加法赋值（+=）
slug: Web/JavaScript/Reference/Operators/Addition_assignment
---

{{jsSidebar("Operators")}}

加法赋值运算符（`+=`）将右操作数的值添加到变量，并将结果分配给该变量。两个操作数的类型决定了加法赋值运算符的行为，可能为加法或拼接。

{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}

## 语法

```js-nolint
x += y // x = x + y
```

## 示例

### 使用加法赋值

```js
let baz = true;

// Boolean + Number -> 加法
baz += 1; // 2

// Number + Boolean -> 加法
baz += false; // 2
```

```js
let foo = "foo";

// String + Boolean -> 拼接
foo += false; // "foofalse"

// String + String -> 拼接
foo += "bar"; // "foofalsebar"
```

```js
let bar = 5;

// Number + Number -> 加法
bar += 2; // 7

// Number + String -> 拼接
bar += "foo"; // "7foo"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [加法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)
