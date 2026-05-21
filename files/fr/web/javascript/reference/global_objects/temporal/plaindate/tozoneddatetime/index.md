---
title: "Temporal.PlainDate : méthode toZonedDateTime()"
short-title: toZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toZonedDateTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toZonedDateTime()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un nouvel objet {{JSxRef("Temporal.ZonedDateTime")}} représentant cette date, une heure fournie et un fuseau horaire fourni, dans le même système de calendrier.

## Syntaxe

```js-nolint
toZonedDateTime(timeZone)
toZonedDateTime(info)
```

### Paramètres

- `timeZone`
  - : Soit une chaîne de caractères, soit une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant l'option [`timeZone`](#timezone_2). Il s'agit d'une surcharge pratique, donc `toZonedDateTime(timeZone)` est équivalent à `toZonedDateTime({ timeZone })`, où `timeZone` est une chaîne de caractères ou une instance de {{JSxRef("Temporal.ZonedDateTime")}}. Cette surcharge est choisie lorsque le premier argument n'est pas un objet, ou que la propriété `timeZone` de l'objet est `undefined` (car les instances de `ZonedDateTime` ont une propriété {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} à la place).
- `info`
  - : Un objet contenant certaines ou toutes les propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
    - `plainTime` {{Optional_Inline}}
      - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainTime")}} représentant la composante temporelle du `ZonedDateTime` résultant. Elle est convertie en un objet `Temporal.PlainTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}. Par défaut, il s'agit de la première heure valide dans ce fuseau horaire à cette date du calendrier, généralement `"00:00:00"`, mais elle peut être différente si, par exemple, l'heure d'été saute minuit.
    - `timeZone`
      - : Soit une chaîne de caractères, soit une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant le fuseau horaire à utiliser. Si c'est une instance de `Temporal.ZonedDateTime`, son fuseau horaire est utilisé. Si c'est une chaîne de caractères, elle peut être un identifiant de fuseau horaire nommé, un identifiant de fuseau horaire avec décalage, ou une chaîne de date-heure contenant un identifiant de fuseau horaire ou un décalage (voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations).

### Valeur de retour

Un nouvel objet `Temporal.ZonedDateTime` représentant la date et l'heure définies par cette date, `plainTime` et `timeZone`, interprétées dans le système de calendrier de cette date.

Dans le cas de [ambiguïtés](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_entre_lheure_locale_et_lheure_utc), le comportement `compatible` est toujours utilisé&nbsp;: si l'heure tombe dans un intervalle, nous avançons de la longueur de l'intervalle&nbsp;; si l'heure tombe dans une ambiguïté, nous choisissons la première des deux possibilités. Cela signifie que le `ZonedDateTime` résultant peut avoir une date ou une heure potentiellement différente de l'entrée.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `timeZone` n'est pas une chaîne de caractères ou une instance de `Temporal.ZonedDateTime`.
- {{JSxRef("RangeError")}}
  - : Levée si `timeZone` est une chaîne de caractères qui n'est pas un identifiant de fuseau horaire valide.

## Exemples

### Utiliser la méthode `toZonedDateTime()`

```js
const summer = Temporal.PlainDate.from("2021-07-01");
// Juste le fuseau horaire
const summerTime = summer.toZonedDateTime("America/New_York");
console.log(summerTime.toString()); // 2021-07-01T00:00:00-04:00[America/New_York]

const winter = Temporal.PlainDate.from("2021-01-01");
// Fuseau horaire et heure
const winterTime = winter.toZonedDateTime({
  plainTime: "12:34:56",
  timeZone: "America/New_York",
});
console.log(winterTime.toString()); // 2021-01-01T12:34:56-05:00[America/New_York]

const spring = Temporal.PlainDate.from("2021-03-01");
// Fuseau horaire en tant qu'objet et heure en tant qu'objet
const springTime = spring.toZonedDateTime({
  plainTime: summerTime.toPlainTime(),
  timeZone: winterTime,
});
console.log(springTime.toString()); // 2021-03-01T00:00:00-05:00[America/New_York]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
