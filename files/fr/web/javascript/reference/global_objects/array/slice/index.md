---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/slice
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/slice
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>slice()</code></strong> renvoie un objet tableau, contenant une copie superficielle (<em>shallow copy</em>) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.</p>

<div>{{EmbedInteractiveExample("pages/js/array-slice.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.slice()
<var>arr</var>.slice(<em>début</em>)
<var>arr</var>.slice(<em>début</em>, <em>fin</em>)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>début</code> {{optional_inline}}</dt>
 <dd>Indice (à partir de zéro) depuis lequel commencer l'extraction. S'il s'agit d'un indice négatif, <code>début</code> indique un décalage depuis la fin de la séquence. Par exemple, <code>slice(-2)</code> extrait les avant-dernier et dernier éléments dans la séquence.<br>
 <br>
 Si <code>début</code> est absent, <code>slice()</code> commencera depuis 0. Si <code>début</code> est supérieur à la taille du tableau, c'est un tableau vide qui sera renvoyé.</dd>
 <dt><code>fin</code> {{optional_inline}}</dt>
 <dd>Indice (à partir de zéro) auquel arrêter l'extraction. <code>slice()</code> extrait jusqu'à cet indice, mais pas l'élément situé en <code>fin</code> lui-même. <code>slice(1,4)</code> extrait du deuxième au quatrième élément (les éléments d'indices 1, 2 et 3). S'il s'agit d'un indice négatif, <code>fin</code> indique un décalage depuis la fin de la séquence. <code>slice(2,-1)</code> extrait du troisième à l'avant-dernier élément dans la séquence. Si <code>fin</code> n'est pas fourni, <code>slice()</code> extraira jusqu'à la fin de la séquence (<code>arr.length</code>). Si <code>fin</code> est supérieur à la longueur de la séquence, <code>slice()</code> fera une extraction jusqu'à la fin de la séquence.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouveau tableau contenant les éléments extraits.</p>

<h2 id="Description">Description</h2>

<p><code>slice()</code> ne modifie pas le tableau original, mais renvoie une nouvelle copie du tableau (<em>shallow copy</em> — copie superficielle) dont les éléments sont des copies des éléments extraits du tableau original. Les éléments du tableau original sont copiés dans le nouveau tableau de la manière suivante :</p>

<ul>
 <li>Pour les références à des objets (et non les objets eux-mêmes), <code>slice()</code> copie ces références dans le nouveau tableau. Tant l'original que le nouveau tableau font référence au même objet. Si un objet référencé est modifié, ces changements sont visibles tant pour le nouveau que pour l'ancien tableau.</li>
 <li>Pour les chaines de caractères, les nombres et les booléens, <code>slice()</code> copie ces chaines de caractères, ces nombres et ces valeurs booléennes dans le nouveau tableau. Les modifications sur ces chaînes, nombres ou booléens dans l'un des tableaux n'affectent pas l'autre tableau (NB : lorsque l'on parle de chaine de caractères, de nombre ou de booléen ici, on parle exclusivement de leur <em>type primitif</em>, pas des <em>objets</em> {{jsxref("String")}}, {{jsxref("Number")}} ou {{jsxref("Boolean")}} — voir par exemple <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/String#Les_différences_entre_les_objets_String_et_le_type_primitif_pour_les_chaînes_de_caractères">différences entre objet String et type primitif pour les chaines de caractères</a>).</li>
</ul>

<p>Si un nouvel élément est ajouté à l'un ou l'autre tableau, le second n'est pas affecté.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Renvoyer_un_fragment_d'un_tableau_existant">Renvoyer un fragment d'un tableau existant</h3>

<pre class="brush: js">var fruits = ["Banane", "Orange", "Citron", "Pomme", "Mangue"];
var agrumes = fruits.slice(1, 3);

// fruits vaut --&gt; ["Banane", "Orange", "Citron", "Pomme", "Mangue"]
// agrumes vaut --&gt; ["Orange", "Citron"]</pre>

<h3 id="Utiliser_slice()">Utiliser <code>slice()</code></h3>

<p>Dans l'exemple qui suit, <code>slice()</code> crée un nouveau tableau, <code>nouvelleVoiture</code>, à partir de <code>maVoiture</code>. Chacun d'entre eux contient une référence à l'objet <code>maHonda</code>. Lorsque la couleur de <code>maHonda</code> est changée en bordeaux, les deux tableaux reflètent ce changement.</p>

<pre class="brush: js">// Avec slice, crée nouvelleVoiture depuis maVoiture
var maHonda = { couleur : "rouge", roues : 4, moteur : { cylindres : 4, capacité : 2.2 } };
var maVoiture = [maHonda, 2, "excellente condition", "achetée en 1997"];
var nouvelleVoiture = maVoiture.slice(0, 2);

// Affiche les valeurs de maVoiture, nouvelleVoiture et la couleur de maHonda
// référencées depuis chacun des tableaux.
console.log("maVoiture = " + JSON.stringify(maVoiture));
console.log("nouvelleVoiture = " + JSON.stringify(nouvelleVoiture));
console.log("maVoiture[0].couleur = " + maVoiture[0].couleur);
console.log("nouvelleVoiture[0].couleur = " + nouvelleVoiture[0].couleur);

// Change la couleur de maHonda.
maHonda.couleur = "bordeaux";
console.log("La nouvelle couleur de ma Honda est " + maHonda.couleur);

// Affiche la couleur de maHonda référencées depuis les deux tableaux.
console.log("maVoiture[0].couleur = " + maVoiture[0].couleur);
console.log("nouvelleVoiture[0].couleur = " + nouvelleVoiture[0].couleur);
</pre>

<p>Ce script affichera :</p>

<pre class="brush: js">maVoiture = [{couleur:"rouge", roues:4, moteur:{cylindres:4, capacité:2.2}}, 2,
             "excellente condition", "achetée en 1997"]
nouvelleVoiture = [{couleur:"rouge", roues:4, moteur:{cylindres:4, capacité:2.2}}, 2]
maVoiture[0].couleur = rouge
nouvelleVoiture[0].couleur = rouge
La nouvelle couleur de ma Honda est bordeaux
maVoiture[0].couleur = bordeaux
nouvelleVoiture[0].couleur = bordeaux
</pre>

<h2 id="Utilisation_avec_les_objets_similaires_aux_tableaux">Utilisation avec les objets similaires aux tableaux</h2>

<p>La méthode <code>slice()</code> peut aussi être appelée pour convertir des objets/collections similaires à des tableaux, en un nouveau tableau. L'objet {{jsxref("Fonctions/arguments", "arguments")}} d'une fonction est un exemple d'objet similaire à un tableau.</p>

<pre class="brush: js">function list() {
  return Array.prototype.slice.call(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
</pre>

<p>Il est possible de lier avec la fonction .<code>call</code> de {{jsxref("Function.prototype")}} et on peut effectuer la réduction avec <code>[].slice.call(arguments)</code> plutôt qu'avec <code>Array.prototype.slice.call</code>. Voici comment on peut simplifier avec {{jsxref("Function.prototype.bind", "bind")}} :</p>

<pre class="brush: js">var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.2.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.10', 'Array.prototype.slice')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.slice', 'Array.prototype.slice')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.slice', 'Array.prototype.slice')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.slice")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Function.prototype.call()")}}</li>
 <li>{{jsxref("Function.prototype.bind()")}}</li>
 <li>{{jsxref("Array.prototype.splice()")}}</li>
</ul>
