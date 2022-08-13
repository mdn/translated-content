---
title: Node.isSameNode()
slug: Web/API/Node/isSameNode
translation_of: Web/API/Node/isSameNode
---
<div>{{APIRef("DOM")}} {{Obsolete_header}}</div>

<p><code><strong>Node.isSameNode()</strong></code> comprueba si dos nodos son iguales, es decir si hacen referencia al mismo objecto.</p>

<div class="note">
<p><strong>Warning:</strong> This method is no longer implemented in recent browsers.</p>

<pre class="brush:js">// Instead of using
node1.isSameNode(node2)

// use
node1 === node2 // or
node1 == node2</pre>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">var <em>isSameNode</em> = <em>node</em>.isSameNode(<em>other</em>);
</pre>

<ul>
 <li><code>other</code> El nodo contra el cual se realiza la comparación.</li>
</ul>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#interface-node', 'Node')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Eliminado de la especificación.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#Node3-isSameNode', 'Node.isSameNode()')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_entre_navegadores">Compatibilidad entre navegadores</h2>

{{Compat("api.Node.isSameNode")}}

<h2 id="Ver_además">Ver además</h2>

<ul>
 <li>{{domxref("Node.isEqualNode()")}}</li>
</ul>
