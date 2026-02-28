---
title: "Date : méthode [Symbol.toPrimitive]()"
short-title: "[Symbol.toPrimitive]()"
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`[Symbol.toPrimitive]()`** des instances de {{JSxRef("Date")}} retourne une valeur primitive représentant cette date. Cette valeur peut être une chaîne de caractères ou un nombre, selon l'indication fournie.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype[Symbol.toPrimitive]")}}

```js interactive-example
// Selon le fuseau horaire, vos résultats peuvent varier
const date = new Date("20 December 2019 14:48");

console.log(date[Symbol.toPrimitive]("string"));
// Résultat attendu : "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"

console.log(date[Symbol.toPrimitive]("number"));
// Résultat attendu : 1576833480000
```

## Syntaxe

```js-nolint
date[Symbol.toPrimitive](hint)
```

### Paramètres

- `hint`
  - : Une chaîne de caractères représentant le type de valeur primitive à retourner. Les valeurs suivantes sont valides&nbsp;:
    - `"string"` ou `"default"`&nbsp;: la méthode doit retourner une chaîne de caractères.
    - `"number"`&nbsp;: la méthode doit retourner un nombre.

### Valeur de retour

Si `hint` vaut `"string"` ou `"default"`, cette méthode retourne une chaîne de caractères en [contraignant la valeur de `this` en une chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#contrainte_de_chaîne_de_caractères) (en essayant d'abord `toString()`, puis `valueOf()`).

Si `hint` vaut `"number"`, cette méthode retourne un nombre en [contraignant la valeur de `this` en un nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) (en essayant d'abord `valueOf()`, puis `toString()`).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si l'argument `hint` n'est pas l'une des trois valeurs valides.

## Description

La méthode `[Symbol.toPrimitive]()` fait partie du [protocole de contrainte de type](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_type). JavaScript appelle toujours la méthode `[Symbol.toPrimitive]()` en priorité pour convertir un objet en une valeur primitive. Il est rarement nécessaire d'invoquer la méthode `[Symbol.toPrimitive]()` soi-même&nbsp;; JavaScript l'appelle automatiquement lorsqu'il rencontre un objet là où une valeur primitive est attendue.

La méthode `[Symbol.toPrimitive]()` de l'objet {{JSxRef("Date")}} retourne une valeur primitive en invoquant soit {{JSxRef("Date/valueOf", "this.valueOf()")}} et retourne un nombre, soit {{JSxRef("Date/toString", "this.toString()")}} et retourne une chaîne de caractères. Elle existe pour remplacer le processus par défaut de [contrainte de valeur primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_valeur_primitive) afin de retourner une chaîne de caractères au lieu d'un nombre, car la contrainte primitive, par défaut, appelle {{JSxRef("Date/valueOf", "valueOf()")}} avant {{JSxRef("Date/toString", "toString()")}}. Avec le comportement personnalisé de `[Symbol.toPrimitive]()`, `new Date(0) + 1` retourne `"Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)1"` (une chaîne de caractères) au lieu de `1` (un nombre).

## Exemples

### Utiliser la méthode `[Symbol.toPrimitive]()`

```js
const d = new Date(0); // 1970-01-01T00:00:00.000Z

d[Symbol.toPrimitive]("string"); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
d[Symbol.toPrimitive]("number"); // 0
d[Symbol.toPrimitive]("default"); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le symbole {{JSxRef("Symbol.toPrimitive")}}
