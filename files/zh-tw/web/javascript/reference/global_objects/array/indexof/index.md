---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---

{{JSRef}}

**`indexOf()`** 方法會回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。

> **備註：** 若是調用字串的方法，請參閱 {{jsxref("String.prototype.indexOf()")}}。

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## 語法

```plain
arr.indexOf(searchElement[, fromIndex])
```

### 參數

- `searchElement`
  - : 欲在陣列中搜尋的元素。
- `fromIndex` {{optional_inline}}
  - : 陣列中搜尋的起始索引。若這個索引值大於或等於陣列長度，會直接回傳 -1，意即不會在陣列中搜尋。如果索引值是一個負數，會從陣列的最後一個往回算，最後一個的索引值為 -1，以此類推。注意：儘管往回算，但依然會從左往右全部搜尋。如果負數索引值在回頭計算之後仍然小於 0，則會從左往右全部搜尋。 這個參數的預設值為 0（即搜尋整個陣列）。

### 回傳值

在陣列中找到的第一個元素索引值；沒找到則為 **-1**。

## 說明

`indexOf()` 用[嚴格相等（strict equality，`===`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)的方式比較陣列中的元素與 `searchElement` 是否相等。

## 範例

### 使用 `indexOf()`

下面範例使用`indexOf()`來定位在陣列中的值。

```js
var array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### 尋找該元素所有出現在陣列中的位置

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### 尋找元素是否存在於陣列中，若沒有則加入到陣列裡。

```js
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log("New veggies collection is : " + veggies);
  } else if (veggies.indexOf(veggie) > -1) {
    console.log(veggie + " already exists in the veggies collection.");
  }
}

var veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.
```

## Polyfill

`indexOf()` was added to the ECMA-262 standard in the 5th edition; as such it may not be present in all browsers. You can work around this by utilizing the following code at the beginning of your scripts. This will allow you to use `indexOf()` when there is still no native support. This algorithm matches the one specified in ECMA-262, 5th edition, assuming {{jsxref("Global_Objects/TypeError", "TypeError")}} and {{jsxref("Math.abs()")}} have their original values.

```js
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function indexOf(member, startFrom) {
    /*
    In non-strict mode, if the `this` variable is null or undefined, then it is
    set to the window object. Otherwise, `this` is automatically converted to an
    object. In strict mode, if the `this` variable is null or undefined, a
    `TypeError` is thrown.
    */
    if (this == null) {
      throw new TypeError(
        "Array.prototype.indexOf() - can't convert `" + this + "` to object",
      );
    }

    var index = isFinite(startFrom) ? Math.floor(startFrom) : 0,
      that = this instanceof Object ? this : new Object(this),
      length = isFinite(that.length) ? Math.floor(that.length) : 0;

    if (index >= length) {
      return -1;
    }

    if (index < 0) {
      index = Math.max(length + index, 0);
    }

    if (member === undefined) {
      /*
        Since `member` is undefined, keys that don't exist will have the same
        value as `member`, and thus do need to be checked.
      */
      do {
        if (index in that && that[index] === undefined) {
          return index;
        }
      } while (++index < length);
    } else {
      do {
        if (that[index] === member) {
          return index;
        }
      } while (++index < length);
    }

    return -1;
  };
}
```

However, if you are more interested in all the little technical bits defined by the ECMA standard, and are less concerned about performance or conciseness, then you may find this more descriptive polyfill to be more usefull.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Let o be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of o with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = o.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = fromIndex | 0;

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of o with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of o with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相容性備註

- Starting with Firefox 47, this method will no longer return `-0`. For example, `[0].indexOf(0, -0)` will now always return `+0` ([Firefox bug 1242043](https://bugzil.la/1242043)).

## 參見

- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
