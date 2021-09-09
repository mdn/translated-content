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
*CSS Гриды (они же сетки или CSS Grid)* устанавливаются с помощью значения `grid` в свойстве `display`; вы можете определить колонки и строки в сетке с помощью свойств {{cssxref("grid-template-columns")}} и {{cssxref("grid-template-rows")}} соответственно.

Сетка, которую вы создаёте, используя эти свойства, является явной сеткой.

If you place content outside of this explicit grid, or if you are relying on auto-placement and the grid algorithm needs to create additional row or column {{glossary("grid tracks", "tracks")}} to hold {{glossary("grid item", "grid items")}}, then extra tracks will be created in the implicit grid. The _implicit grid_ is the grid created automatically due to content being added outside of the tracks defined.

В примере ниже отображена _точная сетка_ из трёх колонок и двух рядов. The _third_ row on the grid is an _implicit grid_ row track, formed due to their being more than the six items which fill the explicit tracks.

<div id="example"><div class="hidden"><pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
border: 2px solid #f76707;
border-radius: 5px;
background-color: #fff4e6;
}

.wrapper > div {
border: 2px solid #ffa94d;
border-radius: 5px;
background-color: #ffd8a8;
padding: 1em;
color: #d9480f;
}

</pre></div><pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
</pre><pre class="brush: html">&#x3C;div class="wrapper">
   &#x3C;div>One&#x3C;/div>
   &#x3C;div>Two&#x3C;/div>
   &#x3C;div>Three&#x3C;/div>
   &#x3C;div>Four&#x3C;/div>
   &#x3C;div>Five&#x3C;/div>
   &#x3C;div>Six&#x3C;/div>
   &#x3C;div>Seven&#x3C;/div>
   &#x3C;div>Eight&#x3C;/div>
&#x3C;/div>
</pre><p>{{ EmbedLiveSample('example', '500', '330') }}</p><h2 id="Дополнительные_материалы">Дополнительные материалы</h2><h3 id="Руководство_по_свойствам">Руководство по свойствам</h3><ul><li>{{cssxref("grid-template-columns")}}</li><li>{{cssxref("grid-template-rows")}}</li><li>{{cssxref("grid")}}</li><li>{{cssxref("grid-template")}}</li></ul><h3 id="Что_почитать_ещё">Что почитать ещё</h3><ul><li>Руководство по CSS Grid: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Базовые принципы CSS сеток</a></em></li></ul></div>
