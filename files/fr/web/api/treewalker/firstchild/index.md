---
title: TreeWalker.firstChild()
slug: Web/API/TreeWalker/firstChild
tags:
  - API
  - Arborescence
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/TreeWalker/firstChild
---
<p>{{ APIRef("DOM") }}</p>

<p>La méthode <strong><code>TreeWalker.firstChild()</code></strong> déplace le {{domxref("Node")}} courant vers le premier enfant <em>visible</em> du noeud courant et renvoie l'enfant trouvé. Il déplace aussi le noeud courant vers cet enfant. Si aucun enfant n'existe, elle renvoie <code>null</code> et le noeud courant n'est pas modifié.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>node</em> = <em>treeWalker</em>.firstChild;</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.firstChild(); // renvoie le premier enfant de l'élément racine ou null si aucun

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
   <td>{{SpecName('DOM WHATWG', '#dom-treewalker-firstchild', 'TreeWalker.firstChild')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Pas de changement de {{SpecName('DOM2 Traversal_Range')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-firstChild', 'TreeWalker.firstChild')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.TreeWalker.firstChild")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.</li>
</ul>
