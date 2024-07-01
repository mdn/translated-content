---
title: 其餘參數
slug: Web/JavaScript/Reference/Functions/rest_parameters
---

{{jsSidebar("Functions")}}

**其餘參數（rest parameter）** 語法可以讓我們表示不確定數量的參數，並將其視為一個陣列。

## 語法

```js
function f(a, b, ...theArgs) {
  // ...
}
```

## 描述

如果函式的最後一個命名參數以 `...` 開頭，它會被視為一個陣列。該陣列的元素會被置於索引從 `0`（含）到的 `theArgs.length`（不含）位置，並且被視為一個函式的參數。

在上面的範例中，`theArgs` 會將函式 f 中第三個(含)以後的參數收集起來。

### 其餘參數和 `arguments` 物件的差異

以下是其餘參數和 `arguments 物件`三個主要的差異：

- 其餘參數是 `arguments` 物件被傳入到函式的時候，還沒被指定變數名稱的引數。
- `arguments` 物件不是一個實際的陣列，而 rest parameter 是陣列的實體，即 [`sort`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)、[`map`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)、[`forEach`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 或 [`pop`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 可以直接在其餘參數被調用。
- `arguments` 物件自身有額外的功能，例如 `callee` 屬性。

### 將參數轉成陣列

其餘參數被介紹作為取代用 arguments 寫的範例程式。

```js
// 在有其餘參數之前，你可能見過下面的程式碼：
function f(a, b) {
  var args = Array.prototype.slice.call(arguments, f.length); // f.length 表示 arguments 的數量

  // …
}

// 現在可以寫成這樣

function f(a, b, ...args) {}
```

### 解構其餘參數 rest parameters

其餘參數可以被解構，換句話說，可以把這個陣列解開，並將各個元素取出成為個別的變數。請參考[解構賦值](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

```js
function f(...[a, b, c]) {
  return a + b + c;
}

f(1); // NaN (b 和 c 都是 undefined)
f(1, 2, 3); // 6
f(1, 2, 3, 4); // 6 (第四個參數不會被解構，因為解構式只有三個定義好的變數名稱)
```

## 範例

因為 `theArgs` 是一個陣列，所以它會有 `length` 屬性，作為表示參數數量：

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

在接下來的範例中，其餘參數被用來收集第一個之後的所有引數並存在陣列中。 在這個陣列裡的每個元素(數字)，都會和第一個參數相乘後取代原本的元素，最後再將取代元素後的陣列回傳。

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

下列範例展示 `Array` 的方法可以在其餘參數上被使用，但 `arguments` 則不行。

```js
function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 顯示 1, 3, 5, 7

function sortArguments() {
  var sortedArgs = arguments.sort();
  return sortedArgs; // 因為前一行會因為 arguments 沒有sort()這個方法而造成TypeError，所以永遠不會執行此行。
}

console.log(sortArguments(5, 3, 7, 1)); // 會拋出 TypeError (arguments.sort is not a function)
```

為了要在 `arguments` 物件上使用 `Array` 的方法，可以將它轉換成真的 `Array` 實體，或者以 `apply()` 直接調用需要的方法。

```js
function sortArguments() {
  var args = Array.from(arguments);
  var sortedArgs = args.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // 顯示 1, 3, 5, 7
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Spread operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_operator) (also 『`...`』)
- [Arguments object](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments)
- [Array](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Functions](/zh-TW/docs/Web/JavaScript/Reference/Functions)
- [Original proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters)
- [JavaScript arguments object and beyond](http://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/)
- [Destructuring assignment](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
