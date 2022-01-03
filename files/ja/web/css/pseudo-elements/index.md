---
title: 擬似要素 (Pseudo-elements)
slug: Web/CSS/Pseudo-elements
tags:
  - CSS
  - Guide
  - Overview
  - Pseudo-element
  - Reference
  - Selectors
translation_of: Web/CSS/Pseudo-elements
---
<div>{{CSSRef}}</div>

<p>CSS の <ruby><strong>擬似要素</strong><rp> (</rp><rt>Pseudo-elements</rt><rp>) </rp></ruby>はセレクターに付加するキーワードで、選択された要素の特定の部分にスタイル付けできるようにするものです。例えば {{CSSxRef("::first-line")}} 擬似要素は、段落の最初の行のフォントを変更するために使用することができます。</p>

<pre class="brush: css no-line-numbers notranslate">/* 各 &lt;p&gt; 要素の最初の行です。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}</pre>

<div class="blockIndicator note">
<p><strong>注:</strong> 擬似要素とは対照的に、{{CSSxRef("pseudo-classes", "擬似クラス")}}は要素の<em>状態</em>に基づいてスタイル付けを行うことができます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">selector::pseudo-element {
  property: value;
}</pre>

<p>擬似要素は1つのセレクターに1つだけ使用することができます。文内の単純セレクターの後に置く必要があります。</p>

<div class="blockIndicator note">
<p><strong>注:</strong> 規則として、単一コロン (<code>:</code>) の代わりに二重コロン (<code>::</code>) を使用してください。これで擬似要素と擬似クラスを区別します。但し、この区別は W3C の古いバージョンの仕様書には存在しなかったため、多くのブラウザーは元々の擬似要素に対して両方の文法に対応しています。</p>
</div>

<h2 id="Index_of_standard_pseudo-elements" name="Index_of_standard_pseudo-elements">標準の擬似要素の索引</h2>

<div class="index" id="index">
<ul>
 <li>{{CSSxRef("::after", "::after (:after)")}}</li>
 <li>{{CSSxRef("::backdrop")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::before", "::before (:before)")}}</li>
 <li>{{CSSxRef("::cue")}}</li>
 <li>{{CSSxRef("::cue-region")}}</li>
 <li>{{CSSxRef("::first-letter", "::first-letter (:first-letter)")}}</li>
 <li>{{CSSxRef("::first-line", "::first-line (:first-line)")}}</li>
 <li>{{CSSxRef("::grammar-error")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::marker")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::part", "::part()")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::placeholder")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::selection")}}</li>
 <li>{{CSSxRef("::slotted", "::slotted()")}}</li>
 <li>{{CSSxRef("::spelling-error")}} {{Experimental_Inline}}</li>
</ul>
</div>

<table class="standard-table">
 <tbody>
  <tr>
   <th>ブラウザー</th>
   <th>対応開始バージョン</th>
   <th>対応内容</th>
  </tr>
  <tr>
   <td rowspan="2">Internet Explorer</td>
   <td>8.0</td>
   <td><code>:pseudo-element</code></td>
  </tr>
  <tr>
   <td>9.0</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
  <tr>
   <td rowspan="2">Firefox (Gecko)</td>
   <td>1.0 (1.0)</td>
   <td><code>:pseudo-element</code></td>
  </tr>
  <tr>
   <td>1.0 (1.5)</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
  <tr>
   <td rowspan="2">Opera</td>
   <td>4.0</td>
   <td><code>:pseudo-element</code></td>
  </tr>
  <tr>
   <td>7.0</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
  <tr>
   <td>Safari (WebKit)</td>
   <td>1.0 (85)</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
 </tbody>
</table>

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
   <td>{{SpecName("CSS1")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>擬似クラスと擬似要素を定義した。</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a></li>
</ul>
