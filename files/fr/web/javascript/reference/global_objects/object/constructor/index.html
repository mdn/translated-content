---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
tags:
  - JavaScript
  - Object
  - Propriété
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/constructor
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/constructor
---
<div>{{JSRef}}</div>

<p>La propriété <code><strong>constructor</strong></code> renvoie une référence à la fonction {{jsxref("Object")}} qui a créé le prototype de l'instance. La valeur de cette propriété est une référence à la fonction elle-même, ce n'est pas une chaîne de caractères représentant le nom de la fonction. Cette valeur est en lecture seule pour les valeurs de types primitifs comme <code>1</code>, <code>true</code> et <code>"test"</code>.</p>

<h2 id="Description">Description</h2>

<p>Tous les objets héritent d'une propriété <code>constructor</code> de leur prototype (à l'exception de ceux créés avec <code>Object.create(null)</code>). Les objets créés sans constructeur (c'est-à-dire avec des littéraux) auront le constructeur correspondant au type du littéral :</p>

<pre class="brush:js">var o = {};
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var n = new Number(3)
n.constructor === Number; // true</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Afficher_le_constructeur_d'un_objet">Afficher le constructeur d'un objet</h3>

<p>L'exemple ci-dessous crée un constructeur <code>Arbre</code>, et un objet de ce type, <code>monArbre</code>. Le script affiche ensuite la propriété <code>constructor</code> de l'objet <code>monArbre</code> :</p>

<pre class="brush:js">function Arbre(nom) {
   this.nom = nom;
}

var monArbre = new Arbre("Sequoia");
console.log( "monArbre.constructor vaut " + monArbre.constructor );</pre>

<p>Cet exemple produira le résultat suivant :</p>

<pre class="brush:js">monArbre.constructor vaut function Arbre(nom) {
    this.nom = nom;
}</pre>

<h3 id="Modifier_le_constructeur_d'un_objet">Modifier le constructeur d'un objet</h3>

<p>Dans l'exemple suivant, on illustre comment modifier la valeur d'un constructeur pour les objets génériques. Dans l'exemple suivant, seules les valeurs <code>true</code>, <code>1</code> et <code>"test"</code> ne seront pas affectées car leurs constructeurs sont en lecture seule uniquement. Cet exemple montre qu'il ne faut pas se reposer de façon aveugle sur la propriété <code>constructor</code> d'un objet.</p>

<pre class="brush:js">function Type () {}

var types = [
  new Array(),
  [],
  new Boolean(),
  true,             // restera tel quel
  new Date(),
  new Error(),
  new Function(),
  function () {},
  Math,
  new Number(),
  1,                // restera tel quel
  new Object(),
  {},
  new RegExp(),
  /(?:)/,
  new String(),
  'test'            // restera tel quel
];

for (var i = 0; i &lt; types.length; i++) {
  types[i].constructor = Type;
  types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];
}

console.log(types.join('\n'));
</pre>

<p>L'exemple produira le résultat suivant :</p>

<pre class="brush: js">function Type() {},false,
function Type() {},false,
function Type() {},false,false
function Boolean() {
    [native code]
},false,true
function Type() {},false,Mon Sep 01 2014 16:03:49 GMT+0600
function Type() {},false,Error
function Type() {},false,function anonymous() {

}
function Type() {},false,function () {}
function Type() {},false,[object Math]
function Type() {},false,0
function Number() {
    [native code]
},false,1
function Type() {},false,[object Object]
function Type() {},false,[object Object]
function Type() {},false,/(?:)/
function Type() {},false,/(?:)/
function Type() {},false,
function String() {
    [native code]
},false,test
</pre>

<h3 id="Modifier_le_constructeur_d'une_fonction">Modifier le constructeur d'une fonction</h3>

<p>La plupart du temps, cette  propriété est utilisée afin de définir une fonction en tant que constructeur, c'est-à-dire qu'on l'appellera avec <code><strong>new</strong></code> et en « attachant » la chaîne de prototypes.</p>

<pre class="brush: js">function Parent() {}
Parent.prototype.parentMethod = function parentMethod() {};

function Child() {}
// on redefinit le prototype de child afin qu'il pointe vers celui de Parent
Child.prototype = Object.create(Parent.prototype);

Child.prototype.constructor = Child; // on renvoie le constructeur original Child</pre>

<p>Pourquoi faut-il écrire cette dernière ligne ? Eh bien, ça dépend.</p>

<p>Essayons de définir les cas où il est nécessaire de réaffecter le constructeur original et les cas où c'est superflu.</p>

<p>Imaginons que l'objet possède une méthode <code>create()</code> qui lui permette de créer un autre exemplaire :</p>

<pre class="brush: js">function Parent() {};
function CreatedConstructor() {}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
}

new CreatedConstructor().create().create();
// error undefined is not a function car constructor === Parent</pre>

<p>Dans l'exemple précédent, on a une exception car le constructeur pointe vers <code>Parent</code>.</p>

<p>Pour éviter cet écueil, il suffit d'affecter le bon constructeur (celui qui sera utilisé ensuite) :</p>

<pre class="brush: js">function Parent() {};
function CreatedConstructor() {}

CreatedConstructor.prototype = Object.create(Parent.prototype);
// On réaffecte le bon constructeur afin de l'utiliser plus loin
CreatedConstructor.prototype.constructor = CreatedConstructor;

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
}

new CreatedConstructor().create().create();
// pas d'exception cette fois-ci</pre>

<p>Prenons un autre exemple :</p>

<pre class="brush: js">function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y:0 };
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition;
}

function Child(x, y) {
  this.position = {
    x: x,
    y: y
  };
}

Child.prototype = Object.create(ParentWithStatic.prototype);
Child.prototype.constructor = Child;

Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
  var position = this.position;
  var startPosition = this.constructor.getStartPosition(); // error undefined is not a function, since the constructor is Child

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y
  }
};</pre>

<p>Ici, il faudra conserverr le constructeur parent si on veut que le code fonctionne correctement.</p>

<p>En résumé, lorsqu'on paramètre manuellement le constructeur, on peut obtenir des résultats sources de confusion. La plupart du temps, la propriété <code>constructor</code> n'est pas utilisée et la réaffecter n'est pas nécessaire.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.4.1', 'Object.prototype.constructor')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.prototype.constructor', 'Object.prototype.constructor')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.prototype.constructor', 'Object.prototype.constructor')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.constructor")}}</p>
