---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
tags:
  - API
  - DOM
  - Elemento
  - Referencia
translation_of: Web/API/Element/removeAttribute
---
<p>{{ APIRef("DOM") }}</p>

<p><code>removeAttribute</code> elimina un atributo del elemento especificado.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="eval"><em>element</em>.removeAttribute(<em>attrName</em>);
</pre>

<ul>
 <li><code>attrName</code> es una cadena que nombra el atributo a ser eliminado de <em>element</em>.</li>
</ul>

<h2 id="Example" name="Example">Ejemplo</h2>

<pre>// &lt;div id="div1" align="left" width="200px"&gt;
document.getElementById("div1").removeAttribute("align");
// ahora: &lt;div id="div1" width="200px"&gt;
</pre>

<h2 id="Notes" name="Notes">Notas</h2>

<p>Debe usarse preferiblemente <code>removeAttribute</code> en lugar de establecer el valor del atributo a <code>null</code> usando <a href="/en/DOM/element.setAttribute" title="en/DOM/element.setAttribute">setAttribute</a>.</p>

<p>Intentar eliminar un atributo que no existe en el elemento no disparará una excepción.</p>

<p>{{ DOMAttributeMethods() }}</p>

<h2 id="Specification" name="Specification">Especificación</h2>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6D6AC0F9">DOM Level 2 Core: removeAttribute</a> (introducido en <a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute">DOM Level 1 Core</a>)</p>
