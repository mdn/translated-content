---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Number
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isNaN
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/isNaN
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>Number.isNaN()</code></strong> permet de déterminer si la valeur passée en argument est {{jsxref("NaN")}}, avec un type {{jsxref("Number")}}. Cette version est plus robuste que la méthode de l'objet global {{jsxref("isNaN")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Number.isNaN(<var>valeurÀTester</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code><em>valeurÀTester</em></code></dt>
 <dd>La valeur qu'on souhaite comparer à {{jsxref("NaN")}}.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen qui indique si la valeur fournie en argument est {{jsxref("NaN")}}.</p>

<h2 id="Description">Description</h2>

<p>Les deux opérateurs d'égalité, {{jsxref("Opérateurs/Opérateurs_de_comparaison", "==", "#.C3.89galit.C3.A9_simple_(.3D.3D)")}} et {{jsxref("Opérateurs/Opérateurs_de_comparaison", "===", "#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)")}}, renvoient <code>false</code> pour vérifier que {{jsxref("NaN")}} <em>est</em> NaN. La fonction <code>Number.isNaN</code> est nécessaire pour distinguer ce cas. Le résultat de cette comparaison sera différent avec les autres méthodes de comparaisons en JavaScript.</p>

<p>En effet, la fonction globale {{jsxref("isNaN")}} convertit l'argument en un nombre.  <code>Number.isNaN</code> ne convertit pas l'argument. Cela signifie qu'on peut passer des valeurs qui, normalement, seraient converties en NaN, mais qui ne sont pas NaN. Cela signifie également que, uniquement lorsque la méthode sera utilisée avec des nombres qui valent <code>NaN</code>, elle renverra <code>true</code>.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js;">Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// tout le reste renverra : false
Number.isNaN(undefined);
Number.isNaN({});

Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);

Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
Number.isNaN("NaN");
Number.isNaN("blabla"); // ex : cette valeur aurait rendu true avec la méthode isNaN de l'objet global</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>La fonction suivant fonctionne car <code>NaN</code> est la seule valeur JavaScript qui n'est pas égale à elle-même.</p>

<pre class="brush: js">Number.isNaN = Number.isNaN || function(value) {
    return typeof value === "number" &amp;&amp; isNaN(value);
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-number.isnan', 'Number.isnan')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.isnan', 'Number.isnan')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Number.isNaN")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'objet {{jsxref("Number")}} auquel appartient cette méthode.</li>
 <li>La méthode {{jsxref("Objets_globaux/Object/is", "Object.is")}} qui permet d'effectuer des comparaisons sur l'égalité de valeur</li>
 <li>La méthode {{jsxref("isNaN")}} de l'objet global</li>
</ul>
