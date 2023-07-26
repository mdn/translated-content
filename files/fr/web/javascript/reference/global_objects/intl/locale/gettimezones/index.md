---
title: Intl.Locale.prototype.timeZones
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones
---

{{JSRef}}

La propriété **`Intl.Locale.prototype.timeZones`** est un accesseur qui renvoie un tableau des fuseaux horaires pris en charge pour la locale représentée par l'instance `Intl.Locale` courante.

## Description

Renvoie un tableau avec les fuseaux horaires pris en charge et associés à l'objet `Locale` courant. Les éléments du tableau sont représentés [au format IANA](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database).

> **Note :** Si l'identifiant de langue Unicode ne contient pas le tiret indiquant la sous-balise de région, la valeur de retour sera `undefined`.

## Exemples

### Obtenir les fuseaux horaires pris en charge et associés à une locale

```js
let arEG = new Intl.Locale("ar-EG");
console.log(arEG.timeZones); // affiche ["Africa/Cairo"]
```

```js
let jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.timeZones); // affiche ["Asia/Tokyo"]
```

```js
let ar = new Intl.Locale("ar");
console.log(ar.timeZones); // affiche undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)
- [La base de données IANA pour les fuseaux horaires](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database)
