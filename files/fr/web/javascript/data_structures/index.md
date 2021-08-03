---
title: Structures de données
slug: Web/JavaScript/Data_structures
tags:
  - Débutant
  - JavaScript
  - Types
translation_of: Web/JavaScript/Data_structures
original_slug: Web/JavaScript/Structures_de_données
---
<div>{{jsSidebar("More")}}</div>

<p>Les langages de programmation disposent de structures de données natives. Selon les langages, les structures mises à disposition peuvent être différentes. Dans cet article, on listera les structures de données natives en JavaScript. On détaillera leurs propriétés et les façons de les utiliser voire de les combiner. Dans certains cas, on comparera ces structures avec celles d'autres langages.</p>

<h2 id="Un_typage_dynamique">Un typage dynamique</h2>

<p>JavaScript est un langage dont le typage est <em>faible</em> et <em>dynamique</em>. Cela signifie qu'il n'est pas nécessaire de déclarer le type d'une variable avant de l'utiliser. Le type de la variable sera automatiquement déterminé lorsque le programme sera exécuté. Cela signifie également que la même variable pourra avoir différents types au cours de son existence :</p>

<pre class="brush: js">var toto = 42;       // toto est un nombre
    toto = "machin"; // toto est une chaîne de caractères désormais
    toto = true;     // et maintenant, toto est un booléen
</pre>

<h2 id="Les_types_de_données">Les types de données</h2>

<p>Le dernier standard ECMAScript définit 8 types de données :</p>

<ul>
 <li>Sept types de données {{Glossary("Primitive", "primitifs")}}:
  <ul>
   <li>{{Glossary("Boolean", "Booléen")}}</li>
   <li>{{Glossary("Null")}}</li>
   <li>{{Glossary("Undefined")}}</li>
   <li>{{Glossary("Number", "Nombre")}}</li>
   <li>{{Glossary("BigInt")}} (proposition pour ES2020)</li>
   <li>{{Glossary("String", "Chaîne de caractères")}} (String)</li>
   <li>{{Glossary("Symbol", "Symbole")}} (type introduit avec ECMAScript 6)</li>
  </ul>
 </li>
 <li>et le type {{Glossary("Object", "Objet")}}</li>
</ul>

<h2 id="Les_valeurs_primitives">Les valeurs primitives</h2>

<p>Tous les types, sauf les objets, définissent des valeurs immuables (qu'on ne peut modifier). Ainsi, contrairement au C, les chaînes de caractères sont immuables en JavaScript. Les valeurs immuables pour chacun de ces types sont appelées « valeurs primitives ».</p>

<h3 id="Le_type_booléen">Le type booléen</h3>

<p>Un booléen représente le résultat d'une assertion logique et peut avoir deux valeurs : <code>true</code> (pour le vrai logique) et <code>false</code> (pour le faux logique) (voir {{jsxref("Boolean")}} pour plus de détails sur la représentation objet de ce type).</p>

<h3 id="Le_type_nul">Le type nul</h3>

<p>Le type nul ne possède qu'une valeur : <code>null</code>. Voir {{jsxref("null")}} et {{Glossary("Null")}} pour plus d'informations.</p>

<h3 id="Le_type_indéfini">Le type indéfini</h3>

<p>Une variable à laquelle on n'a pas affecté de valeur vaudra <code>undefined</code>. Voir {{jsxref("undefined")}} et {{Glossary("Undefined")}} pour plus d'informations.</p>

<h3 id="Le_type_nombre">Le type nombre</h3>

<p>ECMAScript possède deux types numériques natifs : <code>Number</code> et <code>BigInt</code> (cf. ci-après)</p>

<p>Le type <code>Number</code> est géré pour représenter les nombres : <a href="https://en.wikipedia.org/wiki/Double_precision_floating-point_format">les nombres flottants à précision double, représentés sur 64 bits, selon le format IEEE 754</a> (les nombres compris entre -(2^53 -1) et 2^53 -1). <strong>Il n'y a donc pas de type à part pour représenter les nombres entiers</strong>. En plus de sa capacité à représenter les nombres décimaux, le type nombre possède trois valeurs symboliques : <code>+<a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Infinity">Infinity</a></code>, <code>-Infinity</code>, et {{jsxref("NaN")}} (<em>Not A Number</em> en anglais, qui signifie « n'est pas un nombre »).</p>

<p>Afin de vérifier que des valeurs sont supérieures/inférieures à <code>+/-Infinity</code>, on peut utiliser les constantes {{jsxref("Number.MAX_VALUE")}} et {{jsxref("Number.MIN_VALUE")}}. À partir d'ECMAScript 6, on peut également vérifier si un nombre est/sera compris dans l'intervalle de représentation pour les nombres flottants à précision double en utilisant la méthode {{jsxref("Number.isSafeInteger()")}} ainsi que les valeurs {{jsxref("Number.MAX_SAFE_INTEGER")}} et {{jsxref("Number.MIN_SAFE_INTEGER")}}. En dehors de cet intervalle et pour JavaScript, on considère que les nombres ne sont plus représentés correctement. On manipule alors une approximation de la valeur sous forme d'un nombre à virgule flottante à précision double.</p>

<p>Le type nombre possède un seul entier pouvant être représenté de deux façons différentes : 0 qui peut être représenté par -0 et +0. ("0" étant un alias pour +0). En pratique, cela n'a généralement aucun impact et<code> +0 === -0</code> vaut bien <code>true</code>. Malgré tout, on peut observer certaines différences quand on divise par zéro :</p>

<pre class="brush: js">42 / +0
// Infinity

42 / -0
// -Infinity
</pre>

<p>Dans la plupart des cas, un nombre représente sa propre valeur, malgré tout les <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires">opérateurs binaires</a> peuvent être utilisés pour représenter plusieurs valeurs booléennes grâce à un seul nombre (on parle alors de <a href="https://fr.wikipedia.org/wiki/Masquage">masque de bits</a>). Ceci est généralement une mauvaise pratique (lisibilité, maintenabilité) bien que ça puisse être utile lorsqu'on souhaite minimiser le nombre de bits qu'on utilise.</p>

<h3 id="Le_type_BigInt">Le type <code>BigInt</code></h3>

<p>Le type {{jsxref("BigInt")}} permet de représenter des entiers avec une précision arbitraire. Avec ce type, on peut donc manipuler des entiers plus grands que ceux représentables avec <em>Number</em>. Pour créer un grand entier, on ajoutera un <code>n</code> après l'entier ou on appellera le constructeur {{jsxref("BigInt")}}.</p>

<p>La plus grande valeur représentable avec le type <em>Number</em> est accessible avec la constante {{jsxref("Number.MAX_VALUE")}}. Avec l'apparition de <code>BigInt</code>, on peut représenter et manipuler des entiers plus grands.</p>

<pre class="brush: js">const x = 2n ** 53n;
9007199254740992n;
const y = x + 1n;
9007199254740993n
</pre>

<p>À l'instar des nombres classiques, on peut utiliser les opérateurs <code>+</code>,  <code>*</code>, <code>-</code>, <code>**</code> et <code>%</code>. Un grand entier ne sera pas strictement égal à un nombre mais on pourra avoir une égalité faible.</p>

<p>Un grand entier se comportera comme un nombre lorsqu'il est converti en booléen avec <code>if</code>, <code>||</code>, <code>&amp;&amp;</code>, <code>Boolean</code> et <code>!</code>.</p>

<p>Il n'est pas possible d'utiliser des grands entiers et des nombres de façon interchangeable. Une exception {{jsxref("TypeError")}} sera déclenchée en cas d'incompatibilité.</p>

<h3 id="Le_type_chaîne_de_caractères_String">Le type chaîne de caractères (<em>String</em>)</h3>

<p>Ce type JavaScript est utilisé afin de représenter des données textuelles. C'est un ensemble d'« éléments » de valeurs entières non-signées représentées sur 16 bits. Chaque élément occupe une position au sein de cette chaîne de caractères. Le premier élément est situé à l'indice 0, le deuxième à l'indice 1 et ainsi de suite. La longueur d'une chaîne de caractères correspond au nombre d'éléments qu'elle contient.</p>

<p>À la différence des chaînes de caractères dans le langage C, les chaînes de caractères JavaScript sont immuables. Cela signifie qu'une fois qu'une chaîne est créée, il est impossible de la modifier. En revanche, il est toujours possible de créer une autre chaîne basée sur la première grâce à des opérations. Par exemple :</p>

<ul>
 <li>Un fragment de la chaîne originelle en sélectionnant certaines lettres ou en utilisant {{jsxref("String.substr()")}}.</li>
 <li>Une concaténation de deux chaînes de caractères en utilisant l'opérateur de concaténation (<code>+</code>) ou {{jsxref("String.concat()")}}.</li>
</ul>

<h4 id="Attention_à_ne_pas_utiliser_les_chaînes_pour_tout_et_nimporte_quoi_!">Attention à ne pas utiliser les chaînes pour tout et n'importe quoi !</h4>

<p>Ça peut être tentant de vouloir utiliser des chaînes afin de représenter des données complexes. En revanche, les avantages de cette méthode ne sont que très superficiels :</p>

<ul>
 <li>On peut facilement construire des chaînes complexes grâce à la concaténation.</li>
 <li>On peut déboguer rapidement le contenu des chaînes de caractères.</li>
 <li>Les chaînes de caractères sont utilisées à de multiples endroits dans beaucoup d'API (<a href="/fr/docs/Web/API/HTMLInputElement">champs de saisie</a>, valeurs en <a href="/fr/docs/Storage">stockage local</a>, réponses {{ domxref("XMLHttpRequest") }} avec <code>responseText</code>, etc.).</li>
</ul>

<p>En utilisant des conventions, il peut être possible de représenter n'importe quelle donnée sous forme d'une chaîne de caractères, en revanche cela n'est souvent pas la meilleure façon. (Par exemple, avec un séparateur, on pourrait émuler le comportement d'un tableau en « interdisant » que ce séparateur soit utilisé pour éléments, etc. on pourrait ensuite définir un caractère d'échappement, qui serait à son tour inutilisable dans les chaînes : toutes ces pseudo-conventions entraîneront de lourdes conséquences en termes de maintenance.)</p>

<p>En résumé, les chaînes doivent être utilisées pour les données textuelles. Pour des données plus complexes, utilisez une abstraction adéquate et analysez/parsez les chaînes que vous recevez d'autres API.</p>

<h3 id="Le_type_symbole">Le type symbole</h3>

<p>Les symboles sont une nouveautés du langage, apportée par ECMAScript 6. Un symbole est une valeur primitive <strong>unique</strong> et <strong>immuable</strong> pouvant être utilisée comme clé pour propriété d'un objet (voir ci-après). Dans d'autres langages de programmation, les symboles sont appelés atomes. Pour plus de détails, voir les pages {{Glossary("Symbol","Symbole")}} et le constructeur {{jsxref("Symbol")}} JavaScript.</p>

<h2 id="Les_objets">Les objets</h2>

<p>En informatique, un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un {{Glossary("Identifier", "identifiant")}}.</p>

<h3 id="Propriétés">Propriétés</h3>

<p>En JavaScript, les objets peuvent être considérés comme des collections de propriétés. En utilisant <a href="/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Les_litt.C3.A9raux_objets">un littéral objet</a>, il est possible d'initialiser un ensemble limité de propriétés ; d'autres propriétés peuvent ensuite être ajoutées et/ou retirées. Les valeurs des propriétés peuvent être de n'importe quel type, y compris des objets. Cela permet de construire des structures de données complexes. Les propriétés sont identifiées grâce à une « clé ». Une clé peut être une chaîne de caractères ou un symbole.</p>

<p>Il existe deux types de propriétés qui ont certains attributs : des propriétés de données (<em>data property</em>) et des propriétés d'accesseur.</p>

<h4 id="Propriétés_de_données">Propriétés de données</h4>

<p>Elles associent une clé avec une valeur et possèdent les attributs suivants :</p>

<table class="standard-table">
 <caption>Attributs d'une propriété de données</caption>
 <tbody>
  <tr>
   <th>Attribut</th>
   <th>Type</th>
   <th>Description</th>
   <th>Valeur par défaut</th>
  </tr>
  <tr>
   <td>[[Value]]</td>
   <td>N'importe quelle valeur JavaScript</td>
   <td>La valeur obtenue lorsqu'on accède à la propriété.</td>
   <td><code>undefined</code></td>
  </tr>
  <tr>
   <td>[[Writable]]</td>
   <td>Booléen</td>
   <td>S'il vaut <code>false</code>, la valeur de la propriété (l'attribut [[Value]]) ne peut être changé.</td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>[[Enumerable]]</td>
   <td>Booléen</td>
   <td>S'il vaut <code>true</code>, la propriété pourra être listée par une boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...in">for...in</a></code>. Voir également <a href="/fr/docs/Web/JavaScript/Caract%C3%A8re_%C3%A9num%C3%A9rable_des_propri%C3%A9t%C3%A9s_et_rattachement">l'article sur le caractère énumérable des propriétés</a>.</td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>[[Configurable]]</td>
   <td>Booléen</td>
   <td>S'il vaut <code>false</code>, la propriété ne pourra pas être supprimée, elle ne pourra pas être changée en accesseur et les attributs autres que [[Value]] et [[Writable]] ne pourront pas être modifiés.</td>
   <td><code>false</code></td>
  </tr>
 </tbody>
</table>

<table class="standard-table">
 <caption>Attributes obsolètes (faisaient partie d'ECMAScript 3, renommés avec ECMAScript 5)</caption>
 <tbody>
  <tr>
   <th>Attribut</th>
   <th>Type</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>Read-only</td>
   <td>Booléen</td>
   <td>État symétrique pour l'attribut ES5 [[Writable]].</td>
  </tr>
  <tr>
   <td>DontEnum</td>
   <td>Booléen</td>
   <td>État symétrique pour l'attribut ES5 [[Enumerable]].</td>
  </tr>
  <tr>
   <td>DontDelete</td>
   <td>Booléen</td>
   <td>État symétrique pour l'attribut ES5 [[Configurable]].</td>
  </tr>
 </tbody>
</table>

<h4 id="Propriétés_daccesseur">Propriétés d'accesseur</h4>

<p>Ces propriétés associent une clé avec une ou deux fonctions accesseur et mutateur qui permettent de récupérer ou d'enregistrer une valeur. Elles possèdent les attributs suivants :</p>

<table class="standard-table">
 <caption>Attributs d'une propriété d'accesseur</caption>
 <tbody>
  <tr>
   <th>Attribut</th>
   <th>Type</th>
   <th>Description</th>
   <th>Valeur par défaut</th>
  </tr>
  <tr>
   <td>[[Get]]</td>
   <td>Un objet <code>Function</code> ou <code>undefined</code></td>
   <td>La fonction qui est appelée sans argument afin de récupérer la valeur de la propriété quand on souhaite y accéder. Voir aussi la page sur <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/get"><code>get</code></a>.</td>
   <td><code>undefined</code></td>
  </tr>
  <tr>
   <td>[[Set]]</td>
   <td>Un objet <code>Function</code> ou <code>undefined</code></td>
   <td>La fonction, appelée avec un argument qui contient la valeur qu'on souhaite affecter à la valeur et qui est exécutée à chaque fois qu'on souhaite modifier la valeur. Voir aussi la page sur <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/set"><code>set</code></a>.</td>
   <td><code>undefined</code></td>
  </tr>
  <tr>
   <td>[[Enumerable]]</td>
   <td>Booléen</td>
   <td>S'il vaut <code>true</code>, la propriété sera listée dans les boucles <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...in">for...in</a></code>.</td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>[[Configurable]]</td>
   <td>Booléen</td>
   <td>S'il vaut <code>false</code>, la propriété ne pourra pas être supprimée et ne pourra pas être transformée en une propriété de données.</td>
   <td><code>false</code></td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Note :</strong> Les attributs sont généralement utilisés par le moteur JavaScript plutôt qu'explicitement dans les scripts. Il est impossible d'y accéder directement (plus d'informations sur {{jsxref("Object.defineProperty()")}}. C'est pour cela que l'attribut est décrit entre double crochets (comme dans la spécification ECMAScript) plutôt qu'entre crochets simples qui pourraient laisser penser à une propriété « classique ».</p>
</div>

<h3 id="Les_objets_«_normaux_»_et_les_fonctions">Les objets « normaux » et les fonctions</h3>

<p>Un objet JavaScript est un ensemble de correspondances entre des clés et des valeurs. Les clés sont représentées par des chaînes ou des symboles ({{jsxref("Symbol")}}). Les valeurs peuvent être de n'importe quel type. Grâce à cela, les objets peuvent, naturellement, être utilisés comme<a class="external" href="https://fr.wikipedia.org/wiki/Table_de_hachage"> tables de hachage</a>.</p>

<p>Les fonctions sont des objets classiques à la seule différence qu'on peut les appeler.</p>

<h3 id="Les_dates">Les dates</h3>

<p>Lorsqu'on souhaite représenter des dates, il est tout indiqué d'utiliser le type utilitaire natif <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date"><code>Date</code></a> de JavaScript.</p>

<h3 id="Les_collections_indexées_les_tableaux_Arrays_et_les_tableaux_typés_Typed_Arrays">Les collections indexées : les tableaux (<em>Arrays</em>) et les tableaux typés (<em>Typed Arrays</em>)</h3>

<p><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array">Les tableaux</a> (ou <em>Arrays</em> en anglais) sont des objets natifs qui permettent d'organiser des valeurs numérotées et qui ont une relation particulière avec la propriété <code>length</code>. De plus, les tableaux héritent de <code>Array.prototype</code> qui permet de bénéficier de plusieurs méthodes pour manipuler les tableaux. Par exemple, <code><a href="/fr/docs/JavaScript/Reference/Objets_globaux/Array/indexOf">indexOf</a></code> qui permet de rechercher une valeur dans le tableau ou <code><a href="/fr/docs/JavaScript/Reference/Global_Objects/Array/push">push</a></code> qui permet d'ajouter un élément au tableau. Les tableaux sont donc indiqués quand on souhaite représenter des listes de valeurs ou d'objets.</p>

<p><a href="/fr/docs/JavaScript/Tableaux_typ%C3%A9s">Les tableaux typés</a> (<em>Typed Arrays</em> en anglais) ont été ajoutés avec ECMAScript 6 et offrent une vue sous forme d'un tableau pour manipuler des tampons de données binaires. Le tableau qui suit illustre les types de données équivalents en C :</p>

<p>{{page("fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray", "Les_objets_TypedArray", "", 0, 3)}}</p>

<h3 id="Les_collections_avec_clés_Maps_Sets_WeakMaps_WeakSets">Les collections avec clés : Maps, Sets, WeakMaps, WeakSets</h3>

<p>Ces structures de données utilisent des clés pour référencer des objets. Elles ont été introduites avec ECMAScript 6. {{jsxref("Set")}} et {{jsxref("WeakSet")}} représentent des ensembles d'objets, {{jsxref("Map")}} et {{jsxref("WeakMap")}} associent une valeur à un objet. Il est possible d'énumérer les valeurs contenues dans un objet Map mais pas dans un objet WeakMap. Les WeakMaps quant à eux permettent certaines optimisations dans la gestion de la mémoire et le travail du ramasse-miettes.</p>

<p>Il est possible d'implémenter les Maps et Sets grâce à ECMAScript 5. Cependant, comme les objets ne peuvent pas être comparés (avec une relation d'ordre par exemple), la complexité obtenue pour rechercher un élément serait nécessairement linéaire. Les implémentations natives (y compris celle des WeakMaps) permettent d'obtenir des performances logarithmiques voire constantes.</p>

<p>Généralement, si on voulait lier des données à un nœud DOM, on pouvait utiliser les attributs <code>data-*</code> ou définir les propriétés à un même l'objet. Malheureusement, cela rendait les données disponibles à n'importe quel script fonctionnant dans le même contexte. Les Maps et WeakMaps permettent de gérer plus simplement une liaison « privée » entre des données et un objet.</p>

<h3 id="Les_données_structurées_JSON">Les données structurées : JSON</h3>

<p>JSON (JavaScript Object Notation) est un format d'échange de données léger, dérivé de JavaScript et utilisé par plusieurs langages de programmation. JSON permet ainsi de construire des structures de données universelles pouvant être échangées entre programmes. Pour plus d'informations, voir les pages {{Glossary("JSON")}} et {{jsxref("JSON")}}.</p>

<h3 id="Les_autres_objets_de_la_bibliothèque_standard">Les autres objets de la bibliothèque standard</h3>

<p>JavaScript possède une bibliothèque standard d'objets natifs. Veuillez lire la <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux">référence</a> pour en savoir plus sur ces objets.</p>

<h2 id="Déterminer_le_type_des_objets_grâce_à_lopérateur_typeof">Déterminer le type des objets grâce à l'opérateur <code>typeof</code></h2>

<p>L'opérateur <code>typeof</code> peut vous aider à déterminer le type d'une variable. Pour plus d'informations et sur les cas particuliers, voir la page de la référence sur <a href="/fr/docs/JavaScript/Reference/R%C3%A9f%C3%A9rence_JavaScript/Op%C3%A9rateurs/Op%C3%A9rateurs_sp%C3%A9ciaux/L'op%C3%A9rateur_typeof">cet opérateur</a>.</p>

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
   <td>{{SpecName('ES5.1', '#sec-8', 'Types')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-ecmascript-data-types-and-values', 'ECMAScript Data Types and Values')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Ajout des symboles ({{jsxref("Symbol")}}).</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-ecmascript-data-types-and-values', 'ECMAScript Data Types and Values')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a class="link-https" href="https://github.com/nzakas/computer-science-in-javascript/">Un ensemble de structures de données usuelles et d'algorithmes classiques, en JavaScript, par Nicholas Zakas</a> (en anglais)</li>
 <li><a href="https://github.com/monmohan/DataStructures_In_Javascript">Implémentations de différentes structures de données et utilitaires de recherche en JavaScript</a> (en anglais)</li>
</ul>
