---
title: NodeIterator.referenceNode
slug: Web/API/NodeIterator/referenceNode
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Noeuds
  - Propriétés
translation_of: Web/API/NodeIterator/referenceNode
---
<p>{{APIRef("DOM")}}{{ SeeCompatTable }}</p>

<p>La propriété en lecture seule <strong><code>NodeIterator.referenceNode</code></strong> renvoie le {{domxref("Node")}} auquel l'itérateur est ancré ; si de nouveaux noeuds sont insérés, l'itérateur reste ancré au noeud de référence spécifié par cette propriété.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>node</em> = <em>nodeIterator</em>.referenceNode;
</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
node = nodeIterator.referenceNode;
</pre>

<h2 id="Specification">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-nodeiterator-referencenode', 'NodeIterator.referenceNode')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.NodeIterator.referenceNode")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}</li>
</ul>
