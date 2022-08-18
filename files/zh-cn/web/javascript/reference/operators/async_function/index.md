---
title: async function expression
slug: Web/JavaScript/Reference/Operators/async_function
original_slug: Web/JavaScript/Reference/Operators/async允许声明一个函数为一个包含异步操作的函数
---
{{jsSidebar("Operators")}}

**`async function`** 关键字用来在表达式中定义异步函数。当然，你也可以用 {{jsxref('Statements/async_function', '异步函数语句')}} 来定义。

## 语法

```plain
async function [name]([param1[, param2[, ..., paramN]]]) { statements }
```

### 参数

- `name`
  - : 此异步函数的名称，可省略。如果省略则这个函数将成为匿名函数。该名称仅可在本函数中使用。
- `paramN`
  - : 传入函数的形参名称。
- `statements`
  - : 组成函数体的语句。

## 描述

异步函数表达式与 {{jsxref('Statements/async_function', '异步函数语句')}} 非常相似，语法也基本相同。它们之间的主要区别在于异步函数表达式可以省略函数名称来创建一个匿名函数。另外，异步函数表达式还可以用在 {{Glossary("IIFE")}} (立即执行函数表达式，Immediately Invoked Function Expression) 中，更多信息见 {{jsxref('Reference/Functions', '函数')}}。

## 示例

### 一个简单例子

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

// async function expression assigned to a variable
var add1 = async function(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then(v => {
  console.log(v);  // 4 秒后打印 60
});

(async function(x) { // async function expression used as an IIFE
  var p_a = resolveAfter2Seconds(20);
  var p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
})(10).then(v => {
  console.log(v);  // 2 秒后打印 60
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Statements/async_function", "异步函数语句")}}
- {{jsxref("AsyncFunction")}} 对象
- {{jsxref("Operators/await", "await 操作符")}}
