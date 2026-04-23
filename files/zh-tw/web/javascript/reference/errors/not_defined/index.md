---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript 的「_variable_ is not defined」例外會在某處參考了一個不存在的變數時發生 。

## 訊息

```plain
ReferenceError: "x" is not defined（基於 V8 & Firefox）
ReferenceError: Can't find variable: x（Safari）
```

## 錯誤類型

{{jsxref("ReferenceError")}}。

## 哪裡出錯了？

某處參考了一個不存在的變數。這個變數需要被宣告，或者你需要確保它在你目前的腳本或[作用域](/zh-TW/docs/Glossary/Scope)中是可用的。

> [!NOTE]
> 當載入一個函式庫（例如 jQuery）時，請確保在存取函式庫變數（例如「$」）之前就已經載入它。請將載入函式庫的 {{HTMLElement("script")}} 元素放在使用它的程式碼之前。

## 範例

### 變數未宣告

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

「foo」變數沒有在任何地方被定義。它需要是一個字串，這樣 {{jsxref("String.prototype.substring()")}} 方法才能運作。

```js example-good
const foo = "bar";
foo.substring(1); // "ar"
```

### 錯誤的作用域

一個變數需要在目前的執行上下文中可用。在[函式](/zh-TW/docs/Web/JavaScript/Reference/Functions)內部定義的變數無法從函式外部的任何地方存取，因為該變數只在函式的作用域中被定義。

```js example-bad
function numbers() {
  const num1 = 2;
  const num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

然而，一個函式可以存取在其定義的作用域內所定義的所有變數和函式。換句話說，在全域作用域中定義的函式可以存取在全域作用域中定義的所有變數。

```js example-good
const num1 = 2;
const num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(numbers()); // 5
```

## 參見

- [作用域](/zh-TW/docs/Glossary/Scope)
- [JavaScript 指南中的變數宣告](/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types#宣告變數)
- [JavaScript 指南中的函式作用域](/zh-TW/docs/Web/JavaScript/Guide/Functions#函式作用域與閉包)
