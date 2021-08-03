---
title: Intl.Locale.prototype.calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Locale
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/calendar
---
<div>{{JSRef}}</div>

<p>La propriété <strong><code>Intl.Locale.prototype.calendar</code></strong> est une propriété (via un accesseur) qui renvoie le type de calendrier utilisé par l'instance de <code>Locale</code>.</p>

<h2 id="Description">Description</h2>

<p>La propriété <code>calendar</code> renvoie la partie de la locale qui indique le calendrier utilisé. Bien que la plupart des régions utilise le calendrier grégorien, il existe différents calendriers utilisés. Le tableau qui suit indique les clés Unicode pour les différents calendriers ainsi qu'une description.</p>

<table class="standard-table">
 <caption>Clés Unicode pour les calendriers</caption>
 <thead>
  <tr>
   <th scope="col">Clé Unicode</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>buddhist</code></td>
   <td>Calendrier bouddhiste</td>
  </tr>
  <tr>
   <td><code>chinese</code></td>
   <td>Calendrier chinois traditionnel</td>
  </tr>
  <tr>
   <td><code>coptic</code></td>
   <td>Calendrier copte</td>
  </tr>
  <tr>
   <td><code>dangi</code></td>
   <td>Calendrier coréen traditionnel</td>
  </tr>
  <tr>
   <td><code>ethioaa</code></td>
   <td>Calendrier éthiopique, Amete Alem (an 0 situé environ à  5493 ans avant notre ère)</td>
  </tr>
  <tr>
   <td><code>ethiopic</code></td>
   <td>Calendrier éthiopique, Amete Mihret (an 0 situé environ à 8 ans de notre ère)</td>
  </tr>
  <tr>
   <td><code>gregory</code></td>
   <td>Calendrier grégorien</td>
  </tr>
  <tr>
   <td><code>hebrew</code></td>
   <td>Calendrier traditionnel hébreux</td>
  </tr>
  <tr>
   <td><code>indian</code></td>
   <td>Calendrier indien</td>
  </tr>
  <tr>
   <td><code>islamic</code></td>
   <td>Calendrier islamique</td>
  </tr>
  <tr>
   <td><code>islamic-umalqura</code></td>
   <td>Calendrier islamique, Umm al-Qura</td>
  </tr>
  <tr>
   <td><code>islamic-tbla</code></td>
   <td>Calendrier islamique tabulaire (années intercalaires [2,5,7,10,13,16,18,21,24,26,29] - origine des temps astronomique)</td>
  </tr>
  <tr>
   <td><code>islamic-civil</code></td>
   <td>Calendrier islamique tabulaire (années intercalaires [2,5,7,10,13,16,18,21,24,26,29] - origine des temps civile)</td>
  </tr>
  <tr>
   <td><code>islamic-rgsa</code></td>
   <td>Calendrier islamique vu de l'Arabie saoudite</td>
  </tr>
  <tr>
   <td><code>iso8601</code></td>
   <td>Calendrier ISO (calendrier grégorien utilisant la numérotation des semaines ISO 8601)</td>
  </tr>
  <tr>
   <td><code>japanese</code></td>
   <td>Calendrier japonais impérial</td>
  </tr>
  <tr>
   <td><code>persian</code></td>
   <td>Calendrier perse</td>
  </tr>
  <tr>
   <td><code>roc</code></td>
   <td>Calendrier de la République de Chine</td>
  </tr>
  <tr>
   <td>
    <div class="warning"><p><strong>Attention :</strong> La clé  <code>islamicc</code> est désormais dépréciée et il faut utiliser <code>islamic-civil</code> à la place.</p></div>

    <p><code>islamicc</code></p>
   </td>
   <td>Calendrier arabe civil (algorithmique)</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<h3 id="Indiquer_le_calendrier_via_la_chaîne_de_définition_de_la_locale">Indiquer le calendrier via la chaîne de définition de la locale</h3>

<p>Les calendriers font partie des « clés d'extension ». Ces clés permettent d'ajouter des informations supplémentaires aux locales et sont ajoutées via l'extension <code>-u</code>. Ainsi, on peut indiquer le calendrier utilisé via la chaîne de locale passée comme argument au constructeur {{jsxref("Locale", "Intl.Locale")}}. Pour ce faire, on ajoutera d'abord <code>-u</code> à la chaîne « courte » de la locale puis <code>-ca</code> afin d'indiquer qu'on précise le calendrier et enfin la chaîne représentant la clé du calendrier.</p>

<pre class="brush: js">let frBuddhist = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(frBuddhist.calendar); // affiche "buddhist" dans la console</pre>

<h3 id="Spécifier_un_calendrier_grâce_à_un_objet_de_configuration">Spécifier un calendrier grâce à un objet de configuration</h3>

<p>Le constructeur {{jsxref("Locale", "Intl.Locale")}} peut utiliser un argument optionnel qui est un objet permettant de configurer la locale via différentes extensions dont les calendriers. En utilisant la propriété <code>calendar</code> de cet objet, on définit le calendrier qui sera utilisé :</p>

<pre class="brush: js">let frBuddhist = new Intl.Locale("fr-FR", {calendar: "buddhist"});
console.log(frBuddhist.calendar); // affiche "buddhist" dans la console
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
   <td><a href="https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.calendar">Proposition pour <code>Intl.Locale.prototype.calendar</code></a></td>
   <td>Proposition de niveau 3</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("javascript.builtins.Intl.Locale.calendar")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Locale", "Intl.Locale")}}</li>
 <li><a href="https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier">Identifiants Unicode pour les calendriers</a></li>
</ul>
