---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
tags:
  - Date
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
  - メソッド
  - 国際化
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
---
<div>{{JSRef}}</div>

<p><strong><code>toLocaleTimeString()</code></strong> メソッドは、この Date オブジェクトの「時刻」部を表す言語に依存した文字列を返します。新しい <code>locales</code> 引数と <code>options</code> 引数により、アプリケーションは、使用される書式変換の言語の指定や、関数の振る舞いのカスタマイズができます。古い実装のアプリケーションは、<code>locales</code> 引数と <code>options</code> 引数を無視します。使用されるロケールや返される文字列の書式は、完全に実装依存です。</p>

<div>{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.toLocaleTimeString([<var>locales</var>[, <var>options</var>]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p><code>locales</code> および <code>options</code> 引数は、関数の動作をカスタマイズし、使用される書式の慣習を言語で指定することができるににします。 <code>locales</code> および <code>options</code> 引数を無視する実装では、使用されるロケールおよび返される文字列の書式は完全に実装依存になります。</p>

<p>これらの引数やその使い方についての詳細は、 {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} コンストラクターを参照してください。</p>

<p>時刻のそれぞれの部分のプロパティにおける既定値は {{jsxref("undefined")}} ですが、 <code>hour</code>、 <code>minute</code>、<code>second</code> プロパティがすべて {{jsxref("undefined")}} のときは、<code>hour</code>、<code>minute</code>、<code>second</code> は <code>"numeric"</code> とみなされます。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた {{jsxref("Global_Objects/Date", "Date")}} インスタンスの「時刻」部を表す、言語特有の慣習による文字列。</p>

<h2 id="Performance" name="Performance">性能</h2>

<p>大量の日付を書式化する場合は、 {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} オブジェクトを生成してその {{jsxref("DateTimeFormat.prototype.format", "format")}} プロパティで提供される関数を使用したほうが得策です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toLocaleTimeString" name="Using_toLocaleTimeString">toLocaleTimeString() の使用</h3>

<p>ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションによる書式の文字列が返されます。</p>

<pre class="brush: js notranslate">var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() に引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
console.log(date.toLocaleTimeString());
// → "7:00:00 PM" アメリカ/ロサンゼルスのタイムゾーンの en-US ロケールで実行した場合
</pre>

<h3 id="Checking_for_support_for_locales_and_options_arguments" name="Checking_for_support_for_locales_and_options_arguments">locales と options の各引数に対応しているか確認する</h3>

<p><code>locales</code> および <code>options</code> 引数は、まだすべてのブラウザーが対応しているわけではありません。これらが実装されているかどうかをチェックするには、不適切な言語タグを与えると {{jsxref("RangeError")}} 例外で拒否されるという要件を使用することができます。</p>

<pre class="brush: js notranslate">function toLocaleTimeStringSupportsLocales() {
  try {
    new Date().toLocaleTimeString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
</pre>

<h3 id="Using_locales" name="Using_locales">locales の使用</h3>

<p>この例では、国ごとに異なる時刻書式を示します。アプリケーションのユーザーインターフェイスで使用されている言語の書式を得るには、 <code>locales</code> 引数でその言語 (あるいはフォールバック先の言語) を指定してください。</p>

<pre class="brush: js notranslate">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は AM/PM 表記の 12 時間制
console.log(date.toLocaleTimeString('en-US'));
// → "7:00:00 PM"

// 英国英語は AM/PM 表記なしの 24 時間制
console.log(date.toLocaleTimeString('en-GB'));
// → "03:00:00"

// 韓国は AM/PM 表記の 12 時間制
console.log(date.toLocaleTimeString('ko-KR'));
// → "오후 12:00:00"

// 多くのアラビア語圏ではアラビア数字を使用
console.log(date.toLocaleTimeString('ar-EG'));
// → "<span dir="rtl">٧:٠٠:٠٠ م</span>"

// 対応していない可能性のある言語を要求した場合、例えば
// バリ語とし、フォールバック言語にインドネシア語を指定した場合
console.log(date.toLocaleTimeString(['ban', 'id']));
// → "11.00.00"
</pre>

<h3 id="Using_options" name="Using_options">options の使用</h3>

<p><code>toLocaleTimeString()</code> メソッドから得られる結果は、 <code>options</code> 引数でカスタマイズできます。</p>

<pre class="brush: js notranslate">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// アプリケーションで UTC を用い、それを表示したい場合
var options = { timeZone: 'UTC', timeZoneName: 'short' };
console.log(date.toLocaleTimeString('en-US', options));
// → "3:00:00 AM GMT"

// 米国でも 24 時間制を使うことがある
console.log(date.toLocaleTimeString('en-US', { hour12: false }));
// → "19:00:00"

// 既定のロケールのオプション - 空の配列を使用して時と分のみを表示
console.log(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
// → "20:01"

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
   <td>{{SpecName('ESDraft', '#sec-date.prototype.tolocaletimestring', 'Date.prototype.toLocaleTimeString')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sup-date.prototype.tolocaletimestring', 'Date.prototype.toLocaleTimeString')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.toLocaleTimeString")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toString()")}}</li>
</ul>
