---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/forEach
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/forEach
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>forEach()</strong></code> permet d'exécuter une fonction donnée sur chaque élément du tableau.</p>

<div>{{EmbedInteractiveExample("pages/js/array-foreach.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.forEach(<var>callback</var>);
arr.forEach(callback, <var>thisArg</var>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>La fonction à utiliser pour chaque élément du tableau. Elle prend en compte trois arguments :
 <dl>
  <dt><code>valeurCourante</code></dt>
  <dd>La valeur de l'élément du tableau en cours de traitement.</dd>
  <dt><code>index</code> {{optional_inline}}</dt>
  <dd>L'indice de l'élément du tableau en cours de traitement.</dd>
  <dt><code>array</code> {{optional_inline}}</dt>
  <dd>Le tableau sur lequel la méthode <code>forEach</code> est appliquée.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code> {{optional_inline}}</dt>
 <dd>Paramètre optionnel. La valeur à utiliser pour <code>this</code> lors de l'exécution de <code>callback</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>{{jsxref("undefined")}}.</p>

<h2 id="Description">Description</h2>

<p><code>forEach()</code> exécute la fonction <code><em>callback</em></code> une fois pour chaque élément du tableau, dans l'ordre croissant des indices. Cette fonction n'est pas appelée pour les indices pour lesquels les éléments ont été supprimés ou qui n'ont pas été définis. Attention, en revanche elle est appelée pour les éléments qui sont présents et qui valent {{jsxref("undefined")}}.</p>

<p><code>callback</code> est appelé avec trois arguments :</p>

<ul>
 <li>la valeur de l'élément</li>
 <li>l'index de l'élément</li>
 <li>le tableau utilisé</li>
</ul>

<p>Si un paramètre <code>thisArg</code> est fourni à la méthode <code>forEach</code>, il sera utilisé en tant que valeur <code>this</code> pour chaque appel de <code>callback</code>. Sinon, ce sera la valeur <code>undefined</code> qui sera utilisée comme valeur <code>this</code>. La valeur <code>this</code> finalement prise en compte par la fonction <code>callback</code> est déterminée selon <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this">les règles usuelles pour déterminer la valeur de <code>this</code> utilisée dans une fonction</a>.</p>

<p>L'ensemble des éléments traités par <code>forEach</code> est défini avant le premier appel à <code>callback</code>. Les éléments ajoutés au tableau après que l'appel à <code>forEach</code> ait commencé ne seront pas visités par <code>callback</code>. Si des éléments déjà présents dans le tableau sont modifiés, leur valeur telle qu'elle est passée au <code>callback</code> sera la valeur au moment du passage du <code>forEach</code> ; les éléments supprimés ne sont pas parcourus. Voir <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach#Attention_aux_modifications_en_cours">l'exemple ci-après</a>.</p>

<p><code>forEach()</code> exécute la fonction <code>callback</code> une fois pour chaque élément. À la différence de {{jsxref("Array.prototype.map()", "map()")}} ou de {{jsxref("Array.prototype.reduce()", "reduce()")}} il renvoie toujours la valeur {{jsxref("undefined")}} et ne peut donc pas être « enchaîné ». Généralement, l'effet voulu est de déclencher des effets de bord en fin de chaîne.</p>

<p><code>forEach()</code> ne modifie pas le tableau sur lequel elle est appelée, en revanche, la fonction de retour (<em>callback</em>) utilisée peut modifier le tableau.</p>

<div class="note"><p><strong>Note :</strong> Il n'existe aucun moyen d'arrêter une boucle <code>forEach</code> en dehors de lever une exception. Si vous avez besoin d'arrêter la boucle, étudiez plutôt :</p>

<ul>
 <li>Une boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for">for</a></code> classique</li>
 <li>Une boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...in">for...in</a></code> ou <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for...of</a></code></li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("Array.prototype.findIndex()")}}</li>
</ul>

<p>Les autres méthodes associées aux tableaux ({{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.find()")}}, {{jsxref("Array.prototype.findIndex()")}}) utilisent une fonction de texte qui permet de renvoyer une valeur équivalente à <code>true</code> si besoin de poursuivre la boucle.</p>
</div>

<p><code>forEach</code> exécute la fonction <code>callback</code> une fois pour chaque élément ; contrairement à <code>every</code> et <code><code>some</code></code>, cette méthode renvoie toujours <code>undefined</code> et ne peut pas être enchaînée.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Équivalence_entre_une_boucle_for_et_une_boucle_forEach">Équivalence entre une boucle <code>for</code> et une boucle <code>forEach</code></h3>

<p>Voici un fragment de code simple qui utilise une boucle <code>for</code></p>

<pre class="brush: js">var items = ["item1", "item2", "item3"];
var copie = [];

for (var i = 0; i &lt; items.length; i++) {
  copie.push(items[i]);
}
</pre>

<p>Et voici un fragment de code équivalent qui utilise <code>forEach</code> :</p>

<pre class="brush: js">var items = ["item1", "item2", "item3"]
var copie = [];

items.forEach(function(item){
  copie.push(item);
});</pre>

<h3 id="Afficher_le_contenu_d'un_tableau">Afficher le contenu d'un tableau</h3>

<div class="note">
<p><strong>Note :</strong> Pour afficher le contenu d'un tableau, on pourra utiliser <code><a href="/fr/docs/Web/API/Console/table">console.table()</a></code> qui met en forme les éléments du tableau. L'exemple suivant est laissé à titre d'illustration pour <code>forEach()</code>.</p>
</div>

<p>Le code suivant affiche une ligne pour chaque élément du tableau :</p>

<pre class="brush:js">function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

</pre>

<h3 id="Utiliser_l'argument_pour_this">Utiliser l'argument pour <code>this</code></h3>

<p>Dans l'exemple qui suit, on met à jour les propriétés d'un objet à partir des éléments d'un tableau :</p>

<pre class="brush: js">function Compteur() {
  this.somme = 0;
  this.compte = 0;
}

Compteur.prototype.ajouter = function(tableau) {
  tableau.forEach(function(element) {
    this.somme += element;
    ++this.compte;
  },  this);
  //  ^---- On a ajouté l'argument this ici.
};

var obj = new Compteur();
obj.ajouter([2, 5, 9]);
console.log(obj.compte); // 3
console.log(obj.somme);  // 16
</pre>

<div class="note">
<p><strong>Note :</strong> Le paramètre pour <code>this</code> est passé à la méthode <code>forEach()</code>, à chaque appel du callback, celui-ci sera utilisé comme valeur pour <code>this</code>.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Si la fonction passée en argument est <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées">une fonction fléchée</a>, il n'est pas nécessaire d'ajouter le paramètre <code>this</code> car les fonctions fléchées utilisent le <code><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this">this</a></code> fourni par le contexte lexical.</p>
</div>

<h3 id="Stopper_une_boucle">Stopper une boucle</h3>

<p>Le code qui suit utilise la méthode {{jsxref("Array.prototype.every")}} pour afficher le contenu d'un tableau et s'arrêter lorsqu'il atteint une valeur supérieure à <code>SEUIL_MAX</code>.</p>

<pre class="brush: js">var SEUIL_MAX = 12;
var v = [5, 2, 16, 4, 3, 18, 20];
var res;

res = v.every(function(element, index, array) {
  console.log('élément :', element);
  if (element &gt;= SEUIL_MAX) {
    return false;
  }

  return true;
});
console.log('res:', res);
// affiche :
// élément : 5
// élément : 2
// élément : 16
// res : false

res = v.some(function(element, index, array) {
  console.log('élément:', element);
  if (element &gt;= SEUIL_MAX) {
    return true;
  }

  return false;
});
console.log('res:', res);
// affiche :
// élément : 5
// élément : 2
// élément : 16
// res: true</pre>

<h3 id="Une_fonction_de_copie_d'objet">Une fonction de copie d'objet</h3>

<p>Le code qui suit permet de créer une copie d'un objet donné. Il existe différentes façons pour créer une copie d'un objet. L'exemple suivant illustre une de ces façons afin d'expliquer le fonctionnement d'<code>Array.prototype.forEach</code> et d'utiliser les fonctions ECMAScript 5 <code>Object.*</code>.</p>

<pre class="brush: js">function copie(obj) {
  var copie = Object.create(Object.getPrototypeOf(obj));
  var propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(function(nom) {
    var desc = Object.getOwnPropertyDescriptor(obj, nom);
    Object.defineProperty(copie, nom, desc);
  });

  return copie;
}

var obj1 = { a: 1, b: 2 };
var obj2 = copie(obj1); // obj2 ressemble désormais à obj1</pre>

<h3 id="Attention_aux_modifications_en_cours">Attention aux modifications en cours</h3>

<p>Dans l'exemple qui suit, on utilise un tableau qui contient quatre élément : <code>"un"</code>, <code>"deux"</code>, <code>"trois"</code>, <code>"quatre"</code>. Lorsque le parcours du tableau arrive à l'élément <code>"deux"</code>, on décale le tableau d'un cran vers les premiers éléments. Aussi, l'élément <code>"quatre"</code> est décalé à la place de <code>"trois"</code> et <code>"trois"</code> est déplacé à la place de <code>"deux"</code>. Pour cette raison, lorsque <code>forEach</code> poursuit son parcours, elle saute la valeur "trois". Autrement dit, <code>forEach</code> n'utilise pas une copie du tableau au moment où elle est appelée, elle manipule le tableau directement. On voit aussi dans cet exemple que les éléments non initialisés ne sont pas traités par la fonction de rappel.</p>

<pre class="brush: js">var mots = ["un", "deux", "trois",, "quatre"];
mots.forEach(function(mot) {
  console.log(mot);
  if (mot === "deux") {
    mots.shift();
  }
});
// un
// deux
// quatre</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.18', 'Array.prototype.forEach')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.foreach', 'Array.prototype.forEach')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.foreach', 'Array.prototype.forEach')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.forEach")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.filter()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("Array.prototype.findIndex()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
 <li>{{jsxref("Map.prototype.forEach()")}}</li>
 <li>{{jsxref("Set.prototype.forEach()")}}</li>
</ul>
