---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
---

{{JSRef}}

**`concat()`** 會將呼叫此方法的字串以及作為參數傳遞進此方法的字串串接在一起，並將串接結果作為一個新的字串回傳。

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## 語法

```js-nolint
concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)
```

### 參數

- `strN`
  - : 要串接到 `str` 的字串，可以傳入一個至多個。

### 回傳值

此方法會回傳一個新的字串，由呼叫此方法的字串及作為參數傳入的字串組合而成。

## 描述

`concat()` 會將那些作為參數的字串串接在呼叫此方法的字串後面，並作為一個新的字串回傳。
對於原先的字串、或是回傳的字串做修改，不會讓他們的值互相影響。

如果傳入的參數不是字串型別，那在串接前會先將該參數轉換成字串。

## 效能

對於字串的串接，強烈建議直接使用運算子 {{jsxref("Operators/Assignment_Operators", "assignment operators", "", 1)}} 來達成，
像是 `+` 及 `+=`，而不是使用 `concat()` 方法。

## 範例

### 如何使用 concat()

以下的例子示範如何將那些給定的字串組合成新的字串。

```js
let hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

let greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // [object Object]
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Operators/Assignment_Operators", "Assignment operators", "", 1)}}
