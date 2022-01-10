---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - プロパティ
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
---
<div>{{JSRef}}</div>

<p><strong><code>Number.MIN_SAFE_INTEGER</code></strong> 定数は、JavaScript における安全な整数の最小値 (<code>-(2<sup>53</sup> - 1)</code>) を表します。</p>

<p>これよりも小さな整数値を表す場合は、 {{jsxref("BigInt")}} を使用することを検討してください。</p>

<div>{{EmbedInteractiveExample("pages/js/number-min-safe-integer.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>MIN_SAFE_INTEGER</code> 定数は <code>-9007199254740991</code> (-9,007,199,254,740,991 またはおよそ -9000 兆 ) である値です。その数である理由は JavaScript が <a href="https://ja.wikipedia.org/wiki/IEEE_754">IEEE 754</a> で指定されたとおり<a href="https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0">倍精度浮動小数点型数値</a>を使用し安全に <code>-(2<sup>53</sup> - 1)</code> と <code>2<sup>53</sup> - 1</code> との間の数を表すことができるからです。詳しくは {{jsxref("Number.isSafeInteger()")}} を見てください。</p>

<p><code>MIN_SAFE_INTEGER</code> 定数は {{jsxref("Number")}} オブジェクトの静的なプロパティなので、自ら生成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に、<code>Number.MIN_SAFE_INTEGER</code> として使用するようにしてください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_MIN_SAFE_INTEGER" name="Using_MIN_SAFE_INTEGER">MIN_SAFE_INTEGER の使用</h3>

<pre class="brush: js notranslate">Number.MIN_SAFE_INTEGER // -9007199254740991
-(Math.pow(2, 53) - 1)  // -9007199254740991
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
   <td>{{SpecName('ESDraft', '#sec-number.min_safe_integer', 'Number.MIN_SAFE_INTEGER')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.MIN_SAFE_INTEGER")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.MAX_SAFE_INTEGER")}}</li>
 <li>{{jsxref("Number.isSafeInteger()")}}</li>
 <li>{{jsxref("BigInt")}}</li>
</ul>
