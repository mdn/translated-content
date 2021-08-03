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
{{jsSidebar("Operators")}}

L'opérateur **`typeof`** renvoie une chaîne qui indique le type de son opérande.

{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}

## Syntaxe

L'opérateur `typeof` est suivi de son opérande :

    typeof operande

### Paramètre

`operande` est une expression qui représente la valeur dont on souhaite obtenir le type.

## Description

Le tableau qui suit liste les résultats possibles de l'opérateur `typeof`. Pour plus d'informations sur les types et valeurs primitives en JavaScript, voir la page sur [les types et structures de données JavaScript](/fr/docs/Web/JavaScript/Structures_de_données#Les_valeurs_primitives).

| Type                                                                             | Résultat                                    |
| -------------------------------------------------------------------------------- | ------------------------------------------- |
| indéfini                                                                         | `"undefined"`                               |
| nul                                                                              | `"object" `(voir ci-après)                  |
| booléen                                                                          | `"boolean"`                                 |
| nombre                                                                           | `"number"`                                  |
| grand entier                                                                     | `"bigint"`                                  |
| chaîne de caractère                                                              | `"string"`                                  |
| symbole (nouveauté d'ECMAScript 6 / 2015)                                        | `"symbol"`                                  |
| objet de l'environnement (fourni par l'environnement dans lequel est utilisé JS) | _Résultat différent selon l'implémentation_ |
| Objet Function (au sens ECMA-262, un objet qui implémente [[Call]])              | `"function"`                                |
| Tout autre objet                                                                 | `"object"`                                  |

## Exemples

```js
// Pour les nombres
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

// Utiliser la méthode Array.isArray ou Object.prototype.toString.call
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
```

## Informations supplémentaires

### `null`

```js
// Cela est valable depuis les commencements de JavaScript
typeof null === 'object';
```

Lors de la première implémentation de JavaScript, les valeurs JavaScript étaient représentées avec une étiquette de type et une valeur. Pour les objets, l'étiquette de type était 0. `null` était représenté par la valeur NULL (0x00 pour la plupart des plates-formes). Par conséquent, l'étiquette de type de `null` valait 0, d'où le comportement de `typeof` ([source](https://www.2ality.com/2013/10/typeof-null.html)).

Un correctif fut proposé pour ECMAScript mais il fut [refusé](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). Avec cette version, on aurait eu `typeof null === 'null'`.

### Utiliser l'opérateur `new`

```js
// Tous les constructeurs doivent être employés
// avec le mot-clé "new"
var maChaine = new String("toto");
var monNombre = new Number(100);

typeof maChaine;  // renverra "object"
typeof monNombre; // renverra "object"

// En revanche avec le constructeur Function,
// on aura :
var maFonction = new Function();
typeof maFonction; // renverra "function"
```

### Utilisation des parenthèses

```js
// Les parenthèses peuvent s'avérer utile pour
// déterminer le type de données d'une expression
// complète

var maDonnee = 99;

typeof maDonnee + 'Toto';   // renverra 'number Toto'
typeof (maDonnee + 'Toto'); // renverra 'string'
```

### Expressions rationnelles

Les expressions rationnelles qu'on peut appeler directement furent parfois ajoutées de façon non standard dans certains navigateurs.

```js
typeof /s/ === 'function'; // Chrome 1 à 12 : Non conforme à ECMAScript 5.1
typeof /s/ === 'object';   // À partir de Firefox 5 : Conforme à ECMAScript 5.1
```

### Zone morte temporaire (_Temporal Dead Zone_ / TDZ)

Avant ECMAScript 2015 (ES6), `typeof` retournait toujours une chaîne de caractères, quel que soit l'opérande utilisé. On ne pouvait pas avoir d'erreur en utilisant `typeof`.

Avec l'apparition des opérateurs [`let`](/fr/docs/Web/JavaScript/Reference/Instructions/let) et [`const`](/fr/docs/Web/JavaScript/Reference/Instructions/const), si on utilise `typeof` sur des variables déclarées avec ces opérateurs (ou avec une classe) avant leur déclaration, cela déclenchera une erreur {{jsxref("ReferenceError")}}. Si on utilise `typeof` sur une variable déclarée avec `var` avant la déclaration, cela renverra `undefined`. Les variables déclarées avec `let` et `const` sont en fait placées dans une *[zone morte temporaire ](</fr/docs/Web/JavaScript/Reference/Instructions/let#Zone_morte_temporaire_(Temporal_Dead_Zone_TDZ)_et_les_erreurs_liées_à_let>)*entre le début du bloc et leur initialisation et dans cette zone, tout accès à la variable produit une erreur.

```js
typeof variableGlobaleNonDeclaree === "undefined";

typeof variableLet; // ReferenceError
let variableLet;

typeof constante;   // ReferenceError
const constante = "coucou";

typeof maClasse; // ReferenceError
class maClasse{};
```

### Exceptions

Tous les navigateurs actuels exposent un objet non-standard {{domxref("document.all")}} dont le type est `"undefined"`.

```js
typeof document.all === "undefined";
```

Bien que la spécification requière que les objets exostiques aient des types différents, ces types doivent être des chaînes différentes des chaînes existantes pour les objets standards. À ce titre, le type de `document.all` représente une violation « volontaire » du standard ECMAScript original.

## Spécifications

| Spécification                                                                                | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-typeof-operator', 'Opérateur typeof')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-typeof-operator', 'Opérateur typeof')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.4.3', 'Opérateur typeof')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES3', '#sec-11.4.3', 'Opérateur typeof')}}                     | {{Spec2('ES3')}}         |                                                       |
| {{SpecName('ES1', '#sec-11.4.3', 'Opérateur typeof')}}                     | {{Spec2('ES1')}}         | Définition initiale, implémentée avec JavaScript 1.1. |

## Compatibilité des navigateurs

{{Compat("javascript.operators.typeof")}}

## Notes spécifiques à IE

Pour les versions 6, 7 et 8 d'Internet Explorer, les objets de l'environnement hôte sont des objets et non des fonctions. Par exemple, on aura :

```js
typeof alert === 'object'
```

## Voir aussi

- L'opérateur {{jsxref("Opérateurs/instanceof","instanceof")}}
- [Discussion es-discuss sur l'évolution de `typeof` avec ECMAScript 2015 et `let`](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15)
- [À propos du non-respect volontaire du standard avec le type de `document.all`](https://github.com/tc39/ecma262/issues/668)
