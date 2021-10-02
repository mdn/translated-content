---
title: DOMTokenList.entries()
slug: Web/API/DOMTokenList/entries
tags:
  - API
  - Chaînes de caractères
  - DOM
  - Itérateurs
  - Listes
  - Méthodes
translation_of: Web/API/DOMTokenList/entries
---
<div>{{APIRef("DOM")}}</div>

<p>La méthode <code><strong>DOMTokenList.entries()</strong></code> renvoie un {{jsxref("Les_protocoles_iteration",'itérateur')}} permettant de parcourir toutes les paires clé / valeur contenues dans cet objet. Les valeurs sont des objets {{domxref("DOMString")}} (<em>chaînes de caractères</em>), chacun représentant une seule marque.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">tokenList.entries();</pre>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}}.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, nous récupérons la liste des classes définies sur un élément {{htmlelement("span")}} en tant que <code>DOMTokenList</code> en utilisant {{domxref("Element.classList")}}. Nous récupérons un itérateur contenant les paires clé / valeur en utilisant <code>entries()</code>, puis parcourons chacune d'entre elles en utilisant une boucle <a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for ... of</a> , et les écrivons dans un  {{domxref("Node.textContent")}}  du <code>&lt;span&gt;</code>.</p>

<p>D'abord le HTML :</p>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<p>Maintenant le JavaScript :</p>

<pre class="brush: js">var span = document.querySelector("span");
var classes = span.classList;
var iterator = classes.entries();

for(var value of iterator) {
  span.textContent += value + ' ++ ';
}</pre>

<p>La sortie ressemble à ceci :</p>

<p>{{ EmbedLiveSample('Examples', '100%', 60) }}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG','#interface-domtokenlist','entries() (as iterable&lt;Node&gt;)')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("api.DOMTokenList.entries")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("DOMSettableTokenList")}} (objet qui étend DOMTokenList avec la propriété définissable<em> .value</em>)</li>
</ul>
