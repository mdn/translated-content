---
title: Array.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
---

**`length`** 為 `Array` 物件的屬性，可供設定或回傳該陣列實體中包含的元素個數。其值必為一大於零、32 位元、且恆大於該陣列最大索引數的正整數。

```js
var items = ["shoes", "shirts", "socks", "sweaters"];
items.length;

// returns 4
```

## 描述

`length` 屬性的值必為一正整數，其值必介於 0 ～ 2^32 (不包含)之間.

```js
var namelistA = new Array(4294967296); //2^32 = 4294967296
var namelistC = new Array(-100); //負數

console.log(namelistA.length); //RangeError: Invalid array length
console.log(namelistC.length); //RangeError: Invalid array length

var namelistB = [];
namelistB.length = Math.pow(2, 32) - 1; //將長度設定介於 0 ~ 2^32 -1
console.log(namelistB.length);

//4294967295
```

你可以透過改變 `length` 屬性來改變陣列的長度。當你透過 `length` 屬性來增加陣列的長度時，陣列中實際的元素也會隨之增加。舉例來說，當你將 array.length 由 2 增加為 3，則改動後該陣列即擁有 3 個元素，該新增的元素則會是一個不可迭代(non-iterable)的空槽(empty slot)。

```plain
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // 將arr的length由2改成5
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach(element => console.log(element)); // 空元素無法被迭代
// 1
// 2
```

如上所見，`length` 屬性不盡然代表陣列中所有已定義的元素個數。詳見 [length 與數值屬性的關係](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#relationship_between_length_and_numerical_properties)。

{{js_property_attributes(1, 0, 0)}}

- `Writable`: 如果此屬性值為`false`，則該屬性的內容值無法被改動。
- `Configurable`: 如果此屬性值為`false`，任何刪除屬性或更改其屬性的操作(`Writable`, `Configurable`, or `Enumerable`)皆會失敗。
- `Enumerable`: 如果此屬性值為`true`，該內容值可倍 [for](/zh-TW/docs/Web/JavaScript/Reference/Statements/for) 或 [for..in](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in) 迴圈迭代處理。

## 範例

### 對陣列進行迭代處理

以下範例中, 陣列 `numbers` 透過 `length` 屬性進行迭代操作，並將其內容值加倍。

```js
var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;
for (var i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// numbers 內容值變為 [2, 4, 6, 8, 10]
```

### 縮減陣列

以下範例中, 陣列 `numbers` 的長度若大於 3，則將其長度縮減至 3。

```js
var numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array")}}
