---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
---

{{JSRef}}

**`Set`** 物件可讓你儲存任何類型的唯一值（unique），不論是{{Glossary("Primitive", "基本型別（primitive）值")}}或物件參考（references）。

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## 語法

```js
new Set([iterable]);
```

### 參數

- `iterable`
  - : 若一個[可迭代物件](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...of)被傳入，其所有的元素將會被加入至新的 `Set`。若你沒有指定此參數，或參數值為 `null`，則新的 `Set` 會是空的。

### 回傳值

一個新的 `Set` 物件。

## 描述

`Set` 對象是數值的收集器。您可以按插入順序迭代收集器中的元素。在 `Set` 裡的元素只會出現一次**；** 意即在`Set`裡的元素都是獨一無二

### 值的相等性

因為在 Set 裡每個值都是獨立的，所以都會檢查值的相等性。在早期的 ECMAScript 規範版本中，此處算法跟基於===操作符中使用的算法並不相同。具體來說，在 `Set`裡+0(在嚴格模式是和-0 相等)和-0 是不同的值。然而在 ECMAScript 2015 規範中這點已被更改。請參閱 [瀏覽器兼容性](#Browser_compatibility) 中的"Value equality for -0 and 0"。

另外，NaN 和 undefined 都可以被放置在 Set 中， NaN 之間被視為相同的值（儘管 NaN !== NaN）。

- `Set.length`
  - : The value of the `length` property is 0.
- {{jsxref("Set.@@species", "get Set[@@species]")}}
  - : The constructor function that is used to create derived objects.
- {{jsxref("Set.prototype")}}
  - : Represents the prototype for the `Set` constructor. Allows the addition of properties to all `Set` objects.

## `Set` 物件實體

All `Set` instances inherit from {{jsxref("Set.prototype")}}.

### 屬性

- `Set.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Set"`. This property is used in {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Set.prototype.size")}}
  - : Returns the number of values in the `Set` object.

### 方法

- {{jsxref("Set.prototype.add()")}}
  - : Inserts a new element with a specified value in to a `Set` object, if there isn't an element with the same value already in the `Set`.
- {{jsxref("Set.prototype.clear()")}}
  - : Removes all elements from the `Set` object.
- {{jsxref("Set.prototype.delete()")}}
  - : Removes the element associated to the `value` and returns a boolean asserting whether an element was successfully removed or not. `Set.prototype.has(value)` will return `false` afterwards.
- {{jsxref("Set.prototype.has()")}}
  - : Returns a boolean asserting whether an element is present with the given value in the `Set` object or not.
- {{jsxref("Set.prototype.@@iterator()", "Set.prototype[@@iterator]()")}}
  - : Returns a new iterator object that yields the **values** for each element in the `Set` object in insertion order.
- {{jsxref("Set.prototype.values()")}}
  - : Returns a new iterator object that yields the **values** for each element in the `Set` object in insertion order.
- {{jsxref("Set.prototype.keys()")}}
  - : An alias for {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.entries()")}}

  - : Returns a new iterator object that contains **an array of `[value, value]`** for each element in the `Set` object, in insertion order.

    This is similar to the {{jsxref("Map")}} object, so that each entry's _key_ is the same as its _value_ for a `Set`.

- {{jsxref("Set.prototype.forEach()")}}
  - : Calls `callbackFn` once for each value present in the `Set` object, in insertion order. If a `thisArg` parameter is provided, it will be used as the `this` value for each invocation of `callbackFn`.

## 範例

### 使用 `Set` 物件

```js
var mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
var o = { a: 1, b: 2 };
mySet.add(o);

mySet.add({ a: 1, b: 2 }); // o is referencing a different object so this is okay

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set
mySet.has(5); // false, 5 has been removed

mySet.size; // 4, we just removed one value
console.log(mySet); // Set [ 1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2} ]
```

### 迭代 Sets

```js
// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet.keys()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet.values()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
//(key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key);

// convert Set object to an Array object, with Array.from
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// the following will also work if run in an HTML document
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// converting between Set and Array
mySet2 = new Set([1, 2, 3, 4]);
mySet2.size; // 4
[...mySet2]; // [1, 2, 3, 4]

// intersect can be simulated via
var intersection = new Set([...set1].filter((x) => set2.has(x)));

// difference can be simulated via
var difference = new Set([...set1].filter((x) => !set2.has(x)));

// Iterate set entries with forEach
mySet.forEach(function (value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
```

### 實作基本的 set 操作

```js
Set.prototype.isSuperset = function (subset) {
  for (var elem of subset) {
    if (!this.has(elem)) {
      return false;
    }
  }
  return true;
};

Set.prototype.union = function (setB) {
  var union = new Set(this);
  for (var elem of setB) {
    union.add(elem);
  }
  return union;
};

Set.prototype.intersection = function (setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (this.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
};

Set.prototype.difference = function (setB) {
  var difference = new Set(this);
  for (var elem of setB) {
    difference.delete(elem);
  }
  return difference;
};

//Examples
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([3, 4, 5, 6]);

setA.isSuperset(setB); // => true
setA.union(setC); // => Set [1, 2, 3, 4, 5, 6]
setA.intersection(setC); // => Set [3, 4]
setA.difference(setC); // => Set [1, 2]
```

### 與 `Array` 物件關聯

```js
var myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
var mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray
```

### 與 `Strings` 關聯

```js
var text = "India";

var mySet = new Set(text); // Set ['I', 'n', 'd', 'i', 'a']
mySet.size; // 5
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
