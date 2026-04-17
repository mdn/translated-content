---
title: Constructeur Temporal.PlainDateTime()
short-title: Temporal.PlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/PlainDateTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Le constructeur **`Temporal.PlainDateTime()`** crée des objets {{JSxRef("Temporal.PlainDateTime")}}.

Ce constructeur permet de créer des instances en fournissant directement les données sous-jacentes. Comme pour toutes les autres classes `Temporal`, vous devriez généralement créer des objets `Temporal.PlainDateTime` en utilisant la méthode statique {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}, qui peut gérer une variété de types d'entrée.

## Syntaxe

```js-nolint
new Temporal.PlainDateTime(year, month, day)
new Temporal.PlainDateTime(year, month, day, hour)
new Temporal.PlainDateTime(year, month, day, hour, minute)
new Temporal.PlainDateTime(year, month, day, hour, minute, second)
new Temporal.PlainDateTime(year, month, day, hour, minute, second, millisecond)
new Temporal.PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond)
new Temporal.PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond)
new Temporal.PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar)
```

> [!NOTE]
> Le constructeur `Temporal.PlainDateTime()` ne peut être utilisé qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `year`
  - : Un nombre, tronqué à un entier, représentant l'année dans le système de calendrier ISO.
- `month`
  - : Un nombre, tronqué à un entier, représentant le mois dans le système de calendrier ISO.
- `day`
  - : Un nombre, tronqué à un entier, représentant le jour du mois dans le système de calendrier ISO.
- `hour` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, qui représente la composante des heures.
- `minute` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, qui représente la composante des minutes.
- `second` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, qui représente la composante des secondes.
- `millisecond` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, qui représente la composante des millisecondes.
- `microsecond` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, qui représente la composante des microsecondes.
- `nanosecond` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, qui représente la composante des nanosecondes.
- `calendar` {{Optional_Inline}}
  - : Une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) à utiliser. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut, `"iso8601"`. Notez que, quel que soit le `calendar`, les `year`, `month` et `day` doivent être dans le système de calendrier ISO 8601.

### Valeur de retour

Un nouvel objet `Temporal.PlainDateTime`, représentant la date et l'heure définies par les paramètres.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Aucun composant de date et heure n'est un nombre fini.
    - La combinaison des composants de date et d'heure ne représente pas une date valide dans le système de calendrier ISO, ou n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est de ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.
    - `calendar` n'est pas un identifiant de calendrier valide.

## Exemples

### Utiliser `Temporal.PlainDateTime()`

```js
const dt = new Temporal.PlainDateTime(2021, 7, 1);
console.log(dt.toString()); // 2021-07-01T00:00:00

const dt2 = new Temporal.PlainDateTime(2021, 7, 1, 0, 0, 0, 0, 0, 0, "hebrew");
console.log(dt2.toString()); // 2021-07-01T00:00:00[u-ca=hebrew]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode statique {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
