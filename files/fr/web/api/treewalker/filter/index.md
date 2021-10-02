---
title: TreeWalker.filter
slug: Web/API/TreeWalker/filter
tags:
  - API
  - Arborescence
  - DOM
  - Noeuds
  - Propriétés
translation_of: Web/API/TreeWalker/filter
---
<p>{{ APIRef("DOM") }}</p>

<p>La propriété en lecture seule <strong><code>TreeWalker.filter</code></strong> renvoie un {{domxref("NodeFilter")}} (<em>filtre de noeuds</em>) qui est l'objet de filtrage associé à {{domxref("TreeWalker")}}.</p>

<p>Lors de la création du <code>TreeWalker</code>, l'objet filtre est transmis comme 3ème paramètre et sa méthode {{domxref("NodeFilter.acceptNode()")}} est appelée sur tous les noeuds pour déterminer s'il doit ou non l'accepter.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>nodeFilter</em> = <em>treeWalker</em>.filter;
</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
nodeFilter = treeWalker.filter; // document.body dans ce cas
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
   <td>{{SpecName('DOM WHATWG', '#dom-treewalker-filter', 'TreeWalker.filter')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Pas de changement de {{SpecName('DOM2 Traversal_Range')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-filter', 'TreeWalker.filter')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.TreeWalker.filter")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.</li>
</ul>
