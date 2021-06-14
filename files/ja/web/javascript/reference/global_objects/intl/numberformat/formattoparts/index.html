---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Method
  - NumberFormat
  - Prototype
  - メソッド
  - 国際化
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
---
<div>{{JSRef}}</div>

<p><strong><code>Intl.Numberformat.prototype.formatToParts()</code></strong> メソッドは <code>NumberFormat</code> フォーマッターによって生成された文字列のロケールに応じた書式設定を可能にします。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Intl.NumberFormat.prototype.formatToParts(number)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>number</code> {{optional_inline}}</dt>
 <dd>書式化する {{jsxref("Number")}} または {{jsxref("BigInt")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>書式化された数値を含む要素のオブジェクトの {{jsxref("Array")}}。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>formatToParts()</code> メソッドは、数値文字列のカスタム書式設定を行うときに便利です。ロケール固有のトークンを含むオブジェクトの {{jsxref("Array")}} を返します。その <code>formatToParts()</code> メソッドが返す構造体は、次のようになります。</p>

<pre class="brush: js notranslate">[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" }
]</pre>

<p>可能なタイプは以下のとおりです。</p>

<dl>
 <dt>currency</dt>
 <dd>通貨の文字列です。 "$" や "€" のような記号または "Dollar", "Euro" の文字列です。これらの文字列は <code>currencyDisplay</code> の特定方法に依存します。</dd>
 <dt>decimal</dt>
 <dd>小数点区切り文字 (".")。</dd>
 <dt>fraction</dt>
 <dd>小数点以下の数値。</dd>
 <dt>group</dt>
 <dd>グループ区切り文字 (",")。</dd>
 <dt>infinity</dt>
 <dd>{{jsxref("Infinity")}} 文字列 ("∞")。</dd>
 <dt>integer</dt>
 <dd>整数。</dd>
 <dt>literal</dt>
 <dd>書式設定された数字のリテラル文字列または空白。</dd>
 <dt>minusSign</dt>
 <dd>マイナス記号の文字列 ("-")。</dd>
 <dt>nan</dt>
 <dd>{{jsxref("NaN")}} の文字列 ("NaN")。</dd>
 <dt>plusSign</dt>
 <dd>プラス記号の文字列 ("+")。</dd>
</dl>

<dl>
 <dt>percentSign</dt>
 <dd>パーセント文字列 ("%")。</dd>
 <dt>unit</dt>
 <dd>単位の文字列、例えば "l" または "litres" で、 <code>unitDisplay</code> がどのように指定されているかに依存します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Comparing_format_and_formatToParts" name="Comparing_format_and_formatToParts">format と formatToParts の比較</h3>

<p><code>NumberFormat</code> はローカライズされた、直接操作できない文字列を出力します。</p>

<pre class="brush: js notranslate">var number = 3500;

var formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});

formatter.format(number);
// "3.500,00 €"
</pre>

<p>しかし、多くのユーザーインターフェースでは、この文字列の書式形式をカスタマイズしたいと要望があります。 <code>formatToParts</code> メソッドは <code>NumberFormat</code> フォーマッターによって生成された文字列を要素ごとの文字列として提供することでロケールに応じた書式設定を可能にします。</p>

<pre class="brush: js notranslate">formatter.formatToParts(number);

// 返値:
[
  { type: "integer",  value: "3"   },
  { type: "group",    value: "."   },
  { type: "integer",  value: "500" },
  { type: "decimal",  value: ","   },
  { type: "fraction", value: "00"  },
  { type: "literal",  value: " "   },
  { type: "currency", value: "€"   }
]
</pre>

<p>これで情報は個別に利用可能となり、カスタマイズされた方法でフォーマットして連結することができます。例えば {{jsxref("Array.prototype.map()")}}, <a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a>, <a href="/ja/docs/Web/JavaScript/Reference/Statements/switch">switch 文</a>, <a href="/ja/docs/Web/JavaScript/Reference/Template_literals">テンプレートリテラル</a>, {{jsxref("Array.prototype.reduce()")}} を使います。</p>

<pre class="brush: js notranslate">var numberString = formatter.formatToParts(number).map(({type, value}) =&gt; {
  switch (type) {
    case 'currency': return `&lt;strong&gt;${value}&lt;/strong&gt;`;
    default : return value;
  }
}).reduce((string, part) =&gt; string + part);
</pre>

<p>上記は<code>formatToParts()</code>メソッドを使い、通貨を太字にします。</p>

<pre class="brush: js notranslate">console.log(numberString);
// "3.500,00 &lt;strong&gt;€&lt;/strong&gt;"</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-intl.numberformat.prototype.formattoparts', 'Intl.NumberFormat.prototype.formatToParts')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Intl.NumberFormat.formatToParts")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("NumberFormat", "Intl.NumberFormat")}}</li>
 <li>{{jsxref("NumberFormat.format", "Intl.NumberFormat.prototype.format")}}</li>
 <li>日付の書式化: {{jsxref("DateTimeFormat.formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}</li>
</ul>
