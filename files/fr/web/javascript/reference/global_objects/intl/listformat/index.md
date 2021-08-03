---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
tags:
  - Experimental
  - Internationalisation
  - Intl
  - JavaScript
  - ListFormat
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/ListFormat
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>Intl.ListFormat</code></strong> est un constructeur d'objets qui permettent de formater des listes de façon différente selon la langue utilisée.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-listformat.html")}}</div>



<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">new Intl.ListFormat([<var>locales</var>[, <var>options</var>]])
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>locales</code>{{optional_inline}}</dt>
 <dd>
 <p>Paramètre optionnel. Une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour le format général et l'interprétation de l'argument <code>locales</code>, voir la page {{jsxref("Intl","Intl","#L'identification_et_le_choix_de_la_locale")}}.</p>
 </dd>
 <dt><code>options</code>{{optional_inline}}</dt>
 <dd>
 <p>Paramètre optionnel. Un objet avec certaines ou toutes les propriétés suivantes :</p>

 <dl>
  <dt><code>localeMatcher</code></dt>
  <dd>L'algorithme de correspondance à utiliser pour la locale. Les valeurs possibles sont <code>"lookup"</code> et <code>"best fit"</code> ; le défaut est <code>"best fit"</code>. Pour des informations sur cette option, voir la page {{jsxref("Intl","Intl","##Choix_de_la_locale")}}.</dd>
  <dt><code>type</code></dt>
  <dd>Le format de sortie pour le message. Les valeurs possibles sont :
  <ul>
   <li><code>"conjunction"</code> : qui concaténera les éléments de la liste avec des <em>et</em>. Cela produira par exemple, en anglais : <code>A, B, and C</code></li>
   <li><code>"disjunction"</code> : qui concaténera les éléments de la liste avec des <em>ou</em>. Cela produira par exemple, en anglais : <code>A, B, or C</code></li>
   <li><code>"unit"</code> : qui permet de gérer des listes de valeurs avec des unités. Cela produira par exemple <code>5 livres, 12 onces</code></li>
  </ul>
  </dd>
  <dt><code>style</code></dt>
  <dd>Le niveau de concision/longueur du message obtenu. Les valeurs possibles sont :
  <ul>
   <li><code>"long"</code> : par exemple <code>A, B, and C</code></li>
   <li><code>"narrow"</code> : cette valeur permet uniquement d'utiliser le type <code>unit</code> et affichera un message concis : par exemple <code>A, B, C</code></li>
   <li><code>"short"</code> : par exemple <code>A, B, C</code></li>
  </ul>
  </dd>
 </dl>
 </dd>
</dl>

<h2 id="Description">Description</h2>

<h3 id="Propriétés">Propriétés</h3>

<dl>
 <dt>{{jsxref("ListFormat.prototype", "Intl.ListFormat.prototype")}}</dt>
 <dd>Cette propriété permet d'ajouter des propriétés à l'ensemble des objets de ce type.</dd>
</dl>

<h3 id="Méthodes">Méthodes</h3>

<dl>
 <dt>{{jsxref("ListFormat.supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}</dt>
 <dd>Cette méthode renvoie un tableau des locales prises en charge par le moteur pour le formatage des heures sans qu'il y ait besoin d'utiliser la locale de l'environnement d'exécution.</dd>
</dl>

<h2 id="Instances_de_Intl.ListFormat">Instances de <code>Intl.ListFormat</code></h2>

<p>Toutes les instances de <code>Intl.ListFormat</code> héritent de <code>Intl.ListFormat.prototype</code>.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<dl>
 <dt><code>Intl.ListFormat.prototype.constructor</code></dt>
 <dd>Définit la fonction qui crée le prototype d'un objet.</dd>
</dl>

<h3 id="Méthodes_2">Méthodes</h3>

<dl>
 <dt>{{jsxref("ListFormat.prototype.format","Intl.ListFormat.prototype.format()")}}</dt>
 <dd>Renvoie une chaîne de caractères mise en forme selon la langue voulue et qui représente les éléments de la liste.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_format()">Utiliser <code>format()</code></h3>

<p>Dans l'exemple qui suit, on voit comment créer un formateur de liste pour l'anglais.</p>

<pre class="brush: js">const list = ['Motorcycle', 'Bus', 'Car'];

 console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).format(list));
// &gt; Motorcycle, Bus and Car

 console.log(new Intl.ListFormat('en-GB', { style: 'short', type: 'disjunction' }).format(list));
// &gt; Motorcycle, Bus or Car

 console.log(new Intl.ListFormat('en-GB', { style: 'narrow', type: 'unit' }).format(list));
// &gt; Motorcycle Bus Car
</pre>

<h3 id="Utiliser_formatToParts()">Utiliser <code>formatToParts()</code></h3>

<p>Dans l'exemple qui suit, on voit comment créer un formateur de liste, renvoyant les fragments, pour l'anglais</p>

<pre class="brush: js">const list = ['Motorcycle', 'Bus', 'Car'];
console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).formatToParts(list));

// &gt; [ { "type": "element", "value": "Motorcycle" },
       { "type": "literal", "value": ", " },
       { "type": "element", "value": "Bus" },
       { "type": "literal", "value": ", and " },
       { "type": "element", "value": "Car" } ];
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
   <td><a href="https://tc39.github.io/proposal-intl-list-format/#listformat-objects">Proposition pour <code>Intl.ListFormat</code></a></td>
   <td>Proposition de niveau 3</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.ListFormat")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<div>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl', 'Voir_aussi')}}</div>
