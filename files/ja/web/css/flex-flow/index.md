---
title: flex-flow
slug: Web/CSS/flex-flow
tags:
  - CSS
  - CSS フレックスボックス
  - CSS プロパティ
  - Reference
  - 一括指定プロパティ
translation_of: Web/CSS/flex-flow
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>flex-flow</code></strong> プロパティは、 {{cssxref("flex-direction")}} プロパティと {{cssxref("flex-wrap")}} プロパティの<a href="/ja/docs/Web/CSS/Shorthand_properties">一括指定</a>プロパティです。</p>

<div>{{EmbedInteractiveExample("pages/css/flex-flow.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* flex-flow: &lt;'flex-direction'&gt; */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: &lt;'flex-wrap'&gt; */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: &lt;'flex-direction'&gt; および &lt;'flex-wrap'&gt; */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* グローバル値 */
flex-flow: inherit;
flex-flow: initial;
flex-flow: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<p>値に関して詳しくは、 {{cssxref("flex-direction")}} および {{cssxref("flex-wrap")}} をご覧ください。</p>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush:css;highlight:3">element {
  /* main-axis は block 方向で、 main-start と main-end を逆にします。フレックスアイテムは複数行にレイアウトされます */
  flex-flow: column-reverse wrap;
}
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
   <td>{{ SpecName('CSS3 Flexbox','#flex-flow-property','flex-flow') }}</td>
   <td>{{ Spec2('CSS3 Flexbox') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.flex-flow")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>CSS フレックスボックスガイド: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">フレックスボックスの基本概念</a></em></li>
 <li>CSS フレックスボックスガイド: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items">フレックスアイテムの順序</a></em></li>
</ul>
