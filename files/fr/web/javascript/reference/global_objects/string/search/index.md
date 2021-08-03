---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
tags:
  - Expressions rationnelles
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/search
original_slug: Web/JavaScript/Reference/Objets_globaux/String/search
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>search()</strong></code> éxecute une recherche dans une chaine de caractères grâce à une expression rationnelle appliquée sur la chaîne courante.</p>

<div>{{EmbedInteractiveExample("pages/js/string-search.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.search(<var>regexp</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>regexp</code></dt>
 <dd>Un objet représentant une expression rationnelle. Si l'objet passé n'est pas un objet d'expression régulière, il est directement converti en une instance de {{jsxref("RegExp")}} en utilisant <code>new RegExp(obj)</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Si la recherche aboutit, <code>search()</code> renvoie un entier qui correspond à l'indice de la première correspondance trouvée dans la chaîne. Si rien n'est trouvé, la méthode renvoie <code>-1</code>.</p>

<h2 id="Description">Description</h2>

<p>Si la recherche est positive, <code>search()</code> renvoie l'indice de la première correspondance pour l'expression rationnelle au sein de la chaine de caractères. Sinon, la méthode renvoie -1.</p>

<p>Si on souhaite savoir si un motif est trouvé dans une chaine de caractères, on utilisera cette méthode (semblable à la méthode {{jsxref("RegExp.prototype.test", "test()")}}) du prototype de <code>RegExp</code> ; pour plus d'informations (mais une éxecution plus lente), on utilisera {{jsxref("String.prototype.match", "match()")}} (semblable à la méthode {{jsxref("RegExp.prototype.exec", "exec()")}} pour les expressions rationnelles). La méthode <code>test</code> est semblable mais renvoie uniquement un booléen indiquant si une correspondance a été trouvée.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, on utilise une chaîne de caractères pour laquelle on applique deux expressions rationnelles (la première permet d'obtenir une correspondance et la seconde n'en trouve aucune).</p>

<pre class="brush: js">var maChaine = "CoucOu";
var regex1 = /[A-Z]/g;
var regex2 = /[.]/g;

console.log(maChaine.search(regex1)); // Renvoie 0, la position de la première majuscule
console.log(maChaine.search(regex2)); // Renvoie -1 car il n'y a aucun point dans la chaîne</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.2</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.5.4.12', 'String.prototype.search')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.search', 'String.prototype.search')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.search', 'String.prototype.search')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.search")}}</p>

<h2 id="Notes_spécifiques_à_Gecko">Notes spécifiques à Gecko</h2>

<ul>
 <li><code>flags</code> était un second argument non standard présent uniquement sur Gecko : <var>str</var>.search(<var>regexp, flags</var>)</li>
 <li>Avant {{Gecko("8.0")}}, <code>search()</code> n'était pas implémenté correctement ; quand il était appelé sans paramètre ou avec {{jsxref("undefined")}}, la recherche validait la chaine de caractères "undefined", au lieu de valider une chaine de caractères vide. Cela a été corrigé ; désormais, <code>"a".search()</code> et <code>"a".search(undefined)</code> renvoient bien 0.</li>
 <li>À partir de Gecko 39 {{geckoRelease(39)}}, les arguments non-standards (<code>flags</code>) pour les drapeaux sont dépréciés et déclenchent des avertissements dans la console ({{bug(1142351)}}). Cette propriété est spécifique à Gecko et sera retirée à l'avenir.</li>
 <li>À partir de Gecko 47 {{geckoRelease(47)}}, l'argument non-standard <code>flags</code> n'est plus supporté dans les versions hors <em>release</em> et sera bientôt retiré définitivement ({{bug(1245801)}}).</li>
 <li>À partir de Gecko 49 {{geckoRelease(49)}}, l'argument non-standard <code>flags</code> n'est plus pris en charge ({{bug(1108382)}}).</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.match()")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
</ul>
