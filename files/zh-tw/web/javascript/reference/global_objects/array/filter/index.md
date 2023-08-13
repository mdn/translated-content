---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
---

{{JSRef}}

**`filter()`** 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。

{{EmbedInteractiveExample("pages/js/array-filter.html")}}

### ES6 版本

```js
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "happy",
];

let longWords = words.filter((word) => word.length > 6);

// Filtered array longWords is ["exuberant", "destruction", "present"]
```

## 語法

```plain
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

### 參數

- `callback`

  - : 此函式為一個斷言，用於測試陣列中的每個元素。回傳值為 `true` 時將當前的元素保留至新陣列中，若為 `false` 則不保留。可傳入三個參數：

    - `element`
      - : 原陣列目前所迭代處理中的元素。
    - `index`{{optional_inline}}
      - : 原陣列目前所迭代處理中的元素之索引。
    - `array`{{optional_inline}}
      - : 呼叫 `filter` 方法的陣列。

- `thisArg` {{optional_inline}}
  - : 可選的。執行 `callback` 回呼函式的 `this` 值。

### 回傳值

一個元素為通過回呼函式檢驗的新陣列。

## 描述

`filter()` 會將所有陣列中的元素分別傳入一次至 `callback` 函式當中，並將所有傳入此回呼函式並得到回傳值為 [Truthy](/zh-TW/docs/Glossary/Truthy) 的元素建構成一個新的陣列。`callback` 函式只會於陣列目前迭代之索引有指派值時被呼叫，回呼函式不會在該陣列索引已被刪除或從未被賦值時被調用。原始陣列中沒有通過 `callback` 檢驗的元素會被簡單的跳過，且不會被包含在新建立的陣列中。

`callback` 函式於被調用時會傳入三個參數：

1. 元素值
2. 元素之索引
3. 被迭代的陣列物件

若有提供 `thisArg` 參數予 `filter` 方法，`thisArg` 將會被當作回呼函式的 `this` 值，否則 `this` 會是 `undefined`。`callback` 的最終 `this` 值是依據[函式的 `this` 規則](/zh-TW/docs/Web/JavaScript/Reference/Operators/this)來決定。

`filter()` 不會修改呼叫它的原始陣列。

由 `filter()` 方法所回傳之新陣列的範圍，於 `callback` 函式第一次被調用之前就已經被設定。而在呼叫 `filter()` 之後才加至原始陣列中的元素，將不會傳入 `callback` 當中。假如原始陣列中元素的值改變或被刪除了，則 `callback` 得到此元素的值將會是 `filter()` 傳入元素當下的值。而被刪除的原始陣列元素並不會被迭代到。

## 範例

### 過濾所有的小數字

以下範例會用 `filter()` 建立一個把所有小於 10 的元素都移掉的陣列。

```js
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### 從 JSON 過濾無效的項目

以下範例會用 `filter()` 建立一個把非零 numeric `id` 的元素都過濾掉的的 JSON。

```js
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof obj === "number" && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id)) {
    return true;
  }
  invalidEntries++;
  return false;
}

var arrByID = arr.filter(filterByID);

console.log("過濾好的陣列\n", arrByID);
// 過濾好的陣列
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log("無效的元素數量 = ", invalidEntries);
// 無效的元素數量 = 4
```

### 在陣列中搜尋

下面範例使用 `filter()` 去過濾符合搜尋條件的陣列內容。

```js
var fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * 陣列透過搜尋條件（查詢）過濾物件
 */
function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

### ES2015 實作方式

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * 陣列透過搜尋條件（查詢）過濾物件
 */
const filterItems = (query) => {
  return fruits.filter(
    (el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1,
  );
};

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

## Polyfill

`filter()` 在 ECMA-262 第五版時被納入標準；它也許不會出現在該標準的所有實作引擎之中。你可以在你的腳本最前面加入下面的程式碼作為替代方案，讓不支援 `filter()` 的 ECMA-262 實作引擎能夠使用它。假設 `fn.call` 是採用 {{jsxref("Function.prototype.bind()")}} 的原始值，這個演算法完全和 ECMA-262 第五版定義的規格相同。

```js
if (!Array.prototype.filter)
  Array.prototype.filter = function (func, thisArg) {
    "use strict";
    if (!(typeof func === "Function" && this)) throw new TypeError();

    var len = this.length >>> 0,
      res = new Array(len), // 預先配置陣列
      c = 0,
      i = -1;
    if (thisArg === undefined)
      while (++i !== len)
        // 確認物件的鍵值i是否有被設置
        if (i in this)
          if (func(t[i], i, t)) res[c++] = t[i];
          else
            while (++i !== len)
              // 確認物件的鍵值i是否有被設置
              if (i in this)
                if (func.call(thisArg, t[i], i, t)) res[c++] = t[i];

    res.length = c; // 將陣列縮至適當大小
    return res;
  };
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
