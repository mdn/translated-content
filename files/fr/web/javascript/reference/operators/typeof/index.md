---
title: L'opérateur typeof
slug: Web/JavaScript/Reference/Operators/typeof
translation_of: Web/JavaScript/Reference/Operators/typeof
original_slug: Web/JavaScript/Reference/Opérateurs/L_opérateur_typeof
browser-compat: javascript.operators.typeof
---
{{jsSidebar("Operators")}}

L'opérateur **`typeof`** renvoie une chaîne qui indique le type de son opérande.

{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}

## Syntaxe

L'opérateur `typeof` est suivi de son opérande&nbsp;:

```js
typeof operande
typeof(operande)
```

### Paramètre

- `operande`
  - : Une expression représentant l'objet ou la valeur [primitive](/fr/docs/Glossary/Primitive) dont on souhaite obtenir le type.

## Description

Le tableau qui suit liste les résultats possibles de l'opérateur `typeof`. Pour plus d'informations sur les types et valeurs primitives en JavaScript, voir la page sur [les types et structures de données JavaScript](/fr/docs/Web/JavaScript/Data_structures).

| Type                                                                                              | Résultat                   |
| ------------------------------------------------------------------------------------------------- | -------------------------- |
| [indéfini](/fr/docs/Glossary/undefined)                                                           | `"undefined"`              |
| [nul](/fr/docs/Glossary/Null)                                                                     | `"object"` (voir ci-après) |
| [booléen](/fr/docs/Glossary/Boolean)                                                              | `"boolean"`                |
| [nombre](/fr/docs/Glossary/Number)                                                                | `"number"`                 |
| [grand entier (nouveauté d'ECMAScript 2020)](/fr/docs/Glossary/BigInt)                            | `"bigint"`                 |
| [chaîne de caractère](/fr/docs/Glossary/String)                                                   | `"string"`                 |
| [symbole (nouveauté d'ECMAScript 6 / 2015)](/fr/docs/Glossary/Symbol)                             | `"symbol"`                 |
| [objet Function (au sens ECMA-262, un objet qui implémente [[Call]])](/fr/docs/Glossary/Function) | `"function"`               |
| Tout autre objet                                                                                  | `"object"`                 |

## Exemples

### Usage simple

```js
// Pour les nombres
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Bien que littéralement ce soit "Not-A-Number"…
typeof Number('1') === 'number'; // Number essaie de convertir l'argument en nombre
typeof Number('chaussure') === 'number'; // cela vaut également pour les valeurs qui ne peuvent pas être converties


// Grand entier
typeof 42n === 'bigint';

// Les chaînes de caractères
typeof "" === 'string';
typeof "bla" === 'string';
typeof `gabarit de chaîne` === 'string';
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
typeof Symbol('toto') === 'symbol'
typeof Symbol.iterator === 'symbol'

// Indéfini
typeof undefined === 'undefined';
typeof variableDeclareeMaisIndefinie === 'undefined';
typeof variableNonDeclaree === 'undefined';

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

### `typeof null`

```js
// Cela est valable depuis les commencements de JavaScript
typeof null === 'object';
```

Lors de la première implémentation de JavaScript, les valeurs JavaScript étaient représentées avec une étiquette de type et une valeur. Pour les objets, l'étiquette de type était 0. `null` était représenté par la valeur NULL (0x00 pour la plupart des plates-formes). Par conséquent, l'étiquette de type de `null` valait 0, d'où le comportement de `typeof` ([source](https://www.2ality.com/2013/10/typeof-null.html)).

Un correctif fut proposé pour ECMAScript, mais il fut [refusé](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). Avec cette version, on aurait eu `typeof null === 'null'`.

### Utiliser l'opérateur `new`

```js
// Tous les constructeurs doivent être employés
// avec le mot-clé "new"
let maChaine = new String("toto");
let monNombre = new Number(100);

typeof maChaine;  // renverra "object"
typeof monNombre; // renverra "object"

// En revanche avec le constructeur Function,
// on aura :
let maFonction = new Function();
typeof maFonction; // renverra "function"
```

### Utilisation des parenthèses

```js
// Les parenthèses peuvent s'avérer utile pour
// déterminer le type de données d'une expression
// complète

let maDonnee = 99;

typeof maDonnee + ' Toto';   // renverra 'number Toto'
typeof (maDonnee + ' Toto'); // renverra 'string'
```

### Expressions rationnelles

Les expressions rationnelles qu'on peut appeler directement furent parfois ajoutées de façon non standard dans certains navigateurs.

```js
typeof /s/ === 'function'; // Chrome 1 à 12 : Non conforme à ECMAScript 5.1
typeof /s/ === 'object';   // À partir de Firefox 5 : Conforme à ECMAScript 5.1
```

### Erreurs et zone morte temporaire (_Temporal Dead Zone_ / TDZ)

Avant ECMAScript 2015 (ES6), `typeof` retournait toujours une chaîne de caractères, quel que soit l'opérande utilisé. On ne pouvait pas avoir d'erreur en utilisant `typeof`.

Avec l'apparition des opérateurs [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let) et [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const), si on utilise `typeof` sur des variables déclarées avec ces opérateurs (ou avec une classe) avant leur déclaration, cela déclenchera une erreur [`ReferenceError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError). Si on utilise `typeof` sur une variable déclarée avec `var` avant la déclaration, cela renverra `undefined`. Les variables déclarées avec `let` et `const` sont en fait placées dans une *[zone morte temporaire](/fr/docs/Web/JavaScript/Reference/Statements/let)* entre le début du bloc et leur initialisation et dans cette zone, tout accès à la variable produit une erreur.

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

Tous les navigateurs actuels exposent un objet non-standard [`document.all`](/fr/docs/Web/API/document/all) dont le type est `undefined`.

```js
typeof document.all === "undefined";
```

Bien que la spécification requière que les objets exotiques aient des types différents, ces types doivent être des chaînes différentes des chaînes existantes pour les objets standards. À ce titre, le type de `document.all` représente une violation « volontaire » du standard ECMAScript original.

## Spécifications

{{Specifications}}
## Compatibilité des navigateurs

{{Compat}}

## Notes spécifiques à IE

Pour les versions 6, 7 et 8 d'Internet Explorer, les objets de l'environnement hôte sont des objets et non des fonctions. Par exemple, on aura :

```js
typeof alert === 'object'
```

Certaines propriétés non-standard d'IE renvoient d'autres valeurs ([tc39/ecma262#1440
(commentaire)](https://github.com/tc39/ecma262/issues/1440#issuecomment-461963872)):

```js
typeof window.external.AddSearchProvider === "unknown";
typeof window.external.IsSearchProviderInstalled === "unknown";
```

## Voir aussi

- L'opérateur [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof)
- [À propos du non-respect volontaire du standard avec le type de `document.all`](https://github.com/tc39/ecma262/issues/668)
