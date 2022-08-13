---
title: ガター
slug: Glossary/Gutters
tags:
  - CSS Grids
  - CSS グリッドレイアウト
translation_of: Glossary/Gutters
---
<p><strong>ガター</strong> もしくはアレーはコンテンツトラック間のスペースです。<a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッドレイアウト</a>で {{cssxref("grid-column-gap")}}、{{cssxref("grid-row-gap")}} あるいは {{cssxref("grid-gap")}} プロパティを使うとガターが作成されます。</p>

<p>下の例では 3 列 2 行のトラックを持つグリッドを、列トラックの間には 20 ピクセルの、列トラックの間には 20 ピクセルの隙間を空けています。</p>

<div id="example_1">
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
    background-color: #fff8f8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3,1.2fr);
  grid-auto-rows: 45%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div&gt;One&lt;/div&gt;
   &lt;div&gt;Two&lt;/div&gt;
   &lt;div&gt;Three&lt;/div&gt;
   &lt;div&gt;Four&lt;/div&gt;
   &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('example_1', '300', '280') }}</p>
</div>

<p>グリッドのサイズ決定においては、ガターによる隙間は通常のグリッドトラックのように扱われますが、隙間の中には何も配置できません。隙間の分だけその場所のグリッドラインのサイズが増えるように振る舞うため、そのラインの後のグリッドアイテムは隙間の後から始まるように配置されます。</p>

<p>トラックに余白を作るのは grid-gap プロパティだけではありません。マージン、パディング、 <a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box Alignment</a> のスペース分配プロパティなどいずれも視覚上の隙間を作ります。したがって、これらの方法で追加の余白は一切作らないデザインをしていない限り、grid-gap プロパティと「ガターサイズ」が一致するようには見えません。</p>

<h2 id="より詳しく">より詳しく</h2>

<h3 id="プロパティリファレンス">プロパティリファレンス</h3>

<ul>
 <li>{{cssxref("grid-column-gap")}}</li>
 <li>{{cssxref("grid-row-gap")}}</li>
 <li>{{cssxref("grid-gap")}}</li>
</ul>

<h3 id="より詳しい説明">より詳しい説明</h3>

<ul>
 <li>CSS グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">グリッドレイアウトの基本コンセプト</a></em></li>
 <li><a href="https://drafts.csswg.org/css-grid/#gutters">CSS グリッドレイアウト仕様におけるガターの定義</a></li>
</ul>
