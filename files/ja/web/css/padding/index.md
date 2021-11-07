---
title: padding
slug: Web/CSS/padding
tags:
  - CSS
  - CSS Padding
  - CSS Property
  - Reference
  - 'recipe:css-shorthand-property'
translation_of: Web/CSS/padding
---
<div>{{CSSRef}}</div>

<p><strong><code>padding</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Shorthand_properties">一括指定プロパティ</a>で、要素の全四辺の<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area">パディング領域</a>を一度に設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/padding.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>要素のパディング領域とは、コンテンツと境界線の間の領域のことです。</p>

<div class="note">
<p><strong>注:</strong> パディングは要素の内部に追加の領域を作成します。それに対して、 {{cssxref("margin")}} は要素の<em>周り</em>に追加の領域を作成します。</p>
</div>

<h2 id="Constituent_properties" name="Constituent_properties">構成要素のプロパティ</h2>

<p>このプロパティは以下の CSS プロパティの一括指定です。</p>

<ul>
 <li>{{cssxref("padding-bottom")}}</li>
 <li>{{cssxref("padding-left")}}</li>
 <li>{{cssxref("padding-right")}}}</li>
 <li>{{cssxref("padding-top")}}</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* 四辺すべてに適用 */
padding: 1em;

/* 上下 | 左右 */
padding: 5% 10%;

/* 上 | 左右 | 下 */
padding: 1em 2em 2em;

/* 上 | 右 | 下 | 左 */
padding: 5px 1em 0 1em;

/* グローバル値 */
padding: inherit;
padding: initial;
padding: unset;
</pre>

<p><code>padding</code> プロパティは1つ、2つ、3つ、4つの値を使って指定することができます。それぞれの値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。負の数は無効です。</p>

<ul>
 <li>値が<strong>1つ</strong>指定された場合、<strong>全四辺</strong>に同じパディングが適用される。</li>
 <li>値が<strong>2つ</strong>指定された場合、1つ目のパディングは<strong>上下</strong>、2つ目は<strong>左右</strong>の辺に適用される。</li>
 <li>値が<strong>3つ</strong>指定された場合、1つ目のパディングは<strong>上</strong>、2つ目は<strong>左右</strong>、3つ目は<strong>下</strong>の辺に適用される。</li>
 <li>値が<strong>4つ</strong>指定された場合、パディングはそれぞれ<strong>上</strong>、<strong>右</strong>、<strong>下</strong>、<strong>左</strong>の順 (時計回り) に適用される。</li>
</ul>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>固定値によるパディングの寸法です。</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>コンテナーブロックの<em>幅</em>に対するパーセント値によるパディングの寸法です。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_padding_with_pixels" name="Setting_padding_with_pixels">パディングをピクセル数で設定</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;h4&gt;This element has moderate padding.&lt;/h4&gt;
&lt;h3&gt;The padding is huge in this element!&lt;/h3&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">h4 {
  background-color: lime;
  padding: 20px 50px;
}

h3 {
  background-color: cyan;
  padding: 110px 50px 50px 110px;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p><span>{{EmbedLiveSample('Setting_padding_with_pixels', '100%', 300)}}</span></p>

<h3 id="Setting_padding_with_pixels_and_percentages" name="Setting_padding_with_pixels_and_percentages">パディングをピクセル数とパーセント値で設定</h3>

<pre class="brush: css notranslate">padding: 5%;                /* 全辺: 5% のパディング */

padding: 10px;              /* 全辺: 10px のパディング */

padding: 10px 20px;         /* 上と下: 10px のパディング */
                            /* 左と右: 20px のパディング */

padding: 10px 3% 20px;      /* 上:     10px のパディング */
                            /* 左と右: 3% のパディング   */
                            /* 下:     20px のパディング */

padding: 1em 3px 30px 5px;  /* 上:     1em のパディング  */
                            /* 右:     3px のパディング  */
                            /* 下:     30px のパディング */
                            /* 右:     5px のパディング  */ </pre>

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
   <td>{{SpecName('CSS3 Box', '#padding-shorthand', 'padding')}}</td>
   <td>{{Spec2('CSS3 Box')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#propdef-padding', 'padding')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{Specname('CSS1', '#padding', 'padding')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.padding")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">CSS 基本ボックスモデルの紹介</a></li>
 <li>{{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}</li>
 <li>対応付けられる論理的プロパティ: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}} および一括指定の {{cssxref("padding-block")}} と {{cssxref("padding-inline")}}</li>
</ul>
