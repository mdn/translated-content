---
title: Console.table
slug: Web/API/Console/table
tags:
  - API
  - DOM
  - Développement
  - Méthode
  - console
  - débogage
translation_of: Web/API/Console/table
---
{{APIRef("Console API")}}

Affiche des données tabulaires sous la forme d'un tableau.

Cette fonction prend un argument obligatoire `data`, qui doit être un tableau (Array) ou un objet, et un argument facultatif `columns`.

Il affiche `data` sous la forme d'un tableau. Chaque élément dans le tableau fourni (Array) sera affiché comme une ligne dans le tableau. (ou les propriétés énumérables s'il s'agit d'un objet)

La première colonne dans le tableau sera intitulé `(index)`. Si `data` est un tableau (Array), alors les valeurs de cette colonne seront les index du tableau (Array). Si `data` est un objet, alors ses valeurs seront les noms des propriétés.À noter (dans Firefox) :  `console.table` est limité à l'affichage de 1000 lignes (la première ligne est l'index étiqueté)

{{AvailableInWorkers}}

### Collections de données primitives

`data` peut contenir un tableau ou un objet.

```js
// un tableau de chaînes de caractères

console.table(["apples", "oranges", "bananas"]);
```

![](console-table-array.png)

```js
// un objet dont les propriétés sont des chaînes de caractères

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("John", "Smith");

console.table(me);
```

![](console-table-simple-object.png)

### Collections de données composées

Si les éléments d'un tableau, ou les propriétés d'un objet, sont eux-mêmes des tableaux ou des objets, alors ces éléments ou propriétés sont énumérés dans chaque ligne, un élément par colonne :

```js
// un tableau de tableaux

var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
console.table(people);
```

![Un tableau qui affiche un tableau de tableaux](console-table-array-of-array.png)

```js
// un tableau d'objets

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily]);
```

Notez que si le tableau contient des objets, alors les colonnes seront nommées avec les noms des propriétés.

![Un tableau qui affiche un tableau d'objets](console-table-array-of-objects.png)

```js
// un objet contenant des propriétés qui sont des objets

var family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);
```

![Un tableau affichant des objets composés d'objets](console-table-object-of-objects.png)

### Restreindre les colonnes affichées

Par défaut, `console.table()` liste tous les éléments pour chaque ligne. Vous pouvez utiliser le paramètre facultatif `columns` pour sélectionner un sous-ensemble de colonnes à afficher :

```js
// un tableau d'objets, affichant seulement firstName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily], ["firstName"]);
```

![Un tableau affichant un tableau d'objets dont la sortie est filtrée](console-table-array-of-objects-firstname-only.png)

### Ordonner les colonnes

Vous pouvez ordonner les colonnes en cliquant sur l'intitulé de la colonne.

## Syntaxe

    console.table(data [, columns]);

### Paramètres

- `data`
  - : La donnée à afficher. Doit être un tableau ou un objet.
- `columns`
  - : Un tableau contenant les noms des colonnes à inclure dans la sortie.

## Spécification

| Spécification                                                                | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#table", "console.table()")}} | {{Spec2("Console API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Console.table")}}
