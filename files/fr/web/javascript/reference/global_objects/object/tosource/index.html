---
title: Object.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Object/toSource
tags:
  - JavaScript
  - Méthode
  - Non-standard
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/toSource
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/toSource
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>La méthode <strong><code>toSource()</code></strong> renvoie une chaîne de caractères représentant le code source d'un objet.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.toSource();
<var>obj</var>.toSource();
</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui représente le code source de l'objet.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>toSource()</code> renvoie les valeurs suivantes :</p>

<ul>
 <li>Pour l'objet natif {{jsxref("Object")}}, <code>toSource()</code> renvoie la chaîne suivante, qui indique que le code source n'est pas disponible :

  <pre class="brush: js">function Object() {
    [native code]
}
</pre>
 </li>
 <li>Pour les instances de {{jsxref("Object")}}, <code>toSource()</code> renvoie une chaîne représentant le code source.</li>
</ul>

<p>La méthode <code>toSource()</code> peut être utilisée à des fins de débogage pour analyser le contenu d'un objet.</p>

<h3 id="Surcharger_la_méthode_toSource()">Surcharger la méthode <code>toSource()</code></h3>

<p>La méthode <code>toSource()</code> peut être surchargée pour les différents objets. Par exemple :</p>

<pre class="brush: js">function Personne(nom) {
  this.nom = nom;
}

Personne.prototype.toSource = function Personne_toSource() {
  return 'new Personne(' + uneval(this.nom) + ')';
};

console.log(new Personne('Jean').toSource()); // ---&gt; new Personne("Jean")
</pre>

<h3 id="Les_méthodes_toSource()_natives">Les méthodes <code>toSource()</code> natives</h3>

<p>Chaque constructeur natif JavaScript possède sa propre méthode <code>toSource()</code>. Ces objets sont :</p>

<ul>
 <li>{{jsxref("Array.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Array")}}.</li>
 <li>{{jsxref("Boolean.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Boolean")}}.</li>
 <li>{{jsxref("Date.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Date")}}.</li>
 <li>{{jsxref("Function.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Function")}}.</li>
 <li>{{jsxref("Number.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Number")}}.</li>
 <li>{{jsxref("RegExp.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("RegExp")}}.</li>
 <li>{{jsxref("String.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("String")}}.</li>
 <li>{{jsxref("Symbol.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Symbol")}}.</li>
 <li><code>Math.toSource()</code> — Renvoie "Math".</li>
</ul>

<h3 id="Limites_les_objets_cycliques">Limites : les objets cycliques</h3>

<p>Dans le cas d'objets qui font référence à eux-mêmes (une liste cyclique ou un arbre), <code>toSource()</code> ne représentera pas la référence (Firefox 24). Par exemple :</p>

<pre class="brush: js">var obj1 = {};
var obj2 = { a: obj1 };
obj1.b = obj2;

console.log('Cyclique : ' + (obj1.b.a == obj1));

var objSource = obj1.toSource(); // renvoie "({b:{a:{}}})"

obj1 = eval(objSource);

console.log('Cyclique : ' + (obj1.b.a == obj1));
</pre>

<p>Si on utilise une structure cyclique et qu'on a besoin de <code>toSource()</code>, il faudra surcharger la méthode <code>toSource()</code> pour avoir le comportement souhaité.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_toSource()">Utiliser <code>toSource()</code></h3>

<p>Dans le code qui suit, on définit un objet <code>Chien</code> et on crée <code>monChien</code> qui est une instance de type <code>Chien</code> :</p>

<pre class="brush: js">function Chien(nom, race, couleur, sexe) {
  this.nom = nom;
  this.race = race;
  this.couleur = couleur;
  this.sexe = sexe;
}

monChien = new Chien('Gabby', 'Labrador', 'chocolat', 'femelle');
</pre>

<p>Si on appelle la méthode <code>toSource()</code> sur <code>monChien</code>, on obtiendra le littéral permettant de définir l'objet :</p>

<pre class="brush: js">monChien.toSource();
// returns ({nom:"Gabby", race:"Labrador", couleur:"chocolat", sexe:"femelle"})
</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette méthode ne fait partie d'aucun standard, implémentée avec JavaScript 1.3.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.toSource")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
</ul>
