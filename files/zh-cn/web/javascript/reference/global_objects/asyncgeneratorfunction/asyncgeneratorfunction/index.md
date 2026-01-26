---
title: AsyncGeneratorFunction() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

**`AsyncGeneratorFunction()`** 构造函数创建 {{jsxref("AsyncGeneratorFunction")}} 对象。

注意，`AsyncGeneratorFunction` 不是全局对象。它可以通过执行以下代码获取。

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

`AsyncGeneratorFunction()` 构造函数不应直接使用，并且所有在 {{jsxref("Function/Function", "Function()")}} 的描述中提到的注意事项也适用于 `AsyncGeneratorFunction()`。

## 语法

```js-nolint
new AsyncGeneratorFunction(functionBody)
new AsyncGeneratorFunction(arg1, functionBody)
new AsyncGeneratorFunction(arg1, arg2, functionBody)
new AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncGeneratorFunction(functionBody)
AsyncGeneratorFunction(arg1, functionBody)
AsyncGeneratorFunction(arg1, arg2, functionBody)
AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> 无论是否使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用 `AsyncGeneratorFunction()`，都可以创建一个新的 `AsyncGeneratorFunction` 实例。

### 参数

参见 {{jsxref("Function/Function", "Function()")}}。

## 示例

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

- [`async function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function*)
- [`Function()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)指南
- {{jsxref("Functions", "函数", "", 1)}}
