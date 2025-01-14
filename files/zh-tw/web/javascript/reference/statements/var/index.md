---
title: var
slug: Web/JavaScript/Reference/Statements/var
---

{{jsSidebar("Statements")}}

宣告一個變數, 同時可以非強制性地賦予一初始值。

## 語法

```plain
var varname1 [= value1 [, varname2 [, varname3 ... [, varnameN]]]];
```

- `varnameN`
  - : 變數名稱。可以是任何合法的識別字符 (identifier)。
- `valueN`
  - : 變數的初始值。可以是任何合法的表示式 (expression)。

## 說明

以 `var` 宣告的變數, 其作用範圍 (scope) 及於該函數之內; 但是如果在函數外宣告, 其作用範圍則為全域性 (global) (亦即包納於全域物件之內)。

在函數之外使用以 `var` 宣告的變數是非強制的 (optional); 如果對一個未經宣告的變數賦值, 它會被暗中 (implicitly) 宣告成為一個全域變數 (亦即成為全域物件的屬性)。其中差異在於, 已宣告的變數是全域物件裡的一個無法變更 (non-configurable) 的屬性, 而未宣告的變數則是可變更的 (configurable)。

因此, 建議你一定要宣告你的變數, 不管你要將它使用於全域範圍內或者函數內。

若未宣告變數, 將非常可能導致無法預測的結果。所以, 在 ECMAScript 5 [strict mode](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode) 中, 若在函數中給一個未經宣告的函數賦值, 將會丟出錯誤。

Variable declarations, wherever they occur, are processed before any code is executed. The scope of a variable declared with `var` is its current _execution context_, which is either the enclosing function or, for variables declared outside any function, global.

Assigning a value to an undeclared variable implicitly creates it as a global variable (it becomes a property of the global object) when the assignment is executed. The differences between declared and undeclared variables are:

1\. Declared variables are constrained in the execution context in which they are declared. Undeclared variables are always global.

```js
function x() {
  y = 1; // Throws a ReferenceError in strict mode
  var z = 2;
}

x();

console.log(y); // logs "1"
console.log(z); // Throws a ReferenceError: z is not defined outside x
```

2\. Declared variables are created before any code is executed. Undeclared variables do not exist until the code assigning to them is executed.

```js
console.log(a); // Throws a ReferenceError.
console.log("still going..."); // Never executes.
```

```js
var a;
console.log(a); // logs "undefined" or "" depending on browser.
console.log("still going..."); // logs "still going...".
```

3\. Declared variables are a non-configurable property of their execution context (function or global). Undeclared variables are configurable (e.g. can be deleted).

```js
var a = 1;
b = 2;

delete this.a; // Throws a TypeError in strict mode. Fails silently otherwise.
delete this.b;

console.log(a, b); // Throws a ReferenceError.
// The 'b' property was deleted and no longer exists.
```

Because of these three differences, failure to declare variables will very likely lead to unexpected results. Thus **it is recommended to always declare variables, regardless of whether they are in a function or global scope.** And in ECMAScript 5 [strict mode](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode), assigning to an undeclared variable throws an error.

### var hoisting

在 JavaScript 中, 變數可以先使用再宣告。

因此, 建議你永遠都把變數的宣告放在函數的最頂端。否則可能導致混亂的情況。

Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code.

```js
bla = 2;
var bla;
// ...

// is implicitly understood as:

var bla;
bla = 2;
```

For that reason, it is recommended to always declare variables at the top of their scope (the top of global code and the top of function code) so it's clear which variables are function scoped (local) and which are resolved on the scope chain.

## 範例

### Declaring and initializing two variables

```js
var a = 0,
  b = 0;
```

### Assigning two variables with single string value

```js
var a = "A";
var b = a;

// Equivalent to:

var a,
  b = (a = "A");
```

Be mindful of the order:

```js
var x = y,
  y = "A";
console.log(x + y); // undefinedA
```

Here, `x` and `y` are declared before any code is executed, the assignments occur later. At the time "`x = y`" is evaluated, `y` exists so no `ReferenceError` is thrown and its value is '`undefined`'. So, `x` is assigned the undefined value. Then, `y` is assigned a value of 'A'. Consequently, after the first line, `x === undefined && y === 'A'`, hence the result.

### Initialization of several variables

```js
var x = 0;

function f() {
  var x = (y = 1); // x is declared locally. y is not!
}
f();

console.log(x, y); // Throws a ReferenceError in strict mode (y is not defined). 0, 1 otherwise.
// In non-strict mode:
// x is the global one as expected
// y leaked outside of the function, though!
```

### Implicit globals and outer function scope

Variables that appear to be implicit globals may be references to variables in an outer function scope:

```js
var x = 0; // x is declared global, then assigned a value of 0

console.log(typeof z); // undefined, since z doesn't exist yet

function a() {
  // when a is called,
  var y = 2; // y is declared local to function a, then assigned a value of 2

  console.log(x, y); // 0 2

  function b() {
    // when b is called
    x = 3; // assigns 3 to existing global x, doesn't create a new global var
    y = 4; // assigns 4 to existing outer y, doesn't create a new global var
    z = 5; // creates a new global variable z and assigns a value of 5.
  } // (Throws a ReferenceError in strict mode.)

  b(); // calling b creates z as a global variable
  console.log(x, y, z); // 3 4 5
}

a(); // calling a also calls b
console.log(x, z); // 3 5
console.log(typeof y); // undefined as y is local to function a
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/zh-TW/docs/Web/JavaScript/Reference/Statements/const)
