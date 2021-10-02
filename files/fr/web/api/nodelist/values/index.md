---
title: NodeList.values()
slug: Web/API/NodeList/values
tags:
  - API
  - DOM
  - Itérateur
  - Liste
  - Méthodes
  - Noeuds
translation_of: Web/API/NodeList/values
---
<p>{{APIRef("DOM")}}</p>

<p>La méthode <code><strong>NodeList.values()</strong></code> renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant de parcourir toutes les valeurs contenues dans cet objet. Les valeurs sont des objets {{domxref("Node")}} (<em>noeud</em>).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">nodeList.values();</pre>

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
for(var value of list.values()) {
  console.log(value);
}
</pre>

<p>Le résultat est :</p>

<pre>&lt;p&gt;
#text "hey"
&lt;span&gt;
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
   <td>{{SpecName('DOM WHATWG','#interface-nodelist','values() (as iterable&lt;Node&gt;)')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("api.NodeList.values")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Node")}}</li>
 <li>{{domxref("NodeList")}}</li>
</ul>
