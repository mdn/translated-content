---
title: "Date : méthode getFullYear()"
short-title: getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getFullYear()`** des instances de {{JSxRef("Date")}} retourne l'année de la date renseignée d'après l'heure locale.

Cette méthode doit être utilisée à la place de {{JSxRef("Date.prototype.getYear()", "getYear()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getFullYear()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getFullYear());
// Résultat attendu : 1969
```

## Syntaxe

```js-nolint
getFullYear()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier correspondant à l'année de la date selon l'heure locale. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Exemples

### Utiliser la méthode `getFullYear()`

La variable `anneeComplete` a la valeur `1995`, d'après la valeur de l'objet {{JSxRef("Date")}} `noel95`.

```js
const noel95 = new Date("1995-12-25T23:15:30");
const anneeComplete = noel95.getFullYear();

console.log(anneeComplete); // 1995
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCFullYear()")}}
- La méthode {{JSxRef("Date.prototype.setFullYear()")}}
- La méthode {{JSxRef("Date.prototype.getYear()")}}
