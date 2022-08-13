---
title: CSS Grid Layout
slug: Web/CSS/CSS_Grid_Layout
translation_of: Web/CSS/CSS_Grid_Layout
---
<p><strong>CSS Grid Layout</strong> отлично подходит для того, чтобы разделить страницу на основные области или определить взаимосвязь размера, позиционирования и уровня между частями контента, состоящего из HTML примитивов.</p>

<p>Как и таблицы (&lt;table&gt;), grid layout позволяет выравнивать элементы в столбцы и строки. Тем не менее, с помощью CSS grid работать с элементами гораздо проще, чем с таблицами. Например, дочерние элементы grid-контейнера могут наслаиваться друг на друга как  и другие элементы при помощи CSS.</p>

<h2 id="Basic_Example">Базовый пример</h2>

<p>В приведённом ниже примере показана сетка  состоящая из трёх колонок, в которой минимальная ширина элементов строки установлена в "100px", а максимальная в "auto". Grid-элементы располагаются в сетке линейно.</p>

<div id="example">
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
  grid-column: 1;
  grid-row: 2 / 5;
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

<p>{{ EmbedLiveSample('example', '500', '440') }}</p>
</div>

<h2 id="Ссылки">Ссылки</h2>

<h3 id="CSS_свойства">CSS-свойства</h3>

<div class="index">
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
</div>

<h3 id="CSS_функции">CSS функции</h3>

<div class="index">
<ul>
 <li>{{cssxref("repeat", "repeat()")}}</li>
 <li>{{cssxref("minmax", "minmax()")}}</li>
 <li>{{cssxref("fit-content", "fit-content()")}}</li>
</ul>
</div>

<h3 id="Глоссарий">Глоссарий</h3>

<div class="index">
<ul>
 <li><a href="/en-US/docs/Glossary/Grid">Grid</a></li>
 <li><a href="/en-US/docs/Glossary/Grid_Lines">Grid Lines</a></li>
 <li><a href="/en-US/docs/Glossary/Grid_Tracks">Grid Tracks</a></li>
 <li><a href="/en-US/docs/Glossary/Grid_Cell">Grid Cell</a></li>
 <li><a href="/en-US/docs/Glossary/Grid_Areas">Grid Area</a></li>
 <li><a href="/en-US/docs/Glossary/Gutters">Gutters</a></li>
 <li><a href="/en-US/docs/Glossary/Grid_Axis">Grid Axis</a></li>
 <li><a href="/en-US/docs/Glossary/Grid_Rows">Grid row</a></li>
 <li><a href="/en-US/docs/Glossary/Grid_Column">Grid column</a></li>
</ul>
</div>

<h2 id="Руководства">Руководства</h2>

<div class="index">
<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Базовая концепция Grid Layout</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">Связь Grid Layout с другими методами компоновки</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Расположение элементов по грид-линиям с помощью CSS Grid</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Шаблон области сетки</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">Использование именованных линий</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">Авторазмещение в CSS Grid Layout</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Выравнивание блока в CSS Grid Layout</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">CSS Сетка, логические Значения и Режимы Редактирования</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS Grid Layout и доступность</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS Grid and progressive enhancement</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Realising_common_layouts_using_CSS_Grid_">Реализация общих макетов используя CSS Grid</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid">Subgrid</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout">Masonry Layout</a>{{Experimental_Inline}}</li>
</ul>
</div>

<h2 id="Внешние_ресурсы">Внешние ресурсы</h2>

<ul>
 <li><a href="http://labs.jensimmons.com/">Примеры от Jen Simmons</a></li>
 <li><a href="http://gridbyexample.com/">Grid by Example - Коллекция примеров использования и видео уроки</a></li>
 <li><a href="https://tympanus.net/codrops/css_reference/grid/">Codrops Grid Reference</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Firefox DevTools CSS Grid Inspector</a></li>
</ul>

<h2 id="Спецификации">Спецификации</h2>

<table>
  <thead>
    <tr>
      <th>Specification</th>
      <th>Status</th>
      <th>Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName("CSS Grid 3")}}</td>
      <td>{{Spec2("CSS Grid 3")}}</td>
      <td>Adds <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout">masonry</a>.</td>
    </tr>
    <tr>
      <td>{{SpecName("CSS Grid 2")}}</td>
      <td>{{Spec2("CSS Grid 2")}}</td>
      <td>Added <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#subgrid">subgrids</a>.</td>
    </tr>
    <tr>
      <td>{{SpecName("CSS3 Grid")}}</td>
      <td>{{Spec2("CSS3 Grid")}}</td>
      <td>Initial definition.</td>
    </tr>
  </tbody>
</table>