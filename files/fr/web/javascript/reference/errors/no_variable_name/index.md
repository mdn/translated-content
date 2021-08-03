---
title: 'SyntaxError: missing variable name'
slug: Web/JavaScript/Reference/Errors/No_variable_name
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/No_variable_name
original_slug: Web/JavaScript/Reference/Erreurs/No_variable_name
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Il manque un nom pour une variable. Cela est probablement dû à une erreur de syntaxe dans le code. Peut-être qu'une variable est placée au mauvais endroit ou peut-être qu'il manque un nom car on n'a pas trouvé de nom pertinent… (ce qui est souvent assez difficile).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Absence_d'un_nom_pour_une_variable">Absence d'un nom pour une variable</h3>

<pre class="brush: js example-bad">var = "toto";
</pre>

<p>Il est souvent compliqué de trouver le bon nom pour une variable…</p>

<pre class="brush: js example-good">var àDéfautDeMieux = "toto";</pre>

<h3 id="Les_mots-clés_réservés_ne_peuvent_pas_être_utilisés_comme_noms_de_variables">Les mots-clés réservés ne peuvent pas être utilisés comme noms de variables</h3>

<p>Quelques mots-clés sont <a href="/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Mots-clés">réservés</a> et ne peuvent pas être utilisés comme noms de variable :</p>

<pre class="brush: js example-bad">var debugger = "zuuuuut";
// SyntaxError: missing variable name
</pre>

<h3 id="Déclarer_plusieurs_variables">Déclarer plusieurs variables</h3>

<p>Attention aux virgules lorsqu'on déclare plusieurs variables… Y a-t-il plus de virgules que nécessairee ? Une virgule est-elle utilisée à la place d'un point-virgule ?</p>

<pre class="brush: js example-bad">var x, y = "toto",
var x, = "toto"

var un = document.getElementById('un'),
var deux = document.getElementById('deux'),

// SyntaxError: missing variable name
</pre>

<p>Voici une version corrigée :</p>

<pre class="brush: js example-good">var x, y = "toto";
var x = "toto";

var un = document.getElementById('un');
var deux = document.getElementById('deux');</pre>

<h3 id="Tableaux">Tableaux</h3>

<p>Pour former un littéral de tableau ({{jsxref("Array")}}), il est nécessaire d'ajouter des crochets autour des valeurs des éléments. Le fragment de code suivant ne fonctionnera pas :</p>

<pre class="brush: js example-bad">var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
</pre>

<p>Voici la forme équivalente correcte :</p>

<pre class="brush: js example-good">var arr = [1,2,3,4,5];</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="http://wiki.c2.com/?GoodVariableNames">Choisir de bons noms de variable (en anglais)</a></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/var">var</a></code></li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Déclarations">Guide JavaScript : Les déclarations de variable</a></li>
</ul>
