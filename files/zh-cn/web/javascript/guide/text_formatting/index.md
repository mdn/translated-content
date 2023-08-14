---
title: 文本格式化
slug: Web/JavaScript/Guide/Text_formatting
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_expressions")}}

本章介绍在 Javascript 中如何使用字符串与文本内容。

## 字符串

JavaScript 中的 {{Glossary("String")}} 类型用于表示文本型的数据。它是由无符号整数值（16bit）作为元素而组成的集合。字符串中的每个元素在字符串中占据一个位置。第一个元素的 index 值是 0，下一个元素的 index 值是 1，以此类推。字符串的长度就是字符串中所含的元素个数。你可以通过 String 字面值或者 String 对象两种方式创建一个字符串。

### String 字面量

可以使用单引号或双引号创建简单的字符串：

```js
"foo";
"bar";
```

可以使用转义序列来创建更复杂的字符串：

#### 16 进制转义序列

\x 之后的数值将被认为是一个 16 进制数。

```js
"\xA9"; // "©"
```

#### Unicode 转义序列

Unicode 转义序列在\u 之后需要至少 4 个字符。

```js
"\u00A9"; // "©"
```

#### Unicode 字元逸出

这是 ECMAScript 6 中的新特性。有了 Unicode 字元逸出，任何字符都可以用 16 进制数转义，这使得通过 Unicode 转义表示大于`0x10FFFF`的字符成为可能。使用简单的 Unicode 转义时通常需要分别写字符相应的两个部分（译注：大于 0x10FFFF 的字符需要拆分为相应的两个小于 0x10FFFF 的部分）来达到同样的效果。

请参阅 {{jsxref("String.fromCodePoint()")}} 或 {{jsxref("String.prototype.codePointAt()")}}。

```js
"\u{2F804}";

// the same with simple Unicode escapes
"\uD87E\uDC04";
```

### 字符串对象

{{jsxref("String")}} 对象是对原始 string 类型的封装 .

```js
const foo = new String("foo"); // 创建一个 String 对象
console.log(foo); // 输出：[String: 'foo']
typeof foo; // 返回 'object'
```

你可以在 String 字面值上使用 String 对象的任何方法—JavaScript 自动把 String 字面值转换为一个临时的 String 对象，然后调用其相应方法，最后丢弃此临时对象。在 String 字面值上也可以使用 String.length 属性。

除非必要，应该尽量使用 String 字面值，因为 String 对象的某些行为可能并不与直觉一致。举例：

```js
const firstString = "2 + 2"; //创建一个字符串字面量
const secondString = new String("2 + 2"); // 创建一个字符串对象
eval(firstString); // 返回数字 4
eval(secondString); // 返回包含 "2 + 2" 的字符串对象
```

`String` 对象有一个属性 `length`，标识了字符串中 UTF-16 的码点个数。举例，下面的代码把 13 赋值给了`helloLength`，因为 "Hello, World!" 包含 13 个字符，每个字符用一个 UTF-16 码点表示。你可以通过数组的方式访问每一个码点，但你不能修改每个字符，因为字符串是不变的类数组对象：

```js
const hello = "Hello, World!";
const helloLength = hello.length;
hello[0] = "L"; // 无效，因为字符串是不变的
hello[0]; // 返回 "H"
```

Unicode 标量值（Unicode scalar value）大于 U+FFFF 的字符（比如中文、日文、韩文、越南语中的一些不常用的文字或者 emoji 表情）使用 2 个代理码点存储在 UTF-16 中。比如，一个包含 U+20BB7“𠮷”字符的字符串，其长度为 2。使用括号访问单个码点的时候，可能不会得到你所期望的结果，你得到的可能是一个不匹配字符串位置的代理码点，并且其违反了 Unicode 规范。请参阅 {{jsxref("String.fromCodePoint()")}} 或 {{jsxref("String.prototype.codePointAt()")}}。

`String`对象有许多方法：举例来说有些方法返回字符串本身的变体，如 `substring` 和`toUpperCase`.

下表总结了 {{jsxref("String")}} 对象的方法。

| 方法                                                                                                                                  | 描述                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| {{jsxref("String.charAt", "charAt")}}, {{jsxref("String.charCodeAt", "charCodeAt")}}, {{jsxref("String.codePointAt", "codePointAt")}} | 返回字符串指定位置的字符或者字符编码。                                        |
| {{jsxref("String.indexOf", "indexOf")}}, {{jsxref("String.lastIndexOf", "lastIndexOf")}}                                              | 分别返回字符串中指定子串的位置或最后位置。                                    |
| {{jsxref("String.startsWith", "startsWith")}}, {{jsxref("String.endsWith", "endsWith")}}, {{jsxref("String.includes", "includes")}}   | 返回字符串是否以指定字符串开始、结束或包含指定字符串。                        |
| {{jsxref("String.concat", "concat")}}                                                                                                 | 连接两个字符串并返回新的字符串。                                              |
| {{jsxref("String.fromCharCode", "fromCharCode")}}, {{jsxref("String.fromCodePoint", "fromCodePoint")}}                                | 从指定的 Unicode 值序列构造一个字符串。这是一个 String 类方法，不是实例方法。 |
| {{jsxref("String.split", "split")}}                                                                                                   | 通过将字符串分离成一个个子串来把一个 String 对象分裂到一个字符串数组中。      |
| {{jsxref("String.slice", "slice")}}                                                                                                   | 从一个字符串提取片段并作为新字符串返回。                                      |
| {{jsxref("String.substring", "substring")}}, {{jsxref("String.substr", "substr")}}                                                    | 分别通过指定起始和结束位置，起始位置和长度来返回字符串的指定子集。            |
| {{jsxref("String.match", "match")}}, {{jsxref("String.replace", "replace")}}, {{jsxref("String.search", "search")}}                   | 通过正则表达式来工作。                                                        |
| {{jsxref("String.toLowerCase", "toLowerCase")}}, {{jsxref("String.toUpperCase", "toUpperCase")}}                                      | 分别返回字符串的小写表示和大写表示。                                          |
| {{jsxref("String.normalize", "normalize")}}                                                                                           | 按照指定的一种 Unicode 正规形式将当前字符串正规化。                           |
| {{jsxref("String.repeat", "repeat")}}                                                                                                 | 将字符串内容重复指定次数后返回。                                              |
| {{jsxref("String.trim", "trim")}}                                                                                                     | 去掉字符串开头和结尾的空白字符。                                              |

### 多行模板字符串

模板字符串是一种允许内嵌表达式的 String 字面值。可以用它实现多行字符串或者字符串内插等特性。

模板字符串使用反勾号 (\` \`) ([grave accent](https://en.wikipedia.org/wiki/Grave_accent)) 包裹内容而不是单引号或双引号。模板字符串可以包含占位符。占位符用美元符号和花括号标识 (`${expression}`).

#### 多行

源代码中插入的任何新行开始字符都作为模板字符串的内容。使用一般的字符串时，为了创建多行的字符串不得不用如下语法：

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

为了实现同样效果的多行字符串，现在可以写成如下形式：

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

#### 嵌入表达式

为了在一般的字符串中嵌入表达式，需要使用如下语法：

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

现在，使用模板字符串，可以使用语法糖让类似功能的实现代码更具可读性：

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

更多信息，请阅读 [JavaScript reference](/zh-CN/docs/Web/JavaScript/Reference) 中的 [Template literals](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)。

## 国际化

{{jsxref("Intl")}} 对象是 ECMAScript 国际化 API 的命名空间，它提供了语言敏感的字符串比较，数字格式化和日期时间格式化功能。{{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, 和 {{jsxref("DateTimeFormat")}} 对象的构造函数是`Intl`对象的属性。

### 日期和时间格式化

{{jsxref("DateTimeFormat")}} 对象在日期和时间的格式化方面很有用。下面的代码把一个日期格式化为美式英语格式。(不同时区结果不同.)

```js
// July 17, 2014 00:00:00 UTC:
const july172014 = new Date("2014-07-17");

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

// 本地时区会根据你的设置而有所不同。
// 在 CEST（中欧夏令时）中，输出：07/17/14, 02:00 AM GMT+2。
// 在 PDT（太平洋夏令时）中，输出：07/16/14, 05:00 PM GMT-7。
console.log(americanDateTime(july172014));
```

### 数字格式化

{{jsxref("NumberFormat")}} 对象在数字的格式化方面很有用，比如货币数量值。

```js
var gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259)); // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一，三一四。二五
```

### 定序

{{jsxref("Collator")}} 对象在字符串比较和排序方面很有用。

举例，德语中*有两种不同的排序方式 电话本（phonebook）* 和 字典（_dictionary）_. 电话本排序强调发音，比如在排序前“ä”, “ö”等被扩展为“ae”, “oe”等发音。

```js
var names = ["Hochberg", "Hönigswald", "Holzman"];

var germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// logs "Hochberg, Hönigswald, Holzman"
```

有些德语词包含变音，所以在字典中忽略变音进行排序是合理的 (除非待排序的单词只有变音部分不同：_schon_ 先于 _schön_).

```js
var germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// logs "Hochberg, Holzman, Hönigswald"
```

关于{{jsxref("Intl")}} API 的更多信息，请参考 [Introducing the JavaScript Internationalization API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/)。

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_expressions")}}
