---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
---

{{JSRef}}

**`Map`** 是保存了鍵值對（key-value pairs）的物件。任何值（包括物件及{{Glossary("Primitive", "基本型別（primitive）值")}}）都可以作為鍵或值。

## 語法

```js-nolint
new Map([iterable])
```

### 參數

- `iterable`
  - : 為一個{{jsxref("Array", "陣列")}}或其他元素成鍵值對的[可迭代](/zh-TW/docs/Web/JavaScript/Guide/iterable)物件（有兩個元素的陣列，例如 `[[ 1, 'one' ],[ 2, 'two' ]]`）。每一個鍵值對都會被加入至新的 `Map`；`null` 會被視為 `undefined`。

## 描述

一個 `Map` 物件會根據元素的新增順序走訪自身的所有元素 — {{jsxref("Statements/for...of", "for...of")}} 迴圈會在每次迭代回傳一個 `[key, value]` 陣列。

### 鍵的相等性

鍵相等是基於 [SameValueZero](/zh-TW/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality) 的演算法：`NaN` 被認為與 `NaN` 相同（即使 `NaN !== NaN`）並且根據 `===` 運算符的語義，所有其他值都被認為相等。在目前的 ECMAScript 規範中，`-0` 和 `+0` 被認為是相等的，儘管在早期的草案中並非如此。詳細的內容請參閱 [瀏覽器相容性](#瀏覽器相容性) 表中的 "Value equality for -0 and 0"。

### Object 及 Map 的比較

{{jsxref("Object")}} 和 `Map` 類似。兩者都允許你設置對應的鍵值對，檢索這些值，刪除鍵，並檢測是否有什麼存儲在鍵中。正因為如此（也因為沒有內置的替代品），`Object` 在歷史上一直被當作 `Map` 使用；然而在某些情況下，使用 `Map` 有一些重要的不同之處:

- `Object` 的鍵是 {{jsxref("String", "字串")}} 和 {{jsxref("Symbol", "Symbol")}}，而它們在 `Map` 中可以是任意的資料型態，包括函數，對象以及原始的資料型態。
- 你可以使用 `size` 屬性輕鬆地獲得 `Map` 的大小，而 `Object` 中的屬性數量必須手動確認。
- `Map` 是可迭代（[iterable](/zh-TW/docs/Web/JavaScript/Guide/iterable)）的，因此可以直接迭代，而在 `Object` 上迭代則需要以某種方式獲取其鍵並對其進行迭代。
- `Object` 有一個原型，所以如果不小心，映射中有一些默認鍵可能與鍵發生衝突。從 ES5 開始，這可以通過使用 `map = Object.create(null)` 來繞過這個問題，但是很少這樣做。
- 在涉及頻繁添加和刪除鍵值對的場景中，`Map` 可能表現得更好。

## 屬性

- `Map.length`
  - : `length`屬性的值為 0
    要計算 `Map` 中有多少元素，可以使用 {{jsxref("Map.prototype.size")}}。
- {{jsxref("Map.@@species", "get Map[@@species]")}}
  - : 用於創建派生物件的構造函數。
- {{jsxref("Map.prototype")}}
  - : 表示 `Map` 構造函數的原型，允許對所有的 `Map` 物件添加屬性

## `Map` 物件實體

所有的 `Map` 實例都繼承自 {{jsxref("Map.prototype")}}.

### 屬性

- `Map.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Map"`. This property is used in {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Map.prototype.size")}}
  - : Returns the number of key/value pairs in the `Map` object.

### 方法

- {{jsxref("Map.prototype.clear()")}}
  - : Removes all key-value pairs from the `Map` object.
- {{jsxref("Map.prototype.delete()")}}
  - : Returns `true` if an element in the `Map` object existed and has been
    removed, or `false` if the element does not exist. `map.has(key)`
    will return `false` afterwards.
- {{jsxref("Map.prototype.get()")}}
  - : Returns the value associated to the passed key, or `undefined` if there is none.
- {{jsxref("Map.prototype.has()")}}
  - : Returns a boolean indicating whether a value has been associated with the passed key in the `Map` object or not.
- {{jsxref("Map.prototype.set()")}}
  - : Sets the value for the passed key in the `Map` object. Returns the `Map` object.
- {{jsxref("Map/@@iterator", "Map.prototype[@@iterator]()")}}
  - : Returns a new Iterator object that contains a two-member array of `[key, value]` for each element in the `Map` object in insertion order.
- {{jsxref("Map.prototype.keys()")}}
  - : Returns a new Iterator object that contains the keys for each element in the `Map` object in insertion order.
- {{jsxref("Map.prototype.values()")}}
  - : Returns a new Iterator object that contains the values for each element in the `Map` object in insertion order.
- {{jsxref("Map.prototype.entries()")}}
  - : Returns a new Iterator object that contains a two-member array of `[key, value]` for each element in the `Map` object in insertion order.
- {{jsxref("Map.prototype.forEach()")}}
  - : Calls `callbackFn` once for each key-value pair present in the `Map` object, in insertion order. If a `thisArg` parameter is provided to `forEach`, it will be used as the `this` value for each callback.

## 範例

### 使用 `Map` 物件

```js
var myMap = new Map();

var keyString = "a string",
  keyObj = {},
  keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// getting the values
myMap.get(keyString); // "value associated with 'a string'"
myMap.get(keyObj); // "value associated with keyObj"
myMap.get(keyFunc); // "value associated with keyFunc"

myMap.get("a string"); // "value associated with 'a string'"
// because keyString === 'a string'
myMap.get({}); // undefined, because keyObj !== {}
myMap.get(function () {}); // undefined, because keyFunc !== function () {}
```

### 使用 `NaN` 作為 `Map` 的鍵

`NaN` 同樣可以作為 `Map` 的 key，雖然每個 `NaN` 都不等於自己本身，下面的例子是有效的，因為 `NaN` 無法區分彼此。

```js
var myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

var otherNaN = Number("foo");
myMap.get(otherNaN); // "not a number"
```

### 透過 `for..of` 迭代 `Map`

Map 可以使用 `for..of` 迴圈進行迭代：

```js
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
// 0 = zero
// 1 = one

for (var key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (var value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
// 0 = zero
// 1 = one
```

### 透過 `forEach()` 迭代 `Map`

`Map` 可以使用 `forEach()` 方法進行迭代：

```js
myMap.forEach(function (value, key) {
  console.log(key + " = " + value);
});
// Will show 2 logs; first with "0 = zero" and second with "1 = one"
```

### 與 `Array` 物件關聯

```js
var kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);

myMap.get("key1"); // returns "value1"

// Use the Array.from function to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// Or use the keys or values iterators and convert them to an array
console.log(Array.from(myMap.keys())); // Will show ["key1", "key2"]
```

### 複製與合併 `Map`

就像 `Array` 一樣，`Map` 可以被複製:

```js
var original = new Map([[1, "one"]]);

var clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false. Useful for shallow comparison
```

請記住，數據本身並非克隆的。

`Map` 可以被合併，保持鍵的唯一性:

```js
var first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

var second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge two maps. The last repeated key wins.
// Spread operator essentially converts a Map to an Array
var merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

`Map` 也可以跟 `Array` 合併：

```js
var first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

var second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge maps with an array. The last repeated key wins.
var merged = new Map([...first, ...second, [1, "eins"]]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Map and Set bug at Mozilla](https://bugzilla.mozilla.org/show_bug.cgi?id=697479)
- [ECMAScript Harmony proposal](http://wiki.ecmascript.org/doku.php?id=harmony:simple_maps_and_sets)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
