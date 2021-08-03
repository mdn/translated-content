---
title: Intl.RelativeTimeFormat.supportedLocalesOf()
slug: >-
  Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/supportedLocalesOf
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - Reference
translation_of: >-
  Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/supportedLocalesOf
original_slug: >-
  Web/JavaScript/Reference/Objets_globaux/Intl/RelativeTimeFormat/supportedLocalesOf
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>Intl.RelativeTimeFormat.supportedLocalesOf()</code></strong> renvoie un tableau contenant l'ensemble des locales, parmi celles fournies en argument, qui sont prises en charge pour le formatage internationalisé du temps relatif, sans avoir à utiliser la locale par défaut de l'environnement d'exécution.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-supportedlocalesof.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre>Intl.RelativeTimeFormat.supportedLocalesOf(<var>locales</var>[, <var>options</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>locales</code></dt>
 <dd>Un chaîne de caractères au format d'une balise de langue BCP 47 ou bien un tableau de telles chaînes. Pour plus d'informations sur le format de l'argument <code>locales</code>, voir la page {{jsxref("Intl", "Intl", "#L'identification_et_le_choix_de_la_locale")}}.</dd>
 <dt><code>options</code></dt>
 <dd>
 <p>Paramètre optionnel, un objet pouvant avoir la propriété suivante :</p>

 <dl>
  <dt><code>localeMatcher</code></dt>
  <dd>L'algorithme de correspondance entre locales à utiliser. Les valeurs possibles sont "lookup" et "best fit". Pour plus d'informations sur ce sujet, voir la page {{jsxref("Intl", "Intl", "#Choix_de_la_locale")}}.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau de chaînes de caractères qui représente un sous-ensemble des balises de langue qui sont prises en charge pour la mise en forme du temps relatif sans qu'il soit nécessaire d'utiliser la locale par défaut de l'environnement d'exécution.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode renvoie un tableau qui est un sous-ensemble de <code>locales</code>. Les balises de langues renvoyées sont celles supportées par l'environnement pour le formatage des temps relatifs. Ces balises sont déterminées en fonction de l'algorithme de correspondances de locale et des locales utilisées. Le tableau résultant fournit les locales qui permettent de ne pas avoir à utiliser la locale par défaut.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Utiliser_supportedLocalesOf">Utiliser <code>supportedLocalesOf()</code></h3>

<p>Si on dispose d'un environnement qui supporte les locales indonésienne et allemande mais pas balinaise pour le formatage des temps relatifs, <code>supportedLocalesOf</code> renverra les balises BCP 47 pour l'indonésien et l'allemand (bien que la collation pinyin ne soit pas pertinente pour les dates ni pour l'indonésien et qu'il soit peu probable qu'une variante indonésienne existe pour l'allemand). Pour l'exemple, on l'utilise l'algorithme <code>"lookup"</code>. Si on utilisait <code>"best fit"</code>, on pourrait considérer que l'indonésien est adéquat pour la locale balinaise (sachant que la plupart des balinais comprend l'indonésien) et donc également renvoyer la balise balinaise.</p>

<pre>var locales = ['ban', 'id-u-co-pinyin', 'de-ID'];var options = { localeMatcher: 'lookup' };console.log(Intl.RelativeTimeFormat.supportedLocalesOf(locales, options).join(', '));// → "id-u-co-pinyin, de-ID"</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="https://tc39.github.io/proposal-intl-relative-time/#sec-Intl.RelativeTimeFormat.supportedLocalesOf">Proposition pour <code>Intl.RelativeTime</code></a></td>
   <td>Proposition de niveau 3</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.RelativeTimeFormat.supportedLocalesOf")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}}</li>
</ul>
