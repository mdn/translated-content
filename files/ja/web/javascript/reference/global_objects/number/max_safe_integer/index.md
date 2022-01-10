---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - プロパティ
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
---
<div>{{JSRef}}</div>

<p><strong><code>Number.MAX_SAFE_INTEGER</code></strong> 定数は、JavaScript における安全な整数の最大値 (<code>2<sup>53</sup> - 1</code>) を表します。</p>

<p>もっと大きな整数には、 {{jsxref("BigInt")}} を使用することを検討してください。</p>

<div>{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>MAX_SAFE_INTEGER</code> 定数は <code>9007199254740991</code> (9,007,199,254,740,991) である値です。その数である理由は JavaScript が <a href="https://ja.wikipedia.org/wiki/IEEE_754">IEEE 754</a> で指定されたとおり<a href="https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0">倍精度浮動小数点型数値</a>を使用し安全に <code>-(2<sup>53</sup> - 1)</code> と <code>2<sup>53</sup> - 1</code> との間の数を表すことができるからです。</p>

<p>この文脈で示している安全とは、整数を正確に表現し、正しく比較する能力を指します。たとえば、 <code>Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2</code> は、数学的には不正確ですが true と評価されます。詳細については {{jsxref("Number.isSafeInteger()")}} を見てください。</p>

<p>このフィールドは古いブラウザーには存在しません。 <code>Math.max(Number.MAX_SAFE_INTEGER, 2)</code> のように存在を確認せずに使用すると、 NaN のような望ましくない結果が得られます。</p>

<p><code>MAX_SAFE_INTEGER</code> は {{jsxref("Number")}} の静的なプロパティなので、自ら生成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に <code>Number.MAX_SAFE_INTEGER</code> として使うようにしてください。</p>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js notranslate">if (!Number.MAX_SAFE_INTEGER) {
    Number.MAX_SAFE_INTEGER = 9007199254740991; // Math.pow(2, 53) - 1;
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Return_value_of_MAX_SAFE_INTEGER" name="Return_value_of_MAX_SAFE_INTEGER">MAX_SAFE_INTEGER の返値</h3>

<pre class="brush: js notranslate">Number.MAX_SAFE_INTEGER; // 9007199254740991
</pre>

<h3 id="Numbers_higher_than_safe_integer" name="Numbers_higher_than_safe_integer">安全な整数よりも大きな数値</h3>

<p>浮動小数点の場合、ゼロのような正規の精度以下の場合を除いて、実際には10進数の末尾の "1" が値となるため、これは2を返します。</p>

<pre class="brush: js notranslate">Number.MAX_SAFE_INTEGER * Number.EPSILON; // 2
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
   <td>{{SpecName('ESDraft', '#sec-number.max_safe_integer', 'Number.MAX_SAFE_INTEGER')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.MAX_SAFE_INTEGER")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Number.MIN_SAFE_INTEGER")}}</li>
 <li>{{jsxref("Number.isSafeInteger()")}}</li>
 <li>{{jsxref("BigInt")}}</li>
</ul>
