---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Bad_regexp_flag
original_slug: Web/JavaScript/Reference/Erreurs/Bad_regexp_flag
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: Syntax error in regular expression (Edge)
SyntaxError: invalid regular expression flag "x" (Firefox)
SyntaxError: Invalid regular expression flags (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Un marqueur (<em>flag</em>) invalide est utilisé dans une expression rationnelle. Un littéral d'expression rationnelle se compose d'un motif entouré de deux barres obliques, les marqueurs sont ajoutés après la seconde barre oblique. On peut également les indiquer dans le deuxième paramètre du constructeur {{jsxref("RegExp")}}. Les marqueurs d'une expression rationnelle peuvent être utilisés séparément ou combinés, dans n'importe quel ordre. Il existe uniquement cinq marqueurs autorisés en ECMAScript.</p>

<p>Pour ajouter un marqueur sur une expression rationnelle, on utilisera cette syntaxe :</p>

<pre class="brush: js">var re = /motif/marqueurs;
</pre>

<p>ou encore :</p>

<pre class="brush: js">var re = new RegExp('motif', 'marqueurs');</pre>

<table class="standard-table">
 <caption>Marqueurs autorisés pour les expressions rationnelles</caption>
 <thead>
  <tr>
   <th scope="col">Marqueur</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>g</code></td>
   <td>Recherche globale.</td>
  </tr>
  <tr>
   <td>i</td>
   <td>Recherche non-sensible à la casse.</td>
  </tr>
  <tr>
   <td>m</td>
   <td>Recherche sur plusieurs lignes.</td>
  </tr>
  <tr>
   <td>u</td>
   <td>Unicode : le motif est interprété comme une suite de codets Unicode.</td>
  </tr>
  <tr>
   <td>y</td>
   <td>La recherche effectuée est « adhérente » et recherche une correspondance à la position indiquée dans la chaîne cible (cf. {{jsxref("RegExp.sticky", "sticky")}}).</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Seuls cinq marqueurs d'expression rationnelle sont valides :</p>

<pre class="brush: js example-bad">/toto/truc;

// SyntaxError: invalid regular expression flag "t"
</pre>

<p>Peut-être souhaitiez-vous créer une expression rationnelle ? Une expression qui contient deux barres obliques est interprétée comme un littéral d'expression rationnelle :</p>

<pre class="brush: js example-bad">let obj = {
  url: /docs/Web
};

// SyntaxError: invalid regular expression flag "W"
</pre>

<p>Peut-être souhaitiez-vous créer une chaîne de caractères ? Dans ce cas, il faut ajouter des quotes (simples ou doubles) afin de former un littéral de chaîne de caractères :</p>

<pre class="brush: js example-good">let obj = {
  url: '/docs/Web'
};</pre>

<h3 id="Marqueurs_valides">Marqueurs valides</h3>

<p>Voir le tableau ci-avant pour la liste des marqueurs autorisés pour manipuler les expressions rationnelles en JavaScript.</p>

<pre class="brush: js example-good">/toto/g;
/toto/gim;
/toto/uy;
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières">Les expressions rationnelles</a></li>
 <li><a href="http://xregexp.com/flags/">XRegEx</a> – une bibliothèque relative aux expressions rationnelles qui fournit quatre nouveaux marqueurs (<em>flags</em>) (<code>n</code>, <code>s</code>, <code>x</code>, <code>A</code>)</li>
</ul>
