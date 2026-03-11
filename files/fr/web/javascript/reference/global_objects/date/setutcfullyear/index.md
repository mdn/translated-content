---
title: "Date : méthode setUTCFullYear()"
short-title: setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`setUTCFullYear()`** des instances de {{JSxRef("Date")}} modifie l'année pour cette date selon le temps universel.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setUTCFullYear()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCFullYear());
// Résultat attendu : 1976

console.log(event.toUTCString());
// Résultat attendu : "Thu, 01 Jan 1976 02:15:30 GMT"

event.setUTCFullYear(1975);

console.log(event.toUTCString());
// Résultat attendu : "Wed, 01 Jan 1975 02:15:30 GMT"
```

## Syntaxe

```js-nolint
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dateValue)
```

### Paramètres

- `yearValue`
  - : Un entier représentant l'année. Par exemple, 1995.
- `monthValue` {{Optional_Inline}}
  - : Un entier représentant le mois&nbsp;: 0 pour janvier, 1 pour février, etc.
- `dateValue` {{Optional_Inline}}
  - : Un entier compris entre 1 et 31 représentant le jour du mois. Si vous définissez `dateValue`, vous devez aussi définir `monthValue`.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si un paramètre vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si vous ne définissez pas les paramètres `monthValue` et `dateValue`, les valeurs retournées par les méthodes {{JSxRef("Date/getUTCMonth", "getUTCMonth()")}} et {{JSxRef("Date/getUTCDate", "getUTCDate()")}} sont utilisées.

Si un paramètre que vous définissez est en dehors de la plage attendue, `setUTCFullYear()` tente de mettre à jour les autres paramètres et les informations de date dans l'objet {{JSxRef("Date")}} en conséquence. Par exemple, si vous définissez 15 pour `monthValue`, l'année est incrémentée de 1 (`yearValue + 1`), et 3 est utilisé pour le mois.

## Exemples

### Utiliser le module `setUTCFullYear()`

```js
const leGrandJour = new Date();
leGrandJour.setUTCFullYear(1997);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module {{JSxRef("Date.prototype.getUTCFullYear()")}}
- Le module {{JSxRef("Date.prototype.setFullYear()")}}
