---
title: Intl.ListFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf
tags:
  - Intl
  - JavaScript
  - ListFormat
  - Méthode
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/ListFormat/supportedLocalesOf
---
<div>{{JSRef}}</div>

<p>The <strong><code>Intl.ListFormat.supportedLocalesOf()</code></strong> renvoie, parmi les locales fournies, un tableau contenant les locales supportées pour le formatage des listes et qui ne nécessitent pas d'utiliser la locale par défaut de l'environnement.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre>Intl.ListFormat.supportedLocalesOf(<var>locales</var>[, <var>options</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>locales</code></dt>
 <dd>Une chaîne de caractères qui est une balise de langue BCP 47 ou bien un tableau de telles chaînes. Pour plus d'informations concernant la forme générale de l'argument <code>locales</code>, voir la page {{jsxref("Objets_globaux/Intl", "Intl", "#L'identification_et_le_choix_de_la_locale")}}.</dd>
 <dt><code>options</code>{{optional_inline}}</dt>
 <dd>
 <p>Paramètre facultatif. Un objet qui peut posséder les propriétés suivantes :</p>

 <dl>
  <dt><code>localeMatcher</code></dt>
  <dd>
  <p>L'algorithme utilisé pour la correspondance entre chaînes de caractères. Les valeurs possibles sont <code>"lookup"</code> et <code>"best fit"</code>. La valeur par défaut est <code>"best fit"</code>. Pour plus d'informations, voir la page {{jsxref("Objets_globaux/Intl", "Intl", "#Choix_de_la_locale")}}.</p>
  </dd>
 </dl>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau de chaînes de caractères qui représente un sous-ensemble des balises de langues qui sont prises en charge pour le formatage des listes sans qu'il faille utiliser la locale par défaut de l'environnement d'exécution.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode renvoie un tableau qui est un sous-ensemble des balises de locales fournies avec l'argument <code>locales</code>. Les balises renvoyées sont celles supportées par l'environnement navigateur en termes de formatage des listes et qui ne nécessitent pas d'utiliser la locale par défaut.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_supportedLocalesOf">Utiliser <code>supportedLocalesOf</code></h3>

<p>Si on dispose d'un environnement (un navigateur par exemple) qui supporte le formatage des listes dans les locales indonésienne, allemande mais pas balinaise,  <code>supportedLocalesOf</code> renvoie les balises pour l'indonésien et l'allemand quand bien même le formatage des listes pinyin n'est pas utilisée avec l'indonésien et qu'il n'existe pas une version spécifique de l'allemand pour l'Indonésie. On illustre ici l'algorithme <code>"lookup"</code>. SI on utilisait <code>"best fit"</code> pour trouver les locales correspondantes, on aurait pu avoir une balise supplémentaire pour le balinais en plus car la plupart des balinais comprennent l'indonésien.</p>

<pre class="brush: js">const locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
const options = { localeMatcher: 'lookup' };
console.log(Intl.ListFormat.supportedLocalesOf(locales, options).join(', '));
// → "id-u-co-pinyin, de-ID"
</pre>

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
   <td><a href="https://tc39.github.io/proposal-intl-list-format/#sec-Intl.ListFormat.supportedLocalesOf">Proposition pour <code>Intl.ListFormat.supportedLocalesOf</code></a></td>
   <td>Proposition de niveau 3</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.ListFormat.supportedLocalesOf")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("ListFormat", "Intl.ListFormat")}}</li>
</ul>
