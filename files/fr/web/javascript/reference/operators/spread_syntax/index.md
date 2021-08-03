---
title: Syntaxe de décomposition
slug: Web/JavaScript/Reference/Operators/Spread_syntax
tags:
  - ECMAScript 2015
  - ECMAScript6
  - JavaScript
  - Reference
  - Syntaxe
translation_of: Web/JavaScript/Reference/Operators/Spread_syntax
original_slug: Web/JavaScript/Reference/Opérateurs/Syntaxe_décomposition
---
<div>{{jsSidebar("Operators")}}</div>

<p>La <strong>syntaxe de décomposition</strong> permet d'étendre un itérable (par exemple une expression de tableau ou une chaîne de caractères) en lieu et place de plusieurs arguments (pour les appels de fonctions) ou de plusieurs éléments (pour les littéraux de tableaux) ou de paires clés-valeurs (pour les littéraux d'objets).</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Pour l'utilisation de la décomposition dans les appels de fonction :</p>

<pre class="syntaxbox notranslate">f(...objetIterable);
</pre>

<p>Pour les littéraux de tableaux :</p>

<pre class="syntaxbox notranslate">[...objetIterable, 4, 5, 6]</pre>

<p>Pour les littéraux objets (nouvelle fonctionnalité pour ECMAScript, actuellement en proposition de niveau 4, finalisée) :</p>

<pre class="syntaxbox notranslate">let objClone = { ...obj };</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_la_décomposition_dans_les_appels_de_fonction">Utiliser la décomposition dans les appels de fonction</h3>

<h4 id="Améliorer_la_fonction_apply">Améliorer la fonction <code>apply()</code></h4>

<p>Il arrive souvent qu'on veuille utiliser {{jsxref( "Function.prototype.apply")}} avec un tableau parmi les arguments de la fonction utilisée :</p>

<pre class="brush: js notranslate">function f(x, y, z) { }
var args = [0, 1, 2];
f.apply(null, args);</pre>

<p>avec la décomposition, on peut désormais écrire :</p>

<pre class="brush: js notranslate">function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);</pre>

<p>Tout argument passé à une fonction peut être décomposé grâce à cette syntaxe et cette syntaxe peut être utilisée pour plusieurs arguments.</p>

<pre class="brush: js notranslate">function f(v, w, x, y, z) { }
var args = [0, 1];
f(-1, ...args, 2, ...[3]);</pre>

<h4 id="Utiliser_apply_avec_lopérateur_new">Utiliser <code>apply()</code> avec l'opérateur <code>new</code></h4>

<p>Avec ES5, il n'est pas possible d'utiliser <code>new</code> avec <code>apply</code> (selon ES5 <code>apply</code> effectue un appel <code>[[Call]]</code> et pas un appel <code>[[Construct]]</code>). Avec ES2015, la syntaxe de décomposition permet de le faire naturellement :</p>

<pre class="brush: js notranslate">var champsDate = lireChampsDate(maBaseDeDonnées);
var d = new Date(...champsDate);</pre>

<p>Afin d'utiliser <code>new</code> avec un tableau de paramètres, sans utiliser la décomposition, il faudrait l'employer indirectement grâce à une application partielle :</p>

<pre class="brush: js notranslate">function applyAndNew(constructor, args) {
   function partial () {
      return constructor.apply(this, args);
   };
   if (typeof constructor.prototype === "object") {
      partial.prototype = Object.create(constructor.prototype);
   }
   return partial;
}


function monConstructeur () {
   console.log("arguments.length: " + arguments.length);
   console.log(arguments);
   this.prop1="val1";
   this.prop2="val2";
};

var mesArguments = ["bi", "bop", "bup", null];
var monConstructeurAvecArguments = applyAndNew(monConstructor, mesArguments);

console.log(new monConstructeurAvecArguments);
// (log fourni par monConstructeur):           arguments.length: 4
// (log fourni par monConstructeur):           ["bi", "bop", "bup", null]
// (log fourni par "new monConstructeurAvecArguments"): {prop1: "val1", prop2: "val2"}
</pre>

<h3 id="Utiliser_la_décomposition_dans_les_littéraux_de_tableau">Utiliser la décomposition dans les littéraux de tableau</h3>

<h4 id="Améliorer_les_littéraux_de_tableau">Améliorer les littéraux de tableau</h4>

<p>À l'heure actuelle, sans la décomposition, si on a un tableau et qu'on souhaite créer un nouveau tableau composé du premier, on ne peut pas utiliser un littéral de tableau et il faut utiliser des fonctions comme {{jsxref("Array.prototype.push", "push()")}}, {{jsxref("Array.prototype.splice", "splice()")}}, {{jsxref("Array.prototype.concat", "concat()")}}, etc. Avec la syntaxe de décomposition, cela devient plus succinct :</p>

<pre class="brush: js notranslate">var articulations = ['épaules', 'genoux'];
var corps = ['têtes', ...articulations, 'bras', 'pieds'];
// ["têtes", "épaules", "genoux", "bras", "pieds"]
</pre>

<p>Comme pour les fonctions, la syntaxe peut être utilisé plusieurs fois.</p>

<h4 id="Copier_un_tableau">Copier un tableau</h4>

<pre class="brush: js notranslate">var arr = [1, 2, 3];
var arr2 = [...arr];
arr2.push(4);

console.log(arr2); // [1, 2, 3, 4]
console.log(arr);  // [1, 2, 3] (inchangé)
</pre>

<div class="note">
<p><strong>Note :</strong> Lorsqu'on utilise la décomposition pour copier un tableau, celle-ci ne s'applique qu'au premier niveau de profondeur. Par conséquent, il peut ne pas convenir pour la copie des tableaux multidimensionnels (des tableaux imbriqués dans d'autres tableaux) comme le montre l’exemple suivant (il en va de même avec {{jsxref("Object.assign()")}} et la décomposition).</p>
</div>

<pre class="brush: js notranslate">var a = [[1], [2], [3]];
var b = [...a]; // b vaut [[1], [2], [3]]

b.shift().shift(); // *a* vaut désormais [[], [2], [3]];
</pre>

<h4 id="Une_meilleure_façon_de_concaténer_des_tableaux">Une meilleure façon de concaténer des tableaux</h4>

<p>{{jsxref("Array.prototype.concat", "concat")}} est souvent utilisé afin de concaténer un tableau à la suite d'une autre. Avec ES5, on aurait le code suivant :</p>

<pre class="brush: js notranslate">var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// On ajoute les éléments de arr2 après ceux de arr1
var nouveauTableau = arr1.concat(arr2);</pre>

<p>Avec ES2015 et la décomposition, on peut écrire :</p>

<pre class="brush: js notranslate">var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2]; // arr1 vaut [0, 1, 2, 3, 4, 5]
</pre>

<p>{{jsxref("Array.prototype.unshift", "unshift")}} est souvent utilisé afin d'insérer des valeurs d'un tableau au début d'un autre tableau. Avec ES5, on peut écrire :</p>

<pre class="brush: js notranslate">var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// On ajoute tous les éléments
// de arr2 au début de arr1
Array.prototype.unshift.apply(arr1, arr2) // arr1 vaut [3, 4, 5, 0, 1, 2]</pre>

<p>Avec ES2015 et la décomposition, on peut écrire :</p>

<pre class="brush: js notranslate">var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];
arr1 = [...arr2, ...arr1];
// arr1 vaut désormais [1, 2, 3, 4, 5, 6]
</pre>

<div class="note">
<p><strong>Note :</strong> Il y a une différence avec <code>unshift()</code> : ici, on crée un nouveau tableau qui est affecté à <code>arr1</code>, le tableau original de <code>arr1</code> n'est pas modifié "sur place".</p>
</div>

<h3 id="Utiliser_la_décomposition_avec_les_littéraux_objet">Utiliser la décomposition avec les littéraux objet</h3>

<p><a href="https://github.com/tc39/proposal-object-rest-spread">La proposition relative à la décomposition des propriétés (actuellement au stade de proposition de niveau 4)</a> vise à ajouter la décomposition des propriétés pour <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet">les littéraux objets</a>. Cela permet de copier les propriétés énumérables directement rattachées à un objet source sur un nouvel objet.</p>

<p>Le clonage superficiel (qui ne rattache pas le prototype) ou la fusion d'objets peut donc être obtenue avec une syntaxe plus concise que celle utilisant {{jsxref("Object.assign()")}}.</p>

<pre class="brush: js notranslate">var profil = { prenom: 'Sarah', profilComplet: false };
var profilMisAJour = { nom: 'Dupont', profilComplet: true };

var clone = { ...profil };
// Object { prenom: 'Sarah', profilComplet: false }

var fusion = { ...profil, ...profilMisAJour };
// Object { prenom: 'Sarah', nom: 'Dupont', profilComplet: true };</pre>

<p>On notera que {{jsxref("Object.assign()")}} déclenche <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/set">les mutateurs</a>, ce qui n'est pas le cas pour la syntaxe de décomposition.</p>

<p>Il n'est pas possible de remplacer ou de recopier le comportement de la fonction {{jsxref("Object.assign()")}} :</p>

<pre class="brush: js notranslate">var profil = { prenom: 'Sarah', profilComplet: false };
var profilMisAJour = { nom: 'Dupont', profilComplet: true };

const fusionner = ( ...objets) =&gt; {...objets};
var nouveauProfil = fusionner(profil, profilMisAJour);
// Object { 0: { prenom: 'Sarah', profilComplet: false }, 1: { nom: 'Dupont', profilComplet: true } }

var autreNouveauProfil = fusion({}, obj1, obj2);
// Object { 0: {}, 1: { prenom: 'Sarah', profilComplet: false }, 2: { nom: 'Dupont', profilComplet: true } }
</pre>

<p>Dans l'exemple précédent, la syntaxe de décomposition ne fonctionne pas comme on pourrait s'y attendre : il décompose les arguments en un tableau grâce au paramètre du reste.</p>

<h3 id="La_décomposition_ne_sapplique_quaux_itérables">La décomposition ne s'applique qu'aux itérables</h3>

<p>Pour rappel : la syntaxe de décomposition ne s'applique qu'<a href="/fr/docs/Web/JavaScript/Guide/iterable">aux objets itérables</a> :</p>

<pre class="brush: js notranslate">var obj = {"clé1" : "valeur1"};
function maFonction(x) {
  console.log(x); // undefined
}
maFonction(...obj);
var args = [...obj];
console.log(args, args.length) //[] 0</pre>

<h3 id="Utiliser_la_décomposition_avec_de_nombreuses_valeurs">Utiliser la décomposition avec de nombreuses valeurs</h3>

<p>Lorsqu'on utilise la décomposition (comme dans les exemples précédents), il faut faire attention à ne pas dépasser le nombre maximal d'arguments du moteur JavaScript. En effet, la décomposition place toutes les valeurs sources dans la pile. Pour plus d'informations, consulter {{jsxref( "Function.prototype.apply")}}.</p>

<h2 id="Les_paramètres_du_reste">Les paramètres du reste</h2>

<p>La syntaxe des paramètres du reste ressemble à la syntaxe de décomposition mais est utilisée afin de destructurer des tableaux et des objets. D'une certaine façon, la syntaxe du reste est l'opposée de la décomposition : la première collecte plusieurs éléments et les condense en un seul élément tandis que la seconde explose les éléments. Pour plus d'informations, voir la page sur <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste">les paramètres du reste</a>.</p>

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
   <td>{{SpecName('ES2015', '#sec-array-initializer')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définie dans plusieurs sections de la spécification : <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer">initialisateur de tableau</a>, <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists">listes d'argument</a>.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2018', '#sec-object-initializer')}}</td>
   <td>{{Spec2('ES2018')}}</td>
   <td>Définie dans la section sur les <a href="http://www.ecma-international.org/ecma-262/9.0/#sec-object-initializer">initialisateurs d'objet.</a></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array-initializer')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object-initializer')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Aucune modification.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.spread")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste">Paramètres du reste</a></li>
 <li><a href="https://tech.mozfr.org/post/2015/06/05/ES6-en-details-%3A-la-decomposition">Le billet de ES6 en détails sur la décomposition</a></li>
 <li>{{jsxref("Function.prototype.apply()")}}</li>
</ul>
