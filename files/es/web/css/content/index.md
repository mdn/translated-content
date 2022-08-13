---
title: content
slug: Web/CSS/content
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/content
---
<p> &lt;&lt; <a href="es/Gu%c3%ada_de_referencia_de_CSS">Volver</a>
</p>
<h3 id="Resumen" name="Resumen"> Resumen </h3>
<p>La propiedad <code>content</code> se usa junto con los pseudo-elementos <code>:before</code> y <code>:after</code> para generar contenido que se adjunta antes o después de un selector CSS.
</p>
<h3 id="Caracter.C3.ADsticas" name="Caracter.C3.ADsticas"> Características </h3>
<p>En <b>CSS3</b>
</p>
<ul><li> Value: {{ mediawiki.external(' &lt;uri&gt; \',\' ') }}&lt;/uri&gt;* {{ mediawiki.external(' normal | none | inhibit | &lt;content-list&gt; ') }}&lt;/content-list&gt;
</li><li> Valor inicial: normal
</li><li> Se aplica a: todos los elementos y a <code>::before, ::after, ::alternate, ::marker, ::line-marker, áreas de margin y @footnote</code>.
</li><li> {{ Cssxref("inheritance", "Valor heredado") }}: no
</li><li> Porcentajes: N/A
</li><li> Medio: todos
</li><li> Valor calculada: The specified value with each occurrence of 'normal' expanded as per the prose below.
</li></ul>
<h3 id="Ejemplos" name="Ejemplos"> Ejemplos </h3>
<pre>p:before
{
content: url("beep.wav")
}

img:before
{
content: attr(alt)
}

</pre>
<h3 id="Valores" name="Valores"> Valores </h3>
<ul><li> string: Define el contenido de texto. El valor por defecto es "".
</li><li> url: Define una dirección URL
</li><li> counter (name)
</li><li> counter (name, list-style-type)
</li><li> counters (name, string)
</li><li> counters (name, string, list-style-type) </li><li> attr(X): Define un atributo de un selector que será mostrado antes/después del selector.
</li><li> open-quote </li><li> close-quote </li><li> no-open-quote </li><li> no-close-quote
</li></ul>
<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n"> Ver también </h3>
<p><a class="external" href="http://www.w3.org/TR/REC-CSS2/generate.html#content">(CSS2 en)</a>
<a class="external" href="http://www.w3.org/TR/CSS21/generate.html#content">(CSS2 1 en)</a>
<a class="external" href="http://www.w3.org/TR/css3-content/#inserting3">(CSS3 en)</a>
</p><p><br>
</p>
<div class="noinclude">
<p><span class="comment">Categorías</span>
</p><p><span class="comment">Interwiki Languages</span>
</p>
</div>
{{ languages( { "en": "en/CSS/content" } ) }}
