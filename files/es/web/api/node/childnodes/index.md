---
title: Node.childNodes
slug: Web/API/Node/childNodes
tags:
  - API
  - DOM
  - Propiedad
  - Referencia
  - Referência DOM
translation_of: Web/API/Node/childNodes
---
<div>
<div>{{APIRef("DOM")}}</div>
</div>

<p>La propiedad de solo lectura <code><strong>Node.childNodes</strong></code>  devuelve una colección de hijos {{domxref("Node","nodes")}} del elemento dado donde el primer nodo hijo es asignado un índice 0.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">var <var>nodeList</var> = <var>elementNodeReference</var>.childNodes;
</pre>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Uso_simple">Uso simple</h3>

<pre class="brush:js">// parg is an object reference to a &lt;p&gt; element

// First check that the element has child nodes
if (parg.hasChildNodes()) {
  var children = parg.childNodes;

  for (var i = 0; i &lt; children.length; i++) {
    // do something with each child as children[i]
    // NOTE: List is live, adding or removing children will change the list
  }
}</pre>

<h3 id="Eliminar_todos_los_hijos_de_un_nodo">Eliminar todos los hijos de un nodo</h3>

<pre class="brush:js">// This is one way to remove all children from a node
// box is an object reference to an element

while (box.firstChild) {
    //The list is LIVE so it will re-index each call
    box.removeChild(box.firstChild);
}</pre>

<h2 id="Notas">Notas</h2>

<p>Los items en una colección de nodos son objetos y no cadenas de caracteres. Para obtener los datos de los objetos del nodo, use sus propiedades (ej. <code>elementNodeReference.childNodes[1].nodeName</code> para obtener el nombre, etc.).</p>

<p>El objeto <code>document</code> contiene 2 hijos: la declaración del Doctype y el elemento raíz, generalmente referido como  <code>documentElement</code>. (En documentos (X)HTML  es el elemento <code>HTML</code>)</p>

<p><code>childNodes</code> incluye todos los nodos hijos, incluidos los nodos no elementos, como nodos de tipo textos y comentarios. Para obtener una colección de solo elementos, use {{domxref("ParentNode.children")}}.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentarios</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-node-childnodes', 'Node.childNodes')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Sin cambios</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-1451460987', 'Node.childNodes')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>Sin cambios</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-1451460987', 'Node.childNodes')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>Sin cambios</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-1451460987', 'Node.childNodes')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>{{Compat("api.Node.childNodes")}}</p>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{domxref("Node.firstChild")}}</li>
 <li>{{domxref("Node.lastChild")}}</li>
 <li>{{domxref("Node.nextSibling")}}</li>
 <li>{{domxref("Node.previousSibling")}}</li>
 <li>{{domxref("ParentNode.children")}}</li>
</ul>
