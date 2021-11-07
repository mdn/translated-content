---
title: margin-top
slug: Web/CSS/margin-top
tags:
  - CSS
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/margin-top
---
<div>{{CSSRef}}</div>

<p><strong><code>margin-top</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素の上側の<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">マージン領域</a>を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。</p>

<div>{{EmbedInteractiveExample("pages/css/margin-top.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>このプロパティは、<em><a href="/ja/docs/Web/CSS/Replaced_element">置換要</a></em>ではないインライン要素、例えば {{HTMLElement("span")}} や {{HTMLElement("code")}} には効果がありません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* &lt;length&gt; 値 */
margin-top: 10px;  /* 絶対的な寸法 */
margin-top: 1em;   /* 文字の寸法からの相対 */
margin-top: 5%;    /* 直近のブロックコンテナーの幅からの相対 */

/* キーワード値 */
margin-top: auto;

/* グローバル値 */
margin-top: inherit;
margin-top: initial;
margin-top: unset;
</pre>

<p><code>margin-top</code> プロパティは <code>auto</code> キーワード、または <code>&lt;length&gt;</code> や <code>&lt;percentage&gt;</code> で指定されます。正の数、ゼロ、負の数が指定できます。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>固定値によるマージンの寸法です。</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>包含ブロックの <em>width</em> に対するパーセントによるマージンの寸法です。</dd>
 <dt><code>auto</code></dt>
 <dd>ブラウザ―が適切な値を選択して使用します。 {{cssxref("margin")}} を参照してください。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_positive_and_negative_top_margins" name="Setting_positive_and_negative_top_margins">正と負の上マージンの設定</h3>

<pre class="brush:css; notranslate">.content { margin-top:   5%; }
.sidebox { margin-top: 10px; }
.logo    { margin-top: -5px; }
#footer  { margin-top:  1em; }
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
   <td>{{SpecName('CSS3 Box', '#the-margin', 'margin-top')}}</td>
   <td>{{Spec2('CSS3 Box')}}</td>
   <td>目立った変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#margin-properties', 'margin-top')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>ただしインライン要素での効果を削除。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#margin-top', 'margin-top')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.margin-top")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} と {{cssxref("margin")}} 一括指定</li>
 <li>対応付けられる論理的プロパティ: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}} および一括指定の {{cssxref("margin-block")}} と {{cssxref("margin-inline")}}</li>
</ul>
