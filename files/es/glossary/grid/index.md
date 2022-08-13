---
title: Grid
slug: Glossary/Grid
tags:
  - CSS
  - CSS Grids
translation_of: Glossary/Grid
---
<p><em>CSS grid</em> es definido usando el valor grid en la propiedad <code>display</code>; puedes definir columnas y filas en tu diseño grid, con las propiedades  {{cssxref("grid-template-rows")}} y {{cssxref("grid-template-columns")}} .</p>

<p>El grid que configures usando estas propiedades es definido como la grilla explícita (<em>explicit grid</em>).</p>

<p><span id="result_box" lang="es"><span>Si colocas contenido fuera de esta cuadrícula explícita, o si confías en la ubicación automática y el algoritmo de cuadrícula necesita crear </span></span>{{glossary("grid tracks", "tracks")}} de <span lang="es"><span>filas o columnas adicionales para contener </span></span>{{glossary("grid item", "grid items")}}<span lang="es"><span>, luego se crearán pistas adicionales en la cuadrícula implícita.</span> <span>La <em>cuadrícula implícita</em> es la cuadrícula creada automáticamente debido al contenido que se agrega fuera de las pistas definidas.     </span></span></p>

<p><span id="result_box" lang="es"><span>En el siguiente ejemplo, he creado una <em>grilla explícita</em> de tres columnas y dos filas.</span> <span>La <em>tercera</em> fila en la cuadrícula es una pista de la fila de la <em>grilla implícita</em>, formada debido a que son más de seis los</span></span><span lang="es"><span> elementos que llenan las pistas explícitas.</span></span></p>

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

<h2 id="Aprende_Más">Aprende Más</h2>

<h3 id="Referencia_de_propiedades">Referencia de propiedades</h3>

<ul>
 <li>{{cssxref("grid-template-columns")}}</li>
 <li>{{cssxref("grid-template-rows")}}</li>
 <li>{{cssxref("grid")}}</li>
 <li>{{cssxref("grid-template")}}</li>
</ul>

<h3 id="Otras_lecturas"><span class="short_text" id="result_box" lang="es"><span>Otras lecturas</span></span></h3>

<ul>
 <li>Guía de diseño CSS Grid: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Conceptos Básicos de Grid Layout</a></em></li>
</ul>
</div>
