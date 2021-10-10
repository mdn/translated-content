---
title: scroll-padding-right
slug: Web/CSS/scroll-padding-right
tags:
  - CSS
  - Reference
  - Web
  - scroll-padding
  - scroll-padding-right
translation_of: Web/CSS/scroll-padding-right
---
<div>{{CSSRef}}</div>

<p><code>scroll-padding-right</code> プロパティは、スクロールポートの<dfn>最適表示領域</dfn>のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。</p>

<div>{{EmbedInteractiveExample("pages/css/scroll-padding-right.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css">/* キーワード値 */
scroll-padding-right: auto;

/* &lt;length&gt; 値 */
scroll-padding-right: 10px;
scroll-padding-right: 1em;
scroll-padding-right: 10%;

/* グローバル値 */
scroll-padding-right: inherit;
scroll-padding-right: initial;
scroll-padding-right: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code><var>&lt;length-percentage&gt;</var></code></dt>
 <dd>スクロールポートの上辺からの内側のオフセットで、有効な長さまたはパーセント値です。</dd>
 <dt><code>auto</code></dt>
 <dd>オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

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
   <td>{{SpecName("CSS Scroll Snap Points", "#propdef-scroll-padding-right", "scroll-padding-right")}}</td>
   <td>{{Spec2("CSS Scroll Snap Points")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.scroll-padding-right")}}</p>
