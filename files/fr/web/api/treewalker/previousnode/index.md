---
title: TreeWalker.previousNode()
slug: Web/API/TreeWalker/previousNode
tags:
  - API
  - Arborescence
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/TreeWalker/previousNode
---
<p>{{ APIRef("DOM") }}</p>

<p>La méthode <strong><code>TreeWalker.previousNode()</code></strong> déplace le {{domxref("Node")}} courant vers le noeud précédent <em>visible</em> dans l'ordre du document et renvoie le noeud trouvé. Elle déplace aussi le noeud courant vers celui-ci. S'il n'en existe aucun ou s'il est avant le <em>noeud racine</em> défini lors de la construction de l'objet, elle renvoie <code>null</code> et le noeud actuel n'est pas changé.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>node</em> = <em>treeWalker</em>.previousNode();
</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.previousNode(); // renvoie null car il n'y a pas de parent

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
   <td>{{SpecName('DOM WHATWG', '#dom-treewalker-previousnode', 'TreeWalker.previousNode')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Pas de changement de {{SpecName('DOM2 Traversal_Range')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-previousNode', 'TreeWalker.previousNode')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.TreeWalker.previousNode")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.</li>
</ul>
