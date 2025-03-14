---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
---

{{jsSidebar("Errors")}}

## 訊息

```plain
TypeError: "x" is not a function
```

## 錯誤類型

{{jsxref("TypeError")}}.

## 哪裡錯了？

你想以函式呼叫一個數值，但該數值其實不是函式。程式碼期望你給出函式，但這份期望落空了。

也許打錯了函式的名字？也許呼叫的物件並沒有這個函式？例如說 JavaScript 物件並沒有 `map` 函式，但 JavaScript Array（陣列）物件則有。

許多內建函式都需要回呼（callback）的函式。為了讓下面的方法順利運作，你需要為它們提供函式：

- 如果是 {{jsxref("Array")}} 或 {{jsxref("TypedArray")}} 物件：

  - {{jsxref("Array.prototype.every()")}}、{{jsxref("Array.prototype.some()")}}、{{jsxref("Array.prototype.forEach()")}}、{{jsxref("Array.prototype.map()")}}、{{jsxref("Array.prototype.filter()")}}、{{jsxref("Array.prototype.reduce()")}}、{{jsxref("Array.prototype.reduceRight()")}}、{{jsxref("Array.prototype.find()")}}

- 如果是 {{jsxref("Map")}} 與 {{jsxref("Set")}} 物件：

  - {{jsxref("Map.prototype.forEach()")}} 與 {{jsxref("Set.prototype.forEach()")}}

## 實例

### 函式的名字打錯了

這種事太常發生了。下例就有個方法打錯：

```js example-bad
var x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
```

該函式的正確名字為 `getElementById`：

```js example-good
var x = document.getElementById("foo");
```

### 函式呼叫到錯誤的物件

某些方法需要你提供回呼的函式，該函式只能作用於特定物件。以本例而言，我們使用的 {{jsxref("Array.prototype.map()")}} 就只能作用於 {{jsxref("Array")}} 物件。

```js example-bad
var obj = { a: 13, b: 37, c: 42 };

obj.map(function (num) {
  return num * 2;
});

// TypeError: obj.map is not a function
```

請改用陣列：

```js example-good
var numbers = [1, 4, 9];

numbers.map(function (num) {
  return num * 2;
});

// Array [ 2, 8, 18 ]
```

## 參見

- [Functions](/zh-TW/docs/Web/JavaScript/Reference/Functions)
