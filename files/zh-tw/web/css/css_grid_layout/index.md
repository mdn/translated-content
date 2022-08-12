---
title: CSS格線布局
slug: Web/CSS/CSS_Grid_Layout
tags:
  - CSS
  - 參考
  - 布局
  - 柵格
  - 示列
  - 網格布局
translation_of: Web/CSS/CSS_Grid_Layout
---
{{CSSRef}}

<p><strong>CSS 格線佈局</strong>長於把頁面的主要區域分離、或是在 HTML 原生語法構建的區域間，定義大小、位置、層次等方面的關聯。</p>

<p>格線佈局使作者能夠對齊元素為行和列，就像表格一樣，。然而，格線佈局可以更輕易的達成比一般表格更多元化的排版。例如，一個網格容器的子元素可以定位自己和層重疊，類似於CSS定位元素。</p>

<h2 id="Basic_Example">基本示例</h2>

<p>以下示例展示了一個三列軌道格線，其中創建的行數最小為 100 像素，最大為 auto。Items 已經使用基於線放置在網格的位置上。</p>

<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper &gt; div {
  border: 2px solid rgb(233,171,88);
  border-radius: 5px;
  background-color: rgba(233,171,88,.5);
  padding: 1em;
  color: #d9480f;
}</pre>
</div>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="one"&gt;One&lt;/div&gt;
  &lt;div class="two"&gt;Two&lt;/div&gt;
  &lt;div class="three"&gt;Three&lt;/div&gt;
  &lt;div class="four"&gt;Four&lt;/div&gt;
  &lt;div class="five"&gt;Five&lt;/div&gt;
  &lt;div class="six"&gt;Six&lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-row: 2 / 5;
  grid-column: 1;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
</pre>

<p>{{ EmbedLiveSample('基本示例', '500', '440') }}</p>

<h2 id="參考">參考</h2>

<h3 id="CSS_屬性">CSS 屬性</h3>

<ul>
 <li>{{cssxref("grid-template-columns")}}</li>
 <li>{{cssxref("grid-template-rows")}}</li>
 <li>{{cssxref("grid-template-areas")}}</li>
 <li>{{cssxref("grid-template")}}</li>
 <li>{{cssxref("grid-auto-columns")}}</li>
 <li>{{cssxref("grid-auto-rows")}}</li>
 <li>{{cssxref("grid-auto-flow")}}</li>
 <li>{{cssxref("grid")}}</li>
 <li>{{cssxref("grid-row-start")}}</li>
 <li>{{cssxref("grid-column-start")}}</li>
 <li>{{cssxref("grid-row-end")}}</li>
 <li>{{cssxref("grid-column-end")}}</li>
 <li>{{cssxref("grid-row")}}</li>
 <li>{{cssxref("grid-column")}}</li>
 <li>{{cssxref("grid-area")}}</li>
 <li>{{cssxref("grid-row-gap")}}</li>
 <li>{{cssxref("grid-column-gap")}}</li>
 <li>{{cssxref("grid-gap")}}</li>
</ul>

<h3 id="CSS_函式">CSS 函式</h3>

<ul>
 <li>{{cssxref("repeat", "repeat()")}}</li>
 <li>{{cssxref("minmax", "minmax()")}}</li>
 <li>{{cssxref("fit-content", "fit-content()")}}</li>
</ul>

<h3 id="CSS_資料型別">CSS 資料型別</h3>

<ul>
 <li>{{cssxref("&lt;flex&gt;")}}</li>
</ul>

<h3 id="詞匯表條目">詞匯表條目</h3>

<ul>
 <li><a href="/zh-TW/docs/Glossary/Grid">格線</a></li>
 <li><a href="/zh-TW/docs/Glossary/Grid_Lines">網格線</a></li>
 <li><a href="/zh-TW/docs/Glossary/Grid_Tracks">格線軌道</a></li>
 <li><a href="/zh-TW/docs/Glossary/Grid_Cell">格線單元</a></li>
 <li><a href="/zh-TW/docs/Glossary/Grid_Areas">格線區域</a></li>
 <li><a href="/zh-TW/docs/Glossary/Gutters">間距</a></li>
 <li><a href="/zh-TW/docs/Glossary/Grid_Axis">格線軸</a></li>
 <li><a href="/zh-TW/docs/Glossary/Grid_Rows">格線行</a></li>
 <li><a href="/zh-TW/docs/Glossary/Grid_Column">格線列</a></li>
</ul>

<h2 id="指引">指引</h2>

<ul>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">格線布局的基本概念</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">格線布局與其它布局的關係</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">使用指定的格線命名排版</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">格線模板區域</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">Layout using named grid lines</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">使用指定的網格線排版</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">在 CSS 自動放置格線布局</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">用 Box 對齊 CSS 格線布局</a></li>
 <li><br>
  <a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">CSS 格線、邏輯值和寫作模式</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS 格線布局與無障礙</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS 格線與漸進增強</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Realising_common_layouts_using_CSS_Grid_">用 CSS 格線實做常見排版</a></li>
</ul>

<h2 id="外部資源">外部資源</h2>

<ul>
 <li><a href="http://labs.jensimmons.com/">Jen Simmons 的示範</a></li>
 <li><a href="http://gridbyexample.com/">格線示例：一些影片教學與使用範例</a></li>
 <li><a href="https://tympanus.net/codrops/css_reference/grid/">Codrops 格線參考</a></li>
 <li><a href="/zh-TW/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Firefox DevTools CSS Grid Inspector</a></li>
 <li><a href="https://mozilladevelopers.github.io/playground/">CSS Grid Playground</a></li>
</ul>

<h2 id="規範">規範</h2>

{{Specifications}}
