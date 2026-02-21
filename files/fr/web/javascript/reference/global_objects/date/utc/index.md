---
title: "Date : méthode statique UTC()"
short-title: UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Date.UTC()`** accepte des paramètres représentant les composantes de date et d'heure, comme le constructeur {{JSxRef("Date")}}, mais les considère comme UTC. Elle retourne le nombre de millisecondes écoulées depuis le 1er janvier 1970, 00:00:00 UTC.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.UTC()")}}

```js interactive-example
const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

console.log(utcDate1.toUTCString());
// Résultat attendu : "Fri, 02 Feb 1996 03:04:05 GMT"

console.log(utcDate2.toUTCString());
// Résultat attendu : "Sun, 31 Dec 1899 00:00:00 GMT"
```

## Syntaxe

```js-nolint
Date.UTC(year)
Date.UTC(year, monthIndex)
Date.UTC(year, monthIndex, day)
Date.UTC(year, monthIndex, day, hours)
Date.UTC(year, monthIndex, day, hours, minutes)
Date.UTC(year, monthIndex, day, hours, minutes, seconds)
Date.UTC(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

## Paramètres

- `year`
  - : Valeur entière représentant l'année. Les valeurs de `0` à `99` correspondent aux années de `1900` à `1999`. Toutes les autres valeurs correspondent à l'année réelle. Voir [l'exemple](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#interprétation_des_années_sur_deux_chiffres).
- `monthIndex` {{Optional_Inline}}
  - : Valeur entière représentant le mois, commençant à `0` pour janvier jusqu'à `11` pour décembre. La valeur par défaut est `0`.
- `day` {{Optional_Inline}}
  - : Valeur entière représentant le jour du mois. La valeur par défaut est `1`.
- `hours` {{Optional_Inline}}
  - : Valeur entière comprise entre `0` et `23` représentant l'heure du jour. La valeur par défaut est `0`.
- `minutes` {{Optional_Inline}}
  - : Valeur entière représentant les minutes. La valeur par défaut est `0`.
- `seconds` {{Optional_Inline}}
  - : Valeur entière représentant les secondes. La valeur par défaut est `0`.
- `milliseconds` {{Optional_Inline}}
  - : Valeur entière représentant les millisecondes. La valeur par défaut est `0`.

### Valeur de retour

Un nombre représentant le [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) de la date donnée. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

Les années comprises entre `0` et `99` sont converties en une année du 20<sup>e</sup> siècle `(1900 + year)`. Par exemple, `95` est converti en l'année `1995`.

La méthode `UTC()` diffère du constructeur {{JSxRef("Date/Date", "Date()")}} de trois façons&nbsp;:

1. `Date.UTC()` utilise le temps universel plutôt que l'heure locale.
2. `Date.UTC()` retourne une valeur temporelle sous la forme d'un nombre au lieu de créer un objet {{JSxRef("Date")}}.
3. Lorsqu'un seul nombre est passé, `Date.UTC()` l'interprète comme une année et non comme un timestamp.

Si un paramètre est en dehors de la plage attendue, la méthode `UTC()` ajuste les autres paramètres pour s'adapter à la valeur. Par exemple, si `15` est utilisé pour `monthIndex`, l'année sera incrémentée de 1 `(year + 1)` et `3` sera utilisé pour le mois.

Comme `UTC()` est une méthode statique de `Date`, vous l'utilisez toujours sous la forme `Date.UTC()`, et non comme une méthode d'un objet `Date` que vous auriez créé.

## Exemples

### Utiliser la méthode `UTC()`

L'instruction suivante crée un objet {{JSxRef("Date")}} avec les arguments considérés comme UTC plutôt que locaux&nbsp;:

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

### Comportement de `Date.UTC()` avec un seul argument

`Date.UTC()` lorsqu'elle reçoit un seul argument avait un comportement incohérent, car les implémentations ne gardaient la cohérence qu'avec le constructeur {{JSxRef("Date/Date", "Date()")}}, qui n'interprète pas un seul argument comme une année. Les implémentations doivent maintenant traiter un `monthIndex` omis comme `0`, au lieu de le contraindre à `NaN`.

```js
Date.UTC(2017); // 1483228800000
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Date.parse()")}}
- L'objet {{JSxRef("Date")}}
