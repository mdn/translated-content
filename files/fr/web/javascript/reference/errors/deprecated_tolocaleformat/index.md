---
title: 'Warning: Date.prototype.toLocaleFormat is deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
tags:
  - Avertissement
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
original_slug: Web/JavaScript/Reference/Erreurs/Deprecated_toLocaleFormat
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">Warning: Date.prototype.toLocaleFormat is deprecated; consider using Intl.DateTimeFormat instead
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>Un avertissement, l'exécution du script JavaScript n'est pas interrompue.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>La méthode non-standard {{jsxref("Date.prototype.toLocaleFormat")}} est dépréciée et ne devrait plus être utilisée. Elle utilise une chaîne de caractères qui indique le format avec la même syntaxe que la fonction <code>strftime()</code> en C. Cette fonction n'est plus disponible à partir de Firefox 58.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Syntaxe_dépréciée">Syntaxe dépréciée</h3>

<p>La méthode {{jsxref("Date.prototype.toLocaleFormat")}} est dépréciée et sera retirée (aucune prise en charge par les autres navigateurs en dehors de Firefox).</p>

<pre class="brush: js example-bad">var today = new Date();
var date = today.toLocaleFormat('%A %e %B %Y');

console.log(date);
// En français
// "Vendredi 10 mars 2017"</pre>

<h3 id="Utiliser_une_syntaxe_standard_grâce_à_l'API_ECMAScript_Intl">Utiliser une syntaxe standard grâce à l'API ECMAScript Intl</h3>

<p>Le standard ECMA-402 (l'API ECMAScript Intl) définit des objets et méthodes standards qui permettent de mettre en forme des dates et heures (disponible à partir de Chrome 24, de Firefox 29, d'IE11 et de  Safari10).</p>

<p>Si on souhaite uniquement formater une date, on pourra utiliser la méthode {{jsxref("Date.prototype.toLocaleDateString")}}.</p>

<pre class="brush: js example-good">var today = new Date();
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var date = today.toLocaleDateString('fr-FR', options);

console.log(date);
// "Vendredi 10 mars 2017"
</pre>

<p>Si on manipule plus de dates, on peut utiliser l'objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} qui permet de mettre en cache certains des calculs afin d'avoir une mise en forme rapide (ce qui s'avère utile lorsqu'on a une boucle par exemple) :</p>

<pre class="brush: js example-good">var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var dateFormatter = new Intl.DateTimeFormat('de-DE', options)

var dates = [Date.UTC(2012, 11, 20, 3, 0, 0),
             Date.UTC(2014, 04, 12, 8, 0, 0)];

dates.forEach(date =&gt; console.log(dateFormatter.format(date)));

// "Donnerstag, 20. Dezember 2012"
// "Montag, 12. Mai 2014"
</pre>

<h3 id="Utiliser_les_méthodes_de_l'objet_Date">Utiliser les méthodes de l'objet <code>Date</code></h3>

<p>L'objet {{jsxref("Date")}} dispose de plusieurs méthodes qui permettent de construire une chaîne de caractères pour une date donnée. Ainsi</p>

<pre class="brush: js example-bad">(new Date()).toLocaleFormat("%Y%m%d");
// "20170310"
</pre>

<p>Pourra être converti en :</p>

<pre class="brush: js example-good">let now = new Date();
let date = now.getFullYear() * 10000 +
          (now.getMonth() + 1) * 100 + now.getDate();

console.log(date);
// "20170310"</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.toLocaleFormat")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleDateString")}}</li>
 <li>{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}</li>
</ul>
