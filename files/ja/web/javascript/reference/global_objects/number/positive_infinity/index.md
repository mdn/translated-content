---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
tags:
  - JavaScript
  - Number
  - プロパティ
translation_of: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
---
<div>{{JSRef}}</div>

<p><strong><code>Number.POSITIVE_INFINITY</code></strong> プロパティは正の無限大を表す値です。</p>

<div>{{EmbedInteractiveExample("pages/js/number-positive-infinity.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>Number.POSITIVE_INFINITY</code> の値はグローバルオブジェクトの {{jsxref("Infinity")}} プロパティの値と同じです。</p>

<p>この値は数学的な無限大とは少々異なった振る舞いをします。</p>

<ul>
 <li><code>POSITIVE_INFINITY</code> も含む任意の正の値と、 <code>POSITIVE_INFINITY</code> の積は <code>POSITIVE_INFINITY</code> になります。</li>
 <li>{{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} も含む任意の負の値と、 <code>POSITIVE_INFINITY</code> の積は {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} になります。</li>
 <li>任意の正の数を <code>POSITIVE_INFINITY</code> で割った商は、+0 になります。</li>
 <li>任意の負の数を <code>POSITIVE_INFINITY</code> で割った商は、-0 になります。</li>
 <li>零 と <code>POSITIVE_INFINITY</code> の積は {{jsxref("NaN")}} になります。</li>
 <li>{{jsxref("NaN")}} と <code>POSITIVE_INFINITY</code> の積は {{jsxref("NaN")}} になります。</li>
 <li><code>POSITIVE_INFINITY</code> を {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} を除く、任意の負の値で割った商は {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} になります。</li>
 <li><code>POSITIVE_INFINITY</code> を <code>POSITIVE_INFINITY</code> を除く、任意の正の値で割った商は <code>POSITIVE_INFINITY</code> になります。</li>
 <li><code>POSITIVE_INFINITY</code> を {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} と <code>POSITIVE_INFINITY</code> のどちらかで割った商は {{jsxref("NaN")}} になります。</li>
</ul>

<p>成功した場合に有限数を返す関数がエラーである状態を示すために、<code>Number.POSITIVE_INFINITY</code> プロパティを使いたいかもしれません。しかし、そのような場合は、 {{jsxref("isFinite")}} の方がより適しているであろうことに留意してください。</p>

<p><code>POSITIVE_INFINITY</code> は {{jsxref("Number")}} の静的プロパティですので、作成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に <code>Number.POSITIVE_INFINITY</code> として扱ってください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_POSITIVE_INFINITY" name="Using_POSITIVE_INFINITY">POSITIVE_INFINITY の使用</h3>

<p>以下の例では、変数 <code>bigNumber</code> に最大値よりも大きな値が代入されています。{{jsxref("Statements/if...else", "if")}} ステートメントが実行されるとき、<code>bigNumber</code> は <code>Infinity</code> の値を持つので、処理が継続する前に <code>bigNumber</code> により扱いやすい値がセットされます。</p>

<pre class="brush: js notranslate">var bigNumber = Number.MAX_VALUE * 2;

if (bigNumber == Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
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
   <td>{{SpecName('ESDraft', '#sec-number.positive_infinity', 'Number.POSITIVE_INFINITY')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.POSITIVE_INFINITY")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.NEGATIVE_INFINITY")}}</li>
 <li>{{jsxref("Number.isFinite()")}}</li>
 <li>{{jsxref("Infinity")}}</li>
 <li>{{jsxref("isFinite", "isFinite()")}}</li>
</ul>
