---
title: fill-opacity
slug: Web/SVG/Attribute/fill-opacity
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/fill-opacity
---
<div>{{SVGRef}}</div>

<p><strong><code>fill-opacity</code></strong>属性は、図形に適用されるペイントサーバー(<em>色</em>, <em>勾配</em>, <em>パターン</em>, 等)の不透明度を定義するプレゼンテーション属性です。</p>

<p class="note"><strong>注:</strong>プレゼンテーション属性としての<code>fill-opacity</code>CSSプロパティに適用できます。</p>

<p>プレゼンテーション属性として、任意の要素に適用可能ですが、次の11個の要素のみで効果があります: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}</p>

<div id="topExample">
<div class="hidden">
<pre class="brush: css">html,body,svg { height:100% }</pre>
</div>

<pre class="brush: html">&lt;svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;!-- 既定のfill不透明度: 1 --&gt;
  &lt;circle cx="50" cy="50" r="40" /&gt;

  &lt;!-- 数値で指定するfill不透明度 --&gt;
  &lt;circle cx="150" cy="50" r="40"
          fill-opacity="0.7" /&gt;

  &lt;!-- 割合で指定するfill不透明度 --&gt;
  &lt;circle cx="250" cy="50" r="40"
          fill-opacity="50%" /&gt;

  &lt;!-- CSSプロパティで指定するfill不透明度 --&gt;
  &lt;circle cx="350" cy="50" r="40"
          style="fill-opacity: .25;" /&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('topExample', '100%', 150)}}</p>
</div>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">値</th>
   <td><code>[0-1]</code> | <strong><a href="/ja/docs/Web/SVG/Content_type#Paint">&lt;percentage&gt;</a></strong></td>
  </tr>
  <tr>
   <th scope="row">規定値</th>
   <td><code>1</code></td>
  </tr>
  <tr>
   <th scope="row">アニメーション可否</th>
   <td>はい</td>
  </tr>
 </tbody>
</table>

<p class="note"><strong>注:</strong> SVG2では、<code>fill-opacity</code>への割合値を導入していますが、状況としてはこれはまだ広く対応されているわけではありません(<em>以下の<a href="#Browser_Compatibility">ブラウザ実装状況</a>を参照</em>)。最良の実装としては、不透明度を<code>[0-1]</code>の範囲の値として指定することです。</p>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザー実装状況</h2>



<p>{{Compat("svg.attributes.presentation.fill-opacity")}}</p>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("SVG2", "painting.html#FillOpacityProperty", "fill-opacity")}}</td>
   <td>{{Spec2("SVG2")}}</td>
   <td>図形とテキスト向けの定義</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "painting.html#FillOpacityProperty", "fill-opacity")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>図形とテキスト向けの初期定義</td>
  </tr>
 </tbody>
</table>
