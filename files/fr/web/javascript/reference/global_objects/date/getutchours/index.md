---
title: "Date : méthode getUTCHours()"
short-title: getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getUTCHours()`** des instances de {{JSxRef("Date")}} retourne les heures de la date renseignée selon le temps universel (UTC).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getUTCHours()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCHours());
// Résultat attendu : 12

console.log(date2.getUTCHours());
// Résultat attendu : 10
```

## Syntaxe

```js-nolint
getUTCHours()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier entre 0 et 23 correspondant à l'heure de la date indiquée selon le temps universel. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getUTCHours()`

L'exemple suivant assigne les heures de la date actuelle à la variable `heures`.

```js
const aujourdhui = new Date();
const heures = aujourdhui.getUTCHours();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getHours()")}}
- La méthode {{JSxRef("Date.prototype.setUTCHours()")}}
