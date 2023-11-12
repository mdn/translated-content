---
title: 迭代協議
slug: Web/JavaScript/Reference/Iteration_protocols
---

{{jsSidebar("More")}}

為 ECMAScript 2015 中的一些補充內容，並非新的內建物件或語法，而是協議。這些協議可被任何遵守特定協定的物件所實作。

本文介紹兩種協議：[可迭代協議（iterable protocol）](#The_iterable_protocol)以及[迭代器協議（iterator protocol）](#The_iterator_protocol)。

## 可迭代協議

**可迭代（iterable）**協議允許 JavaScript 物件定義或客制他們的迭代行為，例如哪些值可在 {{jsxref("Statements/for...of", "for..of")}} 語法結構中被迭代出來。部分內建型別為擁有預設迭代行為的[可迭代內建物件（built-in iterables）](#Built-in_iterables)，如 {{jsxref("Array")}} 或 {{jsxref("Map")}}，而其他型別（如 {{jsxref("Object")}}）則否。

為了成為**可迭代的（iterable）**，一個物件必須實作 **@@iterator** 方法，意思是這個物件（或其[原型鏈](/zh-TW/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)中的其中一個原型物件）必須擁有一個鍵（key）值為 **@@iterator**（即 {{jsxref("Symbol.iterator")}} 常數）的屬性：

| 屬性                | 值                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------- |
| `[Symbol.iterator]` | 回傳符合[迭代器協議（iterator protocol）](#The_iterator_protocol)之物件的無引數函式。 |

每當物件需要被迭代時（比如在一個開始的 `for..of` 迴圈中），物件的 `@@iterator` 方法會被以不傳入引數的方式呼叫，並會使用其回傳的**迭代器（iterator）**來獲得被迭代出來的值。

## 迭代器協議

**迭代器（iterator）**協議定義了一個標準方式來產出一連串（有限或無限）的值，並且可能於所有值都被產出後回傳一個值。

當物件以下列語義實作了 **`next()`** 方法即為一個迭代器：

<table>
  <tbody>
    <tr>
      <th scope="col">屬性</th>
      <th scope="col">值</th>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>
        <p>回傳一個至少擁有以下兩個屬性之物件的無引數函式：</p>
        <ul>
          <li>
            <code>done</code>（布林值）
            <ul>
              <li>
                若迭代器已迭代完畢整個可迭代序列，則值為
                <code>true</code>。在這個情況下
                <code>value</code> 可以是代表迭代器的<em>回傳值</em>。
              </li>
              <li>
                若迭代器能夠產出序列中的下一個值，則值為
                <code>false</code>。相當於完全不指定 <code>done</code> 屬性。
              </li>
            </ul>
          </li>
          <li>
            <code>value</code> - 任何由迭代器所回傳的 JavaScript 值。可於
            <code>done</code> 為 <code>true</code> 時省略。
          </li>
        </ul>
        <p>
          <code>next</code> 方法必須總是回傳一個包含符合 <code>done</code> 及
          <code>value</code> 屬性的物件。假如回傳了一個非物件值（如
          <code>false</code> 或 <code>undefined</code>），則將會拋出一個
          {{jsxref("TypeError")}} 錯誤。
        </p>
      </td>
    </tr>
  </tbody>
</table>

> **備註：** 我們無法反射性的一眼看出一個特定的物件是否實作了迭代器協議，然而要建立一個同時滿足迭代器及可迭代協議的物件卻是相當容易（如下例所示）。範例的做法允許一個迭代器被各個預期其可迭代行為的語法所消費。因此很少有需要實作迭代器協議而沒有實作可迭代協議的情況。
>
> ```js
> var myIterator = {
>   next: function () {
>     // ...
>   },
>   [Symbol.iterator]: function () {
>     return this;
>   },
> };
> ```

## 迭代協議使用範例

{{jsxref("String")}} 為一個可迭代內建物件（built-in iterable object）的範例：

```js
var someString = "hi";
typeof someString[Symbol.iterator]; // "function"
```

`String` 的[預設迭代器](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)會回傳字串中的一個一個字元：

```js
var iterator = someString[Symbol.iterator]();
iterator + ""; // "[object String Iterator]"

iterator.next(); // { value: "h", done: false }
iterator.next(); // { value: "i", done: false }
iterator.next(); // { value: undefined, done: true }
```

部分內建語法結構（built-in constructs），如 [spread syntax](/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_operator)，其內部也使用了相同的迭代協議：

```js
[...someString]; // ["h", "i"]
```

我們可以藉由提供我們自己的 `@@iterator` 來重新定義迭代行為：

```js
var someString = new String("hi"); // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element, the string "bye"
    next: function () {
      if (this._first) {
        this._first = false;
        return { value: "bye", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true,
  };
};
```

請注意，重新定義 `@@iterator` 會影響使用迭代協議之內建語法結構的行為：

```js
[...someString]; // ["bye"]
someString + ""; // "hi"
```

## 可迭代範例

### 可迭代內建物件

{{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("TypedArray")}}、{{jsxref("Map")}} 以及 {{jsxref("Set")}} 全都是可迭代內建物件，因為他們每一個的原型物件皆實作了 `@@iterator` 方法。

### 自定義可迭代物件

我們可以建立自己的可迭代物件，像是：

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

### 接受可迭代物件的內建 API

有許多 APIs 接受可迭代物件，如：{{jsxref("Map", "Map([iterable])")}}、{{jsxref("WeakMap", "WeakMap([iterable])")}}、{{jsxref("Set", "Set([iterable])")}} 及 {{jsxref("WeakSet", "WeakSet([iterable])")}}：

```js
var myObj = {};
new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]).get(2); // "b"
new WeakMap([
  [{}, "a"],
  [myObj, "b"],
  [{}, "c"],
]).get(myObj); // "b"
new Set([1, 2, 3]).has(3); // true
new Set("123").has("2"); // true
new WeakSet(
  (function* () {
    yield {};
    yield myObj;
    yield {};
  })(),
).has(myObj); // true
```

另外可參考 {{jsxref("Promise.all", "Promise.all(iterable)")}}、{{jsxref("Promise.race", "Promise.race(iterable)")}} 以及 {{jsxref("Array.from", "Array.from()")}}。

### 用於可迭代物件的語法

部分陳述式（statements）及運算式（expressions）為預期用於可迭代物件，例如 [`for-of`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...of) 迴圈、[spread syntax](/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_operator)、[`yield*`](/zh-TW/docs/Web/JavaScript/Reference/Operators/yield*)，及[解構賦值](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)：

```js
for (let value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"]);
a; // "a"
```

### 非良好的（Non-well-formed）可迭代物件

假如可迭件物件的 `@@iterator` 方法不是回傳一個迭代器物件，即是非良好的（non-well-formed）可迭代物件。如以下方式使用可能會導致執行時期異常或錯誤行為：

```js
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## 迭代器範例

### 簡單的迭代器

```js
function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    },
  };
}

var it = makeIterator(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### 無限迭代器

```js
function idMaker() {
  var index = 0;

  return {
    next: function () {
      return { value: index++, done: false };
    },
  };
}

var it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

### 搭配生成器（generator）

```js
function* makeSimpleGenerator(array) {
  var nextIndex = 0;

  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

var gen = makeSimpleGenerator(["yo", "ya"]);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done); // true

function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...
```

### 搭配 ES2015 類別

```js
class SimpleClass {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return { value: this.data[this.index++], done: false };
        } else {
          this.index = 0; //If we would like to iterate over this again without forcing manual update of the index
          return { done: true };
        }
      },
    };
  }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);

for (const val of simple) {
  console.log(val); //'0' '1' '2' '3' '4' '5'
}
```

## 生成器物件是迭代器還是可迭代物件？

[生成器物件（generator object）](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Generator)同時為迭代器及可迭代物件：

```js
var aGeneratorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
typeof aGeneratorObject.next;
// "function", because it has a next method, so it's an iterator
typeof aGeneratorObject[Symbol.iterator];
// "function", because it has an @@iterator method, so it's an iterable
aGeneratorObject[Symbol.iterator]() === aGeneratorObject;
// true, because its @@iterator method returns itself (an iterator), so it's an well-formed iterable
[...aGeneratorObject];
// [1, 2, 3]
```

## 參見

- 更多關於 ES2015 生成器（generators）的資訊，可參考[生成器函式 function\* 文件](/zh-TW/docs/Web/JavaScript/Reference/Statements/function*)。
