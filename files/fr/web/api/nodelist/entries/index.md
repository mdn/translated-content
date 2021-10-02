---
title: NodeList.entries()
slug: Web/API/NodeList/entries
tags:
  - API
  - DOM
  - Iteration
  - Liste
  - Méthodes
  - Node
  - NodeList
  - Noeuds
translation_of: Web/API/NodeList/entries
---
<div>{{APIRef("DOM")}}</div>

<p>La méthode <code><strong>NodeList.entries()</strong></code> renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant de parcourir toutes les paires clé / valeur contenues dans cet objet . Les valeurs sont des objets {{domxref("Node")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">list.entries();</pre>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}}.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var node = document.createElement("div");
var kid1 = document.createElement("p");
var kid2 = document.createTextNode("hey");
var kid3 = document.createElement("span");
node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

var list = node.childNodes;

// Utiliser for..of
for (var entry of list.entries()) {
  console.log(entry);
}
</pre>

<p>résultat :</p>

<pre>Array [ 0, &lt;p&gt; ]
Array [ 1, #text "hey" ]
Array [ 2, &lt;span&gt; ]</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG','#interface-nodelist','entries() (as iterable&lt;Node&gt;)')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("api.NodeList.entries")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Node")}}</li>
 <li>{{domxref("NodeList")}}</li>
</ul>
