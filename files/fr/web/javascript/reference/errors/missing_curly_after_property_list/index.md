---
title: 'SyntaxError: missing } after property list'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
original_slug: Web/JavaScript/Reference/Erreurs/Missing_curly_after_property_list
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: Expected '}' (Edge)
SyntaxError: missing } after property list (Firefox)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Il y a une coquille dans le <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet">littéral objet</a> utilisé. Cela peut être dû à une accolade manquante ou à une virgule manquante. Il est aussi utile de vérifier que les accolades et les parenthèses sont bien ordonnées. Pour ce type d'erreur, une bonne indentation permet de repérer plus facilement la coquille parmi les lignes de code.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Une_virgule_oubliée">Une virgule oubliée</h3>

<p>Il arrive parfois que ce soit une virgule absente dans le littéral qui entraîne cette erreur :</p>

<pre class="brush: js example-bad">var obj = {
  a: 1,
  b: { maProp: 2 }
  c: 3
};
</pre>

<p>La version correcte correspondante est :</p>

<pre class="brush: js example-good">var obj = {
  a: 1,
  b: { maProp: 2 },
  c: 3
};
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet">Les littéraux objets</a></li>
</ul>
