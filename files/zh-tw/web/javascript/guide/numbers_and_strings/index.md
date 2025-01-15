---
title: 數字與日期
slug: Web/JavaScript/Guide/Numbers_and_strings
original_slug: Web/JavaScript/Guide/Numbers_and_dates
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

這個章節將介紹如何在 JavaScript 中處理數字與日期。

## 數字(Numbers)

在 JavaScript 中, Number 所使用的標準依照 [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) (i.e. number 的區間是 -(2^53 -1) 到 2^53 -1)。**整數是沒有特定的類型**。

此外還可以顯示浮點數，三種符號數值: `+`{{jsxref("Infinity")}}， `-`{{jsxref("Infinity")}}， and {{jsxref("NaN")}} (not-a-number)。

{{jsxref("BigInt")}} 是 Javascript 最新的功能，它可以表示一個很大的整數。使用 `BigInt需要注意一點`，`BigInt` 和{{jsxref("Number")}}不能在同一個 operation 混用還有當用 {{jsxref("Math")}} 物件時不能使用`BigInt`。

請參照 [JavaScript data types and structures](/zh-TW/docs/Web/JavaScript/Data_structures) 來取得更多詳細資料。

你可以用四種進制表示數字：十進制 (decimal)，二進制 (binary)，八進制 (octal) 以及十六進制 (hexadecimal)。

### 十進制數值

```js
1234567890;
42;

// 以零為開頭時要小心：

0888; // 888 解析為 十進制數值
0777; // 在 non-strict 模式下將解析成八進制 (等同於十進制的 511)
```

請注意，十進位數字允許第一個數字設為零(`0`)的話，前提是後面接的數字必須要有一個數字大於 8(例如輸入 0888 結果會是 888，輸入 068 結果會是 68)，不然則會被轉成８進位(例如 0777 結果會是 511，輸入 063 結果會是 51)。

### 二進制數值

二進制數值以 0 為開頭並跟著一個大寫或小寫的英文字母 「B」 (`0b` 或 `0B`)。如果 `0b` 後面接著的數字不是 0 或 1，那會丟出 [`SyntaxError(語法錯誤)`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError): "Missing binary digits after 0b"。

```js
var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

### 八進制數值

八進制數值以 0 為開頭。如果 `0` 後面的數字超出 0 到 7 這個範圍，將會被解析成十進制數值。

```js
var n = 0755; // 493
var m = 0644; // 420
```

Strict mode in ECMAScript 5 forbids octal syntax. Octal syntax isn't part of ECMAScript 5, but it's supported in all browsers by prefixing the octal number with a zero: `0644 === 420` and`"\045" === "%"`. In ECMAScript 2015, octal numbers are supported if they are prefixed with `0o`, e.g.:

```js
var a = 0o10; // ES2015: 8
```

### 十六進制數值

十六進制數值以 0 為開頭並跟著一個大寫或小寫的英文字母 「X」(`0x` 或 `0X`)。如果 `0b` 後面接著的值超出範圍 (0123456789ABCDEF)，那會丟出 [`SyntaxError(語法錯誤)`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError):"Identifier starts immediately after numeric literal"。

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### 指數運算

```js
1e3; // 1000
2e6; // 2000000
0.1e2; // 10
```

## `Number` 物件

The built-in {{jsxref("Number")}} object has properties for numerical constants, such as maximum value, not-a-number, and infinity. You cannot change the values of these properties and you use them as follows:

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

You always refer to a property of the predefined `Number` object as shown above, and not as a property of a `Number` object you create yourself.

下面這張表格整理了 `Number` 物件的屬性

`Number` **的屬性**

| 屬性                                   | 描述                                                                                                              |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | 可表示的最大數值                                                                                                  |
| {{jsxref("Number.MIN_VALUE")}}         | 可表示的最小數值                                                                                                  |
| {{jsxref("Number.NaN")}}               | 表示「非數值」（Not-A-Number）的數值                                                                              |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Special negative infinite value; returned on overflow                                                             |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Special positive infinite value; returned on overflow                                                             |
| {{jsxref("Number.EPSILON")}}           | Difference between one and the smallest value greater than one that can be represented as a {{jsxref("Number")}}. |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | 可以在 JavaScript 中安全表示的最小數值。                                                                          |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | 可以在 JavaScript 中安全表示的最大數值。                                                                          |

| 方法                                 | 描述                                                                                                                                                                      |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | 字串轉換成浮點數。 等同於全域函式 {{jsxref("parseFloat", "parseFloat()")}} 。                                                                                             |
| {{jsxref("Number.parseInt()")}}      | 以指定的基數將字串轉換成整數。 等同於全域函式 {{jsxref("parseInt", "parseInt()")}} 。                                                                                     |
| {{jsxref("Number.isFinite()")}}      | 判定給定的值是不是一個有限數。                                                                                                                                            |
| {{jsxref("Number.isInteger()")}}     | 判定給定的值是不是一個整數                                                                                                                                                |
| {{jsxref("Number.isNaN()")}}         | Determines whether the passed value is {{jsxref("Global_Objects/NaN", "NaN")}}. More robust version of the original global {{jsxref("Global_Objects/isNaN", "isNaN()")}}. |
| {{jsxref("Number.isSafeInteger()")}} | Determines whether the provided value is a number that is a _safe integer_.                                                                                               |

The `Number` prototype provides methods for retrieving information from `Number` objects in various formats. The following table summarizes the methods of `Number.prototype`.

| 方法                                                  | 描述                                                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| {{jsxref("Number.toExponential", "toExponential()")}} | Returns a string representing the number in exponential notation.                          |
| {{jsxref("Number.toFixed", "toFixed()")}}             | Returns a string representing the number in fixed-point notation.                          |
| {{jsxref("Number.toPrecision", "toPrecision()")}}     | Returns a string representing the number to a specified precision in fixed-point notation. |

## `Math` 物件

The built-in {{jsxref("Math")}} object has properties and methods for mathematical constants and functions. For example, the `Math` object's `PI` property has the value of pi (3.141...), which you would use in an application as

```js
Math.PI;
```

Similarly, standard mathematical functions are methods of `Math`. These include trigonometric, logarithmic, exponential, and other functions. For example, if you want to use the trigonometric function sine, you would write

```js
Math.sin(1.56);
```

Note that all trigonometric methods of `Math` take arguments in radians.

The following table summarizes the `Math` object's methods.

| 方法                                                                                                                                                                                                               | 描述                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Math.abs", "abs()")}}                                                                                                                                                                                    | 絕對值                                                                                                                                |
| {{jsxref("Math.sin", "sin()")}}, {{jsxref("Math.cos", "cos()")}}, {{jsxref("Math.tan", "tan()")}}                                                                                                                  | 三角函數; 引數以弳度表示                                                                                                              |
| {{jsxref("Math.asin", "asin()")}}, {{jsxref("Math.acos", "acos()")}}, {{jsxref("Math.atan", "atan()")}}, {{jsxref("Math.atan2", "atan2()")}}                                                                       | 反三角函數; 回傳值以弳度表示                                                                                                          |
| {{jsxref("Math.sinh", "sinh()")}}, {{jsxref("Math.cosh", "cosh()")}}, {{jsxref("Math.tanh", "tanh()")}}                                                                                                            | 雙曲函數; 引數以 hyperbolic angle 表示                                                                                                |
| {{jsxref("Math.asinh", "asinh()")}}, {{jsxref("Math.acosh", "acosh()")}}, {{jsxref("Math.atanh", "atanh()")}}                                                                                                      | 反雙曲函數; 回傳值以 hyperbolic angle 表示                                                                                            |
| {{jsxref("Math.pow", "pow()")}}, {{jsxref("Math.exp", "exp()")}}, {{jsxref("Math.expm1", "expm1()")}}, {{jsxref("Math.log10", "log10()")}}, {{jsxref("Math.log1p", "log1p()")}}, {{jsxref("Math.log2", "log2()")}} | 指數及對數函式                                                                                                                        |
| {{jsxref("Math.floor", "floor()")}}, {{jsxref("Math.ceil", "ceil()")}}                                                                                                                                             | 回傳小於等於/大於等於指定數字的最大/最小整數                                                                                          |
| {{jsxref("Math.min", "min()")}}, {{jsxref("Math.max", "max()")}}                                                                                                                                                   | Returns lesser or greater (respectively) of comma separated list of numbers arguments                                                 |
| {{jsxref("Math.random", "random()")}}                                                                                                                                                                              | 回傳一個介於 0 到 1 之間的數值                                                                                                        |
| {{jsxref("Math.round", "round()")}}, {{jsxref("Math.fround", "fround()")}}, {{jsxref("Math.trunc", "trunc()")}},                                                                                                   | Rounding and truncation functions.                                                                                                    |
| {{jsxref("Math.sqrt", "sqrt()")}}, {{jsxref("Math.cbrt", "cbrt()")}}, {{jsxref("Math.hypot", "hypot()")}}                                                                                                          | Square root, cube root, Square root of the sum of square arguments.                                                                   |
| {{jsxref("Math.sign", "sign()")}}                                                                                                                                                                                  | The sign of a number, indicating whether the number is positive, negative or zero.                                                    |
| {{jsxref("Math.clz32", "clz32()")}}, {{jsxref("Math.imul", "imul()")}}                                                                                                                                             | Number of leading zero bits in the 32-bit binary representation. The result of the C-like 32-bit multiplication of the two arguments. |

Unlike many other objects, you never create a `Math` object of your own. You always use the built-in `Math` object.

## `Date` 物件

JavaScript 沒有所謂日期(date)的數據型態(data type)。你可以使用 {{jsxref("Date")}} 物件及其方法去設定日期跟時間來滿足你的需求 。`Date` 物件有大量的設定取得操作日期的方法(method)，但它沒有屬性。

JavaScript 處理日期的方式跟 Java 類似。這兩個語言有許多一樣的 date 方法，且都將日期儲存為從 1970 年 1 月 1 號 0 時 0 分 0 秒以來的毫秒數(millisecond)。

`Date` 物件範圍是 -100,000,000 days to 100,000,000 days 以 1970 年 1 月 1 號 0 時 0 分 0 秒 UTC 為基準。

創建一個`Date`物件:

```js
var dateObjectName = new Date([parameters]);
```

在這裡創建一個名為`dateObjectName` 的 `Date` 物件；它可以是一個新的物件或是某個以存在的物件當中的屬性。

Calling `Date` without the `new` keyword returns a string representing the current date and time.

The `parameters` in the preceding syntax can be any of the following:

- Nothing: creates today's date and time. For example, `today = new Date();`.
- A string representing a date in the following form: "Month day, year hours:minutes:seconds." For example, `var Xmas95 = new Date("December 25, 1995 13:30:00")`. If you omit hours, minutes, or seconds, the value will be set to zero.
- A set of integer values for year, month, and day. For example, `var Xmas95 = new Date(1995, 11, 25)`.
- A set of integer values for year, month, day, hour, minute, and seconds. For example, `var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### `Date` 的方法

The `Date` object methods for handling dates and times fall into these broad categories:

- "set" methods, for setting date and time values in `Date` objects.
- "get" methods, for getting date and time values from `Date` objects.
- "to" methods, for returning string values from `Date` objects.
- parse and UTC methods, for parsing `Date` strings.

With the "get" and "set" methods you can get and set seconds, minutes, hours, day of the month, day of the week, months, and years separately. There is a `getDay` method that returns the day of the week, but no corresponding `setDay` method, because the day of the week is set automatically. These methods use integers to represent these values as follows:

- Seconds and minutes: 0 到 59
- Hours: 0 到 23
- Day: 0 (星期日) 到 6 (星期六)
- Date: 1 到 31 (這個月的第幾天)
- Months: 0 (一月) 到 11 (十二月)
- Year: years since 1900

舉例，假設你定義了一個日期如下：

```js
var Xmas95 = new Date("December 25, 1995");
```

那 `Xmas95.getMonth()` 將會回傳 11， `Xmas95.getFullYear()` 會回傳 1995。

`getTime` 及 `setTime` 這兩個方法對於比較日期有幫助。 The `getTime` method returns the number of milliseconds since January 1, 1970, 00:00:00 for a `Date` object.

For example, the following code displays the number of days left in the current year:

```js
var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //returns days left in the year
```

This example creates a `Date` object named `today` that contains today's date. It then creates a `Date` object named `endYear` and sets the year to the current year. Then, using the number of milliseconds per day, it computes the number of days between `today` and `endYear`, using `getTime` and rounding to a whole number of days.

The `parse` method is useful for assigning values from date strings to existing `Date` objects. For example, the following code uses `parse` and `setTime` to assign a date value to the `IPOdate` object:

```js
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
```

### 範例

下面這個範例，`JSClock()` 這個函式將會以數位時鐘的格式回傳時間。

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

`JSClock` 這個函式會先建立一個名為 `time` 的 `Date` 物件; 因為沒有提供任何引數，所以會放入目前的日期及時間。接著呼叫 `getHours` 、 `getMinutes` 以及 `getSeconds` 這三個方法將現在的時、分以及秒分別指定給 `hour` 、 `minute` 以及 `second` 這三個變數。

接著的四行指令將會建立一個時間的字串。第一行的指令建立了一個變數 `temp`，以條件運算式指定值; 如果 `hour` 大於 12，那就指定 (`hour - 12`)，不然會直接指定 `hour`， 但如果 `hour` 等於 0 ， 則改為 12。

接著下一行將 `minute` 加到 `temp` 中。如果 `minute` 小於 10, 則會在附加時補上一個零; 不然的話會直接加上冒號及分鐘數。秒數也是以同樣的作法附加到 `temp` 上。

最後，判斷 `hour` 是不是大於等於 12 ，如果是就在 `temp` 加上 "P.M." ，不然就加上 "A.M."。

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}
