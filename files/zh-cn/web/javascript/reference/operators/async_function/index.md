---
title: 异步函数（async function）表达式
slug: Web/JavaScript/Reference/Operators/async_function
---

{{jsSidebar("Operators")}}

**`async function`** 关键字可用于定义表达式中的异步函数。

你还可以使用[异步函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)。

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
  - : 函数名称，可省略。如果省略则这个函数将成为*匿名*函数。该名称仅可在本函数中使用。
- `paramN` {{optional_inline}}
  - : 传入函数的形参名称。
- `statements` {{optional_inline}}
  - : 构成函数主体的语句。

## 描述

`async function` 表达式与{{jsxref("Statements/async_function", "异步函数语句", "", 1)}}非常相似，语法也基本相同。异步 `function` 表达式和异步 `function` 语句之间的主要区别在于*函数名称*，它可以在 `async function` 表达式中省略，从而创建一个*匿名*函数。`async function` 表达式可以用作 [IIFE](/zh-CN/docs/Glossary/IIFE)（立即执行函数表达式，Immediately Invoked Function Expression），它在定义后立即运行。参见[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)章节以获取更多信息。

## 示例

### 简单示例

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// 赋值给变量的异步函数表达式
const add = async function (x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // 4 秒后打印 60
});

// 用作 IIFE 的异步函数表达式
(async function (x) {
  const p1 = resolveAfter2Seconds(20);
  const p2 = resolveAfter2Seconds(30);
  return x + (await p1) + (await p2);
})(10).then((v) => {
  console.log(v); // 2 秒后打印 60
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/async_function", "异步函数", "", 1)}}
- {{jsxref("AsyncFunction")}} 对象
- {{jsxref("Operators/await", "await")}}
