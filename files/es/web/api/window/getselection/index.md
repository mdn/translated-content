---
title: window.getSelection
slug: Web/API/Window/getSelection
tags:
  - páginas_a_traducir
translation_of: Web/API/Window/getSelection
---
<div>{{ ApiRef() }}</div>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Devuelve un objeto de selección representando el rango del texto seleccionado por el usuario. <span class="comment">NB. this is nothing to do with the DOM selection list object! What the heck is 'selection list object'? -Nickolay</span></p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><em>selection</em> =<em>window</em>.getSelection() ;
</pre>

<ul>
 <li><code>selection</code> es un objeto de <a href="/es/docs/Web/API/Selection">selección</a>.</li>
</ul>

<h3 id="Ejemplo" name="Ejemplo">Ejemplo</h3>

<pre class="eval">function foo() {
   var selObj = window.getSelection();
   alert(selObj);
   var selRange = selObj.getRangeAt(0);
   // ... Hacer las cosas con el rango ...
}
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p>En JavaScript, cuando un objeto de selección es pasado a una función que espera una cadena de caracteres como parámetro (como {{ Domxref("window.alert") }} o {{ Domxref("document.write") }}), una representación de texto, del objeto de selección (e.j. el texto seleccionado) es pasado en vez del objeto en sí. Esto hace al objeto de selección parecer una cadena de caracteres (texto), cuando realmente es un objeto con sus propios métodos y propiedades. Específicamente, el valor de retorno de llamar al método <code><a href="es/DOM/Selection/toString">toString()</a></code> del objeto de selección es lo que realmente se pasa como parámetro a la función.</p>

<p>En el ejemplo de arriba, <code>selObj</code> es automaticamente "convertido" cuando pasó a <a href="es/DOM/window.alert">window.alert</a>. Sin embargo, para usar una propiedad <a href="es/JS/String">String</a> de JavaScript o un método como <code><a href="es/JS/String.prototype.length">length</a></code> o <code><a href="es/JS/String.prototype.substr">substr</a></code>, debe llamar manualmente al método <code>toString</code>. <span class="comment">I'm treading carefully with the word "convert" here because it could be misinterpreted as a permanent convert - Maian</span></p>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p>DOM Nivel 0. No es parte de ninguna especificación.</p>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p><a href="es/docs/Web/API/Selection">Selection</a>, <a href="es/docs/Web/API/Range">Range</a></p>





<div class="noinclude"></div>

<p>{{ languages( { "en": "en/DOM/window.getSelection", "fr": "fr/DOM/window.getSelection", "it": "it/DOM/window.getSelection", "ja": "ja/DOM/window.getSelection", "pl": "pl/DOM/window.getSelection" } ) }}</p>
