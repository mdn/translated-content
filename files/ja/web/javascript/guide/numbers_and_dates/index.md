---
title: 数値と日付
slug: Web/JavaScript/Guide/Numbers_and_dates
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}

本章では、JavaScript で数値と日付の計算を実行するのに使われる概念、オブジェクト、関数について紹介します。これには 10 進数、2 進数、16 進数数値を含むそれぞれの基数で表された数値を使用することや、数値の幅広い種類の数学的演算を実行するグローバル {{jsxref("Math")}} オブジェクトの使い方も含みます。

## 数値

JavaScript では、数値はすべて [64 ビット倍精度浮動小数点数のフォーマットである IEEE 754](https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0) (すなわち、±2−1022 と ±2+1023 の間、もしくはおよそ ±10−308 と ±10+308 の間の数値、53 ビットの精度による) にしたがって実装されています。±253 − 1 までの整数は正確に表現できます。

浮動小数点数の表現に加えて、数値型は 3 つの記号的な値を持っています。 `+`{{jsxref("Infinity")}}、`-`{{jsxref("Infinity")}}、{{jsxref("NaN")}}（非数、not-a-number）です。

JavaScript に最近巨大な数値を表す {{jsxref("BigInt")}} が実装されました。 `BigInt` には注意事項があり、例えば、`BigInt` と {{jsxref("Number")}} の値は同じ演算で混ぜたり比較することができず、`BigInt` の値を {{jsxref("Math")}} オブジェクトで使用することもできません。

JavaScript における他のプリミティブ型との関わりについては、[JavaScript のデータ型とデータ構造](/ja/docs/Web/JavaScript/Data_structures) もご覧ください。

4 種類の数値リテラル、10 進数、2 進数、8 進数、16 進数を使用することができます。

### 10 進数

```js
1234567890;
42;

// ゼロを先頭に使用するときは気をつけて:

0888; // 10 進数として 888 と解析される
0777; // Strict モードでない場合 8 進数として解析される (10 進数の 511 になる)
```

10 進数リテラルはゼロ (`0`) から始めて、それ以降に 10 進の桁を続けることが可能ですが、`0` に続くすべての数値が 8 より小さい場合、その数値は 8 進数として解析されることに注意してください。

### 2 進数

2 進数の構文では、先行ゼロの後に小文字または大文字の "B" を使います (`0b` または `0B`)。`0b` の後の数値が 0 または 1 ではない場合、 {{jsxref("SyntaxError")}}: "Missing binary digits after 0b"（0b の後に 2 進数の桁がありません） が発生します。

```js
var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

### 8 進数

8 進数の構文では、先頭にゼロを使用します。`0` の後の数値が 0 から 7 の範囲外の場合、数値は 10 進数として解釈されます。

```js
var n = 0755; // 493
var m = 0644; // 420
```

ECMAScript 5 における厳格モードでは上記の 8 進数記法を禁じています。8 進数記法は ECMAScript 5 仕様の一部ではありませんが、すべてのブラウザーで先行ゼロによる 8 進数記法をサポートしており、 `0644 === 420` や `"\045" === "%"` となります。ECMAScript 2015 ではまた、先行する `0o` を使う 8 進数構文をサポートしています。

```js
var a = 0o10; // ES2015: 8
```

### 16 進数

16 進数の構文では、先行ゼロの後に小文字または大文字の "X" を使います (`0x` または `0X`)。0x の後の数値が範囲 (0123456789ABCDEF) 外の場合、 {{jsxref("SyntaxError")}}: "Identifier starts immediately after numeric literal" (数値リテラルの直後に識別子があります) が発生します。

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### 指数表現

```js
1e3; // 1000
2e6; // 2000000
0.1e2; // 10
```

## Number オブジェクト

組み込み {{jsxref("Number")}} オブジェクトは最大値、NaN、無限大といった数値定数のプロパティを持っています。これらのプロパティの値は変更できません。下記のように使用します:

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

自作した `Number` オブジェクトのプロパティではなく、上記の定義済み `Number` オブジェクトのプロパティを常に参照してください。

次の表は `Number` オブジェクトのプロパティの要約です。

| プロパティ                             | 説明                                                                                                                                  |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | 表現可能な最大値。(`±1.7976931348623157e+308`)                                                                                        |
| {{jsxref("Number.MIN_VALUE")}}         | 表現可能な最小値。(`±5e-324`)                                                                                                         |
| {{jsxref("Number.NaN")}}               | 非数を表す特別な値。                                                                                                                  |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | 負の無限大を表す特別な値。オーバーフローした際に返されます。                                                                          |
| {{jsxref("Number.POSITIVE_INFINITY")}} | 正の無限大を表す特別な値。オーバーフローした際に返されます。                                                                          |
| {{jsxref("Number.EPSILON")}}           | {{jsxref("Number")}} オブジェクトで表現可能な、ある数とそれよりも大きい最小数との差分値 (計算機イプシロン)。(`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | JavaScript で正確に扱える最小の整数値。(−253 + 1, or `−9007199254740991`)                                                             |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | JavaScript で正確に扱える最大の整数値。(+253 − 1, or `+9007199254740991`)                                                             |

| メソッド                             | 説明                                                                                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | 文字列引数を解析し、浮動小数点数を返します。 グローバル関数 {{jsxref("parseFloat", "parseFloat()")}} と同等。                                                                                                 |
| {{jsxref("Number.parseInt()")}}      | 文字列引数を解析し、指定された根（基数）の整数を返します。 グローバル関数 {{jsxref("parseInt", "parseInt()")}} と同等。                                                                                       |
| {{jsxref("Number.isFinite()")}}      | 渡された値が有限数であるか否かを判定します。                                                                                                                                                                  |
| {{jsxref("Number.isInteger()")}}     | 渡された値が整数であるか否かを判定します。                                                                                                                                                                    |
| {{jsxref("Number.isNaN()")}}         | 渡された値が {{jsxref("Global_Objects/NaN", "NaN")}}（非数）であるか否かを判定します。原型となったグローバル関数 {{jsxref("Global_Objects/isNaN", "isNaN()")}} よりもロバストな（対応能力が強い）バージョン。 |
| {{jsxref("Number.isSafeInteger()")}} | 渡された値が正確に扱える整数であるか否かを判定します。                                                                                                                                                        |

`Number` オブジェクトのプロトタイプは様々なフォーマットの `Number` オブジェクトから情報を取得するメソッドを提供します。次表は `Number.prototype` のメソッドの要約です。

| メソッド                                              | 説明                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| {{jsxref("Number.toExponential", "toExponential()")}} | 数値の指数表記を表す文字列を返します。                       |
| {{jsxref("Number.toFixed", "toFixed()")}}             | 数値の固定小数点表記を表す文字列を返します。                 |
| {{jsxref("Number.toPrecision", "toPrecision()")}}     | 特定の精度の固定小数点表記による数値を表す文字列を返します。 |

## Math オブジェクト

組み込み {{jsxref("Math")}} オブジェクトは数学定数および数学関数のためのプロパティとメソッドを有しています。例えば、`Math` オブジェクトの `PI` プロパティは π (3.141...) の値を持ちます。以下のようにアプリケーション内で使用できます。

```js
Math.PI;
```

同様に、標準的な数学関数が `Math` のメソッドにあります。数学関数には、三角関数、対数、指数、およびその他の関数が含まれます。例えば、三角関数 sin を使用したい場合、下記のように記述します。

```js
Math.sin(1.56);
```

`Math` のすべての三角関数メソッドはラジアンで引数を取ることに注意してください。

次表は `Math` オブジェクトメソッドの要約です。

| メソッド                                                                                                                                                                                                           | 説明                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Math.abs", "abs()")}}                                                                                                                                                                                    | 絶対値。                                                                                                                      |
| {{jsxref("Math.sin", "sin()")}}, {{jsxref("Math.cos", "cos()")}}, {{jsxref("Math.tan", "tan()")}}                                                                                                                  | 標準三角関数。引数はラジアン。                                                                                                |
| {{jsxref("Math.asin", "asin()")}}, {{jsxref("Math.acos", "acos()")}}, {{jsxref("Math.atan", "atan()")}}, {{jsxref("Math.atan2", "atan2()")}}                                                                       | 逆三角関数。戻り値はラジアン。                                                                                                |
| {{jsxref("Math.sinh", "sinh()")}}, {{jsxref("Math.cosh", "cosh()")}}, {{jsxref("Math.tanh", "tanh()")}}                                                                                                            | 双曲線三角関数。引数は双曲線角度。                                                                                            |
| {{jsxref("Math.asinh", "asinh()")}}, {{jsxref("Math.acosh", "acosh()")}}, {{jsxref("Math.atanh", "atanh()")}}                                                                                                      | 逆双曲線三角関数。戻り値は双曲線角度。                                                                                        |
| {{jsxref("Math.pow", "pow()")}}, {{jsxref("Math.exp", "exp()")}}, {{jsxref("Math.expm1", "expm1()")}}, {{jsxref("Math.log10", "log10()")}}, {{jsxref("Math.log1p", "log1p()")}}, {{jsxref("Math.log2", "log2()")}} | 指数と対数関数。                                                                                                              |
| {{jsxref("Math.floor", "floor()")}}, {{jsxref("Math.ceil", "ceil()")}}                                                                                                                                             | 引数以下の最大の整数値、引数以上の最小の整数値を返します。                                                                    |
| {{jsxref("Math.min", "min()")}}, {{jsxref("Math.max", "max()")}}                                                                                                                                                   | カンマで区切られた数値リストの引数から最小値、最大値をそれぞれ返します。                                                      |
| {{jsxref("Math.random", "random()")}}                                                                                                                                                                              | 0 から 1 の間のランダムな数値を返します。                                                                                     |
| {{jsxref("Math.round", "round()")}}, {{jsxref("Math.fround", "fround()")}}, {{jsxref("Math.trunc", "trunc()")}},                                                                                                   | 丸めと切り捨て関数。                                                                                                          |
| {{jsxref("Math.sqrt", "sqrt()")}}, {{jsxref("Math.cbrt", "cbrt()")}}, {{jsxref("Math.hypot", "hypot()")}}                                                                                                          | 平方根、立方根、引数の二乗の和の平方根を返す。                                                                                |
| {{jsxref("Math.sign", "sign()")}}                                                                                                                                                                                  | 数の符号、すなわち数が正、負またはゼロかどうかを返します。                                                                    |
| {{jsxref("Math.clz32", "clz32()")}}, {{jsxref("Math.imul", "imul()")}}                                                                                                                                             | 32 ビットのバイナリー表現にした場合の先行ゼロの個数を返す関数。 2 つの引数を C 言語のように 32 ビット乗算した結果を返す関数。 |

他の多くのオブジェクトとは異なり、決して独自の `Math` オブジェクトを生成しないでください。常にビルトイン `Math` オブジェクトを使用してください。

## Date オブジェクト

JavaScript には日付のためのデータ型がありません。しかし、アプリケーション内で日付を取り扱うための {{jsxref("Date")}} オブジェクトとそのメソッドが利用できます。 `Date` オブジェクトは日付の設定、取得、操作を行う多数のメソッドを有しています。このオブジェクトはいかなるプロパティも持ちません。

JavaScript は Java と同じように日付を取り扱います。2 つの言語は同様の日付用メソッドを多く持ち、両方の言語とも、Unix タイムスタンプが 1970 年 1 月 1 日 00:00:00 からの秒の数値であるのと同様に、1970 年 1 月 1 日 00:00:00 からのミリ秒の数値で日付を格納しています。

`Date` オブジェクトの設定可能範囲は 1970 年 1 月 1 日 UTC 時間 に対し -100,000,000 日から 100,000,000 日までです。

`Date` オブジェクトは次のように生成します。

```js
var dateObjectName = new Date([parameters]);
```

ここで `dateObjectName` は生成される `Date` オブジェクトの名前です。新しいオブジェクトか、あるいは既存のオブジェクトのプロパティにすることができます。

`new` キーワードなしで `Date` を呼び出すと、単に現在の日付と時間を文字列表現にしたものを返します。

上記構文の `parameters` は以下のいずれかになります。

- パラメータなし: 今日の日時を生成します。例えば、`today = new Date();`
- 次のような形式による日付を表す文字列: "月 日, 年 時:分:秒." 例えば、`var Xmas95 = new Date("December 25, 1995 13:30:00")`。時、分、秒を省略した場合、その値はゼロに設定されます。
- 年、月、日に対応する整数の集合。例えば、`var Xmas95 = new Date(1995, 11, 25)`
- 年、月、日、時、分、秒に対応する整数の集合。例えば、`var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);`

### Date オブジェクトのメソッド

日時を扱う `Date` オブジェクトのメソッドは下記のカテゴリに分類されます:

- "set" メソッド、`Date` オブジェクト内の日時の値の設定を行うメソッド
- "get" メソッド、`Date` オブジェクトから日時を取得を行うメソッド
- "to" メソッド、`Date` オブジェクトから文字列値を返すメソッド
- "parse" と "UTC メソッド、`Date` 文字列を解析するメソッド

"get" と "set" メソッドを使用して、秒、分、時、日、曜日、月、年をそれぞれ取得、設定できます。曜日を返す `getDay` メソッドはありますが、対応する `setDay` メソッドはありません。というのも、曜日は自動的に設定されるからです。これらのメソッドはそれぞれの値を表すのに下記の整数値を使用します:

- 秒と分: 0 〜 59
- 時: 0 〜 23
- 曜日: 0 （日曜日） 〜 6 （土曜日）
- 日: 1 〜 31 （日）
- 月: 0 （1 月） 〜 11 （12 月）
- 年: 1900 年以降の年

例えば、次の日付を定義してみます。

```js
var Xmas95 = new Date("December 25, 1995");
```

すると、`Xmas95.getMonth()` は 11 を返し、`Xmas95.getFullYear()` は 1995 を返します。

`getTime` と `setTime` メソッドは日付を比較するのに便利です。`getTime` メソッドは `Date` オブジェクトに対して January 1, 1970, 00:00:00 からのミリ秒の数値を返します。

例えば、次のコードでは今年に残された日数を表示します。:

```js
var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // 月日を設定
endYear.setFullYear(today.getFullYear()); // 今年の年を設定
var msPerDay = 24 * 60 * 60 * 1000; // 一日をミリ秒に換算
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); // 今年の残り日数を返す
```

この例では、今日の日時を含む `today` と名付けられた `Date` オブジェクトを生成します。それから、`endYear` と名付けられた `Date` オブジェクトを生成し、年を今年に設定します。そして、1 日あたりのミリ秒値を使って、`today` と `endYear` 間の日数を計算する際に `getTime` を使用し、そして日数に丸めます。

`parse` メソッドは日付文字列から既存の `Date` オブジェクトに値を割り当てるのに便利です。例えば、次のコードは `parse` と `setTime` を使用し、日付の値を `IPOdate` オブジェクトに割り当てます:

```js
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
```

### 例

次の例では、`JSClock()` 関数がデジタル時計の形式で時刻を返します。

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

`JSClock` 関数は、はじめに `time` という名前の新しい `Date` オブジェクトを生成します。引数が与えられていないため、time は現在の日付と時刻で生成されます。次に、`getHours` および `getMinutes`、`getSeconds` メソッドを呼び出して、現在の時、分、秒を `hour`、`minute`、`second` に代入します。

続く 4 つの式は、時刻を基にした文字列値を組み立てます。最初の式は `temp` 変数を生成し、それに条件式を用いて値を代入します。`hour` が 12 よりも大きい場合は (`hour - 12`)、そうでない場合は単に hour を代入します。hour が 0 の場合は 12 になります。

次の式は、`minute` 値を `temp` に追加します。`minute` の値が 10 よりも小さい場合、条件式により先行ゼロの文字が追加されます。そうでない場合は区切りのコロン文字を追加します。そして秒の値を同じ方法で `temp` に追加します。

最後の条件式は、`hour` が 12 以上の場合、"P.M." を `temp` に追加します。そうでない場合は "A.M." を `temp` に追加します。

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}
