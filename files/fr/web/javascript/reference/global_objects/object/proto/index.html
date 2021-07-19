---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
tags:
  - Deprecated
  - ECMAScript 2015
  - JavaScript
  - Object
  - Propriété
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/proto
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/proto
---
<div>{{JSRef}}{{Deprecated_header}}</div>

<div class="warning">
<p><strong>Attention :</strong> Étant donnée la façon dont la plupart des moteurs JavaScript optimisent les performances, modifier le <code>[[Prototype]]</code> d'un objet est une opération lente pour chaque navigateur et moteur JavaScript. Les impacts liés aux performances sur ce point sont vastes et subtiles : ils concernent pas uniquement le temps passé à effectuer <code>obj.__proto__ = ...</code>, mais peuvent concerner n'importe quel code pour n'importe quel objet dont <code>[[Prototype]]</code> a été modifié. Si vous souhaitez obtenir des performances optimales, évitez de modifier le <code>[[Prototype]]</code> d'un objet. À la place, il est conseillé de créer un objet avec le prototype voulu en utilisant {{jsxref("Object.create()")}}.</p>
</div>

<div class="warning">
<p><strong>Attention :</strong> Bien que la propriété <code>Object.prototype.__proto__</code> soit déjà supportée dans la plupart des navigateurs à l'heure actuelle, son comportement n'a été standardisé que récemment avec la spécification ECMAScript 2015. Si vous avez besoin d'utiliser cette propriété dans des environnements antérieurs à ES2015, il est recommandé d'utiliser {{jsxref("Object.getPrototypeOf()")}}.</p>
</div>

<p>La propriété <code>__proto__</code> de {{jsxref("Object.prototype")}} est une propriété accesseur (un couple de fonction avec un accesseur (<em>getter</em>) et un mutateur (<em>setter</em>)) qui expose le <code>[[Prototype]]</code> interne (qui est soit un objet, soit {{jsxref("null")}}) de l'objet courant.</p>

<p>L'utilisation de <code>__proto__</code> est sujet à controverse. Elle a été déconseillée par plusieurs personnes et n'avait jamais été incluse dans la spécification ECMAScript. Cependant, de nombreux navigateurs ont décidé de l'implémenter. À l'heure actuelle, la propriété <code>__proto__</code> a été standardisée avec la spécification ECMAScript 2015 et sera officiellement supportée à l'avenir. Une alternative à cette propriété peut être l'utilisation des méthodes {{jsxref("Object.getPrototypeOf")}}/{{jsxref("Reflect.getPrototypeOf")}} et {{jsxref("Object.setPrototypeOf")}}/{{jsxref("Reflect.setPrototypeOf")}}. Cependant, modifier le <code>[[Prototype]]</code> d'un objet est toujours une opération lente qui doit être évitée le plus possible pour des raisons de performances.</p>

<p>La propriété <code>__proto__</code> peut également être utilisée avec un littéral objet afin de définir le <code>[[Prototype]]</code> lors de la construction (ce qui en fait une alternative à {{jsxref("Object.create()")}}. Voir la page sur {{jsxref("Opérateurs/Initialisateur_objet","les initialisateurs d'objet","",1)}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var proto = <var>obj</var>.__proto__;</pre>

<div class="note">
<p><strong>Note :</strong> le nom de la propriété est composé de deux tirets bas, suivis de « proto », suivis par deux tirets bas (<em>underscores</em>)</p>
</div>

<h2 id="Description">Description</h2>

<p>L'accesseur <code>__proto__</code> expose la valeur du <code>[[Prototype]]</code> interne d'un objet.</p>

<ul>
 <li>Pour les objets créés via un littéral objet, cette valeur est {{jsxref("Object.prototype")}}.</li>
 <li>Pour les objet créés via un littéral de tableau, cette valeur est {{jsxref("Array.prototype")}}.</li>
 <li>Pour les fonctions, cette valeur est {{jsxref("Function.prototype")}}.</li>
 <li>Pour les objets créés en utilisant <code>new fun</code>, avec <code>fun</code> un des constructeurs natif de fonctions, fournis par JavaScript ({{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("String")}}, etc.), cette valeur est <code>fun.prototype</code>.</li>
 <li>Pour les objets créés en utilisant <code>new fun</code>, avec <code>fun</code> une function definie dans un script, cette valeur est la valeur de <code>fun.prototype</code> au moment où <code>new fun</code> est évaluée. (Ainsi, si on affecte une nouvelle valeur à <code>fun.prototype</code>, les instances crées précédemment conserveront leur <code>[[Prototype]]</code>, les objets créés par la suite bénéficieront de la nouvelle valeur pour leur <code>[[Prototype]]</code>.)</li>
</ul>

<p>Le mutateur <code>__proto__</code> permet de changer le <code>[[Prototype]]</code> d'un objet. Cet objet doit être extensible selon {{jsxref("Object.isExtensible")}}, si ce n'est pas le cas, une exception {{jsxref("TypeError")}} sera renvoyée. La valeur fournie pour le nouveau prototype doit être un objet ou {{jsxref("null")}}. Toute autre valeur entraînera un échec silencieux.</p>

<p>Pour plus d'éléments sur le fonctionnement de l'héritage et des prototypes, voir la page sur <a href="/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">l'héritage et les chaînes de prototypes</a>.</p>

<p>Le propriété <code>__proto__</code> n'est qu'une propriété accesseur (composée d'une fonction accesseur (<em>getter</em>) et d'une fonction mutateur (<em>setter</em>)) pour {{jsxref("Object.prototype")}}. Si l'accès à <code>__proto__</code> consulte {{jsxref("Object.prototype")}}, on trouvera la propriété. Un accesseur qui ne consulte pas {{jsxref("Object.prototype")}} ne pourra pas trouver le prototype. Si une propriété <code>__proto__</code> est trouvée avant que {{jsxref("Object.prototype")}} ne soit consulté, cette propriété « cachera » {{jsxref("Object.prototype")}}.</p>

<pre class="brush: js">var aucunProto = Object.create(null);

console.log(typeof aucunProto.__proto__); // undefined
console.log(Object.getPrototypeOf(aucunProto)); // null

aucunProto.__proto__ = 17;

console.log(aucunProto.__proto__); // 17
console.log(Object.getPrototypeOf(aucunProto)); // null

var protoCaché = {};
Object.defineProperty(protoCaché, "__proto__",
                      { value: 42, writable: true, configurable: true, enumerable: true });

console.log(protoCaché.__proto__); // 42
console.log(Object.getPrototypeOf(protoCaché) === Object.prototype); // true
</pre>

<h2 id="Exemples">Exemples</h2>

<p>Dans ce qui suit, on crée un nouvelle instance d'<code>Employé</code> et on teste si <code>__proto__</code> est bien le même objet que le prototype de son constructeur.</p>

<div class="warning">
<p><strong>Attention :</strong> Les remarques données plus haut sur les atteintes à la performance restent valables pour ces exemples. Ces exemples permettent uniquement d'illustrer le fonctionnement de <code>__proto__</code>, ils ne font pas office de recommandations.</p>
</div>

<pre class="brush: js">// On déclare une fonction à utiliser comme constructeur
function Employé() {
  /* on initialise l'instance */
}

// On crée une nouvelle instance d'Employé
var fred = new Employé();

// On teste l'équivalence
fred.__proto__ === Employé.prototype; // true
</pre>

<p>À cet instant, <code>fred</code> hérite de <code>Employé</code>. On peut toutefois changer ça en assignant un nouvel objet à <code>fred.__proto__</code> :</p>

<pre class="brush: js">// Assigner un nouvel objet à __proto__
fred.__proto__ = Object.prototype;
</pre>

<p><code>fred</code> n'hérite plus de <code>Employé.prototype</code>, mais de <code>Object.prototype</code>. Il perd donc les propriétés héritées de <code>Employé.prototype</code>.</p>

<p>Cela n'est possible que pour les objets {{jsxref("Object.isExtensible", "extensibles","",1)}}. La propriété <code>__proto__</code> d'un objet non-extensible ne peut pas être changée :</p>

<pre class="brush: js">var obj = {};
Object.preventExtensions(obj);

obj.__proto__ = {}; // renvoie une exception TypeError
</pre>

<p>On notera que même la propriété <code>__proto__</code> de <code>Object.prototype</code> peut être redéfinie tant que la chaîne de prototypes se termine par <code>null</code> :</p>

<pre class="brush: js">var b = {};

Object.prototype.__proto__ =
    Object.create(null, //[[Prototype]]
                  { salut: { value: function () {console.log('salut');}}});

b.salut();</pre>

<p>Si la propriété <code>__proto__</code> de {{jsxref("Object.prototype")}} ne permet pas d'aboutir à {{jsxref("null")}} via la chaîne de prototypes, on a une chaîne cyclique et on doit avoir une exception {{jsxref("TypeError")}} "cyclic __proto__ value".</p>

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
   <td>{{SpecName('ES2015', '#sec-object.prototype.__proto__', 'Object.prototype.__proto__')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Incluse dans l'annexe (normative) pour le fonctionnalités additionneles d'ECMAScript pour les navigateurs web (note : la spécification codifie ce qui est déjà présent dans les implémentations).</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-additional-properties-of-the-object.prototype-object', 'Object.prototype.__proto__')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.proto")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<p>Bien que la spécification ES2015 rende le support de <code>__proto__</code> nécessaire pour les navigateurs web, elle n'est pas obligatoire pour les autres environnements (bien que ce soit conseillé vu le caractère normatif de l'annexe). Si votre code doit être compatible avec un environnement qui n'est pas un navigateur web, il est recommandé d'utiliser {{jsxref("Object.getPrototypeOf()")}} et {{jsxref("Object.setPrototypeOf()")}} à la place.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.prototype.isPrototypeOf()")}}</li>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Object.setPrototypeOf()")}}</li>
</ul>
