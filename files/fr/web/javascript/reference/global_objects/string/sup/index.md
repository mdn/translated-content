---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/sup
original_slug: Web/JavaScript/Reference/Objets_globaux/String/sup
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p>La méthode <code><strong>sup()</strong></code> crée un élément HTML {{HTMLElement("sup")}} qui entraîne l'affichage de la chaîne en exposant.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.sup()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères représentant un élément HTML {{HTMLElement("sup")}}.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>sup</code> encapsule une chaîne dans une balise <code>&lt;sup&gt;</code> :<br>
 <code>"&lt;sup&gt;str&lt;/sup&gt;</code>".</p>

<h2 id="Exemples">Exemples</h2>

<p>L'exemple suivant utilise les méthodes {{jsxref("String.prototype.sub()", "sub()")}} et <code>sup</code> pour mettre en forme une chaîne :</p>

<pre class="brush: js">var superText = "exposant";
var subText = "indice";

console.log("Ceci illustre l'affichage d'un texte en " + superText.sup() + ".");
// Ceci illustre l'affichage d'un texte en &lt;sup&gt;exposant&lt;/sup&gt;.
console.log("Ceci illustre l'affichage d'un texte en " + subText.sub() + ".");
Ceci illustre l'affichage d'un texte en &lt;sub&gt;indice&lt;/sub&gt;.
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
   <td>{{SpecName('ES6', '#sec-string.prototype.sup', 'String.prototype.sup')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles des navigateurs web.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.sup', 'String.prototype.sup')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles des navigateurs web.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.sup")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.sub()")}}</li>
</ul>
