---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
tags:
  - JavaScript
  - Number
  - プロパティ
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
---
<div>{{JSRef}}</div>

<p><strong><code>Number.MIN_VALUE</code></strong> プロパティは、 JavaScript において表すことが可能な最小の正の数値です。</p>

<div>{{EmbedInteractiveExample("pages/js/number-min-value.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>MIN_VALUE</code> プロパティは JavaScript が表すことができる、0 に最も近い数であり、最大の負の数ではありません。</p>

<p><code>Number.MIN_VALUE</code> は <code>5e-324</code>、すなわち浮動小数点の精度で表すことができる最も小さな正の数、つまり 0 にできるだけ違い数です。 <code>MIN_VALUE</code> より小さな値 ("アンダーフローする値") は 0 に変換されます。</p>

<p><code>MIN_VALUE</code> は {{jsxref("Number")}} オブジェクトの静的なプロパティですので、 生成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に <code>Number.MIN_VALUE</code> として使用してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_MIN_VALUE" name="Using_MIN_VALUE">MIN_VALUE の使用</h3>

<p>以下のコードは、2 つの数値を割り算しています。その結果が <code>MIN_VALUE</code> より大きいか等しい場合は、<code>func1</code> 関数が呼び出されます。それ以外の場合は、<code>func2</code> 関数が呼び出されます。</p>

<pre class="brush: js notranslate">if (num1 / num2 &gt;= Number.MIN_VALUE) {
  func1();
} else {
  func2();
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
   <td>{{SpecName('ESDraft', '#sec-number.min_value', 'Number.MIN_VALUE')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.MIN_VALUE")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.MAX_VALUE")}}</li>
</ul>
