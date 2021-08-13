---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/construct
original_slug: Web/JavaScript/Reference/Objets_globaux/Reflect/construct
---
<div>{{JSRef}}</div>

<p>La méthode statique <code><strong>Reflect</strong></code><strong><code>.construct()</code></strong> agit comme l'opérateur <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new"><code>new</code></a> sous la forme d'une fonction. Elle est équivalente à <code>new cible(...args)</code> et permet d'indiquer un prototype différent.</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-construct.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Reflect.construct(cible, listeArguments[, newCible])
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>cible</code></dt>
 <dd>La fonction cible à appeler.</dd>
 <dt><code>listeArguments</code></dt>
 <dd>Un objet semblable à un tableau définissant les arguments à passer à <code>cible</code> lors de l'appel. Utiliser {{jsxref("null")}} ou {{jsxref("undefined")}} si aucun argument ne doit être fourni à la fonction.</dd>
 <dt><code>newCible</code> {{optional_inline}}</dt>
 <dd>Le constructeur dont le prototype devrait être utilisé. Voir également l'opérateur <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/new.target">new.target</a></code>. Si <code>newCible</code> n'est pas présent, c'est <code>cible</code> qui sera utilisé.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvelle instance de la cible indiquée, créée en l'appelant comme un constructeur (ou en appelant <code>newCible</code> si elle est fournie) avec les arguments fournis.</p>

<h3 id="Exceptions_levées">Exceptions levées</h3>

<p>Une exception {{jsxref("TypeError")}} si <code>cible</code> ou <code>newCible</code> ne sont pas des constructeurs.</p>

<h2 id="Description">Description</h2>

<p><code>Reflect.construct()</code> permet d'appeler un constructeur avec un nombre d'arguments variable (ce qui peut également être fait avec <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateur_de_décomposition">l'opérateur de décomposition</a> et l'opérateur <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new">new</a></code>).</p>

<pre class="brush: js">var obj = new Toto(...args);
var obj = Reflect.construct(Toto, args);</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Reflect.construct()">Utiliser <code>Reflect.construct()</code></h3>

<pre class="brush: js">var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
</pre>

<h3 id="Utiliser_le_paramètre_newCible">Utiliser le paramètre <code>newCible</code></h3>

<p>Pour plus d'informations sur la création de sous-classes, voir les <a href="/fr/docs/Web/JavaScript/Reference/Classes">classes</a> et l'opérateur <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/new.target">new.target</a></code>.</p>

<pre class="brush: js">function unConstructeur() {}
var résultat = Reflect.construct(Array, [], unConstructeur);

Reflect.getPrototypeOf(résultat); // unConstructeur.prototype
Array.isArray(résultat); // true
</pre>

<h3 id="Une_comparaison_entre_Reflect.construct()_et_Object.create()">Une comparaison entre <code>Reflect.construct()</code> et <code>Object.create()</code></h3>

<p>Avant l'apparition de <code>Reflect</code>, on pouvait construire des objets avec une combinaison donnée de consttructeur et de prototype grâce à {{jsxref("Object.create()")}}.</p>

<pre class="brush: js">function MaClasseA() {
  this.name = 'A';
}

function MaClasseB() {
  this.name = 'B';
}

// Avec cette instruction :
var obj1 = Reflect.construct(MaClasseA, args, MaClasseB);

// on aura le même résultat qu'avec
var obj2 = Object.create(MaClasseB.prototype);
MaClasseA.apply(obj2, args);

console.log(obj1.name); // 'A'
console.log(obj2.name); // 'A'

console.log(obj1 instanceof MaClasseA); // false
console.log(obj2 instanceof MaClasseA); // false

console.log(obj1 instanceof MaClasseB); // true
console.log(obj2 instanceof MaClasseB); // true
</pre>

<p>Toutefois, si les résultats sont identiques, il y a une différence notable. Lorsqu'on utilise <code>Object.create()</code> et <code>Function.prototype.apply()</code>, l'opérateur <code>new.target</code> pointe vers <code>undefined</code> dans la fonction utilisée comme constructeur car le mot-clé <code>new</code> n'est pas utilisé à la création de l'objet.</p>

<p>Mais quand on appelle <code>Reflect.construct()</code>, <code>new.target</code> pointe vers la valeur fournie par <code>newCible</code> si ce dernier est fourni ou vers <code>cible</code> sinon.</p>

<pre class="brush: js">function MaClasseA() {
  console.log('MaClasseA');
  console.log(new.target);
}
function MaClasseB() {
  console.log('MaClasseB');
  console.log(new.target);
}

var obj1 = Reflect.construct(MaClasseA, args);
// Résultat :
//   MaClasseA
//   function MaClasseA { ... }

var obj2 = Reflect.construct(MaClasseA, args, MaClasseB);
// Résultat :
//   MaClasseA
//   function MaClasseB { ... }

var obj3 = Object.create(MaClasseB.prototype);
MaClasseA.apply(obj3, args);
// Résultat :
//     MaClasseA
//     undefined</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-reflect.construct', 'Reflect.construct')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-reflect.construct', 'Reflect.construct')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Reflect.construct")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Reflect")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new"><code>new</code></a></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/new.target">new.target</a></code></li>
</ul>
