---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
tags:
  - JavaScript
  - Number
  - プロパティ
  - リファレンス
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
---
<div>{{JSRef}}</div>

<p><strong><code>Number.MAX_VALUE</code></strong> プロパティは、 JavaScript において表すことが可能な最大の数値です。</p>

<div>{{EmbedInteractiveExample("pages/js/number-maxvalue.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>MAX_VALUE</code> プロパティはおよそ <code>1.79E+308</code>、または 2<sup>1024</sup> の値です。<code>MAX_VALUE</code> よりも大きな数値は {{jsxref("Infinity")}} で表されます。</p>

<p><code>MAX_VALUE</code> は {{jsxref("Number")}} オブジェクトの静的なプロパティですので、 生成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に <code>Number.MAX_VALUE</code> として使用してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_MAX_VALUE" name="Using_MAX_VALUE">MAX_VALUE の使用</h3>

<p>以下のコードは、2 つの数値を掛け算しています。その結果が <code>MAX_VALUE</code> より小さいか等しい場合は、<code>func1</code> 関数が呼び出されます。それ以外の場合は、<code>func2</code> 関数が呼び出されます。</p>

<pre class="brush: js notranslate">if (num1 * num2 &gt;= Number.MAX_VALUE) {
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
   <td>{{SpecName('ESDraft', '#sec-number.max_value', 'Number.MAX_VALUE')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.MAX_VALUE")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.MIN_VALUE")}}</li>
 <li>所属先の {{jsxref("Number")}} オブジェクト</li>
</ul>
