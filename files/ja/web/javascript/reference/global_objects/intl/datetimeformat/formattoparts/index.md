---
title: DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
---
<div>{{JSRef}}</div>

<p><strong><code>Intl.DateTimeFormat.prototype.formatToParts()</code></strong> メソッドは、ロケールを意識した <code>DateTimeFormat</code> フォーマッターが生成する文字列のロケールを考慮した書式化を可能にします。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateTimeFormat</var>.formatToParts(<var>date</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>date</code> {{optional_inline}}</dt>
 <dd>書式化する日付。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>書式化された日付のパーツを含むオブジェクトの {{jsxref("Array")}} です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>formatToParts()</code> メソッドは、日付文字列のフォーマットをカスタマイズするときに役立ちます。これは、ロケール特有の部分を保持しながら、カスタム文字列を構築できるロケール特有のトークンを含むオブジェクトの {{jsxref("Array")}} を返します。<code>formatToParts()</code> メソッドが返却する構造は、このようになります。</p>

<pre class="brush: js notranslate">[
  { type: 'day', value: '17' },
  { type: 'weekday', value: 'Monday' }
]</pre>

<p>渡される可能性がある type は以下のとおりです。</p>

<dl>
 <dt>day</dt>
 <dd>日付として使用される文字列。たとえば、 "<code>17</code>"。</dd>
 <dt>dayPeriod</dt>
 <dd>日付期間として使用される文字列。たとえば、 "<code>AM</code>", "<code>PM</code>", "<code>in the morning</code>", "<code>noon</code>" など。</dd>
 <dt>era</dt>
 <dd>時代として使用される文字列。たとえば、"<code>BC</code>" や "<code>AD</code>"。</dd>
 <dt>fractionalSecond</dt>
 <dd>小数点以下の秒として使用される文字列です。例えば "<code>0</code>" や "<code>00</code>" や "<code>000</code>" です。</dd>
 <dt>hour</dt>
 <dd>時刻として使用される文字列。たとえば "<code>3</code>" や "<code>03</code>"。</dd>
 <dt>literal</dt>
 <dd>日付や時刻の区切りとして使用される文字列。たとえば "<code>/</code>"、"<code>,</code>"、"<code>o'clock</code>"、"<code>de</code>"。</dd>
 <dt>minute</dt>
 <dd>分として使用される文字列。たとえば、"<code>00</code>"。</dd>
 <dt>month</dt>
 <dd>月として使用される文字列。たとえば、"<code>12</code>"。</dd>
 <dt>relatedYear</dt>
 <dd>カレンダーの表現が year ではなくyearNameである場合、関連する4桁のグレゴリオ暦の年に使用される文字列です。例えば "<code>2019</code>" です。</dd>
 <dt>second</dt>
 <dd>秒として使用される文字列。たとえば、"<code>07</code>" や "<code>42</code>"。</dd>
 <dt>timeZoneName</dt>
 <dd>タイムゾーン名として使用される文字列。たとえば、"<code>UTC</code>"。</dd>
 <dt>weekday</dt>
 <dd>曜日として使用される文字列。たとえば、"<code>M</code>" や "<code>Monday</code>"、"<code>Montag</code>"。</dd>
 <dt>year</dt>
 <dd>年として使用される文字列。たとえば、"<code>2012</code>" や "<code>96</code>"。</dd>
 <dt>yearName</dt>
 <dd>関連するコンテキストで yearName に使用される文字列、例えば "<code>geng-zi</code>" など。</dd>
</dl>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>この機能のポリフィルは、<a href="https://github.com/zbraniecki/proposal-intl-formatToParts">提案リポジトリ</a>から利用できます。</p>

<h2 id="Examples" name="Examples">例</h2>

<p><code>DateTimeFormat</code> は、直接操作できないローカライズされた透過的でない文字列を出力します。</p>

<pre class="brush: js notranslate">var date = Date.UTC(2012, 11, 17, 3, 0, 42);

var formatter = new Intl.DateTimeFormat('en-us', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  fractionalSecondDigits: 3,
  hour12: true,
  timeZone: 'UTC'
});

formatter.format(date);
// "Monday, 12/17/2012, 3:00:42.000 AM"
</pre>

<p>しかし、多くのユーザーインターフェイスでは、この文字列の書式をカスタマイズしたいという要望があります。 <code>formatToParts</code> メソッドは、文字列を部品単位で提供することで、 <code>DateTimeFormat</code> フォーマッターによって生成された文字列のロケールを意識した書式設定ができるようになります。</p>

<pre class="brush: js notranslate">formatter.formatToParts(date);

// return value:
[
  { type: 'weekday',   value: 'Monday' },
  { type: 'literal',   value: ', '     },
  { type: 'month',     value: '12'     },
  { type: 'literal',   value: '/'      },
  { type: 'day',       value: '17'     },
  { type: 'literal',   value: '/'      },
  { type: 'year',      value: '2012'   },
  { type: 'literal',   value: ', '     },
  { type: 'hour',      value: '3'      },
  { type: 'literal',   value: ':'      },
  { type: 'minute',    value: '00'     },
  { type: 'literal',   value: ':'      },
  { type: 'second',    value: '42'     },
  { type: 'fractionalSecond', value: '000' },
  { type: 'literal',   value: ' '      },
  { type: 'dayPeriod', value: 'AM'     }
]
</pre>

<p>これで情報は個別に利用可能になり、カスタマイズされた方法で再び書式化して連結することができます。例えば、{{jsxref("Array.prototype.map()")}}、<a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a>、 <a href="/ja/docs/Web/JavaScript/Reference/Statements/switch">switch 文</a>、<a href="/ja/docs/Web/JavaScript/Reference/Template_literals">テンプレートリテラル</a>、 {{jsxref("Array.prototype.reduce()")}} などを使用しています。</p>

<pre class="brush: js notranslate">var dateString = formatter.formatToParts(date).map(({type, value}) =&gt; {
  switch (type) {
    case 'dayPeriod': return `&lt;b&gt;${value}&lt;/b&gt;`;
    default : return value;
  }
}).reduce((string, part) =&gt; string + part);
</pre>

<p>これにより、 <code>formatToParts()</code> メソッドを使用する際に、日の部分が太字になります。</p>

<pre class="brush: js notranslate">console.log(formatter.format(date));
// "Monday, 12/17/2012, 3:00:42.000 AM"

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42.000 &lt;b&gt;AM&lt;/b&gt;"</pre>

<h3 id="Named_Years_and_Mixed_calendars" name="Named_Years_and_Mixed_calendars">名前付きの年と混合カレンダー</h3>

<p>いくつかのケースでは、暦は名前付きの年を使用しています。 例えば、中国やチベットの暦では、60年周期の<a href="https://ja.wikipedia.org/wiki/%E5%B9%B2%E6%94%AF">干支</a>を使用しています。これらの年は、グレゴリオ暦の年と関連付けて識別されます。このような場合、 <code>formatToParts()</code> の結果は、通常は年が存在するはずなのに、年の項目ではなく、4桁のグレゴリオ暦の年を含む relatedYear のエントリを含むことになります。バッグの中の項目を (任意の値で) <code>year</code> に設定すると、年と <code>yearName</code> グレゴリオ暦の <code>relatedYear</code> の両方が得られます。</p>

<pre class="brush: js notranslate">let opts = { year: "numeric", month: "numeric", day: "numeric" };
let df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value
[
  { type: 'relatedYear', value: '2012' },
  { type: 'literal', value: '年' },
  { type: 'month', value: '十一月' },
  { type: 'day', value: '4' }
]
</pre>

<p><code>year</code> オプションがバッグ内で設定されていない場合 (任意の値に設定されている場合)、結果には <code>relatedYear</code> のみが含まれます。</p>

<pre class="brush: js notranslate">let df = new Intl.DateTimeFormat("zh-u-ca-chinese");
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// 返値
[
   { type: 'relatedYear', value: '2012' },
   { type: 'literal', value: '年' },
   { type: 'month', value: '十一月' },
   { type: 'day', value: '4' }
]
</pre>

<p><code>year</code> を出力したい場合は、 <code>.format()</code> は一般的にこれらを並べて表示することができます。</p>

<pre class="brush: js notranslate">let df = new Intl.DateTimeFormat("zh-u-ca-chinese", {year: "numeric"});
df.format(Date.UTC(2012, 11, 17, 3, 0, 42));

// 返値
2012壬辰年</pre>

<p>これにより、ロケールとカレンダーを両方の <code>format</code> で混在させることも可能になります。</p>

<pre class="brush: js notranslate">let df = new Intl.DateTimeFormat("en-u-ca-chinese", {year: "numeric"});
let date = Date.UTC(2012, 11, 17, 3, 0, 42);
df.format(date);

// 返値
2012(ren-chen)
</pre>

<p>および <code>formatToParts</code> の場合</p>

<pre class="brush: js notranslate">let opts = {month: 'numeric', day: 'numeric', year: "numeric"};
let df = new Intl.DateTimeFormat("en-u-ca-chinese", opts);
let date = Date.UTC(2012, 11, 17, 3);
df.formatToParts(date)

// 返値
[
  { type: 'month', value: '11' },
  { type: 'literal', value: '/' },
  { type: 'day', value: '4' },
  { type: 'literal', value: '/' },
  { type: 'relatedYear', value: '2012' }
]
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
   <td>{{SpecName('ES Int Draft', '#sec-Intl.DateTimeFormat.prototype.formatToParts', 'Intl.DateTimeFormat.prototype.formatToParts')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Intl.DateTimeFormat.formatToParts")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}</li>
 <li>{{jsxref("DateTimeFormat.format", "Intl.DateTimeFormat.prototype.format")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleTimeString()")}}</li>
</ul>
