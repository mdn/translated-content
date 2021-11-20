---
title: <integer>
slug: Web/CSS/integer
tags:
  - CSS
  - CSS データ型
  - Reference
  - Web
translation_of: Web/CSS/integer
---
<div>{{CSSRef}}</div>

<p><strong><code>&lt;integer&gt;</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/CSS_Types">データ型</a>で、 {{cssxref("number")}} の特殊型であり、正と負の整数を表現します。 integer は {{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("z-index")}} など、数多くの CSS プロパティで使用することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>&lt;integer&gt;</code> データ型は数桁の10進数、 0 から 9 までを含み、任意でその前に単一の <code>+</code> または <code>-</code> の符号が付きます。 integer に関連付けられた単位はありません。</p>

<div class="note">公式には、有効な <code>&lt;integer&gt;</code> 値の範囲は決められていません。 Opera では 2<sup>15</sup>-1、 IE では2<sup>20</sup>-1 まで、その他のブラウザーではそれ以上の値に対応しています。 CSS3 Values の策定中には対応すべき最小範囲について多くの議論がありました。 <a href="http://lists.w3.org/Archives/Public/www-style/2012Apr/0633.html">LC 段階の 2012 年 4 月の最新の決定</a>では、 [-2<sup>27</sup>-1; 2<sup>27</sup>-1] でしたが、# しかし 2<sup>24</sup>-1 や 2<sup>30</sup>-1 のような他の値も<a href="http://lists.w3.org/Archives/Public/www-style/2012Apr/0530.html">提案されていました</a>。しかし、最新の仕様書では範囲を定めなくなりました。</div>

<h2 id="Interpolation" name="Interpolation">補間</h2>

<p>アニメーション時には、 <code>&lt;integer&gt;</code> データ型の値は離散的に整数を使用して補間されます。実数、すなわち浮動小数点で計算が行われた場合、離散値は <a href="http://ja.wikipedia.org/wiki/%E5%BA%8A%E9%96%A2%E6%95%B0%E3%81%A8%E5%A4%A9%E4%BA%95%E9%96%A2%E6%95%B0">floor 関数</a>を使って求められます。補間の速度は、アニメーションに結びつけられた <a href="/ja/docs/Web/CSS/timing-function">timing function</a> で決められます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Valid_integers" name="Valid_integers">妥当な integer の値</h3>

<pre>12          正の整数 (先頭の + なし)
+123        正の整数 (先頭の + あり)
-456        負の整数
0           ゼロ
+0          ゼロ、先頭の + つき
-0          ゼロ、先頭の - なし
</pre>

<h3 id="Invalid_integers" name="Invalid_integers">不正な integer の値</h3>

<pre>12.0        整数を表していますが、これは &lt;number&gt; であり、&lt;integer&gt; ではありません。
12.         小数点を含んではいけません。
+---12      先頭に置ける +/- は 1 つだけです。
ten         文字は使えません。
_5          記号は使えません。
\35         エスケープを使った Unicode 文字は、それが整数を表す場合でも (これは 5 です) 使えません。
\4E94       アラビア数字以外の数字は使えません (これは日本語の「五」です)。
3e4         指数表記は使えません。
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Values', '#integers', '&lt;integer&gt;')}}</td>
   <td>{{Spec2('CSS4 Values')}}</td>
   <td>重要な変更はなし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Values', '#integers', '&lt;integer&gt;')}}</td>
   <td>{{Spec2('CSS3 Values')}}</td>
   <td>重要な変更はなし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'syndata.html#numbers', '&lt;integer&gt;')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>明示的な定義</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '', '&lt;integer&gt;')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>暗黙的な定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.types.integer")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("&lt;number&gt;")}}</li>
</ul>
