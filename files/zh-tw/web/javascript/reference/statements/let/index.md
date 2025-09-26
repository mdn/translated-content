---
title: let
slug: Web/JavaScript/Reference/Statements/let
---

**`let`**用於宣告一個「只作用在當前區塊的變數」，初始值可選擇性的設定。

{{InteractiveExample("JavaScript Demo: Statement - Let")}}

```js interactive-example
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1
```

## 語法

```plain
let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];
```

### 參數

- `var1`, `var2`, …, `varN`
  - : 變數名稱。
- `value1`, `value2`, …, `valueN`
  - : 變數的初始值，可以是任何合法的表達式。

## 描述

`let` 可以宣告只能在目前區塊、階段或表達式中作用的變數。而 `var 則是定義了一個全域變數，或是在整個 function 而不管該區塊範圍。`

### Scoping rules

宣告 `let` 的作用範圍是它們被定義的區塊，以及該區塊包含的子區塊。這樣看起來功能跟 **`var`** 很相似。主要不同的地方在於 **`var`** 作用範圍是「整個」function：

```js
function varTest() {
  var x = 1;
  {
    var x = 2; // 這裡的 x 與 function 區塊內部的 x 是一樣的，因此會影響 function 區塊內所有的 x
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // 這裡的 x 與 function 區塊內部的 x 是不同的，只會作用在這層 block 區塊中
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

在上列例子裡的最前行 `let` 和 `var` 不同，`let` 並不會在全域物件中建立變數。舉例來說：

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### Emulating private members

In dealing with [constructors](/zh-TW/docs/Glossary/Constructor) it is possible to use the **`let`** bindings to share one or more private members without using [closures](/zh-TW/docs/Web/JavaScript/Guide/Closures):

```js
var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function () {
    this.someProperty = "foo";

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function () {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

### Temporal Dead Zone and errors with `let`

Redeclaring the same variable within the same function or block scope raises a {{jsxref("SyntaxError")}}.

```js example-bad
if (x) {
  let foo;
  let foo; // SyntaxError thrown.
}
```

In ECMAScript 2015, **`let`** bindings are not subject to **Variable Hoisting**, which means that **`let`** declarations do not move to the top of the current execution context. Referencing the variable in the block before the initialization results in a [`ReferenceError`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) (contrary to a variable declared with [var](/zh-TW/docs/Web/JavaScript/Reference/Statements/var#var_hoisting), which will just have the undefined value). The variable is in a "temporal dead zone" from the start of the block until the initialization is processed.

```js
function do_something() {
  console.log(foo); // ReferenceError
  let foo = 2;
}
```

你可能會在 [`switch`](/zh-TW/docs/Web/JavaScript/Reference/Statements/switch) 中遇到錯誤，因為所有的 `case` 都屬於同樣的區塊中。

```js
switch (x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}
```

### `let` 於 `for` 迴圈的宣告範圍

You can use the `let` keyword to bind variables locally in the scope of `for` loops. This is different from the var keyword in the head of a for loop, which makes the variables visible in the whole function containing the loop.

```js
var i = 0;
for (let i = i; i < 10; i++) {
  console.log(i);
}
```

However, it's important to point out that a block nested inside a case clause will create a new block scoped lexical environment, which will not produce the redeclaration errors shown above.

```js
let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

### The temporal dead zone and `typeof`

Unlike with simply undeclared variables and variables that hold a value of `undefined`, using the `typeof` operator to check for the type of a variable in that variable's TDZ will throw a `ReferenceError`:

```js
// prints out 'undefined'
console.log(typeof undeclaredVariable);
// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;
```

### Another example of temporal dead zone combined with lexical scoping

Due to lexical scoping, the identifier **"foo"** inside the expression `(foo + 55)` evaluates to the _if block's foo_, and **not** the _overlying variable foo_ with the value of 33.
In that very line, the _if block's "foo"_ has already been created in the lexical environment, but has not yet reached (and **terminated**) its initialization (which is part of the statement itself): it's still in the temporal dead zone.

```js example-bad
function test() {
  var foo = 33;
  {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

This phenomenon may confuse you in a situation like the following. The instruction `let n of n.a` is already inside the private scope of the _for loop's block_, hence the identifier **"n.a"** is resolved to the property 'a' of the _'n' object located in the first part of the instruction itself_ ("let n"), which is still in the temporal dead zone since its declaration statement has not been reached and **terminated**.

```js example-bad
function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) {
    // ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
```

## Other situations

When used inside a block, **`let`** limits the variable's scope to that block. Note the difference between **`var`** whose scope is inside the function where it is declared.

```js
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`var`](/zh-TW/docs/Web/JavaScript/Reference/Statements/var)
- [`const`](/zh-TW/docs/Web/JavaScript/Reference/Statements/const)
- [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)
- [Breaking changes in `let` and `const` in Firefox 44.](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)
