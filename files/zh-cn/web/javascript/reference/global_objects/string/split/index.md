---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
---

{{JSRef}}

**`split()`** 方法接受一个模式，通过搜索模式将{{jsxref("String", "字符串", "", 1)}}分割成一个有序的子串列表，将这些子串放入一个数组，并返回该数组。

{{InteractiveExample("taller")}}

```js interactive-example
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

```

## 语法

```js-nolint
split(separator)
split(separator, limit)
```

### 参数

- `separator`
  - : 描述每个分割应该发生在哪里的模式。可以是 `undefined`，一个字符串，或者一个具有 [`Symbol.split`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) 方法的对象——典型的例子是{{jsxref("Global_Objects/RegExp", "正则表达式", "", 1)}}。省略 `separator` 或传递 `undefined` 会导致 `split()` 返回一个只包含所调用字符串数组。所有不是 `undefined` 的值或不具有 `[Symbol.split]()` 方法的对象都被[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)。
- `limit` {{optional_inline}}
  - : 一个非负整数，指定数组中包含的子字符串的数量限制。当提供此参数时，split 方法会在指定 `separator` 每次出现时分割该字符串，但在已经有 `limit` 个元素时停止分割。任何剩余的文本都不会包含在数组中。
    - 如果在达到极限之前就达到了字符串的末端，那么数组包含的条目可能少于 `limit`。
    - 如果 `limit` 为 `0`，则返回 `[]`。

### 返回值

在给定字符串中出现 `separator` 的每一个点上进行分割而成的字符串{{jsxref("Array", "数组", "", 1)}}。

## 描述

如果 `separator` 是一个非空字符串，目标字符串会被所有匹配的 `separator` 分割，结果中不包括 `separator`。例如，一个包含制表符分隔值（TSV）的字符串可以通过传递一个制表符作为分隔符来解析，如 `myString.split("\t")`。如果 `separator` 包含多个字符，必须找到整个字符序列才能分割。如果 `separator` 出现在字符串的开头（或结尾），它仍然具有分割的效果，会导致一个空（即零长度）的字符串出现在返回数组的第一个（或最后一个）位置。如果 `separator` 没有出现在 `str` 中，返回的数组包含一个元素，其中是整个字符串。

如果 `separator` 是一个空字符串（`""`），`str` 被转换为一个由其 UTF-16 字符组成的数组，形成的字符串的两端没有空字符。

> **备注：** `"".split("")` 是唯一一种字符串作为 `separator` 参数传入的生成空数组的方法。

> [!WARNING]
> 当空字符串（`""`）被用作分隔符时，字符串**不是**由*用户感知的字符*（[grapheme cluster](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)）或 unicode 字符（码位）分割，而是由 UTF-16 代码单位分割。这破坏了[代理对](https://unicode.org/faq/utf_bom.html#utf16-2)。请参阅 [StackOverflow 上的“How do you get a string to a character array in JavaScript?”](https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402)。

如果 `separator` 是一个匹配空字符串的正则表达式，匹配是由 UTF-16 码元（code unit）还是 Unicode 码位（code point）分割，取决于是否设置了 [`u`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) 标志。

```js
"😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
"😄😄".split(/(?:)/u); // [ "😄", "😄" ]
```

如果 `separator` 是包含捕获括号的正则表达式，则每次 `separator` 匹配时，捕获括号的结果（包括任何 `undefined` 的结果）将被拼接到输出数组中。此行为是由正则表达式对象的 [`Symbol.split`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) 方法指定的。

如果 `separator` 是一个具有 [`Symbol.split`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) 方法的对象，该方法被调用，目标字符串和 `limit` 作为参数， `this` 设置为该对象。它的返回值成为 `split` 的返回值。

任何其他值在作为分隔符（separator）使用之前都将被强制转换为字符串。

## 示例

### 使用 split()

当字符串为空并且指定了一个非空的分隔符，`split()` 返回 `[""]`。如果字符串和分隔符都是空字符串，将返回一个空数组。

```js
const emptyString = "";

// 字符串是空的，分隔符是非空的
console.log(emptyString.split("a"));
// [""]

// 字符串和分隔符都是空的
console.log(emptyString.split(emptyString));
// []
```

下面的示例定义了一个函数，使用 `separator` 将一个字符串分割成一个字符串数组。在分割字符串后，该函数记录信息，指出原始字符串（分割前）、使用的分隔符、数组中的元素数，以及各个数组元素。

```js
function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);

  console.log("原始字符串为：", stringToSplit);
  console.log("分隔符为：", separator);
  console.log(
    "分隔后的数组有",
    arrayOfStrings.length,
    "个元素：",
    arrayOfStrings.join(" / "),
  );
}

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
```

上述示例会产生如下输出：

```plain
原始字符串为："Oh brave new world that has such people in it."
分隔符为：" "
分隔后的数组有 10 个元素：Oh / brave / new / world / that / has / such / people / in / it. /

原始字符串为："Oh brave new world that has such people in it."
分隔符为："undefined"
分隔后的数组有 1 个元素：Oh brave new world that has such people in it. /

原始字符串为："Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
分隔符为：","
分隔后的数组有 12 个元素：Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec /
```

### 移除字符串中的空格

下例中，`split()` 方法会查找“0 或多个空白字符接着分号，再接着 0 或多个空白字符”模式的字符串，找到后，就将空白符和分号从字符串中移除，`nameList` 是 `split` 的返回数组。

```js
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);
```

上例输出两行，第一行输出原始字符串，第二行输出结果数组。

```plain
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### 限制返回值中分割元素数量

下例中，`split` 查找字符串中的 0 或多个空格，并返回找到的前 3 个分割元素。

```js
const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits);
```

上例输出：

```plain
["Hello", "World.", "How"]
```

### 使用 `RegExp` 来分割使结果中包含分割符

如果 `separator` 包含捕获括号 `( )`，则其匹配结果将会包含在返回的数组中。

```js
const myString = "Hello 1 word. Sentence number 2.";
const splits = myString.split(/(\d)/);

console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> **备注：** `\d` 匹配从 0 到 9 的数字[字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)。

### 使用自定义分割器

一个包含 `Symbol.split` 方法的对象可以用作分割器，可以自定义分割行为。

下面的示例使用一个由递增的数字组成的内部状态来分割一个字符串：

```js
const splitByNumber = {
  [Symbol.split](str) {
    let num = 1;
    let pos = 0;
    const result = [];
    while (pos < str.length) {
      const matchPos = str.indexOf(num, pos);
      if (matchPos === -1) {
        result.push(str.substring(pos));
        break;
      }
      result.push(str.substring(pos, matchPos));
      pos = matchPos + String(num).length;
      num++;
    }
    return result;
  },
};

const myString = "a1bc2c5d3e4f";
console.log(myString.split(splitByNumber)); // [ "a", "bc", "c5d", "e", "f" ]
```

下面的示例使用一个内部状态来强制执行某些行为，并确保产生一个“有效”的结果。

```js
const DELIMITER = ";";

// 分割命令，移除任何不合法或不需要的值
const splitCommands = {
  [Symbol.split](str, lim) {
    const results = [];
    const state = {
      on: false,
      brightness: {
        current: 2,
        min: 1,
        max: 3,
      },
    };
    let pos = 0;
    let matchPos = str.indexOf(DELIMITER, pos);

    while (matchPos !== -1) {
      const subString = str.slice(pos, matchPos).trim();

      switch (subString) {
        case "light on":
          // 如果 `on` 状态已经为 true，什么都不做。
          if (!state.on) {
            state.on = true;
            results.push(subString);
          }
          break;

        case "light off":
          // 如果 `on` 状态已经为 false，什么都不做。
          if (state.on) {
            state.on = false;
            results.push(subString);
          }
          break;

        case "brightness up":
          // 亮度有一个最大值检查
          if (state.brightness.current < state.brightness.max) {
            state.brightness.current += 1;
            results.push(subString);
          }
          break;

        case "brightness down":
          // 亮度有一个最小值检查
          if (state.brightness.current > state.brightness.min) {
            state.brightness.current -= 1;
            results.push(subString);
          }
          break;
      }

      if (results.length === lim) {
        break;
      }

      pos = matchPos + DELIMITER.length;
      matchPos = str.indexOf(DELIMITER, pos);
    }

    // 如果到达分割极限 `lim`，不要添加剩下的命令
    if (results.length < lim) {
      results.push(str.slice(pos).trim());
    }
    return results;
  },
};

const commands =
  "light on; brightness up; brightness up; brightness up; light on; brightness down; brightness down; light off";
console.log(commands.split(splitCommands, 3)); // ["light on", "brightness up", "brightness down"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`cors-js` 中 `String.prototype.split` 的 polyfill 及对 `Symbol.split` 现代行为的支持进行修复和实现](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
- [在 JavaScript 中使用正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)
