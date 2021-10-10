---
title: scroll-margin
slug: Web/CSS/scroll-margin
tags:
  - CSS
  - Reference
  - scroll-margin
translation_of: Web/CSS/scroll-margin
---
<div>{{CSSRef}}</div>

<p><strong><code>scroll-margin</code></strong> プロパティは一括指定プロパティであり、すべての個別指定の <code>scroll-margin</code> プロパティに対して、ちょうど <code>margin</code> プロパティが個別指定の <code>margin-*</code> に値を割り当てるように、値を割り当てます。</p>

<p><code>scroll-margin</code> の値はこのボックスをスナップポートに割り当てるために使用されるスクロールスナップ領域の定義の張り出し部分を表します。スクロールスナップ領域は、変換された境界ボックスを取り、その矩形の境界ボックス (スクロールコンテナーの座標空間内で軸方向に配置) を割り当てて、指定された張り出し部分を追加することによって決定されます。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css">/* &lt;length&gt; 値 */
scroll-margin: 10px;
scroll-margin: 1em .5em 1em 1em;

/* グローバル値 */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>スクロールコンテナーの辺からの張り出し部分です。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

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
   <td>{{SpecName("CSS Scroll Snap Points", "#propdef-scroll-margin", "scroll-margin")}}</td>
   <td>{{Spec2("CSS Scroll Snap Points")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.scroll-margin")}}</p>
