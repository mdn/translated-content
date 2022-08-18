---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/tan
---
<div>{{JSRef}}</div>

<p><strong><code>Math.tan()</code></strong> 関数は、数値のタンジェントを返します。</p>

<div>{{EmbedInteractiveExample("pages/js/math-tan.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code>Math.tan(<var>x</var>)</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>x</var></code></dt>
 <dd>数値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた数値のタンジェントです。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Math.tan()</code> メソッドは、ある角度のタンジェントを表す数値を返します。</p>

<p><code>tan()</code> は <code>Math</code> の静的メソッドであるため、生成した <code>Math</code> オブジェクトのメソッドとしてではなく、常に <code>Math.tan()</code> として使用するようにしてください (<code>Math</code> はコンストラクターではありません)。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.atan" name="Using_Math.atan()">Math.tan() の使用</h3>

<pre class="brush: js notranslate">Math.tan(1); // 1.5574077246549023
</pre>

<p><code>Math.tan()</code> 関数はラジアンを受け付けますが、角度で使用したほうが簡単な場合が多いので、次の関数は角度の値を受け付け、それをラジアンに変換してタンジェントを返します。</p>

<pre class="brush: js notranslate">function getTanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);
}
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
   <td>{{SpecName('ESDraft', '#sec-math.tan', 'Math.tan')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.tan")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.acos()")}}</li>
 <li>{{jsxref("Math.asin()")}}</li>
 <li>{{jsxref("Math.atan()")}}</li>
 <li>{{jsxref("Math.atan2()")}}</li>
 <li>{{jsxref("Math.cos()")}}</li>
 <li>{{jsxref("Math.sin()")}}</li>
</ul>
