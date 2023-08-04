---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
---

{{jsSidebar("Statements")}}

**`function*`** 宣告式（`function` 關鍵字後面跟著一個星號）定義了一個*生成器函式（generator function）*，他會回傳一個{{jsxref("Global_Objects/Generator","生成器（Generator）")}}物件。

{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}

你可以透過 {{jsxref("GeneratorFunction")}} 建構式來定義生成器函式。

## 語法

```plain
function* name([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : 函式名稱。
- `param`
  - : 要被傳入函式的引數名稱，一個函式最多可以擁有 255 個引數。
- `statements`
  - : statements 構成了函式內容的陳述式。

## 描述

生成器是可以離開後再次進入的函式。在兩次進入之間，生成器的執行狀態（變數綁定狀態）會被儲存。

呼叫生成器函式並不會讓裡面的程式碼立即執行，而是會回傳一個針對該函式的[迭代器（iterator）](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)物件。當呼叫迭代器的 `next()` 方法時，生成器函式將會執行到遭遇的第一個 {{jsxref("Operators/yield", "yield")}} 運算式，該運算式給定的值將從迭代器中回傳，如果是 {{jsxref("Operators/yield*", "yield*")}} 則會交給另一個生成器函式處理。`next()` 方法回傳一個物件，該物件有 `value` 屬性，包含了產生的數值，還有 `done` 屬性，為布林值，指出該生成器是否產出最後的數值。呼叫 `next()` 方法如果帶有一個參數，將會讓先前暫停的生成器函式恢復執行，以該參數值取代先前暫停的 `yield` 陳述式。

生成器中的 `return` 陳述式被執行時，會讓生成器 `done` 狀態為真。若有數值被返回的動作帶回，將是放在 `value` 傳回的。已返回的生成器不會再產生任何數值。

## 範例

### 簡單例子

```js
function* idMaker() {
  var index = 0;
  while (index < index + 1) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ...
```

### yield\* 的範例

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### 傳入引數至生成器

```js
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next(); // 0
gen.next("pretzel"); // 1 pretzel
gen.next("california"); // 2 california
gen.next("mayonnaise"); // 3 mayonnaise
```

### 生成器中的回傳陳述式

```js
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn();
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### 生成器無法被建構

```js example-bad
function* f() {}
var obj = new f(); // throws "TypeError: f is not a constructor"
```

### 以表達式定義生成器

```plain
const foo = function* () { yield 10; yield 20; };
const bar = foo();console.log(bar.next()); // {value: 10, done: false}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Firefox 規範註記

#### Generators and iterators in Firefox versions before 26

Older Firefox versions implement an older version of the generators proposal. In the older version, generators were defined using a regular `function` keyword (without an asterisk) among other differences. See [Legacy generator function](/zh-TW/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function) for further information.

#### `IteratorResult` object returned instead of throwing

Starting with Gecko 29, the completed generator function no longer throws a {{jsxref("TypeError")}} "generator has already finished". Instead, it returns an `IteratorResult` object like `{ value: undefined, done: true }` ([Firefox bug 958951](https://bugzil.la/958951)).

## 參見

- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}} object
- [迭代協議](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function declaration")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- Other web resources:

  - [Regenerator](http://facebook.github.io/regenerator/) an ES2015 generator compiler to ES5
  - [Forbes Lindesay: Promises and Generators: control flow utopia — JSConf EU 2013](http://www.youtube.com/watch?v=qbKWsbJ76-s)
  - [Task.js](https://github.com/mozilla/task.js)
  - [Iterating generators asynchronously](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch4.md#iterating-generators-asynchronously)
