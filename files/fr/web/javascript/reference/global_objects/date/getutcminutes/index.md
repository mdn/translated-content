---
title: "Date : méthode getUTCMinutes()"
short-title: getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getUTCMinutes()`** des instances de {{JSxRef("Date")}} retourne les minutes de la date renseignée selon le temps universel (UTC).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getUTCMinutes()")}}

```js interactive-example
const date1 = new Date("1 January 2000 03:15:30 GMT+07:00");
const date2 = new Date("1 January 2000 03:15:30 GMT+03:30");

console.log(date1.getUTCMinutes()); // 31 Dec 1999 20:15:30 GMT
// Résultat attendu : 15

console.log(date2.getUTCMinutes()); // 31 Dec 1999 23:45:30 GMT
// Résultat attendu : 45
```

## Syntaxe

```js-nolint
getUTCMinutes()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier entre 0 et 59 correspondant au nombre de minutes pour la date indiquée selon le temps universel. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getUTCMinutes()`

L'exemple suivant assigne les minutes de la date actuelle à la variable `minutes`.

```js
const aujourdhui = new Date();
const minutes = aujourdhui.getUTCMinutes();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getMinutes()")}}
- La méthode {{JSxRef("Date.prototype.setUTCMinutes()")}}
