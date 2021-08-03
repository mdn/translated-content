---
title: 'TypeError: can''t access property "x" of "y"'
slug: Web/JavaScript/Reference/Errors/Cant_access_property
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_access_property
original_slug: Web/JavaScript/Reference/Erreurs/Cant_access_property
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: can't access property {x} of {y} (Firefox)
TypeError: {y} is undefined, can't access property {x} of it (Firefox)
TypeError: {y} is null, can't access property {x} of it (Firefox)

Exemples
TypeError: x is undefined, can't access property "prop" of it
TypeError: x is null, can't access property "prop" of it
TypeError: can't access property "prop" of undefined
TypeError: can't access property "prop" of null
</pre>

<h2 id="Types_d'erreur">Types d'erreur</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>On a tenté d'accéder à une propriété sur la valeur {{jsxref("undefined")}} ou {{jsxref("null")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Cas_invalides">Cas invalides</h3>

<pre class="brush: js example-bad">// undefined et null ne possèdent aucune propriété et aucune méthode substring
var toto = undefined;
toto.substring(1); // TypeError: x is undefined, can't access property "substring" of it

var toto = null;
toto.substring(1); // TypeError: x is null, can't access property "substring" of it
</pre>

<h3 id="Corriger_le_problème">Corriger le problème</h3>

<p>Pour détecter le cas où la valeur utilisée est <code>undefined</code> ou <code>null</code>, on peut utiliser l'opérateur <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_typeof">typeof</a></code>. Par exemple :</p>

<pre class="brush: js">if (typeof toto !== 'undefined') {
  // On sait alors que toto est bien défini et on peut utiliser ses propriétés s'il en a.
}</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("undefined")}}</li>
 <li>{{jsxref("null")}}</li>
</ul>
