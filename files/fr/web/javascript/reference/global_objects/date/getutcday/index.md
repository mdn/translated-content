---
title: "Date : méthode getUTCDay()"
short-title: getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getUTCDay()`** des instances de {{JSxRef("Date")}} retourne le jour de la semaine pour cette date selon le temps universel, où 0 correspond à dimanche.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getUTCDay()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

// Mardi
console.log(date1.getUTCDay());
// Résultat attendu : 2

// Mercredi
console.log(date2.getUTCDay());
// Résultat attendu : 3
```

## Syntaxe

```js-nolint
getUTCDay()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier correspondant au jour de la semaine pour la date indiquée selon le temps universel&nbsp;: 0 pour dimanche, 1 pour lundi, 2 pour mardi, et ainsi de suite. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getUTCDay()`

L'exemple suivant assigne le jour de la semaine de la date actuelle à la variable `jourSemaine`.

```js
const aujourdhui = new Date();
const jourSemaine = aujourdhui.getUTCDay();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCDate()")}}
- La méthode {{JSxRef("Date.prototype.getDay()")}}
- La méthode {{JSxRef("Date.prototype.setUTCDate()")}}
