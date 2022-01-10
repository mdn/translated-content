---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
tags:
  - JavaScript
  - メソッド
  - Number
  - リファレンス
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---
<div>{{JSRef}}</div>

<p><strong><code>Number.isFinite()</code></strong> メソッドは、渡された値が有限数であるかどうかを判断します。</p>

<div>{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Number.isFinite(<var>value</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>有限数かどうかテストされる値。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた値が有限数かどうかを示す {{jsxref("Boolean")}}。</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("isFinite", "isFinite()")}} グローバル関数と比較すると、このメソッドは強制的に引数を数値に変換しません。すなわち、数値型の値で、それが有限数でもある場合のみ、 <code>true</code> を返すことを意味します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_isFinite" name="Using_isFinite">isFinite の使用</h3>

<pre class="brush: js notranslate">Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false, would've been true with
                            // global isFinite('0')
Number.isFinite(null);      // false, would've been true with
                            // global isFinite(null)
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<pre class="brush: js notranslate">if (Number.isFinite === undefined) Number.isFinite = function(value) {
    return typeof value === 'number' &amp;&amp; isFinite(value);
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
   <td>{{SpecName('ESDraft', '#sec-number.isfinite', 'Number.isInteger')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.isFinite")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このメソッドが所属している {{jsxref("Number")}} オブジェクト</li>
 <li>グローバル関数 {{jsxref("isFinite")}}</li>
</ul>
