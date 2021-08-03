---
title: DataView.prototype.setInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
tags:
  - DataView
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView/setInt32
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>setInt32()</code></strong> permet d'enregister un entier signé sur 32 bits (type <em>long</em> par analogie avec C) à l'octet indiqué par rapport au début de la {{jsxref("DataView")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/dataview-setint32.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dataview</var>.setInt32(positionOctet, value [, littleEndian])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>positionOctet</code></dt>
 <dd>La position, exprimée en numéro d'octet, à partir du début de la vue à laquelle enregistrer la donnée.</dd>
 <dt><code>valeur</code></dt>
 <dd>La valeur à enregistrer</dd>
 <dt><code>littleEndian</code></dt>
 <dd>{{optional_inline}} Indique si la donnée sur 32 bits est enregistrée {{Glossary("Endianness", "dans l'ordre des octets de poids faibles")}}. Si ce paramètre vaut <code>false</code> ou <code>undefined</code>, l'ordre sera celui des octets de poids forts.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>{{jsxref("undefined")}}.</p>

<h3 id="Erreurs_renvoyées">Erreurs renvoyées</h3>

<dl>
 <dt>{{jsxref("RangeError")}}</dt>
 <dd>Renvoyée si <code>positionOctet</code> est tel que l'enregistrement sera fait en dehors de la vue.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_de_la_méthode_setInt32">Utilisation de la méthode <code>setInt32</code></h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setInt32(1, 3);
dataview.getInt32(1); // 3
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
   <td>Remplacée par ECMAScript 2015.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-dataview.prototype.setint32', 'DataView.prototype.setInt32')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-dataview.prototype.setint32', 'DataView.prototype.setInt32')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.DataView.setInt32")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("DataView")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
