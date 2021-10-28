---
title: empty-cells
slug: Web/CSS/empty-cells
tags:
  - CSS
  - CSS プロパティ
  - CSS 表
  - リファレンス
translation_of: Web/CSS/empty-cells
---
<div>{{CSSRef}}</div>

<p>CSS の <strong><code>empty-cells</code></strong> プロパティは、目に見える内容を持たない{{htmlelement("table", "表")}}のセルの、周囲の境界と背景を{{glossary("user agent", "ユーザーエージェント")}}がどのように描画するかを指定します。</p>

<div>{{EmbedInteractiveExample("pages/css/empty-cells.html")}}</div>

<p class="hidden">この対話型サンプルのソースファイルは GitHub リポジトリに格納されています。対話型サンプルプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>このプロパティは、 {{cssxref("border-collapse")}} プロパティが <code>separate</code> の場合のみ効果があります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* キーワード値 */
empty-cells: show;
empty-cells: hide;

/* グローバル値 */
empty-cells: inherit;
empty-cells: initial;
empty-cells: unset;
</pre>

<p><code>empty-cells</code> プロパティは、以下のキーワード値のうちの一つで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>show</code></dt>
 <dd>通常のセルのように、境界や背景を描くことを示すキーワードです。</dd>
 <dt><code>hide</code></dt>
 <dd>境界や背景を描かないことを示すキーワードです。</dd>
</dl>

<h3 id="Examples" name="Examples">例</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;table class="table_1"&gt;
  &lt;tr&gt;
    &lt;td&gt;Moe&lt;/td&gt;
    &lt;td&gt;Larry&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Curly&lt;/td&gt;
    &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
&lt;br&gt;
&lt;table class="table_2"&gt;
  &lt;tr&gt;
    &lt;td&gt;Moe&lt;/td&gt;
    &lt;td&gt;Larry&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Curly&lt;/td&gt;
    &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.table_1 {
  empty-cells: show;
}

.table_2 {
  empty-cells: hide;
}

td,
th {
  border: 1px solid gray;
  padding: 0.5rem;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Examples', '100%', '200') }}</p>

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
   <td>{{SpecName('CSS2.1', 'tables.html#empty-cells', 'empty-cells')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.empty-cells")}}</p>
