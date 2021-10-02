---
title: element.hasChildNodes
slug: Web/API/Node/hasChildNodes
tags:
  - API
  - DOM
  - Method
  - NeedsSpecTable
  - Node
  - Reference
translation_of: Web/API/Node/hasChildNodes
---
<p>{{APIRef("DOM")}}</p>

<p>La méthode <code><strong>Node.hasChildNodes()</strong></code> renvoie un {{jsxref("Boolean")}} indiquant si le {{domxref("Node","noeud")}} actuel possède des <a href="/fr/docs/Web/API/Node/childNodes">nœuds enfants</a> ou non.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js"><var>bool</var> = <var>node</var>.hasChildNodes();</pre>

<h3 id="Return_value">Valeur de retour</h3>

<p>Un {{jsxref("Boolean")}} qui est <code>true</code> si le nœud a des nœuds enfants, et <code>false</code> dans le cas contraire.</p>

<h2 id="Example">Exemple</h2>

<pre class="brush:js">let foo = document.getElementById('foo');

if (foo.hasChildNodes()) {
  // Faire quelque chose avec 'foo.childNodes'
}</pre>

<h2 id="Polyfill">Prothèse d'émulation</h2>

<pre class="brush:js">(function(prototype) {
  prototype.hasChildNodes = prototype.hasChildNodes || function() {
    return !!this.firstChild;
  }
})(Node.prototype);</pre>

<p>Il y a différentes façons de déterminer si le noeud a un noeud enfant :</p>

<ul>
  <li><code>node.hasChildNodes()</code></li>
  <li><code>node.firstChild != null</code> (ou simplement <code>node.firstChild</code>)</li>
  <li><code>node.childNodes &amp;&amp; node.childNodes.length</code> (ou <code>node.childNodes.length &gt; 0</code>)</li>
</ul>

<h2 id="Specifications">Spécification</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName("DOM WHATWG", "#dom-node-haschildnodes", "Node: hasChildNodes")}}
      </td>
      <td>{{Spec2("DOM WHATWG")}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Node.hasChildNodes")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{domxref("Node.childNodes")}}</li>
 <li>{{domxref("Node.hasAttributes")}}</li>
</ul>
