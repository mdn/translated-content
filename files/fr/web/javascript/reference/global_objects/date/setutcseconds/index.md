---
title: "Date : méthode setUTCSeconds()"
short-title: setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`setUTCSeconds()`** des instances de {{JSxRef("Date")}} modifie les secondes et/ou les millièmes de secondes pour cette date selon le temps universel.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setUTCSeconds()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCSeconds());
// Résultat attendu : 30

date1.setUTCSeconds(39);

console.log(date1.getUTCSeconds());
// Résultat attendu : 39
```

## Syntaxe

```js-nolint
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### Paramètres

- `secondsValue`
  - : Un entier compris entre 0 et 59 représentant les secondes.
- `msValue` {{Optional_Inline}}
  - : Un entier compris entre 0 et 999 représentant les millièmes de secondes.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si un paramètre vaut `NaN` (ou d'autres valeurs qui sont [contrainte](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si vous ne définissez pas le paramètre `msValue`, la valeur retournée par la méthode {{JSxRef("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} est utilisée.

Si un paramètre que vous définissez est en dehors de la plage attendue, `setUTCSeconds()` tente de mettre à jour les informations de date dans l'objet {{JSxRef("Date")}} en conséquence. Par exemple, si vous utilisez 100 pour `secondsValue`, les minutes stockées dans l'objet {{JSxRef("Date")}} seront incrémentées de 1, et 40 sera utilisé pour les secondes.

## Exemples

### Utiliser la méthode `setUTCSeconds()`

```js
const leGrandJour = new Date();
leGrandJour.setUTCSeconds(20);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCSeconds()")}}
- La méthode {{JSxRef("Date.prototype.setSeconds()")}}
