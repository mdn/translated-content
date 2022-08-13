---
title: Node.nextSibling
slug: Web/API/Node/nextSibling
tags:
  - API
  - DOM
  - Gecko
  - Nodo
  - Propiedad
translation_of: Web/API/Node/nextSibling
---
<div>{{APIRef("DOM")}}</div>

<p>La propiedad de sólo lectura <strong><code>Node.nextSibling</code></strong> devuelve el siguiente nodo con respecto al indicado en la lista de nodos ({{domxref("Node.childNodes","childNodes")}}) a la que este pertenece o <code>null</code> si el nodo especificado es el último en dicha lista.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="syntaxbox"><var>siguienteNodo</var> = <var>node</var>.nextSibling
</pre>

<h2 id="Notes" name="Notes">Notas</h2>

<div>

<div><p>Gecko-based browsers insert text nodes into a document to represent whitespace in the source markup.
    Therefore a node obtained, for example, using <a href="/es/docs/Web/API/Node/firstChild" title="The Node.firstChild read-only property returns the node's first child in the tree, or null if the node has no children."><code>Node.firstChild</code></a> or <a href="/es/docs/Web/API/Node/previousSibling" title="La propiedad de sólo-lectura Node.previousSibling devuelve el nodo inmediatamente anterior al especificado en la lista de nodos childNodes de su padre, o null si el nodo especificado es el primero en dicha lista."><code>Node.previousSibling</code></a> may refer to a
    whitespace text node rather than the actual element the author intended to get.</p>

    <p>See <a href="/en-US/docs/Web/Guide/DOM/Whitespace_in_the_DOM">Whitespace in the DOM</a> and
    <a class="external" href="http://www.w3.org/DOM/faq.html#emptytext" rel="noopener">W3C DOM 3 FAQ: Why are some Text nodes empty?</a>
    for more information.</p></div>

<p>{{domxref("Element.nextElementSibling")}} debe ser utilizado para obtener el siguiente elemento ignorando cualquier nodo en blanco.</p>
</div>

<h2 id="Example" name="Example">Ejemplo</h2>

<pre class="brush:html">&lt;div id="div-01"&gt;Este es el div-01&lt;/div&gt;
&lt;div id="div-02"&gt;Este es el div-02&lt;/div&gt;

&lt;script type="text/javascript"&gt;
var el = document.getElementById('div-01').nextSibling,
    i = 1;

console.log('Hermanos de div-01:');

while (el) {
  console.log(i + '. ' + el.nodeName);
  el = el.nextSibling;
  i++;
}

&lt;/script&gt;

/**************************************************
  Lo siguiente se escribe en la consola cuando carga:

      Nodos hermanos del div-01

      1. #text
      2. DIV
      3. #text
      4. SCRIPT

**************************************************/
</pre>

<p>En el ejemplo anterior, se puede observar que los nodos <code>#text</code> se insertan en el DOM, donde se produce un espacio en blanco en el marcado entre las etiquetas (es decir, después de la etiqueta de cierre de un elemento y antes de la etiqueta de apertura del siguiente). No se crea ningún espacio en blanco entre los elementos insertados por la sentencia <code>document.write</code>.</p>

<p>La posible inclusión de los nodos de texto en el DOM se debe permitir cuando se atraviese el DOM utilizando <code>nextSibling</code>. Vea los recursos en la sección Notas.</p>

<h2 id="Specification" name="Specification">Especificación</h2>

<ul>
 <li><a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-nextSibling">DOM Level 1 Core: nextSibling</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6AC54C2F">DOM Level 2 Core: nextSibling</a></li>
</ul>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>

<p>{{Compat("api.Node.nextSibling")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{domxref("Element.nextElementSibling")}}</li>
</ul>
