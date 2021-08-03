---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol
---
<div>{{JSRef}}</div>

<p>Un<strong> symbole</strong> est un <a href="/fr/docs/Web/JavaScript/Structures_de_données#Les_valeurs_primitives">type de données primitif</a> représentant une donnée unique et inchangeable qui peut être utilisée afin de représenter des identifiants pour des propriétés d'un objet. L'objet <code>Symbol</code> est un conteneur objet implicite pour le {{Glossary("Primitive", "type de données primitif")}} symbole.</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-constructor.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Symbol([<var>description</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>description</code> {{optional_inline}}</dt>
 <dd>Une chaîne de caractères optionnelle. Correspond à une description du symbole, elle peut être utile pour déboguer (mais pas pour accéder au symbole).</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Pour créer un nouveau symbole, il suffit d'appeler <code>Symbol()</code>, éventuellement avec une chaîne de caractère descriptive :</p>

<pre class="brush: js">var sym1 = Symbol();
var sym2 = Symbol("toto");
var sym3 = Symbol("toto");
</pre>

<p>Le fragment de code ci-dessus permet de créer trois nouveaux symboles. On notera que l'instruction <code>Symbol("toto")</code> ne convertit pas la chaîne "toto" en un symbole. On crée bien un nouveau symbole pour chaque instruction ci-avant.</p>

<pre class="brush: js">Symbol("toto") === Symbol("toto"); // false</pre>

<p>La syntaxe suivante, utilisant l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}, entraînera une exception {{jsxref("TypeError")}}:</p>

<pre class="brush: js">var sym = new Symbol(); // TypeError</pre>

<p>Cela est fait pour empêcher d'écrire un conteneur (<em>wrapper</em>) explicite de <code>Symbol</code> plutôt qu'une nouvelle valeur, cela peut être surprenant car généralement, on peut créer des objets « autour » de types primitifs (par exemple avec <code>new Boolean</code>, <code>new String</code> et <code>new Number</code>).</p>

<p>Si on souhaite obtenir un object contenant un symbole, on pourra toujours utiliser la fonction <code>Object()</code> :</p>

<pre class="brush: js">var sym = Symbol("toto");
typeof sym;     // "symbol"
var symObj = Object(sym);
typeof symObj;  // "object"</pre>

<h3 id="Symboles_partagés_et_registre_global_des_symboles">Symboles partagés et registre global des symboles</h3>

<p>La syntaxe manipulée ci-avant, utilisant la fonction <code>Symbol()</code>, ne crée pas un symbole global, disponible partout dans votre code. Pour créer des symboles qui soient disponibles pour différents fichiers et appartiennent à l'environnement global, il faut utiliser les méthodes {{jsxref("Symbol.for()")}} et {{jsxref("Symbol.keyFor()")}} afin de définir et de récupérer les symboles listés dans le registre global.</p>

<h3 id="Trouver_les_propriétés_identifiées_par_des_symboles_pour_un_objet">Trouver les propriétés identifiées par des symboles pour un objet</h3>

<p>La méthode {{jsxref("Object.getOwnPropertySymbols()")}} renvoie un tableau de symboles, permettant ainsi de connaître les propriétés identifiées par un symbole pour un objet donné. À l'initialisation, un objet ne contient aucune propriété propre identifiée par un symbole, ce tableau sera donc vide jusqu'à ce qu'une propriété, identifiée par un symbole, lui soit ajoutée.</p>

<h3 id="Les_symboles_et_les_conversions">Les symboles et les conversions</h3>

<p>Lorsqu'on utilise des mécanismes de conversion de types avec les symboles, on aura le comportement suivant :</p>

<ul>
 <li>Lorsqu'on tente de convertir un symbole en un nombre, cela provoquera une exception {{jsxref("TypeError")}} (par exemple avec <code>+sym</code> ou <code>sym | 0</code>).</li>
 <li>L'égalité faible permet d'obtenir <code>true</code> avec <code>Object(sym) == sym</code><code>.</code></li>
 <li><code>Symbol("toto") + "truc" </code>lève une exception {{jsxref("TypeError")}} (le symbole ne peut pas être converti en une chaîne de caractères), cela permet par exemple d'éviter de créer (sans s'en rendre compte) des noms de propriétés basés sur des symboles.</li>
 <li>La méthode utilisant la conversion avec {{jsxref("String","String()")}} fonctionnera comme un appel à {{jsxref("Symbol.prototype.toString()")}}. En revanche, <code>new String(sym)</code> renverra une erreur.</li>
</ul>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>Symbol.length</code></dt>
 <dd>La propriété length dont la valeur est 0.</dd>
 <dt>{{jsxref("Symbol.prototype")}}</dt>
 <dd>Cette propriété représente le prototype du constructeur <code>Symbol</code>.</dd>
</dl>

<h3 id="Symboles_connus">Symboles connus</h3>

<p>En plus des symboles que vous pouvez créer, JavaScript possède certains symboles natifs représentant des aspects internes du langages qui, pour ECMAScript 5 et les versions précédentes, n'étaient pas exposées aux développeurs. Il est possible d'accéder à ces symboles en utilisant les propriétés suivantes :</p>

<h4 id="Symboles_ditération">Symboles d'itération</h4>

<dl>
 <dt>{{jsxref("Symbol.iterator")}}</dt>
 <dd>Une méthode qui renvoie l'itérateur par défaut d'un objet. Ce symbole est utilisé par la boucle {{jsxref("Instructions/for...of","for...of")}}.</dd>
 <dt>{{jsxref("Symbol.asyncIterator")}}</dt>
 <dd>Une méthode qui renvoie l'itérateur asynchrone par défaut d'un objet. Ce symbole est utilisé par la boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for-await...of">for await...of</a></code>.</dd>
</dl>

<h4 id="Symboles_liés_aux_expressions_rationnelles">Symboles liés aux expressions rationnelles</h4>

<dl>
 <dt>{{jsxref("Symbol.match")}}</dt>
 <dd>Une méthode qui fait correspondre une expression rationnelle avec une chaîne de caractères. Elle est aussi utilisée pour déterminer si un objet peut être utilisé comme une expression rationnelle.</dd>
 <dt>{{jsxref("Symbol.matchAll")}}</dt>
 <dd>Une méthode qui renvoie un itérateur permettant de parcourir l'ensemble des correspondances entre une chaîne de caractères et une expression rationnelle. Ce symbole est utilisé par {{jsxref("String.prototype.matchAll()")}}.</dd>
 <dt>{{jsxref("Symbol.replace")}}</dt>
 <dd>Une méthode qui remplace les sous-chaînes correspondantes dans une chaîne de caractères. Utilisée par {{jsxref("String.prototype.replace()")}}.</dd>
 <dt>{{jsxref("Symbol.search")}}</dt>
 <dd>Une méthode qui renvoie l'indice d'une chaîne de caractères pour lequel on a une correspondance avec une expression rationnelle. Utilisée par {{jsxref("String.prototype.search()")}}.</dd>
 <dt>{{jsxref("Symbol.split")}}</dt>
 <dd>Une méthode qui découpe la chaîne à l'indice donné par la correspondance avec une expression rationnelle. Utilisée par {{jsxref("String.prototype.split()")}}.</dd>
</dl>

<h4 id="Autres_symboles">Autres symboles</h4>

<dl>
 <dt>{{jsxref("Symbol.hasInstance")}}</dt>
 <dd>Une méthode qui permet de déterminer si un constructeur reconnaît un objet comme son instance. Utilisé par {{jsxref("Opérateurs/instanceof", "instanceof")}}.</dd>
 <dt>{{jsxref("Symbol.isConcatSpreadable")}}</dt>
 <dd>Une valeur booléenne qui indique si un objet devrait être réduit à la concaténation des éléments de son tableau via  {{jsxref("Array.prototype.concat()")}}.</dd>
 <dt>{{jsxref("Symbol.unscopables")}}</dt>
 <dd>Un objet dont les noms des propriétés propres et héritées sont exclues de l'objet associé lors de l'utilisation de <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/with">with</a></code>.</dd>
 <dt>{{jsxref("Symbol.species")}}</dt>
 <dd>Un constructeur utilisé pour construire des objets dérivés.</dd>
 <dt>{{jsxref("Symbol.toPrimitive")}}</dt>
 <dd>Spécifié comme @@toPrimitive. Une méthode qui convertit un objet en sa valeur primitive.</dd>
 <dt>{{jsxref("Symbol.toStringTag")}}</dt>
 <dd>Spécifié comme @@toStringTag. Une chaîne de caractères utilisée pour la description d'un objet. Ce symbole est utilisé par {{jsxref("Object.prototype.toString()")}}.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{jsxref("Symbol.for()", "Symbol.for(key)")}}</dt>
 <dd>Recherche parmi les symboles existants un symbole désigné par cette clé. S'il est trouvé, le symbole est renvoyé, sinon un nouveau symbole est créé et enregistré avec cette clé dans le registre global des symboles.</dd>
 <dt>{{jsxref("Symbol.keyFor", "Symbol.keyFor(sym)")}}</dt>
 <dd>Pour un symbole donné, récupère la clé d'un symbole partagé depuis le registre global.</dd>
</dl>

<h2 id="Prototype_Symbol">Prototype <code>Symbol</code></h2>

<p>Tous les symboles héritent de {{jsxref("Symbol.prototype")}}.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Symbol/prototype','Propri.C3.A9t.C3.A9s')}}</p>

<h3 id="Méthodes_2">Méthodes</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Symbol/prototype','M.C3.A9thodes')}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_lopérateur_typeof_avec_des_symboles">Utiliser l'opérateur <code>typeof</code> avec des symboles</h3>

<p>L'opérateur {{jsxref("Opérateurs/L_opérateur_typeof", "typeof")}} permet d'identifier des symboles :</p>

<pre class="brush: js">typeof Symbol() === 'symbol'
typeof Symbol('toto') === 'symbol'
typeof Symbol.iterator === 'symbol'
</pre>

<h3 id="Les_symboles_et_les_boucles_for...in">Les symboles et les boucles <code>for...in</code></h3>

<p>Les symboles ne peuvent pas être énumérés dans les boucles <a href="/fr/docs/JavaScript/Reference/Instructions/for...in"><code>for...in</code></a>. De plus, la méthode {{jsxref("Object.getOwnPropertyNames()")}} ne renverra pas les propriétés identifiées par des symboles. La méthode {{jsxref("Object.getOwnPropertySymbols()")}} permet d'avoir accès à ces propriétés.</p>

<pre class="brush: js">var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
   console.log(i); // enregistre "c" et "d"
}</pre>

<h3 id="Les_symboles_et_JSON.stringify">Les symboles et <code>JSON.stringify()</code></h3>

<p>Les propriétés identifiées par des symboles seront totalement ignorées par <code>JSON.stringify()</code>:</p>

<pre class="brush: js">JSON.stringify({[Symbol("toto")]: "toto"});
// '{}'</pre>

<p>Pour plus de détails, voir la page {{jsxref("JSON.stringify()")}}.</p>

<h3 id="Utiliser_les_symboles_enveloppés_dans_un_objet">Utiliser les symboles enveloppés dans un objet</h3>

<p>Lors qu'on on utilise un objet pour contenir la valeur du symbole et faire référence à une propriété, l'objet sera ramené au symbole d'origine :</p>

<pre class="brush: js">var sym = Symbol("toto")
var obj = {[sym]: 1};
obj[sym];              // 1
obj[Object(sym)];      // toujours 1</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-symbol-objects', 'Symbol')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-symbol-objects', 'Symbol')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Symbol")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{Glossary("Symbole","Le type de données Symbol dans le glossaire")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_typeof", "typeof")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Structures_de_données">Les types de données et les structures de données</a></li>
 <li><a href="https://tech.mozfr.org">L'article ES6 en détails sur les symboles disponible sur tech.mozfr.org</a></li>
</ul>
