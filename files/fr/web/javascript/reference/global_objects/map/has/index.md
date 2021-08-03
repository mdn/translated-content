---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/has
original_slug: Web/JavaScript/Reference/Global_Objects/Map/has
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>has()</strong></code> renvoie un booléen permettant de déterminer si l'objet <code>Map</code> en question contient la clé donnée.</p>

<div>{{EmbedInteractiveExample("pages/js/map-prototype-has.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>maMap</em>.has(clé);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>clé</code></dt>
 <dd>Ce paramètre obligatoire correspond à la clé dont on veut savoir si elle appartient à l'objet <code>Map</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Cette méthode renvoie un booléen : <code>true</code> si un élément avec cette clé existe au sein de l'objet <code>Map</code> et <code>false</code> sinon.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var maMap = new Map();
maMap.set("truc", "toto");

maMap.has("truc");  // renvoie true
maMap.has("machin");// renvoie false
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-map.prototype.has', 'Map.prototype.has')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-map.prototype.has', 'Map.prototype.has')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Map.has")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Map.prototype.set()")}}</li>
 <li>{{jsxref("Map.prototype.get()")}}</li>
</ul>
