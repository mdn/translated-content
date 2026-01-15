---
title: AsyncFunction() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

**`AsyncFunction()`** 构造函数创建一个新的 {{jsxref("AsyncFunction")}} 对象。

注意，`AsyncFunction` *不是*全局对象。它可以通过以下代码获取：

```js
const AsyncFunction = async function () {}.constructor;
```

`AsyncFunction()` 构造函数不能直接使用，并且所有在 {{jsxref("Function/Function", "Function()")}} 描述中提到的注意事项都适用于 `AsyncFunction`。

## 语法

```js-nolint
new AsyncFunction(functionBody)
new AsyncFunction(arg1, functionBody)
new AsyncFunction(arg1, arg2, functionBody)
new AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncFunction(functionBody)
AsyncFunction(arg1, functionBody)
AsyncFunction(arg1, arg2, functionBody)
AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> 无论是否使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用 `AsyncFunction()`，都可以创建一个新的 `AsyncFunction` 实例。

### 参数

参见 {{jsxref("Function/Function", "Function()")}}。

## 示例

### 从 AsyncFunction() 构造函数创建异步函数

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const AsyncFunction = async function () {}.constructor;

const fn = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

fn(10, 20).then((v) => {
  console.log(v); // 4 秒过后，输出 30
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`async function` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)
- [`async function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function)
- [`Function()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
