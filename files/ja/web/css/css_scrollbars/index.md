---
title: CSS スクロールバー
slug: Web/CSS/CSS_Scrollbars
tags:
  - CSS
  - CSS スクロールバー
  - Overview
  - 概要
translation_of: Web/CSS/CSS_Scrollbars
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p class="summary"><span class="seoSummary"><ruby><strong>CSS スクロールバー</strong><rp> (</rp><rt>CSS Scrollbars</rt><rp>) </rp></ruby>は、2000年に Windows の IE 5.5 で導入され、廃止されたスクロールバーの色のプロパティを標準化するためのものです。</span></p>

<h2 id="Basic_Example" name="Basic_Example">基本的な例</h2>

<p>この例では、緑色のトラックと紫色のつまみを持った細いスクロールバーを使用してみました。</p>

<div id="Example">
<pre class="brush:css">.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="scroller"&gt;
Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
Dandelion cucumber earthnut pea peanut soko zucchini.
&lt;/div&gt;</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example")}}</p>
</div>

<h2 id="Reference" name="Reference">リファレンス</h2>

<h3 id="CSS_Properties" name="CSS_Properties">CSS プロパティ</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("scrollbar-width")}}</li>
 <li>{{CSSxRef("scrollbar-color")}}</li>
</ul>
</div>

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
   <td>{{SpecName("CSS Scrollbars")}}</td>
   <td>{{Spec2("CSS Scrollbars")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮事項</h2>

<p>スクロールバーをカスタマイズする場合は、十分なコントラストがあることと、ヒット領域がタッチ入力を使っている人が操作できるだけ大きいかどうかを考慮してください。</p>

<ul>
 <li><a href="http://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html">Baseline Rules for Scrollbar Usability | Adrian Roselli</a></li>
</ul>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="scrollbar-width">scrollbar-width</h3>

<div>{{Compat("css.properties.scrollbar-width")}}</div>

<h3 id="scrollbar-color">scrollbar-color</h3>

<div>{{Compat("css.properties.scrollbar-color")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("::-webkit-scrollbar")}}</li>
 <li>{{CSSxRef("-ms-overflow-style")}}</li>
</ul>
