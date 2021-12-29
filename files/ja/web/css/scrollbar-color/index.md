---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - scrollbar-color
  - スクロールバー
translation_of: Web/CSS/scrollbar-color
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>scrollbar-color</code></strong> プロパティは、スクロールバーのトラックとつまみの色を設定します。</span></p>

<p><strong>トラック</strong>はスクロールバーの背景を表し、一般的にスクロール位置にかかわらず固定されています。</p>

<p><strong>つまみ</strong>はスクロールバーの動く部分で、ふつうはトラックの上を動きます。</p>

<div>{{EmbedInteractiveExample("pages/css/scrollbar-color.html")}}</div>

<p>{{CSSInfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css notranslate">/* キーワード値 */
scrollbar-color: auto;
scrollbar-color: dark;
scrollbar-color: light;

/* &lt;color&gt; 値 */
scrollbar-color: rebeccapurple green;   /* 二つの有効な色。
一つ目はスクロールバーのつまみ、二つ目はトラックに適用される。 */

/* グローバル値 */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;scrollbar-color&gt;</code></dt>
 <dd>スクロールバーの色を定義します。
 <table class="standard-table">
  <tbody>
   <tr>
    <td><code>auto</code></td>
    <td>他にスクロールバーに関する色のプロパティがない場合、スクロールバーの位置を表す既定の表示になります。</td>
   </tr>
   <tr>
    <td><code>dark</code></td>
    <td>暗い色のスクロールバーを示し、プラットフォームで提供している暗い色のスクロールバー化、暗い色のカスタムスクロールバーのどちらかになります。</td>
   </tr>
   <tr>
    <td><code>light</code></td>
    <td>明るい色のスクロールバーを示し、プラットフォームで提供している明るい色のスクロールバー化、明るい色のカスタムスクロールバーのどちらかになります。</td>
   </tr>
   <tr>
    <td><code>&lt;color&gt; &lt;color&gt;</code></td>
    <td>最初の色をスクロールバーのつまみに、二番目の色をスクロールバーのトラックに適用します。</td>
   </tr>
  </tbody>
 </table>

 <div class="note">
 <p><strong>メモ</strong>: ユーザーエージェントはビューポートのルート要素に、何らかの <code>scrollbar-color</code> の値を適用しなければなりません。</p>
 </div>
 </dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css notranslate">.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div class="scroller"&gt;Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.&lt;/div&gt;</pre>

<h3 id="Result" name="Result">結果</h3>

<div>{{EmbedLiveSample("Example")}}</div>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮事項</h2>

<p><code>scrollbar-color</code> プロパティで色の値を指定して使用する場合、指定した色の間に十分なコントラストがあることを確認してください。キーワード値の場合、ユーザーエージェントは使用する色の間に十分なコントラストがあることを確認してください。 <a href="https://www.w3.org/TR/WCAG20-TECHS/G183.html">Techniques for WCAG 2.0: G183: Using a contrast ratio of 3:1</a> を参照してください。</p>

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
   <td>{{SpecName("CSS Scrollbars", "#scrollbar-color", "scrollbar-color")}}</td>
   <td>{{Spec2("CSS Scrollbars")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("css.properties.scrollbar-color")}}</div>
