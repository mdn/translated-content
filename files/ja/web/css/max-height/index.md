---
title: max-height
slug: Web/CSS/max-height
tags:
  - CSS
  - CSS Property
  - Layout
  - Maximum
  - Reference
  - dimensions
  - height
  - limit
  - max-height
  - 'recipe:css-property'
  - size
translation_of: Web/CSS/max-height
---
<div>{{CSSRef}}</div>

<p><strong><code>max-height</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素の最大高を設定します。これは {{Cssxref("height")}} プロパティの<a href="/ja/docs/Web/CSS/used_value">使用値</a>が、 <code>max-height</code> に指定した値を上回ることを防ぎます。</p>

<div>{{EmbedInteractiveExample("pages/css/max-height.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p><code>max-height</code> は {{cssxref("height")}} を上書きしますが、 {{cssxref("min-height")}} は <code>max-height</code> を上書きします。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; 値 */
max-height: 3.5em;

/* &lt;percentage&gt; 値 */
max-height: 75%;

/* キーワード値 */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content(20em);

/* グローバル値 */
max-height: inherit;
max-height: initial;
max-height: unset;
</pre>

<h3 id="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd><code>max-height</code> を絶対的な値で定義します。</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd><code>max-height</code> を包含ブロックの高さに対するパーセント値で定義します。</dd>
 <dt><code>none</code></dt>
 <dd>ボックスの寸法を制限しません。</dd>
 <dt><code>max-content</code></dt>
 <dd>内容物が推奨する <code>max-height</code> です。</dd>
 <dt><code>min-content</code></dt>
 <dd>内容物の最小の <code>max-height</code> です。</dd>
 <dt><code>fit-content({{cssxref("&lt;length-percentage&gt;")}})</code></dt>
 <dd>利用可能な空白を指定された引数で置き換えた <code>fit-content</code> 式を使用します。すなわち、 <code>min(max-content, max(min-content, <var>引数</var>))</code> です。</dd>
</dl>

<h2 id="Accessibility_concerns">アクセシビリティの考慮</h2>

<p>テキストを大きくするためにページを拡大したときに、 <code>max-height</code> を設定した要素が切り取られたり、他のコンテンツを覆い隠したりしないことを確認してください。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN WCAG を理解する ― ガイドライン 1.4 の解説</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html" rel="noopener">Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples">例</h2>

<h3 id="Setting_max-height_using_percentage_and_keyword_values">パーセント値とキーワード値を用いた max-height の設定</h3>

<pre class="brush: css">table { max-height: 75%; }

form { max-height: none; }
</pre>

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
   <td>{{SpecName('CSS4 Sizing', '#width-height-keywords', 'max-height')}}</td>
   <td>{{Spec2('CSS4 Sizing')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Sizing', '#width-height-keywords', 'max-height')}}</td>
   <td>{{Spec2('CSS3 Sizing')}}</td>
   <td>キーワード <code>max-content</code>, <code>min-content</code>, <code>fit-content</code> を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visudet.html#min-max-heights', 'max-height')}}</td>
   <td>{{ Spec2('CSS2.1') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.max-height")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">ボックスモデル</a>、 {{cssxref("box-sizing")}}</li>
 <li>{{Cssxref("height")}}, {{Cssxref("min-height")}}</li>
 <li>対応する論理プロパティ: {{cssxref("max-inline-size")}}, {{cssxref("max-block-size")}}</li>
</ul>
