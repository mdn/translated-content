---
title: scroll-margin-right
slug: Web/CSS/scroll-margin-right
tags:
  - CSS
  - CSS Property
  - Reference
  - Web
  - scroll-margin
  - scroll-margin-right
translation_of: Web/CSS/scroll-margin-right
---
<div>{{CSSRef}}</div>

<p><code>scroll-margin-right</code> プロパティは、スクロールスナップ領域の右側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。</p>

<div>{{EmbedInteractiveExample("pages/css/scroll-margin-right.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css">/* &lt;length&gt; 値 */
scroll-margin-right: 10px;
scroll-margin-right: 1em;

/* グローバル値 */
scroll-margin-right: inherit;
scroll-margin-right: initial;
scroll-margin-right: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code><var>&lt;length&gt;</var></code></dt>
 <dd>スクロールコンテナーの右側の辺からみた外部の距離です。</dd>
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
   <td>{{SpecName("CSS Scroll Snap Points", "#propdef-scroll-margin-right", "scroll-margin-right")}}</td>
   <td>{{Spec2("CSS Scroll Snap Points")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.scroll-margin-right")}}</p>
