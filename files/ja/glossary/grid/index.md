---
title: Grid (グリッド)
slug: Glossary/Grid
tags:
  - CSS
  - CSS Grid
  - CSS グリッド
  - Glossary
  - 用語集
translation_of: Glossary/Grid
---
<p><strong>CSS グリッド</strong> は {{cssxref("display")}} プロパティの値に <code>grid</code> を指定して定義します。グリッドの列や行は {{cssxref("grid-template-rows")}} や {{cssxref("grid-template-columns")}} プロパティで定義します。</p>

<p>これらのプロパティを使って定義したグリッドのことを <strong>明示的グリッド</strong> <em>(explicit grid) </em>と呼びます。</p>

<p>明示的グリッドの外にコンテンツを配置する場合や、自動配置に任せる場合、{{glossary("grid item", "グリッドアイテム")}} が収まるように行や列の {{glossary("grid tracks", "グリッドトラック")}} がグリッドアルゴリズムに従って暗黙的に追加されます。<strong>暗黙的グリッド</strong> (<em>implicit grid</em>) は、定義済みのトラックの外部にコンテンツを配置するため自動的に作成されるグリッドです。</p>

<p>次の例では 3 列 2 行の<strong>明示的グリッド</strong>を作成しています。グリッドで 3 つ目の行は、明示的グリッドが定義している 6 つ以上のアイテムが含まれていることで作られた、<strong>暗黙的グリッド</strong>による行トラックです。</p>

<div id="example">
<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div&gt;One&lt;/div&gt;
   &lt;div&gt;Two&lt;/div&gt;
   &lt;div&gt;Three&lt;/div&gt;
   &lt;div&gt;Four&lt;/div&gt;
   &lt;div&gt;Five&lt;/div&gt;
   &lt;div&gt;Six&lt;/div&gt;
   &lt;div&gt;Seven&lt;/div&gt;
   &lt;div&gt;Eight&lt;/div&gt;
&lt;/div&gt;
</pre>
</div>

<p>{{ EmbedLiveSample('example', '500', '330') }}</p>

<section id="Quick_links">
<ol>
 <li>CSS グリッドレイアウトガイド:<br>
  <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">グリッドレイアウトの基本コンセプト</a></em></li>
 <li>プロパティリファレンス
  <ol>
   <li>{{cssxref("grid-template-columns")}}</li>
   <li>{{cssxref("grid-template-rows")}}</li>
   <li>{{cssxref("grid")}}</li>
   <li>{{cssxref("grid-template")}}</li>
  </ol>
 </li>
</ol>
</section>
