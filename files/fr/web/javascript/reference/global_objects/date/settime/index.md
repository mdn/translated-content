---
title: "Date : méthode setTime()"
short-title: setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`setTime()`** des instances de {{JSxRef("Date")}} modifie le [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) pour cette date, c'est-à-dire le nombre de millisecondes écoulées depuis [l'epoch](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide), définie comme minuit au début du 1er janvier 1970, UTC.

{{InteractiveExample("JavaScript Demo: Date.prototype.setTime()", "taller")}}

```js interactive-example
const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// Résultat attendu : "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

console.log(futureDate);
// Résultat attendu : "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Remarque : votre fuseau horaire peut varier
```

## Syntaxe

```js-nolint
setTime(timeValue)
```

### Paramètres

- `timeValue`
  - : Un entier représentant le nouveau timestamp — le nombre de millisecondes écoulées depuis minuit au début du 1er janvier 1970, UTC.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si `timeValue` vaut `NaN` (ou d'autres valeurs qui sont [contraintes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

La méthode `setTime()` est utilisée afin d'assigner une date à un autre objet {{JSxRef("Date")}}.

## Exemples

### Utiliser la méthode `setTime()`

```js
const leGrandJour = new Date("1999-07-01");
const pareilQueGrandJour = new Date();
pareilQueGrandJour.setTime(leGrandJour.getTime());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getTime()")}}
- La méthode {{JSxRef("Date.prototype.setUTCHours()")}}
