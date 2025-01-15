---
title: JavaScript 的資料型別與資料結構
slug: Web/JavaScript/Data_structures
---

{{jsSidebar("More")}}

程式語言都具有資料結構，但在不同的程式語言之間會有些差異。這裡將列出可以在 JavaScript 中使用的資料結構，以及它們的特性；它們可以用來構成其他的資料結構。如果可以的話，會標示與其他語言不同的地方。

## 動態型別

JavaScript 是弱型別，也能說是動態的程式語言。這代表你不必特別宣告變數的型別。程式在運作時，型別會自動轉換。這也代表你可以以不同的型別使用同一個變數。

```js
var foo = 42; // foo 目前是數字
var foo = "bar"; // foo 目前是字串
var foo = true; // foo 目前是布林值
```

## 資料型別

最新的 ECMAScript 標準定義了七種資料型別：

- 有六種資料型別是{{Glossary("Primitive", "原始型別")}}：

  - {{Glossary("Boolean")}}
  - {{Glossary("Null")}}
  - {{Glossary("Undefined")}}
  - {{Glossary("Number")}}
  - {{Glossary("BigInt")}}
  - {{Glossary("String")}}
  - {{Glossary("Symbol")}}（於 ECMAScript 6 新定義）

- 另外還有 {{Glossary("Object")}}

## 原始值

除了物件以外的所有值，都是原始定義的值（值意味著不能被改變）。例如與 C 不同的地方，就是字串是不變的。我們引用這些類型的值為 primitive values（原始值）。

### 布林型別

布林（Boolean）代表了有兩個值的邏輯實體：`true` 與 `false`。

### Null 型別

Null 型別只有一個值：`null`。請參見 {{jsxref("null")}} 與 {{Glossary("Null")}}。

### 未定義型別

一個沒有被定義的變數有 `undefined` 值。請參見 {{jsxref("undefined")}} 與 {{Glossary("Undefined")}}。

### 數字型別

根據 ECMAScript 標準，數字型別只有一種：[雙精度 64 位元二進制格式 IEEE 754 值](https://zh.wikipedia.org/wiki/%E9%9B%99%E7%B2%BE%E5%BA%A6%E6%B5%AE%E9%BB%9E%E6%95%B8)（在 -(2^53 -1) and 2^53 -1 之間的數字）。**而整數並沒有指定的型別**。數字除了能代表浮點數以外，還有三個符號值：`+Infinity`、`-Infinity`、[`NaN`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/NaN)（not-a-number，非數字）。

要檢查在 `+/-Infinity` 內可用的最大值或最小值，可以用 {{jsxref("Number.MAX_VALUE")}} 或 {{jsxref("Number.MIN_VALUE")}} 常數。從 ECMAScript 6 開始，也可以透過 {{jsxref("Number.isSafeInteger()")}}、{{jsxref("Number.MAX_SAFE_INTEGER")}}、{{jsxref("Number.MIN_SAFE_INTEGER")}} 檢查某數字是否為雙精度浮點值之間。Beyond this range, integers in JavaScript are not safe anymore and will be a double-precision floating point approximation of the value.

The number type has only one integer that has two representations: 0 is represented as -0 and +0. ("0" is an alias for +0). In the praxis, this has almost no impact. For example `+0 === -0` is `true`. However, you are able to notice this when you divide by zero:

```js
> 42 / +0
Infinity
> 42 / -0
-Infinity
```

Although a number often represents only its value, JavaScript provides [some binary operators](/zh-TW/docs/Web/JavaScript/Reference/Operators). These can be used to represent several Boolean values within a single number using [bit masking](<https://en.wikipedia.org/wiki/Mask_(computing)>). However, this is usually considered a bad practice, since JavaScript offers other means to represent a set of Booleans (like an array of Booleans or an object with Boolean values assigned to named properties). Bit masking also tends to make code more difficult to read, understand, and maintain. It may be necessary to use such techniques in very constrained environments, like when trying to cope with the storage limitation of local storage or in extreme cases when each bit over the network counts. This technique should only be considered when it is the last measure that can be taken to optimize size.

### 字串型別

JavaScript 的 {{jsxref("Global_Objects/String", "字串")}}型別用來代表文字資料。它是一組 16 位的未宣告「元素」值。每個字串的元素，在字串內皆佔有一位。第一個元素位於索引的第 0 位，下一個元素位於第 1 位，並依此類推。字串的長度，是指該字串有多少元素。

與 C 這類的語言不同，JavaScript 字串是不變的，意思是說當字串被創造出來以後，你不可能修改它。不過，可以基於操作原來的字串，來產生新的字串。例如：

- 透過挑選單個字母或使用 {{jsxref("String.substr()")}} 的原始子字串。
- 使用級聯運算符（`+`）或 {{jsxref("String.concat()")}} 連接兩個字符串。

#### Beware of "stringly-typing" your code!

It can be tempting to use strings to represent complex data. Doing this comes with short-term benefits:

- It is easy to build complex strings with concatenation.
- Strings are easy to debug (what you see printed is always what is in the string).
- Strings are the common denominator of a lot of APIs ([input fields](/zh-TW/docs/Web/API/HTMLInputElement), [local storage](/zh-TW/docs/Storage) values, {{ domxref("XMLHttpRequest") }} responses when using `responseText`, etc.) and it can be tempting to only work with strings.

With conventions, it is possible to represent any data structure in a string. This does not make it a good idea. For instance, with a separator, one could emulate a list (while a JavaScript array would be more suitable). Unfortunately, when the separator is used in one of the "list" elements, then, the list is broken. An escape character can be chosen, etc. All of this requires conventions and creates an unnecessary maintenance burden.

Use strings for textual data. When representing complex data, parse strings and use the appropriate abstraction.

### Symbol type

Symbols are new to JavaScript in ECMAScript Edition 6. A Symbol is a **unique** and **immutable** primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called atoms. You can also compare them to named enumerations (enum) in C. For more details see {{Glossary("Symbol")}} and the {{jsxref("Symbol")}} object wrapper in JavaScript.

## Objects

以資訊科學而言，物件是個能透過{{Glossary("Identifier", "identifier")}}參照的有數值記憶體。

### Properties

In JavaScript, objects can be seen as a collection of properties. With the [object literal syntax](/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals), a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String or a Symbol value.

There are two types of object properties which have certain attributes: The data property and the accessor property.

#### Data property

Associates a key with a value and has the following attributes:

| Attribute        | Type                | Description                                                                                                                                                                                                                                          | Default value |
| ---------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [[Value]]        | Any JavaScript type | The value retrieved by a get access of the property.                                                                                                                                                                                                 | undefined     |
| [[Writable]]     | Boolean             | If `false`, the property's [[Value]] can't be changed.                                                                                                                                                                                               | false         |
| [[Enumerable]]   | Boolean             | If `true`, the property will be enumerated in [for...in](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in) loops. See also [Enumerability and ownership of properties](/zh-TW/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) | false         |
| [[Configurable]] | Boolean             | If `false`, the property can't be deleted and attributes other than [[Value]] and [[Writable]] can't be changed.                                                                                                                                     | false         |

| Attribute  | Type    | Description                                           |
| ---------- | ------- | ----------------------------------------------------- |
| Read-only  | Boolean | Reversed state of the ES5 [[Writable]] attribute.     |
| DontEnum   | Boolean | Reversed state of the ES5 [[Enumerable]] attribute.   |
| DontDelete | Boolean | Reversed state of the ES5 [[Configurable]] attribute. |

#### Accessor property

Associates a key with one or two accessor functions (get and set) to retrieve or store a value and has the following attributes:

| Attribute        | Type                         | Description                                                                                                                                                                                                              | Default value |
| ---------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| [[Get]]          | Function object or undefined | The function is called with an empty argument list and retrieves the property value whenever a get access to the value is performed. See also [`get`](/zh-TW/docs/Web/JavaScript/Reference/Functions/get).               | undefined     |
| [[Set]]          | Function object or undefined | The function is called with an argument that contains the assigned value and is executed whenever a specified property is attempted to be changed. See also [`set`](/zh-TW/docs/Web/JavaScript/Reference/Functions/set). | undefined     |
| [[Enumerable]]   | Boolean                      | If `true`, the property will be enumerated in [for...in](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in) loops.                                                                                                | false         |
| [[Configurable]] | Boolean                      | If `false`, the property can't be deleted and can't be changed to a data property.                                                                                                                                       | false         |

> [!NOTE]
> Attribute is usually used by JavaScript engine, so you can't directly access it(see more about [Object.defineProperty()](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)).That's why the attribute is put in double square brackets instead of single.

### "Normal" objects, and functions

A JavaScript object is a mapping between keys and values. Keys are strings (or {{jsxref("Symbol")}}s) and values can be anything. This makes objects a natural fit for [hashmaps](https://en.wikipedia.org/wiki/Hash_table).

Functions are regular objects with the additional capability of being callable.

### Dates

When representing dates, the best choice is to use the built-in [`Date` utility](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date) in JavaScript.

### Indexed collections: Arrays and typed Arrays

[Arrays](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array) are regular objects for which there is a particular relationship between integer-keyed properties and the `length` property.

Additionally, arrays inherit from `Array.prototype`, which provides a handful of convenient methods to manipulate arrays. For example, [`indexOf()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) searches a value in the array and [`push()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/push) appends an element to the array. This makes Arrays a perfect candidate to represent ordered lists.

[Typed Arrays](/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays) present an array-like view of an underlying binary data buffer, and offer many methods that have similar semantics to the array counterparts. "Typed array" is an umbrella term for a range of data structures, including `Int8Array`, `Float32Array`, etc. Check the [typed array](/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays) page for more information. Typed arrays are often used in conjunction with {{jsxref("ArrayBuffer")}} and {{jsxref("DataView")}}.

### Keyed collections: Maps, Sets, WeakMaps, WeakSets

These data structures take object references as keys and are introduced in ECMAScript Edition 6. {{jsxref("Set")}} and {{jsxref("WeakSet")}} represent a set of objects, while {{jsxref("Map")}} and {{jsxref("WeakMap")}} associate a value to an object. The difference between Maps and WeakMaps is that in the former, object keys can be enumerated over. This allows garbage collection optimizations in the latter case.

One could implement Maps and Sets in pure ECMAScript 5. However, since objects cannot be compared (in the sense of "less than" for instance), look-up performance would necessarily be linear. Native implementations of them (including WeakMaps) can have look-up performance that is approximately logarithmic to constant time.

Usually, to bind data to a DOM node, one could set properties directly on the object or use `data-*` attributes. This has the downside that the data is available to any script running in the same context. Maps and WeakMaps make it easy to privately bind data to an object.

### Structured data: JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format, derived from JavaScript but used by many programming languages. JSON builds universal data structures. See {{Glossary("JSON")}} and {{jsxref("JSON")}} for more details.

### More objects in the standard library

JavaScript has a standard library of built-in objects. Please have a look at the [reference](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects) to find out about more objects.

## 使用 `typeof` 運算子來判斷型別

`typeof` 運算子可以幫助你找到你的變數型別，請閱讀〈[reference page](/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof) 〉來取得更多細節及邊緣案例。

## See also

- [Nicholas Zakas collection of common data structure and common algorithms in JavaScript.](https://github.com/humanwhocodes/computer-science-in-javascript)
- [Search Tre(i)es implemented in JavaScript](https://github.com/monmohan/dsjslib)
