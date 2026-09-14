---
title: "Date : méthode setUTCHours()"
short-title: setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`setUTCHours()`** des instances de {{JSxRef("Date")}} modifie les heures, les minutes, les secondes et/ou les millisecondes pour cette date selon le temps universel.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setUTCHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Résultat attendu : "Wed, 20 Aug 1975 02:15:30 GMT"

console.log(event.getUTCHours());
// Résultat attendu : 2

event.setUTCHours(23);

console.log(event.toUTCString());
// Résultat attendu : "Wed, 20 Aug 1975 23:15:30 GMT"
```

## Syntaxe

```js-nolint
setUTCHours(hoursValue)
setUTCHours(hoursValue, minutesValue)
setUTCHours(hoursValue, minutesValue, secondsValue)
setUTCHours(hoursValue, minutesValue, secondsValue, msValue)
```

### Paramètres

- `hoursValue`
  - : Un entier compris entre 0 et 23 représentant les heures.
- `minutesValue` {{Optional_Inline}}
  - : Un entier compris entre 0 et 59 représentant les minutes.
- `secondsValue` {{Optional_Inline}}
  - : Un entier compris entre 0 et 59 représentant les secondes. Si vous définissez `secondsValue`, vous devez aussi définir `minutesValue`.
- `msValue` {{Optional_Inline}}
  - : Un entier compris entre 0 et 999 représentant les millisecondes. Si vous définissez `msValue`, vous devez aussi définir `minutesValue` et `secondsValue`.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si un paramètre vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si vous ne définissez pas les paramètres `minutesValue`, `secondsValue` et `msValue`, les valeurs retournées par les méthodes {{JSxRef("Date/getUTCMinutes", "getUTCMinutes()")}}, {{JSxRef("Date/getUTCSeconds", "getUTCSeconds()")}} et {{JSxRef("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} sont utilisées.

Si un paramètre que vous définissez est en dehors de la plage attendue, `setUTCHours()` tente de mettre à jour les informations de date dans l'objet {{JSxRef("Date")}} en conséquence. Par exemple, si vous utilisez 100 pour `secondsValue`, les minutes seront incrémentées de 1 (`minutesValue + 1`), et 40 sera utilisé pour les secondes.

## Exemples

### Utiliser la méthode `setUTCHours()`

```js
const leGrandJour = new Date();
leGrandJour.setUTCHours(8);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCHours()")}}
- La méthode {{JSxRef("Date.prototype.setHours()")}}
