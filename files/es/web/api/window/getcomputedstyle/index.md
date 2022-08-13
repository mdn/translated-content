---
title: Window.getComputedStyle
slug: Web/API/Window/getComputedStyle
translation_of: Web/API/Window/getComputedStyle
---
<p>{{ ApiRef() }}</p>
<h3 id="Summary" name="Summary">Resumen</h3>
<p>Devuelve el estilo computado del elemento. Los estilos computados representan los valores finales <a class="external" href="http://www.w3.org/TR/1998/REC-CSS2-19980512/cascade.html#computed-value">computed (en)</a>  de las propiedades CSS del elemento. </p>
<h3 id="Syntax" name="Syntax">Sintaxis</h3>
<pre class="eval">var <em>style</em> = window.getComputedStyle(<em>element</em>, <em>pseudoElt</em>);
</pre>
<ul>
 <li><code>element</code> es un <a href="/es/DOM/element" title="en/DOM/element">element</a>.</li>
 <li><code>pseudoElt</code> es una cadena que especifica el pseudo elemento a tratar. Debería ser una cadena vacia para la mayoría de los elementos element.</li>
 <li><code>style</code> es un objeto del tipo <a class="external" href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSview-getComputedStyle"><code>CSSStyleDeclaration</code></a> .</li>
</ul>
<h3 id="Example" name="Example">Ejemplo</h3>
<pre class="eval">var element = document.getElementById(“elemId”);
var <em>style</em> = document.defaultView.getComputedStyle(<em>element</em>, <em>pseudoElt</em>);
</pre>
<h3 id="Description" name="Description">Descripción</h3>
<p>El objeto devuelto es del mismo tipo que el objeto devuelto por la propiedad <a href="/es/DOM/element.style" title="es/DOM/element.style">style</a> del elemento, sin embargo ambos objetos tienen un propósito distinto. El objeto devuelto por <code>getComputedStyle</code> es de sólo lectura y puede usarse para inspeccionar el estilo del elemento (incluyendo los estilos de una etiqueta &lt;style&gt; o una hoja de estlo).  El objeto <code>elt.style</code> debería usarse para establecerel estilo de un elemento específico.</p>
<p>El primer argumento debe ser un Element, no un nodo (como en #texto Node).</p>
<h3 id="Specification" name="Specification">Especificación</h3>
<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSview-getComputedStyle">DOM Level 2 Style: getComputedStyle</a></p>
<p>{{ languages( { "ja": "ja/DOM/window.getComputedStyle" } ) }}</p>
