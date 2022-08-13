---
title: Node.previousSibling
slug: Web/API/Node/previousSibling
tags:
  - API
  - DOM
  - Gecko
  - Propiedad
translation_of: Web/API/Node/previousSibling
---
<div>
<div>{{APIRef("DOM")}}</div>
</div>

<p>La propiedad de sólo-lectura <code><strong>Node.previousSibling</strong></code> devuelve el nodo inmediatamente anterior al especificado en la lista de nodos {{domxref("Node.childNodes", "childNodes")}} de su padre, o <code>null</code> si el nodo especificado es el primero en dicha lista.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="syntaxbox"><var>nodoAnterior</var> = <em>nodo</em>.previousSibling;
</pre>

<h2 id="Ejemplo" name="Ejemplo">Ejemplo</h2>

<pre class="brush: html">&lt;img id="b0"&gt;
&lt;img id="b1"&gt;
&lt;img id="b2"&gt;</pre>

<pre class="brush:js">console.log(document.getElementById("b1").previousSibling); // &lt;img id="b0"&gt;
console.log(document.getElementById("b2").previousSibling.id); // "b1"
</pre>

<h2 id="Notas" name="Notas">Notas</h2>


<div><p>Gecko-based browsers insert text nodes into a document to represent whitespace in the source markup.
    Therefore a node obtained, for example, using <a href="/es/docs/Web/API/Node/firstChild" title="The Node.firstChild read-only property returns the node's first child in the tree, or null if the node has no children."><code>Node.firstChild</code></a> or <a href="/es/docs/Web/API/Node/previousSibling" title="La propiedad de sólo-lectura Node.previousSibling devuelve el nodo inmediatamente anterior al especificado en la lista de nodos childNodes de su padre, o null si el nodo especificado es el primero en dicha lista."><code>Node.previousSibling</code></a> may refer to a
    whitespace text node rather than the actual element the author intended to get.</p>

    <p>See <a href="/en-US/docs/Web/Guide/DOM/Whitespace_in_the_DOM">Whitespace in the DOM</a> and
    <a class="external" href="http://www.w3.org/DOM/faq.html#emptytext" rel="noopener">W3C DOM 3 FAQ: Why are some Text nodes empty?</a>
    for more information.</p></div>

<p>Para navegar en el sentido opuesto de la lista de nodos hijos se utiliza <a href="/en-US/docs/Web/API/Node.nextSibling" title="DOM/Node.nextSibling">Node.nextSibling</a>.</p>

<h2 id="Especificación" name="Especificación">Especificación</h2>

<ul>
 <li><a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling">DOM Level 1 Core: previousSibling</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8">DOM Level 2 Core: previousSibling</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-640FB3C8">DOM Level 3 Core: previousSibling</a></li>
</ul>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("api.Node.previousSibling")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{domxref("Node.nextSibling")}}</li>
</ul>
