---
title: 词法文法
slug: Web/JavaScript/Reference/Lexical_grammar
---

{{JsSidebar("More")}}

这部分描述了 JavaScript 的词法（lexical grammar）。ECMAScript 源码文本会被从左到右扫描，并被转换为一系列的输入元素，包括 token、控制符、行终止符、注释和空白符。ECMAScript 定义了一些关键字、字面量以及行尾分号补全的规则。

## 格式控制符

格式控制符用于控制对源码文本的解释，但是并不会显示出来。

| 代码点   | 名称           | 缩写    | 说明                                                                                                                                       |
| -------- | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `U+200C` | 零宽度非结合子 | \<ZWNJ> | 放置在一些经常会被当成连字的字符之间，用于将它们分别以独立形式显示（[Wikipedia](http://en.wikipedia.org/wiki/Zero-width_non-joiner)）      |
| `U+200D` | 零宽度结合子   | \<ZWJ>  | 放置在一些通常不会被标记为连字的字符之间，用于将这些字符以连字形式显示（[Wikipedia](http://en.wikipedia.org/wiki/Zero-width_joiner)）      |
| `U+FEFF` | 字节流方向标识 | \<BOM>  | 在脚本开头使用，除了将脚本标记为 Unicode 格式以外，还用来标记文本的字节流方向（[Wikipedia](http://en.wikipedia.org/wiki/Byte_order_mark)） |

## 空白符

空白符提升了源码的可读性，并将标记 (tokens) 区分开。这些符号通常不影响源码的功能。通常可以用[压缩器](http://en.wikipedia.org/wiki/Minification_%28programming%29)来移除源码中的空白，减少数据传输量。

| 代码点 | 名称              | 缩写    | 说明                                                                                                        | 转义序列 |
| ------ | ----------------- | ------- | ----------------------------------------------------------------------------------------------------------- | -------- |
| U+0009 | 制表符            | \<HT>   | 水平制表符                                                                                                  | \t       |
| U+000B | 垂直制表符        | \<VT>   | 垂直制表符                                                                                                  | \v       |
| U+000C | 分页符            | \<FF>   | 分页符（[Wikipedia](http://en.wikipedia.org/wiki/Page_break#Form_feed)）                                    | \f       |
| U+0020 | 空格              | \<SP>   | 空格                                                                                                        |          |
| U+00A0 | 无间断空格        | \<NBSP> | 在该空格处不会换行                                                                                          |          |
| Others | 其他 Unicode 空白 | \<USP>  | [Wikipedia 上对 Unicode 空白的介绍](http://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode) |          |

## 行终止符

除了空白符之外，行终止符也可以提高源码的可读性。不同的是，行终止符可以影响 JavaScript 代码的执行。行终止符也会影响[自动分号补全](#Automatic_semicolon_insertion)的执行。在[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)中，行终止符会被 **\s** 匹配。

在 ECMAScript 中，只有下列 Unicode 字符会被当成行终止符，其他的行终止符（比如 Next Line、NEL、U+0085 等）都会被当成空白符。

| 编码   | 名称     | 缩写  | 说明                                              | 转义序列 |
| ------ | -------- | ----- | ------------------------------------------------- | -------- |
| U+000A | 换行符   | \<LF> | 在 UNIX 系统中起新行                              | \n       |
| U+000D | 回车符   | \<CR> | 在 Commodore 和早期的 Mac 系统中起新行            | \r       |
| U+2028 | 行分隔符 | \<LS> | [Wikipedia](http://en.wikipedia.org/wiki/Newline) |          |
| U+2029 | 段分隔符 | \<PS> | [Wikipedia](http://en.wikipedia.org/wiki/Newline) |          |

## 注释

注释用来在源码中增加提示、笔记、建议、警告等信息，可以帮助阅读和理解源码。在调试时，可以用来将一段代码屏蔽掉，防止其运行；这也是一个有价值的调试工具。

在 JavaScript 中，有两种常见的添加注释的方法：行注释和块注释。另外，也有一种特殊的 hashbang 注释语法。

### 行注释

第一种是 `//` 风格的注释；会将该行中符号以后的文本都视为注释：

```js
function comment() {
  // 这是单行注释
  console.log("Hello world!");
}
comment();
```

### 块注释

第二种是 `/* */` 风格的注释，这种方式更加灵活：

比如，可以在单行内使用多行注释：

```js
function comment() {
  /* 这是单行注释 */
  console.log("Hello world!");
}
comment();
```

也可以用来实现多行注释：

```js
function comment() {
  /* 这是多行注释，
     注意在写完注释前无需终止注释 */
  console.log("Hello world!");
}
comment();
```

多行注释也可以用于行内注释，但这样会使代码可读性变差，所以要谨慎使用：

```js
function comment(x) {
  console.log("Hello " + x /* 引入 x 的值 */ + " !");
}
comment("world");
```

另外，块注释也可以用来屏蔽一段代码，只要将这段代码用块注释包裹起来就可以了：

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

这种情况下，注释中的 `console.log()` 的调用始终无效。这种方式可以屏蔽任意多行的代码，也可以屏蔽一行代码的一部分。

包含至少一个行结束符的块状注释的行为与[自动分号插入](#自动插入分号)中的[行结束符](#行结束符)相似。

### Hashbang 注释

**Hashbang 注释**是一种特殊的注释语法，其行为与单行注释（`//`）完全一样，只是它以 `#!` 开头，并且**只在脚本或模块的最开始处有效**。注意，`#!` 标志之前不能有任何空白字符。注释由 `#!` 之后的所有字符组成直到第一行的末尾；只允许有一条这样的注释。JavaScript 中的 hashbang 注释类似于 [Unix 中的 shebang](https://zh.wikipedia.org/wiki/Shebang)，它提供了一个特定的 JavaScript 解释器的路径，你想用它来执行这个脚本。在 hashbang 注释标准化之前，它已经在非浏览器主机（如 Node.js）中得到了事实上的实现，在那里，它在被传递给引擎之前被从源文本中剥离。示例如下：

```js
#!/usr/bin/env node

console.log("Hello world");
```

JavaScript 的解释器会把它视为普通注释——只有当脚本直接在 shell 中运行时，它对 shell 才有语义意义。

> **警告：** 如果你想让脚本直接在 shell 环境中运行，请用不含 [BOM](https://en.wikipedia.org/wiki/Byte_order_mark) 的 UTF-8 编码。虽然 BOM 不会对在浏览器中运行的代码造成任何问题——在 UTF-8 解码过程中，分析源文本之前，BOM 就已经被剥离了——但如果前面有一个 BOM 字符，Unix/Linux shell 就不会识别该注释。

你只能使用 `#!` 注释样式以指定 JavaScript 解释器。在所有其他情况下，只需使用 `//` 注释（或多行注释）。

## 关键字

### ECMAScript 6 中的保留关键字

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/switch", "case")}}
- {{jsxref("Statements/try...catch", "catch")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/default", "default")}}
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Statements/do...while", "do")}}
- {{jsxref("Statements/if...else", "else")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/class", "extends")}}
- {{jsxref("Statements/try...catch", "finally")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/if...else", "if")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/this", "this")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Operators/yield", "yield")}}

### 未来保留关键字

在 ECMAScript 规格中，这些关键字被当成关键字保留。目前它们没有特殊功能，但是在未来某个时间可能会加上。所以这些关键字不能当成标识符使用。这些关键字在严格模式和非严格模式中均不能使用。

- `enum`

以下关键字只在严格模式中被当成保留关键字：

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

以下关键字只在模块代码中被当成保留关键字：

- `await`

#### 之前标准中的保留关键字

这里是之前版本中的 ECMAScript（1 到 3）中的保留关键字：

- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `transient`
- `volatile`

另外，字面量 `null`、`true` 和 `false` 同样不能被当成标识使用。

### 保留字的使用

事实上保留字是仅针对标识符（Identifier）的文法定义而言的（而不是标识符名（IdentifierName）的文法定义）。如 [es5.github.com/#A.1](http://es5.github.com/#A.1) 中所描述的，这些都是不排斥保留字的标识符名。

```js
a.import
a["import"]
a = { import: "test" }.
```

另一方面，如下用法是不允许的。因为它是一个标识符，而标识符的文法定义是除保留字以外的标识符名。标识符用于函数声明式和函数表达式。

```js
function import() {} // Illegal.
```

## 字面量

### 空字面量

更多信息可以参考 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

```js-nolint
null
```

### 布尔字面量

更多信息可以参考[`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

```js-nolint
true
false
```

### 数值字面量

#### 十进制

```js-nolint
1234567890
42
```

请注意，十进制数值字面量可以以 0 开头，但是如果 0 以后的最高位比 8 小，数值将会被认为是八进制而不会报错。更多信息可以参考 [Firefox bug 957513](https://bugzil.la/957513) 和 [`parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt#Octal_interpretations_with_no_radix)。

#### 二进制

二进制表示为开头是 0 后接大写或小写的 B（`0b`或者`0B`）。这是 ECMAScript 6 中的新语法，可以参考下面的浏览器兼容性表格。如果`0b`之后有除了 0 或 1 以外的数字，将会抛出[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)：“Missing binary digits after 0b”。

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### 八进制

八进制表示为开头是 0 后接大写或小写的 O（`0o`或`0O`）。这是 ECMAScript 6 中的新语法，可以参考下面的浏览器兼容性表格。如果有不在（01234567）中的数字，将会抛出[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)：“Missing octal digits after 0o”。

```js-nolint
0O755 // 493
0o644 // 420
```

#### 十六进制

十六进制表示为开头是 0 后接大写或小写的 X（`0x`或`0X`）。如果有不在（0123456789ABCDEF）中的数字，将会抛出[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)：“Identifier starts immediately after numeric literal”。

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### 数值分隔符

可以使用下划线（`_`，`U+005F`）作为分隔符以增强数值字面量的可读性：

```js-nolint
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xA0_B0_C0
1_000_000_000_000_000_000_000n
```

请注意这些限制：

```js example-bad
// 不允许连续出现多个下划线
100__000; // SyntaxError

// 不允许使用下划线作为数值字面量的结尾
100_; // SyntaxError

// 不允许在前导零之后使用下划线
0_1; // SyntaxError
```

### 对象字面量

更多信息可以参考 {{jsxref("Object")}} 和[对象初始化器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)。

```js
var o = { a: "foo", b: "bar", c: 42 };

// ES6 中的简略表示方法
var a = "foo",
  b = "bar",
  c = 42;
var o = { a, b, c };
// 不需要这样
var o = { a: a, b: b, c: c };
```

### 数组字面量

更多信息可以参考 {{jsxref("Array")}}。

```js
[1954, 1974, 1990, 2014];
```

### 字符串字面量

```js-nolint
'foo'
"bar"
```

#### 十六进制转义序列

```js
"\xA9"; // "©"
```

#### Unicode 转义序列

Unicode 转义序列要求在`\u`之后至少有四个字符。

```js
"\u00A9"; // "©"
```

#### Unicode 编码转义

ECMAScript 6 新增特性。使用 Unicode 编码转义，任何字符都可以被转义为十六进制编码。最高可以用到`0x10FFFF`。使用单纯的 Unicode 转义通常需要写成分开的两半以达到相同的效果。

可以参考{{jsxref("String.fromCodePoint()")}}和{{jsxref("String.prototype.codePointAt()")}}。

```js
"\u{2F804}";

// 使用单纯 Unicode 转义
"\uD87E\uDC04";
```

### 正则表达式字面量

更多信息可以参考 [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)。

```js
/ab+c/g

// 一个空的正则表达式字面量
// 必须有一个空的非捕获分组
// 以避免被当成是行注释符号
/(?:)/
```

### 模板字面量

更多信息可以参考[template strings](/zh-CN/docs/Web/JavaScript/Reference/template_strings)。

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## 自动分号补全

一些 [JavaScript 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements)必须用分号结束，所以会被自动分号补全 (ASI) 影响：

- 空语句
- `let`、`const`、变量声明
- `import`、`export`、模块定义
- 表达式语句
- `debugger`
- `continue`、`break`、`throw`
- `return`

ECMAScript 规格提到[自动分号补全的三个规则](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-rules-of-automatic-semicolon-insertion)。

1. 当出现一个不允许的[行终止符](#Line_terminators)或“}”时，会在其之前插入一个分号。

   ```js
   { 1 2 } 3

   // 将会被 ASI 转换为

   { 1 2 ;} 3;
   ```

2. 当捕获到标识符输入流的结尾，并且无法将单个输入流转换为一个完整的程序时，将在结尾插入一个分号。

   在下面这段中，由于在 `b` 和 `++` 之间出现了一个行终止符，所以 `++` 未被当成变量 `b` 的[后置运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment)。

   ```js-nolint
   a = b
   ++c

   // 将被 ASI 转换为

   a = b;
   ++c;
   ```

3. 当语句中包含语法中的限制产品后跟一个行终止符的时候，将会在结尾插入一个分号。带“这里没有行终止符”规则的语句有：

   - 后置运算符（`++` 和 `--`）
   - `continue`
   - `break`
   - `return`
   - `yield`、`yield*`
   - `module`

   ```js-nolint
   return
   a + b

   // 将被 ASI 转换为

   return;
   a + b;
   ```

## 浏览器兼容性

{{Compat}}

## 参见

- [Jeff Walden: Binary and octal numbers](http://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
- [Mathias Bynens: JavaScript character escape sequences](http://mathiasbynens.be/notes/javascript-escapes)
- {{jsxref("Boolean")}}
- {{jsxref("Number")}}
- {{jsxref("RegExp")}}
- {{jsxref("String")}}
