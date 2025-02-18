---
title: 預設參數
slug: Web/JavaScript/Reference/Functions/Default_parameters
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Functions")}}

**函式預設參數**允許沒有傳入值或是傳入值為 `undefined` 的情況下，參數能以指定的預設值初始化。

{{InteractiveExample("JavaScript Demo: Functions Default")}}

```js interactive-example
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5
```

## 語法

```js-nolint
function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
  // …
}
```

## 說明

在 JavaScript 中，函式的參數預設值都為 {{jsxref("undefined")}}。然而，某些情況下可能需要指定不同的預設值。這也是函式參數預設值可以幫上忙的地方。

在下列範例裡，若 `multiply` 被呼叫時，並沒有提供 `b` 的值，`b` 的值就會是 `undefined`，計算 `a * b` 和 `multiply` 就會回傳 `NaN`。

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN！
```

以往設定預設值的常用方式，是在函式裡檢查傳入參數是否為 `undefined`，是的話就爲它指定一個值。在以下範例裡，如果 `multiply` 被呼叫時只有傳入一個參數，`b` 就會被設定成 `1`：

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

有了預設參數，就不用在函式裡檢查了。現在只需要在函式起始處為指定 `b` 的值為 `1`：

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

參數仍維持由左至右設定，就算後面出現沒有預設值的參數，依然會覆寫參數預設值。

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

> [!NOTE]
> 第一個預設參數及其後面所有參數皆不會影響函式的 [`length`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/length)。

預設參數的初始值設定位於自身的作用域內，該作用域是函式主體所建立作用域的父作用域。

這表示稍早宣告的參數可以在後續參數的初始值設置中被引用。然而，在函式主體內宣告的函式與變數，無法在預設參數的初始值中被引用；若嘗試這麼做，將會拋出執行階段的 {{jsxref("ReferenceError")}}。這也包含在函式主體內以 [`var`](/zh-TW/docs/Web/JavaScript/Reference/Statements/var) 宣告的變數。

例如，以下函式在呼叫時會拋出 `ReferenceError`，因為預設參數值無法存取函式主體的子作用域：

```js example-bad
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go is not defined
```

此函式將輸出*參數* `a` 的值，因為變數 `var a` 只被提升（hoist）至函式主體所建立的作用域頂端，而非參數清單所建立的父作用域，因此 `b` 無法存取該變數的值。

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

預設參數允許使用任何運算式，但不可使用 {{jsxref("Operators/await", "await")}} 或 {{jsxref("Operators/yield", "yield")}}，因為這些運算子會導致預設運算式的計算暫停。參數的初始化必須是*同步*完成的。

```js example-bad
async function f(a = await Promise.resolve(1)) {
  return a;
}
```

> [!NOTE]
> 由於預設參數是在函式被呼叫時計算，而不是在函式被定義時，因此 `await` 和 `yield` 運算子的有效性取決於該函式本身，而非其外圍函式。例如，如果當前函式不是 `async`，則 `await` 會被解析為識別字，並遵循一般的[識別字語法規則](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar#識別字)，即便該函式嵌套於 `async` 函式內也是如此。

## 範例

### 傳入 undefined 和其它假值

在以下範例的第二次呼叫中，即使第一個參數被明確設定為 `undefined`（但不是 `null` 或其他{{Glossary("falsy", "假")}}值），`num` 參數的值仍然是預設值。

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number'（num 被設定為 1）
test(undefined); // 'number'（num 也被設定為 1）

// 測試其它假值（falsy）：
test(""); // 'string'（num 被設定為空字串 ''）
test(null); // 'object'（num 被設定為 null）
```

### 呼叫時計算值

預設引數會在*呼叫時*進行計算。與 Python（例如）不同，每次呼叫函式時都會建立一個新的物件。

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], 而非 [1, 2]
```

這也適用於函式與變數：

```js
function callSomething(thing = something()) {
  return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

### 前面的參數可供之後預設參數使用

較早（位於左側）定義的參數可供後續的預設參數使用：

```js
function greet(greeting, name, message = `${greeting}，${name}`) {
  return [greeting, name, message];
}

greet("你好", "大衛"); // ["你好", "大衛", "你好，大衛"]
greet("你好", "大衛", "生日快樂！"); // ["你好", "大衛", "生日快樂！"]
```

這個函式可以近似如下，它展示了處理許多邊緣情況：

```js
function go() {
  return ":P";
}

function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### 有指定預設值的解構參數

你可以透過[解構賦值](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)語法指定預設值。

一種常見的做法是將空物件或空陣列作為解構參數的預設值，例如：`[x = 1, y = 2] = []`。這樣即使函式沒有接收到任何引數，這些值仍然會被預先填入：

```js
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// 物件操作抑是如此：
function preFilledObject({ z = 3 } = {}) {
  return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2
```

## 規範

{{Specifications}}

## 瀏覽器的兼容性

{{Compat}}

## 參見

- [函式](/zh-TW/docs/Web/JavaScript/Guide/Functions)指南
- [函式](/zh-TW/docs/Web/JavaScript/Reference/Functions)
- [其餘參數](/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [空值合併運算子（`??`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
