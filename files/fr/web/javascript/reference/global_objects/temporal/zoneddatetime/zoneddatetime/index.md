---
title: Constructeur Temporal.ZonedDateTime()
short-title: Temporal.ZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Le constructeur **`Temporal.ZonedDateTime()`** crée des objets {{JSxRef("Temporal.ZonedDateTime")}}.

Ce constructeur vous permet de créer des instances en fournissant directement les données sous-jacentes. Comme pour toutes les autres classes `Temporal`, vous devriez généralement construire des objets `Temporal.ZonedDateTime` en utilisant la méthode statique {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, qui peut gérer une variété de types d'entrée.

## Syntaxe

```js-nolint
new Temporal.ZonedDateTime(epochNanoseconds, timeZone)
new Temporal.ZonedDateTime(epochNanoseconds, timeZone, calendar)
```

> [!NOTE]
> Le constructeur `Temporal.ZonedDateTime()` ne peut être utilisé qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `epochNanoseconds`
  - : Un grand entier ({{JSxRef("BigInt")}}) qui correspond à la propriété {{JSxRef("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}.
- `timeZone`
  - : Une chaîne de caractères qui correspond à la propriété {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}. Contrairement à toutes les autres API `Temporal`, elle doit être un identifiant de fuseau horaire valide (soit nommé, soit décalé) tel quel, et ne peut pas être une instance de `Temporal.ZonedDateTime` ou une chaîne de caractères de date et d'heure.
- `calendar` {{Optional_Inline}}
  - : Une chaîne de caractères qui correspond à la propriété {{JSxRef("Temporal/ZonedDateTime/calendarId", "calendarId")}}. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut, `"iso8601"`.

### Valeur de retour

Un nouvel objet `Temporal.ZonedDateTime`, représentant l'instant spécifique défini par les paramètres.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `timeZone` ou `calendar` n'est pas une chaîne de caractères.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `epochNanoseconds` n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est de ±10<sup>8</sup> jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.
    - `timeZone` n'est pas un identifiant de fuseau horaire valide.
    - `calendar` n'est pas un identifiant de calendrier valide.

## Exemples

### Utiliser Temporal.ZonedDateTime()

```js
const zdt = new Temporal.ZonedDateTime(0n, "America/New_York");
console.log(zdt.toString()); // '1969-12-31T19:00:00-05:00[America/New_York]'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode statique {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
