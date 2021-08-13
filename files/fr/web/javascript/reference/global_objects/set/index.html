---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set
original_slug: Web/JavaScript/Reference/Objets_globaux/Set
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>Set</code></strong> (Ensemble en français) permet de stocker des valeurs <em>uniques</em>, de n'importe quel type, que ce soit des valeurs d'un {{Glossary("Primitive", "type primitif")}} ou des objets.</p>

<div>{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"> new Set([itérable]);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>itérable</code></dt>
 <dd>Paramètre optionnel. Si un objet <a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">itérable </a>est donné comme argument, l'ensemble de ses éléments sera ajouté au nouvel objet Set. Si {{jsxref("null")}} est fourni comme argument ou qu'aucun argument n'est fourni, il sera traité comme {{jsxref("undefined")}}.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet <code>Set</code>.</p>

<h2 id="Description">Description</h2>

<p>Les objets <code>Set</code> sont des ensembles de valeurs. Il est possible d'itérer sur les éléments contenus dans l'objet <code>Set</code> dans leur ordre d'insertion. <strong>Une valeur donnée ne peut apparaître qu'une seule fois par <code>Set</code>.</strong></p>

<h3 id="Égalité_des_valeurs">Égalité des valeurs</h3>

<p>Chaque valeur d'un <code>Set</code> doit être unique, il faut donc tester l'égalité des valeurs contenues. Cette égalité n'est pas la même que celle de l'opérateur ===. Notamment, pour les objets <code>Set</code>, <code>+0</code> (qui, selon l'égalité stricte, est égal à <code>-0</code>) et <code>-0</code> sont des valeurs différentes. Cela a toutefois été changé avec la dernière version d'ECMAScript 2015 (ES6). Voir le tableau de compatibilité ci-après quant à la prise en charge de l'égalité des clés pour <code>0</code> et <code>-0</code>.</p>

<p>{{jsxref("NaN")}} and {{jsxref("undefined")}} peuvent être enregistrés dans un objet <code>Set</code>. <code>NaN</code> est considéré comme <code>NaN</code> (bien que <code>NaN !== NaN</code>).</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>Set.length</code></dt>
 <dd>La valeur de la propriété <code>length</code> est 0.
 <div class="note"><p><strong>Note :</strong> Pour compter le nombre d'éléments d'un objet <code>Set</code>, on utilisera {{jsxref("Set.prototype.size")}}.</p></div>
 </dd>
 <dt>{{jsxref("Set.@@species", "get Set[@@species]")}}</dt>
 <dd>Le constructeur utilisé pour créer des objets dérivés.</dd>
 <dt>{{jsxref("Set.prototype")}}</dt>
 <dd>Représente le prototype du constructeur <code>Set</code>. Cela permet d'ajouter des propriétés à tous les objets <code>Set</code>.</dd>
</dl>

<h2 id="Instances_de_Set">Instances de <code>Set</code></h2>

<p>Toutes les instances de <code>Set</code> héritent de {{jsxref("Set.prototype")}}.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Set/prototype','Propriétés')}}</p>

<h3 id="Méthodes">Méthodes</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Set/prototype','Méthodes')}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_l'objet_Set">Utiliser l'objet <code>Set</code></h3>

<pre class="brush: js">var monSet = new Set();

monSet.add(1);         // { 1 }
monSet.add(5);         // { 1, 5 }
monSet.add("du texte");// { 1, 5, "du texte" }

monSet.has(1); // true
monSet.has(3); // false, 3 n'a pas été ajouté à l'ensemble
monSet.has(5);              // true
monSet.has(Math.sqrt(25));  // true
monSet.has("Du Texte".toLowerCase()); // true

monSet.size; // 3

monSet.delete(5); // retire 5 du set
monSet.has(5);    // false, 5 a été retiré de l'ensemble

monSet.size; // 2, on a retiré une valeur de l'ensemble
console.log(monSet); // Set [ 1, "du texte" ]
</pre>

<h3 id="Itérer_sur_des_ensembles_(Set)">Itérer sur des ensembles (<code>Set</code>)</h3>

<pre class="brush: js">// On itère sur les différents éléments de l'ensemble
// ici on affiche : 1, "du texte"
for (let item of monSet) console.log(item);

// ici on affiche les clés de l'ensemble : 1, "du texte"
for (let item of monSet.keys()) console.log(item);

// ici on affiche les valeurs de l'ensemble : 1, "du texte"
for (let item of monSet.values()) console.log(item);

// ici on affiche les clés de l'ensemble : 1, "du texte"
//(ici, les clés et les valeurs sont les mêmes)
for (let [clé, valeur] of monSet.entries()) console.log(clé);

// Une méthode de conversion avec Array.from
var monTableau = Array.from(monSet);    // [1, "du texte"]

// Cela fonctionnera également dans un document HTML
monSet.add(document.body);
monSet.has(document.querySelector("body")); // true

// convertir un tableau (Array) en ensemble (Set) et vice versa
monSet2 = new Set([1,2,3,4]);
monSet2.size; // 4
[...monSet2]; // [1,2,3,4]

// L'intersection peut être calculée avec
var intersection = new Set([...set1].filter(x =&gt; set2.has(x)));

// La différence pourra être simulée avec
var différence = new Set([...set1].filter(x =&gt; !set2.has(x)));

// On peut itérer sur les entrées d'un ensemble avec forEach
mySet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4</pre>

<h3 id="Implémenter_des_opérations_ensemblistes">Implémenter des opérations ensemblistes</h3>

<pre class="brush: js">function isSuperset(set, subset) {
  for (var elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  var union = new Set(setA);
  for (var elem of setB) {
    union.add(elem);
  }
  return union;
}

function intersection(setA, setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}

function difference (setA, setB) {
  var difference = new Set(setA);
  for (var elem of setB) {
    difference.delete(elem);
  }
  return difference;
}

// Exemples
var setA = new Set([1,2,3,4]),
    setB = new Set([2,3]),
    setC = new Set([3,4,5,6]);

isSuperset(setA, setB);   // =&gt; true
union(setA, setC);        // =&gt; Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // =&gt; Set [3, 4]
difference(setA, setC);   // =&gt; Set [1, 2]
</pre>

<h3 id="Les_relations_avec_les_objets_Array">Les relations avec les objets <code>Array</code></h3>

<pre class="brush: js">var monTableau = ["valeur1", "valeur2", "valeur3"];

// On peut utiliser le constructeur Set pour transformer un Array en Set
var monSet = new Set(monTableau);

monSet.has("valeur1"); // renvoie true

// Et utiliser l'opérateur de décomposition pour transformer un Set en Array.
console.log([...monSet]); // affichera la même chose que monTableau</pre>

<h3 id="Les_relations_avec_les_objets_String">Les relations avec les objets <code>String</code></h3>

<pre>var maChaine = "CouCou";

var monEnsemble = new Set(maChaine);
// Set {"C","o","u" }
monEnsemble.size; // 3
</pre>

<h3 id="Dédoublonner_un_tableau">Dédoublonner un tableau</h3>

<pre class="brush: js">const nombres = [2,3,4,4,2,2,2,4,4,5,5,6,6,7,5,32,3,4,5];
console.log([...new Set(nombres)]);
// affichera [2, 3, 4, 5, 6, 7, 32]</pre>

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
   <td>{{SpecName('ES2015', '#sec-set-objects', 'Set')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-set-objects', 'Set')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Set")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("WeakMap")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
</ul>
