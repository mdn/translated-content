---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
---

{{JSRef}}

**`exec()`** 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## 语法

```js-nolint
exec(str)
```

### 参数

- `str`
  - : 要匹配正则表达式的字符串。

### 返回值

如果匹配失败，`exec()` 方法返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)，并将正则表达式的 [`lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 重置为 0。

如果匹配成功，`exec()` 方法返回一个数组，并更新正则表达式对象的 [`lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 属性。完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应一个匹配的捕获组。数组还具有以下额外的属性：

- `index`
  - : 匹配到的字符位于原始字符串的基于 0 的索引值。
- `input`
  - : 匹配的原始字符串。
- `groups`
  - : 一个命名捕获组对象，其键是名称，值是捕获组。若没有定义命名捕获组，则 `groups` 的值为 {{jsxref("undefined")}}。参阅[捕获组](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)以了解更多信息。
- `indices` {{optional_inline}}
  - : 此属性仅在设置了 [`d`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) 标志位时存在。它是一个数组，其中每一个元素表示一个子字符串的边界。每个子字符串匹配本身就是一个数组，其中第一个元素表示起始索引，第二个元素表示结束索引。

## 描述

在设置了 [`global`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) 或 [`sticky`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) 标志位的情况下（如 `/foo/g` 或 `/foo/y`），JavaScript {{jsxref("RegExp")}} 对象是*有状态*的。它们会将上次成功匹配后的位置记录在 {{jsxref("RegExp.lastIndex", "lastIndex")}} 属性中。使用此特性，`exec()` 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下， {{jsxref("String.prototype.match()")}} 只会返回匹配到的结果。

在使用 `exec()` 时，`global` 标志位不会在 `sticky` 标志位被设置时生效，而 `match()` 始终会设置 `sticky` 标志位。

`exec()` 是正则表达式的原始方法。许多其他的正则表达式方法会在内部调用 `exec()`——包括一些字符串方法也会调用 `exec()`，如 [`@@replace`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)。虽然 `exec()` 本身非常强大而又有效，但它通常不能最清楚地表示调用的目的。

- 如果你只是为了判断是否匹配，请使用 {{jsxref("RegExp.prototype.test()")}} 方法代替。
- 如果你只是为了找出所有匹配正则表达式的字符串而又不关心捕获组，请使用 {{jsxref("String.prototype.match()")}} 方法代替。此外，{{jsxref("String.prototype.matchAll()")}} 允许你对匹配项进行迭代，这有助于简化匹配字符串的多个部分（带有匹配组）。
- 如果你只是为了查找在字符串中匹配的索引，请使用 {{jsxref("String.prototype.search()")}} 方法代替。

## 示例

### 使用 exec()

考虑以下示例：

```js
// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

下表列出这个脚本的返回值（`result`）：

| 属性      | 值                                                                 |
| --------- | ------------------------------------------------------------------ |
| `[0]`     | `"Quick Brown Fox Jumps"`                                          |
| `[1]`     | `"Brown"`                                                          |
| `[2]`     | `"Jumps"`                                                          |
| `index`   | `4`                                                                |
| `indices` | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`   | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`  | `{ color: "brown" }`                                               |

另外，由于正则表达式是全局的（`global`），`re.lastIndex` 会被设置为 `25`。

### 查找所有匹配

当正则表达式设置 [`g`](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions#通过标志进行高级搜索) 标志位时，可以多次执行 `exec` 方法来查找同一个字符串中的成功匹配。当你这样做时，查找将从正则表达式的 {{jsxref("RegExp.lastIndex", "lastIndex")}} 属性指定的位置开始。（{{jsxref("RegExp.test", "test()")}} 也会更新 `lastIndex` 属性）。注意，即使再次查找的字符串不是原查找字符串时，{{jsxref("RegExp.lastIndex", "lastIndex")}} 也不会被重置，它依旧会从记录的 {{jsxref("RegExp.lastIndex", "lastIndex")}} 开始。

例如，你使用下面的脚本：

```js
const myRe = /ab*/g;
const str = "abbcdefabh";
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = `Found ${myArray[0]}. `;
  msg += `Next match starts at ${myRe.lastIndex}`;
  console.log(msg);
}
```

脚本运行结果如下：

```
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

> **警告：** 以下情况会导致匹配变成一个无限循环！
>
> - 不要把正则表达式字面量（或者 {{jsxref("RegExp")}} 构造函数）放在 `while` 条件表达式里。由于每次迭代时 {{jsxref("RegExp.lastIndex", "lastIndex")}} 的属性都被重置。
> - 请确保设置了[全局（`g`）标志位](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions#通过标志进行高级搜索)，否则 `lastIndex` 不会被更新。
> - 如果正则表达式可以匹配长度为零的字符（例如：`/^/gm`），请手动递增 {{jsxref("RegExp.lastIndex", "lastIndex")}}，以避免其始终卡在相同的位置。

你也可以将这类的代码替换为 {{jsxref("String.prototype.matchAll()")}} 以降低出错的可能性。

### 结合 `RegExp` 字面量使用 `exec()`

你也可以直接使用 `exec()` 而不是创建一个 {{jsxref("RegExp")}} 对象：

```js
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

运行上面的代码，控制台会输出 `'hello world!'` 字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)中的[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)章节
- {{jsxref("RegExp")}}
