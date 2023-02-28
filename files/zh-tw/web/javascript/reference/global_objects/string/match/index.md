---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
---

{{JSRef}}

The **`match()`** method retrieves the matches when matching a _string_ against a _regular expression_.

## Syntax

```plain
str.match(regexp)
```

### Parameters

- `regexp`
  - : 一個正規表達式的物件。 若傳入一個非正規表達式的物件`obj`，則會視為傳入 `new RegExp(obj)`。若只呼叫`match()`而沒有傳入任何參數，則會回傳內含一個空字串的陣列，即`[""]`。

### Return value

If the string matches the expression, it will return an {{jsxref("Array")}} containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, {{jsxref("null")}} is returned.

## Description

If the regular expression does not include the `g` flag, `str.match()` will return the same result as {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}. The returned {{jsxref("Array")}} has an extra `input` property, which contains the original string that was parsed. In addition, it has an `index` property, which represents the zero-based index of the match in the string.

If the regular expression includes the `g` flag, the method returns an {{jsxref("Array")}} containing all matched substrings rather than match objects. Captured groups are not returned. If there were no matches, the method returns {{jsxref("null")}}.

### See also: `RegExp` methods

- If you need to know if a string matches a regular expression {{jsxref("RegExp")}}, use {{jsxref("RegExp.prototype.test()", "RegExp.test()")}}.
- If you only want the first match found, you might want to use {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} instead.
- if you want to obtain capture groups and the global flag is set, you need to use {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} instead.

## Examples

### Using `match()`

In the following example, `match()` is used to find `'Chapter'` followed by 1 or more numeric characters followed by a decimal point and numeric character 0 or more times. The regular expression includes the `i` flag so that upper/lower case differences will be ignored.

```js
var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.
```

### Using global and ignore case flags with `match()`

The following example demonstrates the use of the global and ignore case flags with `match()`. All letters A through E and a through e are returned, each its own element in the array.

```js
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

### Using `match()` with no parameter

```js
var str = "Nothing will come of nothing.";

str.match();   // returns [""]
```

### A non-RegExp object as the parameter

When the parameter is a string or a number, it is implicitly converted to a {{jsxref("RegExp")}} by using new RegExp(obj). If it is a positive number with a positive sign,the RegExp() method will ignore the positive sign.

```js
var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number");   // "number" is a string. returns ["number"]
str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity);  // returns ["Infinity"]
str1.match(-Infinity);  // returns ["-Infinity"]
str2.match(65);         // returns ["65"]
str2.match(+65);        // A number with a positive sign. returns ["65"]
str3.match(null);       // returns ["null"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Firefox-specific notes

- `flags` was a non standard second argument only available in Gecko : _str_.match(_regexp, flags_)
- Starting with Gecko 27, this method has been adjusted to conform with the ECMAScript specification. When `match()` is called with a global regular expression, the {{jsxref("RegExp.lastIndex")}} property (if specified) will be reset to `0` ([Firefox bug 501739](https://bugzil.la/501739)).
- Starting with Gecko 39, the non-standard `flags` argument is deprecated and throws a console warning ([Firefox bug 1142351](https://bugzil.la/1142351)).
- Starting with Gecko 47, the non-standard `flags` argument is no longer supported in non-release builds and will soon be removed entirely ([Firefox bug 1245801](https://bugzil.la/1245801)).
- Starting with Gecko 49, the non-standard `flags` argument is no longer supported ([Firefox bug 1108382](https://bugzil.la/1108382)).

## See also

- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
