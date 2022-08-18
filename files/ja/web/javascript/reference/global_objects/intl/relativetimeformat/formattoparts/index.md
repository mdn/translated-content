---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Method
  - Prototype
  - RelativeTimeFormat
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
---
<div>{{JSRef}}</div>

<p><strong><code>Intl.RelativeTimeFormat.prototype.formatToParts()</code></strong> メソッドは、ロケールを考慮したカスタム書式設定に使用できる相対時間書式を部品単位で表すオブジェクトの配列 ({{jsxref("Array")}}) を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-formattoparts.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js notranslate">RelativeTimeFormat.formatToParts(<var>value</var>, <var>unit</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>国際化された相対時間のメッセージに使用する数値です。</dd>
</dl>

<dl>
 <dt><code><var>unit</var></code></dt>
 <dd>国際化された相対時間のメッセージに使用する単位です。利用可能な値は、 "<code>year</code>", "<code>quarter</code>", "<code>month</code>", "<code>week</code>", "<code>day</code>", "<code>hour</code>", "<code>minute</code>", "<code>second</code>" です。複数形も許容されています。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>書式化された相対時間を部品単位で含むオブジェクトの配列 ({{jsxref("Array")}}) です。</p>

<h2 id="Description" name="Description">解説</h2>

<div><code>Intl.RelativeTimeFormat.prototype.formatToParts</code> メソッドは、書式化メソッドのバージョンの一つで、書式化された数値を他の周囲のテキストから分離し、それぞれの構成部品に分解した、オブジェクトの「部分」を表すオブジェクトの配列を返すものです。これらのオブジェクトには二つのプロパティがあります。 type は <code>NumberFormat</code> の formatToParts 型で、値は出力の構成要素である文字列です。もし "part" が <code>NumberFormat</code> から来たものであれば、書式化された単位を示す unit プロパティを持ちます。</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_formatToParts" name="Using_formatToParts">formatToParts の使用</h3>

<pre class="brush: js notranslate">const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using the day unit
rtf.formatToParts(-1, "day");
// &gt; [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// &gt; [{ type: "literal", value: "in " },
// &gt;  { type: "integer", value: "100", unit: "day" },
// &gt;  { type: "literal", value: " days" }]</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Intl.RelativeTimeFormat.prototype.formatToParts', 'RelativeTimeFormat.formatToParts()')}}</td>
   <td>第 4 段階</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Intl.RelativeTimeFormat.format")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Intl.RelativeTimeFormat")}}</li>
</ul>
