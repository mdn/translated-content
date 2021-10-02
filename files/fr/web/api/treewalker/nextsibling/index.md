---
title: TreeWalker.nextSibling()
slug: Web/API/TreeWalker/nextSibling
tags:
  - API
  - Arborescence
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/TreeWalker/nextSibling
---
<p>{{ APIRef("DOM") }}</p>

<p>La méthode <strong><code>TreeWalker.nextSibling()</code></strong> déplace le {{domxref("Node")}} courant vers son frère suivant, le cas échéant, et renvoie le frère trouvé. Si aucun noeud frère n'est trouvé, elle renvoie <code>null</code> et le noeud courant reste inchangé.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>node</em> = <em>treeWalker</em>.nextSibling();
</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
treeWalker.firstChild();
var node = treeWalker.nextSibling(); // renvoie null si le premier enfant de l'élément racine n'a pas de frère

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
   <td>{{SpecName('DOM WHATWG', '#dom-treewalker-nextsibling', 'TreeWalker.nextSibling')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Pas de changement de {{SpecName('DOM2 Traversal_Range')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-nextSibling', 'TreeWalker.nextSibling')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.TreeWalker.nextSibling")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.</li>
</ul>
