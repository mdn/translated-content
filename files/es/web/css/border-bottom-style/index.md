---
title: border-bottom-style
slug: Web/CSS/border-bottom-style
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/border-bottom-style
---
<p> </p>

<p>&lt;&lt; <a href="/es/Guía_de_referencia_de_CSS" title="es/Guía_de_referencia_de_CSS">Volver</a></p>

<p> </p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p><code>border-bottom-style</code> define el estilo de línea del borde inferior de una caja.</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("none", "ninguno") }}</li>
 <li>Se aplica a: todos los elementos</li>
 <li>{{ Cssxref("inheritance", "Valor heredado") }}: no</li>
 <li>Porcentajes: N/A</li>
 <li>Medio: {{ Xref_cssvisual() }}</li>
 <li>{{ Cssxref("computed value", "Valor calculado") }}: como se especificó</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">border-bottom-style: &lt;border-style&gt; | inherit
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt>none </dt>
 <dd>sin borde.</dd>
 <dt>hidden </dt>
 <dd>es igual a 'none', excepto en términos de resolución de conflicto para elementos de tabla.</dd>
 <dt>dotted </dt>
 <dd>series de puntos (....).</dd>
 <dt>dashed </dt>
 <dd>series de guiones cortos o pequeñas líneas (----).</dd>
 <dt>solid </dt>
 <dd>línea única, recta y sólida.</dd>
 <dt>double </dt>
 <dd>dos líneas rectas que se suman a la cantidad de píxeles definidos como ancho de borde<code>border-width</code>.</dd>
 <dt>groove </dt>
 <dd>efecto de hundido.</dd>
 <dt>ridge </dt>
 <dd>al revés de 'groove'. El borde aparece en 3D (saliendo).</dd>
 <dt>inset </dt>
 <dd>hace que la caja aparezca hundida.</dd>
 <dt>outset </dt>
 <dd>opuesto a 'inset'. La caja aparece en 3D (saliendo).</dd>
</dl>

<h3 id="Propiedades_relacionadas" name="Propiedades_relacionadas">Propiedades relacionadas</h3>

<ul>
 <li>{{ Cssxref("border-left-style") }}</li>
 <li>{{ Cssxref("border-right-style") }}</li>
 <li>{{ Cssxref("border-top-style") }}</li>
 <li>{{ Cssxref("border-style") }}</li>
</ul>

<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>

<p><a href="/samples/cssref/border.html">Ver El Ejemplo Vivo</a></p>

<pre>element {
        border-bottom-size: 1px;
        border-bottom-style: dotted;
        border-bottom-color: #000;
}
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p>A menos que un valor {{ Cssxref("border-style") }} sea definido, el borde no aparecerá porque el valor por defecto es 'none'.</p>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/box.html#propdef-border-bottom-style">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/css3-background/#border-style">CSS 3</a></li>
</ul>

<h3 id="Compatibilidades" name="Compatibilidades">Compatibilidades</h3>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("border-bottom") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-bottom-style") }}, {{ Cssxref("border-bottom-width") }}</p>

<p> </p>

<div class="noinclude">
<p><span class="comment">Categorías</span></p>
<span class="comment">Interwiki Languages</span></div>

<p>{{ languages( { "de": "de/CSS/border-bottom-style", "en": "en/CSS/border-bottom-style", "fr": "fr/CSS/border-bottom-style", "ja": "ja/CSS/border-bottom-style", "pl": "pl/CSS/border-bottom-style" } ) }}</p>
