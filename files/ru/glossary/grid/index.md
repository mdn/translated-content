---
title: Grid
slug: Glossary/Grid
tags:
  - CSS
  - CSS Grids
  - Glossary
translation_of: Glossary/Grid
original_slug: Глоссарий/Grid
---
<p><em>CSS Гриды (они же сетки или CSS Grid)</em> устанавливаются с помощью значения <code>grid</code> в свойстве <code>display</code>; вы можете определить колонки и строки в сетке с помощью свойств {{cssxref("grid-template-columns")}} и {{cssxref("grid-template-rows")}} соответственно.</p>

<p>Сетка, которую вы создаёте, используя эти свойства, является явной сеткой.</p>

<p>If you place content outside of this explicit grid, or if you are relying on auto-placement and the grid algorithm needs to create additional row or column {{glossary("grid tracks", "tracks")}} to hold {{glossary("grid item", "grid items")}}, then extra tracks will be created in the implicit grid. The <em>implicit grid</em> is the grid created automatically due to content being added outside of the tracks defined.</p>

<p>В примере ниже отображена <em>точная сетка</em> из трёх колонок и двух рядов. The <em>third</em> row on the grid is an <em>implicit grid</em> row track, formed due to their being more than the six items which fill the explicit tracks.</p>

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

<p>{{ EmbedLiveSample('example', '500', '330') }}</p>

<h2 id="Дополнительные_материалы">Дополнительные материалы</h2>

<h3 id="Руководство_по_свойствам">Руководство по свойствам</h3>

<ul>
 <li>{{cssxref("grid-template-columns")}}</li>
 <li>{{cssxref("grid-template-rows")}}</li>
 <li>{{cssxref("grid")}}</li>
 <li>{{cssxref("grid-template")}}</li>
</ul>

<h3 id="Что_почитать_ещё">Что почитать ещё</h3>

<ul>
 <li>Руководство по CSS Grid: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Базовые принципы CSS сеток</a></em></li>
</ul>
</div>
