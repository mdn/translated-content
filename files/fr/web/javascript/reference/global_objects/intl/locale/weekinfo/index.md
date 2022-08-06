---
title: Intl.Locale.prototype.weekInfo
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/weekInfo
browser-compat: javascript.builtins.Intl.Locale.weekInfo
---
{{JSRef}}

La propriété **`Intl.Locale.prototype.weekInfo`** est un accesseur qui renvoie un objet `weekInfo` contenant les propriétés `firstDay`, `weekend` et `minimalDays` pour la locale associée.

## Description

Renvoie les informations associées à l'instance `Locale` pour les informations sur la semaine selon [les éléments de semaine UTS 35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements).

## Exemples

### Obtenir les informations sur la semaine

```js
let he = new Intl.Locale("he");
console.log(he.weekInfo); // affiche {firstDay: 7, weekend: [5, 6], minimalDays: 1}

let af = new Intl.Locale("af");
console.log(af.weekInfo); // affiche  {firstDay: 7, weekend: [6, 7], minimalDays: 1}

let enGB = new Intl.Locale("en-GB");
console.log(enGB.weekInfo) // affiche  {firstDay: 1, weekend: [6, 7], minimalDays: 4}

let msBN = new Intl.Locale("en-GB");
console.log(msBN.weekInfo) // affiche {firstDay: 7, weekend: [5, 7], minimalDays: 1}
// Le week-end à Brunei est sur vendredi et dimanche mais pas sur samedi
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)
