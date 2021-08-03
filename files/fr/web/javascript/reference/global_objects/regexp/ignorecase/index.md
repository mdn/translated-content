---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
tags:
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/ignoreCase
---
<div>{{JSRef}}</div>

<p>La propriété <code><strong>ignoreCase</strong></code> indique si le drapeau (<em>flag</em>) "<code>i</code>" est utilisé ou non pour cette expression rationnelle. <code>ignoreCase</code> est une propriété accessible en lecture seule d'une instance d'expression rationnelle donnée.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}</div>



<div>{{js_property_attributes(0,0,1)}}</div>

<h2 id="Description">Description</h2>

<p>La valeur de <code>ignoreCase</code> est un booléen. Elle vaut <code>true</code> si le flag "<code>i</code>" a été utilisé et <code>false</code> sinon. Le drapeau "<code>i</code>" indique si la recherche de correspondances doit être sensible à la casse ou non.</p>

<p>Cette propriété ne peut pas être modifiée directement.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">var regex = new RegExp("toto", "i");

console.log(regex.ignoreCase); // true
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.2. Avec JavaScript 1.5 : <code>ignoreCase</code> est une propriété d'une instance de {{jsxref("RegExp")}} et pas une propriété de l'objet <code>RegExp</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.10.7.3', 'RegExp.prototype.ignoreCase')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-get-regexp.prototype.ignorecase', 'RegExp.prototype.ignoreCase')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td><code>ignoreCase</code> est désormais une propriété du prototype sous forme d'accesseur plutôt qu'une propriété directe de l'instance.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-regexp.prototype.ignorecase', 'RegExp.prototype.ignoreCase')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("javascript.builtins.RegExp.ignoreCase")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("RegExp.prototype.global")}}</li>
 <li>{{jsxref("RegExp.prototype.lastIndex")}}</li>
 <li>{{jsxref("RegExp.prototype.multiline")}}</li>
 <li>{{jsxref("RegExp.prototype.source")}}</li>
 <li>{{jsxref("RegExp.prototype.sticky")}}</li>
</ul>
