---
title: let
slug: Web/JavaScript/Reference/Statements/let
tags:
  - ECMAScript 2015
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/let
original_slug: Web/JavaScript/Reference/Instructions/let
---
{{jsSidebar("Statements")}}

L'instruction **`let`** permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.

{{EmbedInteractiveExample("pages/js/statement-let.html")}}

## Syntaxe

```js
let var1 [= valeur1] [, var2 [= valeur2]] [, …, varN [= valeurN]];
```

### Paramètres

- `var1`, `var2`, …, `varN`
  - : Le nom de la ou des variables. Ces noms doivent être des identifiants JavaScript valides.
- `valeur1`, `valeur2`, …, `valeurN`{{optional_inline}}
  - : Pour chaque variable déclaré, on peut indiquer, de façon optionnelle, sa valeur initiale. Ces valeurs peuvent être n'importe quelle expression légale.

## Description

`let` permet de déclarer des variables dont la portée est limitée à celle du [bloc](/fr/docs/Web/JavaScript/Reference/Instructions/bloc) dans lequel elles sont déclarées. Le mot-clé {{jsxref("Instructions/var","var")}}, quant à lui, permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction).

Une autre différence entre `let` et `var` est la façon dont la variable est initialisée : pour `let`, la variable est initialisée à l'endroit où le parseur évalue son contenu (cf. ci-après).

À l'instar de {{jsxref("instructions/const", "const")}}, `let` ne crée pas de propriété sur l'objet {{domxref("window")}} quand les variables sont déclarées au niveau global.

L'origine du nom `let` est décrite [dans cette réponse (en anglais)](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri).

### Les portées de bloc avec `let`

Le mot-clé `let` permet de définir des variables au sein d'un bloc et des blocs qu'il contient. `var` permet quant à lui de définir une variable dont la portée est celle de la fonction englobante.

```js
if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // c'est la même variable !
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // c'est une variable différente
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

### Une meilleure lisibilité pour les fonctions internes

`let` peut parfois permettre de rendre le code plus lisible lorsqu'on utilise des fonctions internes.

```js
var list = document.getElementById("list");

for (let i = 1; i <= 5; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Élément " + i));

  item.onclick = function (ev) {
    console.log("Clic sur l'élément " + i + ".");
  };
  list.appendChild(item);
}

// Pour obtenir le même effet avec var
// il aurait fallu créer un contexte différent
// avec une fermeture (closure) pour la valeur

for (var i = 1; i <= 5; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Item " + i));

  (function(i) {
    item.onclick = function(ev) {
      console.log("Item " + i + " a reçu un clic.");
    };
  })(i);
  list.appendChild(item);
}
```

Dans l'exemple précédent, cela fonctionne comme on l'attend car les cinq instances de la fonction anonyme sont liées à cinq instances différentes de `i`. Si on remplace `let` par {{jsxref("Instructions/var","var")}}, on n'obtiendra pas l'effet escompté car on aura une même variable pour cette portée `i=6` (au lieu de 5 différentes).

#### Règles de portées

Les variables déclarées avec `let` appartiennent à la portée du bloc dans lequel elles sont définies et indirectement aux portées des blocs de ce bloc. D'une certaine façon `let` fonctionne comme `var`, la seule différence dans cette analogie est que `let` fonctionne avec les portées de bloc et `var` avec les portées des fonctions :

```js
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // c'est la même variable !
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // c'est une variable différente
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
```

Au niveau le plus haut (la portée globale), `let` crée une variable globale alors que `var` ajoute une propriété à l'objet global :

```js
var x = 'global';
let y = 'global2';
console.log(this.x); // "global"
console.log(this.y); // undefined
console.log(y);      // "global2"
```

### Émuler le fonctionnement des interfaces privées

En utilisant l'instruction `let` avec [des constructeurs](/fr/docs/Glossaire/Constructeur), on peut créer des _interfaces privées_ sans avoir à utiliser [de fermetures](/fr/docs/Web/JavaScript/Closures) :

```js
var Truc;

{
  let porteePrivee = new WeakMap();
  let compteur = 0;

  Truc = function() {
    this.unePropriete = 'toto';

    porteePrivee.set(this, {
      cachee: ++compteur,
    });
  };

  Truc.prototype.montrerPublique = function() {
    return this.unePropriete;
  };

  Truc.prototype.montrerPrivee = function() {
    return porteePrivee.get(this).cachee;
  };
}

console.log(typeof porteePrivee);
// "undefined"

var truc = new Truc();

console.log(truc);
// Truc {unePropriete: "toto"}

truc.montrerPublique();
// "toto"

truc.montrerPrivee();
// 1
```

Cette technique permet d'obtenir un état privé « statique ». Ainsi, dans l'exemple qui précède, toutes les instances de `Truc` partageront la même `portéePrivée`.
Il était possible d'obtenir un tel isolement avec `var` mais il fallait passer par des fonctions isolées (généralement des fonctions immédiatement appelées (_IIFE_)).

### Zone morte temporaire (_Temporal Dead Zone_ / TDZ)  et les erreurs liées à `let`

Lorsqu'on redéclare une même variable au sein d'une même portée de bloc, cela entraîne une exception {{jsxref("SyntaxError")}}.

```js example-bad
if (x) {
  let toto;
  let toto; // SyntaxError
}
```

Avec ECMAScript 2015 (ES6), `let` **remontera** (_hoisting_) la déclaration variable au début de la portée (au début du bloc) mais pas l'initialisation. Si on fait référence à une variable dans un bloc avant la déclaration de celle-ci avec `let`, cela entraînera une exception {{jsxref("ReferenceError")}}. En effet, la variable est placée dans une « zone morte temporaire » entre le début du bloc et le moment où la déclaration est traitée. Autrement dit, la déclaration est bien remontée mais la variable ne peut pas être utilisée tant que l'affectation (qui n'est pas remontée) n'a pas été effectuée.

```js example-bad
function faire_quelque_chose() {
  console.log(truc); // undefined
  console.log(toto); // ReferenceError
  let toto = 2;
  var truc = 1;
}
```

Il est possible d'obtenir des erreurs au sein de l'instruction {{jsxref("Instructions/switch")}}. En effet, il y a un seul bloc implicite pour cette instruction.

```js example-bad
switch (x) {
  case 0:
    let toto;
    break;

  case 1:
    let toto; // SyntaxError for redeclaration.
    break;
}
```

Par contre, si on ajoute une instruction de bloc dans la clause `case`, cela créera une nouvelle portée et empêchera l'erreur :

```js
let x = 1;

switch(x) {
  case 0: {
    let toto;
    break;
  }
  case 1: {
    let toto;
    break;
  }
}
```

### Autres situations

Lorsqu'on utilise `let` dans un bloc, sa portée est limitée à celle du bloc. On notera ici la différence avec `var` dont la portée est celle de la fonction où il est utilisé.

```js
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // la portée est la portée globale
  let b = 22; // la portée est celle du bloc if

  console.log(a);  // 11
  console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2
```

Cependant, la combinaison utilisée ci-après déclenchera une exception [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/SyntaxError) car la déclaration avec `var` est remontée en haut du bloc et il y a donc une redéclaration implicite de la variable (également utilisée avec `let`).

```js example-bad
let x = 1;

if (true) {
  var x = 2; // SyntaxError liée à la redéclaration
}
```

### La zone morte temporaire et `typeof`

Si on utilise `typeof` sur des variables non déclarées ou qui valent {{jsxref("undefined")}}, on obtiendra la valeur `undefined`. Mais si on utilise `typeof` sur une variable au sein de la zone morte temporaire de cette variable, cela déclenchera une {{jsxref("ReferenceError")}} :

```js
console.log(typeof variableNonDeclaree); // affiche 'undefined'

console.log(typeof i); // ReferenceError
let i = 10;
```

### Autre exemple lié à la zone morte temporaire et aux portées lexicales

Dans l'exemple qui suit, dans l'expression `toto + 55`, l'identifiant `toto` fait référence à la variable du bloc courant et non à celle qui est déclarée au dessus et qui a la valeur 33. Dans l'instruction `let toto = (toto + 55);` l'instruction est bien remontée mais l'endroit où on utilise `toto` (dans le fragment `(toto + 55`)) est toujours dans la zone morte temporaire car `toto` n'a pas encore été affecté.

```js example-bad
function test(){
  var toto = 33;
  if (true) {
    let toto = (toto + 55); // ReferenceError: can't access lexical declaration `toto` before initialization
  }
}
test();
```

Si on utilise `let` avec un nom de variable qui est le même que celui de l'argument passé à la fonction, on aura une erreur due à la confusion des portées :

```js example-bad
function go(n) {
  for (let n of n.a){ // ReferenceError: can't access lexical declaration `n' before initialization
    console.log(n);
  }
}
go({a:[1, 2, 3]});
```

### Les variables déclarées avec `let` et les boucles `for`

Le mot-clé `let` permet de lier des variables localement dans la portée des boucles for. Contrairement au mot-clé var qui lui rend les variables visibles depuis l'ensemble de la fonction qui contient la boucle.

```js
var a = 0;
for ( let i = a; i < 10; i++ ) {
  console.log(i);
}
```

#### Règles de portées

```js
for (let expr1; expr2; expr3) instruction
```

Dans cet exemple, `expr2`, `expr3`, et `instruction` sont contenues dans un bloc implicite qui contient la variable de bloc local déclarée avec `let expr1`.

## Exemples

### `let` / `var`

Lorsqu'il est utilisé dans un bloc, `let` permet de limiter la portée de la variable à ce bloc. _var_ quant à lui limite la portée de la variable à la fonction.

```js
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // La portée est celle du bloc if
  var b = 1; // La portée est celle interne à la fonction

  console.log(a);  // 4
  console.log(b);  // 1
}

console.log(a); // 5
console.log(b); // 1
```

### `let` utilisé dans les boucles

Le mot-clé let permet de lier des variables à la portée de la boucle plutôt qu'à celle de la fonction (avec `var`) :

```js
for (let i = 0; i<10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // i n'est pas défini
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                                                       |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#sec-let-and-const-declarations', 'Let and Const Declarations')}} | {{Spec2('ES2015')}}     | Définition initiale. Cette définition n'inclue pas les expressions et blocs `let`. |
| {{SpecName('ESDraft', '#sec-let-and-const-declarations', 'Let and Const Declarations')}} | {{Spec2('ESDraft')}} |                                                                                    |

## Compatibilité des navigateurs

{{Compat("javascript.statements.let")}}

## Voir aussi

- {{jsxref("Instructions/var","var")}}
- {{jsxref("Instructions/const","const")}}
- [ES6 en détails : `let` et `const`](https://tech.mozfr.org/post/2015/08/06/ES6-en-details-%3A-let-et-const)
- [Changements liés à `let` et `const` dans Firefox 44 (en anglais)](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)
- [Le chapitre de _You Don't Know JS_ sur la portée des fonctions et des blocs](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md) (en anglais)
- [StackOverflow : qu'est-ce que la zone morte temporaire ?](https://stackoverflow.com/a/33198850/1125029)
- [StackOverflow : quelle est la différence entre `let` et `var` ?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable)
