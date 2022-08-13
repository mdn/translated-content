---
title: grid
slug: Web/CSS/grid
tags:
  - CSS
  - CSS-свойства
  - CSS сетка
  - Ссылки
translation_of: Web/CSS/grid
---
<h2 id="Общие_сведения">Общие сведения</h2>

<p>Свойство CSS <strong><code>grid</code></strong> является сокращённой формой записи, которая  устанавливает значения для всех явных свойств сетки  (grid)  ({{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}},  и {{cssxref("grid-template-areas")}}), всех неявных свойств сетки (grid) ({{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, и {{cssxref("grid-auto-flow")}}), и свойств для промежутков между рядами и столбцами сетки ({{cssxref("grid-column-gap")}} и {{cssxref("grid-row-gap")}}) в одной строчке.</p>

<p class="note"><strong>Note:</strong> В одной строке grid могут быть описаны свойства только одного вида: явные или неявные. Подсвойства, которые не были описаны, принимают, как и в других сокращённых формах записи свойств, значения по умолчанию. Кроме того, при помощи сокращённой формы записи значения свойств для промежутков между рядами и столбцами сетки по умолчанию сбрасываются, несмотря на то, что они не могут быть установлены в сокращённой форме записи.</p>

<p>{{cssinfo}}</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="brush: css">/* &lt;'grid-template'&gt; значения*/
grid: none;
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* &lt;'grid-template-rows'&gt; /
   [ auto-flow &amp;&amp; dense? ] &lt;'grid-auto-columns'&gt;? values */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow &amp;&amp; dense? ] &lt;'grid-auto-rows'&gt;? /
   &lt;'grid-template-columns'&gt; values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Global values */
grid: inherit;
grid: initial;
grid: unset;
</pre>

<h3 id="Значения">Значения</h3>

<dl>
 <dt><code>&lt;'grid-template'&gt;</code></dt>
 <dd>Определяет {{cssxref("grid-template")}} (шаблон сетки) включая {{cssxref("grid-template-columns")}} (столбцы), {{cssxref("grid-template-rows")}}  (ряды) и {{cssxref("grid-template-areas")}} (области).</dd>
 <dt><code>&lt;'grid-template-rows'&gt; / [ auto-flow &amp;&amp; dense? ] &lt;'grid-auto-columns'&gt;?</code></dt>
 <dd><p>Устанавливает auto-flow явно задавая  размещение по рядам с помощью  свойства {{cssxref("grid-template-rows")}} (и устанавливая свойство {{cssxref("grid-template-columns")}} в значение <code>none</code>) и уточняет, как должно работать авто-повторение столбцов при помощи свойства {{cssxref("grid-auto-columns")}} (и устанавливая {{cssxref("grid-auto-rows")}} в значение <code>auto</code>). Свойство {{cssxref("grid-auto-flow")}} может быть так же установлено для столбцов со свойством <code>dense</code> если оно определено.</p>
 <p>Все остальные подсвойства grid сбрасываются в их начальные значения .</p>
 </dd>
 <dt><code>[ auto-flow &amp;&amp; dense? ] &lt;'grid-auto-rows'&gt;? / &lt;'grid-template-columns'&gt;</code></dt>
 <dd>Устанавливает auto-flow явно задавая  размещение по столбцам с помощью  свойства {{cssxref("grid-template-columns")}} (и устанавливая свойство {{cssxref("grid-template-rows")}} в значение <code>none</code>) и уточняет, как должно работать авто-повторение рядов при помощи свойства {{cssxref("grid-auto-rows")}} (и устанавливая {{cssxref("grid-auto-columns")}} в значение <code>auto</code>). Свойство {{cssxref("grid-auto-flow")}} может быть так же установлено для рядов со свойством <code>dense</code> если оно определено.
 <p>Все остальные подсвойства grid сбрасываются в их начальные значения .</p>
 </dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Example">Example</h2>

<h3 id="HTML_Content">HTML Content</h3>

<pre class="brush: html">&lt;div id="container"&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="CSS_Content">CSS Content</h3>

<pre class="brush: css">#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container &gt; div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}</pre>

<h3 id="Результат">Результат</h3>

<p>{{EmbedLiveSample("Example", "100%", 150)}}</p>

<h2 id="Спецификация">Спецификация</h2>

{{Specifications}}

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>Связанные свойства CSS: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}</li>
 <li>Руководство по разметке сетки: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Line-based placement with CSS Grid</a></em></li>
 <li>Руководство по разметке сетки: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#Grid_definition_shorthands">Grid template areas - Grid definition shorthands</a></em></li>
</ul>
