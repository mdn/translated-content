---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
---

{{JSRef}}

**`slice()`** 方法會回傳一個新陣列物件，為原陣列選擇之 `begin` 至 `end`（不含 `end`）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。

{{EmbedInteractiveExample("pages/js/array-slice.html")}}

## 語法

```js-nolint
arr.slice([begin[, end]])
```

### 參數

- `begin` {{optional_inline}}
  - : 自哪一個索引（起始為 0）開始提取拷貝。可使用負數索引，表示由陣列的最末項開始提取。`slice(-2)` 代表拷貝陣列中的最後兩個元素。假如 `begin` 為 undefined，則 `slice` 會從索引 `0` 開始提取。
- `end` {{optional_inline}}
  - : 至哪一個索引（起始為 0）*之前*停止提取。`slice` 提取但不包含至索引 `end`。舉例來說，`slice(1,4)` 提取了陣列中第二個元素至第四個元素前為止（元素索引 1、2 以及 3）來拷貝。可使用負數索引，表示由陣列的最末項開始提取。`slice(2,-1)` 代表拷貝陣列中第三個元素至倒數第二個元素。若省略了 `end`，則 `slice` 會提取至陣列的最後一個元素（`arr.length`）。假如 `end` 大於陣列的長度，`slice` 會提取至陣列的最後一個元素（`arr.length`）。

### 回傳值

一個包含提取之元素的新陣列。

## 說明

`slice` 不會修改原本的陣列，而是回傳由原本的陣列淺層複製的元素。原始陣列的元素會按照下列規則拷貝：

- 如果該元素是個對象引用（不是實際的對象），`slice` 會拷貝這個對象引用到新的陣列內。兩個對象引用都引用了同一個對象。如果被引用的對象發生改變，則新的和原來的陣列中的這個元素也會發生改變。
- 對於字串、數字、布林來說 (不是 [`String`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)、[`Number`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number) 或者 [`Boolean`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 對象), `slice` 會拷貝這些值到新的陣列內。在別的陣列內修改這些字串、數字或是布林，將不會影響另一個陣列。

如果添加了新的元素到另一個陣列內，則另一個不會受到影響。

## 範例

### Return a portion of an existing array

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

### Using `slice`

In the following example, `slice` creates a new array, `newCar`, from `myCar`. Both include a reference to the object `myHonda`. When the color of `myHonda` is changed to purple, both arrays reflect the change.

```js
// Using slice, create newCar from myCar.
var myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
var newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log("myCar = " + JSON.stringify(myCar));
console.log("newCar = " + JSON.stringify(newCar));
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is " + myHonda.color);

// Display the color of myHonda referenced from both arrays.
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);
```

This script writes:

```js
myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
         'cherry condition', 'purchased 1997']
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
```

## 類陣例（Array-like）物件

`slice` method can also be called to convert Array-like objects / collections to a new Array. You just bind the method to the object. The {{jsxref("Functions/arguments", "arguments")}} inside a function is an example of an 'array-like object'.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

Binding can be done with the .`call` function of {{jsxref("Function.prototype")}} and it can also be reduced using `[].slice.call(arguments)` instead of `Array.prototype.slice.call`. Anyway, it can be simplified using {{jsxref("Function.prototype.bind", "bind")}}.

```js
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

## Streamlining cross-browser behavior

Although host objects (such as DOM objects) are not required by spec to follow the Mozilla behavior when converted by `Array.prototype.slice` and IE < 9 does not do so, versions of IE starting with version 9 do allow this. 「Shimming」 it can allow reliable cross-browser behavior. As long as other modern browsers continue to support this ability, as currently do IE, Mozilla, Chrome, Safari, and Opera, developers reading (DOM-supporting) slice code relying on this shim will not be misled by the semantics; they can safely rely on the semantics to provide the now apparently _de facto_ standard behavior. (The shim also fixes IE to work with the second argument of `slice()` being an explicit {{jsxref("null")}}/{{jsxref("undefined")}} value as earlier versions of IE also did not allow but all modern browsers, including IE >= 9, now do.)

```js
/**
 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
 * (technically, since host objects have been implementation-dependent,
 * at least before ES2015, IE hasn't needed to work this way).
 * Also works on strings, fixes IE < 9 to allow an explicit undefined
 * for the 2nd argument (as in Firefox), and prevents errors when
 * called on other DOM objects.
 */
(function () {
  "use strict";
  var _slice = Array.prototype.slice;

  try {
    // Can't be used with DOM elements in IE < 9
    _slice.call(document.documentElement);
  } catch (e) {
    // Fails in IE < 9
    // This will work for genuine arrays, array-like objects,
    // NamedNodeMap (attributes, entities, notations),
    // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
    // and will not fail on other DOM objects (as do DOM elements in IE < 9)
    Array.prototype.slice = function (begin, end) {
      // IE < 9 gets unhappy with an undefined end argument
      end = typeof end !== "undefined" ? end : this.length;

      // For native Array objects, we use the native slice function
      if (Object.prototype.toString.call(this) === "[object Array]") {
        return _slice.call(this, begin, end);
      }

      // For array like object we handle it ourselves.
      var i,
        cloned = [],
        size,
        len = this.length;

      // Handle negative value for "begin"
      var start = begin || 0;
      start = start >= 0 ? start : Math.max(0, len + start);

      // Handle negative value for "end"
      var upTo = typeof end == "number" ? Math.min(end, len) : len;
      if (end < 0) {
        upTo = len + end;
      }

      // Actual expected size of the slice
      size = upTo - start;

      if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
          for (i = 0; i < size; i++) {
            cloned[i] = this.charAt(start + i);
          }
        } else {
          for (i = 0; i < size; i++) {
            cloned[i] = this[start + i];
          }
        }
      }

      return cloned;
    };
  }
})();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
