---
title: '-moz-box-ordinal-group'
slug: Web/CSS/box-ordinal-group
tags:
  - CSS
  - 'CSS: Extensiones Mozilla'
  - Caja Flexible
  - No estandar
  - Referencia CSS
translation_of: Web/CSS/box-ordinal-group
translation_of_original: Web/CSS/-moz-box-ordinal-group
original_slug: Web/CSS/-moz-box-ordinal-group
---
<p>{{CSSRef}}<br>
 {{warning("Esta propiedad pertenece al borrador original del diseño o esquema de la caja CSS flexible, y ha sido reemplazada en borradores posteriores.")}}</p>

<p>Ver <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes" title="/en/CSS/Flexible_boxes">Flexbox</a> para más información sobre qué usar en sustitución de esta propiedad.</p>

<h2 id="Resumen">Resumen</h2>

<p>Indica el grupo ordinal al que pertenece el elemento. Aquellos elementos con un grupo ordinal menor son mostrados antes que aquellos con un grupo ordinal mayor.</p>

<h2 id="Valores">Valores</h2>

<p>Los valores deben ser enteros positivos (mayores de cero). El valor por defecto para esta propiedad es 1.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: html">&lt;style type="text/css"&gt;
  #Flexbox {
    display: -ms-box;
    display: -moz-box;
    display: -webkit-box;
  }

  #text1 {
    background: red;
    -ms-box-ordinal-group: 4;
    -moz-box-ordinal-group: 4;
    -webkit-box-ordinal-group: 4;
  }

  #text2 {
    background: green;
    -ms-box-ordinal-group: 3;
    -moz-box-ordinal-group: 3;
    -webkit-box-ordinal-group: 3;
  }

  #text3 {
    background: blue;
    -ms-box-ordinal-group: 2;
    -moz-box-ordinal-group: 2;
    -webkit-box-ordinal-group: 2;
  }

  #text4 {
    background: orange;
  }
&lt;/style&gt;

&lt;div id="Flexbox"&gt;
  &lt;div id="text1"&gt;text 1&lt;/div&gt;
  &lt;div id="text2"&gt;text 2&lt;/div&gt;
  &lt;div id="text3"&gt;text 3&lt;/div&gt;
  &lt;div id="text4"&gt;text 4&lt;/div&gt;
&lt;/div&gt;
</pre>
