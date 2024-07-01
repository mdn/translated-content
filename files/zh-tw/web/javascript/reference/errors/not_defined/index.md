---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
---

{{jsSidebar("Errors")}}

## 訊息

```plain
ReferenceError: "x" is not defined
```

## 錯誤類型

{{jsxref("ReferenceError")}}.

## 哪裡錯了？

有個地方參照到不存在的變數了。這個變數需要宣告、或確定在目前腳本、或在 {{Glossary("scope")}} 裡可用。

> **備註：** 如果要使用函式庫（例如 jQuery）的話，請確定在你使用諸如 $ 這樣的函式庫變數前，就已載入完畢。把載入函式庫的 {{HTMLElement("script")}} 標籤，放在你使用的程式碼之前。

## 實例

### 變數未宣告

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

"foo" 變數在任何地方都沒被定義到。它需要字串使 {{jsxref("String.prototype.substring()")}} 得以運作。

```js example-good
var foo = "bar";
foo.substring(1); // "ar"
```

### 作用域錯誤

A variable need to be available in the current context of execution. Variables defined inside a [function](/zh-TW/docs/Web/JavaScript/Reference/Functions) cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function

```js example-bad
function numbers() {
  var num1 = 2,
    num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

However, a function can access all variables and functions defined inside the scope in which it is defined. In other words, a function defined in the global scope can access all variables defined in the global scope.

```js example-good
var num1 = 2,
  num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(num1); // 2
```

## 參閱

- {{Glossary("Scope")}}
- [Declaring variables in the JavaScript Guide](/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types#Declaring_variables)
- [Function scope in the JavaScript Guide](/zh-TW/docs/Web/JavaScript/Guide/Functions#function_scope)
