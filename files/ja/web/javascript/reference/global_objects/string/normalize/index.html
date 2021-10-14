---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Unicode
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/String/normalize
---
<div>{{JSRef}}</div>

<p><strong><code>normalize()</code></strong> メソッドは、文字列の Unicode 正規化形式を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/string-normalize.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><code><var>str</var>.normalize([<var>form</var>])</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>form</var></code> {{optional_inline}}</dt>
 <dd>
 <p>Unicode 正規化形式を示す "<code>NFC</code>", "<code>NFD</code>", "<code>NFKC</code>", "<code>NFKD</code>" のうちの一つです。省略されたり {{jsxref("undefined")}} であったりした場合は "<code>NFC</code>" が使われます。</p>

 <p>これらの値には以下の意味があります。</p>

 <dl>
  <dt>"<code>NFC</code>"</dt>
  <dd>正規化形式 C。正準等価性によって分解され、再度合成される。</dd>
  <dt>"<code>NFD</code>"</dt>
  <dd>正規化形式 D。正準等価性によって分解される。</dd>
  <dt>"<code>NFKC</code>"</dt>
  <dd>正規化形式 KC。互換等価性によって分解され、正準等価性によって再度合成される。</dd>
  <dt>"<code>NFKD</code>"</dt>
  <dd>正規化形式 KD。互換等価性によって分解される。</dd>
 </dl>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた文字列の Unicode 正規化形式を含む文字列です。</p>

<h3 id="Errors_thrown" name="Errors_thrown">発生するエラー</h3>

<dl>
 <dt>{{jsxref("RangeError")}}</dt>
 <dd><code>form</code> が上記で指定された値のいずれでもない場合は {{jsxref("RangeError")}} が発生します。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>Unicode は個々の文字に対して、<em>コードポイント</em>と呼ばれる固有の値を割り当てています。例えば、 "<code>A</code>" のコードポイントは U+0041 が割り当てられています。しかし、複数のコードポイントや、コードポイントの一連の並びが、同一の抽象文字を表すことがあります。 — 例えば、 "<code>ñ</code>" の文字は以下のいずれかで表すことができます。</p>

<ul>
 <li>単一のコードポイント U+00F1</li>
 <li>"<code>n</code>" のコードポイント (U+006E) に続いて組み合わせチルダのコードポイント (U+0303)</li>
</ul>

<pre class="brush: js">let string1 = '\u00F1';
let string2 = '\u006E\u0303';

console.log(string1);  //  ñ
console.log(string2);  //  ñ
</pre>

<p>しかし、コードポイントが異なるため、文字列の比較ではこれらが同じものとして扱われません。また、それぞれのコードポイントの数が異なるため、長さすら異なります。</p>

<pre class="brush: js">let string1 = '\u00F1';            // ñ
let string2 = '\u006E\u0303';      // ñ

console.log(string1 === string2); // false
console.log(string1.length);      // 1
console.log(string2.length);      // 2
</pre>

<p><code>normalize()</code> メソッドは、同じ文字を表すコードポイントのすべての並びを共通の正規化された形式に文字列を変換することで、この問題を解決するのに役立ちます。正規化の方法は主に二つがあり、一つは<strong>正準等価性</strong>に、もう一つは<strong>互換等価性</strong>に基づきます。</p>

<h3 id="Canonical_equivalence_normalization" name="Canonical_equivalence_normalization">正準等価性による正規化</h3>

<p>Unicode では、二つのコードポイントの並びが同じ抽象文字を表していれば、正準等価性があるとされ、常に同じ外見表示と動作をするべきです (例えば、並べ替えで常に同じものとして扱うべきです)。</p>

<p><code>normalize()</code> を "<code>NFD</code>" または "<code>NFC</code>" の引数で使用することで、すべてが正準等価な文字列となる文字列の形を生成することができます。以下の例では、文字 "<code>ñ</code>" の二つの表現を正規化しています。</p>

<pre class="brush: js">let string1 = '\u00F1';           // ñ
let string2 = '\u006E\u0303';     // ñ

string1 = string1.normalize('NFD');
string2 = string2.normalize('NFD');

console.log(string1 === string2); // true
console.log(string1.length);      // 2
console.log(string2.length);      // 2
</pre>

<h4 id="Composed_and_decomposed_forms" name="Composed_and_decomposed_forms">合成形と分解形</h4>

<p>"<code>NFD</code>" で正規化された形の長さが <code>2</code> であることに注意してください。 "<code>NFD</code>" は<strong>分解</strong>正規形を生成するからであり、これは単一のコードポイントを複数のコードポイントの組み合わせに分解します。 "<code>ñ</code>" の分解正規形は "<code>\u006E\u0303</code>" です。</p>

<p>"<code>NFC</code>" を指定すると<strong>合成</strong>正規形を取得することができ、これは複数のコードポイントを可能な限り単一のコードポイントで置き換えます。 "<code>ñ</code>" の合成正規形は "<code>\u00F1</code>" です。</p>

<pre class="brush: js">let string1 = '\u00F1';                           // ñ
let string2 = '\u006E\u0303';                     // ñ

string1 = string1.normalize('NFC');
string2 = string2.normalize('NFC');

console.log(string1 === string2);                 // true
console.log(string1.length);                      // 1
console.log(string2.length);                      // 1
console.log(string2.codePointAt(0).toString(16)); // f1</pre>

<h3 id="Compatibility_normalization" name="Compatibility_normalization">互換正規形</h3>

<p>Unicode では、二つのコードポイントの並びが、同じ抽象文字を表す場合に互換性があり、場合によっては同じ文字として扱われるべきですが、すべてのアプリケーションでそうするべきとは限らないことがあります。</p>

<p>すべての正準等価な並びは互換といえますが、逆はそうとはいえません。</p>

<p>例を挙げます。</p>

<ul>
 <li>コードポイント U+FB00 は{{Glossary("ligature", "合字")}} "<code>ﬀ</code>" を表します。これは二つの連続したコードポイント U+0066 ("<code>ff</code>") と互換性があります。</li>
 <li>コードポイント U+24B9 は、記号 <code>"Ⓓ"</code> を表します。これは U+0044 のコードポイント ("<code>D</code>") と互換性があります。</li>
</ul>

<p>場面によっては (並べ替えなど) 同じものとしてみなされるべきであり、その他の場合は (外見など) 同じとするべきではないので、これらは厳密には等しくありません。</p>

<p><code>normalize()</code> を "<code>NFKD</code>" または "<code>NFKC</code>" を引数にして使用することで、互換等価な文字列が同じになる形の文字列を生成することができます。</p>

<pre class="brush: js">let string1 = '\uFB00';
let string2 = '\u0066\u0066';

console.log(string1);             // ﬀ
console.log(string2);             // ff
console.log(string1 === string2); // false
console.log(string1.length);      // 1
console.log(string2.length);      // 2

string1 = string1.normalize('NFKD');
string2 = string2.normalize('NFKD');

console.log(string1);             // ff &lt;- 外見が変わった
console.log(string2);             // ff
console.log(string1 === string2); // true
console.log(string1.length);      // 2
console.log(string2.length);      // 2
</pre>

<p>互換等価な正規化を適用する際には、正規化された形式がすべてのアプリケーションに適しているとは限らないので、文字列で何をしようとしているのかを考慮することが重要です。上の例では、ユーザーが "<code>f</code>" を検索すれば文字列を見つけることができるので、正規化は検索に適しています。しかし、視覚的な表現が異なるため、表示には適切ではないかもしれません。</p>

<p>正準等価な正規化のように、分解形または合成形の互換等価形式は、それぞれ "<code>NFKD</code>" または "<code>NFKC</code>" を渡すことで問い合わせることができます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_normalize" name="Using_normalize"><code>normalize()</code> を使う</h3>

<pre class="brush: js">// 最初の文字列

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
let str = '\u1E9B\u0323';


// Canonically-composed form (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize('NFC'); // '\u1E9B\u0323'
str.normalize();      // same as above


// Canonically-decomposed form (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize('NFD'); // '\u017F\u0323\u0307'


// Compatibly-composed (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize('NFKC'); // '\u1E69'


// Compatibly-decomposed (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize('NFKD'); // '\u0073\u0323\u0307'
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.normalize', 'String.prototype.normalize')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.normalize")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.unicode.org/reports/tr15/">Unicode Standard Annex #15, Unicode Normalization Forms</a></li>
 <li><a href="http://en.wikipedia.org/wiki/Unicode_equivalence">Unicode equivalence</a></li>
</ul>
