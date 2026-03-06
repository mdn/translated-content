---
title: "Date : méthode getUTCDate()"
short-title: getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getUTCDate()`** des instances de {{JSxRef("Date")}} retourne le jour du mois pour la date renseignée d'après UTC.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getUTCDate()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

console.log(date1.getUTCDate());
// Résultat attendu : 19

console.log(date2.getUTCDate());
// Résultat attendu : 20
```

## Syntaxe

```js-nolint
getUTCDate()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier, entre 1 et 31, représentant le jour du mois pour la date indiquée selon le temps universel. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getUTCDate()`

L'exemple suivant assigne le jour du mois pour la date actuelle, à la variable `jourDuMois`.

```js
const aujourdhui = new Date();
const jourDuMois = aujourdhui.getUTCDate();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCDay()")}}
- La méthode {{JSxRef("Date.prototype.getDay()")}}
- La méthode {{JSxRef("Date.prototype.setUTCDate()")}}
