---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - Error
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/Error/toString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toString()</strong></code> renvoie une représentation de l'objet {{jsxref("Error")}} sous la forme d'une chaine de caractères.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>e</var>.toString()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères représentant l'objet {{jsxref("Error")}}.</p>

<h2 id="Description">Description</h2>

<p>L'objet {{jsxref("Error")}} surcharge la méthode {{jsxref("Object.prototype.toString()")}} héritée par tous les objets. Sa sémantique est la suivante (en partant du principe que {{jsxref("Object")}} et {{jsxref("String")}} ont leurs valeurs originales) :</p>

<pre class="brush:js">Error.prototype.toString = function () {
  "use strict";

  var obj = Object(this);
  if (obj !== this)
    throw new TypeError();

  var name = this.name;
  name = (name === undefined) ? "Error" : String(name);

  var msg = this.message;
  msg = (msg === undefined) ? "" : String(msg);

  if (name === "")
    return msg;
  if (msg === "")
    return name;

  return name + ": " + msg;
};
</pre>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">var e = new Error("Erreur fatale");
console.log(e.toString()); // "Error: Erreur fatale"

e.name = undefined;
console.log(e.toString()); // "Error: Erreur fatale"

e.name = "";
console.log(e.toString()); // "Erreur fatale"

e.message = undefined;
console.log(e.toString()); // ""

e.name = "salut";
console.log(e.toString()); // "salut"
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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.11.4.4', 'Error.prototype.toString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-error.prototype.tostring', 'Error.prototype.toString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-error.prototype.tostring', 'Error.prototype.toString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Error.toString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Error.prototype.toSource()")}} {{non-standard_inline}}</li>
</ul>
