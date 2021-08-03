---
title: Intl.DateTimeFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
tags:
  - Internationalisation
  - Intl
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/DateTimeFormat/formatRange
---
<p>{{JSRef}}</p>

<p>La méthode <strong><code>Intl.DateTimeFormat.prototype.formatRange()</code></strong> permet de formater un intervalle de dates de la façon la plus concise en fonction de la <strong><code>locale</code></strong> et des <code><strong>options</strong></code> fournies lors de l'initialisation de l'objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrange.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre>Intl.DateTimeFormat.prototype.formatRange(<var>dateDébut, dateFin</var>)</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_simple_de_formatRange">Utilisation simple de <code>formatRange()</code></h3>

<p>Cette méthode reçoit comme arguments deux objets {{jsxref("Date")}} et renvoie l'intervalle de la façon la plus concise possible (selon les options fournies lors de l'instanciation du formateur <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat">Intl.DateTimeFormat</a></code>).</p>

<pre class="brush: js">let date1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
let date2 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));
let date3 = new Date(Date.UTC(2007, 0, 20, 10, 0, 0));
// &gt; 'Wed, 10 Jan 2007 10:00:00 GMT'
// &gt; 'Wed, 10 Jan 2007 11:00:00 GMT'
// &gt; 'Sat, 20 Jan 2007 10:00:00 GMT'

let fmt1 = new Intl.DateTimeFormat("en", {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
});
console.log(fmt1.format(date1));
console.log(fmt1.formatRange(date1, date2));
console.log(fmt1.formatRange(date1, date3));
// &gt; '1/10/07, 10:00 AM'
// &gt; '1/10/07, 10:00 – 11:00 AM'
// &gt; '1/10/07, 10:00 AM – 1/20/07, 10:00 AM'

let fmt2 = new Intl.DateTimeFormat("en", {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
});
console.log(fmt2.format(date1));
console.log(fmt2.formatRange(date1, date2));
console.log(fmt2.formatRange(date1, date3));
// &gt; 'Jan 10, 2007'
// &gt; 'Jan 10, 2007'
// &gt; 'Jan 10 – 20, 2007'
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
   <td><code><a href="https://rawgit.com/fabalbon/proposal-intl-DateTimeFormat-formatRange/master/out/#datetimeformat-objects">Intl.DateTimeFormat.prototype.formatRange</a></code></td>
   <td>Brouillon de niveau 3</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<p>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl', 'Voir_aussi')}}</p>
