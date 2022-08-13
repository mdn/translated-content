---
title: border-bottom
slug: Web/CSS/border-bottom
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/border-bottom
---
<p>&lt;&lt; <a href="/es/Guía_de_referencia_de_CSS" title="es/Guía_de_referencia_de_CSS">Volver</a></p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>La propiedad <code>border-bottom</code> permite de definir de una vez todas las propiedades individuales {{ Cssxref("border-bottom-color") }}, {{ Cssxref("border-bottom-style") }}, y {{ Cssxref("border-bottom-width") }}, las cuales describen el color, estilo y ancho del borde inferior de un elementos.</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: ver propiedades individuales</li>
 <li>Se aplica a : todos los elementos</li>
 <li>{{ Cssxref("inheritance", "Valor heredado") }}: no</li>
 <li>Porcentajes: N/A</li>
 <li>Medio: {{ Xref_cssvisual() }}</li>
 <li>{{ Cssxref("computed value", "Valor calculado") }}: ver propiedades individuales</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">border-bottom: [ &lt;border-width&gt; || &lt;border-style&gt; || &lt;border-color&gt; ] | <em>inherit</em>
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt>&lt;border-width&gt; </dt>
 <dd>ver {{ Cssxref("border-bottom-width") }}.</dd>
 <dt>&lt;border-style&gt; </dt>
 <dd>ver {{ Cssxref("border-bottom-style") }}.</dd>
 <dt>&lt;border-color&gt; </dt>
 <dd>ver {{ Cssxref("border-bottom-color") }}.</dd>
</dl>

<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>

<p><a href="/samples/cssref/border.html">Ver El Ejemplo Vivo</a></p>

<pre>element {
    border-bottom-width: 1px solid #000;
}
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p>Si no se especifica el color del borde, este tomará el valor definido en la propiedad del {{ Cssxref("color") }} general.</p>

<p>Se puede especificar los tres valores en cualquier orden y se pueden omitir una o dos.</p>

<p>Como con todas las propiedades generales, <code>border-bottom</code> siempre inicia todos los valores que le pueden ser definidos aún cuando no están especificados, en este caso toma los valores por defecto.</p>

<p>Lo que significa que:</p>

<pre>  border-bottom-style: dotted;
  border-bottom: thick green;</pre>

<p>es idéntico a:</p>

<pre>  border-bottom-style: dotted;
  border-bottom: none thick green;</pre>

<p>y el valor de {{ Cssxref("border-bottom-style") }} dado antes de <code>border-bottom</code> es ignorado.</p>

<p>Como el valor por defecto de {{ Cssxref("border-bottom-style") }} es <code>none</code>, el no especificar la parte &lt;border-style&gt; en la propiedad general significa: <strong>sin borde</strong>.</p>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS1#border-bottom">CSS 1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/box.html#border-shorthand-properties">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/css3-background/#the-border-shorthands">CSS 3</a></li>
</ul>

<h3 id="Compatibilidades" name="Compatibilidades">Compatibilidades</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Navegador</th>
   <th>Versión mínima</th>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td>4</td>
  </tr>
  <tr>
   <td>Firefox</td>
   <td>1</td>
  </tr>
  <tr>
   <td>Netscape</td>
   <td>4</td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>3.5</td>
  </tr>
 </tbody>
</table>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("border") }}, {{ Cssxref("border-bottom") }}, {{ Cssxref("border-bottom-width") }}, {{ Cssxref("border-bottom-style") }}, {{ Cssxref("border-bottom-color") }},</p>

<div class="noinclude">
<p><span class="comment">Categorías</span></p>

<p><span class="comment">Interwiki Languages</span></p>
</div>

<p>{{ languages( { "de": "de/CSS/border-bottom", "en": "en/CSS/border-bottom", "fr": "fr/CSS/border-bottom", "ja": "ja/CSS/border-bottom", "pl": "pl/CSS/border-bottom" } ) }}</p>
