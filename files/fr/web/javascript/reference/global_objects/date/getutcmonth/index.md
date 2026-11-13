---
title: "Date : méthode getUTCMonth()"
short-title: getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getUTCMonth()`** des instances de {{JSxRef("Date")}} retourne le mois pour cette date selon le temps universel, sous forme d'une valeur indexée à partir de zéro (où zéro indique le premier mois de l'année).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getUTCMonth()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

// December
console.log(date1.getUTCMonth());
// Résultat attendu : 11

// January
console.log(date2.getUTCMonth());
// Résultat attendu : 0
```

## Syntaxe

```js-nolint
getUTCMonth()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier entre 0 et 11 correspondant au mois dans l'année de la date indiquée selon le temps universel (0 pour janvier, 1 pour février, 2 pour mars, et ainsi de suite…). Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getUTCMonth()`

L'exemple suivant assigne le mois de la date actuelle à la variable `mois`.

```js
const aujourdhui = new Date();
const mois = aujourdhui.getUTCMonth();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getMonth()")}}
- La méthode {{JSxRef("Date.prototype.setUTCMonth()")}}
