---
title: 异步函数（async function）表达式
slug: Web/JavaScript/Reference/Operators/async_function
original_slug: Web/JavaScript/Reference/Operators/async
---

{{jsSidebar("Operators")}}

**`async function`** 关键字用来在表达式中定义异步函数。当然，你也可以用[异步函数语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)来定义。

## 语法

```js-nolint
async function (param0) {
  statements
}
async function (param0, param1) {
  statements
}
async function (param0, param1, /* … ,*/ paramN) {
  statements
}

async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

异步函数也可以使用[箭头语法](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)进行定义。

### 参数

- `name` {{optional_inline}}
  - : 此异步函数的名称，可省略。如果省略则这个函数将成为*匿名*函数。该名称仅可在本函数中使用。
- `paramN` {{optional_inline}}
  - : 传入函数的形参名称。
- `statements` {{optional_inline}}
  - : 组成函数体的语句。

## 描述

异步函数表达式与{{jsxref('Statements/async_function', '异步函数语句')}}非常相似，语法也基本相同。它们之间的主要区别在于异步函数表达式可以省略函数名称来创建一个*匿名*函数。另外，异步函数表达式还可以用在 [IIFE](/zh-CN/docs/Glossary/IIFE)（立即执行函数表达式，Immediately Invoked Function Expression）中，可以在定义后尽快执行，更多信息详见[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)。

## 示例

### 一个简单例子

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

const add = async function (x) { // 赋值给变量的异步函数表达式
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v);  // 4 秒后打印 60
});

(async function (x) { // 用作 IIFE 的异步函数表达式
  const p1 = resolveAfter2Seconds(20);
  const p2 = resolveAfter2Seconds(30);
  return x + await p1 + await p2;
})(10).then((v) => {
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
