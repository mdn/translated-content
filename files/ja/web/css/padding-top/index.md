---
title: padding-top
slug: Web/CSS/padding-top
tags:
  - CSS
  - CSS Padding
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/padding-top
---
<div>{{CSSRef}}</div>

<p><strong><code>padding-top</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素の<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area">パディング領域</a>における上側の高さを設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/padding-top.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>要素のパディング領域とは、コンテンツと境界線との間の空間のことです。</p>

<p><img alt="CSS の padding-top プロパティの要素ボックスへの影響" src="/files/4105/padding-top.svg" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<div class="note">
<p><strong>注:</strong> {{cssxref("padding")}} プロパティは、単一の宣言で要素の四方のパディングをすべて設定することができます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* &lt;length&gt; の値 */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* &lt;percentage&gt; の値 */
padding-top: 10%;

/* グローバル値 */
padding-top: inherit;
padding-top: initial;
padding-top: unset;
</pre>

<p><code>padding-top</code> プロパティは、以下のリスト内から選択した値で指定されます。マージンとは異なり、パディングには負の数は使用できません。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>固定値によるパディングの寸法です。負の数であってはいけません。</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>包含ブロックの <em>width</em> に対するパーセント値によるパディングの寸法です。負の数であってはいけません。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_top_padding_using_pixels_and_percentages" name="Setting_top_padding_using_pixels_and_percentages">上パディングをピクセル数とパーセント値で設定</h3>

<pre class="brush: css notranslate">.content { padding-top: 5%; }
.sidebox { padding-top: 10px; }
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
   <td>{{SpecName('CSS3 Box', '#propdef-padding-top', 'padding-top')}}</td>
   <td>{{Spec2('CSS3 Box')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#padding-properties', 'padding-top')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{Specname('CSS1', '#padding-top', 'padding-top')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.padding-top")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">CSS 基本ボックスモデルの紹介</a></li>
 <li>{{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} および {{cssxref("padding")}} 一括指定</li>
 <li>対応付けられる論理的プロパティ: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}} および一括指定の {{cssxref("padding-block")}} と {{cssxref("padding-inline")}}</li>
</ul>
