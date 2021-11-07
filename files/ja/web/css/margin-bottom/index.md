---
title: margin-bottom
slug: Web/CSS/margin-bottom
tags:
  - CSS
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/margin-bottom
---
<div>{{CSSRef}}</div>

<p><strong><code>margin-bottom</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素の下側の<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">マージン領域</a>を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。</p>

<div>{{EmbedInteractiveExample("pages/css/margin-bottom.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p><img alt="要素ボックスにおける CSS の margin-bottom プロパティの効果" src="/files/4045/margin-bottom.svg" style="border: 1px solid; display: block; height: 130px; margin-left: auto; margin-right: auto; width: 400px;"></p>

<p>このプロパティは、 {{HTMLElement("span")}} または {{HTMLElement("code")}} のような<em>非<a href="/ja/docs/Web/CSS/Replaced_element">置換</a></em>のインライン要素には効果がありません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* &lt;length&gt; 値 */
margin-bottom: 10px;  /* 絶対的な寸法 */
margin-bottom: 1em;   /* 文字の寸法からの相対 */
margin-bottom: 5%;    /* 直近のブロックコンテナーの幅からの相対 */

/* キーワード値 */
margin-bottom: auto;

/* グローバル値 */
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: unset;
</pre>

<p><code>margin-bottom</code> プロパティは <code>auto</code> キーワード、または <code>&lt;length&gt;</code> や <code>&lt;percentage&gt;</code> で指定されます。正の数、ゼロ、負の数が指定できます。</p>

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

<h3 id="Setting_positive_and_negative_bottom_margins" name="Setting_positive_and_negative_bottom_margins">正および負の数の下側のマージンの設定</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="container"&gt;
&lt;div class="box0"&gt;Box 0&lt;/div&gt;
&lt;div class="box1"&gt;Box 1&lt;/div&gt;
&lt;div class="box2"&gt;Box one's negative margin pulls me up&lt;/div&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<p>div に margin-bottom と height を設定する CSS です。</p>

<pre class="brush: css notranslate">.box0 {
    margin-bottom:1em;
    height:3em;
}
.box1 {
    margin-bottom:-1.5em;
    height:4em;
}
.box2 {
    border:1px dashed black;
    border-width:1px 0;
    margin-bottom:2em;
}

</pre>

<p>包含要素と div の定義の一部です。これによって margin の効果がより明確に見えます。</p>

<pre class="brush: css notranslate">.container {
    background-color:orange;
    width:320px;
    border:1px solid black;
}
div {
    width:320px;
    background-color:gold;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Setting_positive_and_negative_bottom_margins',350,200) }}</p>

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
   <td>{{SpecName('CSS3 Box', '#propdef-margin-bottom', 'margin-bottom')}}</td>
   <td>{{Spec2('CSS3 Box')}}</td>
   <td>目立った変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#margin-properties', 'margin-bottom')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>CSS1 と同様、ただしインライン要素での効果は削除。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#margin-bottom', 'margin-bottom')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.margin-bottom")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-left")}} と {{cssxref("margin")}} 一括指定</li>
 <li>対応する論理プロパティ: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}} および一括指定の {{cssxref("margin-block")}} と {{cssxref("margin-inline")}}</li>
</ul>
