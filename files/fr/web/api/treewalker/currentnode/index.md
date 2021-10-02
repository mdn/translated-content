---
title: TreeWalker.currentNode
slug: Web/API/TreeWalker/currentNode
tags:
  - API
  - Arborescence
  - DOM
  - Noeuds
  - Propriété
translation_of: Web/API/TreeWalker/currentNode
---
<p>{{ APIRef("DOM") }}</p>

<p>La propriété <code><strong>TreeWalker.currentNode</strong></code> représente le {{domxref("Node")}} (<em>noeud</em>) sur lequel le {{domxref("TreeWalker")}} est actuellement pointé.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>node</em> = <em>treeWalker</em>.currentNode;
<code><em>treeWalker</em></code>.currentNode = <em>node</em>;
</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
root = treeWalker.currentNode; // l'élément racine car c'est le premier élément!
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
   <td>{{SpecName('DOM WHATWG', '#dom-treewalker-currentnode', 'TreeWalker.currrentNode')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Pas de changement de {{SpecName('DOM2 Traversal_Range')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-currentNode', 'TreeWalker.currentNode')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.TreeWalker.currentNode")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("TreeWalker")}}.</li>
</ul>
