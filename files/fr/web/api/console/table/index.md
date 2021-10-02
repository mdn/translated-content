---
title: Console.table
slug: Web/API/Console/table
tags:
  - API
  - DOM
  - Développement
  - Méthode
  - console
  - débogage
translation_of: Web/API/Console/table
---
<div>{{APIRef("Console API")}}</div>

<p>Affiche des données tabulaires sous la forme d'un tableau.</p>

<p>Cette fonction prend un argument obligatoire <code>data</code>, qui doit être un tableau (Array) ou un objet, et un argument facultatif <code>columns</code>.</p>

<p>Il affiche <code>data</code> sous la forme d'un tableau. Chaque élément dans le tableau fourni (Array) sera affiché comme une ligne dans le tableau. (ou les propriétés énumérables s'il s'agit d'un objet)</p>

<p>La première colonne dans le tableau sera intitulé <code>(index)</code>. Si <code>data</code> est un tableau (Array), alors les valeurs de cette colonne seront les index du tableau (Array). Si <code>data</code> est un objet, alors ses valeurs seront les noms des propriétés.À noter (dans Firefox) :  <code>console.table</code> est limité à l'affichage de 1000 lignes (la première ligne est l'index étiqueté)</p>

<p>{{AvailableInWorkers}}</p>

<h3 id="Collections_de_données_primitives">Collections de données primitives</h3>

<p><code>data</code> peut contenir un tableau ou un objet.</p>

<pre class="brush: js">// un tableau de chaînes de caractères

console.table(["apples", "oranges", "bananas"]);</pre>

<p><img alt="" src="console-table-array.png"></p>

<pre class="brush: js">// un objet dont les propriétés sont des chaînes de caractères

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("John", "Smith");

console.table(me);</pre>

<p><img alt="" src="console-table-simple-object.png"></p>

<h3 id="Collections_de_données_composées">Collections de données composées</h3>

<p>Si les éléments d'un tableau, ou les propriétés d'un objet, sont eux-mêmes des tableaux ou des objets, alors ces éléments ou propriétés sont énumérés dans chaque ligne, un élément par colonne :</p>

<pre class="brush: js">// un tableau de tableaux

var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
console.table(people);</pre>

<p><img alt="Un tableau qui affiche un tableau de tableaux" src="console-table-array-of-array.png"></p>

<pre class="brush: js">// un tableau d'objets

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily]);</pre>

<p>Notez que si le tableau contient des objets, alors les colonnes seront nommées avec les noms des propriétés.</p>

<p><img alt="Un tableau qui affiche un tableau d'objets" src="console-table-array-of-objects.png"></p>

<pre class="brush: js">// un objet contenant des propriétés qui sont des objets

var family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);</pre>

<p><img alt="Un tableau affichant des objets composés d'objets" src="console-table-object-of-objects.png"></p>

<h3 id="Restreindre_les_colonnes_affichées">Restreindre les colonnes affichées</h3>

<p>Par défaut, <code>console.table()</code> liste tous les éléments pour chaque ligne. Vous pouvez utiliser le paramètre facultatif <code>columns</code> pour sélectionner un sous-ensemble de colonnes à afficher :</p>

<pre class="brush: js">// un tableau d'objets, affichant seulement firstName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily], ["firstName"]);</pre>

<p><img alt="Un tableau affichant un tableau d'objets dont la sortie est filtrée" src="console-table-array-of-objects-firstname-only.png"></p>

<h3 id="Ordonner_les_colonnes">Ordonner les colonnes</h3>

<p>Vous pouvez ordonner les colonnes en cliquant sur l'intitulé de la colonne.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">console.table(data [, <em>columns]</em>);
</pre>

<h3 id="Parameters">Paramètres</h3>

<dl>
 <dt><code>data</code></dt>
 <dd>La donnée à afficher. Doit être un tableau ou un objet.</dd>
 <dt><code>columns</code></dt>
 <dd>Un tableau contenant les noms des colonnes à inclure dans la sortie.</dd>
</dl>

<h2 id="Specification">Spécification</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Console API", "#table", "console.table()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<div>{{Compat("api.Console.table")}}</div>
