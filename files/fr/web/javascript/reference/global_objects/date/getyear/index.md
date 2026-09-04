---
title: "Date : méthode getYear()"
short-title: getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

La méthode **`getYear()`** des instances de {{JSxRef("Date")}} retourne l'année pour cette date selon l'heure locale. Comme `getYear()` ne retourne pas les années complètes (problème de l'an 2000), elle est obsolète et a été remplacée par la méthode {{JSxRef("Date/getFullYear", "getFullYear()")}}.

## Syntaxe

```js-nolint
getYear()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier représentant l'année pour la date indiquée selon l'heure locale, auquel on a soustrait 1900. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

- Pour les années supérieures ou égales à 2000, la valeur est 100 ou plus. Par exemple, si l'année est 2026, `getYear()` retourne 126.
- Pour les années comprises entre 1900 et 1999 inclus, la valeur retournée par `getYear()` est comprise entre 0 et 99. Par exemple, si l'année est 1976, `getYear()` retourne 76.
- Pour les années inférieures à 1900, la valeur retournée par `getYear()` est inférieure à 0. Par exemple, si l'année est 1800, `getYear()` retourne -100.

Cette méthode retourne essentiellement la valeur de {{JSxRef("Date/getFullYear", "getFullYear()")}} moins 1900. Il est préférable d'utiliser `getFullYear()` afin que l'année soit définie en entier.

## Exemples

### Années entre 1900 et 1999

La seconde instruction assigne la valeur 95 à la variable `annee`.

```js
const noel = new Date("December 25, 1995 23:15:00");
const annee = noel.getYear(); // retourne 95
```

### Années après 1999

La seconde instruction assigne la valeur 100 à la variable `annee`.

```js
const noel = new Date("December 25, 2000 23:15:00");
const annee = noel.getYear(); // retourne 100
```

### Années avant 1900

La seconde instruction assigne la valeur -100 à la variable `annee`.

```js
const noel = new Date("December 25, 1800 23:15:00");
const annee = noel.getYear(); // retourne -100
```

### Définir et lire une année entre 1900 et 1999

La troisième instruction assigne la valeur 95 à la variable `annee`, représentant l'année 1995.

```js
const noel = new Date("December 25, 1800 23:15:00");
const noel.setYear(95);
const annee = noel.getYear(); // retourne 95
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Date.prototype.getYear` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-date)
- [Prothèse d'émulation es-shims de `Date.prototype.getYear` <sup>(angl.)</sup>](https://www.npmjs.com/package/date.prototype.getyear)
- La méthode {{JSxRef("Date.prototype.getFullYear()")}}
- La méthode {{JSxRef("Date.prototype.getUTCFullYear()")}}
- La méthode {{JSxRef("Date.prototype.setYear()")}}
