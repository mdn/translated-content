---
title: border
slug: Web/CSS/border
tags:
  - CSS
  - CSS Borders
  - CSS Shorthand property
  - Layout
  - Reference
  - 'recipe:css-shorthand-property'
translation_of: Web/CSS/border
---
<div>{{CSSRef("CSS Borders")}}</div>

<p><span class="seoSummary"><strong><code>border</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の <a href="/ja/docs/Web/CSS/Shorthand_properties">一括指定</a>プロパティで、要素の境界を設定します。</span>これは {{cssxref("border-width")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}} の値を設定します。</p>

<h2 id="Examples" name="Examples">例</h2>

<div>{{EmbedInteractiveExample("pages/css/border.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Constituent_properties" name="Constituent_properties">構成要素のプロパティ</h2>

<p>このプロパティは以下の CSS プロパティの一括指定です。</p>

<ul>
 <li>{{cssxref("border-color")}}</li>
 <li>{{cssxref("border-style")}}</li>
 <li>{{cssxref("border-width")}}</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers notranslate">/* 種類 */
border: solid;

/* 幅 | 種類 */
border: 2px dotted;

/* 種類 | 色 */
border: outset #f33;

/* 幅 | 種類 | 色 */
border: medium dashed green;

/* グローバル値 */
border: inherit;
border: initial;
border: unset;
</pre>

<p><code>border</code> プロパティは、以下に挙げる値の1～3つを使用して指定します。値の順序は関係ありません。</p>

<div class="note">
<p><strong>注:</strong> style が指定されていない場合は境界線は表示されません。 style の既定値が <code>none</code> だからです。</p>
</div>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt id="&lt;line-width>"><code>&lt;line-width&gt;</code></dt>
 <dd>境界線の太さを設定します。指定されなかった場合は既定値の <code>medium</code> になります。 {{cssxref("border-width")}} を参照してください。</dd>
 <dt id="&lt;line-style>"><code>&lt;line-style&gt;</code></dt>
 <dd>境界線の種類を設定します。指定されなかった場合は既定値の <code>none</code> になります。 {{cssxref("border-style")}} を参照してください。</dd>
 <dt id="&lt;color>">{{cssxref("&lt;color&gt;")}}</dt>
 <dd>境界線の色を設定します。指定されなかった場合は既定値で要素の {{cssxref("color")}} プロパティになります。 {{cssxref("border-color")}} を参照してください。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>他の一括指定プロパティと同様、省略された部分値は<a href="/ja/docs/Web/CSS/initial_value">初期値</a>に設定されます。重要なことですが、 <code>border</code> は {{cssxref("border-image")}} のカスタム値を指定することができず、初期値、つまり <code>none</code> に設定します。</p>

<p><code>border</code> による一括指定は、四辺をすべて同じに設定したい場合に特に便利です。しかし、それぞれが異なる場合は、それぞれの辺に異なる値を設定できる個別指定の {{cssxref("border-width")}}、 {{cssxref("border-style")}}、 {{cssxref("border-color")}} プロパティを使用してください。他に、一度に一つの境界線を対象とした、物理的 ({{cssxref("border-top")}} など) や論理的 ({{cssxref("border-block-start")}} など) な境界線プロパティを使用することもできます。</p>

<h3 id="Borders_vs._outlines" name="Borders_vs._outlines">境界線と輪郭線</h3>

<p>境界線と<a href="/ja/docs/Web/CSS/outline">輪郭線</a>はよく似ています。しかし、輪郭線は以下の点で境界線とは異なります。</p>

<ul>
 <li>輪郭線は領域を占有せず、要素のコンテンツの外側に描画されます。</li>
 <li>輪郭線は普通は矩形ですが、仕様によれば、矩形である必要はありません。</li>
</ul>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="ピンク色の出っ張った境界の設定">ピンク色の出っ張った境界の設定</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;I have a border, an outline, AND a box shadow! Amazing, isn't it?&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Setting_a_pink_outset_border')}}</p>

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
   <td>{{SpecName('CSS3 Backgrounds', '#the-border-shorthands', 'border')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td><code>transparent</code> の<em>特別</em>扱いを廃止し、有効な {{cssxref("&lt;color&gt;")}} とした。実質的な影響はない。<br>
    一括指定を使用してカスタム値を設定することはできないため、 <code>border</code> は {{cssxref("border-image")}} を初期値 (<code>none</code>) にリセットするようになった。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#border-shorthand-properties', 'border')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td><code>inherit</code> キーワードを受け付けるようになった。また、<code>transparent</code> を有効な色として受けつけるようになった。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#border', 'border')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.border")}}</p>
