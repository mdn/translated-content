---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript 的「is not a function」例外會在試圖將一個值當作函式呼叫，但該值實際上並非函式時發生。

## 訊息

```plain
TypeError: "x" is not a function.（基於 V8 & Firefox & Safari）
```

## 錯誤類型

{{jsxref("TypeError")}}

## 哪裡出錯了？

程式試圖將一個值當作函式呼叫，但該值實際上並非函式。有些程式碼預期你提供一個函式，但你沒有這麼做。

函式名稱是不是有拼字錯誤？或者你呼叫方法的物件上沒有這個函式？例如，JavaScript 的 `Object` 沒有 `map` 函式，但 JavaScript 的 `Array` 物件有。

有許多內建函式需要一個（回呼）函式。你必須提供一個函式，才能讓這些方法正常運作：

- 當使用 {{jsxref("Array")}} 或 {{jsxref("TypedArray")}} 物件時：
  - {{jsxref("Array.prototype.every()")}}、{{jsxref("Array.prototype.some()")}}、{{jsxref("Array.prototype.forEach()")}}、{{jsxref("Array.prototype.map()")}}、{{jsxref("Array.prototype.filter()")}}、{{jsxref("Array.prototype.reduce()")}}、{{jsxref("Array.prototype.reduceRight()")}}、{{jsxref("Array.prototype.find()")}}

- 當使用 {{jsxref("Map")}} 和 {{jsxref("Set")}} 物件時：
  - {{jsxref("Map.prototype.forEach()")}} 和 {{jsxref("Set.prototype.forEach()")}}

## 範例

### 函式名稱拼字錯誤

這種情況經常發生，即方法名稱有拼字錯誤：

```js example-bad
const x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
```

正確的函式名稱是 `getElementById`：

```js example-good
const x = document.getElementById("foo");
```

### 在錯誤的物件上呼叫函式

對於某些方法，你必須提供一個（回呼）函式，而且它只對特定的物件有效。在這個範例中，我們使用了 {{jsxref("Array.prototype.map()")}}，它只適用於 {{jsxref("Array")}} 物件。

```js example-bad
const obj = { a: 13, b: 37, c: 42 };

obj.map((num) => num * 2);

// TypeError: obj.map is not a function
```

改用陣列：

```js example-good
const numbers = [1, 4, 9];

numbers.map((num) => num * 2); // [2, 8, 18]
```

### 函式與已存在的屬性同名

有時候在建立類別時，你可能會讓一個屬性和一個函式使用相同的名稱。當呼叫該函式時，編譯器會認為該函式不存在。

```js example-bad
function Dog() {
  this.age = 11;
  this.color = "black";
  this.name = "Ralph";
  return this;
}

Dog.prototype.name = function (name) {
  this.name = name;
  return this;
};

const myNewDog = new Dog();
myNewDog.name("Cassidy"); // TypeError: myNewDog.name is not a function
```

改用不同的屬性名稱：

```js example-good
function Dog() {
  this.age = 11;
  this.color = "black";
  this.dogName = "Ralph"; // Using this.dogName instead of .name
  return this;
}

Dog.prototype.name = function (name) {
  this.dogName = name;
  return this;
};

const myNewDog = new Dog();
myNewDog.name("Cassidy"); // Dog { age: 11, color: 'black', dogName: 'Cassidy' }
```

### 使用括號進行乘法運算

在數學中，你可以將 2 × (3 + 5) 寫成 2\*(3 + 5) 或直接寫成 2(3 + 5)。

使用後者會拋出錯誤：

```js example-bad
const sixteen = 2(3 + 5);
console.log(`2 x (3 + 5) is ${sixteen}`);
// Uncaught TypeError: 2 is not a function
```

你可以透過加上 `*` 運算子來修正程式碼：

```js example-good
const sixteen = 2 * (3 + 5);
console.log(`2 x (3 + 5) 是 ${sixteen}`);
// 2 x (3 + 5) 是 16
```

### 正確地引入匯出的模組

請確保你正確地引入模組。

一個 helpers 函式庫範例（`helpers.js`）

```js
function helpers() {}

helpers.groupBy = function (objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    acc[key] ??= [];
    acc[key].push(obj);
    return acc;
  }, {});
};

export default helpers;
```

正確的引入用法（`App.js`）：

```js
import helpers from "./helpers";
```

## 參見

- [函式](/zh-TW/docs/Web/JavaScript/Reference/Functions)
