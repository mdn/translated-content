---
title: L'opérateur typeof
slug: Web/JavaScript/Reference/Operators/typeof
tags:
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/typeof
original_slug: Web/JavaScript/Reference/Opérateurs/L_opérateur_typeof
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur <strong><code>typeof</code></strong> renvoie une chaîne qui indique le type de son opérande.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<p>L'opérateur <code>typeof</code> est suivi de son opérande :</p>

<pre class="syntaxbox">typeof <em>operande</em></pre>

<h3 id="Paramètre">Paramètre</h3>

<p><code><em>operande</em></code> est une expression qui représente la valeur dont on souhaite obtenir le type.</p>

<h2 id="Description">Description</h2>

<p>Le tableau qui suit liste les résultats possibles de l'opérateur <code>typeof</code>. Pour plus d'informations sur les types et valeurs primitives en JavaScript, voir la page sur <a href="/fr/docs/Web/JavaScript/Structures_de_données#Les_valeurs_primitives">les types et structures de données JavaScript</a>.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Type</th>
   <th scope="col">Résultat</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>indéfini</td>
   <td><code>"undefined"</code></td>
  </tr>
  <tr>
   <td>nul</td>
   <td><code>"object" </code>(voir ci-après)</td>
  </tr>
  <tr>
   <td>booléen</td>
   <td><code>"boolean"</code></td>
  </tr>
  <tr>
   <td>nombre</td>
   <td><code>"number"</code></td>
  </tr>
  <tr>
   <td>grand entier</td>
   <td><code>"bigint"</code></td>
  </tr>
  <tr>
   <td>chaîne de caractère</td>
   <td><code>"string"</code></td>
  </tr>
  <tr>
   <td>symbole (nouveauté d'ECMAScript 6 / 2015)</td>
   <td><code>"symbol"</code></td>
  </tr>
  <tr>
   <td>objet de l'environnement (fourni par l'environnement dans lequel est utilisé JS)</td>
   <td><em>Résultat différent selon l'implémentation</em></td>
  </tr>
  <tr>
   <td>Objet Function (au sens ECMA-262, un objet qui implémente [[Call]])</td>
   <td><code>"function"</code></td>
  </tr>
  <tr>
   <td>Tout autre objet</td>
   <td><code>"object"</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">// Pour les nombres
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Bien que littéralement ce soit "Not-A-Number"…
typeof Number('1') === 'number'; // Number essaie de convertir l'argument en nombre

// Grand entier
typeof 42n === 'bigint';

// Les chaînes de caractères
typeof "" === 'string';
typeof "bla" === 'string';
typeof "1" === 'string'; // on a ici un nombre écrit sous forme d'une chaîne
typeof (typeof 1) === 'string'; // typeof renvoie toujours une chaîne
typeof String(1) === 'string'; // String convertit n'importe quelle valeur en chaîne


// Les booléens
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean convertit n'importe quelle valeur en son équivalent logique
typeof !!(1) === 'boolean'; // deux appels à l'opérateur ! (le NON logique) sont équivalents à Boolean()


// Les symboles
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'


// Indéfini
typeof undefined === 'undefined';
typeof blabla === 'undefined'; // pour une variable indéfinie


// Les objets
typeof {a:1} === 'object';

// Utiliser la méthode <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/isArray">Array.isArray</a> ou Object.prototype.toString.call
// afin de différencier les objets des tableaux
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // Voir la section sur les expressions rationnelles

// Les expressions suivantes sont source de confusion
// à ne pas utiliser sous cette forme
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';


// Les fonctions
typeof function(){} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
</pre>

<h2 id="Informations_supplémentaires">Informations supplémentaires</h2>

<h3 id="null"><code>null</code></h3>

<pre class="brush:js">// Cela est valable depuis les commencements de JavaScript
typeof null === 'object';
</pre>

<p>Lors de la première implémentation de JavaScript, les valeurs JavaScript étaient représentées avec une étiquette de type et une valeur. Pour les objets, l'étiquette de type était 0. <code>null</code> était représenté par la valeur NULL (0x00 pour la plupart des plates-formes). Par conséquent, l'étiquette de type de <code>null</code> valait 0, d'où le comportement de <code>typeof</code> (<a href="https://www.2ality.com/2013/10/typeof-null.html">source</a>).</p>

<p>Un correctif fut proposé pour ECMAScript mais il fut <a class="external" href="https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null">refusé</a>. Avec cette version, on aurait eu <code>typeof null === 'null'</code>.</p>

<h3 id="Utiliser_l'opérateur_new">Utiliser l'opérateur <code>new</code></h3>

<pre class="brush: js">// Tous les constructeurs doivent être employés
// avec le mot-clé "new"
var maChaine = new String("toto");
var monNombre = new Number(100);

typeof maChaine;  // renverra "object"
typeof monNombre; // renverra "object"

// En revanche avec le constructeur Function,
// on aura :
var maFonction = new Function();
typeof maFonction; // renverra "function"</pre>

<h3 id="Utilisation_des_parenthèses">Utilisation des parenthèses</h3>

<pre class="brush: js">// Les parenthèses peuvent s'avérer utile pour
// déterminer le type de données d'une expression
// complète

var maDonnee = 99;

typeof maDonnee + 'Toto';   // renverra 'number Toto'
typeof (maDonnee + 'Toto'); // renverra 'string'
</pre>

<h3 id="Expressions_rationnelles">Expressions rationnelles</h3>

<p>Les expressions rationnelles qu'on peut appeler directement furent parfois ajoutées de façon non standard dans certains navigateurs.</p>

<pre class="brush:js">typeof /s/ === 'function'; // Chrome 1 à 12 : Non conforme à ECMAScript 5.1
typeof /s/ === 'object';   // À partir de Firefox 5 : Conforme à ECMAScript 5.1
</pre>

<h3 id="Zone_morte_temporaire_(Temporal_Dead_Zone_TDZ)">Zone morte temporaire (<em>Temporal Dead Zone</em> / TDZ)</h3>

<p>Avant ECMAScript 2015 (ES6), <code>typeof</code> retournait toujours une chaîne de caractères, quel que soit l'opérande utilisé. On ne pouvait pas avoir d'erreur en utilisant <code>typeof</code>.</p>

<p>Avec l'apparition des opérateurs <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/let">let</a></code> et <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/const">const</a></code>, si on utilise <code>typeof</code> sur des variables déclarées avec ces opérateurs (ou avec une classe) avant leur déclaration, cela déclenchera une erreur {{jsxref("ReferenceError")}}. Si on utilise <code>typeof</code> sur une variable déclarée avec <code>var</code> avant la déclaration, cela renverra <code>undefined</code>. Les variables déclarées avec <code>let</code> et <code>const</code> sont en fait placées dans une <em><a href="/fr/docs/Web/JavaScript/Reference/Instructions/let#Zone_morte_temporaire_(Temporal_Dead_Zone_TDZ)_et_les_erreurs_liées_à_let">zone morte temporaire </a></em>entre le début du bloc et leur initialisation et dans cette zone, tout accès à la variable produit une erreur.</p>

<pre class="brush: js">typeof variableGlobaleNonDeclaree === "undefined";

typeof variableLet; // ReferenceError
let variableLet;

typeof constante;   // ReferenceError
const constante = "coucou";

typeof maClasse; // ReferenceError
class maClasse{};</pre>

<h3 id="Exceptions">Exceptions</h3>

<p>Tous les navigateurs actuels exposent un objet non-standard {{domxref("document.all")}} dont le type est <code>"undefined"</code>.</p>

<pre class="brush: js">typeof document.all === "undefined";</pre>

<p>Bien que la spécification requière que les objets exostiques aient des types différents, ces types doivent être des chaînes différentes des chaînes existantes pour les objets standards. À ce titre, le type de <code>document.all</code> représente une violation « volontaire » du standard ECMAScript original.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-typeof-operator', 'Opérateur typeof')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-typeof-operator', 'Opérateur typeof')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.4.3', 'Opérateur typeof')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-11.4.3', 'Opérateur typeof')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-11.4.3', 'Opérateur typeof')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale, implémentée avec JavaScript 1.1.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.typeof")}}</p>

<h2 id="Notes_spécifiques_à_IE">Notes spécifiques à IE</h2>

<p>Pour les versions 6, 7 et 8 d'Internet Explorer, les objets de l'environnement hôte sont des objets et non des fonctions. Par exemple, on aura :</p>

<pre class="brush: js">typeof alert === 'object'</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'opérateur {{jsxref("Opérateurs/instanceof","instanceof")}}</li>
 <li><a href="http://es-discourse.com/t/why-typeof-is-no-longer-safe/15">Discussion es-discuss sur l'évolution de <code>typeof</code> avec ECMAScript 2015 et <code>let</code></a></li>
 <li><a href="https://github.com/tc39/ecma262/issues/668">À propos du non-respect volontaire du standard avec le type de <code>document.all</code></a></li>
</ul>
