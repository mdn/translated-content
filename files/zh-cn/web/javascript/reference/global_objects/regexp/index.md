---
title: RegExp(正则表达式)
slug: Web/JavaScript/Reference/Global_Objects/RegExp
---

{{JSRef}}

**`RegExp`** 对象用于将文本与一个模式匹配。

有关正则表达式的介绍，请阅读 [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide/)中的[正则表达式章节](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)。

## 描述

### 字面量和构造函数

有两种方法可以创建一个 `RegExp` 对象：一种是字面量，另一种是构造函数。

- 字面量
  - : 由斜杠 (/) 包围而不是引号包围。
- 构造函数的字符串参数
  - : 由引号而不是斜杠包围。

以下三种表达式都会创建相同的正则表达式：

```js
/ab+c/i; //字面量形式
new RegExp("ab+c", "i"); // 首个参数为字符串模式的构造函数
new RegExp(/ab+c/, "i"); // 首个参数为常规字面量的构造函数
```

当表达式被赋值时，字面量形式提供正则表达式的编译（compilation）状态，当正则表达式保持为常量时使用字面量。例如当你在循环中使用字面量构造一个正则表达式时，正则表达式不会在每一次迭代中都被重新编译（recompiled）。

而正则表达式对象的构造函数，如 `new RegExp('ab+c')` 提供了正则表达式运行时编译（runtime compilation）。如果你知道正则表达式模式将会改变，或者你事先不知道什么模式，而是从另一个来源获取，如用户输入，这些情况都可以使用构造函数。

### 构造函数中的标志参数 (flags)

从 ECMAScript 6 开始，当第一个参数为正则表达式而第二个标志参数存在时，`new RegExp(/ab+c/, 'i')` 不再抛出 {{jsxref("TypeError")}}（`"从另一个 RegExp 构造一个 RegExp 时无法提供标志"`）的异常，取而代之，将使用这些参数创建一个新的正则表达式。

当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 `\`）。

比如，以下是等价的：

```js
var re = new RegExp("\\w+");
var re = /\w+/;
```

### Perl-like RegExp 属性

请注意，{{jsxref("RegExp")}}属性有长名称和短名称（类似 Perl）。两个名称总是引用同一个值。（Perl 是 JavaScript 为其正则表达式建模的编程语言）。另请参见[不推荐使用的 RegExp 属性。](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#RegExp_Properties)

## 构造函数

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : 创建一个新的 `RegExp` 对象。

## 静态属性

- {{jsxref("RegExp.@@species", "get RegExp[@@species]")}}
  - : 该构造函数用于创建派生对象。
- {{jsxref("RegExp.lastIndex")}}
  - : 该索引表示从哪里开始下一个匹配

## 实例属性

- {{JSxRef("RegExp.prototype.flags")}}
  - : 含有 `RegExp` 对象 flags 的字符串。
- {{JSxRef("RegExp.prototype.dotAll")}}
  - : `.` 是否要匹配新行（newlines）。
- {{JSxRef("RegExp.prototype.global")}}
  - : 针对字符串中所有可能的匹配项测试正则表达式，还是仅针对第一个匹配项。
- {{JSxRef("RegExp.prototype.ignoreCase")}}
  - : 匹配文本的时候是否忽略大小写。
- {{JSxRef("RegExp.prototype.multiline")}}
  - : 是否进行多行搜索。
- {{JSxRef("RegExp.prototype.source")}}
  - : 正则表达式的文本。
- {{JSxRef("RegExp.prototype.sticky")}}
  - : 搜索是否是 sticky。
- {{JSxRef("RegExp.prototype.unicode")}}
  - : Unicode 功能是否开启。

## 实例方法

- {{JSxRef("RegExp.prototype.compile()")}}
  - : 运行脚本的期间（重新）编译正则表达式。
- {{JSxRef("RegExp.prototype.exec()")}}
  - : 在该字符串中执行匹配项的搜索。
- {{JSxRef("RegExp.prototype.test()")}}
  - : 该正则在字符串里是否有匹配。
- {{JSxRef("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
  - : 对给定字符串执行匹配并返回匹配结果。
- {{JSxRef("RegExp.prototype.@@matchAll()", "RegExp.prototype[@@matchAll]()")}}
  - : 对给定字符串执行匹配，返回所有匹配结果。
- {{JSxRef("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
  - : 给定新的子串，替换所有匹配结果。
- {{JSxRef("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
  - : 在给定字符串中搜索匹配项，并返回在字符串中找到字符索引。
- {{JSxRef("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
  - : 通过将给定字符串拆分为子字符串，并返回字符串形成的数组。
- {{JSxRef("RegExp.prototype.toString()")}}
  - : 返回表示指定对象的字符串。重写{{jsxref("Object.prototype.toString()")}}方法。

## 示例

### 使用正则改变数据结构

下例使用 {{jsxref("Global_Objects/String", "String")}} 的 {{jsxref("String.prototype.replace()", "replace()")}} 方法去匹配姓名 _first last_ 输出新的格式 _last_, _first_。

在替换的文本中，脚本中使用 `$1` 和 `$2` 指明括号里先前的匹配。

```js
let re = /(\w+)\s(\w+)/;
let str = "John Smith";
let newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

这将显示 "Smith, John".

### 使用正则来划分带有多种行结束符和换行符的文本

对于不同的平台（Unix，Windows 等等），其默认的行结束符是不一样的。而下面的划分方式适用于所有平台。

```plain
let text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'
let lines = text.split(/\r\n|\r|\n/)
console.log(lines) // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

注意：在正则表达式中，以竖线分割的子模式的顺序会影响匹配结果。

### 在多行文本中使用正则表达式

```js
let s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Returns null

s.match(/yes[^]*day/);
// Returns 'yes\nmake my day'
```

### 使用带有 sticky 标志的正则表达式

带有{{JSxRef("Global_Objects/RegExp/sticky", "sticky")}}标志的正则表达式将会从源字符串的{{jsxref("RegExp.prototype.lastIndex")}}位置开始匹配，也就是进行“粘性匹配”。

```js
let str = "#foo#";
let regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### sticky 标志和 global 标志的不同点

如果正则表达式有粘性 `y` 标志，下一次匹配一定在 `lastIndex` 位置开始；如果正则表达式有全局 `g` 标志，下一次匹配可能在 `lastIndex` 位置开始，也可能在这个位置的后面开始。

```js
re = /\d/y;
while ((r = re.exec("123 456")))
  console.log(r, "AND re.lastIndex", re.lastIndex);

// [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
//   ... and no more match.
```

如果使用带有全局标志`g`的正则表达式`re`，就会捕获字符串中的所有 6 个数字，而非 3 个

### 使用正则表达式和 Unicode 字符

正如上面表格提到的，`\w` 或 `\W` 只会匹配基本的 ASCII 字符；如 `a` 到 `z`、 `A` 到 `Z`、 `0` 到 `9` 及 `_`。

为了匹配其他语言中的字符，如西里尔（Cyrillic）或 希伯来语（Hebrew），要使用 `\uhhhh`，`hhhh` 表示以十六进制表示的字符的 Unicode 值。

下例展示了怎样从一个单词中分离出 Unicode 字符。

```js
let text = "Образец text на русском языке";
let regex = /[\u0400-\u04FF]+/g;

let match = regex.exec(text);
console.log(match[0]); // prints "Образец"
console.log(regex.lastIndex); // prints "7"

let match2 = regex.exec(text);
console.log(match2[0]); // prints "на" [did not print "text"]
console.log(regex.lastIndex); // prints "15"

// and so on
```

[Unicode 属性转义特性](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)引入了一种解决方案，它允许使用像\p{scx=Cyrl}这样简单的语句。这里有一个外部资源，用来获取 Unicode 中的不同区块范围：[Regexp-unicode-block](http://kourge.net/projects/regexp-unicode-block)

### 从 URL 中提取子域名

```js
var url = "http://xxx.domain.com";
console.log(/[^.]+/.exec(url)[0].substr(7)); // logs "xxx"
```

> **备注：** 使用浏览器内建的[URL API](/zh-CN/docs/Web/API/URL_API)而非正则表达式来解析 URL 是更好的做法

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)中的[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)一节
- [String.prototype.match()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [String.prototype.replace()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
