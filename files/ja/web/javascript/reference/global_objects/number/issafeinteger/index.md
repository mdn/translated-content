---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
tags:
  - ECMAScript6
  - JavaScript
  - メソッド
  - Number
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
---
<div>{{JSRef}}</div>

<p><strong><code>Number.isSafeInteger()</code></strong> メソッドは、指定された値が<dfn>安全な整数</dfn>であるかどうかを判定します。</p>

<div>{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}</div>

<div class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> and send us a pull request.</div>

<p>安全な整数とは、以下のような整数です。</p>

<ul>
 <li>正確に IEEE-754 倍精度数として表現することができる</li>
 <li>その IEEE-754 の表現は、他の整数を IEEE-754 の表現に適合するように、丸めた結果にはならない</li>
</ul>

<p>例えば、<code>2<sup>53</sup> - 1</code> は安全な整数です。正確に表現することができ、他の整数は、どの IEEE-754 丸めモードの下で丸めたものにもなっていません。対照的に、<code>2<sup>53</sup></code> は安全な整数では<em>ありません</em>。これは IEEE-754 で正確に表現されますが、整数値 <code>2<sup>53</sup> + 1</code> が直接 IEEE-754 では表現できず、四捨五入や切り捨ての丸めによって <code>2<sup>53</sup></code> になるからです。安全な整数は <code>-(2<sup>53</sup> - 1)</code> 以上 <code>2<sup>53</sup> - 1</code> 以下の整数値です (± <code>9007199254740991</code> または ± 9,007,199,254,740,991 です)。</p>

<p>完全な精度で ~9 兆より大きい値や小さい値を扱うには、<a href="https://ja.wikipedia.org/wiki/%E4%BB%BB%E6%84%8F%E7%B2%BE%E5%BA%A6%E6%BC%94%E7%AE%97">任意精度演算ライブラリ</a>を使用する必要があります。数値の浮動小数点表現の詳細については、 <a href="http://floating-point-gui.de/">What Every Programmer Needs to Know about Floating Point Arithmetic</a> を参照してください。s</p>

<p>巨大な整数値については、 {{jsxref("BigInt")}} 型を使用することを検討してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code>Number.isSafeInteger(<var>testValue</var>)</code>
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>testValue</var></code></dt>
 <dd>安全な整数かどうかをテストする値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref("Boolean")}} で、与えられた数値が安全な整数であるかどうかを示します。</p>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js notranslate">Number.isSafeInteger = Number.isSafeInteger || function (value) {
   return Number.isInteger(value) &amp;&amp; Math.abs(value) &lt;= Number.MAX_SAFE_INTEGER;
};
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_isSafeInteger" name="Using_isSafeInteger">isSafeInteger の使用</h3>

<pre class="brush: js notranslate">Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger('3');                  // false
Number.isSafeInteger(3.1);                  // false
Number.isSafeInteger(3.0);                  // true
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
   <td>{{SpecName('ESDraft', '#sec-number.issafeinteger', 'Number.isSafeInteger')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.isSafeInteger")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このメソッドが所属する {{jsxref("Number")}} オブジェクト。</li>
 <li>{{jsxref("Number.MIN_SAFE_INTEGER")}}</li>
 <li>{{jsxref("Number.MAX_SAFE_INTEGER")}}</li>
 <li>{{jsxref("BigInt")}}</li>
</ul>
