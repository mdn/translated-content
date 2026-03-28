---
title: "Temporal.Now : méthode statique zonedDateTimeISO()"
short-title: zonedDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/zonedDateTimeISO
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.Now.zonedDateTimeISO()`** retourne la date et l'heure actuelles sous forme d'objet {{JSxRef("Temporal.ZonedDateTime")}}, dans le calendrier ISO 8601 et le fuseau horaire défini.

## Syntaxe

```js-nolint
Temporal.Now.zonedDateTimeISO()
Temporal.Now.zonedDateTimeISO(timeZone)
```

### Paramètres

- `timeZone` {{Optional_Inline}}
  - : Soit une chaîne de caractères, soit une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant le fuseau horaire dans lequel interpréter l'heure système. Si c'est une instance de `Temporal.ZonedDateTime`, son fuseau horaire est utilisé. Si c'est une chaîne de caractères, il peut s'agir d'un identifiant de fuseau horaire nommé, d'un identifiant de fuseau horaire avec décalage, ou d'une chaîne de caractères de date-heure contenant un identifiant de fuseau horaire ou un décalage (voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations).

### Valeur de retour

La date et l'heure actuelles dans le fuseau horaire défini, sous forme d'objet {{JSxRef("Temporal.ZonedDateTime")}} utilisant le calendrier ISO 8601. A la même précision que {{JSxRef("Temporal/Now/instant", "Temporal.Now.instant()")}}.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le fuseau horaire est invalide.

## Exemples

### Utiliser la méthode `zonedDateTimeISO()`

```js
// La date et l'heure actuelles dans le fuseau horaire du système
const dateTime = Temporal.Now.zonedDateTimeISO();
console.log(dateTime); // par exemple : 2021-10-01T06:12:34.567890123+03:00[Africa/Nairobi]

// La date et l'heure actuelles dans le fuseau horaire "America/New_York"
const dateTimeInNewYork = Temporal.Now.zonedDateTimeISO("America/New_York");
console.log(dateTimeInNewYork); // par exemple : 2021-09-30T23:12:34.567890123-04:00[America/New_York]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Now")}}
- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
