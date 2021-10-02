---
title: NodeIterator.root
slug: Web/API/NodeIterator/root
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Noeuds
  - Propriété
translation_of: Web/API/NodeIterator/root
---
<div>{{APIRef("DOM")}}</div>

<p>La propriété en lecture seule <code><strong>NodeIterator.root</strong></code> représente le {{DOMxref("Node")}} qui est la racine de ce que le {{DOMxref("NodeIterator")}} traverse.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>root</em> = <em>nodeIterator</em>.root;
</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
root = nodeIterator.root; // document.body dans ce cas
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
   <td>{{SpecName('DOM WHATWG', '#dom-nodeiterator-root', 'NodeIterator.root')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Pas de changement de {{SpecName('DOM2 Traversal_Range')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-NodeIterator-root', 'NodeIterator.root')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.NodeIterator.root")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}.</li>
</ul>
