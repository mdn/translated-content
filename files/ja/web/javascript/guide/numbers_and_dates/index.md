---
title: 数値と日付
slug: Web/JavaScript/Guide/Numbers_and_dates
tags:
  - Calculation
  - Dates
  - FP
  - Floating Point
  - Floating-Point
  - Guide
  - Integer
  - JavaScript
  - Math
  - Numbers
  - Numeric
  - 'l10n:priority'
translation_of: Web/JavaScript/Guide/Numbers_and_dates
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}</div>

<p><span class="seoSummary">本章では、JavaScript で数値と日付の計算を実行するのに使われる概念、オブジェクト、関数について紹介します。</span>これには 10進数、2進数、16 進数数値を含むそれぞれの基数で表された数値を使用することや、数値の幅広い種類の数学的演算を実行するグローバル {{jsxref("Math")}} オブジェクトの使い方も含みます。</p>

<h2 id="Numbers" name="Numbers">数値</h2>

<p>JavaScript では、数値はすべて <a href="https://ja.wikipedia.org/wiki/Double-precision_floating-point_format">64 ビット倍精度浮動小数点数のフォーマットである IEEE 754</a> (すなわち、±2<sup>−1022</sup> と ±2<sup>+1023</sup> の間、もしくはおよそ ±10<sup>−308</sup> と ±10<sup>+308</sup> の間の数値、53 ビットの精度による) にしたがって実装されています。±2<sup>53</sup> − 1 までの整数は正確に表現できます。</p>

<p>浮動小数点数の表現に加えて、数値型は 3 つの記号的な値を持っています。 <code>+</code>{{jsxref("Infinity")}}、<code>-</code>{{jsxref("Infinity")}}、{{jsxref("NaN")}}（非数、not-a-number）です。</p>

<p>JavaScript に最近巨大な数値を表す {{jsxref("BigInt")}} が実装されました。 <code>BigInt</code> には注意事項があり、例えば、<code>BigInt</code> と {{jsxref("Number")}} の値は同じ演算で混ぜたり比較することができず、<code>BigInt</code> の値を {{jsxref("Math")}} オブジェクトで使用することもできません。</p>

<p>JavaScript における他のプリミティブ型との関わりについては、<a href="/ja/docs/Web/JavaScript/Data_structures">JavaScript のデータ型とデータ構造</a> もご覧ください。</p>

<p>4 種類の数値リテラル、10 進数、2 進数、8 進数、16 進数を使用することができます。</p>

<h3 id="Decimal_numbers" name="Decimal_numbers">10 進数</h3>

<pre class="brush: js notranslate">1234567890
42

// ゼロを先頭に使用するときは気をつけて:

0888 // 10 進数として 888 と解析される
0777 // Strict モードでない場合 8 進数として解析される (10 進数の 511 になる)
</pre>

<p>10 進数リテラルはゼロ (<code>0</code>) から始めて、それ以降に 10 進の桁を続けることが可能ですが、<code>0</code> に続くすべての数値が 8 より小さい場合、その数値は 8 進数として解析されることに注意してください。</p>

<h3 id="Binary_numbers" name="Binary_numbers">2 進数</h3>

<p>2 進数の構文では、先行ゼロの後に小文字または大文字の "B" を使います (<code>0b</code> または <code>0B</code>)。<code>0b</code> の後の数値が 0 または 1 ではない場合、 {{jsxref("SyntaxError")}}: "Missing binary digits after 0b"（0b の後に 2 進数の桁がありません） が発生します。</p>

<pre class="brush: js notranslate">var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607</pre>

<h3 id="Octal_numbers" name="Octal_numbers">8 進数</h3>

<p>8 進数の構文では、先頭にゼロを使用します。<code>0</code> の後の数値が 0 から 7 の範囲外の場合、数値は 10 進数として解釈されます。</p>

<pre class="brush: js notranslate">var n = 0755; // 493
var m = 0644; // 420
</pre>

<p>ECMAScript 5 における厳格モードでは上記の 8 進数記法を禁じています。8 進数記法は ECMAScript 5 仕様の一部ではありませんが、すべてのブラウザーで先行ゼロによる 8 進数記法をサポートしており、 <code>0644 === 420</code> や <code>"\045" === "%"</code> となります。ECMAScript 2015 ではまた、先行する <code>0o</code> を使う 8 進数構文をサポートしています。</p>

<pre class="brush: js notranslate">var a = 0o10; // ES2015: 8
</pre>

<h3 id="Hexadecimal_numbers" name="Hexadecimal_numbers">16 進数</h3>

<p>16 進数の構文では、先行ゼロの後に小文字または大文字の "X" を使います (<code>0x</code> または <code>0X</code>)。0x の後の数値が範囲 (0123456789ABCDEF) 外の場合、 {{jsxref("SyntaxError")}}: "Identifier starts immediately after numeric literal" (数値リテラルの直後に識別子があります) が発生します。</p>

<pre class="brush: js notranslate">0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
</pre>

<h3 id="Exponentation" name="Exponentation">指数表現</h3>

<pre class="brush: js notranslate">1E3   // 1000
2e6   // 2000000
0.1e2 // 10</pre>

<h2 id="Number_object" name="Number_object">Number オブジェクト</h2>

<p>組み込み {{jsxref("Number")}} オブジェクトは最大値、NaN、無限大といった数値定数のプロパティを持っています。これらのプロパティの値は変更できません。下記のように使用します:</p>

<pre class="brush: js notranslate">var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
</pre>

<p>自作した <code>Number</code> オブジェクトのプロパティではなく、上記の定義済み <code>Number</code> オブジェクトのプロパティを常に参照してください。</p>

<p>次の表は <code>Number</code> オブジェクトのプロパティの要約です。</p>

<table class="standard-table">
 <caption><code>Number</code> オブジェクトプロパティ</caption>
 <thead>
  <tr>
   <th scope="col">プロパティ</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Number.MAX_VALUE")}}</td>
   <td>表現可能な最大値。(<code>±1.7976931348623157e+308</code>)</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.MIN_VALUE")}}</td>
   <td>表現可能な最小値。(<code>±5e-324</code>)</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.NaN")}}</td>
   <td>非数を表す特別な値。</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.NEGATIVE_INFINITY")}}</td>
   <td>負の無限大を表す特別な値。オーバーフローした際に返されます。</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.POSITIVE_INFINITY")}}</td>
   <td>正の無限大を表す特別な値。オーバーフローした際に返されます。</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.EPSILON")}}</td>
   <td>{{jsxref("Number")}} オブジェクトで表現可能な、ある数とそれよりも大きい最小数との差分値 (計算機イプシロン)。(<code>2.220446049250313e-16</code>)</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.MIN_SAFE_INTEGER")}}</td>
   <td>JavaScript で正確に扱える最小の整数値。(−2<sup>53</sup> + 1, or <code>−9007199254740991</code>)</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.MAX_SAFE_INTEGER")}}</td>
   <td>JavaScript で正確に扱える最大の整数値。(+2<sup>53</sup> − 1, or <code>+9007199254740991</code>)</td>
  </tr>
 </tbody>
</table>

<table class="standard-table">
 <caption><code>Number</code> オブジェクトメソッド</caption>
 <thead>
  <tr>
   <th>メソッド</th>
   <th>説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Number.parseFloat()")}}</td>
   <td>文字列引数を解析し、浮動小数点数を返します。<br>
    グローバル関数 {{jsxref("parseFloat", "parseFloat()")}} と同等。</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.parseInt()")}}</td>
   <td>文字列引数を解析し、指定された根（基数）の整数を返します。<br>
    グローバル関数 {{jsxref("parseInt", "parseInt()")}} と同等。</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isFinite()")}}</td>
   <td>渡された値が有限数であるか否かを判定します。</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isInteger()")}}</td>
   <td>渡された値が整数であるか否かを判定します。</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isNaN()")}}</td>
   <td>渡された値が {{jsxref("Global_Objects/NaN", "NaN")}}（非数）であるか否かを判定します。原型となったグローバル関数 {{jsxref("Global_Objects/isNaN", "isNaN()")}} よりもロバストな（対応能力が強い）バージョン。</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isSafeInteger()")}}</td>
   <td>渡された値が正確に扱える整数であるか否かを判定します。</td>
  </tr>
 </tbody>
</table>

<p><code>Number</code> オブジェクトのプロトタイプは様々なフォーマットの <code>Number</code> オブジェクトから情報を取得するメソッドを提供します。次表は <code>Number.prototype</code> のメソッドの要約です。</p>

<table class="standard-table">
 <caption><code>Number.prototype</code> メソッド</caption>
 <thead>
  <tr>
   <th scope="col">メソッド</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Number.toExponential", "toExponential()")}}</td>
   <td>数値の指数表記を表す文字列を返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.toFixed", "toFixed()")}}</td>
   <td>数値の固定小数点表記を表す文字列を返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.toPrecision", "toPrecision()")}}</td>
   <td>特定の精度の固定小数点表記による数値を表す文字列を返します。</td>
  </tr>
 </tbody>
</table>

<h2 id="Math_object" name="Math_object">Math オブジェクト</h2>

<p>組み込み {{jsxref("Math")}} オブジェクトは数学定数および数学関数のためのプロパティとメソッドを有しています。例えば、<code>Math</code> オブジェクトの <code>PI</code> プロパティは π (3.141...) の値を持ちます。以下のようにアプリケーション内で使用できます。</p>

<pre class="brush: js notranslate">Math.PI
</pre>

<p>同様に、標準的な数学関数が <code>Math</code> のメソッドにあります。数学関数には、三角関数、対数、指数、およびその他の関数が含まれます。例えば、三角関数 sin を使用したい場合、下記のように記述します。</p>

<pre class="brush: js notranslate">Math.sin(1.56)
</pre>

<p><code>Math</code> のすべての三角関数メソッドはラジアンで引数を取ることに注意してください。</p>

<p>次表は <code>Math</code> オブジェクトメソッドの要約です。</p>

<table class="standard-table">
 <caption><code>Math</code> オブジェクトメソッド</caption>
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
   <td>{{jsxref("Math.sin", "sin()")}}, {{jsxref("Math.cos", "cos()")}}, {{jsxref("Math.tan", "tan()")}}</td>
   <td>標準三角関数。引数はラジアン。</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.asin", "asin()")}}, {{jsxref("Math.acos", "acos()")}}, {{jsxref("Math.atan", "atan()")}}, {{jsxref("Math.atan2", "atan2()")}}</td>
   <td>逆三角関数。戻り値はラジアン。</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sinh", "sinh()")}}, {{jsxref("Math.cosh", "cosh()")}}, {{jsxref("Math.tanh", "tanh()")}}</td>
   <td>双曲線三角関数。引数は双曲線角度。</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.asinh", "asinh()")}}, {{jsxref("Math.acosh", "acosh()")}}, {{jsxref("Math.atanh", "atanh()")}}</td>
   <td>逆双曲線三角関数。戻り値は双曲線角度。</td>
  </tr>
  <tr>
   <td>
    <p>{{jsxref("Math.pow", "pow()")}}, {{jsxref("Math.exp", "exp()")}}, {{jsxref("Math.expm1", "expm1()")}}, {{jsxref("Math.log10", "log10()")}}, {{jsxref("Math.log1p", "log1p()")}}, {{jsxref("Math.log2", "log2()")}}</p>
   </td>
   <td>指数と対数関数。</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.floor", "floor()")}}, {{jsxref("Math.ceil", "ceil()")}}</td>
   <td>引数以下の最大の整数値、引数以上の最小の整数値を返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.min", "min()")}}, {{jsxref("Math.max", "max()")}}</td>
   <td>カンマで区切られた数値リストの引数から最小値、最大値をそれぞれ返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.random", "random()")}}</td>
   <td>0 から 1 の間のランダムな数値を返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.round", "round()")}}, {{jsxref("Math.fround", "fround()")}}, {{jsxref("Math.trunc", "trunc()")}},</td>
   <td>丸めと切り捨て関数。</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sqrt", "sqrt()")}}, {{jsxref("Math.cbrt", "cbrt()")}}, {{jsxref("Math.hypot", "hypot()")}}</td>
   <td>平方根、立方根、引数の二乗の和の平方根を返す。</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sign", "sign()")}}</td>
   <td>数の符号、すなわち数が正、負またはゼロかどうかを返します。</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.clz32", "clz32()")}},<br>
    {{jsxref("Math.imul", "imul()")}}</td>
   <td>32 ビットのバイナリー表現にした場合の先行ゼロの個数を返す関数。<br>
    2 つの引数を C 言語のように 32 ビット乗算した結果を返す関数。</td>
  </tr>
 </tbody>
</table>

<p>他の多くのオブジェクトとは異なり、決して独自の <code>Math</code> オブジェクトを生成しないでください。常にビルトイン <code>Math</code> オブジェクトを使用してください。</p>

<h2 id="Date_object" name="Date_object">Date オブジェクト</h2>

<p>JavaScript には日付のためのデータ型がありません。しかし、アプリケーション内で日付を取り扱うための {{jsxref("Date")}} オブジェクトとそのメソッドが利用できます。 <code>Date</code> オブジェクトは日付の設定、取得、操作を行う多数のメソッドを有しています。このオブジェクトはいかなるプロパティも持ちません。</p>

<p>JavaScript は Java と同じように日付を取り扱います。2 つの言語は同様の日付用メソッドを多く持ち、両方の言語とも、Unix タイムスタンプが 1970 年 1 月 1 日 00:00:00 からの秒の数値であるのと同様に、1970 年 1 月 1 日 00:00:00 からのミリ秒の数値で日付を格納しています。</p>

<p><code>Date</code> オブジェクトの設定可能範囲は 1970 年 1 月 1 日 UTC 時間 に対し -100,000,000 日から 100,000,000 日までです。</p>

<p><code>Date</code> オブジェクトは次のように生成します。</p>

<pre class="brush: js notranslate">var dateObjectName = new Date([parameters]);
</pre>

<p>ここで <code>dateObjectName</code> は生成される <code>Date</code> オブジェクトの名前です。新しいオブジェクトか、あるいは既存のオブジェクトのプロパティにすることができます。</p>

<p><code>new</code> キーワードなしで <code>Date</code> を呼び出すと、単に現在の日付と時間を文字列表現にしたものを返します。</p>

<p>上記構文の <code>parameters</code> は以下のいずれかになります。</p>

<ul>
 <li>パラメータなし: 今日の日時を生成します。例えば、<code>today = new Date();</code></li>
 <li>次のような形式による日付を表す文字列: "月 日, 年 時:分:秒." 例えば、<code>var Xmas95 = new Date("December 25, 1995 13:30:00")</code>。時、分、秒を省略した場合、その値はゼロに設定されます。</li>
 <li>年、月、日に対応する整数の集合。例えば、<code>var Xmas95 = new Date(1995, 11, 25)</code></li>
 <li>年、月、日、時、分、秒に対応する整数の集合。例えば、<code>var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);</code></li>
</ul>

<h3 id="Methods_of_the_Date_object" name="Methods_of_the_Date_object">Date オブジェクトのメソッド</h3>

<p>日時を扱う <code>Date</code> オブジェクトのメソッドは下記のカテゴリに分類されます:</p>

<ul>
 <li>"set" メソッド、<code>Date</code> オブジェクト内の日時の値の設定を行うメソッド</li>
 <li>"get" メソッド、<code>Date</code> オブジェクトから日時を取得を行うメソッド</li>
 <li>"to" メソッド、<code>Date</code> オブジェクトから文字列値を返すメソッド</li>
 <li>"parse" と "UTC メソッド、<code>Date</code> 文字列を解析するメソッド</li>
</ul>

<p>"get" と "set" メソッドを使用して、秒、分、時、日、曜日、月、年をそれぞれ取得、設定できます。曜日を返す <code>getDay</code> メソッドはありますが、対応する <code>setDay</code> メソッドはありません。というのも、曜日は自動的に設定されるからです。これらのメソッドはそれぞれの値を表すのに下記の整数値を使用します:</p>

<ul>
 <li>秒と分: 0 〜 59</li>
 <li>時: 0 〜 23</li>
 <li>曜日: 0 （日曜日） 〜 6 （土曜日）</li>
 <li>日: 1 〜 31 （日）</li>
 <li>月: 0 （1 月） 〜 11 （12 月）</li>
 <li>年: 1900 年以降の年</li>
</ul>

<p>例えば、次の日付を定義してみます。</p>

<pre class="brush: js notranslate">var Xmas95 = new Date('December 25, 1995');
</pre>

<p>すると、<code>Xmas95.getMonth()</code> は 11 を返し、<code>Xmas95.getFullYear()</code> は 1995 を返します。</p>

<p><code>getTime</code> と <code>setTime</code> メソッドは日付を比較するのに便利です。<code>getTime</code> メソッドは <code>Date</code> オブジェクトに対して January 1, 1970, 00:00:00 からのミリ秒の数値を返します。</p>

<p>例えば、次のコードでは今年に残された日数を表示します。:</p>

<pre class="brush: js notranslate">var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // 月日を設定
endYear.setFullYear(today.getFullYear()); // 今年の年を設定
var msPerDay = 24 * 60 * 60 * 1000; // 一日をミリ秒に換算
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); // 今年の残り日数を返す
</pre>

<p>この例では、今日の日時を含む <code>today</code> と名付けられた <code>Date</code> オブジェクトを生成します。それから、<code>endYear</code> と名付けられた <code>Date</code> オブジェクトを生成し、年を今年に設定します。そして、1日あたりのミリ秒値を使って、<code>today</code> と <code>endYear</code> 間の日数を計算する際に <code>getTime</code> を使用し、そして日数に丸めます。</p>

<p><code>parse</code> メソッドは日付文字列から既存の <code>Date</code> オブジェクトに値を割り当てるのに便利です。例えば、次のコードは <code>parse</code> と <code>setTime</code> を使用し、日付の値を <code>IPOdate</code> オブジェクトに割り当てます:</p>

<pre class="brush: js notranslate">var IPOdate = new Date();
IPOdate.setTime(Date.parse('Aug 9, 1995'));
</pre>

<h3 id="Example" name="Example">例</h3>

<p>次の例では、<code>JSClock()</code> 関数がデジタル時計の形式で時刻を返します。</p>

<pre class="brush: js notranslate">function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = '' + ((hour &gt; 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = '12';
  temp += ((minute &lt; 10) ? ':0' : ':') + minute;
  temp += ((second &lt; 10) ? ':0' : ':') + second;
  temp += (hour &gt;= 12) ? ' P.M.' : ' A.M.';
  return temp;
}
</pre>

<p><code>JSClock</code> 関数は、はじめに <code>time</code> という名前の新しい <code>Date</code> オブジェクトを生成します。引数が与えられていないため、time は現在の日付と時刻で生成されます。次に、<code>getHours</code> および <code>getMinutes</code>、<code>getSeconds</code> メソッドを呼び出して、現在の時、分、秒を <code>hour</code>、<code>minute</code>、<code>second</code> に代入します。</p>

<p>続く 4 つの式は、時刻を基にした文字列値を組み立てます。最初の式は <code>temp</code> 変数を生成し、それに条件式を用いて値を代入します。<code>hour</code> が 12 よりも大きい場合は (<code>hour - 12</code>)、そうでない場合は単に hour を代入します。hour が 0 の場合は 12 になります。</p>

<p>次の式は、<code>minute</code> 値を <code>temp</code> に追加します。<code>minute</code> の値が 10 よりも小さい場合、条件式により先行ゼロの文字が追加されます。そうでない場合は区切りのコロン文字を追加します。そして秒の値を同じ方法で <code>temp</code> に追加します。</p>

<p>最後の条件式は、<code>hour</code> が 12 以上の場合、"P.M." を <code>temp</code> に追加します。そうでない場合は "A.M." を <code>temp</code> に追加します。</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}</p>
