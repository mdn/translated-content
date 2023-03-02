---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
---

{{JSRef}}

**`replace()`** 方法會傳回一個新字串，此新字串是透過將原字串與 `pattern` 比對，以 `replacement` 取代吻合處而生成。`pattern` 可以是字串或 {{jsxref("RegExp")}}，而 `replacement` 可以是字串或函式（會在每一次匹配時被呼叫）。

> **備註：** 原始的字串會保持不變。

## 語法

```plain
str.replace(regexp|substr, newSubstr|function)
```

### 參數

- `regexp` (pattern)
  - : {{jsxref("RegExp")}} 的物件或文字。 被比對出來的部分將會被取代為 `newSubStr` 或是取代為 `function` 的回傳值。
- `substr` (pattern)
  - : 要被 `newSubStr` 取代的 {{jsxref("String")}}。它被視為逐字字符串，並且不會被解釋為正則表達式。只會替換第一次出現。
- `newSubStr` (replacement)
  - : The {{jsxref("String")}} that replaces the substring specified by the specified `regexp` or `substr` parameter. A number of special replacement patterns are supported; see the "[Specifying a string as a parameter](#指定一個字串為參數)" section below.
- `function` (replacement)
  - : A function to be invoked to create the new substring to be used to replace the matches to the given `regexp` or `substr`. The arguments supplied to this function are described in the "[Specifying a function as a parameter](#指定一個函式為參數)" section below.

### 回傳值

A new string with some or all matches of a pattern replaced by a replacement.

## 描述

這個方法不會變更所呼叫的 {{jsxref("String")}}。它只會回傳新的字串。

To perform a global search and replace, include the `g` switch in the regular expression.

### 指定一個字串為參數

The replacement string can include the following special replacement patterns:

| Pattern  | Inserts                                                                                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`     | Inserts a "$".                                                                                                                                                         |
| `$&`     | Inserts the matched substring.                                                                                                                                         |
| `` $` `` | Inserts the portion of the string that precedes the matched substring.                                                                                                 |
| `$'`     | Inserts the portion of the string that follows the matched substring.                                                                                                  |
| `$n`     | Where `n` is a positive integer less than 100, inserts the *n*th parenthesized submatch string, provided the first argument was a {{jsxref("RegExp")}} object. |

### 指定一個函式為參數

You can specify a function as the second parameter. In this case, the function will be invoked after the match has been performed. The function's result (return value) will be used as the replacement string. (Note: the above-mentioned special replacement patterns do _not_ apply in this case.) Note that the function will be invoked multiple times for each full match to be replaced if the regular expression in the first parameter is global.

The arguments to the function are as follows:

| Possible name | Supplied value                                                                                                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `match`       | The matched substring. (Corresponds to `$&` above.)                                                                                                                                                                                                                 |
| `p1, p2, ...` | The *n*th parenthesized submatch string, provided the first argument to `replace()` was a {{jsxref("RegExp")}} object. (Corresponds to `$1`, `$2`, etc. above.) For example, if `/(\a+)(\b+)/`, was given, `p1` is the match for `\a+`, and `p2` for `\b+`. |
| `offset`      | The offset of the matched substring within the whole string being examined. (For example, if the whole string was `'abcd'`, and the matched substring was `'bc'`, then this argument will be 1.)                                                                    |
| `string`      | The whole string being examined.                                                                                                                                                                                                                                    |

(The exact number of arguments will depend on whether the first argument was a {{jsxref("RegExp")}} object and, if so, how many parenthesized submatches it specifies.)

The following example will set `newString` to `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
```

## 範例

### 於 `replace()` 中定義正則表示式

下例的正規表達式被定義為 `replace()`、並包含了忽略大小寫的 flag。

```js
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
```

上例會顯示「Twas the night before Christmas...」

### 使用 `global` 及 `ignore` 來配合 `replace()`

Global replace can only be done with a regular expression. In the following example, the regular expression includes the global and ignore case flags which permits `replace()` to replace each occurrence of 'apples' in the string with 'oranges'.

```js
var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.
```

上例會顯示「oranges are round, and oranges are juicy」。

### 替換字串中的單字

下例程式將切換字串內的單字。對 replacement text 而言，程式會使用 `$1` and `$2` 的 replacement pattern。

```js
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John
```

上例會顯示「Smith, John」。

### 使用行內函式來修改匹配的字元

In this example, all occurrences of capital letters in the string are converted to lower case, and a hyphen is inserted just before the match location. The important thing here is that additional operations are needed on the matched item before it is given back as a replacement.

The replacement function accepts the matched snippet as its parameter, and uses it to transform the case and concatenate the hyphen before returning.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Given `styleHyphenFormat('borderTop')`, this returns 'border-top'.

Because we want to further transform the _result_ of the match before the final substitution is made, we must use a function. This forces the evaluation of the match prior to the {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} method. If we had tried to do this using the match without a function, the {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} would have no effect.

```js
var newString = propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  // won't work
```

This is because `'$&'.toLowerCase()` would be evaluated first as a string literal (resulting in the same `'$&'`) before using the characters as a pattern.

### 將華氏溫度置換成攝氏溫度

The following example replaces a Fahrenheit degree with its equivalent Celsius degree. The Fahrenheit degree should be a number ending with F. The function returns the Celsius number ending with C. For example, if the input number is 212F, the function returns 100C. If the number is 0F, the function returns -17.77777777777778C.

The regular expression `test` checks for any number that ends with F. The number of Fahrenheit degree is accessible to the function through its second parameter, `p1`. The function sets the Celsius number based on the Fahrenheit degree passed in a string to the `f2c()` function. `f2c()` then returns the Celsius number. This function approximates Perl's `s///e` flag.

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5/9) + 'C';
  }
  var s = String(x);
  var test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### 利用行內函式及正則表示式來避免使用 `for` 迴圈

The following example takes a string pattern and converts it into an array of objects.

**Input:**

A string made out of the characters `x`, `-` and `_`

```plain
x-x_
x---x---x---x---

x-xxx-xx-x-
x_x_x___x___x___
```

**Output:**

An array of objects. An `'x'` denotes an `'on'` state, a `'-'` (hyphen) denotes an `'off'` state and an `'_'` (underscore) denotes the length of an `'on'` state.

```json
[
  { on: true, length: 1 },
  { on: false, length: 1 },
  { on: true, length: 2 }
  ...
]
```

**Snippet:**

```js
var str = 'x-x_';
var retArr = [];
str.replace(/(x_*)|(-)/g, function(match, p1, p2) {
  if (p1) { retArr.push({ on: true, length: p1.length }); }
  if (p2) { retArr.push({ on: false, length: 1 }); }
});

console.log(retArr);
```

This snippet generates an array of 3 objects in the desired format without using a `for` loop.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Firefox-specific notes

- Starting with Gecko 27, this method has been adjusted to conform with the ECMAScript specification. When `replace()` is called with a global regular expression, the {{jsxref("RegExp.lastIndex")}} property (if specified) will be reset to `0` ([Firefox bug 501739](https://bugzil.la/501739)).
- Starting with Gecko 39, the non-standard `flags` argument is deprecated and throws a console warning ([Firefox bug 1142351](https://bugzil.la/1142351)).
- Starting with Gecko 47, the non-standard `flags` argument is no longer supported in non-release builds and will soon be removed entirely ([Firefox bug 1245801](https://bugzil.la/1245801)).
- Starting with Gecko 49, the non-standard `flags` argument is no longer supported ([Firefox bug 1108382](https://bugzil.la/1108382)).

## 參見

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
