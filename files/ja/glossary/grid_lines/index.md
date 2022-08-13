---
title: Grid ライン
slug: Glossary/Grid_Lines
tags:
  - CSS Grids
translation_of: Glossary/Grid_Lines
---
<p><strong>Grid ライン</strong>は <a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッドレイアウト</a>を用いて明示的グリッドとして {{glossary("Grid tracks", "トラック")}} を定義すると作成されます。次の例は 3 列のトラックと 2 行のトラックを含むグリッドとなります。この例では 4 つの列ラインと 3 つの行ラインが作られます。</p>

<div id="example_1">
<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
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

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div&gt;One&lt;/div&gt;
   &lt;div&gt;Two&lt;/div&gt;
   &lt;div&gt;Three&lt;/div&gt;
   &lt;div&gt;Four&lt;/div&gt;
   &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
</pre>

<p>{{ EmbedLiveSample('example_1', '500', '250') }}</p>

<p>ラインはライン番号で指定できます。英語や日本語のように左から右方向に、列ライン 1 がグリッドの左端、行ライン 1 が上端となります。ライン番号はドキュメントの <a href="/ja/docs/Web/CSS/CSS_Writing_Modes">ライティングモード</a> を考慮するため、右から左へと記述する言語に於いては例えば列ライン 1 はグリッドの右端となります。下の画像では左から右の言語でのグリッドにおけるライン番号を図示しています。</p>

<p><img alt="Diagram showing the grid with lines numbered." src="https://mdn.mozillademos.org/files/14763/1_diagram_numbered_grid_lines.png" style="height: 456px; width: 764px;"></p>
</div>

<p>明示的グリッド外にコンテンツを保持するため暗黙的トラックが作成されると暗黙的グリッド上にもラインは作成されますが、それらのラインは番号で指定することはできません。</p>

<h2 id="ライン番号でグリッド上のアイテムの配置を指定する">ライン番号でグリッド上のアイテムの配置を指定する</h2>

<p>グリッドを作成すると、ライン番号を使ってアイテムをグリッド上に配置できます。次の例では、列ライン 1 から列ライン 3 、行ライン 1 から行ライン 3 の間にアイテムを配置しています。</p>

<div id="example_2">
<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
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

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="item"&gt;Item&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
</pre>

<p>{{ EmbedLiveSample('example_2', '500', '250') }}</p>
</div>

<h2 id="名前付きライン">名前付きライン</h2>

<p>明示的グリッドで生成されるラインには、トラックサイズの情報の前後に角括弧で囲んだ名前書くことで、名前を付けられます。次に示すように、ライン番号の代わりにこれらの名前を使ってアイテムを配置できます。</p>

<div id="example_3">
<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
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

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="item"&gt;Item&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [cols-end];
  grid-template-rows: [row1-start] 100px [row2-start] 100px [rows-end];
}
.item {
  grid-column-start: col1-start;
  grid-column-end: col3-start;
  grid-row-start: row1-start;
  grid-row-end: rows-end;
}
</pre>

<p>{{ EmbedLiveSample('example_3', '500', '250') }}</p>
</div>

<h2 id="より詳しく">より詳しく</h2>

<h3 id="プロパティリファレンス">プロパティリファレンス</h3>

<ul>
 <li>{{cssxref("grid-template-columns")}}</li>
 <li>{{cssxref("grid-template-rows")}}</li>
 <li>{{cssxref("grid-column-start")}}</li>
 <li>{{cssxref("grid-column-end")}}</li>
 <li>{{cssxref("grid-column")}}</li>
 <li>{{cssxref("grid-row-start")}}</li>
 <li>{{cssxref("grid-row-end")}}</li>
 <li>{{cssxref("grid-row")}}</li>
</ul>

<h3 id="より詳しい説明">より詳しい説明</h3>

<ul>
 <li>CSS グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">グリッドレイアウトの基本コンセプト</a></em></li>
 <li>CSS グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">ライン指定による CSS グリッド位置指定</a></em></li>
 <li>CSS グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">名前付きグリッドラインによるレイアウト</a></em></li>
 <li>CSS グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">CSS グリッド、論理値とライティングモード</a></em></li>
 <li><a href="https://drafts.csswg.org/css-grid/#grid-line-concept">CSS グリッドレイアウト仕様におけるグリッドラインの定義</a></li>
</ul>
