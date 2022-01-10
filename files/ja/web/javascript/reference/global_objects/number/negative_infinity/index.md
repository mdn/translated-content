---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
tags:
  - JavaScript
  - Number
  - プロパティ
  - リファレンス
translation_of: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
---
<div>{{JSRef}}</div>

<p><strong><code>Number.NEGATIVE_INFINITY</code></strong> プロパティは負の無限大を表す値です。</p>

<div>{{EmbedInteractiveExample("pages/js/number-negative-infinity.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>Number.NEGATIVE_INFINITY</code> の値は、グローバルオブジェクトの {{jsxref("Infinity")}} プロパティの負の値と同じです。</p>

<p>この値は数学的な無限大とは少々異なった振る舞いをします。</p>

<ul>
 <li>{{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} も含む任意の正の値と、 <code>NEGATIVE_INFINITY</code> の積は <code>NEGATIVE_INFINITY</code> になります。</li>
 <li><code>NEGATIVE_INFINITY</code> も含む任意の負の値と、 <code>NEGATIVE_INFINITY</code> の積は {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} になります。</li>
 <li>任意の正の数を <code>NEGATIVE_INFINITY</code> で割った商は、-0 になります。</li>
 <li>任意の負の数を <code>NEGATIVE_INFINITY</code> で割った商は、+0 になります。</li>
 <li>零 と <code>NEGATIVE_INFINITY</code> の積は {{jsxref("NaN")}} になります。</li>
 <li>NaN と <code>NEGATIVE_INFINITY</code> の積は {{jsxref("NaN")}} になります。</li>
 <li><code>NEGATIVE_INFINITY</code> を <code>NEGATIVE_INFINITY</code> を除く、任意の負の値で割った商は {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} になります。</li>
 <li><code>NEGATIVE_INFINITY</code> を {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} を除く、任意の正の値で割った商は <code>NEGATIVE_INFINITY</code> になります。</li>
 <li><code>NEGATIVE_INFINITY</code> を <code>NEGATIVE_INFINITY</code> または {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} のいずれかで割った商は {{jsxref("NaN")}} になります。</li>
</ul>

<p>成功した場合に有限数を返す関数がエラーである状態を示すために、<code>Number.NEGATIVE_INFINITY</code> プロパティを使いたいかもしれません。しかし、そのような場合は、 {{jsxref("isFinite")}} の方がより適しているであろうことに留意してください。</p>

<p><code>NEGATIVE_INFINITY</code> は {{jsxref("Number")}} の静的プロパティですので、作成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に <code>Number.NEGATIVE_INFINITY</code> として扱ってください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_NEGATIVE_INFINITY" name="Using_NEGATIVE_INFINITY">NEGATIVE_INFINITY の使用</h3>

<p>以下の例では、変数 <code>smallNumber</code> に最小値よりも小さな値が代入されています。{{jsxref("Statements/if...else", "if")}} ステートメントが実行されたとき、<code>smallNumber</code> は <code>-Infinity</code> の値を持つので、処理が継続する前に <code>smallNumber</code> により扱いやすい値がセットされます。</p>

<pre class="brush: js notranslate">var smallNumber = (-Number.MAX_VALUE) * 2;

if (smallNumber === Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
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
   <td>{{SpecName('ESDraft', '#sec-number.negative_infinity', 'Number.NEGATIVE_INFINITY')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.NEGATIVE_INFINITY")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.POSITIVE_INFINITY")}}</li>
 <li>{{jsxref("Number.isFinite()")}}</li>
 <li>{{jsxref("Global_Objects/Infinity", "Infinity")}}</li>
 <li>{{jsxref("Global_Objects/isFinite", "isFinite()")}}</li>
</ul>
