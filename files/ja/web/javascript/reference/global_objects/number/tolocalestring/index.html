---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
tags:
  - Internationalization
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
---
<div>{{JSRef}}</div>

<p><strong><code>toLocaleString()</code></strong> メソッドは、この数値を表す言語依存の文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}</div>



<p>新しい <code>locales</code> と <code>options</code> 引数で アプリケーションは フォーマット変換で使われる言語を指定でき、関数の振る舞いをカスタマイズできます。古い実装では、<code>locales</code> と <code>options</code> 引数は無視され、使われるロケールや返される文字列の形式は完全に実装依存です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><code><em>numObj</em>.toLocaleString(</code><code>[locales [, options]])</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>どのブラウザーが <code>locales</code> 引数と <code>options</code> 引数をサポートしているか確かめるために<a href="#Browser_compatibility">ブラウザー実装状況</a>セクションを調べてください。特徴検出のために<a href="#Checking_for_support_for_locales_and_options_arguments">例: locales 引数と options 引数をサポートしているか調べる</a>を調べてください。</p>

<div class="note">
<p><strong>注意:</strong> Firefox 29 で実装されている ECMAScript 国際化 API では、<code>locales</code> 引数が <code>Number.toLocaleString()</code> メソッドに追加されました。引数が {{jsxref("undefined")}} なら、このメソッドは OS によって指定されたローカライズされた数値を返します。Firefox の以前のバージョンでは、英語の数字が返されます。この変更はすぐに修正される可能性がある下位互換性に影響を与える回帰として報告されています。（{{bug(999003)}}）</p>
</div>

<div>{{page('/ja/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat', 'Parameters')}}</div>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>渡された数値を表す、言語依存の文字列です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toLocaleString" name="Using_toLocaleString"><code>toLocaleString</code> を使う</h3>

<p>ロケールを指定しない基本的な使用で、デフォルトロケールとデフォルトオプションのフォーマットされた文字列が返されます。</p>

<pre class="brush: js">var number = 3500;

console.log(number.toLocaleString()); // Displays "3,500" if in U.S. English locale
</pre>

<h3 id="Checking_for_support_for_locales_and_options_arguments" name="Checking_for_support_for_locales_and_options_arguments"><code>locales</code> 引数と <code>options</code> 引数をサポートしているか調べる</h3>

<p><code>locales</code> 引数と <code>options</code> 引数はまだすべてのブラウザーでサポートされておりません。不正な言語タグが {{jsxref("Global_Objects/RangeError", "RangeError")}} 例外で拒否される要件を使うことで、実装がすでにサポートしているかどうかを調べられます。</p>

<pre class="brush: js">function toLocaleStringSupportsLocales() {
  var number = 0;
  try {
    number.toLocaleString('i');
  } catch (e) {
    return e​.name === 'RangeError';
  }
  return false;
}
</pre>

<p>ES5.1 以前の実装では、引数を使って <code>toLocaleString</code> を呼んだ場合に {{jsxref("RangeError")}} 例外を throw する必要はありませんでした。</p>

<p>5.1 以前の ECMAScript をサポートしているものも含めたすべてのホストで動くチェックは、直接 <code>Number.prototype.toLocaleString</code> の地域オプションのサポートに必要な ECMA-402 で指定された機能をテストすることで行えます。</p>

<pre class="brush: js">function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' &amp;&amp; Intl &amp;&amp; typeof Intl.NumberFormat == 'function');
}</pre>

<p>上記のコードは、グローバル <code>Intl</code> オブジェクトが <code>null</code> でないことと、<code>Intl</code> オブジェクトが <code>NumberFormat</code> プロパティを持ち、それが関数であることをテストします。</p>

<h3 id="Using_locales" name="Using_locales"><code>locales</code> を使う</h3>

<p>この例ではローカライズされた数値変換のバリエーションのいくつかを示します。アプリケーションのユーザーインターフェイスで使われる言語の形式を得るために、<code>locales</code> 引数を用いている言語（そしておそらくいくつかのフォールバック言語）を明示することを確かめてください。</p>

<pre class="brush: js">var number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(number.toLocaleString('de-DE'));
// → 123.456,789

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(number.toLocaleString('ar-EG'));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(number.toLocaleString('en-IN'));
// → 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(number.toLocaleString(['ban', 'id']));
// → 123.456,789
</pre>

<h3 id="Using_options" name="Using_options"><code>options</code> を使う</h3>

<p><code>toLocaleString</code> によって得られる結果は <code>options</code> 引数を使用してカスタマイズできます。</p>

<pre class="brush: js">var number = 123456.789;

// request a currency format
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// limit to three significant digits
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000

// Use the host default language with options for number formatting
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// → "30,000.65" where English is the default language, or
// → "30.000,65" where German is the default language, or
// → "30 000,65" where French is the default language
</pre>

<h2 id="Performance" name="Performance">性能</h2>

<p>多数の数値をフォーマットするとき、{{jsxref("NumberFormat")}} オブジェクトを生成して {{jsxref("NumberFormat.format")}} プロパティによって得られる関数を使用するほうが良いです。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>初期定義です。JavaScript 1.5 で実装されました。</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.7.4.3', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 1.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Number.prototype.toLocaleString', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("javascript.builtins.Number.toLocaleString")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.prototype.toString()")}}</li>
</ul>
