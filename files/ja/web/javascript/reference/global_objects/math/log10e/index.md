---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
---
<div>{{JSRef}}</div>

<p><strong><code>Math.LOG10E</code></strong> プロパティは 10 を底とした e の対数、約 0.434 を表します。</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0.434</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-log10e.html", "shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>LOG10E</code> は <code>Math</code> オブジェクトの静的プロパティなので、 <code>Math</code> オブジェクトを生成してプロパティとして使用するのではなく、常に <code>Math.LOG10E</code> として使用するようにしてください (<code>Math</code> はコンストラクターではありません)。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.LOG10E" name="Using_Math.LOG10E">Math.LOG10E の使用</h3>

<p>以下の関数は、10を底とした e の対数を返します。</p>

<pre class="brush:js notranslate">function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
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
   <td>{{SpecName('ESDraft', '#sec-math.log10e', 'Math.LOG10E')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.LOG10E")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.exp()")}}</li>
 <li>{{jsxref("Math.log()")}}</li>
 <li>{{jsxref("Math.log10()")}}</li>
</ul>
