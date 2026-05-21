---
title: "Temporal.ZonedDateTime : méthode startOfDay()"
short-title: startOfDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/startOfDay
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`startOfDay()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un objet {{JSxRef("Temporal.ZonedDateTime")}} représentant le premier instant de cette date dans le fuseau horaire. Elle a généralement une heure de `00:00:00`, mais peut être différente si minuit n'existe pas à cause d'un changement de décalage, auquel cas la première heure existante est retournée.

Elle est équivalente à l'appel de {{JSxRef("Temporal/ZonedDateTime/withPlainTime", "withPlainTime()")}} sans argument.

## Syntaxe

```js-nolint
startOfDay()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{JSxRef("Temporal.ZonedDateTime")}} avec l'instant `t`, tel que&nbsp;:

- La date à `t` est différente de la date une nanoseconde avant `t`.
- La date à `t` est identique à la date de `this`.

## Exemples

### Utiliser la méthode `startOfDay()`

```js
// Aux États-Unis, les transitions d'heure d'été ont lieu à 2&nbsp;h, donc minuit existe
const dt = Temporal.ZonedDateTime.from(
  "2024-03-10T12:00:00-04:00[America/New_York]",
);
console.log(dt.startOfDay().toString()); // "2024-03-10T00:00:00-05:00[America/New_York]"

// Au Brésil, les transitions d'heure d'été avaient lieu à minuit, donc minuit n'existait pas
const dt2 = Temporal.ZonedDateTime.from(
  "2015-10-18T12:00-02:00[America/Sao_Paulo]",
);
console.log(dt2.startOfDay().toString()); // "2015-10-18T01:00:00-02:00[America/Sao_Paulo]"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
