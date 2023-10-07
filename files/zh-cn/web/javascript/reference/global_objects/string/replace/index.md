---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
---

{{JSRef}}

**`replace()`** 方法返回一个新字符串，其中一个、多个或所有匹配的 `pattern` 被替换为 `replacement`。`pattern` 可以是字符串或 {{jsxref("RegExp")}}，`replacement` 可以是字符串或一个在每次匹配时调用的函数。如果 `pattern` 是字符串，则只会替换第一个匹配项。原始的字符串不会改变。

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## 语法

```js-nolint
replace(pattern, replacement)
```

### 参数

- `pattern`
  - : 可以是字符串或者一个带有 [`Symbol.replace`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) 方法的对象，典型的例子就是[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)。任何没有 `Symbol.replace` 方法的值都会被强制转换为字符串。
- `replacement`
  - : 可以是字符串或函数。
    - 如果是字符串，它将替换由 `pattern` 匹配的子字符串。支持一些特殊的替换模式，请参阅下面的[指定字符串作为替换项](#指定字符串作为替换项)部分。
    - 如果是函数，将为每个匹配调用该函数，并将其返回值用作替换文本。下面的[指定函数作为替换项](#指定函数作为替换项)部分描述了提供给此函数的参数。

### 返回值

一个新的字符串，其中一个、多个或所有的匹配项都被指定的替换项替换。

## 描述

该方法并不改变调用它的字符串本身，而是返回一个新的字符串。

字符串模式只会被替换一次。要执行全局搜索和替换，请使用带有 `g` 标志的正则表达式或使用 [`replaceAll()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)。

如果 `pattern` 是一个带有 [`Symbol.replace`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) 方法的对象（包括 `RegExp` 对象），则该方法将被调用，传入目标字符串和 `replacement` 作为参数。它的返回值成为 `replace()` 的返回值。在这种情况下，`replace()` 的行为完全由 `@@replace` 方法定义——例如，下面的说明中提到的任何"捕获组"都实际上是由 [`RegExp.prototype[@@replace]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) 提供的功能。

如果 `pattern` 是一个空字符串，则替换项将被插入到字符串的开头。

```js
"xxx".replace("", "_"); // "_xxx"
```

`replace()` 替换多次的唯一情况是传入带有 `g` 标志的正则表达式。有关正则表达式属性（特别是 [sticky](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) 标志）如何与 `replace()` 交互的更多信息，请参阅 [`RegExp.prototype[@@replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)。

### 指定字符串作为替换项

替换字符串可以包括以下特殊替换模式：

| 模式     | 插入值                                                              |
| -------- | ------------------------------------------------------------------- |
| `$$`     | 插入一个 `"$"`。                                                    |
| `$&`     | 插入匹配的子字符串。                                                |
| `` $` `` | 插入匹配子字符串之前的字符串片段。                                  |
| `$'`     | 插入匹配子字符串之后的字符串片段。                                  |
| `$n`     | 插入第 `n`（索引从 1 开始）个捕获组，其中 `n` 是小于 100 的正整数。 |
| `$`      | 插入名称为 `Name` 的命名捕获组。                                    |

只有当 `pattern` 参数是一个 {{jsxref("RegExp")}} 对象时，`$n` 和 `$<Name>` 才可用。如果 `pattern` 是字符串，或者相应的捕获组在正则表达式中不存在，则该模式将被替换为一个字面量。如果该组存在但未匹配（因为它是一个分支的一部分），则将用空字符串替换它。

```js
"foo".replace(/(f)/, "$2");
// "$2oo"；正则表达式没有第二个组

"foo".replace("f", "$1");
// "$1oo"；pattern 是一个字符串，所以它没有任何组

"foo".replace(/(f)|(g)/, "$2");
// "oo"；第二个组存在但未匹配
```

### 指定函数作为替换项

你可以将第二个参数指定为函数。在这种情况下，匹配完成后将调用该函数。函数的结果（返回值）将用作替换字符串。

> **备注：** 上述特殊替换模式*不*适用于替换器函数返回的字符串。

该函数具有以下签名：

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

该函数的参数如下所示：

- `match`
  - : 匹配的子字符串。（对应于上面的 `$&`。）
- `p1, p2, …, pN`
  - : 如果 `replace()` 的第一个参数是 {{jsxref("RegExp")}} 对象，则为捕获组（包括命名捕获组）找到的第 `n` 个字符串。（对应于上面的 `$1`、`$2` 等。）例如，如果 `pattern` 是 `/(\d+)(\w+)/`，则 `p1` 是 `\a+` 的匹配项，`p2` 是 `\b+` 的匹配项。如果该组是分支的一部分（例如 `"abc".replace(/(a)|(b)/, Replacer)`），则不匹配的替代项将为 `undefined`。
- `offset`
  - : 原始字符串中匹配子字符串的偏移量。例如，如果整个字符串是 `'abcd'`，而匹配的子字符串是 `'bc'`，那么这个参数将是 `1`。
- `string`
  - : 正在检查的原始字符串。
- `groups`
  - : 一个捕获组命名组成的对象，值是匹配的部分（如果没有匹配，则为 `undefined`）。仅在 `pattern` 包含至少一个命名捕获组时才存在。

参数的确切数量取决于第一个参数是否为 {{jsxref("RegExp")}} 对象，以及它有多少个捕获组。

以下示例将设置 `newString` 为 `'abc - 12345 - #$*%'`：

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 是非数字，p2 是数字，且 p3 非字母数字
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

如果第一个参数中的正则表达式是全局的，那么为了替换每个完全匹配的字符串，该函数将被多次调用。

## 示例

### 在 replace() 中定义正则表达式

在以下示例中，正则表达式在 `replace()` 中定义，并包括忽略大小写标志。

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

这将打印 `'Twas the night before Christmas...'`。

> **备注：** 有关正则表达式的更多解释，请参阅[正则表达式指南](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)。

### 在 replace() 中使用 global 和 ignoreCase 标志

只能使用正则表达式进行全局替换。在以下示例中，正则表达式包括 [global 和 ignoreCase 标志](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions#通过标志进行高级搜索)，允许 `replace()` 将字符串中每个出现的 `'apples'` 替换为 `'oranges'`。

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

这将打印 `'oranges are round, and oranges are juicy'`。

### 交换字符串中的两个单词

以下脚本交换字符串中的单词。对于替换文本，脚本使用[捕获组](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)以及 `$1` 和 `$2` 替换模式。

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

这将打印 `'Cruz, Maria'`。

### 使用內联函数来修改匹配到的字符。

在这个例子中，字符串中所有出现的大写字母都被转换为小写，并且在匹配位置前插入一个连字符。重要的是，在将匹配项作为替换返回之前，需要对匹配项进行额外的操作。

在返回前，替换函数接受匹配的片段作为参数，并使用它来转换大小写并拼接连字符。

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

运行 `styleHyphenFormat('borderTop')`，将返回 `'border-top'`。

由于我们希望在最终替换之前进一步转变匹配*结果*，所以我们必须使用一个函数。这会强制在使用 {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} 方法之前对匹配进行求值。如果我们尝试在没有函数的情况下使用匹配来完成这个操作，{{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} 方法将没有效果。

```js example-bad
// 不会产生作用
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

这是因为 `'$&'.toLowerCase()` 会首先作为一个字符串字面量进行求值（结果仍然是 `'$&'`），然后再将其作为匹配模式使用。

### 将华氏温度转换为相应的摄氏温度

下面的例子演示如何将华氏温度转换为相应的摄氏温度。华氏温度用一个数字加一个 `"F"` 来表示，这个函数将返回一个数字加 `"C"` 来表示的摄氏温度。例如，如果输入是 `"212F"`，这个函数将返回 `"100C"`。如果输入的数字是 `"0F"`，这个方法将返回 `"-17.77777777777778C"`。

正则表达式 `test` 用于检查以 `F` 结尾的任何数字。华氏度的数值通过函数的第二个参数 `p1` 传入函数。该函数根据传递给 `f2c()` 函数的字符串中的华氏度数值设置摄氏度数值，然后 `f2c()` 函数返回摄氏度数值。该函数实现了类似 Perl 的 `s///e` 标志的功能。

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return `${((p1 - 32) * 5) / 9}C`;
  }
  const s = String(x);
  const test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### 创建一个通用的替换器

假设我们想创建一个替换器，将偏移数据附加到每个匹配的字符串中。因为替换函数已经接收到 `offset` 参数，如果正则表达式是静态已知的，那么这将变得很简单。

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

然而，如果我们希望这个替换器能够适用于任何正则表达式模式，那么它将很难泛化。替换器是*可变*参数的，它接收的参数数量取决于存在的捕获组数量。我们可以使用[剩余参数参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)，但它也会将 `offset`、`string` 等收集到数组中。根据正则表达式的特性，`groups` 可能会被传递或者不会被传递，这也使得很难泛化地知道哪个参数对应于 `offset`。

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

在上面的 `addOffset` 示例中，当正则表达式包含一个命名组时，它无法正常工作，因为在这种情况下 `args.at(-2)` 是 `string` 而不是 `offset`。

相反，你需要根据类型提取最后几个参数，因为 `groups` 是一个对象，而 `string` 是一个字符串。

```js
function addOffset(match, ...args) {
  const hasNamedGroups = typeof args.at(-1) === "object";
  const offset = hasNamedGroups ? args.at(-3) : args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (1) d"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.replace` 的 Polyfill，修复了一些问题，并实现了现代行为，比如 `Symbol.replace` 的支持](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replaceAll", "String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
- [`Symbol.replace`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[@@replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
