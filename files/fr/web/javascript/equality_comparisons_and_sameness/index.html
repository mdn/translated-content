---
title: Utiliser les différents tests d'égalité
slug: Web/JavaScript/Equality_comparisons_and_sameness
tags:
  - Guide
  - Intermédiaire
  - JavaScript
translation_of: Web/JavaScript/Equality_comparisons_and_sameness
original_slug: Web/JavaScript/Les_différents_tests_d_égalité
---
<div>{{jsSidebar("Intermediate")}}</div>

<p>JavaScript fournit trois opérations permettant de comparer des valeurs :</p>

<ul>
 <li>L'égalité stricte (ou identité ou « triple égal ») utilisant <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)">===</a></code>,</li>
 <li>L'égalité faible (ou « double égal ») utilisant <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_simple_(.3D.3D)">==</a></code>,</li>
 <li>{{jsxref("Object.is")}} (ajouté avec ECMAScript 2015).</li>
</ul>

<p>Ces trois opérations sont associées à quatre algorithmes d'égalité (depuis ES2015) :</p>

<ul>
 <li><a href="#faible">La comparaison d'égalité abstraite (<code>==</code>)</a></li>
 <li><a href="#stricte">La comparaison d'égalité stricte (<code>===</code>)</a>
  <ul>
   <li>Utilisée par {{jsxref("Array.indexOf")}} et {{jsxref("Array.lastIndexOf")}} et la sensibilité à la casse</li>
  </ul>
 </li>
 <li><a href="#SameValueZero"><em>SameValueZero</em> (l'égalité de valeurs nulles)</a>
  <ul>
   <li>Utilisée par les constructeurs {{jsxref("TypedArray")}} et {{jsxref("ArrayBuffer")}} et par les opérations associées à {{jsxref("Map")}} et {{jsxref("Set")}}. Depuis ES2016, cet algorithme est également utilisé par {{jsxref("String.includes")}} et {{jsxref("Array.includes")}}</li>
  </ul>
 </li>
 <li><a href="#sameValue"><em>SameValue</em> (l'égalité de valeurs)</a>
  <ul>
   <li>Utilisée partout ailleurs</li>
  </ul>
 </li>
</ul>

<p>Selon la comparaison qu'on souhaite effectuer, on choisira une de ces opérations.</p>

<p>En résumé :</p>

<ul>
 <li>L'égalité faible (<code>==</code>) effectuera une conversion des deux éléments à comparer avant d'effectuer la comparaison</li>
 <li>L'égalité stricte (<code>===</code>) effectuera la même comparaison mais sans conversion préalable (elle renverra toujours false si les types des deux valeurs comparées sont différents)</li>
 <li>Enfin <code>Object.is()</code> se comportera comme l'égalité stricte sauf pour les valeurs <code>NaN</code>, <code>-0</code> et <code>+0</code> : pour <code>Object.is()</code>, <code>-0</code> et <code>+0</code> seront différents mais on aura <code>Object.is(NaN, NaN)</code> qui sera <code>true</code>. (Généralement, quand on compare <code>NaN</code> avec <code>NaN</code> en utilisant l'égalité stricte ou l'égalité faible, cela donne <code>false</code> afin de respecter la norme IEEE 754.)</li>
</ul>

<p>On notera que pour ces trois opérations, la comparaison s'effectue sur les valeurs des éléments qu'on compare, aucune de ces opérations ne permet de comparer la structure des paramètres. Pour des objets non primitifs, <code>x</code> et <code>y</code> qui ont la même structure mais qui sont des objets distincs, chacune des opérations présentées ci-avant sera évaluée à <code>false</code>.</p>

<h2 id="Légalité_stricte_avec">L'égalité stricte avec <code>===</code></h2>

<p>L'égalité stricte compare deux valeurs et teste leur égalité. Aucune des valeurs n'est convertie implicitement en une autre valeur avant que la comparaison soit effectuée. Si les valeurs sont typées différemment, elles sont considérées comme différentes. Si les valeurs sont de même type et ne sont pas des nombres, elles sont considérées égales si elles ont la même valeur. Si les deux valeurs sont des nombres, elles sont égales si elles ont la même valeur et que cette valeur n'est pas NaN ou si l'une vaut +0 et l'autre -0.</p>

<pre class="brush: js">var num = 0;
var obj = new String("0");
var str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
</pre>

<p>Ce test d'égalité stricte est presque toujours la meilleure des opérations à considérer pour ces tests. Excepté pour les nombres, la sémantique utilisée est simple : une valeur est uniquement égale à elle-même. En ce qui concerne les nombres, il y a deux cas aux limites à considérer. Le premier cas concerne le nombre zéro positif ou négatif. Cela peut être utile dans la représentation de problèmes mathématiques mais ne constitue pas une différence pour de nombreuses situations : le test d'égalité stricte considère que ce sont les mêmes valeurs. Le second cas concerne la valeur « n'est pas un nombre », <code>NaN</code> (pour « not a number » en anglais) permettant de représenter certaines entités mathématiques : la somme des deux infinis (positif et négatif) par exemple. Le test d'égalité stricte considère que <code>NaN</code> est différent de toutes les valeurs, y compris lui-même. (N.B. : Le seul cas de figure pour lequel on a <code>(x !== x)</code> qui renvoie <code>true</code> est lorsque x vaut <code>NaN</code>.)</p>

<h2 id="Légalité_faible_avec">L'égalité faible avec <code>==</code></h2>

<p>Le test d'égalité faible compare deux valeurs <em>après</em> les avoir converties en valeurs d'un même type. Une fois converties (la conversion peut s'effectuer pour l'une ou les deux valeurs), la comparaison finale est la même que celle effectuée par <code>===</code>. L'égalité faible est <em>symétrique </em>: <code>A == B</code> aura toujours la même signification que <code>B == A</code> pour toute valeur de A et B.</p>

<p>La comparaison d'égalité est effectuée comme suit pour des opérandes de différents types :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row"></th>
   <th colspan="7" scope="col">Opérande B</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row"></th>
   <td></td>
   <td>Undefined</td>
   <td>Null</td>
   <td>Number</td>
   <td>String</td>
   <td>Boolean</td>
   <td>Object</td>
  </tr>
  <tr>
   <th colspan="1" rowspan="6" scope="row">Opérande A</th>
   <td>Undefined</td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>Null</td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>Number</td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>A === B</code></td>
   <td><code>A === ToNumber(B)</code></td>
   <td><code>A === ToNumber(B)</code></td>
   <td><code>A == ToPrimitive(B)</code></td>
  </tr>
  <tr>
   <td>String</td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>ToNumber(A) === B</code></td>
   <td><code>A === B</code></td>
   <td><code>ToNumber(A) === ToNumber(B)</code></td>
   <td><code>A == ToPrimitive(B)</code></td>
  </tr>
  <tr>
   <td>Boolean</td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>ToNumber(A) === B</code></td>
   <td><code>ToNumber(A) === ToNumber(B)</code></td>
   <td><code>A === B</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>Object</td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>ToPrimitive(A) == B</code></td>
   <td><code>ToPrimitive(A) == B</code></td>
   <td><code>ToPrimitive(A) == ToNumber(B)</code></td>
   <td>
    <p><code>A === B</code></p>
   </td>
  </tr>
 </tbody>
</table>

<p>Dans le tableau ci-dessus, l'expression <code>ToNumber(A)</code> correspond à une tentative de convertir l'argument en un nombre avant la comparaison. Le résultat obtenu est équivalent à <code>+A</code> (l'opérateur unaire +). <code>ToPrimitive(A)</code> correspond à une tentative de convertir l'argument en une valeur primitive grâce à plusieurs méthodes comme <code>A.toString</code> et <code>A.valueOf</code>.</p>

<p>Selon ECMAScript, au sens de l'égalité faible, tous les objets sont différents de <code>undefined</code> et de <code>null</code>. Cependant, la plupart des navigateurs autorisent, dans certains contextes, unensemble restreint d'objets (notamment l'objet <code>document.all</code>), à agir comme s'ils émulaient la valeur <code>undefined</code>. L'égalité faible est un de ces contextes. Pour tous les autres cas, un objet ne sera jamais approximativement égal à <code>undefined</code> ou à <code>null</code>.</p>

<pre class="brush: js">var num = 0;
var obj = new String("0");
var str = "0";

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// Les deux assertions qui suivent sont fausses
// sauf dans certains cas exceptionnels
console.log(obj == null);
console.log(obj == undefined);
</pre>

<p>Certains développeurs considèrent que ce n'est jamais une bonne idée d'utiliser l'égalilté faible. Le résultat d'une comparaison utilisant l'égalité stricte est plus simple à appréhender et à prédire, de plus il n'y a aucune conversion implicite ce qui rend le test plus rapide.</p>

<h2 id="Égalité_de_valeurs">Égalité de valeurs</h2>

<p>L'égalité de valeurs répond à un dernier cas d'utilisation : savoir si deux valeurs sont fonctionnellement identiques pour tout contexte. (Ce cas d'utilisation est un exemple du <a href="https://fr.wikipedia.org/wiki/Principe_de_substitution_de_Liskov">principe de substitution de Liskov</a>). On retrouve ce cas lorsqu'on essaie de changer une propriété immuable :</p>

<pre class="brush: js">// Ajouter la propriété immuable NEGATIVE_ZERO au constructor Number.
Object.defineProperty(Number, "NEGATIVE_ZERO",
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v) {
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
</pre>

<p><code>Object.defineProperty</code> lancera une exception pour tout changement de la propriété qui serait réellement un changement. Rien ne se passera si aucun changement n'est nécessaire. Ainsi, si <code>v</code> vaut <code>-0</code>, aucun changement n'est nécessaire et il n'y aura pas d'erreur. Mais si <code>v</code> vaut <code>+0</code>, <code>Number.NEGATIVE_ZERO</code> n'aurait plus la même valeur immuable. De façon interne à l'implémentation, la nouvelle valeur est comparée avec la valeur courante en utilisant une égalité de valeurs.</p>

<p>L'égalité de valeurs peut être testée grâce à la méthode {{jsxref("Object.is")}}.</p>

<h2 id="Égalité_de_valeurs_nulles">Égalité de valeurs nulles</h2>

<p>On utilise la même égalité que l'égalité de valeur et on considère que <code>+0</code> et <code>-0</code> sont égaux.</p>

<h2 id="Égalité_abstraite_égalité_stricte_et_valeurs_identiques_la_spécification">Égalité abstraite, égalité stricte et valeurs identiques : la spécification</h2>

<p>Selon ES5, la comparaison effectuée par <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_simple_(.3D.3D)"><code>==</code></a> est décrite dans <a href="https://ecma-international.org/ecma-262/5.1/#sec-11.9.3">la section 11.9.3 sur l'algorithme d'égalité abstraite (<em>Abstract Equality Algorithm</em>)</a>. La comparaison donnée par <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)"><code>===</code></a> est décrite dans <a href="https://ecma-international.org/ecma-262/5.1/#sec-11.9.6">la section 11.9.6 sur l'algorithme d'égalité stricte (<em>Strict Equality Algorithm</em>)</a>. Ces documents sont en anglais mais sont tout à fait abordables, ne pas hésiter à les consulter (conseil : d'abord commencer par l'algorithme d'égalité stricte). ES5 décrit également, dans <a href="https://ecma-international.org/ecma-262/5.1/#sec-9.12">la section 9.12 sur l'algorithme SameValue</a>, l'opération utilisée en interne par le moteur JavaScript. Cet algorithme est principalement basé sur l'algorithme d'égalité stricte : 11.9.6.4 et 9.12.4 diffèrent en ce qui concerne les nombres. ES6 (ECMAScript 2015) permet d'utiliser cet algorithme grâce à la méthode {{jsxref("Object.is")}}.</p>

<p>Dans ces documents, on peut voir que l'algorithme d'égalité stricte est un sous-ensemble de l'algorithme d'égalité abstraite (exception faite de la vérification du type) car 11.9.6.2–7 correspond exactement à 11.9.3.1.a–f.</p>

<h2 id="Un_modèle_pour_mieux_comprendre">Un modèle pour mieux comprendre ?</h2>

<p>Avant ES6 (ECMAScript 2015), il était courant de dire que l'égalité stricte avec le triple égal était une version « améliorée » de l'égalité faible (double égal) et vice versa. En effet, l'égalité faible ajoute une étape de conversion des types qui n'est pas fournie par l'égalité stricte (ce qui permet d'avoir <code>6 == "6"</code>). On peut aussi dire que l'égalité stricte est une version améliorée de l'égalité simple car elle ajoute une fonctionnalité de vérification des types. Selon votre approche et votre problème, une de ces égalités se prêtera mieux à la résolution.</p>

<p>Cependant, ce « modèle de pensées » ne peut pas être étendu avec l'arrivée d'{{jsxref("Object.is")}} avec ES6 (ECMAScript 2015). En effet <code>Object.is()</code> n'est pas plus « faible » que l'égalité faible ou plus « stricte » que l'égalité stricte et il n'est pas non plus quelque part entre les deux. Dans le tableau de comparaison ci-après, on voit que la différence provient avant tout de la façon dont {{jsxref("Object.is")}} gère {{jsxref("NaN")}}. On note ici que si <code>Object.is(NaN, NaN)</code> valait <code>false</code>, on pourrait dire qu'<code>Object.is()</code> est plus stricte que == ou === car elle distingue <code>-0</code> et <code>+0</code>. Cependant, ce n'est pas le cas et on a bien <code>Object.is(NaN,NaN)</code> qui vaut <code>true</code>. C'est pour cette raison qu'il faut considérer {{jsxref("Object.is")}} selon ses caractéristiques spécifiques plutôt que comme une version plus faible ou plus stricte des autres opérateurs d'égalité.</p>

<table class="standard-table">
 <caption>Comparaisons d'égalité</caption>
 <thead>
  <tr>
   <th scope="col">x</th>
   <th scope="col">y</th>
   <th scope="col"><code>==</code></th>
   <th scope="col"><code>===</code></th>
   <th scope="col"><code>Object.is</code></th>
   <th scope="col"><code>SameValueZero</code></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>undefined</code></td>
   <td><code>undefined</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>null</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>'toto'</code></td>
   <td><code>'toto'</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>+0</code></td>
   <td><code>-0</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>+0</code></td>
   <td><code>0</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>-0</code></td>
   <td><code>0</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>0</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>'0'</code></td>
   <td><code>0</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>'17'</code></td>
   <td><code>17</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>[1, 2]</code></td>
   <td><code>'1,2'</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>new String('toto')</code></td>
   <td><code>'toto'</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>undefined</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>undefined</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>{ toto: 'truc' }</code></td>
   <td><code>{ toto: 'truc' }</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>new String('toto')</code></td>
   <td><code>new String('toto')</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>null</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>NaN</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>'toto'</code></td>
   <td><code>NaN</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>NaN</code></td>
   <td><code>NaN</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Quand_utiliser_jsxrefObject.is_et_quand_utiliser_légalité_stricte">Quand utiliser {{jsxref("Object.is")}} et quand utiliser l'égalité stricte</h2>

<p>En plus de la façon dont {{jsxref("Object.is")}} traite <code>NaN</code>, la spécificité d'<code>Object.is()</code> réside dans sa façon de traiter les valeurs proches de zéro. Dans des cas d'utilisation où on a besoin d'effectuer de la méta-programmation, notamment pour imiter certaines caractéristiques de {{jsxref("Object.defineProperty")}}. Si le scénario d'utilisation ne nécessite pas ce comportement, il est conseillé d'utiliser <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)"><code>===</code></a>. Même si on souhaite pouvoir comparer <code>NaN</code> avec lui-même et que ce test vaille <code>true</code>, il sera plus simple d'utiliser la méthode {{jsxref("isNaN")}} disponible avec les versions antérieures d'ECMAScript. En effet, cela évite d'avoir à traiter des cas plus complexes où il faudrait gérer les signes des zéros dans les différentes comparaisons.</p>

<p>Voici une liste (non exhaustive) d'opérateurs et de méthodes natives qui peuvent entraîner l'apparition des valeurs <code>-0</code> et <code>+0</code> dans le code :</p>

<dl>
 <dt><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Négation_unaire"><code>-</code> (négation unaire)</a></dt>
 <dd>
 <p>Si on prend l'opposé de <code>0</code>, on aura, bien entendu,<code>-0</code>. Cependant, avec les expressions, cela peut faire que la valeur <code>-0</code> se glisse dans les variables sans qu'on s'en rende compte. Par exemple :</p>
 <pre class="brush:js">let forceArrêt = obj.masse * -obj.vitesse</pre>
 <p>Si <code>obj.vitesse</code> vaut <code>0</code> (ou est évalué à <code>0</code>), un <code>-0</code> sera introduit, ce qui fera que <code>forceArrêt</code> pourra être négative.</p>
 </dd>
 <dt>{{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}</dt>
 <dd>Ces méthodes peuvent introduire <code>-0</code> dans une expression lors de leur évaluation, même si <code>-0</code> ne faisait pas partie des paramètres. Par exemple, si on utilise <code>Math.pow()</code> pour élever {{jsxref("Infinity", "-Infinity")}} à une puissance négative, on obtiendra <code>-0</code> pour une puissance impaire. Pour plus de détails, voir la documentation de chaque méthode.</dd>
 <dt>{{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}</dt>
 <dd>Ces méthodes peuvent renvoyer <code>-0</code> dans certains cas où <code>-0</code> est passé en paramètre. Par exemple, <code>Math.min(-0, +0)</code> fournira <code>-0</code>. Pour plus de détails, voir la documentation de chaque méthode.</dd>
 <dt><code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.7E_.28NON_binaire.29">~</a></code>, <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.3C.3C_.28d.C3.A9calage_.C3.A0_gauche.29">&lt;&lt;</a></code>, <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.3E.3E_.28d.C3.A9calage_.C3.A0_droite_avec_propagation_du_signe.29">&gt;&gt;</a></code></dt>
 <dd>Chacun de ces opérateurs utilise l'algorithme ToInt32 interne au moteur JavaScript. Étant donné qu'il n'y a qu'une seule représentation pour 0 sur les entiers exprimés avec le type interne sur 32 bits, <code>-0</code> ne sera pas invariant pour deux opérations symétriques : <code>Object.is(~~(-0), -0)</code> et <code>Object.is(-0 &lt;&lt; 2 &gt;&gt; 2, -0)</code> renverront tous les deux <code>false</code>.</dd>
</dl>

<p>Si on utilise {{jsxref("Object.is")}} et qu'on ne souhaite pas gérer les cas aux limites autour de zéro, cela peut avoir des effet indésirés. En revanche, si on souhaite effectivement comparer <code>-0</code> et <code>+0</code>, c'est la méthode à adopter.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://dorey.github.io/JavaScript-Equality-Table/">Tableau des comparaisons en JavaScript</a></li>
</ul>
