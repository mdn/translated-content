---
title: "Intl.Locale : méthode getWeekInfo()"
short-title: getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getWeekInfo()`** des instances de {{JSxRef("Intl.Locale")}} retourne un objet `weekInfo` contenant les propriétés `firstDay`, `weekend` et `minimalDays` pour cette locale.

> [!NOTE]
> Dans certaines versions de certains navigateurs, cette méthode était implémentée en tant que propriété d'accès appelée `weekInfo`. Cependant, comme elle retourne un nouvel objet à chaque accès, elle est maintenant implémentée en tant que méthode pour éviter la situation où `locale.weekInfo === locale.weekInfo` retourne `false`. Consultez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

## Syntaxe

```js-nolint
getWeekInfo()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet représentant les informations sur la semaine associées aux données de la locale spécifiées dans les [éléments de semaine de l'UTS 35 <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements). Il possède les propriétés suivantes&nbsp;:

- `firstDay`
  - : Un entier compris entre 1 (lundi) et 7 (dimanche) indiquant le premier jour de la semaine pour la locale. Couramment 1, 5, 6 ou 7.
- `weekend`
  - : Un tableau d'entiers compris entre 1 et 7 indiquant les jours de week-end pour la locale. Cela est généralement continu car l'UTS 35 stocke `weekendStart` et `weekendEnd` à la place.
- `minimalDays`
  - : Un entier compris entre 1 et 7 (couramment 1 et 4) indiquant le nombre minimal de jours requis dans la première semaine d'un mois ou d'une année, pour les calculs de semaine de l'année ou de semaine du mois (par exemple, la 20e semaine de l'année). Par exemple, dans le calendrier [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601), la première semaine d'une année doit comporter au moins 4 jours dans cette année, donc si le 1er janvier est un vendredi, samedi ou dimanche, il sera numéroté comme faisant partie de la dernière semaine de l'année précédente.

## Exemples

### Obtenir les informations sur la semaine

Retourne les informations sur la semaine pour une `Locale` donnée.

```js
const he = new Intl.Locale("he"); // Hébreu (Israël)
console.log(he.getWeekInfo()); // { firstDay: 7, weekend: [5, 6], minimalDays: 1 }

const af = new Intl.Locale("af"); // Afrikaans (Afrique du Sud)
console.log(af.getWeekInfo()); // { firstDay: 7, weekend: [6, 7], minimalDays: 1 }

const enGB = new Intl.Locale("en-GB"); // Anglais (Royaume-Uni)
console.log(enGB.getWeekInfo()); // { firstDay: 1, weekend: [6, 7], minimalDays: 4 }

const arAF = new Intl.Locale("ar-AF"); // Arabe (Afghanistan)
console.log(arAF.getWeekInfo()); // { firstDay: 6, weekend: [4, 5], minimalDays: 1 }

const dvMV = new Intl.Locale("dv-MV"); // Divehi (Maldives)
console.log(dvMV.getWeekInfo()); // { firstDay: 5, weekend: [6, 7], minimalDays: 1 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
