---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
---

{{JSRef}}

**`split()`** 方法使用指定的分隔符字符串将一个{{jsxref("String")}}对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

{{EmbedInteractiveExample("pages/js/string-split.html")}}

## 语法

```js
str.split([separator[, limit]])
```

> **警告：** 如果使用空字符串 (“) 作为分隔符，则字符串不是在每个用户感知的字符 (图形素集群) 之间，也不是在每个 Unicode 字符 (代码点) 之间，而是在每个 UTF-16 代码单元之间。这会摧毁代理对。还请参见[how do you get a string to a character array in javascript](https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript/34717402#34717402)

### 参数

- `separator`
  - : 指定表示每个拆分应发生的点的字符串。`separator` 可以是一个字符串或[正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)。如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在 str 中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将 str 原字符串中每个字符的数组形式返回。
- `limit`
  - : 一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。

### 返回值

返回源字符串以分隔符出现位置分隔而成的一个 {{jsxref("Array")}}

## 描述

找到分隔符后，将其从字符串中删除，并将子字符串的数组返回。如果没有找到或者省略了分隔符，则该数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将 str 转换为字符数组。如果分隔符出现在字符串的开始或结尾，或两者都分开，分别以空字符串开头，结尾或两者开始和结束。因此，如果字符串仅由一个分隔符实例组成，则该数组由两个空字符串组成。

如果分隔符是包含捕获括号的正则表达式，则每次分隔符匹配时，捕获括号的结果（包括任何未定义的结果）将被拼接到输出数组中。但是，并不是所有浏览器都支持此功能。

> **备注：** 当字符串为空时，split（）返回一个包含一个空字符串的数组，而不是一个空数组，如果字符串和分隔符都是空字符串，则返回一个空数组。

## 示例

### 使用 `split()`

下例定义了一个函数：根据指定的分隔符将一个字符串分割成一个字符串数组。分隔字符串后，该函数依次输出原始字符串信息，被使用的分隔符，返回数组元素的个数，以及返回数组中所有的元素。

```js
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log("The array has " + arrayOfStrings.length + " elements: ");

  for (var i=0; i < arrayOfStrings.length; i++)
    console.log(arrayOfStrings[i] + " / ");
}

var tempestString = "Oh brave new world that has such people in it.";
var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var space = " ";
var comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
```

上例输出下面结果：

```plain
The original string is: "Oh brave new world that has such people in it."
The separator is: " "
The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it. /

The original string is: "Oh brave new world that has such people in it."
The separator is: "undefined"
The array has 1 elements: Oh brave new world that has such people in it. /

The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
The separator is: ","
The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec /
```

### 移出字符串中的空格

下例中，`split()` 方法会查找“0 或多个空白符接着的分号，再接着 0 或多个空白符”模式的字符串，找到后，就将空白符从字符串中移除，`nameList` 是 `split` 的返回数组。

```js
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

var re = /\s*(?:;|$)\s*/;
var nameList = names.split(re);

console.log(nameList);
```

上例输出两行，第一行输出原始字符串，第二行输出结果数组。

```plain
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### 限制返回值中分割元素数量

下例中，`split` 查找字符串中的 0 或多个空格，并返回找到的前 3 个分割元素（splits）。

```js
var myString = "Hello World. How are you doing?";
var splits = myString.split(" ", 3);

console.log(splits);
```

上例输出：

```plain
["Hello", "World.", "How"]
```

### 靠正则来分割使结果中包含分隔块

如果 `separator` 包含捕获括号（capturing parentheses），则其匹配结果将会包含在返回的数组中。

```js
var myString = "Hello 1 word. Sentence number 2.";
var splits = myString.split(/(\d)/);

console.log(splits);
```

上例输出：

```plain
[ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

### 使用一个数组来作为分隔符

```plain
const myString = 'this|is|a|Test';
const splits = myString.split(['|']);

console.log(splits); //["this", "is", "a", "Test"]

const myString = 'ca,bc,a,bca,bca,bc';

const splits = myString.split(['a','b']);
// myString.split(['a','b']) is same as myString.split(String(['a','b']))

console.log(splits);  //["c", "c,", "c", "c", "c"]
```

### 用 split() 来颠倒字符串顺序

> **警告：** 注意这并非一种很健壮的逆转字符串的方法：
>
> ```js
> const str = 'asdfghjkl';
> const strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
> // split() returns an array on which reverse() and join() can be applied
> ```
>
> 如果字符串包含图形素集群，即使使用 Unicode 感知的拆分 (use for example [esrever](https://github.com/mathiasbynens/esrever) instead)，也不能工作。
>
> ```js
> const str = 'résumé';
> const strReverse = str.split(/(?:)/u).reverse().join('');
> // => "́emuśer"
> ```
>
> Bonus: use {{jsxref("Operators/Comparison_Operators", "===", "#Identity_strict_equality_(===)")}} operator to test if the original string was palindrome.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
