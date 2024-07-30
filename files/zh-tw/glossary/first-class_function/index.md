---
title: 一級函式（First-class Function）
slug: Glossary/First-class_Function
---

{{GlossarySidebar}}

當函式在那個語言中可以被視為跟其他的變數一樣時，我們稱那樣的程式語言擁有**一級函式**。例如，函式可以作為參數傳遞到另一個函式，可以被另一個函式作為回傳值且可以被當作值一樣指派到另一個變數。

## 範例 | 指定函式到一個變數

### JavaScript

```js
const foo = function () {
  console.log("foobar");
};
// Invoke it using the variable
foo();
```

我們指派一個匿名函式 到 `變數` 中，然後在這個變數後面加上括弧 `()` 的方式來調用那個函式。

> [!NOTE]
> 即使你已經為函式命名了，你仍然可以透過這個變數的名稱來調用它。有命名的函數在你除錯時是有幫助的。_但是這並不會影響我們調用它的方式_。

## 範例 | 將函式作為參數來傳遞

### JavaScript

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
```

我們將 `sayHello()` 函式當成是變數傳遞到 `greeting()` 函式，這說明了我們將函式視為是一個值來使用它。

> [!NOTE]
> 將函式作為參數傳遞到另一個函式時，被當作參數傳遞的那個函式我們稱之為回調函式 **[Callback function](/zh-TW/docs/Glossary/Callback_function)**。_`sayHello` 就是一個回調函式。_

## 範例 | 回傳一個函式

### JavaScript

```js
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}
```

在這個例子中，我們需要從另一個函式中回傳函式回來 - _在 JavaScript 中，我們可以回傳函式是因為我們將函式當成是一個 `值` 。_

> [!NOTE]
> 當一個函式可以回傳一個函式時，稱之為高階函式 (**Higher-Order Function** )。

回到剛才的例子，現在我們需要調用 `sayHello` 函式與它所回傳的匿名函式 (`Anonymous Function`)。為了達成這個目標，我們有兩種方式：

### 1- 使用變數

```js
const sayHello = function () {
  return function () {
    console.log("Hello!");
  };
};
const myFunc = sayHello();
myFunc();
```

這樣做的話，它會回傳 `Hello!` 這個訊息。

> [!NOTE]
> 如果你直接調用 `sayHello` 的話，你必須再使用另一個變數來儲存之後再調用它，調用 `sayHello` 只會回傳函式回來而**非調用它所回傳的函式**。

### 2- 使用雙括號

```js
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}
sayHello()();
```

我們也可使用雙括號 `()()` 來調用所回傳的函數。

## 參見

- 維基百科上的[一級函式](https://zh.wikipedia.org/wiki/头等函数)
