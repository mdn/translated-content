---
title: '::marker'
slug: 'Web/CSS/::marker'
tags:
  - CSS
  - CSS Lists
  - CSS リスト
  - Experimental
  - Layout
  - Pseudo-element
  - Reference
  - 疑似要素
translation_of: 'Web/CSS/::marker'
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>::marker</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>で、リスト項目の箇条書き記号ボックス (ふつうは黒丸や番号) を選択します。</span>これは <code><a href="/ja/docs/Web/CSS/display">display: list-item</a></code> が設定された要素や擬似要素、例えば {{HTMLElement("li")}} 要素や {{HTMLElement("summary")}} 要素で利用できます。</p>

<pre class="brush: css no-line-numbers notranslate">::marker {
  color: blue;
  font-size: 1.2em;
}</pre>

<h2 id="Allowable_properties" name="Allowable_properties">利用できるプロパティ</h2>

<p><code>::marker</code> 擬似要素では、一部の CSS プロパティのみが利用できます。</p>

<ul>
 <li>すべての<a href="/ja/docs/Web/CSS/CSS_Fonts">フォントプロパティ</a></li>
 <li>{{CSSxRef("white-space")}} プロパティ</li>
 <li>{{CSSxRef("color")}}</li>
 <li>{{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}}, {{CSSxRef("direction")}} の各プロパティ</li>
 <li>{{CSSxRef("content")}} プロパティ</li>
 <li>すべての<a href="/ja/docs/Web/CSS/CSS_Animations#CSS_Properties">アニメーション</a>および<a href="/ja/docs/Web/CSS/CSS_Transitions#Properties">トランジション</a>プロパティ</li>
</ul>

<div class="blockIndicator note">
<p>この仕様書は、将来追加の CSS プロパティに対応する可能性があることを示しています。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li&gt;Peaches&lt;/li&gt;
  &lt;li&gt;Apples&lt;/li&gt;
  &lt;li&gt;Plums&lt;/li&gt;
&lt;/ul&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">ul li::marker {
  color: red;
  font-size: 1.5em;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Examples')}}</p>

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
   <td>{{SpecName('CSS4 Pseudo-Elements', '#marker-pseudo', '::marker')}}</td>
   <td>{{Spec2('CSS4 Pseudo-Elements')}}</td>
   <td>重要な変更はなし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Lists', '#marker-pseudo', '::marker')}}</td>
   <td>{{Spec2('CSS3 Lists')}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.selectors.marker")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>既定で箇条書き記号ボックスがある HTML 要素: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}</li>
</ul>
