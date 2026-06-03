---
title: "Date : méthode getMonth()"
short-title: getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getMonth()`** des instances de {{JSxRef("Date")}} retourne le mois de la date renseignée d'après l'heure locale. La numérotation démarre à 0 (c'est-à-dire que 0 correspond au premier mois de l'année).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getMonth()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getMonth()); // (Janvier donne 0)
// Résultat attendu : 6
```

## Syntaxe

```js-nolint
getMonth()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier entre 0 et 11 selon le mois de la date indiquée et d'après l'heure locale (0 correspond à janvier, 1 à février, et ainsi de suite). Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

La valeur de retour de `getMonth()` est indexée à partir de zéro, ce qui est utile pour indexer des tableaux de mois, par exemple&nbsp;:

```js
const saintValentin = new Date("1995-02-14");
const mois = saintValentin.getMonth();
const nomsMois = ["Janvier", "Février", "Mars" /* , … */];

console.log(nomsMois[mois]); // "Février"
```

Cependant, pour l'internationalisation, vous devriez préférer utiliser {{JSxRef("Intl.DateTimeFormat")}} avec le paramètre `options`.

```js
const options = { month: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(saintValentin));
// "February"
console.log(new Intl.DateTimeFormat("de-DE", options).format(saintValentin));
// "Februar"
```

## Exemples

### Utiliser la méthode `getMonth()`

La variable `mois` a pour valeur `11`, d'après la valeur de l'objet {{JSxRef("Date")}} `noel95`.

```js
const noel95 = new Date("1995-12-25T23:15:30");
const mois = noel95.getMonth();

console.log(mois); //11
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.getUTCMonth()")}}
- La méthode {{JSxRef("Date.prototype.setMonth()")}}
