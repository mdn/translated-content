---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
tags:
  - Date
  - JavaScript
  - Method
  - Reference
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Date/parse
---
<div>{{JSRef}}</div>

<p><strong><code>Date.parse()</code></strong> メソッドは、日時を表す文字列を解釈し、協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 からの経過時間を表すミリ秒単位の数値を返します。または、文字列を解釈できなかったり不正な日付 (例えば 2015-02-31) が指定された場合 <code>NaN</code> を返します。</p>

<p>ES5 に準拠して実装されるまで <code>Date.parse</code> の使用は推奨されません。文字列の解釈は全体的に実装依存です。これらには多くの異なる実装があり、文字列の解釈が異なることがあるため、日付の文字列は手動で解釈するべきです (多くの異なる書式に対応したライブラリの使用が助けになるでしょう)。</p>

<div>{{EmbedInteractiveExample("pages/js/date-parse.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>直接呼び出し:</p>

<pre class="syntaxbox">Date.parse(<var>dateString</var>)
</pre>

<p>暗黙の呼び出し:</p>

<pre class="syntaxbox">new Date(<var>dateString</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>dateString</var></code></dt>
 <dd><a href="http://tools.ietf.org/html/rfc2822#section-3.3">RFC2822</a> または (派生の) ISO 8601 の日付を表す文字列。 (他の書式も使用することができますが、結果は実装依存になります。)</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 UTC からの経過時間をミリ秒単位で表す数値。このメソッドに与えられた日付を表す文字列の解釈により取得される日付。引数に正しい値が与えられない場合、 {{jsxref("NaN")}} を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>parse()</code> メソッドは、日時の文字列 (例えば "<code>2011-10-10T14:48:00</code>") を取り、協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 からのミリ秒単位の経過時間を表す数値を返します。</p>

<p>この関数は、例えば {{jsxref("Date.prototype.setTime()", "setTime()")}} メソッドと {{jsxref("Global_Objects/Date", "Date")}} オブジェクトを組み合わせて使う場合など、文字列値を基にして日時の値を設定するときに有用です。。</p>

<h3 id="Date_Time_String_Format" name="Date_Time_String_Format">日付と時刻の文字列書式</h3>

<p>日時文字列の標準的な文字列表現は、 ISO 8601 のカレンダー日付拡張形式を簡略化したものです。 (詳しくは、 ECMAScript 仕様書の <a href="https://tc39.github.io/ecma262/#sec-date-time-string-format">Date Time String Format</a> の章を参照してください。)</p>

<p>例えば, "<code>2011-10-10</code>" (<em>日付のみ</em>の形式), "<code>2011-10-10T14:48:00</code>" (<em>日時</em>形式), "<code>2011-10-10T14:48:00.000+09:00</code>" (<em>日時</em>形式にミリ秒とタイムゾーンがついたもの) を渡し、解釈することができます。タイムゾーンのオフセットがない場合は、日付のみの形式では UTC 時刻と解釈され、日時形式では地方時として解釈されます。</p>

<p>タイムゾーン指定子は、日付文字列の解析中に引数を解釈するために使用されますが、返される値は常に、 1970 年 1 月 1 日 00:00:00:00 UTC と、引数で表される時点との間のミリ秒数または <code>NaN</code> です。</p>

<p><code>parse()</code> は {{jsxref("Date")}} の静的メソッドですので、 {{jsxref("Date")}} のメソッドとしてではなく <code>Date.parse()</code> として呼び出されます。</p>

<h3 id="Fall-back_to_implementation-specific_date_formats" name="Fall-back_to_implementation-specific_date_formats">実装依存の日付形式へのフォールバック</h3>

<div class="blockIndicator note">
<p>この節では実装依存の動作を説明しており、実装間で一貫性がない可能性があります。</p>
</div>

<p>ECMAScript 仕様書は、文字列が標準の書式に準拠していない場合、この関数は実装固有の検出方法や実装固有の解析アルゴリズムにフォールバックすることがあり、解釈できない文字列や ISO 書式文字列における不正な要素値を含む日付を渡すと、 <code>Date.parse()</code> が {{jsxref("NaN")}} を返すと既定しています。</p>

<p>しかし、 ECMA-262 で定義されている簡略化 ISO 書式として解釈できない日付文字列の無効な値は、ブラウザーや与えられた値に依存して、 {{jsxref("NaN")}} を返したり返さなかったりすることがあります。次の例を参照してください。</p>

<pre class="brush: js">// 不正な値を持つ 非 ISO 文字列
new Date('23/25/2014');
</pre>

<p>これは、 Firefox 30 では、地方時の 2015 年 11 月 25 日として扱われ、 Safari 7 では不正な値として処理されます。</p>

<p>しかし、文字列が ISO 書式の文字列として解釈され、不正な値を含む場合、 ES5 以降の仕様に準拠するすべてのブラウザーが {{jsxref("NaN")}} を返します。</p>

<pre class="brush: js">// 不正な値を持つ ISO 文字列
new Date('2014-25-23').toISOString();
// ES5 準拠のすべてのブラウザーが "RangeError: invalid date" を返す
</pre>

<p>SpiderMonkey の実装特有のヒューリスティックは、<a href="https://dxr.mozilla.org/mozilla-central/source/js/src/jsdate.cpp?rev=64553c483cd1#889"><code>jsdate.cpp</code></a> にあります。 "<code>10 06 2014</code>" の文字列は、非 ISO 書式の例として挙げられており、このようにカスタム処理にフォールバックされます。この解釈の動作を説明する<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1023155#c6">およそのアウトライン</a> も参照してください。</p>

<pre class="brush: js">new Date('10 06 2014');
</pre>

<p>これは、2014 年 6 月 10 日ではなく、地方時の 2014 年 10 月 6 日 として扱われます。</p>

<p>他の例です。</p>

<pre class="brush: js">new Date('foo-bar 2014').toString();
// 返値: "Invalid Date"

Date.parse('foo-bar 2014');
// 返値: NaN
</pre>

<h3 id="Differences_in_assumed_time_zone" name="Differences_in_assumed_time_zone">想定されるタイムゾーンの違い</h3>

<div class="blockIndicator note">
<p>この節では実装依存の動作を説明しており、実装間で一貫性がない可能性があります。</p>
</div>

<p>標準外の日付文字列である "<code>March 7, 2014</code>" を渡すと、 <code>parse()</code> はタイムゾーンとして地方時を想定しますが、 "<code>2014-03-07</code>" のような ISO 書式を与えると UTC をタイムゾーンとして想定します (ES5 および ECMAScript 2015 の仕様)。したがって、これらの文字列を使用して生成される {{jsxref("Date")}}} オブジェクトは、システムが UTC の地方時に設定されていない限り、対応している ECMAScript のバージョンによって異なる時刻を表す可能性があります。つまり、同じように見える 2 つの日付文字列が、変換される文字列の形式によって 2 つの異なる値になる可能性があるということです。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Date.parse" name="Using_Date.parse"><code>Date.parse()</code> の使用</h3>

<p>以下の呼び出しはすべて <code>1546300800000</code> を返します。最初のものは ES5 によれば UTC 時刻を意味し、それ以外は ISO 日付仕様 (<code>Z</code> および <code>+00:00</code>) に従って UTC をタイムゾーンを指定しています。</p>

<pre class="brush: js">Date.parse("2019-01-01")
Date.parse("2019-01-01T00:00:00.000Z")
Date.parse("2019-01-01T00:00:00.000+00:00")
</pre>

<p>以下の呼び出しではタイムゾーンを指定していないので、システムの地方時で 2019-01-01 の 00:00:00 に設定されます。</p>

<pre class="brush: js">Date.parse("2019-01-01T00:00:00")
</pre>

<h3 id="Non-standard_date_strings" name="Non-standard_date_strings">標準外の日付文字列</h3>

<div class="blockIndicator note">
<p>この節では実装依存の動作を説明しており、実装間で一貫性がない可能性があります。</p>
</div>

<p><code>IPOdate</code> が既存の {{jsxref("Date")}} オブジェクトならば、次のようにして、これを 1995 年 8 月 9 日 (地方時) にセットできます:</p>

<pre class="brush: js">IPOdate.setTime(Date.parse('Aug 9, 1995'));
</pre>

<p>それ以外の標準外の日付文字列の解釈の例を示します。</p>

<pre class="brush: js">Date.parse('Aug 9, 1995');
</pre>

<p>GMT-0300 のタイムゾーンでは <code>807937200000</code> を返し、他のタイムゾーンでは他の値を返します。タイムゾーンが指定されておらず ISO 書式でないため、既定で地方時のタイムゾーンが使用されます。</p>

<pre class="brush: js">Date.parse('Wed, 09 Aug 1995 00:00:00 GMT');
</pre>

<p>GMT (UTC) が指定されているため、地方時のタイムゾーンに関係なく <code>807926400000</code> を返します。</p>

<pre class="brush: js">Date.parse('Wed, 09 Aug 1995 00:00:00');
</pre>

<p>GMT-0300 のタイムゾーンでは <code>807937200000</code> を返し、他のタイムゾーンでは他の値を返します。引数にタイムゾーンが指定されておらず、 ISO 書式ではないため、地方時として扱われます。</p>

<pre class="brush: js">Date.parse('Thu, 01 Jan 1970 00:00:00 GMT');
</pre>

<p>GMT (UTC) のタイムゾーンが指定されているため、地方時のタイムゾーンに関係なく <code>0</code> を返します。</p>

<pre class="brush: js">Date.parse('Thu, 01 Jan 1970 00:00:00');
</pre>

<p>GMT-0400 のタイムゾーンでは <code>14400000</code> を返し、他のタイムゾーンでは他の値を返します。タイムゾーンが指定されておらず、 ISO 書式ではないため、地方時のタイムゾーンが使用されます。</p>

<pre class="brush: js">Date.parse('Thu, 01 Jan 1970 00:00:00 GMT-0400');
</pre>

<p>GMT (UTC) のタイムゾーンが指定されているため、地方時のタイムゾーンに関係なく <code>14400000</code> を返します。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.parse', 'Date.parse')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.parse")}}</p>

<h3 id="Compatibility_notes" name="Compatibility_notes">互換性ノート</h3>

<ul>
 <li>Firefox 49 {{geckoRelease(49)}} で、2 桁の「年」の解釈が、 Internet Explorer に代わって Google Chrome ブラウザーに準拠するように変更されました。現在、 <code>50</code> 以下の 2 桁の「年」は 21 世紀の年として解釈されます。例えば <code>04/16/17</code> は、以前は 1917 年 4 月 16 日と解釈されていましたが、 2017 年 4 月 16 日と解釈されるようになりました。相互運用性の問題や年があいまいになることを回避するには、 ISO 8601 書式 ("<code>2017-04-16</code>" など) の使用が推奨されます (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1265136">bug 1265136</a>)。</li>
 <li>Google Chrome は数値の文字列を有効な <code><em>dateString</em></code> 引数として受け付けます。これは、すなわち、 <code>!!Date.parse("42")</code> は Firefox では <code>false</code> として評価されるのに対して、 Google Chrome では <code>true</code> として評価されます。 "<code>42</code>" は 2042 年 1 月 1 日と解釈されるからです。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date.UTC()")}}</li>
</ul>
