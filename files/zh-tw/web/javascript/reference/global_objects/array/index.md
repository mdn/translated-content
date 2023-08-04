---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
---

{{JSRef}}

JavaScript 中的 **`Array`** 全域物件被用於建構陣列；陣列為高階（high-level）、似列表（list-like）的物件。陣列在 Javascript 裡面並沒有固定的長度與型別。由於陣列的長度可以隨時被改變，所以並不能保證陣列的密度。這取決於開發者如何使用陣列。一般來說，這是個非常方便的特性，但如果這並不適用於你的開發工作，你也許會考慮使用型別陣列。

**建立陣列**

```js
var fruits = ["Apple", "Banana"];

console.log(fruits.length);
// 2
```

**（透過索引）取得陣列項目**

```js
var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana
```

**迭代陣列**

```js
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1
```

**加入項目至陣列末端**

```js
var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]
```

**移除陣列末端項目**

```js
var last = fruits.pop(); // 移除 (最末端的) Orange
// ["Apple", "Banana"];
```

**移除陣列前端項目**

```js
var first = fruits.shift(); // 移除 (最前端的) Apple
// ["Banana"];
```

**加入項目至陣列前端**

```js
var newLength = fruits.unshift("Strawberry"); // 加到陣列前端
// ["Strawberry", "Banana"];
```

**在陣列中尋找項目的索引**

```js
fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf("Banana");
// 1
```

**移除指定索引位置的項目**

```js
var removedItem = fruits.splice(pos, 1); // 移除 pos 起的 1 個項目

// ["Strawberry", "Mango"]
```

**移除指定索引位置起的多個項目**

```js
var vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1,
  n = 2;

var removedItems = vegetables.splice(pos, n);
// 這就是移除項目的方式，
// n 表示從該位置 (pos) 開始，一直到陣列的尾端有多少項目需要移除

console.log(vegetables);
// ["Cabbage", "Carrot"] (原始的陣列被改變)

console.log(removedItems);
// ["Turnip", "Radish"]
```

**複製陣列**

```js
var shallowCopy = fruits.slice(); // 這就是複製陣列的方式
// ["Strawberry", "Mango"]
```

## 語法

```plain
[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
```

### 參數

- `elementN`
  - : 除了只傳遞一個參數給 `Array` 構造函數，且該參數為一個數字的情況（詳見下方的 arrayLength 參數），JavaScript 陣列會以傳入的元素進行初始化。請注意，這種特殊情況僅適用於以 `Array` 構造函數建立的 JavaScript 陣列，而不適用於以括號語法建立的陣列常值（Array Literals）。
- `arrayLength`
  - : 如果傳遞給 `Array` 構造函數的唯一參數是 0 和 2^32 - 1（含）之間的整數，將回傳一個新的 JavaScript 陣列，其長度被設定為這個數字。如果參數是任何其他數值，將拋出 {{jsxref("RangeError")}} 異常。

## 說明

Array（「陣列」）是類似列表（list）的物件（Object），它們的原型（Prototype）擁有方法（methods）來執行遍歷和變異操作。JavaScript 陣列的長度（元素數量），以及其元素的類型都不是固定的。取決於工程師如何選擇使用陣列，可以隨時更改陣列的長度，也可不連續儲存資料， 所以並不保證這些資料是集中的。一般情況下，這些特性很方便使用；但若這些功能都不符合您的用途，您可能會想使用型別陣列（typed arrays）。

有些人認為即便會發生警告，仍然[不應該使用關聯陣列](http://www.andrewdupont.net/2006/05/18/javascript-associative-arrays-considered-harmful/)，而應該使用 {{jsxref("Global_Objects/Object", "objects")}}。您可參考[輕量級 JavaScript 字典](http://www.less-broken.com/blog/2010/12/lightweight-javascript-dictionaries.html)當中的範例。

### 存取陣列元素

JavaScript 陣列是 zero-indexed：陣列元素的索引值編排從 0 開始，而最後一個元素的索引值等同於陣列的 {{jsxref("Array.length", "length")}} 屬性減 1。

```js
var arr = ["this is the first element", "this is the second element"];
console.log(arr[0]); // 紀錄出 'this is the first element'
console.log(arr[1]); // 記錄出 'this is the second element'
console.log(arr[arr.length - 1]); // 記錄出 'this is the second element'
```

Array 元素同時也是物件的屬性，與 `toString` 是一種屬性相同。但若要透過下面這種方式存取陣列元素，因為屬性名稱無效的關係，會發生語法錯誤：

```js
console.log(arr.0); // 語法錯誤
```

會造成如此的原因沒有什麼特別的，在 JavaScript 當中無法用小數點的方式來參照一個名稱開頭為數字的屬性，而必須括號的表示方式來存取。舉例來說，若您有個物件的屬性名稱為「`3d`」，就只能用括號的方式來參照。

請看下列範例：

```js
var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(years.0);   // 語法錯誤
console.log(years[0]);  // 程式正常
```

```js
renderer.3d.setTexture(model, 'character.png');     // 語法錯誤
renderer['3d'].setTexture(model, 'character.png');  // 程式正常
```

注意：以這個 `'3d'` 例子來說，必須用引號將 `3d` 包起來。您也可以將 JavaScript 陣列的索引用引號包起來（例如使用 `years['2']` 而不用 `years[2]`），但這不是必要的。JavaScript 會透過隱含的 `toString`，將 `years[2]` 當中的 2 強制轉換為字串。由於這個原因，`'2'` 與 `'02'` 會參照到 `years` 物件中的不同項目，下列程式範例結果可能回傳 `true`：

```js
console.log(years["2"] != years["02"]);
```

另一種類似的情況是，物件屬性剛好與保留字（！）相同的情況。這種情況下僅能透過括號表示方式當中的字串常值來存取：

```js
var promise = {
  var: "text",
  array: [1, 2, 3, 4],
};

console.log(promise["var"]);
```

### `length` 與數值屬性的關係

JavaScript 陣列的 {{jsxref("Array.length", "length")}} 屬性和其數值屬性相關。許多陣列的方法被呼叫時會參考 {{jsxref("Array.length", "length")}} 屬性的值（例如 {{jsxref("Array.join", "join")}}、{{jsxref("Array.slice", "slice")}}、{{jsxref("Array.indexOf", "indexOf")}} 等）。而有另一些方法則會去改變 {{jsxref("Array.length", "length")}} 屬性的值，如 {{jsxref("Array.push", "push")}}、{{jsxref("Array.splice", "splice")}}。

```js
var fruits = [];
fruits.push("banana", "apple", "peach");

console.log(fruits.length); // 3
```

如果給陣列設定一個數值屬性，其值為有效但超過當下範圍的陣列 index，JavaScript 引擎會依照此數值更新陣列的 {{jsxref("Array.length", "length")}} 屬性：

```js
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

提高 {{jsxref("Array.length", "length")}} 屬性。

```js
fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
```

降低 {{jsxref("Array.length", "length")}} 屬性則會刪除陣列元素。

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

在 {{jsxref("Array.length")}} 頁面裡有進一步解釋。

### 使用 match 回傳結果來建立陣列

在字串與正規表示式之間的比對結果會產生一個 javascript 陣列。此陣列內含關於比對資訊的屬性與元素。 這樣的陣列由{{jsxref("RegExp.exec")}}, {{jsxref("String.match")}}, 和 {{jsxref("String.replace")}} 所產生。參考以下範例和表格，會有助於說明這些屬性和元素：

```js
// 比對一個字元 d，後面接著一或多個 b，再接著一個 d
// Remember matched b's and the following d
// 忽略大小寫

var myRe = /d(b+)(d)/i;
var myArray = myRe.exec("cdbBdbsbz");
```

這項比對結果的屬性與元素參考如下：

| 屬性/元素     | 說明                                                                                                                                                                      | 範例           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `input`       | 唯讀屬性，代表 正規表示式用以比對的原始字串。                                                                                                                             | cdbBdbsbz      |
| `index`       | 唯讀屬性，代表在字串中比對得到的索引，是以零為基礎(從 0 開始)。                                                                                                           | 1              |
| `[0]`         | 一個唯獨元素以表示最後符合的字串                                                                                                                                          | dbBd           |
| `[1], ...[n]` | Read-only elements that specify the parenthesized substring matches, if included in the regular expression. The number of possible parenthesized substrings is unlimited. | [1]: bB [2]: d |

## 屬性

- Array.length
  - : `Array` 建構子的長度為 1。
- {{jsxref("Array.@@species", "get Array[@@species]")}}
  - : 用來建立衍生物件的建構函數。
- {{jsxref("Array.prototype")}}
  - : 可加入屬性至所有陣列物件。

## 方法

- {{jsxref("Array.from()")}}
  - : 用類似陣列或可列舉物件，來建立新的 `Array` 實例。
- {{jsxref("Array.isArray()")}}
  - : 若變數是陣列就回傳 true，否則回傳 false。
- {{jsxref("Array.of()")}}
  - : 用可變數量的引數來建立新的 `Array` 實例，不論引數的數量或型別。

## `Array` 實例

所有的陣列實例都繼承自 {{jsxref("Array.prototype")}}。若修改這個陣列建構子 (Array constructor) 的原型物件 (prototype object)，將會影響所有的陣列實體。

### 屬性

- {{jsxref("Array.prototype.length")}}
  - : Reflects the number of elements in an array.
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}
  - : Contains property names that were not included in the ECMAScript standard prior to the ES2015 version and that are ignored for [`with`](/zh-TW/docs/Web/JavaScript/Reference/Statements/with) statement-binding purposes.

### 方法

- {{jsxref("Array.prototype.at()")}}
  - : Returns the array item at the given index. Accepts negative integers, which count back from the last item.
- {{jsxref("Array.prototype.concat()")}}
  - : Returns a new array that is the calling array joined with other array(s) and/or value(s).
- {{jsxref("Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within an array.
- {{jsxref("Array.prototype.entries()")}}
  - : Returns a new [_array iterator_](/zh-TW/docs/Web/JavaScript/Guide/Iterators_and_Generators) object that contains the key/value pairs for each index in an array.
- {{jsxref("Array.prototype.every()")}}
  - : Returns `true` if every element in the calling array satisfies the testing function.
- {{jsxref("Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value.
- {{jsxref("Array.prototype.filter()")}}
  - : Returns a new array containing all elements of the calling array for which the provided filtering function returns `true`.
- {{jsxref("Array.prototype.find()")}}
  - : Returns the value of the first element in the array that satisfies the provided testing function, or `undefined` if no appropriate element is found.
- {{jsxref("Array.prototype.findIndex()")}}
  - : Returns the index of the first element in the array that satisfies the provided testing function, or `-1` if no appropriate element was found.
- {{jsxref("Array.prototype.findLast()")}}
  - : Returns the value of the last element in the array that satisfies the provided testing function, or `undefined` if no appropriate element is found.
- {{jsxref("Array.prototype.findLastIndex()")}}
  - : Returns the index of the last element in the array that satisfies the provided testing function, or `-1` if no appropriate element was found.
- {{jsxref("Array.prototype.flat()")}}
  - : Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- {{jsxref("Array.prototype.flatMap()")}}
  - : Returns a new array formed by applying a given callback function to each element of the calling array, and then flattening the result by one level.
- {{jsxref("Array.prototype.forEach()")}}
  - : Calls a function for each element in the calling array.
- {{jsxref("Array.prototype.group()")}} {{Experimental_Inline}}
  - : Groups the elements of an array into an object according to the strings returned by a test function.
- {{jsxref("Array.prototype.groupToMap()")}} {{Experimental_Inline}}
  - : Groups the elements of an array into a {{jsxref("Map")}} according to values returned by a test function.
- {{jsxref("Array.prototype.includes()")}}
  - : Determines whether the calling array contains a value, returning `true` or `false` as appropriate.
- {{jsxref("Array.prototype.indexOf()")}}
  - : Returns the first (least) index at which a given element can be found in the calling array.
- {{jsxref("Array.prototype.join()")}}
  - : Joins all elements of an array into a string.
- {{jsxref("Array.prototype.keys()")}}
  - : Returns a new [_array iterator_](/zh-TW/docs/Web/JavaScript/Guide/Iterators_and_Generators) that contains the keys for each index in the calling array.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index at which a given element can be found in the calling array, or `-1` if none is found.
- {{jsxref("Array.prototype.map()")}}
  - : Returns a new array containing the results of invoking a function on every element in the calling array.
- {{jsxref("Array.prototype.pop()")}}
  - : Removes the last element from an array and returns that element.
- {{jsxref("Array.prototype.push()")}}
  - : Adds one or more elements to the end of an array, and returns the new `length` of the array.
- {{jsxref("Array.prototype.reduce()")}}
  - : Executes a user-supplied "reducer" callback function on each element of the array (from left to right), to reduce it to a single value.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : Executes a user-supplied "reducer" callback function on each element of the array (from right to left), to reduce it to a single value.
- {{jsxref("Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array _in place_. (First becomes the last, last becomes first.)
- {{jsxref("Array.prototype.shift()")}}
  - : Removes the first element from an array and returns that element.
- {{jsxref("Array.prototype.slice()")}}
  - : Extracts a section of the calling array and returns a new array.
- {{jsxref("Array.prototype.some()")}}
  - : Returns `true` if at least one element in the calling array satisfies the provided testing function.
- {{jsxref("Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array.
- {{jsxref("Array.prototype.splice()")}}
  - : Adds and/or removes elements from an array.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the calling array and its elements. Overrides the {{jsxref("Object.prototype.toLocaleString()")}} method.
- {{jsxref("Array.prototype.toString()")}}
  - : Returns a string representing the calling array and its elements. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Array.prototype.unshift()")}}
  - : Adds one or more elements to the front of an array, and returns the new `length` of the array.
- {{jsxref("Array.prototype.values()")}}
  - : Returns a new [_array iterator_](/zh-TW/docs/Web/JavaScript/Guide/Iterators_and_Generators) object that contains the values for each index in the array.
- [`Array.prototype[@@iterator]()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
  - : An alias for the [`values()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/values) method by default.

## 範例

### 範例：建立陣列

以下範例會產生長度為 0 的 `msgArray` 陣列，然後指派字串值到 `msgArray[0]` 及 `msgArray[99]`，使陣列的長度變為 100。

```js
var msgArray = [];
msgArray[0] = "Hello";
msgArray[99] = "world";

if (msgArray.length === 100) {
  console.log("The length is 100.");
}
```

### 建立二維陣列

以下範例會用字串產生一張西洋棋盤的二維陣列。第一步是將士兵 'p' 從 (6,4) 移動至 (4,4)，然後清空原本的位置 (6,4)。

```js
var board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(board.join("\n") + "\n\n");

// 將士兵往前移兩步
board[4][4] = board[6][4];
board[6][4] = " ";
console.log(board.join("\n"));
```

以下是輸出結果：

```plain
R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , ,p, , ,
 , , , , , , ,
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
```

### 使用陣列來以表格顯示多個數值

```js
values = [];
for (var x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

結果會是

```plain
0 1   0
1 2   2
2 4   8
3 8   18
4 16  32
5 32  50
6 64  72
7 128 98
8 256 128
9 512 162
```

（第一欄為索引）

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [JavaScript Guide: 「Indexing object properties」](/zh-TW/docs/Web/JavaScript/Guide/Working_with_Objects#Indexing_object_properties)
- [JavaScript Guide: 「Predefined Core Objects: `Array` Object」](/zh-TW/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Array_Object)
- [Array comprehensions](/zh-TW/docs/Web/JavaScript/Reference/Operators/Array_comprehensions)
- [Polyfill for JavaScript 1.8.5 Array Generics and ECMAScript 5 Array Extras](https://github.com/plusdude/array-generics)
- [Typed Arrays](/zh-TW/docs/JavaScript_typed_arrays)
