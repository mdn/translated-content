---
title: DataView.prototype.getInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt8
tags:
  - DataView
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/getInt8
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView/getInt8
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>getInt8()</code></strong> permet de lire un entier signé sur 8 bits à l'octet donné par rapport au début de {{jsxref("DataView")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/dataview-getint8.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dataview</var>.getInt8(positionOctet)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>positionOctet</code></dt>
 <dd>La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un entier signé sur 8 bits.</p>

<h3 id="Erreurs_renvoyées">Erreurs renvoyées</h3>

<dl>
 <dt>{{jsxref("RangeError")}}</dt>
 <dd>Renvoyée si <code>positionOctet</code> est tel qu'il est en dehors de la vue.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Il n'y a pas de contrainte d'alignement, les valeurs codées sur plusieurs octets peuvent être obtenues depuis n'importe quelle position.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_de_la_méthode_getInt8">Utilisation de la méthode <code>getInt8</code></h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getInt8(1); // 0
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
   <td>{{SpecName('Typed Array')}}</td>
   <td>{{Spec2('Typed Array')}}</td>
   <td>Remplacée dans ECMAScript 2015.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-dataview.prototype.getint8', 'DataView.prototype.getInt8')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-dataview.prototype.getint8', 'DataView.prototype.getInt8')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.DataView.getInt8")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("DataView")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
