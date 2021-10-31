---
title: flex-grow
slug: Web/CSS/flex-grow
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Property
  - NeedsContent
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/flex-grow
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>flex-grow</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、フレックスアイテムの<a href="https://www.w3.org/TR/css-flexbox/#main-size">主軸方向の寸法</a>のフレックス伸長係数を設定します。</span></p>

<div>{{EmbedInteractiveExample("pages/css/flex-grow.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* &lt;number&gt; 値 */
flex-grow: 3;
flex-grow: 0.6;

/* グローバル値 */
flex-grow: inherit;
flex-grow: initial;
flex-grow: unset;
</pre>

<p><code>flex-grow</code> プロパティは単一の <code><a href="#&lt;number>">&lt;number&gt;</a></code> として指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><a id="&lt;number>" name="&lt;number>"><code>&lt;number&gt;</code></a></dt>
 <dd>{{cssxref("&lt;number&gt;")}} をご覧ください。負の値は無効です。既定値は0です。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>このプロパティは、フレックスコンテナー内の残りの空間のうち、どれだけがそのアイテムに割り当てられるか (フレックス伸長係数) を設定します。</p>

<p><a href="https://www.w3.org/TR/css-flexbox/#main-size">主軸方向の寸法</a>は、アイテムの幅または高さのどちらかで、 {{cssxref("flex-direction")}} の値に依存して決まります。</p>

<p>残りの空間とは、フレックスコンテナーの寸法からすべてのフレックスアイテムの寸法を引いたものです。すべての兄弟アイテムが同じフレックス伸長係数であった場合、すべてのアイテムには残りの空間が等しく割り当てられ、そうでなければ定義されたそれぞれフレックス伸長係数の比率に従って配分されます。</p>

<p>使用するにあたって、 <code>flex-grow</code> は他のフレックスプロパティである {{cssxref("flex-shrink")}} や {{cssxref("flex-basis")}} とともに使用され、通常はすべての値が設定されることを保証するために一括指定の {{cssxref("flex")}} を使用して定義します。</p>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_flex_item_grow_factor" name="Setting_flex_item_grow_factor">フレックスアイテムの伸長係数の設定</h3>

<h4 id="HTML">HTML</h4>

<div id="Live_Sample">
<pre class="brush: html notranslate">&lt;h4&gt;This is a Flex-Grow&lt;/h4&gt;
&lt;h5&gt;A,B,C and F are flex-grow:1 . D and E are flex-grow:2 .&lt;/h5&gt;
&lt;div id="content"&gt;
  &lt;div class="box" style="background-color:red;"&gt;A&lt;/div&gt;
  &lt;div class="box" style="background-color:lightblue;"&gt;B&lt;/div&gt;
  &lt;div class="box" style="background-color:yellow;"&gt;C&lt;/div&gt;
  &lt;div class="box1" style="background-color:brown;"&gt;D&lt;/div&gt;
  &lt;div class="box1" style="background-color:lightgreen;"&gt;E&lt;/div&gt;
  &lt;div class="box" style="background-color:brown;"&gt;F&lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">#content {
  display: flex;

  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.box {
  flex-grow: 1;
  border: 3px solid rgba(0,0,0,.2);
}

.box1 {
  flex-grow: 2;
  border: 3px solid rgba(0,0,0,.2);
}
</pre>
</div>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Setting_flex_item_grow_factor', '700px', '300px', '', 'Web/CSS/flex-grow')}}</p>

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
   <td>{{SpecName('CSS3 Flexbox','#flex-grow-property','flex-grow')}}</td>
   <td>{{Spec2('CSS3 Flexbox')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.flex-grow")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>CSS フレックスボックスガイド: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">フレックスボックスの基本概念</a></em></li>
 <li>CSS フレックスボックスガイド: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">フレックスアイテムの主軸方向における比率の制御</a></em></li>
 <li><a href="https://css-tricks.com/flex-grow-is-weird/">`flex-grow` is weird. Or is it?</a> Manuel Matuzovic による CSS-Tricks の記事で、どのように flex-grow が動作するかを解説している</li>
</ul>
