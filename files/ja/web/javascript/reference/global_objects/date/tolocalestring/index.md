---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
tags:
  - Date
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
---
<div>{{JSRef}}</div>

<p><strong><code>toLocaleString()</code></strong> メソッドは、言語に合わせた日時の文字列を返します。</p>

<p>新しい <code><var>locales</var></code> と <code><var>options</var></code> の引数により、アプリケーションは使用される書式変換の言語の指定や、関数の振る舞いのカスタマイズをすることができます。</p>

<p>古い実装のアプリケーションは、 <code><var>locales</var></code> と <code><var>options</var></code> の引数を無視します。使用されるロケールや返される文字列の書式は、完全に実装依存です。</p>

<div>{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.toLocaleString([<var>locales</var>[, <var>options</var>]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>どのブラウザーが <code><var>locales</var></code> と <code><var>options</var></code> に対応しているのかは、<a href="#Browser_Compatibility">ブラウザーの互換性</a>をご覧ください。 <code><var>locales</var></code> と <code><var>options</var></code> を無視する実装では、使用されるロケールや返される文字列の書式は、完全に実装依存です。</p>

<p>これらの引数の詳細やその使用方法は、 {{jsxref("DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} コンストラクターを確認してください。</p>

<p>日時のそれぞれの部分のプロパティにおける既定値は {{jsxref("undefined")}} です。ただし、 <code>weekday</code>, <code>year</code>, <code>month</code>, <code>day</code> の各プロパティがすべて {{jsxref("undefined")}} のときは、 <code>year</code>, <code>month</code>, <code>day</code> は <code>"numeric"</code> とみなされます。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた文字列を言語特有の慣習によって表した文字列です。</p>

<h2 id="Performance" name="Performance">性能</h2>

<p>大量の日付を書式化する場合は、 {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} オブジェクトを生成してその {{jsxref("DateTimeFormat.prototype.format", "format")}} プロパティで提供される関数を使用したほうが得策です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toLocaleString" name="Using_toLocaleString">toLocaleString() の使用</h3>

<p>ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションによる書式の文字列が返されます。</p>

<pre class="brush: js notranslate">let date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() メソッドに引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
console.log(date.toLocaleString());
// → "12/11/2012, 7:00:00 PM" : アメリカ/ロサンゼルスのタイムゾーンの en-US ロケールで実行した場合
</pre>

<h3 id="Checking_for_support_for_locales_and_options_arguments" name="Checking_for_support_for_locales_and_options_arguments">locales と options に対応しているか確認する</h3>

<p><code><var>locales</var></code> と <code><var>options</var></code> は、まだすべてのブラウザーが対応している訳ではありません。これらが実装されているかどうかは、不適切な言語タグを与えて {{jsxref("RangeError")}} 例外で拒否されるかどうかで確かめられます。</p>

<pre class="brush: js notranslate">function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString('i');
  } catch (e) {
    return e instanceof RangeError;
  }
  return false;
}
</pre>

<h3 id="Using_locales" name="Using_locales">locales の使用</h3>

<p>この例では、国ごとに異なる日時の書式を示します。ご使用のアプリケーションのユーザーインターフェイスで使用される言語の書式を得るには、 <code><var>locales</var></code> でその言語 (あるいは代替言語) を指定してください。</p>

<pre class="brush: js notranslate">let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は月-日-年の順で AM/PM 表記の 12 時間制
console.log(date.toLocaleString('en-US'));
// → "12/19/2012, 7:00:00 PM"

// 英国英語は日-月-年の順で AM/PM 表記なしの 24 時間制
console.log(date.toLocaleString('en-GB'));
// → "20/12/2012 03:00:00"

// 韓国は年-月-日の順で AM/PM 表記の 12 時間制
console.log(date.toLocaleString('ko-KR'));
// → "2012. 12. 20. 오후 12:00:00"

// 多くのアラビア語圏ではアラビア数字を使用
console.log(date.toLocaleString('ar-EG'));
// → "<span dir="rtl">٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص</span>"

// 日本のアプリケーションでは元号を用いることがある
// 2012 年は平成 24 年
console.log(date.toLocaleString('ja-JP-u-ca-japanese'));
// → "24/12/20 12:00:00"

// 対応していない可能性のある言語を要求した場合、たとえば
// ここではバリ語とし、代替言語にインドネシア語
console.log(date.toLocaleString(['ban', 'id']));
// → "20/12/2012 11.00.00"
</pre>

<h3 id="Using_options" name="Using_options">options の使用</h3>

<p><code>toLocaleString()</code> メソッドから得られる結果は、<code><var>options</var></code> でカスタマイズできます。</p>

<pre class="brush: js notranslate">let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 曜日を加えて月とともに長い書式で表す
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(date.toLocaleString('de-DE', options));
// → "Donnerstag, 20. Dezember 2012"

// アプリケーションで UTC を用いてそれを示したい場合
options.timeZone = 'UTC';
options.timeZoneName = 'short';

console.log(date.toLocaleString('en-US', options));
// → "Thursday, December 20, 2012, GMT"

// 米国でも 24 時間制を使うことがある
console.log(date.toLocaleString('en-US', { hour12: false }));
// → "12/19/2012, 19:00:00"
</pre>

<h3 id="Avoid_comparing_formatted_date_values_to_static_values" name="Avoid_comparing_formatted_date_values_to_static_values">書式化した日付値を固定値と比較しないでください</h3>

<p>たいていの場合、 <code>toLocaleString()</code> が返す書式は一貫しています。しかし、これは将来的に変更される可能性があり、すべての言語で保証されているわけではありません。</p>

<p>特に注目すべきは、IE および Edge ブラウザーは日付の周りに書字方向の制御文字を挿入するため、出力テキストが他のテキストと連結されたときに適切に流れるようになっています。</p>

<p>このことから、 <code>toLocaleString()</code> を固定値と比較できると期待してはいけません。</p>

<pre class="brush: js; example-bad notranslate">"1/1/2019, 01:00:00" === new Date("2019-01-01T01:00:00Z").toLocaleString("en-US");
// true in Firefox and others
// false in IE and Edge</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: 詳細および例についてはこの <a href="https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results">StackOverflow のスレッド</a>をご覧ください。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleString')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sup-date.prototype.tolocalestring', 'Date.prototype.toLocaleString')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.toLocaleString")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toString()")}}</li>
</ul>
