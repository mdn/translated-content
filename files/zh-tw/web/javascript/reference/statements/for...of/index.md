---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Statements")}}

**`for...of`** 語法執行一個迴圈，該迴圈操作來自[可迭代物件](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代協議)的值序列。可迭代物件包括內置物件實例，例如 {{jsxref("Array")}}、{{jsxref("String")}}、{{jsxref("TypedArray")}}、{{jsxref("Map")}}、{{jsxref("Set")}}、{{domxref("NodeList")}}（以及其他 DOM 集合），還包括 {{jsxref("Functions/arguments", "arguments")}} 物件、由[生成器函數](/zh-TW/docs/Web/JavaScript/Reference/Statements/function*)生成的[生成器](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Generator)，以及用戶定義的可迭代物件。

{{InteractiveExample("JavaScript Demo: Statement - For...Of")}}

```js interactive-example
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## 語法

```js-nolint
for (variable of iterable)
  statement
```

- `variable`
  - : 在每次迭代中從序列得到一個值，可以是用 [`const`](/zh-TW/docs/Web/JavaScript/Reference/Statements/const)、[`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let) 或 [`var`](/zh-TW/docs/Web/JavaScript/Reference/Statements/var) 宣告的變數，也可以是[賦值](/zh-TW/docs/Web/JavaScript/Reference/Operators/Assignment)目標（例如先前宣告的變數、物件屬性或[解構賦值模式](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)）。使用 `var` 宣告的變數不是迴圈的局部變數，即它們與 `for...of` 迴圈位於同一作用域中。
- `iterable`
  - : 可迭代物件，迴圈操作的值序列的來源。
- `statement`
  - : 每次迭代後執行的語句，可以參考 `variable`。可以使用[區塊語句](/zh-TW/docs/Web/JavaScript/Reference/Statements/block)來執行多個語句。

## 說明

`for...of` 迴圈依序逐個操作來自可迭代物件的值。迴圈對值的每次操作稱為一次*迭代*，而迴圈本身則稱為*迭代可迭代物件*，每次迭代執行可能參考當前序列值的語句。

當 `for...of` 迴圈在可迭代物件上進行迭代時，它首先調用可迭代物件的 [`[Symbol.iterator]()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 方法，該方法回傳一個[迭代器](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器協議)，然後重複調用得到的迭代器的 [`next()`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器協議) 方法，以生成要賦予 `variable` 的值序列。

`for...of` 迴圈在迭代器完成時退出（即迭代器的 `next()` 方法回傳一個包含 `done: true` 的物件）。你也可以使用流程控制語句來改變正常的控制流程。[`break`](/zh-TW/docs/Web/JavaScript/Reference/Statements/break) 會退出迴圈並轉到迴圈區塊後的第一個語句，而 [`continue`](/zh-TW/docs/Web/JavaScript/Reference/Statements/continue) 會跳過當前迭代的其餘語句並進行下一次迭代。

如果 `for...of` 迴圈提前退出（例如遇到 `break` 語句或拋出錯誤），則會調用迭代器的 [`return()`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器協議) 方法來執行任何清理動作。

`for...of` 的 `variable` 部分可以接受任何在 `=` 運算符之前的東西。只要在迴圈主體內不重新賦值（它可以在迭代之間改變，因為它們是兩個獨立的變數），你可以使用 {{jsxref("Statements/const", "const")}} 來宣告變數；否則，你可以使用 {{jsxref("Statements/let", "let")}}。

```js
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

> [!NOTE]
> 每次迭代都會創建一個新的變數。在迴圈主體內重新賦值不會影響可迭代物件（在本例中是一個陣列）中的原始值。

你可以使用[解構賦值](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)指派多個局部變數，或者使用屬性訪問子（如 `for (x.y of iterable)`）賦值給物件屬性。

然而，有一條特別規則──禁止以 `async` 作為變數名稱，這是無效語法：

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

這是為了避免和有效程式碼 `for (async of => {};;)` 出現語法歧異，該程式碼是一個 [`for`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for) 迴圈。

## 範例

### 迭代陣列

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### 迭代字串

字串將依 [Unicode 編碼位置](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)迭代。

```js
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### 迭代 TypedArray

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### 迭代 Map

```js
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### 迭代 Set

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### 迭代參數物件

你可以迭代 {{jsxref("Functions/arguments", "arguments")}} 物件來檢查傳給函數的所有參數。

```js
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
// 1
// 2
// 3
```

### 迭代 NodeList

下面的範例透過迭代一個 [`NodeList`](/zh-TW/docs/Web/API/NodeList) DOM 集合，為位於 [`<article>`](/zh-TW/docs/Web/HTML/Element/article) 元素下的段落添加 `read` 類別。

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### 迭代用戶定義的可迭代物件

迭代帶有回傳自訂迭代器的 `[Symbol.iterator]()` 方法的物件：

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

迭代帶有 `[Symbol.iterator]()` 生成器方法的物件：

```js
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

_可迭代迭代器_（帶有回傳 `this` 的 `[Symbol.iterator]()` 方法的迭代器）是一種相當常見的技術，用來使迭代器在期望可迭代物件的語法中使用，例如 `for...of`。

```js
let i = 1;

const iterator = {
  next() {
    if (i <= 3) {
      return { value: i++, done: false };
    }
    return { value: undefined, done: true };
  },
  [Symbol.iterator]() {
    return this;
  },
};

for (const value of iterator) {
  console.log(value);
}
// 1
// 2
// 3
```

### 迭代生成器

```js
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
}
// 1
// 2
// 3
```

### 提前退出

在第一個迴圈中執行 `break` 會導致迴圈提前退出。迭代器尚未完成，因此第二個迴圈將從第一個迴圈停止的地方接續執行。

```js
const source = [1, 2, 3];

const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("這個字串不會被輸出。");
}
// 1

// 另一個使用相同迭代器的迴圈會從上個迴圈的中斷處接續執行。
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// 迭代器已用完。該迴圈不會執行任何迭代。
for (const value of iterator) {
  console.log(value);
}
// [沒有輸出]
```

生成器實現了 [`return()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) 方法，當迴圈退出時，該方法會使生成器函數提前回傳，使得生成器在迴圈間不可重複使用。

```js example-bad
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("這個字串不會被輸出。");
}
// 1

// 生成器已用完。該迴圈不會執行任何迭代。
for (const value of generator) {
  console.log(value);
}
// [沒有輸出]
```

### `for...of` 與 `for...in` 之間的差別

`for...in` 和 `for...of` 都用於迭代某個東西，它們之間的主要差別在於迭代的對象。

{{jsxref("Statements/for...in", "for...in")}} 用於迭代物件的[可枚舉字串屬性](/zh-TW/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)，而 `for...of` 用於迭代[可迭代物件](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代協議)定義的要進行迭代的值。

下面的範例演示了在迭代 {{jsxref("Array")}} 時，`for...of` 迴圈和 `for...in` 迴圈之間的差別。

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i);
}
// "0"、"1"、"2"、"foo"、"arrCustom"、"objCustom"

for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

for (const i of iterable) {
  console.log(i);
}
// 3 5 7
```

`iterable` 物件繼承了 `objCustom` 和 `arrCustom` 屬性，因為其[原型鏈](/zh-TW/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)中同時包含了 `Object.prototype` 和 `Array.prototype`。

`for...in` 迴圈只輸出了 `iterable` 物件的[可枚舉屬性](/zh-TW/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)。它不會輸出陣列中的*元素* `3`、`5`、`7` 或 `"hello"`，因為它們不是*屬性*，而是*值*。它輸出了陣列的*索引*以及 `arrCustom` 和 `objCustom`，它們是實際的屬性。如果你對為什麼迭代這些屬性感到困惑，可以查看關於[陣列迭代和 `for...in`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in#陣列迭代和_for...in) 的工作原理，裡面有更詳細的解釋。

第二個迴圈與第一個迴圈類似，但它使用 {{jsxref("Object.hasOwn()")}} 來檢查找到的可枚舉屬性是否為物件的自有屬性，即非繼承屬性。如果是，則輸出該屬性。屬性 `0`、`1`、`2` 和 `foo` 皆被輸出，因為它們是自有屬性。屬性 `arrCustom` 和 `objCustom` 都沒有被輸出，因為它們是繼承屬性。

`for...of` 迴圈迭代並輸出 `iterable` 按照[可迭代](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)陣列定義要進行迭代的*值*。物件的*元素* `3`、`5`、`7` 被輸出，但物件的*屬性*沒有被輸出。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
