---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
---

{{jsSidebar("Errors")}}

## 訊息

```plain
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
```

## 錯誤類型

{{jsxref("SyntaxError")}}

## 哪裡錯了？

當相同的變數名作為函式的參數、接著又在函式體（function body）內用了 [`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let) 重複宣告並指派時出現。在 JavaScript 裡面，不允許在相同的函式、或是作用域區塊（block scope）內重複宣告相同的 `let` 變數。

## 實例

在這裡，「arg」變數的參數被重複宣告。

```js example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

If you want to change the value of "arg" in the function body, you can do so, but you do not need to declare the same variable again. In other words: you can omit the `let` keyword. If you want to create a new variable, you need to rename it as conflicts with the function parameter already.

```js example-good
function f(arg) {
  arg = "foo";
}

function f(arg) {
  let bar = "foo";
}
```

## 相容性註解

- 在 Firefox 49 之前，這個錯誤被歸為 {{jsxref("TypeError")}}。（[Firefox bug 1275240](https://bugzil.la/1275240)）

## 參見

- [`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/zh-TW/docs/Web/JavaScript/Reference/Statements/const)
- [`var`](/zh-TW/docs/Web/JavaScript/Reference/Statements/var)
- 在 [JavaScript 教學](/zh-TW/docs/Web/JavaScript/Guide)內[宣告變數](/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
