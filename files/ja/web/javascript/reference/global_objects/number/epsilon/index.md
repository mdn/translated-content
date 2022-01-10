---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - プロパティ
translation_of: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
---
<div>{{JSRef}}</div>

<p><strong><code>Number.EPSILON</code></strong> プロパティは、1 から 1 より大きな浮動小数点の最小値の差を表します。</p>

<p>この静的なプロパティにアクセスするために {{jsxref("Number")}} オブジェクトを生成する必要はありません (<code>Number.EPSILON</code> を使用してください)。</p>

<div>{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>EPSILON</code> プロパティは およそ <code>2.2204460492503130808472633361816E-16</code>、または <code>2<sup>-52</sup></code> の値を持っています。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Testing_equality" name="Testing_equality">同等なことをテストする</h3>

<pre class="brush: js notranslate">x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) &lt; Number.EPSILON);
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<pre class="brush: js notranslate">if (Number.EPSILON === undefined) {
    Number.EPSILON = Math.pow(2, -52);
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
   <td>{{SpecName('ESDraft', '#sec-number.epsilon', 'Number.EPSILON')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.EPSILON")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>所属先の {{jsxref("Number")}} オブジェクト</li>
</ul>
