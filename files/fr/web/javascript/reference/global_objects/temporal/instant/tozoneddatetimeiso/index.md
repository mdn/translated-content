---
title: "Temporal.Instant : méthode toZonedDateTimeISO()"
short-title: toZonedDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toZonedDateTimeISO
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toZonedDateTimeISO()`** des instances de {{JSxRef("Temporal.Instant")}} retourne un nouvel objet {{JSxRef("Temporal.ZonedDateTime")}} représentant cet instant dans le fuseau horaire défini en utilisant le système de calendrier ISO 8601.

## Syntaxe

```js-nolint
toZonedDateTimeISO(timeZone)
```

### Paramètres

- `timeZone`
  - : Soit une chaîne de caractères, soit une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant le fuseau horaire à utiliser. Si c'est une instance de `Temporal.ZonedDateTime`, son fuseau horaire est utilisé. Si c'est une chaîne de caractères, elle peut être un identifiant de fuseau horaire nommé, un identifiant de fuseau horaire avec décalage, ou une chaîne de caractères de date-heure contenant un identifiant de fuseau horaire ou un décalage (voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations).

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.ZonedDateTime")}} représentant cet instant dans le fuseau horaire défini en utilisant le système de calendrier ISO 8601.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le nom du fuseau horaire est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si `timeZone` n'est pas une chaîne de caractères ou une instance de `Temporal.ZonedDateTime`.

## Exemples

### Utiliser la méthode `toZonedDateTimeISO()`

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.123456789Z");
const zonedDateTime = instant.toZonedDateTimeISO("America/New_York");
console.log(zonedDateTime.toString()); // 2021-08-01T08:34:56.123456789-04:00[America/New_York]

const localDateTime = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
console.log(localDateTime.toString()); // Cet instant dans votre fuseau horaire
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
