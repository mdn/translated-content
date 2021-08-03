---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
tags:
  - Déprécié
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/fixed
original_slug: Web/JavaScript/Reference/Objets_globaux/String/fixed
---
<div>{{JSRef}}{{deprecated_header}}</div>

<p>La méthode <code><strong>fixed()</strong></code> permet de créer un élément HTML {{HTMLElement("tt")}}, ce qui permet d'afficher le texte de la chaîne de caractère dans une fonte à chasse fixe.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.fixed()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères représentant un élément HTML {{HTMLElement("tt")}}.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>fixed()</code> encadre une chaîne de caractères dans une balise <code>&lt;tt&gt;</code> :<br>
 <code>"&lt;tt&gt;str&lt;/tt&gt;</code>"</p>

<h2 id="Exemples">Exemples</h2>

<p>L'exemple suivant illustre l'utilisation de la méthode <code>fixed</code> pour formater une chaîne de caractères :</p>

<pre class="brush:js">var worldString = "Coucou monde";

console.log(worldString.fixed());
// "&lt;tt&gt;Coucou monde&lt;/tt&gt;"
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
   <td>{{SpecName('ES6', '#sec-string.prototype.fixed', 'String.prototype.fixed')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale. Implémentée dans JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.fixed', 'String.prototype.fixed')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.fixed")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.bold()")}}</li>
 <li>{{jsxref("String.prototype.italics()")}}</li>
 <li>{{jsxref("String.prototype.strike()")}}</li>
</ul>
