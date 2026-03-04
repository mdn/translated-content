---
title: "Date : méthode getUTCFullYear()"
short-title: getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getUTCFullYear()`** des instances de {{JSxRef("Date")}} retourne l'année de la date renseignée selon le temps universel (UTC).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getUTCFullYear()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCFullYear());
// Résultat attendu : 1975

console.log(date2.getUTCFullYear());
// Résultat attendu : 1976
```

## Syntaxe

```js-nolint
getUTCFullYear()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier représentant l'année pour la date indiquée selon le temps universel. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

Contrairement à {{JSxRef("Date/getYear", "getYear()")}}, la valeur retournée par `getUTCFullYear()` est un nombre absolu. Pour les dates comprises entre les années 1000 et 9999, `getFullYear()` retourne un nombre à quatre chiffres, par exemple 1995. Utilisez cette fonction pour vous assurer qu'une année est conforme aux années postérieures à 2000.

## Exemples

### Utiliser la méthode `getUTCFullYear()`

L'exemple suivant assigne une valeur à 4 chiffres, l'année courante, à la variable `annee`.

```js
const aujourdhui = new Date();
const annee = aujourdhui.getUTCFullYear();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getFullYear()")}}
- La méthode {{JSxRef("Date.prototype.setFullYear()")}}
