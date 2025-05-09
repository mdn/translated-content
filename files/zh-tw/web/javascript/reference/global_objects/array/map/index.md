---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
---

{{JSRef}}

**`map()`** 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。

{{InteractiveExample("JavaScript Demo: Array.map()")}}

```js interactive-example
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

## 語法

```plain
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```

### 參數

- `callback`

  - : 呼叫 `arr` 所有元素的回呼函式。新數值會在每次執行 `callback` 時加到 `new_array`。

    `callback` 函式可傳入以下三個參數：

    - `currentValue`
      - : 原陣列目前所迭代處理中的元素。
    - `index`{{optional_inline}}
      - : 原陣列目前所迭代處理中的元素之索引。
    - `array`{{optional_inline}}
      - : 呼叫 `map` 方法的陣列。

- `thisArg`{{optional_inline}}
  - : 選擇性的參數。執行 `callback` 回呼函式的 `this` 值。

### 回傳值

一個所有元素皆為回呼函式運算結果的新陣列。

## 描述

`map` 會將所有陣列中的元素依序**分別傳入一次**至 `callback` 函式當中，並以此回呼函式每一次被呼叫的回傳值來建構一個新的陣列。`callback` 函式只會於陣列目前迭代之索引有指派值時（包含{{jsxref("undefined")}}）被調用，而在該陣列索引沒有元素時（即未被設定的索引：已被刪除或從未被賦值）並不會呼叫回呼函式。

它*並不能*呼叫以下元素：

- 不存在的索引、
- 沒被刪除、
- 沒被賦值。

### 什麼時候*不要用* map()

因為 `map` 會建立新的陣列，如果在不想建立新陣列時使用該方法，就會變成反模式（anti-pattern）：這種情況下，要使用 [`forEach`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 或 [`for-of`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...of)。

以下情況不應該使用 `map`；

1. 不使用回傳的新陣列，
2. 或/且不需要回傳新陣列。

`callback` 函式於被調用時會傳入三個參數：元素值、元素之索引、以及被迭代的陣列物件。

若有提供 `thisArg` 參數予 `map` 方法，`thisArg` 將會被當作回呼函式的 `this` 值，否則 `this` 會是 {{jsxref("undefined")}}。`callback` 的最終 `this` 值是依據[函式的 `this` 規則](/zh-TW/docs/Web/JavaScript/Reference/Operators/this)來決定。

`map` 不會修改呼叫它的原始陣列（雖然在 `callback` 執行時有可能會這麼做）。

由 `map` 方法所回傳之新陣列的範圍，於 `callback` 函式第一次被調用之前就已經被設定。而在呼叫 `map` 之後才加至原始陣列中的元素，將不會傳入 `callback` 當中。假如原始陣列中元素的值改變了，則 `callback` 得到此元素的值將會是 `map` 傳入元素當下的值。而在呼叫 `map` 之後、且於被 `map` 傳入 `callback` 之前就被刪除的原始陣列元素，並不會被 `map` 迭代到。

依據規範中定義的演算法，若呼叫 `map` 方法的原始陣列為一稀疏（sparse）陣列，則回傳的新陣列也會是在同樣索引中留空的稀疏陣列。

## 範例

### 把一個數字陣列轉換成對應的開根號後的數字陣列

以下的程式碼把一個數字陣列(array of numbers) 轉換成一個 **新的**以該數字陣列裡的一個個數做開根號計算的數字陣列.

```js
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt); //map會return一個新的array
// roots 現在是 [1, 2, 3]
/* numbers 還是 [1, 4, 9]，這證明了 map() 不會去變動到 numbers 的值，
   map 內部是做了 immutable 的機制，Array.prototype 底下的這些高階函式
   大多都具有這樣函數式編程裡非常注重的特性 - immutable，不會去改變資料
   來源本身原有的值
*/
```

### 使用 map 將陣列中的物件變更格式

以下程式碼取出一陣列，將其中物件變更格式後建立為一個新的陣列並傳回。

```js
var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

var reformattedArray = kvArray.map(function (obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

// reformattedArray 現在是 [{1: 10}, {2: 20}, {3: 30}],

// kvArray 仍然是：
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

### 使用帶參數的函式將一數字陣列進行對應

以下程式碼示範如何使用帶有一個參數的函式來操作 map。這個參數會自動地逐一取出原始陣列中各個元素來使用。

```js
var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
  return num * 2;
});

// doubles 現在是 [2, 8, 18]
// numbers 仍然是 [1, 4, 9]
```

### 使用 `map` 於泛型陣列

以下範例示範如何將一個 {{jsxref("String")}} 陣列轉換為 byte 陣列:

```js
var map = Array.prototype.map;
var a = map.call("Hello World", function (x) {
  return x.charCodeAt(0);
});
// a 現在等於 [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

### 使用 `map` 遍歷 `querySelectorAll`

本範例將展示如何遍歷由 `querySelectorAll` 所產生的物件。我們將得到所有的選項、並印在主控台上：

```js
var elems = document.querySelectorAll("select option:checked");
var values = Array.prototype.map.call(elems, function (obj) {
  return obj.value;
});
```

如果用上 {{jsxref("Array.from()")}} 方法的話會更簡單。

### 棘手的範例

[（透過連結的部落格啟發）](https://wirfs-brock.com/allen/posts/166)

透過一個（被遍歷元素的）參數叫出回調是個常見的用法。有些函式也常常在含有其他可選參數的情況下，使用上一個參數。這種行為常常會給人帶來困惑。

```js
// Consider:
["1", "2", "3"].map(parseInt);
// 以為會是 [1, 2, 3] 嗎
// 其實是 [1, NaN, NaN]

// parseInt 通常只用上一個參數 argument，但他其實用了兩個：
// 第一個是表達式，第二個則是進位數。
// 對該回呼函式來說 Array.prototype.map 帶了三個參數：
// 元素、索引、陣列
// 第三個參數會被 parseInt 忽略，但它可不會忽略第二個，
// 因此可能造成困惑。可以去看上面提到的部落格文章以獲知詳情。

function returnInt(element) {
  return parseInt(element, 10);
}

["1", "2", "3"].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
["1", "2", "3"].map((str) => parseInt(str));

// A simpler way to achieve the above, while avoiding the "gotcha":
["1", "2", "3"].map(Number); // [1, 2, 3]
// but unlike `parseInt` will also return a float or (resolved) exponential notation:
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]
```

## Polyfill

`map` was added to the ECMA-262 standard in the 5th edition; as such it may not be present in all implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `map` in implementations which do not natively support it. This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming {{jsxref("Object")}}, {{jsxref("TypeError")}}, and {{jsxref("Array")}} have their original values and that `callback.call` evaluates to the original value of {{jsxref("Function.prototype.call")}}.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {
  Array.prototype.map = function (callback /*, thisArg*/) {
    var T, A, k;

    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    // 1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {
      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {
        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map")}} object
- {{jsxref("Array.from()")}}
