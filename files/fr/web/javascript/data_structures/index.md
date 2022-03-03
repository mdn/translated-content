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
{{jsSidebar("More")}}

Les langages de programmation disposent de structures de données natives. Selon les langages, les structures mises à disposition peuvent être différentes. Dans cet article, on listera les structures de données natives en JavaScript. On détaillera leurs propriétés et les façons de les utiliser voire de les combiner. Dans certains cas, on comparera ces structures avec celles d'autres langages.

## Un typage dynamique

JavaScript est un langage dont le typage est _faible_ et _dynamique_. Cela signifie qu'il n'est pas nécessaire de déclarer le type d'une variable avant de l'utiliser. Le type de la variable sera automatiquement déterminé lorsque le programme sera exécuté. Cela signifie également que la même variable pourra avoir différents types au cours de son existence :

```js
var toto = 42;       // toto est un nombre
    toto = "machin"; // toto est une chaîne de caractères désormais
    toto = true;     // et maintenant, toto est un booléen
```

## Les types de données

Le dernier standard ECMAScript définit 8 types de données :

- Sept types de données {{Glossary("Primitive", "primitifs")}}:

  - {{Glossary("Boolean", "Booléen")}}
  - {{Glossary("Null")}}
  - {{Glossary("Undefined")}}
  - {{Glossary("Number", "Nombre")}}
  - {{Glossary("BigInt")}} (proposition pour ES2020)
  - {{Glossary("String", "Chaîne de caractères")}} (String)
  - {{Glossary("Symbol", "Symbole")}} (type introduit avec ECMAScript 6)

- et le type {{Glossary("Object", "Objet")}}

## Les valeurs primitives

Tous les types, sauf les objets, définissent des valeurs immuables (qu'on ne peut modifier). Ainsi, contrairement au C, les chaînes de caractères sont immuables en JavaScript. Les valeurs immuables pour chacun de ces types sont appelées « valeurs primitives ».

### Le type booléen

Un booléen représente le résultat d'une assertion logique et peut avoir deux valeurs : `true` (pour le vrai logique) et `false` (pour le faux logique) (voir {{jsxref("Boolean")}} pour plus de détails sur la représentation objet de ce type).

### Le type nul

Le type nul ne possède qu'une valeur : `null`. Voir {{jsxref("null")}} et {{Glossary("Null")}} pour plus d'informations.

### Le type indéfini

Une variable à laquelle on n'a pas affecté de valeur vaudra `undefined`. Voir {{jsxref("undefined")}} et {{Glossary("Undefined")}} pour plus d'informations.

### Le type nombre

ECMAScript possède deux types numériques natifs : `Number` et `BigInt` (cf. ci-après)

Le type `Number` est géré pour représenter les nombres : [les nombres flottants à précision double, représentés sur 64 bits, selon le format IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) (les nombres compris entre -(2^53 -1) et 2^53 -1). **Il n'y a donc pas de type à part pour représenter les nombres entiers**. En plus de sa capacité à représenter les nombres décimaux, le type nombre possède trois valeurs symboliques : `+Infinity`, `-Infinity`, et {{jsxref("NaN")}} (_Not A Number_ en anglais, qui signifie « n'est pas un nombre »).

Afin de vérifier que des valeurs sont supérieures/inférieures à `+/-Infinity`, on peut utiliser les constantes {{jsxref("Number.MAX_VALUE")}} et {{jsxref("Number.MIN_VALUE")}}. À partir d'ECMAScript 6, on peut également vérifier si un nombre est/sera compris dans l'intervalle de représentation pour les nombres flottants à précision double en utilisant la méthode {{jsxref("Number.isSafeInteger()")}} ainsi que les valeurs {{jsxref("Number.MAX_SAFE_INTEGER")}} et {{jsxref("Number.MIN_SAFE_INTEGER")}}. En dehors de cet intervalle et pour JavaScript, on considère que les nombres ne sont plus représentés correctement. On manipule alors une approximation de la valeur sous forme d'un nombre à virgule flottante à précision double.

Le type nombre possède un seul entier pouvant être représenté de deux façons différentes : 0 qui peut être représenté par -0 et +0. ("0" étant un alias pour +0). En pratique, cela n'a généralement aucun impact et `+0 === -0` vaut bien `true`. Malgré tout, on peut observer certaines différences quand on divise par zéro :

```js
42 / +0
// Infinity

42 / -0
// -Infinity
```

Dans la plupart des cas, un nombre représente sa propre valeur, malgré tout les [opérateurs binaires](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires) peuvent être utilisés pour représenter plusieurs valeurs booléennes grâce à un seul nombre (on parle alors de [masque de bits](https://fr.wikipedia.org/wiki/Masquage)). Ceci est généralement une mauvaise pratique (lisibilité, maintenabilité) bien que ça puisse être utile lorsqu'on souhaite minimiser le nombre de bits qu'on utilise.

### Le type `BigInt`

Le type {{jsxref("BigInt")}} permet de représenter des entiers avec une précision arbitraire. Avec ce type, on peut donc manipuler des entiers plus grands que ceux représentables avec _Number_. Pour créer un grand entier, on ajoutera un `n` après l'entier ou on appellera le constructeur {{jsxref("BigInt")}}.

La plus grande valeur représentable avec le type _Number_ est accessible avec la constante {{jsxref("Number.MAX_VALUE")}}. Avec l'apparition de `BigInt`, on peut représenter et manipuler des entiers plus grands.

```js
const x = 2n ** 53n;
9007199254740992n;
const y = x + 1n;
9007199254740993n
```

À l'instar des nombres classiques, on peut utiliser les opérateurs `+`,  `*`, `-`, `**` et `%`. Un grand entier ne sera pas strictement égal à un nombre mais on pourra avoir une égalité faible.

Un grand entier se comportera comme un nombre lorsqu'il est converti en booléen avec `if`, `||`, `&&`, `Boolean` et `!`.

Il n'est pas possible d'utiliser des grands entiers et des nombres de façon interchangeable. Une exception {{jsxref("TypeError")}} sera déclenchée en cas d'incompatibilité.

### Le type chaîne de caractères (_String_)

Ce type JavaScript est utilisé afin de représenter des données textuelles. C'est un ensemble d'« éléments » de valeurs entières non-signées représentées sur 16 bits. Chaque élément occupe une position au sein de cette chaîne de caractères. Le premier élément est situé à l'indice 0, le deuxième à l'indice 1 et ainsi de suite. La longueur d'une chaîne de caractères correspond au nombre d'éléments qu'elle contient.

À la différence des chaînes de caractères dans le langage C, les chaînes de caractères JavaScript sont immuables. Cela signifie qu'une fois qu'une chaîne est créée, il est impossible de la modifier. En revanche, il est toujours possible de créer une autre chaîne basée sur la première grâce à des opérations. Par exemple :

- Un fragment de la chaîne originelle en sélectionnant certaines lettres ou en utilisant {{jsxref("String.substr()")}}.
- Une concaténation de deux chaînes de caractères en utilisant l'opérateur de concaténation (`+`) ou {{jsxref("String.concat()")}}.

#### Attention à ne pas utiliser les chaînes pour tout et n'importe quoi !

Ça peut être tentant de vouloir utiliser des chaînes afin de représenter des données complexes. En revanche, les avantages de cette méthode ne sont que très superficiels :

- On peut facilement construire des chaînes complexes grâce à la concaténation.
- On peut déboguer rapidement le contenu des chaînes de caractères.
- Les chaînes de caractères sont utilisées à de multiples endroits dans beaucoup d'API ([champs de saisie](/fr/docs/Web/API/HTMLInputElement), valeurs en [stockage local](/fr/docs/Storage), réponses {{ domxref("XMLHttpRequest") }} avec `responseText`, etc.).

En utilisant des conventions, il peut être possible de représenter n'importe quelle donnée sous forme d'une chaîne de caractères, en revanche cela n'est souvent pas la meilleure façon. (Par exemple, avec un séparateur, on pourrait émuler le comportement d'un tableau en « interdisant » que ce séparateur soit utilisé pour éléments, etc. on pourrait ensuite définir un caractère d'échappement, qui serait à son tour inutilisable dans les chaînes : toutes ces pseudo-conventions entraîneront de lourdes conséquences en termes de maintenance.)

En résumé, les chaînes doivent être utilisées pour les données textuelles. Pour des données plus complexes, utilisez une abstraction adéquate et analysez/parsez les chaînes que vous recevez d'autres API.

### Le type symbole

Les symboles sont une nouveautés du langage, apportée par ECMAScript 6. Un symbole est une valeur primitive **unique** et **immuable** pouvant être utilisée comme clé pour propriété d'un objet (voir ci-après). Dans d'autres langages de programmation, les symboles sont appelés atomes. Pour plus de détails, voir les pages {{Glossary("Symbol","Symbole")}} et le constructeur {{jsxref("Symbol")}} JavaScript.

## Les objets

En informatique, un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un {{Glossary("Identifier", "identifiant")}}.

### Propriétés

En JavaScript, les objets peuvent être considérés comme des collections de propriétés. En utilisant [un littéral objet](/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Les_litt.C3.A9raux_objets), il est possible d'initialiser un ensemble limité de propriétés ; d'autres propriétés peuvent ensuite être ajoutées et/ou retirées. Les valeurs des propriétés peuvent être de n'importe quel type, y compris des objets. Cela permet de construire des structures de données complexes. Les propriétés sont identifiées grâce à une « clé ». Une clé peut être une chaîne de caractères ou un symbole.

Il existe deux types de propriétés qui ont certains attributs : des propriétés de données (_data property_) et des propriétés d'accesseur.

#### Propriétés de données

Elles associent une clé avec une valeur et possèdent les attributs suivants :

| Attribut         | Type                               | Description                                                                                                                                                                                                                                                                                                          | Valeur par défaut |
| ---------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [[Value]]        | N'importe quelle valeur JavaScript | La valeur obtenue lorsqu'on accède à la propriété.                                                                                                                                                                                                                                                                   | `undefined`       |
| [[Writable]]     | Booléen                            | S'il vaut `false`, la valeur de la propriété (l'attribut [[Value]]) ne peut être changé.                                                                                                                                                                                                                             | `false`           |
| [[Enumerable]]   | Booléen                            | S'il vaut `true`, la propriété pourra être listée par une boucle [`for...in`](/fr/docs/Web/JavaScript/Reference/Instructions/for...in). Voir également [l'article sur le caractère énumérable des propriétés](/fr/docs/Web/JavaScript/Caract%C3%A8re_%C3%A9num%C3%A9rable_des_propri%C3%A9t%C3%A9s_et_rattachement). | `false`           |
| [[Configurable]] | Booléen                            | S'il vaut `false`, la propriété ne pourra pas être supprimée, elle ne pourra pas être changée en accesseur et les attributs autres que [[Value]] et [[Writable]] ne pourront pas être modifiés.                                                                                                                      | `false`           |

| Attribut   | Type    | Description                                           |
| ---------- | ------- | ----------------------------------------------------- |
| Read-only  | Booléen | État symétrique pour l'attribut ES5 [[Writable]].     |
| DontEnum   | Booléen | État symétrique pour l'attribut ES5 [[Enumerable]].   |
| DontDelete | Booléen | État symétrique pour l'attribut ES5 [[Configurable]]. |

#### Propriétés d'accesseur

Ces propriétés associent une clé avec une ou deux fonctions accesseur et mutateur qui permettent de récupérer ou d'enregistrer une valeur. Elles possèdent les attributs suivants :

| Attribut         | Type                               | Description                                                                                                                                                                                                                                            | Valeur par défaut |
| ---------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| [[Get]]          | Un objet `Function` ou `undefined` | La fonction qui est appelée sans argument afin de récupérer la valeur de la propriété quand on souhaite y accéder. Voir aussi la page sur [`get`](/fr/docs/Web/JavaScript/Reference/Fonctions/get).                                                    | `undefined`       |
| [[Set]]          | Un objet `Function` ou `undefined` | La fonction, appelée avec un argument qui contient la valeur qu'on souhaite affecter à la valeur et qui est exécutée à chaque fois qu'on souhaite modifier la valeur. Voir aussi la page sur [`set`](/fr/docs/Web/JavaScript/Reference/Fonctions/set). | `undefined`       |
| [[Enumerable]]   | Booléen                            | S'il vaut `true`, la propriété sera listée dans les boucles [`for...in`](/fr/docs/Web/JavaScript/Reference/Instructions/for...in).                                                                                                                     | `false`           |
| [[Configurable]] | Booléen                            | S'il vaut `false`, la propriété ne pourra pas être supprimée et ne pourra pas être transformée en une propriété de données.                                                                                                                            | `false`           |

> **Note :** Les attributs sont généralement utilisés par le moteur JavaScript plutôt qu'explicitement dans les scripts. Il est impossible d'y accéder directement (plus d'informations sur {{jsxref("Object.defineProperty()")}}. C'est pour cela que l'attribut est décrit entre double crochets (comme dans la spécification ECMAScript) plutôt qu'entre crochets simples qui pourraient laisser penser à une propriété « classique ».

### Les objets « normaux » et les fonctions

Un objet JavaScript est un ensemble de correspondances entre des clés et des valeurs. Les clés sont représentées par des chaînes ou des symboles ({{jsxref("Symbol")}}). Les valeurs peuvent être de n'importe quel type. Grâce à cela, les objets peuvent, naturellement, être utilisés comme [tables de hachage](https://fr.wikipedia.org/wiki/Table_de_hachage).

Les fonctions sont des objets classiques à la seule différence qu'on peut les appeler.

### Les dates

Lorsqu'on souhaite représenter des dates, il est tout indiqué d'utiliser le type utilitaire natif [`Date`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) de JavaScript.

### Les collections indexées : les tableaux (_Arrays_) et les tableaux typés (_Typed Arrays_)

[Les tableaux](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) (ou _Arrays_ en anglais) sont des objets natifs qui permettent d'organiser des valeurs numérotées et qui ont une relation particulière avec la propriété `length`. De plus, les tableaux héritent de `Array.prototype` qui permet de bénéficier de plusieurs méthodes pour manipuler les tableaux. Par exemple, [`indexOf`](/fr/docs/JavaScript/Reference/Objets_globaux/Array/indexOf) qui permet de rechercher une valeur dans le tableau ou [`push`](/fr/docs/JavaScript/Reference/Global_Objects/Array/push) qui permet d'ajouter un élément au tableau. Les tableaux sont donc indiqués quand on souhaite représenter des listes de valeurs ou d'objets.

[Les tableaux typés](/fr/docs/JavaScript/Tableaux_typ%C3%A9s) (_Typed Arrays_ en anglais) ont été ajoutés avec ECMAScript 6 et offrent une vue sous forme d'un tableau pour manipuler des tampons de données binaires. Le tableau qui suit illustre les types de données équivalents en C :

{{page("fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray", "Les_objets_TypedArray", "", 0, 3)}}

### Les collections avec clés : Maps, Sets, WeakMaps, WeakSets

Ces structures de données utilisent des clés pour référencer des objets. Elles ont été introduites avec ECMAScript 6. {{jsxref("Set")}} et {{jsxref("WeakSet")}} représentent des ensembles d'objets, {{jsxref("Map")}} et {{jsxref("WeakMap")}} associent une valeur à un objet. Il est possible d'énumérer les valeurs contenues dans un objet Map mais pas dans un objet WeakMap. Les WeakMaps quant à eux permettent certaines optimisations dans la gestion de la mémoire et le travail du ramasse-miettes.

Il est possible d'implémenter les Maps et Sets grâce à ECMAScript 5. Cependant, comme les objets ne peuvent pas être comparés (avec une relation d'ordre par exemple), la complexité obtenue pour rechercher un élément serait nécessairement linéaire. Les implémentations natives (y compris celle des WeakMaps) permettent d'obtenir des performances logarithmiques voire constantes.

Généralement, si on voulait lier des données à un nœud DOM, on pouvait utiliser les attributs `data-*` ou définir les propriétés à un même l'objet. Malheureusement, cela rendait les données disponibles à n'importe quel script fonctionnant dans le même contexte. Les Maps et WeakMaps permettent de gérer plus simplement une liaison « privée » entre des données et un objet.

### Les données structurées : JSON

JSON (JavaScript Object Notation) est un format d'échange de données léger, dérivé de JavaScript et utilisé par plusieurs langages de programmation. JSON permet ainsi de construire des structures de données universelles pouvant être échangées entre programmes. Pour plus d'informations, voir les pages {{Glossary("JSON")}} et {{jsxref("JSON")}}.

### Les autres objets de la bibliothèque standard

JavaScript possède une bibliothèque standard d'objets natifs. Veuillez lire la [référence](/fr/docs/Web/JavaScript/Reference/Objets_globaux) pour en savoir plus sur ces objets.

## Déterminer le type des objets grâce à l'opérateur `typeof`

L'opérateur `typeof` peut vous aider à déterminer le type d'une variable. Pour plus d'informations et sur les cas particuliers, voir la page de la référence sur [cet opérateur](/fr/docs/JavaScript/Reference/R%C3%A9f%C3%A9rence_JavaScript/Op%C3%A9rateurs/Op%C3%A9rateurs_sp%C3%A9ciaux/L'op%C3%A9rateur_typeof).

## Spécifications

| Spécification                                                                                                                        | État                         | Commentaires                                       |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                             | {{Spec2('ES1')}}         | Définition initiale.                               |
| {{SpecName('ES5.1', '#sec-8', 'Types')}}                                                                                 | {{Spec2('ES5.1')}}     |                                                    |
| {{SpecName('ES2015', '#sec-ecmascript-data-types-and-values', 'ECMAScript Data Types and Values')}} | {{Spec2('ES2015')}}     | Ajout des symboles ({{jsxref("Symbol")}}). |
| {{SpecName('ESDraft', '#sec-ecmascript-data-types-and-values', 'ECMAScript Data Types and Values')}} | {{Spec2('ESDraft')}} |                                                    |

## Voir aussi

- [Un ensemble de structures de données usuelles et d'algorithmes classiques, en JavaScript, par Nicholas Zakas](https://github.com/nzakas/computer-science-in-javascript/) (en anglais)
- [Implémentations de différentes structures de données et utilitaires de recherche en JavaScript](https://github.com/monmohan/DataStructures_In_Javascript) (en anglais)
