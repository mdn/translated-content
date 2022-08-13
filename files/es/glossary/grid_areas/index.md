---
title: Grid Areas
slug: Glossary/Grid_Areas
translation_of: Glossary/Grid_Areas
---
<p>Un <strong>grid area</strong> es una o más {{glossary("grid cell", "grid cells")}} <span id="result_box" lang="es"><span>que forman un área rectangular en la cuadrícula.</span> <span>Los grid areas se crean cuando se coloca un ítem usando </span></span><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">disposición basada en líneas</a><span lang="es"><span> o cuando se definen áreas usando </span></span> <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">grid areas con nombre</a>.</p>

<p><img alt="Image showing a highlighted grid area" src="https://mdn.mozillademos.org/files/14771/1_Grid_Area.png" style="height: 253px; width: 380px;"></p>

<p><span id="result_box" lang="es"><span>Las Grid areas <em>deben</em> ser de naturaleza rectangular;</span> <span>no es posible crear, por ejemplo, un </span></span>grid area<span lang="es"><span> en forma de T o L.</span></span></p>

<p><span id="result_box" lang="es"><span>En el siguiente ejemplo, tengo un contenedor de cuadrícula con dos ítems.</span> <span>Los he nombrado con la propiedad {{cssxref ("grid-area")}} y luego los he distribuido en la cuadrícula usando {{cssxref ("grid-template-areas")}}.</span> <span>Esto crea dos áreas de cuadrícula, una que cubre cuatro celdas de la cuadrícula, la otra dos.</span></span></p>

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
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "a a b"
    "a a b";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="item1"&gt;Item&lt;/div&gt;
   &lt;div class="item2"&gt;Item&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('example_1', '300', '280') }}</p>
</div>

<h2 id="Aprenda_más">Aprenda más</h2>

<h3 id="Referencia_de_propiedad">Referencia de propiedad</h3>

<ul>
 <li>{{cssxref("grid-template-columns")}}</li>
 <li>{{cssxref("grid-template-rows")}}</li>
 <li>{{cssxref("grid-auto-rows")}}</li>
 <li>{{cssxref("grid-auto-columns")}}</li>
 <li>{{cssxref("grid-template-areas")}}</li>
 <li>{{cssxref("grid-area")}}</li>
</ul>

<h3 id="Otras_lecturas">Otras lecturas</h3>

<ul>
 <li>CSS Grid Layout Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Basic concepts of grid layout</a></em></li>
 <li>CSS Grid Layout Guide: <em><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Grid template areas</a></em></li>
 <li><a href="https://drafts.csswg.org/css-grid/#grid-area-concept">Definition of Grid Areas in the CSS Grid Layout specification</a></li>
</ul>
