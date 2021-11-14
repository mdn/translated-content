---
title: border-bottom-style
slug: Web/CSS/border-bottom-style
tags:
  - CSS
  - CSS プロパティ
  - CSS 背景と境界
  - border
  - border-bottom
  - border-style
  - リファレンス
translation_of: Web/CSS/border-bottom-style
---
<div>{{CSSRef}}</div>

<p><strong><code>border-bottom-style</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素の下側の境界 ({{cssxref("border")}}) における線の形状を設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/border-bottom-style.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<div class="note"><strong>メモ:</strong> 仕様書では、異なる形状の境界線を角でどの様に接続するかを定義していません。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* キーワード値 */
border-bottom-style: none;
border-bottom-style: hidden;
border-bottom-style: dotted;
border-bottom-style: dashed;
border-bottom-style: solid;
border-bottom-style: double;
border-bottom-style: groove;
border-bottom-style: ridge;
border-bottom-style: inset;
border-bottom-style: outset;

/* グローバル値 */
border-bottom-style: inherit;
border-bottom-style: initial;
border-bottom-style: unset;
</pre>

<p><code>border-bottom-style</code> プロパティは、 {{cssxref("border-style")}} プロパティで利用できるキーワードのうちの一つで指定します。</p>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>こちらの表では border-bottom-style のすべての値を紹介します。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;table&gt;
  &lt;tr&gt;
    &lt;td class="b1"&gt;none&lt;/td&gt;
    &lt;td class="b2"&gt;hidden&lt;/td&gt;
    &lt;td class="b3"&gt;dotted&lt;/td&gt;
    &lt;td class="b4"&gt;dashed&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td class="b5"&gt;solid&lt;/td&gt;
    &lt;td class="b6"&gt;double&lt;/td&gt;
    &lt;td class="b7"&gt;groove&lt;/td&gt;
    &lt;td class="b8"&gt;ridge&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td class="b9"&gt;inset&lt;/td&gt;
    &lt;td class="b10"&gt;outset&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">/* 表の外見を定義 */
table {
  border-width: 3px;
  background-color: #52E385;
}
tr, td {
  padding: 3px;
}

/* border-bottom-style の例のクラス */
.b1 {border-bottom-style: none;}
.b2 {border-bottom-style: hidden;}
.b3 {border-bottom-style: dotted;}
.b4 {border-bottom-style: dashed;}
.b5 {border-bottom-style: solid;}
.b6 {border-bottom-style: double;}
.b7 {border-bottom-style: groove;}
.b8 {border-bottom-style: ridge;}
.b9 {border-bottom-style: inset;}
.b10 {border-bottom-style: outset;}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Examples', 300, 200) }}</p>

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
   <td>{{ SpecName('CSS3 Backgrounds', '#propdef-border-bottom-style', 'border-bottom-style') }}</td>
   <td>{{ Spec2('CSS3 Backgrounds') }}</td>
   <td>重要な変更はなし。</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS2.1', 'box.html#border-style-properties', 'border-bottom-style') }}</td>
   <td>{{ Spec2('CSS2.1') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.border-bottom-style")}}</p>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>その他の形状に関する境界のプロパティ: {{ Cssxref("border-left-style") }}, {{ Cssxref("border-right-style") }}, {{ Cssxref("border-top-style") }}, {{ Cssxref("border-style") }}</li>
 <li>その他の下側の境界に関するプロパティ: {{ Cssxref("border-bottom") }}, {{ Cssxref("border-bottom-color") }}, {{ Cssxref("border-bottom-width") }}</li>
</ul>
