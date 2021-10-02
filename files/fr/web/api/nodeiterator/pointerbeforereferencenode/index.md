---
title: NodeIterator.pointerBeforeReferenceNode
slug: Web/API/NodeIterator/pointerBeforeReferenceNode
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Noeuds
  - Propriétés
translation_of: Web/API/NodeIterator/pointerBeforeReferenceNode
---
<p>{{APIRef("DOM")}} {{SeeCompatTable}}</p>

<p>La propriété en lecture seule <strong><code>NodeIterator.pointerBeforeReferenceNode</code></strong> renvoie un {{domxref("Boolean")}} (booléen) qui indique si le {{domxref("NodeFilter")}} est ancré avant (si la valeur est <code>true</code> (<em>vrai</em>)) ou après (<code>false</code> (<em>faux</em>)) le noeud-ancre indiqué par la propriété {{domxref("NodeIterator.referenceNode")}}.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>flag</em> = <em>nodeIterator</em>.pointerBeforeReferenceNode;
</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
flag = nodeIterator.pointerBeforeReferenceNode;</pre>

<h2 id="Specification">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-nodeiterator-pointerbeforereferencenode', 'NodeIterator.pointerBeforeReferenceNode')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.NodeIterator.pointerBeforeReferenceNode")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}</li>
</ul>
