---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
---

{{JSRef}}

**`sort()`** 方法會*[原地（in place）](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)*對一個陣列的所有元素進行排序，並回傳此陣列。排序不一定是[穩定的（stable）](https://zh.wikipedia.org/wiki/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95#%E7%A9%A9%E5%AE%9A%E6%80%A7)。預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。

由於依賴執行環境的實作，所以並不能保證排序的時間及空間複雜度。

{{EmbedInteractiveExample("pages/js/array-sort.html")}}

## 語法

```js-nolint
arr.sort([compareFunction])
```

### 參數

- `compareFunction` {{optional_inline}}
  - : 指定一個函式來定義排序順序。假如省略此參數，陣列將根據各個元素轉為字串後的每一個字元之 [Unicode](/zh-TW/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode) 編碼位置值進行排序。

### 回傳值

排序後的陣列。請注意此為[_原地_（in place）](https://zh.wikipedia.org/wiki/原地算法)進行排序過的陣列，並且不是原陣列的拷貝。

## 描述

如果 `compareFunction` 沒有被應用，元素將被轉換為字串並以 Unicode 編碼位置進行比較來排序。舉例來說，"Banana" 會被排在 "cherry" 之前。在數值排序中，9 排在 80 前面，但因為數字被轉換成字串，在 Unicode 順序中 "80" 會在 "9" 的前面。

如果 `compareFunction` 被應用，陣列元素們將根據比較函式之回傳值來排序。如果 `a` 和 `b` 為被比較之兩元素，則：

- 若 `compareFunction(a, b)` 的回傳值小於 0，則會把 `a` 排在小於 `b` 之索引的位置，即 `a` 排在 `b` 前面。
- 若 `compareFunction(a, b)` 回傳 0，則 `a` 與 `b` 皆不會改變彼此的順序，但會與其他全部的元素比較來排序。備註：ECMAscript 標準並不保證這個行為，因此不是所有瀏覽器（如 Mozilla 版本在 2003 以前）都遵守此行為。
- 若 `compareFunction(a, b)` 的回傳值大於 0，則會把 `b` 排在小於 `a` 之索引的位置，即 `b` 排在 `a` 前面。
- `compareFunction(a, b)` 在給予一組特定元素 a 及 b 為此函數之兩引數時必須總是回傳相同的值。若回傳值不一致，排序順序則為 undefined。

所以，比較函式會是以下形式：

```js
function compare(a, b) {
  if (在某排序標準下 a 小於 b) {
    return -1;
  }
  if (在某排序標準下 a 大於 b) {
    return 1;
  }
  // a 必須等於 b
  return 0;
}
```

為了比較數字而不是字串，比較函式可以僅僅利用 `a` 減 `b`。以下函式將會升冪排序陣列：

```js
function compareNumbers(a, b) {
  return a - b;
}
```

`sort` 方法可以直接使用{{jsxref("Operators/function", "函式運算式", "", 1)}}（以及[閉包（closures）](/zh-TW/docs/Web/JavaScript/Guide/Closures)）：

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

物件可以按照其中一個屬性的值來排序。

```js
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```

## 範例

### 建立、顯示及排序一個陣列

下列範例建立了四個陣列並顯示其原本陣列內容、再進行排序。數字陣列先不使用比較函式（compare function）來排序，接著才依據比較函式進行排序。

```js
var stringArray = ["Blue", "Humpback", "Beluga"];
var numericStringArray = ["80", "9", "700"];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log("stringArray:", stringArray.join());
console.log("Sorted:", stringArray.sort());

console.log("numberArray:", numberArray.join());
console.log("Sorted without a compare function:", numberArray.sort());
console.log("Sorted with compareNumbers:", numberArray.sort(compareNumbers));

console.log("numericStringArray:", numericStringArray.join());
console.log("Sorted without a compare function:", numericStringArray.sort());
console.log(
  "Sorted with compareNumbers:",
  numericStringArray.sort(compareNumbers),
);

console.log("mixedNumericArray:", mixedNumericArray.join());
console.log("Sorted without a compare function:", mixedNumericArray.sort());
console.log(
  "Sorted with compareNumbers:",
  mixedNumericArray.sort(compareNumbers),
);
```

這個範例將產生下列結果。就如結果所示，當使用比較函式時，數字會被正確的排序，不管是數字還是數字字串。

```plain
stringArray: Blue,Humpback,Beluga
Sorted: Beluga,Blue,Humpback

numberArray: 40,1,5,200
Sorted without a compare function: 1,200,40,5
Sorted with compareNumbers: 1,5,40,200

numericStringArray: 80,9,700
Sorted without a compare function: 700,80,9
Sorted with compareNumbers: 9,80,700

mixedNumericArray: 80,9,700,40,1,5,200
Sorted without a compare function: 1,200,40,5,700,80,9
Sorted with compareNumbers: 1,5,9,40,80,200,700
```

### 排序非 ASCII 字元

為了排列非 ASCII 字元，即重音節字元（e、é、è、a、ä 等等），非英語字串：利用 {{jsxref("String.localeCompare")}}。此函式將比較這些字元，所以結果將會顯示正確的順序。

```js
var items = ["réservé", "premier", "cliché", "communiqué", "café", "adieu"];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

### 排序 map

`compareFunction` 可以被陣列中的各個元素多次呼叫。依據 `compareFunction` 的特性，這將會產生大量運算。越多元素要排序 `compareFunction` 就越多工作要做，因此選擇使用 [map](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 來排列也就是一個更明智的選擇。作法為先迭代陣列一次來取得排序時所需的值至暫時的陣列，並對此臨時陣列進行排序。然後再迭代臨時陣列來將正確順序之值放入原始陣列中。

```js
// the array to be sorted
var list = ["Delta", "alpha", "CHARLIE", "bravo"];

// temporary array holds objects with position and sort-value
var mapped = list.map(function (el, i) {
  return { index: i, value: el.toLowerCase() };
});

// sorting the mapped array containing the reduced values
mapped.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// container for the resulting order
var result = mapped.map(function (el) {
  return list[el.index];
});
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("String.prototype.localeCompare()")}}
