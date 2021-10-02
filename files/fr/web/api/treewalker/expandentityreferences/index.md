---
title: TreeWalker.expandEntityReferences
slug: Web/API/TreeWalker/expandEntityReferences
tags:
  - API
  - Arborescence
  - DOM
  - Noeuds
  - Propriétés
translation_of: Web/API/TreeWalker/expandEntityReferences
---
<p>{{ APIRef("DOM") }}{{obsolete_header}}</p>

<p>La propriété en lecture seule <code><strong>TreeWalker.expandEntityReferences</strong></code> renvoie un {{domxref("Boolean")}} (<em>booléen</em>) indiquant si les enfants des nœuds de référence d'entité sont visibles ou non pour le {{domxref("TreeWalker")}}.</p>

<p>Si la valeur est <code>false</code> (<em>faux</em>), les enfants des nœuds de référence d'entité (ainsi que tous leurs descendants) sont rejetés. Cela a préséance sur la valeur de la méthode  {{domxref("TreeWalker.whatToShow")}} et du filtre associé.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>expand</em> = <em>treeWalker</em>.expandEntityReferences;
</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
expand = treeWalker.expandEntityReferences;</pre>

<h2 id="Specification">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#treewalker', 'Treewalker')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Suppression de la spécification.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-expandEntityReferences', 'TreeWalker.expandEntityReferences')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.TreeWalker.expandEntityReferences")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface à laquelle la propriété appartient : {{domxref("TreeWalker")}}.</li>
</ul>
