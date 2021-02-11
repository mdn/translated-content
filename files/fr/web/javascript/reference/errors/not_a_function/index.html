---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_function
original_slug: Web/JavaScript/Reference/Erreurs/Not_a_function
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Object doesn't support property or method {x} (Edge)
TypeError: "x" is not a function
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Une valeur a été utilisée pour un appel de fonction alors que cette valeur n'est pas une fonction. Autrement dit, un fragment de code attendait une fonction mais a reçu des valeurs d'un autre type.</p>

<p>Il est possible qu'il y ait une coquille dans le nom de la fonction. Peut être que l'objet sur lequel la méthode est invoquée ne possède pas cette fonction (par exemple, les objets <code>Array</code> possèdent une fonction <code>map()</code> mais d'autres objets ne l'ont pas).</p>

<p>Il existe de nombreuses fonctions natives qui fonctionnent à l'aide d'une fonction (<em>callback</em>) passée en argument :</p>

<ul>
 <li>Pour les objets {{jsxref("Array")}} ou {{jsxref("TypedArray")}}, voici les fonctions qui utilisent une fonction en argument :
  <ul>
   <li>{{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}},  {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}</li>
  </ul>
 </li>
 <li>Pour les objets {{jsxref("Map")}} et {{jsxref("Set")}}, voici les méthodes concernées :
  <ul>
   <li>{{jsxref("Map.prototype.forEach()")}} and {{jsxref("Set.prototype.forEach()")}}</li>
  </ul>
 </li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Une_coquille_dans_le_nom_de_la_fonction">Une coquille dans le nom de la fonction</h3>

<p>Dans ce cas, qui arrive bien trop souvent, il y a une faute d'orthographe dans le nom de la fonction utilisée :</p>

<pre class="brush: js example-bad">var x = document.getElementByID("toto");
// TypeError: document.getElementByID is not a function
</pre>

<p>Le nom de la fonction est (dans cet exemple) <code>getElementByI<strong>d</strong></code> (attention à la casse pour les noms en JavaScript) :</p>

<pre class="brush: js example-good">var x = document.getElementById("toto");
</pre>

<h3 id="Appeler_une_fonction_sur_le_mauvais_objet">Appeler une fonction sur le mauvais objet</h3>

<p>Certaines méthodes ne fonctionnent que pour certains types d'objet et utilisent une fonction en argument. Ainsi, dans cet exemple, on utilise {{jsxref("Array.prototype.map()")}} qui ne fonctionne que sur les objets {{jsxref("Array")}}.</p>

<pre class="brush: js example-bad">var obj = { a: 13, b: 37, c: 42 };

obj.map(function(num) {
  return num * 2;
});

// TypeError: obj.map is not a function</pre>

<p>Il faudra utiliser un tableau à la place :</p>

<pre class="brush: js example-good">var nombres = [1, 4, 9];

nombres.map(function(num) {
  return num * 2;
});

// Array [ 2, 8, 18 ]
</pre>

<h3 id="Utiliser_le_même_nom_pour_une_méthode_et_une_propriété">Utiliser le même nom pour une méthode et une propriété</h3>

<p>Lorsqu'on écrit une classe, on peut malheureusement utiliser le même nom pour une propriété et une méthode. Lorsqu'on appellera la fonction, celle-ci aura été remplacée par la propriété et cela déclenchera une erreur :</p>

<pre class="brush: js example-bad">var Chien = function () {
 this.age = 11;
 this.couleur = "noir";
 this.nom = "Ralph";
 return this;
}

Chien.prototype.nom = function(nom) {
 this.nom = nom;
 return this;
}


var monNouveauChien = new Chien();
monNouveauChien.nom("Cassidy"); // Uncaught TypeError: monNouveauChien.nom is not a function
</pre>

<p>Pour résoudre le problème, on utilisera deux noms distincts pour la propriété et la méthode :</p>

<pre class="brush: js example-good">var Chien = function () {
 this.age = 11;
 this.couleur = "noir";
 this.nomChien = "Ralph";
 return this;
}

Chien.prototype.nom = function(nom) {
 this.nomChien = nom;
 return this;
}


var monNouveauChien = new Chien();
monNouveauChien.nom("Cassidy"); // Chien { age: 11, couleur: "noir", nomChien: "Cassidy" }
</pre>

<h3 id="Utiliser_des_parenthèses_pour_la_multiplication">Utiliser des parenthèses pour la multiplication</h3>

<p>En notation mathématique, on peut écrire 2(3+5) pour indiquer qu'on souhaite multiplier 2 par 3 + 5. Toutefois, une telle écriture n'est pas valide en JavaScript car il faut préciser l'opérateur de multiplication :</p>

<pre class="js example-bad">var seize = 2(3 + 5);
console.log('2 x (3 + 5) vaut ' + String(seize));
// Uncaught TypeError: 2 is not a function</pre>

<p>Pour corriger, il suffit d'ajouter l'opérateur <code>*</code> :</p>

<pre class="js example-good">var seize = 2 * (3 + 5);
console.log('2 x (3 + 5) is ' + String(seize));
//2 x (3 + 5) is 16
</pre>

<h3 id="Importer_un_module_exporté_correctement">Importer un module exporté correctement</h3>

<p>Assurez-vous d'importer le module correctement. Si par exemple, on dispose d'une bibliothèque <code>helpers.js</code> avec le code suivant :</p>

<pre class="brush: js">let helpers = function () { };
helpers.log = function(msg) {
  console.log(msg);
};

export default helpers;</pre>

<p>Pour l'importer côté application, on écrira :</p>

<pre class="brush: js">import helpers from './helpers'</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Fonctions">Les fonctions</a></li>
</ul>
