---
title: NodeIterator.detach()
slug: Web/API/NodeIterator/detach
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Méthodes
  - Noeuds
translation_of: Web/API/NodeIterator/detach
---
<p>{{APIRef("DOM")}}{{obsolete_header}}</p>

<p>La méthode <strong><code>NodeIterator.detach()</code></strong> est une non opération, conservée seulement pour la rétro-compatibilité.</p>

<p>Initialement, elle détachait {{domxref("NodeIterator")}} de l'ensemble sur lequel il itérait, libérant toutes les ressources utilisées par lui et basculant son état à <code>INVALID</code>. Une fois cette méthode utilisée, l'appel d'autres méthodes sur le <code>NodeIterator</code> déclenchait une exception <code>INVALID_STATE_ERR</code>. </p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>nodeIterator</em>.detach();
</pre>

<h2 id="Example">Exemple</h2>

<pre class="eval">var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
nodeIterator.detach(); // détache l'itérateur

nodeIterator.nextNode(); // lance une exception INVALID_STATE_ERR
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
   <td>{{SpecName('DOM WHATWG', '#dom-nodeiterator-detach', 'NodeIterator.detach')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Transformation en non opération</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-NodeIterator-detach', 'NodeIterator.detach')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.NodeIterator.detach")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}.</li>
</ul>
