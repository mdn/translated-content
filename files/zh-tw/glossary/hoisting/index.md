---
title: 提升（Hoisting）
slug: Glossary/Hoisting
---

提升（Hoisting）是在 [ECMAScript® 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/index.html) 裡面找不到的專有名詞。它是一種釐清 JaveScript 在執行階段內文如何運行的思路（尤其是在創建和執行階段）。然而，提升一詞可能會引起誤解：例如，提升看起來是單純地將變數和函式宣告，移動到程式的區塊頂端，然而並非如此。變數和函數的宣告會在編譯階段就被放入記憶體，但實際位置和程式碼中完全一樣。

## 了解更多

### 技術範例

在執行任何程式碼前，JavaScript 會把函式宣告放進記憶體裡面，這樣做的優點是：可以在程式碼宣告該函式之前使用它。
例如：

```js
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tigger");
/*
上面程式的結果是: "My cat's name is Tigger"
*/
```

上面的程式碼片段，就是你希望程式碼運作的樣子。現在讓我們看看，如果在這一段函式宣告之前就執行它，到底會發生什麼事：

```js
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
上面程式的結果是: "My cat's name is Chloe"
*/
```

即使我們函式的程式碼之前就先呼叫它，程式碼仍然可以運作。這是出於 JavaScript 內文執行的運作原理。

提升也適用於其他型別和變數。變數可以在宣告之前進行初始化和使用。但如果沒有初始化，就不能使用它們。

```js
num = 6;
num + 7;
var num;
/* 只要 num 有被宣告，就不會有錯誤 */
```

JavaScript 僅提升宣告的部分，而不是初始化。如果在使用該變數後才宣告和初始化，那麼該值將是 undefined。以下兩個範例顯示了這個特性。

```js
var x = 1; // 初始化 x
console.log(x + " " + y); // '1 undefined'
var y = 2;
//上下的程式結果都一樣

var x = 1; // 初始化 x
var y; // 宣告 y
console.log(x + " " + y); // '1 undefined'
y = 2; // 初始化 y
```

### 技術參考

- [JavaScript: Understanding the Weird Parts](https://www.udemy.com/understand-javascript/) - Udemy.com Course
- [var statement](/zh-TW/docs/Web/JavaScript/Reference/Statements/var) - MDN
- [function statement](/zh-TW/docs/Web/JavaScript/Reference/Statements/function) - MDN
