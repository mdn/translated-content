---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
---

{{JSRef}}

**`Async`**`Function` 建構子建立一個新的 {{jsxref("Statements/async_function", "async function")}} 物件。在 JavaScript 中，每一個非同步函數實際上是一個 `AsyncFunction` 物件。

注意 `AsyncFunction` 不是一個全域物件。 它可以以下程式碼獲得。

```js
const AsyncFunction = async function () {}.constructor;
```

## 語法

```js-nolint
new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)
```

### 參數

- `arg1, arg2, ... argN`
  - : Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript identifier or a list of such strings separated with a comma; for example "`x`", "`theValue`", or "`a,b`".
- `functionBody`
  - : 一個字串。描述該函數定義的陳述式(statements)。

## 說明

{{jsxref("Statements/async_function", "async function")}} objects created with the `AsyncFunction` constructor are parsed when the function is created. This is less efficient than declaring an async function with an {{jsxref("Statements/async_function", "async function expression")}} and calling it within your code, because such functions are parsed with the rest of the code.

All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.

> **備註：** {{jsxref("Statements/async_function", "async functions")}} created with the `AsyncFunction` constructor do not create closures to their creation contexts; they are always created in the global scope. When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the `AsyncFunction` constructor was called. This is different from using {{jsxref("Global_Objects/eval", "eval")}} with code for an async function expression.

以函數的方式執行 `AsyncFunction` 建構式 (不使用 `new` 運算子) 和以建構子的方式執行是等效的。

## 屬性

- **`AsyncFunction.length`**
  - : `AsyncFuction` 建構子的長度為 1。
- {{jsxref("AsyncFunction.prototype")}}
  - : 可加入屬性至所有陣列物件。

## 範例

### `AsyncFunction` 建構子建立一個非同步函數

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

var a = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

a(10, 20).then((v) => {
  console.log(v); // prints 30 after 4 seconds
});
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Statements/async_function", "async function function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope", "", 1)}}
