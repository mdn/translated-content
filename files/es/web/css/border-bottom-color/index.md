---
title: border-bottom-color
slug: Web/CSS/border-bottom-color
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/border-bottom-color
---
<p>&lt;&lt; <a href="/es/Guía_de_referencia_de_CSS" title="es/Guía_de_referencia_de_CSS">Volver</a></p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>La propiedad <code>border-bottom-color</code> define el color del borde inferior de un elemento, con la ayuda de un valor de color o con la palabra clave <code>transparent</code>e.</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: propiedad {{ Cssxref("color") }}</li>
 <li>Se aplica a: todos los elementos</li>
 <li>{{ Cssxref("inheritance", "Valor heredado") }}: non</li>
 <li>Porcentajes: N/A</li>
 <li>Medio : {{ Xref_cssvisual() }}</li>
 <li>{{ Cssxref("computed value", "Valor calculado") }}: como se especifique o si proviene de la propiedad {{ Cssxref("color") }}, será el valor {{ Cssxref("color") }}.</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">border-bottom-color: <em>couleur</em> | transparent | inherit
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt>color </dt>
 <dd>puede especificarse por un valor RGB hexa-decimal o regular o por una palabra clave predefinida (<em>azul</em>).</dd>
</dl>

<dl>
 <dt>transparent </dt>
 <dd>el elemento no tiene color propio, muestra el color del elemento atrás suyo en el árbol de apilado.</dd>
</dl>

<h3 id="Propiedades_relacionadas" name="Propiedades_relacionadas">Propiedades relacionadas</h3>

<ul>
 <li>{{ Cssxref("border-color") }}</li>
 <li>{{ Cssxref("border-left-color") }}</li>
 <li>{{ Cssxref("border-right-color") }}</li>
 <li>{{ Cssxref("border-top-color") }}</li>
</ul>

<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>

<p><a href="/samples/cssref/border.html">Ver El Ejemplo Vivo</a></p>

<pre class="eval">element {
	width: 300px;
        padding: 15px;
        border-bottom-size: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000;
}
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<ul>
 <li><a class="external" href="http://html-color-codes.com/">Color Chart by VisiBone (en)</a></li>
 <li><a class="external" href="http://www.yoyodesign.org/outils/ncolor/ncolor.php?langue=fr">Sélecteur de couleur, chez yoyodesign (fr)</a></li>
</ul>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/box.html#propdef-border-bottom-color">CSS 2.1 (en)</a></li>
 <li><a class="external" href="http://www.w3.org/TR/css3-background/#border-bottom">CSS 3 (en)</a></li>
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
   <td>6</td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>3.5</td>
  </tr>
 </tbody>
</table>

<p> </p>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("border-bottom") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-bottom-style") }}, {{ Cssxref("border-bottom-width") }}</p>

<div class="noinclude">
<p><span class="comment">Categorías</span></p>

<p><span class="comment">Interwiki Languages</span></p>
</div>

<p>{{ languages( { "de": "de/CSS/border-bottom-color", "en": "en/CSS/border-bottom-color", "fr": "fr/CSS/border-bottom-color", "ja": "ja/CSS/border-bottom-color", "pl": "pl/CSS/border-bottom-color" } ) }}</p>
