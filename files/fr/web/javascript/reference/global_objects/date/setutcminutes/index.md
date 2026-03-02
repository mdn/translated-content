---
title: "Date : méthode setUTCMinutes()"
short-title: setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`setUTCMinutes()`** des instances de {{JSxRef("Date")}} modifie les minutes pour cette date selon le temps universel.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setUTCMinutes()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCMinutes());
// Résultat attendu : 15

date1.setUTCMinutes(25);

console.log(date1.getUTCMinutes());
// Résultat attendu : 25
```

## Syntaxe

```js-nolint
setUTCMinutes(minutesValue)
setUTCMinutes(minutesValue, secondsValue)
setUTCMinutes(minutesValue, secondsValue, msValue)
```

### Paramètres

- `minutesValue`
  - : Un entier compris entre 0 et 59 représentant les minutes.
- `secondsValue` {{Optional_Inline}}
  - : Un entier compris entre 0 et 59 représentant les secondes. Si vous définissez `secondsValue`, vous devez aussi définir `minutesValue`.
- `msValue` {{Optional_Inline}}
  - : Un entier compris entre 0 et 999 représentant les millisecondes. Si vous définissez `msValue`, vous devez aussi définir `minutesValue` et `secondsValue`.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si un paramètre vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si vous ne définissez pas les paramètres `secondsValue` et `msValue`, les valeurs retournées par les méthodes {{JSxRef("Date/getUTCSeconds", "getUTCSeconds()")}} et {{JSxRef("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} sont utilisées.

Si un paramètre que vous définissez est en dehors de la plage attendue, `setUTCMinutes()` tente de mettre à jour les informations de date dans l'objet {{JSxRef("Date")}} en conséquence. Par exemple, si vous utilisez 100 pour `secondsValue`, les minutes seront incrémentées de 1 (`minutesValue + 1`), et 40 sera utilisé pour les secondes.

## Exemples

### Utiliser la méthode `setUTCMinutes()`

```js
const leGrandJour = new Date();
leGrandJour.setUTCMinutes(43);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCMinutes()")}}
- La méthode {{JSxRef("Date.prototype.setMinutes()")}}
