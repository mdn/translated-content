---
title: Le mode strict
slug: Web/JavaScript/Reference/Strict_mode
tags:
  - ECMAScript 5
  - JavaScript
  - Reference
  - Strict Mode
translation_of: Web/JavaScript/Reference/Strict_mode
---
{{JsSidebar("More")}}

Le mode strict de [ECMAScript 5](https://www.ecma-international.org/publications/standards/Ecma-262.htm) permet de choisir une variante restrictive de JavaScript. Le mode strict n'est pas seulement un sous-ensemble de JavaScript : il possède _intentionnellement_ des sémantiques différentes du code normal. Les navigateurs ne supportant pas le mode strict exécuteront le code d'une façon légèrement différente de ceux le supportant, il ne faut donc pas compter sur le mode strict pour éviter des tests sur les navigateurs qui ne le supportent pas. Les codes en mode strict et en mode non-strict peuvent coexister, ce qui permet de réécrire les scripts en mode strict de façon incrémentale.

Le mode strict apporte quelques changements à la sémantique « normale » de JavaScript:

1.  Le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites (une exception sera levée).
2.  Le mode strict corrige les erreurs qui font qu'autrement il est difficile pour les moteurs JavaScript d'effectuer des optimisations. Le code sera donc exécuté plus rapidement en mode strict, sans changer une seule ligne si cela n'est pas nécessaire.
3.  Le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript.

Voir la page [Passer au mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode/Passer_au_mode_strict) pour plus de détails quant à la migration d'une base de code non-stricte vers une base de code compatible avec le mode strict.

> **Note :** Le mode non strict (celui actif par défaut) est parfois appelé « _sloppy mode_ » en anglais. Bien que ce ne soit pas la dénomination officielle, on la rencontre occasionnellement.

## Invoquer le mode strict

Le mode strict s'applique à des _scripts entiers_ ou à des _fonctions individuelles_. Il ne peut s'appliquer à des blocs d'instructions entourés d'accolades `{}`; essayer de l'appliquer dans ces contextes ne fera rien. Les codes présents dans {{jsxref("Objets_globaux/eval","eval()")}}, {{jsxref("Function")}}, les attributs d'événements et les chaînes passées à [`setTimeout`](/fr/docs/Web/API/WindowTimers/setTimeout), ou autres sont des scripts entiers, et invoquer le mode strict à l'intérieur de ceux-ci fonctionnera comme prévu.

### Le mode strict pour les scripts

Pour invoquer le mode strict pour un script entier, on ajoutera l'instruction exacte `"use strict";` (ou `'use strict';`) avant toutes les autres instructions.

```js
// Script entier en mode strict
"use strict";
var v = "Allo ! Je suis en mode strict !";
```

Cette syntaxe possède un piège dans lequel [est déjà tombé](https://bugzilla.mozilla.org/show_bug.cgi?id=579119) un site web connu : il n'est pas possible de concaténer du script en mode strict et du code en mode non-strict. En effet, si on concatène du code non-strict à la suite d'un code strict, tout le code sera considéré comme strict. De même si on concatène du code strict à la suite d'un code non-strict, le code entier aura l'air non-strict. Ainsi, on peut concaténer entre eux des codes stricts sans aucun problème et de même concaténer uniquement des codes non-stricts sans problème. En revanche, lorsqu'on mélange les deux, cela pose un problème. Lors d'une phase de transition, il est donc recommandé de n'activer le mode strict que fonction par fonction.

Il est aussi possible d'adopter une approche qui consiste à englober le code du script dans une fonction et à donner à cette dernière le mode strict. Ce procédé élimine le problème de concaténation mais cela signifie aussi qu'on doit exporter chaque variable globale hors de la fonction principale nouvellement créée.

### Le mode strict pour les fonctions

De même, pour activer le mode strict pour une fonction, on placera l'instruction exacte `"use strict";` (ou `'use strict';`) dans le corps de la fonction avant toute autre déclaration.

```js
function strict() {
  // Syntaxe en mode strict au niveau de la fonction
  'use strict';
  function nested() { return "Ho que oui, je le suis !"; }
  return "Allô ! Je suis une fonction en mode strict ! " + nested();
}
function notStrict() { return "Je ne suis pas strict."; }
```

### Mode strict pour les modules

ECMAScript 2015 a vu apparaître les modules JavaScript. Le code de ces modules est automatiquement en mode strict et aucune instruction n'est nécessaire pour passer dans ce mode.

```js
function maFonctionDeModule() {
  // étant dans un module, le code présent
  // ici sera d'office en mode strict
}
export default maFonctionDeModule;
```

## Différences du mode strict

Le mode strict modifie à la fois la syntaxe et le comportement à l'exécution. Les changements se déclinent généralement en trois catégories : ceux qui convertissent les fautes en erreurs (comme des erreurs de syntaxe ou les erreurs d'exécution), ceux qui simplifient comment une variable pour un nom donné est traitée, simplifiant {{jsxref("Objets_globaux/eval","eval()")}} et {{jsxref("Fonctions/arguments","arguments")}} et ceux qui permettent d'écrire plus simplement du code JavaScript pérenne qui anticipe les évolutions futures d'ECMAScript.

### Convertir les fautes en erreurs

Le mode strict change quelques fautes précédemment acceptées, en erreurs. JavaScript a été conçu pour les développeurs novices et, quelquefois, il ne crée pas d'erreur explicite pour certaines instructions qui devraient être des erreurs. Parfois cela règle un problème immédiatement, mais cela peut aussi créer d'autres erreurs, plus loin dans le code. Le mode strict traite ces fautes comme des erreurs afin qu'elles soient découvertes et rapidement traitées.

Premièrement, en mode strict, il est impossible de créer accidentellement des variables globales. En mode normal, ne pas déclarer une variable lors d'une affectation (oublier l'instruction {{jsxref("Instructions/var","var")}}) crée une nouvelle propriété sur l'objet global et le code continue de fonctionner (même si ça peut être une source de problèmes par la suite). Les affectations qui pourraient accidentellement créer des variables globales lèveront une erreur en mode strict:

```js
"use strict";
varialeMalDéclarée = 17; // lève une ReferenceError
```

Deuxièmement, le mode strict fait en sorte que les affectations qui échoueraient silencieusement lèveront aussi une exception. Par exemple, {{jsxref("Objets_globaux/NaN","NaN")}} est une variable globale en lecture seule. En mode normal, une affectation à `NaN` ne fera rien ; le développeur ne recevra aucun retour par rapport à cette faute. En mode strict, affecter une valeur quelconque à `NaN` lèvera une exception. Toute affectation qui échouera silencieusement en mode non-strict (affectation à une propriété en lecture seule, affectation à une propriété sans méthode `set`, affectation à une nouvelle propriété sur un objet [non-extensible](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/preventExtensions)) lèvera une exception en mode strict :

```js
"use strict";

// Affectation à une propriété globale en lecture seule
var undefined = 5;  // déclenche une exception TypeError
var Infinity = 5;   // déclenche une exception TypeError

// Affectation à une propriété en lecture seule
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // lève un TypeError

// Affectation à une propriété qui n'a qu'une méthode get
var obj2 = { get x() { return 17; } };
obj2.x = 5; // lève un TypeError

// Affectation d'une nouvelle propriété à un objet non-extensible
var gele= {};
Object.preventExtensions(gele);
gele.nouvelleProp = "ohé"; // lève un TypeError
```

Troisièmement, le mode strict lèvera une exception lors d'une tentative de suppression d'une propriété non-supprimable (là où cela ne produisait aucun effet en mode non strict) :

```js
"use strict";
delete Object.prototype; // lève une TypeError
```

Quatrièmement, le mode strict, avant Gecko 34, requiert que toutes les propriétés nommées dans un objet littéral soient uniques. En mode non-strict, les propriétés peuvent être spécifiées deux fois, JavaScript ne retenant que la dernière valeur de la propriété. Cette duplication en devient alors une source de confusion, surtout dans le cas où, dans une modification de ce même code, on se met à changer la valeur de la propriété autrement qu'en changeant la dernière instance. Les noms de propriété en double sont une erreur de syntaxe en mode strict :

```js
"use strict";
var o = { p: 1, p: 2 }; // !!! erreur de syntaxe
```

> **Note :** Cela n'est plus le cas avec ECMAScript 2015 ({{bug(1041128)}}).

Cinquièmement, le mode strict requiert que les noms de paramètres de fonction soient uniques. En mode non-strict, le dernier argument dupliqué cache les arguments précédents ayant le même nom. Ces arguments précédents demeurent disponibles via `arguments[i]`, ils ne sont donc pas complètement inaccessibles. Pourtant, cette cachette n'a guère de sens et n'est probablement pas souhaitable (cela pourrait cacher une faute de frappe, par exemple). Donc en mode strict, les doublons de noms d'arguments sont une erreur de syntaxe :

```js
function somme(a, a, c) { // !!! erreur de syntaxe
  "use strict";
  return a + b + c; // Ce code va planter s'il est exécuté
}
```

Sixièmement, le mode strict interdit la syntaxe octale. La syntaxe octale ne fait pas partie d'ECMAScript 5, mais elle est supportée dans tous les navigateurs en préfixant le nombre octal d'un zéro : `0644 === 420` et `"\045" === "%"`. La notation octale est supportée en utilisant le préfixe "`0o`" :

```js
let a = 0o10; // Notation octale ES2015
```

Les développeurs novices croient parfois qu'un zéro débutant un nombre n'a pas de signification sémantique, alors ils l'utilisent comme moyen d'aligner des colonnes de nombres mais ce faisant, ils changent la valeur du nombre ! La syntaxe octale est rarement utile et peut être utilisée de manière fautive, donc le mode strict le considère comme étant une erreur de syntaxe :

```js
"use strict";
var somme = 015 + // !!! erreur de syntaxe
            197 +
            142;
```

Septièmement, le mode strict, à partir d'ECMAScript 2015 interdit de définir des propriétés sur des valeurs primitives. Sans mode strict, de telles définitions sont ignorées. En activant le mode strict cela lèvera une exception {{jsxref("TypeError")}}.

```js
(function() {
"use strict";

false.true = "";         // TypeError
(14).calvados= "maison";     // TypeError
"une chaîne".de = "caractères"; // TypeError

})();
```

### Simplifier l'utilisation des variables

Le mode strict simplifie la façon dont les noms de variables sont mis en correspondance avec les définitions de variables dans le code. De nombreuses optimisations du compilateur reposent sur la capacité à dire à quel endroit la variable _X_ est stockée : cela est essentiel pour optimiser pleinement le code JavaScript. JavaScript rend parfois cette mise en correspondance impossible à réaliser avant l'exécution du code. Le mode strict élimine la plupart des cas où cela se produit, de sorte que le compilateur peut mieux optimiser le code en mode strict.

Premièrement, le mode strict interdit l'utilisation de `with`. Le problème avec `with` est que tout nom de variable à l'intérieur du bloc peut faire référence à une propriété de l'objet qui lui est passé, ou encore à une variable déclarée à l'extérieur du bloc, globale ou non, à l'exécution : il est impossible de le savoir d'avance. Le mode strict fait de `with` une erreur de syntaxe, donc il n'y a aucune chance pour qu'un nom déclaré dans un `with` fasse référence à un lieu inconnu à l'exécution :

```js
"use strict";
var x = 17;
with (obj) // !!! erreur de syntaxe
{
  // Si on n'était pas en mode strict, serait-ce var x,
  // ou serait-ce plutôt obj.x?  Il est impossible en général
  // de le dire sans faire tourner le code, donc
  // le nom ne peut pas être optimisé.
  x;
}
```

Au lieu d'utiliser `with`, on peut très bien assigner l'objet à une variable avec un nom court, puis accéder aux propriétés correspondantes à cette variable.

Deuxièmement, [`eval` en mode strict ne doit pas créer de variables dont la portée dépasse celle du `eval`](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). En mode non-strict, `eval("var x;")` crée la variable `x` dans le code appelant `eval`. Ce qui signifie qu'en général, dans une fonction contenant un appel à `eval`, tous les noms qui ne réfèrent pas à un paramètre ou une variable locale devront être mis en correspondance avec une définition de variable lors de l'exécution (puisque cet `eval` a introduit une nouvelle variable qui serait susceptible de modifier la variable externe). En mode strict, `eval` ne crée des variables que pour le code étant évalué, ainsi `eval` ne peut pas réaliser d'affectation à une variable externe ou à une variable locale :

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x");
console.log(x === 17);
console.log(evalX === 42);
```

De la même manière, si la fonction `eval` est invoquée par une expression de la forme `eval(...)` dans un code en mode strict, le code sera aussi évalué en mode strict. Le code peut déclarer explicitement le mode strict, mais il est inutile de le faire.

```js
function strict1(str) {
  "use strict";
  return eval(str); // str sera évalué en mode strict
}
function strict2(f, str) {
  "use strict";
  return f(str); // pas de eval(...) : str est strict si et seulement si il est déclaré en mode strict
}
function nonstrict(str) {
  return eval(str); // str est strict si et seulement si il est déclaré en mode strict
}

strict1("'Mode strict!'");
strict1("'use strict'; 'Mode strict!'");
strict2(eval, "'Mode non-strict.'");
strict2(eval, "'use strict'; 'Mode strict!'");
nonstrict("'Mode non-strict.'");
nonstrict("'use strict'; 'Mode strict!'");
```

Ainsi, les noms dans le code `eval` en mode strict se comportent de la même façon que les noms dans le code en mode strict n'étant pas évalués comme le résultat de `eval`.

Troisièmement, le mode strict interdit la suppression des variables déclarées. `delete name` en mode strict est une erreur de syntaxe:

```js
"use strict";
eval("var x; delete x;"); // !!! erreur de syntaxe
```

### Rendre `eval` et `arguments` plus simples

Le mode strict rend {{jsxref("Fonctions/arguments","arguments")}} et {{jsxref("Objets_globaux/eval","eval()")}} moins « étranges ». Les deux impliquent une quantité de comportements étranges dans le code en mode non-strict : `eval` afin d'ajouter et d'enlever des liaisons et pour changer les valeurs de liaisons, et `arguments` via ses propriétés indexées faisant référence à des arguments nommés. Le mode strict permet de mieux traîter `eval` et `arguments` comme des mots-clés à part entière, bien qu'une _réparation_ complète ne devrait pas arriver avant une version future d'ECMAScript.

Premièrement, les chaînes `eval` et `arguments` ne peuvent pas être utilisées comme identificateur. Tous les exemples suivants entraînent des erreurs de syntaxe :

```js
"use strict";
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function("arguments", "'use strict'; return 17;");
```

Deuxièmement, en mode strict on ne donnera pas d'alias aux propriétés de `arguments` avec les objets créées dans la fonction. En code normal, dans une fonction dont le premier argument est `arg`, modifier `arg` modifiera aussi `arguments[0]`, et vice versa (à moins qu'aucun argument ne soit fourni ou que `arguments[0]` soit supprimé). Les objets de `arguments` pour les fonctions en mode strict stockent les argument originaux, au moment où la fonction a été appelée. `arguments[i]` ne reflète pas la valeur de l'argument nommé correspondant, et vice-versa.

```js
function f(a) {
  "use strict";
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.log(pair[0] === 42);
console.log(pair[1] === 17);
```

Troisièmement, `arguments.callee` n'est plus supporté. En temps normal `arguments.callee` contient la référence de la fonction courante. Il suffit d'appeler la fonction courante par son nom si elle n'est pas anonyme. `arguments.callee` en mode strict est une propriété non supprimable qui lèvera une erreur si elle est définie ou récupérée :

```js
"use strict";
var f = function() { return arguments.callee; };
f(); // lève une TypeError
```

### « Sécuriser » JavaScript

Le mode strict permet d'écrire plus simplement du code JavaScript sûr. Certains sites web fournissent aujourd'hui des outils pour que les utilisateurs puissent écrire du JavaScript qui sera exécuté sur le site pour les autres utilisateurs. Dans un navigateur web, le JavaScript peut accéder à certaines informations privées de l'utilisateur. Il faut donc transformer le JavaScript écrit par un utilisateur externe pour que le code correspondant soit exécuté de façon sécurisée pour les autres utilisateurs. Pour ce faire, il faut effectuer des vérifications au moment de l'exécution. En effet, JavaScript est suffisamment flexible pour que vérifier du code avant l'exécution soit très complexe voire impossible. En revanche, vérifier le comportement du code lors de l'exécution a un coût sur les performances. Pour réduire ce nombre de vérifications et bénéficier de meilleures performances dans ce scénario, on peut restreindre le code qui peut être envoyé à du code en mode strict.

Tout d'abord, la valeur passée en tant que `this` à une fonction n'est pas nécessairement transformée en un objet en mode strict. Pour une fonction « normale », `this` est toujours un objet : soit l'objet fourni si la valeur fournie pour `this` était un objet, soit la valeur, transformée en un objet quand c'est un booléen, une chaîne de caractères ou un nombre. Cette valeur peut également être l'objet global si `this` vaut `null` ou `undefined` lorsqu'il est passé à la fonction. (Les fonctions {{jsxref("Function.prototype.call()")}}, {{jsxref("Function.prototype.apply()")}} ou {{jsxref("Function.prototype.bind()")}} peuvent être utilisées lorsqu'on souhaite spécifier une certaine valeur pour `this`.) Cette conversion automatique en objet a un certain coût en termes de performances mais cela peut également exposer l'objet global ce qui est dangereux dans les navigateurs : en effet, l'objet global permet d'accéder à certaines fonctionnalités qui rendraient le code non-sécurisé. Ainsi, en mode strict, la valeur `this` n'est pas transformée en un objet et si elle n'est pas définie, `this` sera {{jsxref("undefined")}} :

```js
"use strict";
function fun() { return this; }
console.log(fun() === undefined);
console.log(fun.call(2) === 2);
console.log(fun.apply(null) === null);
console.log(fun.call(undefined) === undefined);
console.log(fun.bind(true)() === true);
```

Cela signifie entre autres qu'il est impossible de faire référence à l'objet `window` du navigateur grâce à `this` au sein d'une fonction en mode strict.

Ensuite, en mode strict, il n'est plus possible de remonter la pile d'appels grâce aux extensions communément implémentées. Par exemple, dans du code non strict, lorsqu'une fonction `fun` est en train d'être appelée, `fun.caller` fait référence à la fonction qui a appelé `fun` la dernière et `fun.arguments` correspond à l'objet `arguments` pour cet appel à `fun`. Ces deux extensions posent problème pour la sécurité car elles permettent au code d'accéder à des fonctions privilégiées et à leurs arguments (éventuellement non sécurisés). Si `fun` est passée en mode strict, `fun.caller` et `fun.arguments` seront des propriétés non-supprimables qui lèveront une exception pour chaque tentative d'accès ou de modification :

```js
function restricted()
{
  "use strict";
  restricted.caller;    // lève une TypeError
  restricted.arguments; // lève une TypeError
}
function privilegedInvoker()
{
  return restricted();
}
privilegedInvoker();
```

Enfin, pour une fonction en mode strict, `arguments` ne permet pas d'accéder aux variables passées à la fonction lors de l'appel. Dans certaines anciennes implémentations d'ECMAScript, `arguments.caller` était un objet dont les propriétés étaient des alias pour les variables passées à la fonction. Cela entraîne [un problème de sécurité](https://stuff.mit.edu/iap/2008/facebook/) car cela empêche de cacher des valeurs privilégiées via l'abstraction des fonctions. Cela empêche aussi de nombreuses optimisations. Pour ces raisons, les navigateurs récents n'implémentent plus cet objet. Cependant, étant donné sa présence historique, en mode strict, `arguments.caller` est une propriété non-supprimable qui déclenche une exception pour toute tentative d'accès ou de modification :

```js
"use strict";
function fun(a, b)
{
  "use strict";
  var v = 12;
  return arguments.caller; // lève une TypeError
}
fun(1, 2); // n'expose pas v (ni a ou b)
```

### Prévoir la suite : les prochaines versions d'ECMAScript

Les prochaines versions d'ECMAScript inclueront certainement une nouvelle syntaxe, de nouveaux mots-clés. Le mode strict d'ECMAScript 5 applique certaines restrictions qui permettent de prévoir les transitions à venir lorsque des changements auront lieu. Il sera ainsi plus simple de modifier le code si les erreurs relatives à une nouvelle syntaxe sont mises en avant grâce au mode strict.

Premièrement, en mode strict, une liste d'identifiants fait partie des mots-clés réservés. Ces termes sont : `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, et `yield`. En mode strict, il est donc impossible de nommer des variables ou des arguments avec ces noms.

```js
function package(protected) { // !!!
  "use strict";
  var implements; // !!!

  interface: // !!!
  while (true) {
    break interface; // !!!
  }

  function private() { } // !!!
}
function fun(static) { 'use strict'; } // !!!
```

Deux défauts liés à Mozilla Firefox : tout d'abord si votre code est en JavaScript 1.7 ou supérieur (par exemple pour du code qui concerne le chrome dans les extensions ou lorsqu'on utilise les balises `<script type="">`) et qu'il est en mode strict, `let` et `yield` fonctionnent de la façon dont ils fonctionnaient originellement au sein de Firefox. En revanche, pour du code strict utilisé sur une page web et chargé avec `<script src="">` ou `<script>...</script>`, on ne pourra pas utiliser `let`/`yield` comme identifiants. Ensuite, bien qu'ES5 réserve les mots-clés `class`, `enum`, `export`, `extends`, `import`, et `super` pour le mode strict et le mode non strict, les versions antérieures à Firefox 5 ne réservaient ces mots-clés que pour le mode strict.

Deuxièmement, [le mode strict interdit les déclarations de fonctions qui ne sont pas au niveau le plus haut d'un script ou d'une fonction](https://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/). En mode normal, il est possible de déclarer une fonction n'importe où avec une déclaration de fonction (voir {{jsxref("Instructions/function","function")}}). Ceci ne fait pas partie de la spécification ECMAScript et est donc une extension. [Le mode strict interdit cela](https://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls), ce qui permet de lever toute ambiguité par rapport aux futures spécifications ECMAScript sur cette fonctionnalité.  On notera que les instructions de fonctions écrites en dehors du plus haut niveau sont autorisées avec ES2015 :

```js
"use strict";
if (true) {
  function f() { } // !!! erreur de syntaxe
  f();
}

for (var i = 0; i < 5; i++) {
  function f2() { } // !!! erreur de syntaxe
  f2();
}

function truc() { // OK
  function bidule() { } // OK également
}
```

Cette interdiction n'est pas, à proprement parler, liée au mode strict. En effet, de telles déclarations de fonctions ne font pas partie d'ES5. Cependant, c'est un choix du comité ECMAScript que cette interdiction soit implémentée.

## Le mode strict dans les navigateurs

Désormais, l'ensemble des navigateurs majeurs implémentent le mode strict. Cependant, il existe toujours un certain nombre de disparités et certains navigateurs actuels ou avec leurs anciennes versions ne supportent pas le mode strict. Le mode strict modifie des éléments de sémantique de JavaScript ; faire appel au mode strict pour des navigateurs qui ne le supportent pas peut donc entraîner des erreurs indésirables. Pour cette raison, il faut faire attention à la façon dont on exécute du code strict et bien tester ce code sur l'ensemble des navigateurs : ceux qui supportent le mode strict comme ceux qui ne supportent pas ce mode.

## Spécifications

| Spécification                                                                                                                                                                                                                 | État                         | Commentaires                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-10.1.1', 'Strict Mode Code')}} {{SpecName('ES5.1', '#sec-C', 'Strict mode restriction and exceptions')}}                                                 | {{Spec2('ES5.1')}}     | Définition initiale. Voir aussi : [les restrictions du mode strict et les exceptions](https://www.ecma-international.org/ecma-262/5.1/#sec-C) |
| {{SpecName('ES2015', '#sec-strict-mode-code', 'Strict Mode Code')}} {{SpecName('ES2015', '#sec-strict-mode-of-ecmascript', 'Strict mode restriction and exceptions')}} | {{Spec2('ES2015')}}     | [Les restrictions du mode strict et les exceptions](https://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-of-ecmascript)           |
| {{SpecName('ESDraft', '#sec-strict-mode-code', 'Strict Mode Code')}}                                                                                                                                  | {{Spec2('ESDraft')}} | [Les restrictions du mode strict et les exceptions](https://tc39.github.io/ecma262/#sec-strict-mode-of-ecmascript)                            |

## Voir aussi

- [Where's Walden? » New ES5 strict mode support: now with poison pills!](https://whereswalden.com/2010/09/08/new-es5-strict-mode-support-now-with-poison-pills/) (billet en anglais)
- [Where's Walden? » New ES5 strict mode requirement: function statements not at top level of a program or function are prohibited](https://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/) (billet en anglais)
- [Where's Walden? » New ES5 strict mode support: new vars created by strict mode eval code are local to that code only](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/) (billet en anglais)
- [John Resig - ECMAScript 5 Strict Mode, JSON, and More](https://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/) (billet en anglais)
- [ECMA-262-5 in detail. Chapter 2. Strict Mode.](https://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/) (billet en anglais)
- [Tableau de compatibilité pour le mode strict](https://kangax.github.io/compat-table/es5/#Strict_mode) (Kangax)
- [Passer au mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode/Passer_au_mode_strict)
