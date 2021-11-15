---
title: width
slug: Web/CSS/width
tags:
  - CSS
  - CSS Property
  - Layout
  - Reference
  - dimensions
  - recipe:css-property
  - size
  - width
browser-compat: css.properties.width
translation_of: Web/CSS/width
---
<p>{{CSSRef}}</p>

<p><strong><code>width</code></strong> は CSS のプロパティで、要素の幅を設定します。既定では、このプロパティは<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area">コンテンツ領域</a>の幅を設定しますが、 {{cssxref("box-sizing")}} を <code>border-box</code> に設定すると、<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border-area">境界領域</a>の幅を設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/width.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>{{cssxref("min-width")}} および {{cssxref("max-width")}} プロパティは <code>width</code> を上書きします。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; 値 */
width: 300px;
width: 25em;

/* &lt;percentage&gt; 値 */
width: 75%;

/* キーワード値 */
width: max-content;
width: min-content;
width: fit-content(20em);
width: auto;

/* グローバル値 */
width: inherit;
width: initial;
width: revert;
width: unset;
</pre>

<h3 id="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>絶対的な値で幅を定義します。</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>親となる包含ブロックの幅に対するパーセント値で定義します。</dd>
 <dt><code>auto</code></dt>
 <dd>指定された要素の幅をブラウザーが計算して決めます。</dd>
 <dt><code>max-content</code></dt>
 <dd>望ましい固有の幅です。</dd>
 <dt><code>min-content</code></dt>
 <dd>最小の固有の幅です。</dd>
 <dt><code>fit-content({{cssxref("&lt;length-percentage&gt;")}})</code></dt>
 <dd>利用可能な空間に対して fit-content 式を使用し、指定された引数に置き換えられます。すなわち <code>min(max-content, max(min-content, &lt;length-percentage&gt;))</code> です。</dd>
</dl>

<h2 id="Accessibility_concerns">アクセシビリティの考慮</h2>

<p>ページを拡大してテキストサイズを大きくしたときに、 <code>width</code> を設定した要素が切り捨てられたり、他のコンテンツが見えなくなったりしないようにしてください。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN WCAG の理解、 ガイドライン 1.4 の説明</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html">Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples">例</h2>

<h3 id="Default_width">既定の幅</h3>

<pre class="brush:css">p.goldie {
  background: gold;
}</pre>

<pre class="brush:html">&lt;p class="goldie"&gt;The Mozilla community produces a lot of great software.&lt;/p&gt;</pre>

<p>{{EmbedLiveSample('Default_width', '500px', '64px')}}</p>

<h3 id="Pixels_and_ems">ピクセル数と em 単位</h3>

<pre class="brush: css">.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
</pre>

<pre class="brush: html">&lt;div class="px_length"&gt;Width measured in px&lt;/div&gt;
&lt;div class="em_length"&gt;Width measured in em&lt;/div&gt;</pre>

<p>{{EmbedLiveSample('Pixels_and_ems', '500px', '64px')}}</p>

<h3 id="Percentage">パーセント値</h3>

<pre class="brush: css">.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}</pre>

<pre class="brush: html">&lt;div class="percent"&gt;Width in percentage&lt;/div&gt;</pre>

<p>{{EmbedLiveSample('Percentage', '500px', '64px')}}</p>

<h3 id="max-content">max-content</h3>

<pre class="brush:css;">p.maxgreen {
  background: lightgreen;
  width: intrinsic;           /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content;    /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
}</pre>

<pre class="brush:html">&lt;p class="maxgreen"&gt;The Mozilla community produces a lot of great software.&lt;/p&gt;</pre>

<p>{{EmbedLiveSample('max-content', '500px', '64px')}}</p>

<h3 id="min-content">min-content</h3>

<pre class="brush:css">p.minblue {
  background: lightblue;
  width: -moz-min-content;    /* Firefox */
  width: -webkit-min-content; /* Chrome */
  width: min-content;
}</pre>

<pre class="brush:html">&lt;p class="minblue"&gt;The Mozilla community produces a lot of great software.&lt;/p&gt;</pre>

<p>{{EmbedLiveSample('min-content', '500px', '155px')}}</p>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName('CSS4 Sizing', '#width-height-keywords', 'width')}}</td>
   <td>{{Spec2('CSS4 Sizing')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Sizing', '#width-height-keywords', 'width')}}</td>
   <td>{{Spec2('CSS3 Sizing')}}</td>
   <td>キーワード <code>max-content</code>, <code>min-content</code>, <code>fit-content</code> を追加</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visudet.html#the-width-property', 'width')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>適用対象の要素を詳しく記載</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#width', 'width')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">ボックスモデル</a></li>
 <li>{{cssxref("height")}}</li>
 <li>{{cssxref("box-sizing")}}</li>
 <li>{{cssxref("min-width")}}, {{cssxref("max-width")}}</li>
 <li>対応する論理的プロパティ: {{cssxref("block-size")}}, {{cssxref("inline-size")}}</li>
</ul>
