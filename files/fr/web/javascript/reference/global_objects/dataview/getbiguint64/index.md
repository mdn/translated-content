---
title: DataView.prototype.getBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64
tags:
  - BigInt
  - DataView
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView/getBigUint64
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>getBigUint64()</code></strong> permet de lire un entier non signé sur 64 bits (type <em>unsigned long long</em> par analogie avec C) à l'octet donné par rapport au début de {{jsxref("DataView")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/dataview-getbiguint64.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dataview</var>.getBigUint64(positionOctet [, littleEndian])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>positionOctet</code></dt>
 <dd>La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.</dd>
 <dt><code>littleEndian</code></dt>
 <dd>{{optional_inline}} indique si la valeur sur 64 bits est enregistrée dans l'ordre des octets {{Glossary("Endianness", "de poids faible")}}. Si le paramètre vaut <code>false</code> ou <code>undefined</code>, la valeur sera lue dans l'ordre des octets de poids forts.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une valeur {{jsxref("BigInt")}}</p>

<h3 id="Erreurs_renvoyées">Erreurs renvoyées</h3>

<dl>
 <dt>{{jsxref("RangeError")}}</dt>
 <dd>Renvoyée si <code>positionOctet</code> est tel qu'il est en dehors de la vue.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Il n'y a pas de contrainte d'alignement, les valeurs codées sur plusieurs octets peuvent être obtenues depuis n'importe quelle position.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_de_la_méthode_getBigUint64()">Utilisation de la méthode <code>getBigUint64()</code></h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getBigUint64(0); // 0n
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
   <td><a href="https://tc39.es/proposal-bigint/#sec-dataview.prototype.getbiguint64">Proposition pour <code>DataView.prototype.getBigUint64()</code></a></td>
   <td></td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.DataView.getBigUint64")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("DataView")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("BigInt")}}</li>
</ul>
