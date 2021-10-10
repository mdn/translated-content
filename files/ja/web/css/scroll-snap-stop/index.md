---
title: scroll-snap-stop
slug: Web/CSS/scroll-snap-stop
tags:
  - CSS
  - CSS スクロールスナップ
  - Reference
  - scroll-snap-stop
  - ウェブ
translation_of: Web/CSS/scroll-snap-stop
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>scroll-snap-stop</code></strong> プロパティは、スクロールコンテナーが可能なスナップ位置を「通り過ぎる」ことを許可するかどうかを定義します。</p>

<pre class="brush:css no-line-numbers">/* キーワード値 */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* グローバル値 */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: unset;
</pre>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>スクロールコンテナーの視覚的な{{Glossary("viewport", "ビューポート")}}がスクロールされた時、可能なスナップ位置を「通り過ぎる」ことがあります。</dd>
 <dt><code>always</code></dt>
 <dd>スクロールコンテナーは可能なスナップ位置を「通り過ぎる」ことはありません。最初の要素のスナップ位置にスナップします。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<p>この例は {{cssxref("scroll-snap-type")}} から複製したものに多少の修正を加えたものです。</p>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">/* setup */
:root, body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}
.container {
  display: flex;
  overflow: auto;
  outline: 1px dashed lightgray;
  flex: none;
}

.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
}

.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
}
/* definite scroll snap */
.mandatory-scroll-snapping {
  scroll-snap-stop: always;
}
.proximity-scroll-snapping {
  scroll-snap-stop: normal;
}
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}

.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

.container &gt; div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

.x.container &gt; div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

.y.container &gt; div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 256px;
}
/* appearance fixes */
.y.container &gt; div:first-child {
  line-height: 1.3;
  font-size: 64px;
}
/* coloration */
.container &gt; div:nth-child(even) {
  background-color: #87EA87;
}

.container &gt; div:nth-child(odd) {
  background-color: #87CCEA;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="container x mandatory-scroll-snapping" dir="ltr"&gt;
  &lt;div&gt;X Mand. LTR &lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container x proximity-scroll-snapping" dir="ltr"&gt;
  &lt;div&gt;X Proximity LTR&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container y mandatory-scroll-snapping" dir="ltr"&gt;
  &lt;div&gt;Y Mand. LTR&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container y proximity-scroll-snapping" dir="ltr"&gt;
  &lt;div&gt;Y Prox. LTR&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container x mandatory-scroll-snapping" dir="rtl"&gt;
  &lt;div&gt;X Mandatory RTL&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container x proximity-scroll-snapping" dir="rtl"&gt;
  &lt;div&gt;X Proximity RTL&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container y mandatory-scroll-snapping" dir="rtl"&gt;
  &lt;div&gt;Y Mand. RTL&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;

&lt;div class="container y proximity-scroll-snapping" dir="rtl"&gt;
  &lt;div&gt;Y Prox. RTL&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{EmbedLiveSample("Example", "100%", "1630")}}</p>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td>{{SpecName("CSS Scroll Snap Points", "#propdef-scroll-snap-stop", "scroll-snap-stop")}}</td>
   <td>{{Spec2("CSS Scroll Snap Points")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.scroll-snap-stop")}}</p>
