---
title: "Date : méthode setUTCMonth()"
short-title: setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`setUTCMonth()`** des instances de {{JSxRef("Date")}} modifie le mois et/ou le jour du mois pour cette date selon le temps universel.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.setUTCMonth()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Résultat attendu : "Thu, 01 Jan 1976 02:15:30 GMT"

console.log(event.getUTCMonth());
// Résultat attendu : 0

event.setUTCMonth(11);

console.log(event.toUTCString());
// Résultat attendu : "Wed, 01 Dec 1976 02:15:30 GMT"
```

## Syntaxe

```js-nolint
setUTCMonth(monthValue)
setUTCMonth(monthValue, dateValue)
```

### Paramètres

- `monthValue`
  - : Un entier représentant le mois&nbsp;: 0 pour janvier, 1 pour février, etc.
- `dateValue` {{Optional_Inline}}
  - : Un entier de 1 à 31 représentant le jour du mois.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si un paramètre vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si vous ne définissez pas le paramètre `dateValue`, la valeur retournée par la méthode {{JSxRef("Date/getUTCDate", "getUTCDate()")}} est utilisée.

Si un paramètre que vous définissez est en dehors de la plage attendue, `setUTCMonth()` tente de mettre à jour les informations de date dans l'objet {{JSxRef("Date")}} en conséquence. Par exemple, si vous utilisez 15 pour `monthValue`, l'année sera incrémentée de 1, et 3 sera utilisé pour le mois.

## Exemples

### Utiliser la méthode `setUTCMonth()`

```js
const leGrandJour = new Date();
leGrandJour.setUTCMonth(11);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCMonth()")}}
- La méthode {{JSxRef("Date.prototype.setMonth()")}}
