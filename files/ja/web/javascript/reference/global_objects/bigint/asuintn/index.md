---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
tags:
  - BigInt
  - JavaScript
  - Method
  - Reference
  - asUintN
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
---
<div>{{JSRef}}</div>

<p><strong><code>BigInt.asUintN</code></strong> 静的メソッドは、 BigInt 値を 0 から 2<sup>width</sup>-1 までの間の符号なし整数に丸めるために使われます。</p>

<div>{{EmbedInteractiveExample("pages/js/bigint-asuintn.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">BigInt.asUintN(<var>width</var>, <var>bigint</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>width</var></code></dt>
 <dd>整数の大きさのために利用できるビットの数。</dd>
 <dt><code><var>bigint</var></code></dt>
 <dd>指定されたビットに収めるよう丸める整数値。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code><var>bigint</var></code> を 2<sup><code><var>width</var></code></sup> で割った剰余の値の符号なし整数です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Staying_in_64-bit_ranges" name="Staying_in_64-bit_ranges">64ビットの範囲に収める</h3>

<p><code>BigInt.asUintN()</code> メソッドは、64ビットの数値の範囲に収めるのに便利です。</p>

<pre class="brush: js">const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max);
// ↪ 18446744073709551615n

BigInt.asUintN(64, max + 1n);
// ↪ 0n
// オーバーフローするのでゼロになる</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-bigint.asuintn', 'BigInt.asUintN()')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.BigInt.asUintN")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{JSxRef("BigInt")}}</li>
 <li>{{JSxRef("BigInt.asIntN()")}}</li>
</ul>
