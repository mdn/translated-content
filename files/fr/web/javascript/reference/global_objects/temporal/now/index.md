---
title: Temporal.Now
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

L'objet **`Temporal.Now`** d'espace de noms contient des méthodes statiques pour obtenir l'heure actuelle dans différents formats.

## Description

Contrairement à la plupart des objets universels, `Temporal.Now` n'est pas un constructeur. Vous ne pouvez pas l'utiliser avec l'opérateur {{JSxRef("Operators/new", "new")}} ni invoquer l'objet `Temporal.Now` comme une fonction. Toutes les propriétés et méthodes de `Temporal.Now` sont statiques (tout comme l'objet {{JSxRef("Math")}}).

Fondamentalement, l'heure système est retournée par le système d'exploitation comme un temps écoulé depuis l'époque Unix (généralement avec une précision au milliseconde, mais pouvant également être au nanoseconde). {{JSxRef("Temporal/Now/instant", "Temporal.Now.instant()")}} retourne ce temps sous forme d'objet {{JSxRef("Temporal.Instant")}}.

Un instant peut être interprété dans un fuseau horaire (qui est le fuseau horaire système {{JSxRef("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} par défaut) de la même manière que {{JSxRef("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}. Pour obtenir un objet {{JSxRef("Temporal.ZonedDateTime")}}, vous pouvez utiliser {{JSxRef("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}}. Vous pouvez également obtenir différentes parties de la date et de l'heure, en utilisant {{JSxRef("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}, {{JSxRef("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}} et {{JSxRef("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}}.

Par exemple, si l'ordinateur est réglé sur le fuseau horaire «&nbsp;America/New_York&nbsp;», `Temporal.Now.zonedDateTimeISO()` retourne une date-heure zonée comme&nbsp;: `2021-08-01T10:40:12.345-04:00[America/New_York]`. Dans ce cas, `Temporal.Now.plainTimeISO()` retourne la partie temps de cette date-heure zonée&nbsp;: `10:40:12.345`. Cependant, si vous appelez `Temporal.Now.plainTimeISO("UTC")`, cela retourne la partie temps de la date-heure zonée dans le fuseau horaire UTC&nbsp;: `14:40:12.345`. Cela est particulièrement utile pour la communication entre systèmes où l'autre extrémité peut s'attendre à l'heure dans un fuseau horaire différent.

### Réduire la précision temporelle

Pour offrir une protection contre les attaques par analyse temporelle et contre [l'empreinte numérique](/fr/docs/Glossary/Fingerprinting), la précision des fonctions de `Temporal.Now` peut être arrondie selon les paramètres du navigateur. Dans Firefox, la préférence `privacy.reduceTimerPrecision` est activée par défaut et sa valeur par défaut est de 2ms. Vous pouvez aussi activer `privacy.resistFingerprinting`, auquel cas la précision sera de 100ms ou la valeur de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, la plus grande des deux.

Par exemple, avec une précision temporelle réduite, le résultat de `Temporal.Now.instant().epochMilliseconds` sera toujours un multiple de 2, ou un multiple de 100 (ou de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) lorsque `privacy.resistFingerprinting` est activé.

```js
// précision temporelle réduite (2ms) dans Firefox 60
Temporal.Now.instant().epochMilliseconds;
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// précision temporelle réduite avec `privacy.resistFingerprinting` activé
Temporal.Now.instant().epochMilliseconds;
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Propriétés statiques

- `Temporal.Now[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Temporal.Now"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes statiques

- {{JSxRef("Temporal/Now/instant", "Temporal.Now.instant()")}}
  - : Retourne l'heure actuelle sous forme d'objet {{JSxRef("Temporal.Instant")}}.
- {{JSxRef("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}
  - : Retourne la date actuelle sous forme d'objet {{JSxRef("Temporal.PlainDate")}}, dans le calendrier ISO 8601 et le fuseau horaire défini.
- {{JSxRef("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}}
  - : Retourne la date et l'heure actuelles sous forme d'objet {{JSxRef("Temporal.PlainDateTime")}}, dans le calendrier ISO 8601 et le fuseau horaire défini.
- {{JSxRef("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}}
  - : Retourne l'heure actuelle sous forme d'objet {{JSxRef("Temporal.PlainTime")}}, dans le fuseau horaire défini.
- {{JSxRef("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}
  - : Retourne un [identifiant de fuseau horaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) représentant le fuseau horaire actuel du système.
- {{JSxRef("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}}
  - : Retourne la date et l'heure actuelles sous forme d'objet {{JSxRef("Temporal.ZonedDateTime")}}, dans le calendrier ISO 8601 et le fuseau horaire défini.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal")}}
- L'objet {{JSxRef("Temporal.Instant")}}
- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- L'objet {{JSxRef("Temporal.PlainTime")}}
- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
