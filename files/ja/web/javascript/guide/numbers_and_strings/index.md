---
title: 数値と文字列
slug: Web/JavaScript/Guide/Numbers_and_strings
l10n:
  sourceCommit: 0785ed06b89a60d6df673504d84e276852017c92
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

本章では、JavaScript で 2 つの最も基本的なデータ型、数値と文字列について説明します。その基盤となる表現と、それらを使用して作業し、計算を行うための関数について紹介します。

## 数値

JavaScript では、数値はすべて [64 ビット倍精度浮動小数点数形式である IEEE 754](https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0) (すなわち、±2^−1022 と ±2^+1023 の間、もしくはおよそ ±10^−308 と ±10^+308 の間の数値、53 ビットの精度による) にしたがって実装されています。±2^53 − 1 までの整数は正確に表現できます。

浮動小数点数の表現に加えて、数値型は 3 つの記号的な値を持っています。 {{jsxref("Infinity")}}、`-Infinity`、{{jsxref("NaN")}}（非数、not-a-number）です。

JavaScript における他のプリミティブ型との関わりについては、[JavaScript のデータ型とデータ構造](/ja/docs/Web/JavaScript/Data_structures) もご覧ください。

4 種類の数値リテラル、10 進数、2 進数、8 進数、16 進数を使用することができます。

### 10 進数

```js-nolint
1234567890
42
```

10 進数リテラルはゼロ (`0`) から始めて、それ以降に 10 進の桁を続けることが可能ですが、`0` に続くすべての数値が 8 より小さい場合、その数値は 8 進数として解析されることに注意してください。これは古い構文と見なされ、 `0` で始まる数値リテラルは、 8 進数または 10 進数として解釈されるかどうかに関わらず、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals)では構文エラーが発生します。そのため、代わりに `0o` 接頭辞を使用してください。

```js-nolint example-bad
0888 // 10 進数として 888 と解析される
0777 // 8 進数として解析され、 10 進数の 511 になる
```

### 2 進数

2 進数の構文では、先行ゼロの後に小文字または大文字の "B" を使います (`0b` または `0B`)。`0b` の後の数値が 0 または 1 ではない場合、 {{jsxref("SyntaxError")}}: "Missing binary digits after 0b"（0b の後に 2 進数の桁がありません） が発生します。

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### 8 進数

8 進数の標準的な構文は、接頭辞として `0o` を付けるものです。例えば次のようなものです。

```js-nolint
0O755 // 493
0o644 // 420
```

8 進数には古い構文もあります。 8 進数の前に 0 を付けるもので、 `0644 === 420` や `"\045" === "%"` となります。 `0` の後の数字が `0` から `7` の範囲外の場合、数値は 10 進数として解釈されます。

```js
const n = 0755; // 493
const m = 0644; // 420
```

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、この 8 進数構文を禁止しています。

### 16 進数

16 進数の構文では、先行ゼロの後に小文字または大文字の "X" を使います (`0x` または `0X`)。0x の後の数値が範囲 (0123456789ABCDEF) 外の場合、 {{jsxref("SyntaxError")}}: "Identifier starts immediately after numeric literal" (数値リテラルの直後に識別子があります) が発生します。

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

### 指数表現

```js-nolint
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
```

## Number オブジェクト

組み込みの {{jsxref("Number")}} オブジェクトは最大値、NaN、無限大といった数値定数のプロパティを持っています。これらのプロパティの値は変更できません。下記のように使用します。

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

常に上記のように定義済み `Number` オブジェクトのプロパティを常に参照してください。自作した `Number` オブジェクトのプロパティは使用しないでください。

次の表は `Number` オブジェクトのプロパティの要約です。

| プロパティ                             | 説明                                                                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | 表現可能な正の最大値。(`±1.7976931348623157e+308`)                                                                              |
| {{jsxref("Number.MIN_VALUE")}}         | 表現可能な正の最小値。(`5e-324`)                                                                                                |
| {{jsxref("Number.NaN")}}               | 非数を表す特別な値。                                                                                                            |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | 負の無限大を表す特別な値。オーバーフローした際に返されます。                                                                    |
| {{jsxref("Number.POSITIVE_INFINITY")}} | 正の無限大を表す特別な値。オーバーフローした際に返されます。                                                                    |
| {{jsxref("Number.EPSILON")}}           | `1` と {{jsxref("Number")}} オブジェクトで表現可能な `1` より大きな最小の数との差 (計算機イプシロン)。(`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | JavaScript で正確に扱える最小の整数値。(−2^53 + 1, or `−9007199254740991`)                                                      |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | JavaScript で正確に扱える最大の整数値。(+2^53 − 1, or `+9007199254740991`)                                                      |

| メソッド                             | 説明                                                                                                                                      |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | 文字列引数を解析し、浮動小数点数を返します。 グローバル関数 {{jsxref("parseFloat()")}} と同等。                                           |
| {{jsxref("Number.parseInt()")}}      | 文字列引数を解析し、指定された根（基数）の整数を返します。 グローバル関数 {{jsxref("parseInt()")}} と同等。                               |
| {{jsxref("Number.isFinite()")}}      | 渡された値が有限数であるか否かを判定します。                                                                                              |
| {{jsxref("Number.isInteger()")}}     | 渡された値が整数であるか否かを判定します。                                                                                                |
| {{jsxref("Number.isNaN()")}}         | 渡された値が {{jsxref("NaN")}}（非数）であるか否かを判定します。原型となったグローバル関数 {{jsxref("isNaN()")}} よりも強靭なバージョン。 |
| {{jsxref("Number.isSafeInteger()")}} | 渡された値が正確に扱える整数であるか否かを判定します。                                                                                    |

`Number` オブジェクトのプロトタイプは様々な形の `Number` オブジェクトから情報を取得するメソッドを提供します。次表は `Number.prototype` のメソッドの要約です。

| メソッド                                              | 説明                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| {{jsxref("Number/toExponential", "toExponential()")}} | 数値の指数表記を表す文字列を返します。                       |
| {{jsxref("Number/toFixed", "toFixed()")}}             | 数値の固定小数点表記を表す文字列を返します。                 |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | 特定の精度の固定小数点表記による数値を表す文字列を返します。 |

## Math オブジェクト

組み込み {{jsxref("Math")}} オブジェクトは数学定数および数学関数のためのプロパティとメソッドを有しています。例えば、`Math` オブジェクトの `PI` プロパティは π (3.141…) の値を持ちます。以下のようにアプリケーション内で使用できます。

```js
Math.PI;
```

同様に、標準的な数学関数が `Math` のメソッドにあります。数学関数には、三角関数、対数、指数、およびその他の関数が含まれます。例えば、三角関数 sin を使用したい場合、下記のように記述します。

```js
Math.sin(1.56);
```

`Math` のすべての三角関数メソッドはラジアンで引数を取ることに注意してください。

次表は `Math` オブジェクトメソッドの要約です。

<table class="standard-table">
  <caption>
    <code>Math</code> のメソッド
  </caption>
  <thead>
    <tr>
      <th scope="col">メソッド</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Math.abs", "abs()")}}</td>
      <td>絶対値。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sin", "sin()")}},
        {{jsxref("Math.cos", "cos()")}},
        {{jsxref("Math.tan", "tan()")}}
      </td>
      <td>標準三角関数。引数はラジアン。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asin", "asin()")}},
        {{jsxref("Math.acos", "acos()")}},
        {{jsxref("Math.atan", "atan()")}},
        {{jsxref("Math.atan2", "atan2()")}}
      </td>
      <td>逆三角関数。返値はラジアン。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sinh", "sinh()")}},
        {{jsxref("Math.cosh", "cosh()")}},
        {{jsxref("Math.tanh", "tanh()")}}
      </td>
      <td>双曲線三角関数。引数は双曲線角度。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asinh", "asinh()")}},
        {{jsxref("Math.acosh", "acosh()")}},
        {{jsxref("Math.atanh", "atanh()")}}
      </td>
      <td>逆双曲線三角関数。返値は双曲線角度。</td>
    </tr>
    <tr>
      <td>
        <p>
          {{jsxref("Math.pow", "pow()")}},
          {{jsxref("Math.exp", "exp()")}},
          {{jsxref("Math.expm1", "expm1()")}},
          {{jsxref("Math.log", "log()")}},
          {{jsxref("Math.log10", "log10()")}},
          {{jsxref("Math.log1p", "log1p()")}},
          {{jsxref("Math.log2", "log2()")}}
        </p>
      </td>
      <td>指数と対数関数。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.floor", "floor()")}},
        {{jsxref("Math.ceil", "ceil()")}}
      </td>
      <td>
        引数以下の最大の整数値、引数以上の最小の整数値を返します。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>
        カンマで区切られた数値リストの引数から最小値、最大値をそれぞれ返します。
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.random", "random()")}}</td>
      <td>0 から 1 の間のランダムな数値を返します。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.round", "round()")}},
        {{jsxref("Math.fround", "fround()")}},
        {{jsxref("Math.trunc", "trunc()")}},
      </td>
      <td>丸めと切り捨て関数。</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sqrt", "sqrt()")}},
        {{jsxref("Math.cbrt", "cbrt()")}},
        {{jsxref("Math.hypot", "hypot()")}}
      </td>
      <td>
        平方根、立方根、引数の二乗の和の平方根を返す。
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.sign", "sign()")}}</td>
      <td>
        数の符号、すなわち数が正、負またはゼロかどうかを返します。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.clz32", "clz32()")}},<br />{{jsxref("Math.imul", "imul()")}}
      </td>
      <td>
        32 ビットのバイナリー表現にした場合の先行ゼロの個数を返す関数。<br />2 つの引数を C 言語のように 32 ビット乗算した結果を返す関数。
      </td>
    </tr>
  </tbody>
</table>

他の多くのオブジェクトとは異なり、決して独自の `Math` オブジェクトを生成しないでください。常にビルトイン `Math` オブジェクトを使用してください。

## 長整数

数値の欠点のひとつは、 64 ビットしか存在しないことです。実際には、 IEEE 754 エンコード方式を使用しているため、 [`Number.MAX_SAFE_INTEGER`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (2<sup>53</sup> - 1) よりも大きな整数を正確に表すことができません。バイナリーデータをエンコードする必要があること、また、`i64` （64 ビット整数）や `i128` （128 ビット整数）のような幅広い整数をサポートする他の言語と相互運用する必要があることから、 JavaScript では任意の大きな整数を表す別のデータ型である長整数 ([`BigInt`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)) も提供しています。

長整数は、 `n` を接尾辞とする整数リテラルとして定義することができます。

```js
const b1 = 123n;
// 好きなだけ大きくできる。
const b2 = -1234567890987654321n;
```

長整数は、 [`BigInt`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) コンストラクターを使用して数値または文字列値から構築することもできます。

```js
const b1 = BigInt(123);
// 文字列を使用することで、精度の低下を防ぐことができる。
// 長い数値リテラルは、そのように見えるものを表してとは限らない。
const b2 = BigInt("-1234567890987654321");
```

概念的には、長整数は整数をエンコードする任意の長さのビット列です。精度を失うことなく、またオーバーフローやアンダーフローを起こすことなく、あらゆる算術演算を安全に行うことができます。

```js
const integer = 12 ** 34; // 4.9222352429520264e+36、精度のみで制約される
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

数値と比較すると、長整数の値は大きな整数を表す際に高い精度を実現します。しかし、浮動小数点数を表すことはできません。例えば、割り算はゼロに丸められます。

```js
const bigintDiv = 5n / 2n; // 2n。長整数には 2.5 がない
```

`Math` 関数は長整数値では使用できません。長整数値が利用できるように、 `Math.max()` のような特定の `Math` 関数をオーバーロードするための[公開提案](https://github.com/tc39/proposal-bigint-math)があります。

長整数と数値のどちらかを選ぶかは、用途と入力の範囲によって決まります。数値の精度は、すでにほとんどの日常的な課題に対応できるはずです。また、長整数はバイナリーデータを処理するのに最も適しています。

長整数値でできることについては、「[式と演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_演算子)」の章または [BigInt リファレンス](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)を参照してください。

## 文字列

JavaScript の[文字列](/ja/docs/Glossary/String)型は、テキストデータを表すために使われます。テキストデータ型は 16 ビット符号なし整数値 (UTF-16) からなる「要素」の集合体です。文字列の各要素は、その文字列内で所定の位置を占めています。最初の要素のインデックスは 0 で、次の要素のインデックスは 1 、といった具合に。文字列の長さはその要素数となります。文字列リテラルか文字列オブジェクトを使用して文字列を生成できます。

### 文字列リテラル

単一引用符または二重引用符のいずれかを使用して、単純な文字列を作成できます。

```js-nolint
'foo'
"bar"
```

文字列リテラル内では、ほとんどの文字は文字通りに入力できます。 例外は、バックスラッシュ（`\`、エスケープシーケンスを始める）、文字列を囲むために使用されている引用符文字（文字列を終了する）、およびバックスラッシュが前になければ構文エラーとなる改行文字だけです。

エスケープシーケンスを使用して、より高度な文字列を作成することができます。

#### 16 進数エスケープシーケンス

`\x` の後の数値は [16 進法による](https://ja.wikipedia.org/wiki/十六進法)数として解釈されます。

```js-nolint
"\xA9" // "©"
```

#### Unicode エスケープシーケンス

Unicode エスケープシーケンスは `\u` の後に少なくとも文字が 4 個必要です。

```js-nolint
"\u00A9" // "©"
```

#### Unicode コードポイントエスケープ

Unicode コードポイントエスケープを使えば、どんな文字でも 16 進数を使用してエスケープすることができます。これにより、`0x10FFFF` まで Unicode コードポイントを利用できます。単純な Unicode エスケープを使用して同じ結果を得るには、多くの場合要素を半分に分け、サロゲートペアにする必要があります。

{{jsxref("String.fromCodePoint()")}} や {{jsxref("String.prototype.codePointAt()")}} も参考にしてください。

```js-nolint
"\u{2F804}"

// 単純な Unicode エスケープでも同じです。
"\uD87E\uDC04"
```

## String オブジェクト

文字列値に対して直接メソッドを呼び出すことができます。

```js
console.log("hello".toUpperCase()); // HELLO
```

以下のメソッドが文字列 ({{jsxref("String")}}) 値で利用できます。

- 問い合わせ: 文字または文字コードを、特定の文字列インデックスで取得します。メソッドとしては {{jsxref("String/at", "at()")}}, {{jsxref("String/charAt", "charAt()")}}, {{jsxref("String/charCodeAt", "charCodeAt()")}}, {{jsxref("String/codePointAt", "codePointAt()")}} があります。
- 検索: パターンに適合する部分文字列の情報を取得したり、具体的な部分文字列が存在するかどうかを検査したりします。メソッドとしては {{jsxref("String/indexOf", "indexOf()")}}, {{jsxref("String/lastIndexOf", "lastIndexOf()")}}, {{jsxref("String/startsWith", "startsWith()")}}, {{jsxref("String/endsWith", "endsWith()")}}, {{jsxref("String/includes", "includes()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}} {{jsxref("String/search", "search()")}} があります。
- 合成: 文字列をより長い文字列に合成します。メソッドとしては {{jsxref("String/padStart", "padStart()")}}, {{jsxref("String/padEnd", "padEnd()")}}, {{jsxref("String/concat", "concat()")}}, {{jsxref("String/repeat", "repeat()")}} があります。
- 分解: 文字列をより小さな文字列に分割します。メソッドとしては {{jsxref("String/split", "split()")}}, {{jsxref("String/slice", "slice()")}}, {{jsxref("String/substring", "substring()")}}, {{jsxref("String/substr", "substr()")}}, {{jsxref("String/trim", "trim()")}}, {{jsxref("String/trimStart", "trimStart()")}}, {{jsxref("String/trimEnd", "trimEnd()")}} があります。
- 変換: 現在の文字列のコンテンツに基づいて、新しい文字列を返します。メソッドとしては {{jsxref("String/toLowerCase", "toLowerCase()")}}, {{jsxref("String/toUpperCase", "toUpperCase()")}}, {{jsxref("String/toLocaleLowerCase", "toLocaleLowerCase()")}}, {{jsxref("String/toLocaleUpperCase", "toLocaleUpperCase()")}}, {{jsxref("String/normalize", "normalize()")}}, {{jsxref("String/toWellFormed", "toWellFormed()")}} があります。

文字列を操作する際に、文字列操作に重要な機能を提供して指定された他の 2 種類のオブジェクトがあります。 {{jsxref("RegExp")}} と {{jsxref("Intl")}} です。これらはそれぞれ、[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)と[国際化](/ja/docs/Web/JavaScript/Guide/Internationalization)で導入されています。

## テンプレートリテラル

[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)は式を埋め込むことができる文字列リテラルです。複数行の文字列や文字列の補間機能を使用することができます。

テンプレートリテラルは二重引用符または一重引用符のかわりにバッククォート (`` ` ``) （[抑音アクセント](https://en.wikipedia.org/wiki/Grave_accent)）文字で囲まれています。テンプレートリテラルにはプレースホルダーを含めることができます。プレースホルダーはドル記号と中括弧 (`${expression}`) によって示されます。

### 複数行

ソースに挿入された、あらゆる改行文字はテンプレートリテラルの一部となります。通常の文字列を使って複数行の文字列を取得するには、次のような構文を使用しなければなりません。

```js
console.log(
  "文字列のテキスト行 1\n\
文字列のテキスト行 2",
);
// "文字列のテキスト行 1
// 文字列のテキスト行 2"
```

複数行の文字列と同じ結果を得たければ、次のように書くことができます。

```js
console.log(`文字列のテキスト行 1
文字列のテキスト行 2`);
// "文字列のテキスト行 1
// 文字列のテキスト行 2"
```

### 組み込み式

通常の文字列内に式を埋め込むには、次のような構文を用います。

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

テンプレートリテラルを使えば、糖衣構文を利用してこれをより読みやすくすることができます。

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

詳細については、[JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)内の[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)をご覧ください。

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}
