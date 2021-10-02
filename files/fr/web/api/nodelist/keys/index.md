---
title: NodeList.keys()
slug: Web/API/NodeList/keys
tags:
  - API
  - DOM
  - Liste
  - Méthodes
  - Noeuds
translation_of: Web/API/NodeList/keys
---
<p>{{APIRef("DOM")}}</p>

<p>La méthode <code><strong>NodeList.keys()</strong></code> renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant de parcourir toutes les clés contenues dans cet objet. Les clés sont des <code>unsigned integer</code> (<em>entier non signé</em>).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">nodeList.keys();</pre>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}}.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var node = document.createElement("div");
var kid1 = document.createElement("p");
var kid2 = document.createTextNode("hey");
var kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

var list = node.childNodes;

// Utilisation de for..of
for(var key of list.keys()) {
   console.log(key);
}
</pre>

<p>Le résultat est :</p>

<pre>0
1
2
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG','#interface-nodelist','keys() (as iterable)')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("api.NodeList.keys")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Node")}}</li>
 <li>{{domxref("NodeList")}}</li>
</ul>
