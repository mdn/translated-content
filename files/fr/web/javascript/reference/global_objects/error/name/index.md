---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
tags:
  - Error
  - JavaScript
  - Propriété
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/name
original_slug: Web/JavaScript/Reference/Objets_globaux/Error/name
---
<div>{{JSRef}}</div>

<p>La propriété <code><strong>name</strong></code> est une chaîne de caractères représentant le nom du type d'erreur. La valeur initiale est "Error".</p>

<h2 id="Description">Description</h2>

<p>Par défaut, les instances d'{{jsxref("Error")}} reçoivent le nom "Error". La propriété <code>name</code>, associée à la propriété {{jsxref("Error.message", "message")}}, est utilisée par la méthode {{jsxref("Error.prototype.toString()")}} pour créer une représentation de l'erreur sous la forme d'une chaine de caractères.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Déclencher_une_erreur_personnalisée">Déclencher une erreur personnalisée</h3>

<pre class="brush:js">var e = new Error("Donnée malformée"); // e.name est "Error"

e.name = "ParseError";
throw e;
// e.toString() renverra "ParseError: Donnée malformée"
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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.11.4.2', 'Error.prototype.name')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-error.prototype.name', 'Error.prototype.name')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-error.prototype.name', 'Error.prototype.name')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Error.name")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Error.prototype.message")}}</li>
 <li>{{jsxref("Error.prototype.toString()")}}</li>
</ul>
