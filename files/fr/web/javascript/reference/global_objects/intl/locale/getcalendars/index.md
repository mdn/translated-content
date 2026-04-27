---
title: "Intl.Locale : méthode getCalendars()"
short-title: getCalendars()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getCalendars()`** des instances de {{JSxRef("Intl.Locale")}} retourne une liste d'un ou plusieurs identifiants de calendrier uniques pour cette locale.

> [!NOTE]
> Dans certaines versions de certains navigateurs, cette méthode était implémentée comme une propriété d'accesseur appelée `calendars`. Cependant, comme elle retourne un nouveau tableau à chaque accès, elle est maintenant implémentée comme une méthode pour éviter la situation où `locale.calendars === locale.calendars` retourne `false`. Consultez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

## Syntaxe

```js-nolint
getCalendars()
```

### Paramètres

Aucun.

### Valeur de retour

Un tableau de chaînes de caractères représentant tous les calendriers couramment utilisés pour la `Locale`, triés par ordre de préférence décroissant. Si la `Locale` possède déjà un {{JSxRef("Intl.Locale.prototype.calendar", "calendar")}}, alors le tableau retourné contient cette seule valeur.

Pour une liste des types de calendriers pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendrier_pris_en_charge).

## Exemples

### Obtenir la liste des calendriers pris en charge

Si l'objet `Locale` ne possède pas déjà un `calendar`, `getCalendars()` liste tous les calendriers couramment utilisés pour la `Locale` donnée. Pour des exemples de définition explicite d'un `calendar`, voir les [exemples de `calendar`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#exemples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getCalendars()); // ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getCalendars()); // ["gregory", "japanese"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La propriété {{JSxRef("Intl.Locale.prototype.calendar")}}
- [Identifiants de calendrier Unicode <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) dans la spécification du langage de balisage des données de locale Unicode
