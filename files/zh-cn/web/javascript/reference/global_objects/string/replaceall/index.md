---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
---

{{JSRef}}

**`replaceAll()`** 方法返回一个新字符串，新字符串所有满足 `pattern` 的部分都已被`replacement` 替换。`pattern`可以是一个字符串或一个 {{jsxref("RegExp")}}， `replacement`可以是一个字符串或一个在每次匹配被调用的函数。

原始字符串保持不变。

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

## 语法

```plain
const newStr = str.replaceAll(regexp|substr, newSubstr|function)
```

> **备注：** 当使用一个 `regex` 时，您必须设置全局（“g”）标志，
> 否则，它将引发 `TypeError`：“必须使用全局 RegExp 调用 replaceAll”。

### 参数

- `regexp` (pattern)
  - : A {{jsxref("RegExp")}} object or literal with the global flag. The matches are replaced with `newSubstr` or the value returned by the specified `function`. A RegExp without the global ("g") flag will throw a `TypeError`: "replaceAll must be called with a global RegExp".
- `substr`
  - : A {{jsxref("String")}} that is to be replaced by `newSubstr`. It is treated as a literal string and is _not_ interpreted as a regular expression.
- `newSubstr` (replacement)
  - : The {{jsxref("String")}} that replaces the substring specified by the specified `regexp` or `substr` parameter. A number of special replacement patterns are supported; see the "[Specifying a string as a parameter](#Specifying_a_string_as_a_parameter)" section below.
- `function` (replacement)
  - : A function to be invoked to create the new substring to be used to replace the matches to the given `regexp` or `substr`. The arguments supplied to this function are described in the "[Specifying a function as a parameter](#Specifying_a_function_as_a_parameter)" section below.

### 返回值

A new string, with all matches of a pattern replaced by a replacement.

## 描述

此方法不会更改调用 {{jsxref("String")}} 对象。它只是返回一个新字符串。

### 将一个字符串作为一个参数

The replacement string can include the following special replacement patterns:

| Pattern  | Inserts                                                                                                                                                                                               |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`     | Inserts a `"$"`.                                                                                                                                                                                      |
| `$&`     | Inserts the matched substring.                                                                                                                                                                        |
| `` $` `` | Inserts the portion of the string that precedes the matched substring.                                                                                                                                |
| `$'`     | Inserts the portion of the string that follows the matched substring.                                                                                                                                 |
| `$n`     | Where `n` is a positive integer less than 100, inserts the `n`th parenthesized submatch string, provided the first argument was a {{jsxref("RegExp")}} object. Note that this is `1`-indexed. |

### 将一个函数指定为一个参数

你可以指定一个函数作为第二个参数，在这种情况下，函数只有在匹配发生之后才会被调用。The function's result (return value) will be used as the replacement string. (**Note:** The above-mentioned special replacement patterns do _not_ apply in this case.)

Note that the function will be invoked multiple times for each full match to be replaced if the regular expression in the first parameter is global.

The arguments to the function are as follows:

| Possible name | Supplied value                                                                                                                                                                                                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `match`       | The matched substring. (Corresponds to `$&` above.)                                                                                                                                                                                                                                 |
| `p1, p2, ...` | The *n*th string found by a parenthesized capture group, provided the first argument to `replace()` was a {{jsxref("RegExp")}} object. (Corresponds to `$1`, `$2`, etc. above.) For example, if `/(\a+)(\b+)/`, was given, `p1` is the match for `\a+`, and `p2` for `\b+`. |
| `offset`      | The offset of the matched substring within the whole string being examined. (For example, if the whole string was `'abcd'`, and the matched substring was `'bc'`, then this argument will be `1`.)                                                                                  |
| `string`      | The whole string being examined.                                                                                                                                                                                                                                                    |

(The exact number of arguments depends on whether the first argument is a {{jsxref("RegExp")}} object—and, if so, how many parenthesized submatches it specifies.)

## 示例

### 使用 replaceAll

```js
'aabbcc'.replaceAll('b', '.');
// 'aa..cc'
```

### 非全局 regex 抛出

使用正则表达式搜索值时，它必须是全局的。这将行不通：

```js example-bad
'aabbcc'.replaceAll(/b/, '.');
TypeError: replaceAll must be called with a global RegExp
```

这将可以正常运行：

```js example-good
'aabbcc'.replaceAll(/b/g, '.');
"aa..cc"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 了解更多

- {{jsxref("String.prototype.replace", "String.prototype.replace()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
