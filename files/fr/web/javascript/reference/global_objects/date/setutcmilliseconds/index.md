---
title: "Date : méthode setUTCMilliseconds()"
short-title: setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`setUTCMilliseconds()`** des instances de {{JSxRef("Date")}} modifie les millisecondes pour cette date selon le temps universel.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setUTCMilliseconds()")}}

```js interactive-example
const date1 = new Date("2018-01-24T12:38:29.069Z");

console.log(date1.getUTCMilliseconds());
// Résultat attendu : 69

date1.setUTCMilliseconds(420);

console.log(date1.getUTCMilliseconds());
// Résultat attendu : 420
```

## Syntaxe

```js-nolint
setUTCMilliseconds(millisecondsValue)
```

### Paramètres

- `millisecondsValue`
  - : Un entier entre 0 et 999 représentant les millièmes de secondes.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si `millisecondsValue` vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si un paramètre que vous définissez est en dehors de la plage attendue, `setUTCMilliseconds()` tente de mettre à jour les informations de date dans l'objet {{JSxRef("Date")}} en conséquence. Par exemple, si vous utilisez 1100 pour `millisecondsValue`, les secondes stockées dans l'objet {{JSxRef("Date")}} seront incrémentées de 1, et 100 sera utilisé pour les millisecondes.

## Exemples

### Utiliser la méthode `setUTCMilliseconds()`

```js
const leGrandJour = new Date();
leGrandJour.setUTCMilliseconds(500);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCMilliseconds()")}}
- La méthode {{JSxRef("Date.prototype.setMilliseconds()")}}
