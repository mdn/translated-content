---
title: label
slug: Web/JavaScript/Reference/Statements/label
---

{{jsSidebar("Statements")}}

**標記陳述式**可以和 {{jsxref("Statements/break", "break")}} 或 {{jsxref("Statements/continue", "continue")}} 語句一起使用。標記就是在一條陳述式前面加個可以引用的識別符號。

{{EmbedInteractiveExample("pages/js/statement-label.html")}}

> **備註：** 標記的迴圈或程式碼區塊非常罕見。通常可以使用函式呼叫而不是使用迴圈跳轉。

## 語法

```plain
label :
   statement
```

- `label`
  - : 任何不是保留字的 JavaScript 識別符號。
- `statement`
  - : 一個 JavaScript 陳述式。`break` 可用於任何標記陳述式，而 `continue` 可用於循環標記陳述式。

## 描述

可使用一個標籤來唯一標記一個循環，然後使用 `break` 或 `continue` 陳述式來指示程式是否中斷循環或繼續執行。

需要注意的是 JavaScript **沒有** `goto` 陳述式，標記只能和 `break` 或 `continue` 一起使用。

在[嚴格模式](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)中，你不能使用 「`let`」 作為標籤名稱。它會拋出一個[`SyntaxError`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)（let 是一個保留的識別符號）。

## 範例

### 在 `for` 迴圈中使用帶標記的 `continue`

```js
var i, j;

loop1: for (i = 0; i < 3; i++) {
  //The first for statement is labeled "loop1"
  loop2: for (j = 0; j < 3; j++) {
    //The second for statement is labeled "loop2"
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"
```

### 使用帶標記的 `continue` 陳述式

給定一組資料和一組測試，下面的例子可以統計通過測試的資料。

```js
var itemsPassed = 0;
var i, j;

top: for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      continue top;
    }
  }

  itemsPassed++;
}
```

### 在 `for` 迴圈中使用帶標記的 `break`

```js
var i, j;

loop1: for (i = 0; i < 3; i++) {
  //The first for statement is labeled "loop1"
  loop2: for (j = 0; j < 3; j++) {
    //The second for statement is labeled "loop2"
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// Notice the difference with the previous continue example
```

### 使用帶標記 `break` 陳述式

給定一組資料和一組測試，下面的例子判斷是否所有的資料均通過了測試。

```js
var allPass = true;
var i, j;

top: for (i = 0; items.length; i++)
  for (j = 0; j < tests.length; i++)
    if (!tests[j].pass(items[i])) {
      allPass = false;
      break top;
    }
```

### 在標記的區塊中使用 `break`

你可以在程式碼區塊中使用標記，但只有 `break` 陳述式可以使用非迴圈的標記。

```js
foo: {
  console.log("face");
  break foo;
  console.log("this will not be executed");
}
console.log("swap");

// this will log:

// "face"
// "swap
```

### 標記的函式宣告式

從 ECMAScript 2015 開始，標準的函式宣告式現在對規範的 [Web 相容性附件](http://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations)中的非嚴格程式碼進行了標準化。

```js
L: function F() {}
```

在[嚴格模式](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)中，這會拋出 {{jsxref("SyntaxError")}} 例外：

```js
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

[產生器函式](/zh-TW/docs/Web/JavaScript/Reference/Statements/function*)既不能在嚴格模式中標記，也不能在非嚴格模式中標記：

```js
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相關連結

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
