---
title: 数字和日期
slug: Web/JavaScript/Guide/Numbers_and_dates
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Text_formatting")}}本章节介绍了在 JavaScript 中使用数字和日期来处理和执行计算的概念，对象和函数。

本章节介绍如何掌握 Javascript 里的数字和日期类型

## 数字

在 JavaScript 里面，数字均为双精度浮点类型（[double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)），即一个介于 ±2^−1023 和 ±2^+1024 之间的数字，或约为 ±10^−308 到 ±10^+308，数字精度为 53 位。整数数值仅在 ±(2^53 - 1) 的范围内可以表示准确。

除了能够表示浮点数，数字类型也还能表示三种符号值：`+`{{jsxref("Infinity")}}（正无穷）、`-`{{jsxref("Infinity")}}（负无穷）和 {{jsxref("NaN")}} (not-a-number，非数字)。

JavaScript 最近添加了 {{jsxref("BigInt")}} 的支持，能够用于表示极大的数字。使用 BigInt 的时候有一些注意事项，例如，你不能让 BigInt 和 {{jsxref("Number")}} 直接进行运算，你也不能用 {{jsxref("Math")}} 对象去操作 BigInt 数字。

请参见 Javascript 指南中的 [JavaScript 数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)，了解其他更多的基本类型。

你可以使用四种数字进制：十进制、二进制、八进制和十六进制。

### 十进制数字

```js-nolint
1234567890
42
```

请注意，十进制可以以 0 开头，后面接其他十进制数字，但是假如下一个接的十进制数字小于 8，那么该数字将会被当做八进制处理。

```js-nolint example-bad
0888 // 888 以十进制解析
0777 // 以八进制解析，为十进制的 511
```

### 二进制数字

二进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母 B(`0b` 或者是 `0B`)。假如 0b 后面的数字不是 0 或者 1，那么就会提示这样的语法错误（`SyntaxError`）：“Missing binary digits after 0b（0b 之后缺失二有效的二进制数据）”。

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### 八进制数字

八进制数字语法是以 0 为开头的。假如 0 后面的数字不在 0 到 7 的范围内，该数字将会被转换成十进制数字。

```js-nolint
0O755 // 493
0o644 // 420
```

在 ECMAScript 5 严格模式下禁止使用八进制语法。八进制语法并不是 ECMAScript 5 规范的一部分，但是通过在八进制数字添加一个前缀 0 就可以被所有的浏览器支持：`0644 === 420` 而且 `"\045" === "%"`。在 ECMAScript 6 中使用八进制数字是需要给一个数字添加前缀“0o”。

```js
const n = 0755; // 493
const m = 0644; // 420
```

### 十六进制

十六进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母 X(`0x 或者是 0X`)。假如`0x`后面的数字超出规定范围 (0123456789ABCDEF)，那么就会提示这样的语法错误（`SyntaxError`）：“Identifier starts immediately after numeric literal”。

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
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

## 数字对象

内置的 {{jsxref("Number")}} 对象有一些有关数字的常量属性，如最大值、不是一个数字和无穷大的。你不能改变这些属性，但可以按下边的方式使用它们：

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

你永远只用从 Number 对象引用上边显示的属性，而不是你自己创建的 Number 对象的属性。

下面的表格汇总了数字对象的属性：

**数字的属性**

| 属性                                   | 描述                                                              |
| -------------------------------------- | ----------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | 可表示的最大值                                                    |
| {{jsxref("Number.MIN_VALUE")}}         | 可表示的最小值                                                    |
| {{jsxref("Number.NaN")}}               | 特指”非数字“                                                      |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | 特指“负无穷”;在溢出时返回                                         |
| {{jsxref("Number.POSITIVE_INFINITY")}} | 特指“正无穷”;在溢出时返回                                         |
| {{jsxref("Number.EPSILON")}}           | 表示 1 和比最接近 1 且大于 1 的最小{{jsxref("Number")}}之间的差别 |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | JavaScript 最小安全整数。                                         |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | JavaScript 最大安全整数。                                         |

| 方法                                 | 描述                                                                                                                                                  |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | 把字符串参数解析成浮点数，和全局方法 {{jsxref("parseFloat", "parseFloat()")}} 作用一致。                                                              |
| {{jsxref("Number.parseInt()")}}      | 把字符串解析成特定基数对应的整型数字，和全局方法 {{jsxref("parseInt", "parseInt()")}} 作用一致。                                                      |
| {{jsxref("Number.isFinite()")}}      | 判断传递的值是否为有限数字。                                                                                                                          |
| {{jsxref("Number.isInteger()")}}     | 判断传递的值是否为整数。                                                                                                                              |
| {{jsxref("Number.isNaN()")}}         | 判断传递的值是否为 {{jsxref("Global_Objects/NaN", "NaN")}}. More robust version of the original global {{jsxref("Global_Objects/isNaN", "isNaN()")}}. |
| {{jsxref("Number.isSafeInteger()")}} | 判断传递的值是否为安全整数。                                                                                                                          |

数字的类型提供了不同格式的方法以从数字对象中检索信息。以下表格总结了 数字类型原型上的方法。

| 方法                                                  | 描述                                                                                                        |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.toExponential", "toExponential()")}} | 返回一个数字的指数形式的字符串，形如：1.23e+2                                                               |
| {{jsxref("Number.toFixed", "toFixed()")}}             | 返回指定小数位数的表示形式，var a=123,b=a.toFixed(2)//b="123.00"                                            |
| {{jsxref("Number.toPrecision", "toPrecision()")}}     | 返回一个指定精度的数字。如下例子中，a=123 中，3 会由于精度限制消失 var a=123,b=a.toPrecision(2)//b="1.2e+2" |

## 数学对象（Math）

对于内置的{{jsxref("Math")}}数学常项和函数也有一些属性和方法。比方说， `Math` 对象的 `PI` 属性会有属性值 pi (3.141...)，你可以像这样调用它：

```js
Math.PI; // π
```

同理，标准数学函数也是 Math 的方法。这些包括三角函数、对数、指数，和其他函数。比方说你想使用三角函数 `sin`，你可以这么写：

```js
Math.sin(1.56);
```

需要注意的是 Math 的所有三角函数参数都是弧度制。

下面的表格总结了 `Math` 对象的方法。

Math 的方法

| 方法                                                                                                                                                                                                               | 描述                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| {{jsxref("Math.abs", "abs()")}}                                                                                                                                                                                    | 绝对值                                                                                      |
| {{jsxref("Math.sin", "sin()")}}, {{jsxref("Math.cos", "cos()")}}, {{jsxref("Math.tan", "tan()")}}                                                                                                                  | 标准三角函数;参数为弧度                                                                     |
| {{jsxref("Math.asin", "asin()")}}, {{jsxref("Math.acos", "acos()")}}, {{jsxref("Math.atan", "atan()")}}, {{jsxref("Math.atan2", "atan2()")}}                                                                       | 反三角函数; 返回值为弧度                                                                    |
| {{jsxref("Math.sinh", "sinh()")}}, {{jsxref("Math.cosh", "cosh()")}}, {{jsxref("Math.tanh", "tanh()")}}                                                                                                            | 双曲三角函数; 参数为弧度。                                                                  |
| {{jsxref("Math.asinh", "asinh()")}}, {{jsxref("Math.acosh", "acosh()")}}, {{jsxref("Math.atanh", "atanh()")}}                                                                                                      | 反双曲三角函数;返回值为弧度。                                                               |
| {{jsxref("Math.pow", "pow()")}}, {{jsxref("Math.exp", "exp()")}}, {{jsxref("Math.expm1", "expm1()")}}, {{jsxref("Math.log10", "log10()")}}, {{jsxref("Math.log1p", "log1p()")}}, {{jsxref("Math.log2", "log2()")}} | 指数与对数函数                                                                              |
| {{jsxref("Math.floor", "floor()")}}, {{jsxref("Math.ceil", "ceil()")}}                                                                                                                                             | 返回小于等于参数的最大整数；返回大于等于参数的最小整数                                      |
| {{jsxref("Math.min", "min()")}}, {{jsxref("Math.max", "max()")}}                                                                                                                                                   | 返回一个以逗号间隔的数字参数列表中的较小或较大值 (分别地)                                   |
| {{jsxref("Math.random", "random()")}}                                                                                                                                                                              | 返回 0 和 1 之间的随机数。                                                                  |
| {{jsxref("Math.round", "round()")}}, {{jsxref("Math.fround", "fround()")}}, {{jsxref("Math.trunc", "trunc()")}},                                                                                                   | 四舍五入和截断函数                                                                          |
| {{jsxref("Math.sqrt", "sqrt()")}}, {{jsxref("Math.cbrt", "cbrt()")}}, {{jsxref("Math.hypot", "hypot()")}}                                                                                                          | 平方根，立方根，所有参数平方和的平方根两个参数平方和的平方根                                |
| {{jsxref("Math.sign", "sign()")}}                                                                                                                                                                                  | 数字的符号，说明数字是否为正、负、零。                                                      |
| {{jsxref("Math.clz32", "clz32()")}}, {{jsxref("Math.imul", "imul()")}}                                                                                                                                             | 在 32 位 2 进制表示中，开头的 0 的数量。_返回传入的两个参数相乘结果的类 C 的 32 位表现形式_ |

和其他对象不同，你不能够创建一个自己的 Math 对象。你只能使用内置的 Math 对象。

## 日期对象

JavaScript 没有日期数据类型。但是你可以在你的程序里使用 {{jsxref("Date")}} 对象和其方法来处理日期和时间。Date 对象有大量的设置、获取和操作日期的方法。它并不含有任何属性。

JavaScript 处理日期数据类似于 Java。这两种语言有许多一样的处理日期的方法，也都是以 1970 年 1 月 1 日 00:00:00 以来的毫秒数来储存数据类型的。

`Date` 对象的范围是相对距离 UTC 1970 年 1 月 1 日 的前后 100,000,000 天。

创建一个日期对象：

```js
var dateObjectName = new Date([parameters]);
```

这里的 dateObjectName 对象是所创建的 Date 对象的一个名字，它可以成为一个新的对象或者已存在的其他对象的一个属性。

不使用 _new_ 关键字来调用 Date 对象将返回当前时间和日期的字符串

前边的语法中的参数（parameters）可以是一下任何一种：

- 无参数 : 创建今天的日期和时间，例如： `today = new Date();`.
- 一个符合以下格式的表示日期的字符串："月 日，年 时：分：秒"。例如： `var Xmas95 = new Date("December 25, 1995 13:30:00")。`如果你省略时、分、秒，那么他们的值将被设置为 0。
- 一个年，月，日的整型值的集合，例如： `var Xmas95 = new Date(1995, 11, 25)`。
- 一个年，月，日，时，分，秒的集合，例如： `var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### `Date 对象的方法`

处理日期时间的 Date 对象方法可分为以下几类：

- "set" 方法，用于设置 Date 对象的日期和时间的值。
- "get" 方法，用于获取 Date 对象的日期和时间的值。
- "to" 方法，用于返回 Date 对象的字符串格式的值。
- parse 和 UTC 方法，用于解析 Date 字符串。

通过“get”和“set”方法，你可以分别设置和获取秒，分，时，日，星期，月份，年。这里有个 getDay 方法可以返回星期，但是没有相应的 setDay 方法用来设置星期，因为星期是自动设置的。这些方法用整数来代表以下这些值：

- 秒，分：0 至 59
- 时：0 至 23
- 星期：0 (周日) 至 6 (周六)
- 日期：1 至 31
- 月份：0 (一月) to 11 (十二月)
- 年份：从 1900 开始的年数

例如，假设你定义了如下日期：

```js
var Xmas95 = new Date("December 25, 1995");
```

Then `Xmas95.getMonth()` 返回 11, and `Xmas95.getFullYear()` 返回 1995.

`getTime` 和 `setTime` 方法对于比较日期是非常有用的。`getTime`方法返回从 1970 年 1 月 1 日 00:00:00 的毫秒数。

例如，以下代码展示了今年剩下的天数：

```js
var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // 设置日和月，注意，月份是 0-11
endYear.setFullYear(today.getFullYear()); // 把年设置为今年
var msPerDay = 24 * 60 * 60 * 1000; // 每天的毫秒数
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //返回今年剩下的天数
```

这个例子中，创建了一个包含今天的日期的`Date`对象，并命名为`today`，然后创建了一个名为`endYear`的`Date`对象，并把年份设置为当前年份，接着使用`today`和`endYear`的`getTime`分别获取今天和年底的毫秒数，再根据每一天的毫秒数，计算出了今天到年底的天数，最后四舍五入得到今年剩下的天数。

parse 方法对于从日期字符串赋值给现有的 Date 对象很有用，例如：以下代码使用`parse`和`setTime`分配了一个日期值给`IPOdate`对象：

```js
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
```

### 示例

在下边的例子中，JSClock() 函数返回了用数字时钟格式的时间：

```js
function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = "" + (hour > 12 ? hour - 12 : hour);
  if (hour == 0) temp = "12";
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
```

`JSClock`函数首先创建了一个叫做`time`的新的`Date`对象，因为没有参数，所以`time`代表了当前日期和时间。然后调用了`getHours`，`getMinutes`以及`getSeconds`方法把当前的时分秒分别赋值给了`hour`，`minute`，`second`。

接下来的 4 句在`time`的基础上创建了一个字符串，第一句创建了一个变量`temp`，并通过一个条件表达式进行了赋值，如果小时大于 12，就为 (`hour - 12`)，其他情况就为`hour`，除非`hour`为 0，这种情况下，它会变成 12。

接下来的语句拼接了`minute`的值到`temp`后。如果`minute`小于 10，条件表达式就会在`minute`前边加个 0，其他情况下加一个冒号。然后按同样的方式在`temp`后拼接上了秒。

最后，如果`hour`是 12 或者更大，条件表达式会在`temp`后拼接"P.M."，否则拼接"A.M."。

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Text_formatting")}}
