---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
---

{{JSRef}}

**`forEach()`** 方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## 語法

```plain
arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);
```

### 參數

- `callback`

  - : 這個 callback 函式將會把 Array 中的每一個元素作為參數，帶進本 callback 函式裡，每個元素各執行一次，接收三個參數：

    - `currentValue`
      - : 代表目前被處理中的 Array 之中的那個元素。
    - `index`{{optional_inline}}
      - : 代表目前被處理中的 Array 之中的那個元素的 index.
    - `array`{{optional_inline}}
      - : 呼叫 `forEach()` 方法的那個 Array 本身，也就是上面語法中的 arr。

- `thisArg` {{Optional_inline}}
  - : 執行 `callback` 回呼函式的 **`this`**（即參考之 `Object`）值。

### 回傳值

{{jsxref("undefined")}}。

## 描述

`forEach()` executes the provided `callback` once for each element present in the array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized (i.e. on sparse arrays).

`callback` is invoked with **three arguments**:

- the **element value**
- the **element index**
- the **array being traversed**

If a `thisArg` parameter is provided to `forEach()`, it will be used as callback's `this` value. Otherwise, the value {{jsxref("undefined")}} will be used as its `this` value. The `this` value ultimately observable by `callback` is determined according to [the usual rules for determining the `this` seen by a function](/zh-TW/docs/Web/JavaScript/Reference/Operators/this).

The range of elements processed by `forEach()` is set before the first invocation of `callback`. Elements that are appended to the array after the call to `forEach()` begins will not be visited by `callback`. If the values of existing elements of the array are changed, the value passed to `callback` will be the value at the time `forEach()` visits them; elements that are deleted before being visited are not visited. If elements that are already visited are removed (e.g. using {{jsxref("Array.prototype.shift()", "shift()")}}) during the iteration, later elements will be skipped - see example below.

`forEach()` executes the `callback` function once for each array element; unlike {{jsxref("Array.prototype.map()", "map()")}} or {{jsxref("Array.prototype.reduce()", "reduce()")}} it always returns the value {{jsxref("undefined")}} and is not chainable. The typical use case is to execute side effects at the end of a chain.

`forEach()` does not mutate the array on which it is called (although `callback`, if invoked, may do so).

> **備註：** 除非是拋出異常，否則並沒有中止 `forEach()` 迴圈的辦法。如果你需要這樣做，`forEach()` 就是錯誤的用法，相反的，應該要用簡單的迴圈。如果你要測試陣列裡面的元素並回傳布林值，可以用 {{jsxref("Array.prototype.every()", "every()")}} 或 {{jsxref("Array.prototype.some()", "some()")}}。如果可以的話，新的方法 {{jsxref("Array.prototype.find()", "find()")}} 或 {{jsxref("Array.prototype.findIndex()", "findIndex()")}} 也可以用於 true 值之後提前終止。

## 範例

### Converting from for to forEach

before

```js
const items = ["item1", "item2", "item3"];
const copy = [];

for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}
```

after

```js
const items = ["item1", "item2", "item3"];
const copy = [];

items.forEach(function (item) {
  copy.push(item);
});
```

### Printing the contents of an array

The following code logs a line for each element in an array:

```js
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}

// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### Using `thisArg`

The following (contrived) example updates an object's properties from each entry in the array:

```js
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  array.forEach(function (entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note
};

const obj = new Counter();
obj.add([2, 5, 9]);
obj.count;
// 3
obj.sum;
// 16
```

Since the `thisArg` parameter (`this`) is provided to `forEach()`, it is passed to `callback` each time it's invoked, for use as its `this` value.

> **備註：** If passing the function argument using an [arrow function expression](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions) the `thisArg` parameter can be omitted as arrow functions lexically bind the {{jsxref("Operators/this", "this")}} value.

### An object copy function

The following code creates a copy of a given object. There are different ways to create a copy of an object; the following is just one way and is presented to explain how `Array.prototype.forEach()` works by using ECMAScript 5 `Object.*` meta property functions.

```js
function copy(obj) {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(function (name) {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 looks like obj1 now
```

### If the array is modified during iteration, other elements might be skipped

The following example logs "one", "two", "four". When the entry containing the value "two" is reached, the first entry of the whole array is shifted off, which results in all remaining entries moving up one position. Because element "four" is now at an earlier position in the array, "three" will be skipped. `forEach()` does not make a copy of the array before iterating.

```js
var words = ["one", "two", "three", "four"];
words.forEach(function (word) {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});
// one
// two
// four
```

## Polyfill

`forEach()` was added to the ECMA-262 standard in the 5th edition; as such it may not be present in other implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `forEach()` in implementations that don't natively support it. This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming {{jsxref("Object")}} and {{jsxref("TypeError")}} have their original values and that `callback.call()` evaluates to the original value of {{jsxref("Function.prototype.call()")}}.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback /*, thisArg*/) {
    var T, k;

    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {
      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {
        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
