---
title: Initialisateur d'objet
slug: Web/JavaScript/Reference/Operators/Object_initializer
tags:
  - ECMAScript 2015
  - JavaScript
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Object_initializer
original_slug: Web/JavaScript/Reference/Opérateurs/Initialisateur_objet
---
<div>{{JsSidebar("Operators")}}</div>

<p>Il est possible d'initialiser un objet en utilisant les notations <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object"><code>new Object()</code></a>,<code> <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/create">Object.create()</a></code>, ou grâce à un littéral (appelée initialisateur). Un initialisateur d'objet est une liste contenant plusieurs (éventuellement 0) propriétés, séparées par des virgules, et leurs valeurs associées, cette liste étant entourée d'accolades (<code>{}</code>).</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var o = {};
var o = { a: "toto", b: 42, c: {} };

var a = "toto", b = 42, c = {};
var o = { a: a, b: b, c: c };

var o = {
  <var>property: function </var>(<var>paramètres</var>) {},
  get property() {},
  set property(<var>valeur</var>) {}
};
</pre>

<h3 id="Nouvelles_notations_ECMAScript_2015_(ES6)">Nouvelles notations ECMAScript 2015 (ES6)</h3>

<p>ECMAScript 2015 (ES6) introduit de nouvelles notations. Pour plus d'informations sur la compatibilité de ces notations avec les différents environnements, se référer au tableau de compatibilité ci-après.</p>

<pre class="brush: js">// Raccourcis pour les noms de propriétés (ES2015)
var a = "toto", b = 42, c = {};
var o = { a, b, c };

// Raccourcis pour les noms de méthodes(ES2015)
var o = {
  <var>property</var>(<var>paramètres</var>) {}
};

// Noms calculés pour les propriétés (ES2015)
var prop = "toto";
var o = {
  [prop]: "hey",
  ["tr" + "uc"]: "ho",
};</pre>

<h2 id="Description">Description</h2>

<p>Un initialisateur d'objet est une expression qui permet de décrire l'initialisation d'un {{jsxref("Object")}}. Les objets sont constitués de propriétés qui permettent de les décrire. Les valeurs des propriétés d'un objet peuvent être construites à partir de <a href="/fr/docs/Web/JavaScript/Structures_de_données#Les_valeurs_primitives">types de données primitifs</a> ou à partir d'autres objets.</p>

<h3 id="Créer_des_objets">Créer des objets</h3>

<p>On peut créer un objet sans aucune propriété grâce à l'expression suivante :</p>

<pre class="brush: js">var objet = {};</pre>

<p>Cependant, en utilisant un littéral ou un initialisateur, on peut créer des objets disposant de propriétés rapidement. Il suffit d'inscrire une liste de clés-valeurs séparées par des virgules. Le fragment de code qui suit permet de créer un objet avec trois propriétés identifiées par les clés <code>"toto"</code>, <code>"âge"</code> et <code>"machin"</code>. Les valeurs respectives de ces différentes propriétés sont : la chaîne de caractères <code>"truc"</code>, le nombre <code>42</code> et un autre objet.</p>

<pre class="brush: js">var object = {
  toto: 'truc',
  âge: 42,
  machin: { maProp: 12 },
}</pre>

<h3 id="Accéder_à_des_propriétés">Accéder à des propriétés</h3>

<p>Après la création d'un objet, vous pourrez avoir besoin de consulter ou de modifier ses propriétés. Il est possible d'accéder aux propriétés d'un objet en utilisant un point ou des crochets. Voir la page sur les <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres">accesseurs de propriétés</a> pour plus d'information.</p>

<pre class="brush: js">object.toto; // "truc"
object['âge']; // 42

object.toto = 'machin';
</pre>

<h3 id="Définir_des_propriétés">Définir des propriétés</h3>

<p>On a déjà vu comment on pouvait utiliser la syntaxe de l'initialisateur pour définir des propriétés. Il arrive souvent de vouloir utiliser des variables comme propriétés d'un objet. C'est pourquoi on peut trouver le code suivant :</p>

<pre class="brush: js">var a = 'toto',
    b = 42,
    c = {};

var o = {
  a: a,
  b: b,
  c: c
};</pre>

<p>Avec ECMAScript 2015 (ES6), on peut utiliser une notation plus courte pour un résultat égal :</p>

<pre class="brush: js">var a = 'toto',
    b = 42,
    c = {};

// Raccourcis sur les noms de propriétés (ES2015)
var o = { a, b, c };

// Autrement dit
console.log((o.a === { a }.a)); // true
</pre>

<h4 id="Les_duplicatas_et_les_noms_de_propriétés">Les duplicatas et les noms de propriétés</h4>

<p>Si le même nom est utilisé plusieurs fois pour différentes propriétés, ce sera la dernière propriété qui sera prise en compte :</p>

<pre class="brush: js">var a = {x: 1, x: 2};
console.log(a); // { x: 2}
</pre>

<p>Le mode strict d'ECMAScript 5 renvoyait une exception {{jsxref("SyntaxError")}} lorsque plusieurs propriétés avaient le même nom. ECMAScript 2015 (ES6) permettant de créer des propriétés avec des noms qui sont calculés à l'exécution, cette restriction a été retirée.</p>

<pre class="brush: js">function vérifierSémantiqueES2015(){
  'use strict';
  try {
    ({ prop: 1, prop: 2 });

    // Aucune erreur, la sémantique en cours consiste à accepter les propriétés dupliquées
    return true;
  } catch (e) {
    // Une erreur est renvoyée : les duplicatas sont interdits en mode strict
    return false;
  }
}</pre>

<h3 id="Définitions_de_méthodes">Définitions de méthodes</h3>

<p>Une propriété d'un objet peut être une <a href="/fr/docs/Web/JavaScript/Reference/Functions">function</a>, un <a href="/fr/docs/Web/JavaScript/Reference/Functions/get">accesseur</a> ou un <a href="/fr/docs/Web/JavaScript/Reference/Functions/set">mutateur</a> :</p>

<pre class="brush: js">var o = {
  <var>property: function </var>(<var>paramètres</var>) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>valeur</var>) {}
};</pre>

<p>Avec ECMAScript 2015 (ES6), une notation raccourcie permet de ne plus utiliser le mot-clé "<code>function</code>".</p>

<pre class="brush: js">// Raccourci pour les noms de méthodes (ES2015)
var o = {
  <var>property</var>(<em>paramètres</em>) {},
  *<var>generator</var>() {}
};</pre>

<p>Ou encore :</p>

<pre class="brush: js">var o = {
  *generator() {
    ...
  }
};</pre>

<p>En utilisant uniquement ECMAScript 5, on aurait écrit :</p>

<p><em>(Il n'y a pas de function génératrice en ECMAScript5, mais l'exemple permet de comprendre l'évolution de la syntaxe) :</em></p>

<pre class="brush: js">var o = {
  generator: function* (){}
};
</pre>

<p>Pour plus d'informations et d'exemples sur les méthodes, voir la page concernant les<a href="/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions"> définitions de méthode</a>.</p>

<h3 id="Noms_de_propriétés_calculés">Noms de propriétés calculés</h3>

<p>Avec ECMAScript 2015 (ES6), on peut utiliser un initialisateur et avoir des noms de propriétés qui soient calculés lors de l'exécution. Ainsi, en plaçant une expression entre crochets <code>[]</code>, celle-ci sera calculée pour déterminer le nom de la propriété. Cette notation est la symétrique des crochets utilisés pour accéder aux propriétés. Il est désormais possible d'utiliser cette notation dans les littéraux objets :</p>

<pre class="brush: js">// Calcul des noms de propriétés (ES2015)
var i = 0;
var a = {
  ['toto' + ++i]: i,
  ['toto' + ++i]: i,
  ['toto' + ++i]: i
};

console.log(a.toto1); // 1
console.log(a.toto2); // 2
console.log(a.toto3); // 3

var param = 'taille';
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // { taille: 12, mobileTaille: 4 }</pre>

<h3 id="Décomposition_des_propriétés">Décomposition des propriétés</h3>

<p>La proposition de la décomposition des propriétés à ECMAScript (au niveau 4, finalisée) vise à permettre la décomposition des propriétés dans les littéraux objets. Cela permet de copier les propriétés énumérables directes à partir d'un objet source vers un nouvel objet.</p>

<p>Le clonage superficiel (sans rattacher le prototype) ou la fusion d'objets pourra désormais être écrite de façon plus concise qu'avec {{jsxref("Object.assign()")}}.</p>

<pre class="brush: js">var obj1 = { toto: 'truc', x: 42 };
var obj2 = { toto: 'bidule', y: 13 };

var clone = { ...obj1 };
// Object { toto: 'truc', x: 42 }

var fusion = { ...obj1, ...obj2 };
// Object { toto: 'bidule', x: 42, y: 13 };
</pre>

<p>On notera que la méthode {{jsxref("Object.assign()")}} déclenche <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/set">les mutateurs</a>, ce qui n'est pas le cas de l'opérateur de décomposition.</p>

<h3 id="Changement_de_prototype">Changement de prototype</h3>

<p>Définir une propriété avec la syntaxe <code>__proto__: valeur</code> ou <code>"__proto__": valeur</code> ne permet pas de créer une propriété avec le nom <code>__proto__</code>. Si la valeur fournie est un objet ou est <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/null"><code>null</code></a>, cela modifie le <code>[[Prototype]]</code> de l'objet. (Si la valeur fournie n'est pas un objet ou n'est pas null, l'objet ne sera pas modifié.)</p>

<pre class="brush: js">var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { '__proto__': protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
</pre>

<p>On ne peut modifier le prototype qu'une seule fois pour une même notation littérale. Toute tentative pour modifier le prototype plusieurs fois renverra une erreur de syntaxe.</p>

<p>Les définitions de propriétés qui n'utilisent pas les deux points ne permettent pas de modifier le prototype, elles définieront une propriété de façon classique.</p>

<pre class="brush: js">var __proto__ = 'variable';

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty('__proto__'));
assert(obj1.__proto__ === 'variable');

var obj2 = { __proto__() { return 'hello'; } };
assert(obj2.__proto__() === 'hello');

var obj3 = { ['__prot' + 'o__']: 17 };
assert(obj3.__proto__ === 17);
</pre>

<h2 id="Notation_littérale_et_JSON">Notation littérale et JSON</h2>

<p>La notation utilisant un littéral objet n'est pas identique à celle utilisée par la <strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation (<a href="/fr/docs/JSON">JSON</a>). Bien que ces notations se ressemblent, il existe certaines différences :</p>

<ul>
 <li>JSON ne permet de définir des propriétés qu'en utilisant la syntaxe <code>"propriété": valeur</code>. Le nom de la propriété doit être entouré de double-quotes et la définition de la propriété ne peut pas être raccourcie.</li>
 <li>En JSON les valeurs ne peuvent être uniquement que des chaînes de caractères, des nombres, des tableaux, <code>true</code>, <code>false</code>, <code>null</code>, ou tout autre objet (JSON).</li>
 <li>Une valeur de fonction (voir le paragraphe "Méthodes" ci-avant) ne peut pas être affectée comme valeur en JSON.</li>
 <li>Les objets {{jsxref("Date")}} seront convertis en chaînes de caractères avec {{jsxref("JSON.parse()")}}.</li>
 <li>{{jsxref("JSON.parse()")}} rejètera les noms de propriétés calculés et renverra une erreur dans ce cas.</li>
</ul>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td><a href="/fr/docs/Web/JavaScript/Reference/Functions/get">Ajout des <em>getter</em> et </a><em><a href="/fr/docs/Web/JavaScript/Reference/Functions/set">setter</a></em> (accesseur/mutateur).</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-object-initializer', 'Object Initializer')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Ajout des raccourcis pour les noms de méthodes et propriétés et des noms de propriétés calculés.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object-initializer', 'Object Initializer')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.object_initializer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres">Accesseurs de propriétés</a></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_get">get</a></code> / <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_set">set</a></code></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Définition_de_méthode">Définitions de méthode</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale">Grammaire lexicale</a> de JavaScript</li>
</ul>
