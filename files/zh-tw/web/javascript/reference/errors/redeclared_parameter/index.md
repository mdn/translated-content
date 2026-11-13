---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript 的「redeclaration of formal parameter」例外會在函式參數中出現了相同的變數名稱，且函式主體中又再次使用 {{jsxref("Statements/let", "let")}} 賦值來重複宣告它時發生。

## 訊息

```plain
SyntaxError: Identifier "x" has already been declared（基於 V8）
SyntaxError: redeclaration of formal parameter "x"（Firefox）
SyntaxError: Cannot declare a let variable twice: 'x'.（Safari）
```

## 錯誤類型

{{jsxref("SyntaxError")}}

## 發生了什麼問題？

當函式參數中出現了相同的變數名稱，且函式主體中又再次使用 {{jsxref("Statements/let", "let")}} 賦值來重複宣告它時，就會發生此錯誤。JavaScript 不允許在相同的函式或區塊作用域中，使用 `let` 重複宣告相同的變數。

## 範例

### 重複宣告的引數

在這個例子中，變數「arg」重複宣告了引數。

```js-nolint example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

如果你想在函式主體中改變「arg」的值，你可以這麼做，但你不需要再次宣告相同的變數。換句話說：你可以省略 `let` 關鍵字。如果你想建立一個新的變數，你需要將它重新命名，以避免與現有的函式參數衝突。

```js example-good
function f(arg) {
  arg = "foo";
}

function g(arg) {
  let bar = "foo";
}
```

## 參見

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/var", "var")}}
- [文法與型別](/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types)指南
