---
title: AsyncGeneratorFunction() constructor
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction
---

{{JSRef}}

**`AsyncGeneratorFunction()`** 构造函数创建一个新的 {{jsxref("AsyncGeneratorFunction")}} 对象。在 JavaScript 中，每个[异步生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)实际上都是一个 `AsyncGeneratorFunction` 对象。

注意，`AsyncGeneratorFunction` 不是全局对象。它可以通过执行以下代码获取。

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

`AsyncGeneratorFunction()` 构造函数不应直接使用，并且所有在 {{jsxref("Function/Function", "Function()")}} 的描述中提到的注意事项也适用于 `AsyncGeneratorFunction()`。

## 语法

```js-nolint
new AsyncGeneratorFunction(functionBody)
new AsyncGeneratorFunction(arg0, functionBody)
new AsyncGeneratorFunction(arg0, arg1, functionBody)
new AsyncGeneratorFunction(arg0, arg1, /* … ,*/ argN, functionBody)

AsyncGeneratorFunction(functionBody)
AsyncGeneratorFunction(arg0, functionBody)
AsyncGeneratorFunction(arg0, arg1, functionBody)
AsyncGeneratorFunction(arg0, arg1, /* … ,*/ argN, functionBody)
```

> **备注：** 无论是否使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用 `AsyncGeneratorFunction()`，都可以创建一个新的 `AsyncGeneratorFunction` 实例。

### 参数

参见 {{jsxref("Function/Function", "Function()")}}。

## 参见

### 使用构造函数

以下示例使用 `AsyncGeneratorFunction` 构造函数创建一个异步生成器函数。

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
const createAsyncGenerator = new AsyncGeneratorFunction("a", "yield a * 2");
const asyncGen = createAsyncGenerator(10);
asyncGen.next().then((res) => console.log(res.value)); // 20
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`async function*` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function*)
- [`Function()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- {{jsxref("Functions", "函数", "", 1)}}
