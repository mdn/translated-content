---
title: get Map[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/@@species
original_slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
---
<div>{{JSRef}}</div>

<p><code><strong>Map[@@species]</strong></code> renvoie le constructeur <code>Map</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Map[Symbol.species]
</pre>

<h2 id="Description">Description</h2>

<p>L'accesseur <code>species</code> renvoie le constructeur par défaut pour les objets <code>Map</code>. Les constructeurs des sous-classes peuvent surcharger ce constructeur afin de modifier ce qui est fait lors de la construction de l'objet et son affectation</p>

<h2 id="Exemples">Exemples</h2>

<p>La propriété <code>species</code> renvoie la fonction correspondant au constructeur par défaut. Pour les objets <code>Map</code>, ce sera le constructeur <code>Map</code> :</p>

<pre class="brush: js">Map[Symbol.species]; // function Map()</pre>

<p>Pour des objets dérivés (par exemple un dictionnaire <code>MaMap</code> que vous auriez construit), la propriété <code>species</code> correspondra au constructeur <code>MaMap</code>. Si vous souhaitez surcharger cela pour renvoyer le constructeur parent <code>Map</code>, vous pourrez utiliser :</p>

<pre class="brush: js">class MaMap extends Map {
  // On surcharge le symbole species de MaMap
  // avec le constructeur Map parent
  static get [Symbol.species]() { return Map; }
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-get-map-@@species', 'get Map [ @@species ]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-map-@@species', 'get Map [ @@species ]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Map.@@species")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Symbol.species")}}</li>
</ul>
