---
title: Nodo appendChild
slug: Web/API/Node/appendChild
tags:
  - API
  - DOM
  - Node
  - Referencia
  - metodo
translation_of: Web/API/Node/appendChild
---
<div>{{APIRef("DOM")}}</div>

<p>Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.</p>

<p>Si el hijo(Child) <strong>es una referencia</strong>(hace referencia) hacia un nodo existente en el documento actual, este es quitado del padre actual para ser puesto en el nodo padre nuevo. La clave está en <strong>si el (Child) es una referencia a un nodo existente en el documento</strong>.</p>

<div class="blockIndicator note">
<p><strong>Nueva API disponible </strong><br>
 El método {{domxref("ParentNode.append()")}} soporta varios argumentos y cadenas para adjuntar.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><em>element</em>.appendChild(<em>aChild</em>);</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><strong>aChild</strong></dt>
 <dd>El nodo a adjuntar al nodo padre proporcionado (normalmente un elemento).</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>El valor devuelto es el hijo adjunto excepto cuando el hijo proporcionado es un {{domxref("DocumentFragment")}}, en cuyo caso el {{domxref("DocumentFragment")}} vacío es devuelto.</p>

<h2 id="Notas">Notas</h2>

<p>El encadenamiento podría no funcionar como se espera debido a que <code>appendChild()</code> devuelve un elemento hijo:</p>

<pre class="brush: js">var aBlock = doc.createElement('block').appendChild(doc.createElement('b'));</pre>

<p>Establece <code>aBlock</code> como <code>&lt;b&gt;&lt;/b&gt;</code> sólo, que no es probablemente lo que quieras.</p>

<p>Si el <code>child</code> hace una referencia a un nodo existente en el documento, el método <code>appendChild</code> se mueve de su posición actual a su nueva posición (ej. no existen requerimientos para eliminar el nodo desde su nodo padre antes de añadirlo a cualquier otro nodo).</p>

<p>Ésto significa también que el nodo no puede estar en dos puntos del documento de manera simultánea. Así que si el nodo ya contiene un padre, primero es eliminado, y después se añade a la nueva posición.</p>

<p>Se puede usar {{domxref("Node.cloneNode")}} para hacer una copia del nodo antes de añadirlo debajo de su nuevo elemento padre. (Nota: las copias echas con <code>cloneNode</code> no serán guardadas automáticamente en sincronía.)</p>

<p>Éste método no es permitido para mover nodos entre distintos documentos. Si se quiere añadir un nodo desde un documento diferente (por ejemplo para mostrar los resultados de una petición AJAX) se debe usar primero:<br>
 {{domxref("document.importNode")}}.</p>

<p><code>appendChild()</code> Es uno de los métodos fundamentales de la programación web usando el DOM. El método <code>appendChild()</code> inserta un nuevo nodo dentro de la estructura DOM de un documento, y es la segunda parte del proceso central uno-dos, crear-y-añadir para construir páginas web a base de programación.</p>

<h2 id="Ejemplo">Ejemplo</h2>

<pre class="brush:js">// Crea un nuevo elemento párrafo, y lo agrega al final del cuerpo del documento
var p = document.createElement("p");
document.body.appendChild(p);</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especifación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-node-appendchild', 'Node.appendChild()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Sin cambio desde {{SpecName("DOM3 Core")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-184E7107', 'Node.appendChild()')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>Sin cambio desde {{SpecName("DOM2 Core")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-184E7107', 'Node.appendChild()')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>Sin cambio desde {{SpecName("DOM1")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-184E7107', 'Node.appendChild()')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("api.Node.appendChild")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{domxref("Node.removeChild")}}</li>
 <li>{{domxref("Node.replaceChild")}}</li>
 <li>{{domxref("Node.insertBefore")}}</li>
 <li>{{domxref("Node.hasChildNodes")}}</li>
 <li>{{domxref("ParentNode.append()")}}</li>
</ul>
