---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/get
original_slug: Web/JavaScript/Reference/Global_Objects/Map/get
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>get()</strong></code> renvoie un élément précisé d'un objet <code>Map</code>. Si la valeur associée à la clé fournie est un objet, alors on obtient une référence à cet objet et tous changements apporté à cet objet sera aussi visible à l'intérieur de l'objet <code>Map</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/map-prototype-get.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate"><em>maMap</em>.get(clé)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>clé</code></dt>
 <dd>La clé de l'élément à renvoyer depuis l'objet <code>Map</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'élément associée à la clé donnée ou {{jsxref("undefined")}} si la clé ne fait pas partie de l'objet <code>Map</code>.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js notranslate">var maMap = new Map();
maMap.set("truc", "toto");

maMap.get("truc");     // Renvoie "toto".
maMap.get("machin");   // Renvoie undefined.
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
   <td>{{SpecName('ES2015', '#sec-map.prototype.get', 'Map.prototype.get')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-map.prototype.get', 'Map.prototype.get')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Map.get")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Map.prototype.set()")}}</li>
 <li>{{jsxref("Map.prototype.has()")}}</li>
</ul>
