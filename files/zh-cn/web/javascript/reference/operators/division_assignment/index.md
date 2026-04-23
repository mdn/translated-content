---
title: 除法赋值（/=）
slug: Web/JavaScript/Reference/Operators/Division_assignment
---

**除法赋值**（**`/=`**）运算符将变量除以右操作数的值，并将结果赋值给该变量。

{{InteractiveExample("JavaScript Demo: Expressions - Division assignment operator")}}

```js interactive-example
let a = 3;

a /= 2;
console.log(a);
// Expected output: 1.5

a /= 0;
console.log(a);
// Expected output: Infinity

a /= "hello";
console.log(a);
// Expected output: NaN
```

## 语法

```js-nolint
x /= y // x = x / y
```

## 示例

### 使用除法赋值

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
bar /= "foo"; // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [除法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
