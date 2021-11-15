---
title: min-width
slug: Web/CSS/min-width
tags:
  - CSS
  - CSS Property
  - CSS プロパティ
  - Reference
translation_of: Web/CSS/min-width
---
<div>{{CSSRef}}</div>

<p><strong><code>min-width</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素の最小幅を設定します。これは {{Cssxref("width")}} プロパティの<a href="/ja/docs/Web/CSS/used_value">使用値</a>が、<code>min-width</code> で指定した値を下回ることを防ぎます。</p>

<div>{{EmbedInteractiveExample("pages/css/min-width.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p><code>min-width</code> の値が {{Cssxref("max-width")}} および {{Cssxref("width")}} の値より大きい場合は、<code>min-width</code> の値が要素の幅になります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; 値 */
min-width: 3.5em;

/* &lt;percentage&gt; 値 */
min-width: 10%;

/* キーワード値 */
min-width: max-content;
min-width: min-content;
min-width: fit-content(20em);

/* グローバル値 */
min-width: inherit;
min-width: initial;
min-width: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd><code>min-width</code> を絶対的な値で定義します。</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd><code>min-width</code> を包含ブロックの幅に対するパーセント値で定義します。</dd>
 <dt><code>auto</code></dt>
 <dd>ブラウザーが指定された要素の <code>min-width</code> を計算して選択します。</dd>
 <dt><code>none</code></dt>
 <dd>ボックスの寸法を制限しません。</dd>
 <dt><code>max-content</code></dt>
 <dd>内容物が推奨する <code>min-width</code> です。</dd>
 <dt><code>min-content</code></dt>
 <dd>内容物の最小の <code>min-width</code> です。</dd>
 <dt><code>fit-content({{cssxref("&lt;length-percentage&gt;")}})</code></dt>
 <dd>利用可能な空白を指定された引数で置き換えた <code>fit-content</code> 式を使用します。すなわち、 <code>min(max-content, max(min-content, <var>引数</var>))</code> です。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush:css;">table { min-width: 75%; }

form { min-width: 0; }
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
   <td>{{SpecName('CSS4 Sizing', '#width-height-keywords', 'min-width')}}</td>
   <td>{{Spec2('CSS4 Sizing')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Sizing', '#width-height-keywords', 'min-width')}}</td>
   <td>{{Spec2('CSS3 Sizing')}}</td>
   <td>キーワード <code>max-content</code>, <code>min-content</code>, <code>fit-content</code> を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Flexbox', '#min-size-auto', 'min-width')}}</td>
   <td>{{Spec2('CSS3 Flexbox')}}</td>
   <td>キーワード <code>auto</code> を追加し、初期値として使用する</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visudet.html#min-max-widths', 'min-width')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.min-width")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref("width")}}, {{Cssxref("max-width")}}</li>
 <li><a href="/ja/docs/Web/CSS/box_model" title="CSS/box_model">ボックスモデル</a>, {{Cssxref("box-sizing")}}</li>
</ul>
