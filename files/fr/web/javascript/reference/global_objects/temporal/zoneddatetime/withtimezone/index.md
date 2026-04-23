---
title: "Temporal.ZonedDateTime : méthode withTimeZone()"
short-title: withTimeZone()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withTimeZone
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`withTimeZone()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet `Temporal.ZonedDateTime` représentant le même instant que cette date et cette heure mais dans le nouveau fuseau horaire. Comme tous les objets `Temporal` sont conçus pour être immuables, cette méthode fonctionne essentiellement comme le mutateur de la propriété {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} de la date et de l'heure.

Pour remplacer les propriétés de composant de la date et de l'heure, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}}. Pour remplacer son calendrier, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}.

## Syntaxe

```js-nolint
withTimeZone(timeZone)
```

### Paramètres

- `timeZone`
  - : Une chaîne de caractères ou une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant le fuseau horaire à utiliser. Si c'est une instance de `Temporal.ZonedDateTime`, son fuseau horaire est utilisé. Si c'est une chaîne de caractères, elle peut être un identifiant de fuseau horaire nommé, un identifiant de fuseau horaire par décalage, ou une chaîne de caractères de date et d'heure contenant un identifiant de fuseau horaire ou un décalage (voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations).

### Valeur de retour

Un nouvel objet `Temporal.ZonedDateTime` représentant le même instant que cette date et cette heure mais dans le nouveau fuseau horaire.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `timeZone` n'est pas une chaîne de caractères ou une instance de `Temporal.ZonedDateTime`.
- {{JSxRef("RangeError")}}
  - : Levée si le nom du fuseau horaire n'est pas valide.

## Exemples

### Utiliser la méthode `withTimeZone()`

```js
const meetingTime = Temporal.ZonedDateTime.from(
  "2021-08-01T12:00[America/New_York]",
);
const meetingTimeInParis = meetingTime.withTimeZone("Europe/Paris");
console.log(meetingTimeInParis.toString()); // 2021-08-01T18:00:00+02:00[Europe/Paris]
```

### Remplacer le fuseau horaire tout en conservant la même heure affichée

Dans le cas rare où vous souhaitez conserver la même heure affichée mais changer le fuseau horaire (et obtenir un instant différent), convertissez-le d'abord en {{JSxRef("Temporal.PlainDateTime")}}&nbsp;:

```js
const meetingTime = Temporal.ZonedDateTime.from(
  "2021-08-01T12:00[America/New_York]",
);
const meetingTimeInParis = meetingTime
  .toPlainDateTime()
  .toZonedDateTime("Europe/Paris");
console.log(meetingTimeInParis.toString()); // 2021-08-01T12:00:00+02:00[Europe/Paris]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
- La méthode statique {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
