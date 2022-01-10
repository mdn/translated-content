---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Number
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>Number.parseFloat()</code></strong> メソッドは、引数を解釈して浮動小数点値を返します。引数の数値が解釈できない場合は、 {{jsxref("NaN")}} を返します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="notranslate">Number.parseFloat(<var>string</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>string</var></code></dt>
 <dd>解析する値。この引数が文字列でない場合、抽象操作 <code><a href="https://tc39.es/ecma262/#sec-tostring">ToString</a></code> を用いて文字列に変換されます。この引数では先頭の{{glossary("whitespace", "ホワイトスペース")}}は無視されます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された <code><var>string</var></code> を解釈した浮動小数点値です。</p>

<p>または、最初のホワイトスペース以外の文字が数値に変換できなかった場合は {{jsxref("NaN")}} です。</p>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<pre class="brush: js notranslate">if (Number.parseFloat === undefined) {
  Number.parseFloat = parseFloat;
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Number.parseFloat_vs_parseFloat" name="Number.parseFloat_vs_parseFloat">Number.parseFloat と parseFloat</h3>

<p>このメソッドは、グローバルの {{jsxref("parseFloat", "parseFloat()")}} 関数と同じ機能を持っています。</p>

<pre class="brush: js notranslate">Number.parseFloat === parseFloat; // true
</pre>

<p>このメソッドも ECMAScript 2015 の一部です。 (この目的は、グローバルのモジュール化にあります。)</p>

<p>さらなる詳細と例は {{jsxref("parseFloat", "parseFloat()")}} を参照してください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.parsefloat', 'Number.parseFloat')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.parseFloat")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>
  <dl>
   <dt>{{jsxref("Number")}}</dt>
   <dd>このメソッドが所属するオブジェクト。</dd>
  </dl>
 </li>
 <li>グローバルの {{jsxref("parseFloat", "parseFloat()")}} メソッド。</li>
</ul>
