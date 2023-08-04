---
title: 字串
slug: Web/JavaScript/Reference/Global_Objects/String
---

{{JSRef("Global_Objects", "String")}}

**`String`** 全域物件為字串的構造函數，或是一個字符序列。

## 語法

字串文字採用下列形式：

```plain
'string text' "string text" "中文 español deutsch English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ் עברית"
```

字串也可以被全域的 `String` 物件建立：

```plain
String(thing)
```

### 參數

- `thing`
  - : 任何要轉換成字串的物件。

### 樣板字面值

自 ECMAScript 2015，字串文字也可以是[樣板字面值（Template literals）](/zh-TW/docs/Web/JavaScript/Reference/Template_literals)：

```plain
`hello world` `hello! world!` `hello ${who}` escape `<a>${who}</a>`
```

### 跳脫符號

除了常規的、可印出來的字元，特殊字元也可以被跳脫符號來表示編碼。

| 代碼                     | 輸出                                 |
| ------------------------ | ------------------------------------ |
| `\0`                     | 空字元                               |
| `\'`                     | 單引號                               |
| `\"`                     | 雙引號                               |
| `\\`                     | 反斜線                               |
| `\n`                     | 斷行                                 |
| `\r`                     | 回車                                 |
| `\v`                     | 垂直制表                             |
| `\t`                     | 制表                                 |
| `\b`                     | 退格                                 |
| `\f`                     | 饋頁                                 |
| `\uXXXX`                 | unicode 代碼                         |
| `\u{X}` ... `\u{XXXXXX}` | unicode 代碼 {{experimental_inline}} |
| `\xXX`                   | Latin-1 字元                         |

> **備註：** 和其他語言不同，JavaScript 將單引號字串和雙引號字串是做相同；因此，上述的序列可以在單引號或雙引號中作用。

### 長字面值字串

有些時候，你的程式碼會包含非常長的字串。 為了不讓長字串無止盡地往下長，抑或是在你心血來潮的時候，你可能希望將這樣長的字串能夠斷成多行卻不影響到實際的內容。

你可以用 [+](/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators#字串運算子) 運算子附加多個字串在一起，像是這樣：

```js
let longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

或者，你可以在每一行尾端用反斜線字元（"\\"）表示字串會繼續被顯示在下一列。 你必須要確定在反斜線後面沒有任何空白或其他字元，甚至是縮排；否則這個方法將失效。 這個形式看起來像這樣：

```js
let longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

這兩個方法都會建立相同的字串內容。

## 說明

字串對於能保留以文字形式表達的資料這件事來說，是有用的。在字串上，一些最常被使用的運算即確認字串長度 {{jsxref("String.length", "length")}} ，用 [+ 或 += 字串運算元](/zh-TW/docs/Web/JavaScript/Reference/Operators/String_Operators) 建造或者串接字串，用 {{jsxref("String.indexOf", "indexOf")}} 方法檢查?子字串是否存在或子字串的位置，或者是用 {{jsxref("String.substring", "substring")}} 方法將子字串抽取出來。

### 存取字元

有兩個方法可以存取字串中個別的字元。第一個是用 {{jsxref("String.charAt", "charAt")}} 方法：

```js
return "cat".charAt(1); // 回傳 "a"
```

另一個(在 ECMAScript 5 中被提到)方法是將字串當作一個類似陣列的物件，直接存取字串中對應的數值索引。

```js
return "cat"[1]; // 回傳 "a"
```

對於存取字元使用的括號表達式，沒辦法去刪除或指派一個值給這些屬性。 這些屬性既非可寫的，也非可設定的。(參見 {{jsxref("Object.defineProperty")}})

### 比較字串

C 語言的開發者有 `strcmp()` 函式可以用來比較字串。 在 JavaScript 中，你只能用[小於和大於運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)：

```js
var a = "a";
var b = "b";
if (a < b)
  // true
  print(a + " 小於 " + b);
else if (a > b) print(a + " 大於 " + b);
else print(a + " 和 " + b + " 相等");
```

這樣類似的結果，也能使用繼承 `String` 實體的 {{jsxref("String.localeCompare", "localeCompare")}} 方法來實現。

### 分辨 string 原始型別和 `String` 物件

請注意，JavaScript 會區別 `String` 物件和原始字串({{jsxref("Global_Objects/Boolean", "Boolean")}} 和 {{jsxref("Global_Objects/Number", "Numbers")}} 也是如此)。

String literals (denoted by double or single quotes) and strings returned from `String` calls in a non-constructor context (i.e., without using the [`new` keyword](/zh-TW/docs/Web/JavaScript/Reference/Operators/new)) are primitive strings. JavaScript automatically converts primitives to `String` objects, so that it's possible to use `String` object methods for primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup.

```js
var s_prim = "foo";
var s_obj = new String(s_prim);

console.log(typeof s_prim); // 印出 "string"
console.log(typeof s_obj); // 印出 "object"
```

字串原始型別和 `String` 物件也會在使用 {{jsxref("Global_Objects/eval", "eval")}} 時給出不同的結果。 原始型別傳進 `eval` 會被視為原始代碼；`String` 物件則會回傳，且被視作是其他物件。舉個例子：

```js
s1 = "2 + 2"; // 建立一個字串原始型別
s2 = new String("2 + 2"); // 建立一個字串物件
console.log(eval(s1)); // 回傳數字 4
console.log(eval(s2)); // 回傳字串 "2 + 2"
```

因為一些原因，程式碼也許在遇到 `String` 物件時，但需要的卻是字串原始型別；儘管如此，通常作者們不需要擔心它的差異。

一個 `String` 物件總能夠使用 {{jsxref("String.valueOf", "valueOf")}} 方法被轉換成自身的原始副本。

```js
console.log(eval(s2.valueOf())); // 回傳數字 4
```

## 屬性

- {{jsxref("String.prototype")}}
  - : 能讓字串物件增加屬性。

## 方法

- {{jsxref("String.fromCharCode()")}}
  - : 利用 Unicode 值的序列建立並回傳一個字串。
- {{jsxref("String.fromCodePoint()")}} {{experimental_inline}}
  - : 利用編碼位置的序列建立並回傳一個字串。

## `String` 通用方法

> **警告：** 字串通用方法是非標準化的、被棄用的，也有近期將被刪除的。

The `String` instance methods are also available in Firefox as of JavaScript 1.6 (though not part of the ECMAScript standard) on the String object for applying String methods to any object:

```js
var num = 15;
alert(String.replace(num, /5/, "2"));
```

[Generics](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_generic_methods) are also available on {{jsxref("Global_Objects/Array", "Array")}} methods.

The following is a shim to provide support to non-supporting browsers:

```js
/*globals define*/
// Assumes all supplied String instance methods already present
// (one may use shims for these if not available)
(function () {
  "use strict";

  var i,
    // We could also build the array of methods with the following, but the
    //   getOwnPropertyNames() method is non-shimable:
    // Object.getOwnPropertyNames(String).filter(function (methodName)
    //  {return typeof String[methodName] === 'function'});
    methods = [
      "quote",
      "substring",
      "toLowerCase",
      "toUpperCase",
      "charAt",
      "charCodeAt",
      "indexOf",
      "lastIndexOf",
      "startsWith",
      "endsWith",
      "trim",
      "trimLeft",
      "trimRight",
      "toLocaleLowerCase",
      "toLocaleUpperCase",
      "localeCompare",
      "match",
      "search",
      "replace",
      "split",
      "substr",
      "concat",
      "slice",
    ],
    methodCount = methods.length,
    assignStringGeneric = function (methodName) {
      var method = String.prototype[methodName];
      String[methodName] = function (arg1) {
        return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
      };
    };

  for (i = 0; i < methodCount; i++) {
    assignStringGeneric(methods[i]);
  }
})();
```

## `String` instances

### Properties

- {{jsxref("String.prototype.length")}}
  - : Reflects the `length` of the string. Read-only.

### Methods

- {{jsxref("String.prototype.at()")}}
  - : Returns the character (exactly one UTF-16 code unit) at the specified `index`. Accepts negative integers, which count back from the last string character.
- {{jsxref("String.prototype.charAt()")}}
  - : Returns the character (exactly one UTF-16 code unit) at the specified
    `index`.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Returns a number that is the UTF-16 code unit value at the given
    `index`.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Returns a nonnegative integer Number that is the code point value of the UTF-16
    encoded code point starting at the specified `pos`.
- {{jsxref("String.prototype.concat()")}}
  - : Combines the text of two (or more) strings and returns a new string.
- {{jsxref("String.prototype.includes()")}}
  - : Determines whether the calling string contains `searchString`.
- {{jsxref("String.prototype.endsWith()")}}
  - : Determines whether a string ends with the characters of the string
    `searchString`.
- {{jsxref("String.prototype.indexOf()")}}
  - : Returns the index within the calling {{jsxref("String")}} object of the first
    occurrence of `searchValue`, or `-1` if not found.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Returns the index within the calling {{jsxref("String")}} object of the last
    occurrence of `searchValue`, or `-1` if not found.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Returns a number indicating whether the reference string
    `compareString` comes before, after, or is equivalent to the
    given string in sort order.
- {{jsxref("String.prototype.match()")}}
  - : Used to match regular expression `regexp` against a string.
- {{jsxref("String.prototype.matchAll()")}}
  - : Returns an iterator of all `regexp`'s matches.
- {{jsxref("String.prototype.normalize()")}}
  - : Returns the Unicode Normalization Form of the calling string value.
- {{jsxref("String.prototype.padEnd()")}}
  - : Pads the current string from the end with a given string and returns a new string of
    the length `targetLength`.
- {{jsxref("String.prototype.padStart()")}}
  - : Pads the current string from the start with a given string and returns a new string
    of the length `targetLength`.
- {{jsxref("String.prototype.repeat()")}}
  - : Returns a string consisting of the elements of the object repeated
    `count` times.
- {{jsxref("String.prototype.replace()")}}
  - : Used to replace occurrences of `searchFor` using
    `replaceWith`. `searchFor` may be a string
    or Regular Expression, and `replaceWith` may be a string or
    function.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Used to replace all occurrences of `searchFor` using
    `replaceWith`. `searchFor` may be a string
    or Regular Expression, and `replaceWith` may be a string or
    function.
- {{jsxref("String.prototype.search()")}}
  - : Search for a match between a regular expression `regexp` and
    the calling string.
- {{jsxref("String.prototype.slice()")}}
  - : Extracts a section of a string and returns a new string.
- {{jsxref("String.prototype.split()")}}
  - : Returns an array of strings populated by splitting the calling string at occurrences
    of the substring `sep`.
- {{jsxref("String.prototype.startsWith()")}}
  - : Determines whether the calling string begins with the characters of string
    `searchString`.
- {{jsxref("String.prototype.substring()")}}
  - : Returns a new string containing characters of the calling string from (or between)
    the specified index (or indices).
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : The characters within a string are converted to lowercase while respecting the
    current locale.

    For most languages, this will return the same as
    {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()",
    "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}}

  - : The characters within a string are converted to uppercase while respecting the
    current locale.

    For most languages, this will return the same as
    {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Returns the calling string value converted to lowercase.
- {{jsxref("String.prototype.toString()")}}
  - : Returns a string representing the specified object. Overrides the
    {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Returns the calling string value converted to uppercase.
- {{jsxref("String.prototype.trim()")}}
  - : Trims whitespace from the beginning and end of the string.
- {{jsxref("String.prototype.trimStart()")}}
  - : Trims whitespace from the beginning of the string.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Trims whitespace from the end of the string.
- {{jsxref("String.prototype.valueOf()")}}
  - : Returns the primitive value of the specified object. Overrides the
    {{jsxref("Object.prototype.valueOf()")}} method.
- {{jsxref("String.prototype.@@iterator()", "String.prototype[@@iterator]()")}}
  - : Returns a new iterator object that iterates over the code points of a String value,
    returning each code point as a String value.

## Examples

### String conversion

It's possible to use `String` as a "safer" {{jsxref("String.toString", "toString")}} alternative, as although it still normally calls the underlying `toString`, it also works for `null` and `undefined`. For example:

```js
var outputStrings = [];
for (let i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("DOMString")}}
- [`StringView` — a C-like representation of strings based on typed arrays](/zh-TW/Add-ons/Code_snippets/StringView)
- [Binary strings](/zh-TW/docs/Web/API/DOMString/Binary)
