---
title: 数值和字符串
slug: Web/JavaScript/Guide/Numbers_and_strings
l10n:
  sourceCommit: 82617295992be4d9dc4ca74499ee63f8d2e5984b
---

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

本章将介绍 JavaScript 中最基础的两种数据类型：数值和字符串。我们将介绍它们的底层表示形式，以及用于处理和计算它们的函数。

## 数值

在 JavaScript 中，数值采用 [IEEE 754 标准下的 64 位双精度二进制格式](https://zh.wikipedia.org/wiki/雙精度浮點數)（即范围在 ±2^−1022 到 ±2^+1023 之间的数值，约等于 ±10^−308 到 ±10^+308，数值精度为 53 位）。整数值范围可达 ±2^53 − 1，且能精确表示。

除了能够表示浮点数外，number 类型还包含三个符号值：{{jsxref("Infinity")}}、`-Infinity` 和 {{jsxref("NaN")}}（非数值）。

有关 JavaScript 中其他基本类型的背景信息，请参阅 [JavaScript 数据类型和结构](/zh-CN/docs/Web/JavaScript/Guide/Data_structures)。

可以使用四种类型的数值字面量：十进制、二进制、八进制和十六进制。

### 十进制数字

```js-nolint
1234567890
42
```

十进制字面量可以以零（`0`）开头，后跟另一个十进制数字，但如果开头的 `0` 之后的所有数字均小于 8，则该数字将被解释为八进制数。这被视为一种遗留语法，在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode#旧式八进制字面量)下，无论被解释为八进制还是十进制，以 `0` 开头的数字字面量都会引发语法错误——因此，请改用 `0o` 前缀。

```js-nolint example-bad
0888 // 888 以十进制解析
0777 // 以八进制解析，为十进制的 511
```

### 二进制数字

二进制数字语法以零为开头，后面接一个小写或大写的拉丁文字母“B”（`0b` 或 `0B`）。假如 `0b` 后面的数字不是 0 或者 1，那么就会抛出 {{jsxref("SyntaxError")}} “Missing binary digits after 0b”。

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### 八进制数字

八进制数的标准语法是在数前加上前缀 `0o`。例如：

```js-nolint
0O755 // 493
0o644 // 420
```

八进制数还有一种旧式写法——即在八进制数前加一个零：`0644 === 420` 和 `"\045" === "%"`。如果 `0` 后的数字不在 0 到 7 之间，该数将被解释为十进制数。

```js
const n = 0755; // 493
const m = 0644; // 420
```

[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)禁用了这种八进制语法。

### 十六进制

十六进制数字语法以零为开头，后面接一个小写或大写的拉丁文字母“X”（`0x 或 0X`）。假如 `0x` 后面的数字超出范围（0123456789ABCDEF），那么就会抛出 {{jsxref("SyntaxError")}} “Identifier starts immediately after numeric literal”。

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

### 指数形式

```js-nolint
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
```

### 数值分隔符

对于上面列出的所有字面量语法，可以在数字之间插入下划线（`_`）以提高可读性。

```js-nolint
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xA0_B0_C0
1_000_000_000_000_000_000_000n
```

有关数值字面量的更多详细信息，请参阅[词法语法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#数值字面量)参考文档。

## Number 对象

内置的 {{jsxref("Number")}} 对象有一些有关数字的常量属性，如最大值、非数值和无穷大。你不能改变这些属性，但可以按下边的方式使用它们：

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

总是应该从预定义的 `Number` 对象，而不是你自己创建的 `Number` 对象中引用这些属性。

下面的表格汇总了 `Number` 对象的属性：

| 属性                                   | 描述                                                                                           |
| -------------------------------------- | ---------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | 可表示的最大正数（`1.7976931348623157e+308`）                                                  |
| {{jsxref("Number.MIN_VALUE")}}         | 可表示的最小正数（`5e-324`）                                                                   |
| {{jsxref("Number.NaN")}}               | 特殊值“非数值”                                                                                 |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | 特殊值“负无穷”；在溢出时返回                                                                   |
| {{jsxref("Number.POSITIVE_INFINITY")}} | 特殊值“正无穷”；在溢出时返回                                                                   |
| {{jsxref("Number.EPSILON")}}           | `1` 与能够表示为 {{jsxref("Number")}} 的最小大于 `1` 的值之间的差值（`2.220446049250313e-16`） |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | JavaScript 最小安全整数（−2^53 + 1 或 `−9007199254740991`）                                    |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | JavaScript 最大安全整数（+2^53 − 1 或 `+9007199254740991`）                                    |

| 方法                                 | 描述                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| {{jsxref("Number.parseFloat()")}}    | 把字符串参数解析成浮点数，和全局方法 {{jsxref("parseFloat()")}} 作用一致。           |
| {{jsxref("Number.parseInt()")}}      | 把字符串解析成特定基数对应的整型数值，和全局方法 {{jsxref("parseInt()")}} 作用一致。 |
| {{jsxref("Number.isFinite()")}}      | 判断传递的值是否为有限数值。                                                         |
| {{jsxref("Number.isInteger()")}}     | 判断传递的值是否为整数。                                                             |
| {{jsxref("Number.isNaN()")}}         | 判断传递的值是否为 {{jsxref("NaN")}}。比原始全局函数 {{jsxref("isNaN()")}} 更稳健。  |
| {{jsxref("Number.isSafeInteger()")}} | 判断传递的值是否为*安全整数*。                                                       |

`Number` 原型提供了多种方法，用于以不同格式从 `Number` 对象中获取信息。下表总结了 `Number.prototype` 的方法。

| 方法                                                  | 描述                                   |
| ----------------------------------------------------- | -------------------------------------- |
| {{jsxref("Number/toExponential", "toExponential()")}} | 返回数值的指数字符串表示。             |
| {{jsxref("Number/toFixed", "toFixed()")}}             | 返回数值的定点字符串表示。             |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | 以给定精度，返回数值的定点字符串表示。 |

## Math 对象

内置的 {{jsxref("Math")}} 对象提供了用于数学常量和函数的属性和方法。例如，`Math` 对象的 `PI` 属性值为 π（3.141…），在应用程序中可将其用于

```js
Math.PI;
```

同理，标准数学函数也是 `Math` 的方法。这些包括三角函数、对数、指数和其他函数。比方说你想使用正弦函数，你可以这么写：

```js
Math.sin(1.56);
```

需要注意的是 `Math` 的所有三角函数都以弧度制接收参数。

下面的表格总结了 `Math` 对象的方法。

<table class="standard-table">
  <caption>
    <code>Math</code>
    的方法
  </caption>
  <thead>
    <tr>
      <th scope="col">方法名</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Math.abs", "abs()")}}</td>
      <td>绝对值</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sin", "sin()")}}、{{jsxref("Math.cos",
        "cos()")}}、{{jsxref("Math.tan", "tan()")}}
      </td>
      <td>标准三角函数。接受弧度制参数。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asin", "asin()")}}、{{jsxref("Math.acos",
        "acos()")}}、{{jsxref("Math.atan", "atan()")}}、{{jsxref("Math.atan2",
        "atan2()")}}
      </td>
      <td>反三角函数。返回弧度制值。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sinh", "sinh()")}}、{{jsxref("Math.cosh",
        "cosh()")}}、{{jsxref("Math.tanh", "tanh()")}}
      </td>
      <td>双曲函数。接受双曲角度。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asinh", "asinh()")}}、{{jsxref("Math.acosh",
        "acosh()")}}、{{jsxref("Math.atanh", "atanh()")}}
      </td>
      <td>反双曲函数。返回双曲角度值。</td>
    </tr>
    <tr>
      <td>
        <p>
          {{jsxref("Math.pow", "pow()")}}、{{jsxref("Math.exp",
          "exp()")}}、{{jsxref("Math.expm1", "expm1()")}}、{{jsxref("Math.log",
          "log()")}}、{{jsxref("Math.log10",
          "log10()")}}、{{jsxref("Math.log1p",
          "log1p()")}}、{{jsxref("Math.log2", "log2()")}}
        </p>
      </td>
      <td>指数与对数函数。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.floor", "floor()")}}、{{jsxref("Math.ceil", "ceil()")}}
      </td>
      <td>返回小于或等于给定参数的最大/最小整数。</td>
    </tr>
    <tr>
      <td>{{jsxref("Math.min", "min()")}}、{{jsxref("Math.max", "max()")}}</td>
      <td>返回以逗号分隔的数字列表作为参数时的最小值或最大值（分别）。</td>
    </tr>
    <tr>
      <td>{{jsxref("Math.random", "random()")}}</td>
      <td>返回 0 到 1 之间的随机数。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.round", "round()")}}、{{jsxref("Math.fround",
        "fround()")}}、{{jsxref("Math.trunc", "trunc()")}}
      </td>
      <td>舍入和截断函数。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sqrt", "sqrt()")}}、{{jsxref("Math.cbrt",
        "cbrt()")}}、{{jsxref("Math.hypot", "hypot()")}}
      </td>
      <td>平方根、立方根、平方和的平方根。</td>
    </tr>
    <tr>
      <td>{{jsxref("Math.sign", "sign()")}}</td>
      <td>数字的符号，用于表示该数字是正数、负数还是零。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.clz32", "clz32()")}}、<br />{{jsxref("Math.imul",
        "imul()")}}
      </td>
      <td>
        32 位二进制表示中的前导零位数。<br />两个参数按 C 语言风格进行 32
        位乘法运算后的结果。
      </td>
    </tr>
  </tbody>
</table>

与许多其他对象不同，你永远不会自己创建一个 `Math` 对象，而应总是使用内置的 `Math` 对象。

## BigInt

数值的一个缺点是它们只有 64 位。实际上，由于采用了 IEEE 754 编码，它们无法精确表示大于 [`Number.MAX_SAFE_INTEGER`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)（即 2<sup>53</sup> - 1）的任何整数。为满足二进制数据编码的需求，并实现与提供 `i64`（64 位整数）和 `i128`（128 位整数）等大整数的其他语言的互操作性，JavaScript 还提供了一种用于表示*任意大整数*的数据类型：[`BigInt`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

BigInt 可以定义为以 `n` 结尾的整数字面量：

```js
const b1 = 123n;
// 可以是任意大的
const b2 = -1234567890987654321n;
```

还可以使用 [`BigInt`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 构造函数，根据数字值或字符串值来创建 BigInt 对象。

```js
const b1 = BigInt(123);
// 使用字符串可以避免精度损失，因为长数字字面量并不像表面看起来那样。
const b2 = BigInt("-1234567890987654321");
```

从概念上讲，BigInt 只是一个编码整数的任意长度位序列。你可以安全地进行任何算术运算，而不会丢失精度或发生溢出/下溢。

```js
const integer = 12 ** 34; // 4.9222352429520264e+36；精度有限
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

与数字相比，BigInt 类型在表示大整数时具有更高的精度；然而，它无法表示浮点数。例如，除法运算的结果会被四舍五入为零：

```js
const bigintDiv = 5n / 2n; // 2n，BigInt 不存在 2.5
```

`Math` 函数不能用于 BigInt 值；它们仅适用于数字。

选择 BigInt 还是数字取决于具体用例和输入的范围。数字的精度通常已足以满足大多数日常任务的需求，而 BigInt 最适合处理二进制数据。

有关 BigInt 值的更多用法，请参阅[表达式和运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_运算符)章节，或 [BigInt 参考文档](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

## 字符串

JavaScript 的[字符串](/zh-CN/docs/Glossary/String)类型用于表示文本数据。它是一组由 16 位无符号整数值（UTF-16 码元）组成的“元素”。字符串中的每个元素在字符串中占据一个位置。第一个元素位于索引 0，下一个位于索引 1，依此类推。字符串的长度即为其中包含的元素数量。可以通过字符串字面量或字符串对象来创建字符串。

### 字符串字面量

在源代码中，可以使用单引号或双引号来声明字符串：

```js-nolint
'foo'
"bar"
```

在字符串字面量中，大多数字符都可以直接输入。唯一的例外是反斜杠（`\`，用于开始转义序列）、用于包围字符串的引号（该引号会结束字符串），以及换行符（如果其前未加反斜杠，则会导致语法错误）。

可以使用转义序列创建更复杂的字符串：

#### 十六进制转义序列

\x 后的数字将被解释为[十六进制](https://zh.wikipedia.org/wiki/十六进制)数。

```js-nolint
"\xA9" // "©"
```

#### Unicode 转义序列

Unicode 转义序列要求在 `\u` 之后至少跟四个十六进制数字。

```js-nolint
"\u00A9" // "©"
```

#### Unicode 码位转义

使用 Unicode 码位转义符时，任何字符都可以通过十六进制数进行转义，从而支持使用最高达 `0x10FFFF` 的 Unicode 码点。而使用四位数的 Unicode 转义符时，通常需要分别写出两个代理字符才能达到相同的效果。

参见 {{jsxref("String.fromCodePoint()")}} 或 {{jsxref("String.prototype.codePointAt()")}}。

```js-nolint
"\u{2F804}"

// 相同效果，但仅使用简单 Unicode 转义
"\uD87E\uDC04"
```

## String 对象

你可以直接在字符串值上调用方法：

```js
console.log("hello".toUpperCase()); // HELLO
```

{{jsxref("String")}} 值上有这些方法：

- 查询：获取特定字符串索引处的字符或字符编码。方法包括 {{jsxref("String/at", "at()")}}、{{jsxref("String/charAt", "charAt()")}}、{{jsxref("String/charCodeAt", "charCodeAt()")}} 和 {{jsxref("String/codePointAt", "codePointAt()")}}。
- 搜索：获取符合特定模式的子字符串信息，或检测特定子字符串是否存在。方法包括 {{jsxref("String/indexOf", "indexOf()")}}、{{jsxref("String/lastIndexOf", "lastIndexOf()")}}、{{jsxref("String/startsWith", "startsWith()")}}、{{jsxref("String/endsWith", "endsWith()")}}、{{jsxref("String/includes", "includes()")}}、{{jsxref("String/match", "match()")}}、{{jsxref("String/matchAll", "matchAll()")}} 和 {{jsxref("String/search", "search()")}}。
- 组合：将字符串组合成一个更长的字符串。方法包括 {{jsxref("String/padStart", "padStart()")}}、{{jsxref("String/padEnd", "padEnd()")}}、{{jsxref("String/concat", "concat()")}} 和 {{jsxref("String/repeat", "repeat()")}}。
- 分解：将字符串拆分为较短的字符串。方法包括 {{jsxref("String/split", "split()")}}、{{jsxref("String/slice", "slice()")}}、{{jsxref("String/substring", "substring()")}}、{{jsxref("String/substr", "substr()")}}、{{jsxref("String/trim", "trim()")}}、{{jsxref("String/trimStart", "trimStart()")}} 和 {{jsxref("String/trimEnd", "trimEnd()")}}。
- 转换：根据当前字符串的内容返回一个新字符串。方法包括 {{jsxref("String/toLowerCase", "toLowerCase()")}}、{{jsxref("String/toUpperCase", "toUpperCase()")}}、{{jsxref("String/toLocaleLowerCase", "toLocaleLowerCase()")}}、{{jsxref("String/toLocaleUpperCase", "toLocaleUpperCase()")}}、{{jsxref("String/normalize", "normalize()")}} 和 {{jsxref("String/toWellFormed", "toWellFormed()")}}。

在处理字符串时，还有另外两个对象提供了重要的字符串操作功能：{{jsxref("RegExp")}} 和 {{jsxref("Intl")}}。它们分别在[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)和[国际化](/zh-CN/docs/Web/JavaScript/Guide/Internationalization)中进行了介绍。

## 模板字面量

[模板字面量](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)是一种允许嵌入表达式的字符串字面量。可以使用多行字符串和字符串插值功能。

模板字面量使用反引号（[重音符](https://zh.wikipedia.org/wiki/重音符)）（`` ` ``）代替双引号或单引号进行包围。模板字面量可以包含占位符。这些占位符由美元符号和花括号（`${表达式}`）表示。

### 多行文本

在源代码中插入的任何换行符都属于模板字面量的一部分。如果使用普通字符串，则必须采用以下语法才能生成多行字符串：

```js
console.log(
  "字符串文本第一行\n\
字符串文本第二行",
);
// "字符串文本第一行
// 字符串文本第二行"
```

若要在多行字符串中实现相同的效果，现在可以这样写：

```js
console.log(`字符串文本第一行
字符串文本第二行`);
// "字符串文本第一行
// 字符串文本第二行"
```

### 嵌入表达式

要在普通字符串中嵌入表达式，请使用以下语法：

```js
const five = 5;
const ten = 10;
console.log("十五是 " + (five + ten) + " 而不是 " + (2 * five + ten) + "。");
// "十五是 15 而不是 20。"
```

现在，借助模板字面量，你可以利用这种语法糖，使类似的替换操作更加易于阅读：

```js
const five = 5;
const ten = 10;
console.log(`十五是 ${five + ten} 而不是 ${2 * five + ten}。`);
// "十五是 15 而不是 20。"
```

如需了解更多信息，请参阅 [JavaScript 参考文档](/zh-CN/docs/Web/JavaScript/Reference)中的[模板字面量](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)。

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}
