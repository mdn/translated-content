---
title: Temporal.Now
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

L'objet **`Temporal.Now`** d'espace de noms contient des méthodes statiques pour obtenir l'heure actuelle dans différents formats.

## Description

Contrairement à la plupart des objets universels, `Temporal.Now` n'est pas un constructeur. Vous ne pouvez pas l'utiliser avec l'opérateur {{JSxRef("new")}} ni invoquer l'objet `Temporal.Now` comme une fonction. Toutes les propriétés et méthodes de `Temporal.Now` sont statiques (tout comme l'objet {{JSxRef("Math")}}).

Fondamentalement, l'heure système est retournée par le système d'exploitation comme un temps écoulé depuis l'époque Unix. {{JSxRef("Temporal/Now/instant", "Temporal.Now.instant()")}} retourne ce temps sous forme d'objet {{JSxRef("Temporal.Instant")}}. Bien que cet objet puisse représenter des nanosecondes, la résolution de l'heure actuelle dépend de l'horloge système et des paramètres du navigateur.

Un instant peut être interprété dans un fuseau horaire (qui est le fuseau horaire système {{JSxRef("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} par défaut) de la même manière que {{JSxRef("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}. Pour obtenir un objet {{JSxRef("Temporal.ZonedDateTime")}}, vous pouvez utiliser {{JSxRef("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}}. Vous pouvez également obtenir différentes parties de la date et de l'heure, en utilisant {{JSxRef("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}, {{JSxRef("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}} et {{JSxRef("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}}.

Par exemple, si l'ordinateur est réglé sur le fuseau horaire «&nbsp;America/New_York&nbsp;», `Temporal.Now.zonedDateTimeISO()` retourne une date-heure zonée comme&nbsp;: `2021-08-01T10:40:12.345-04:00[America/New_York]`. Dans ce cas, `Temporal.Now.plainTimeISO()` retourne la partie temps de cette date-heure zonée&nbsp;: `10:40:12.345`. Cependant, si vous appelez `Temporal.Now.plainTimeISO("UTC")`, cela retourne la partie temps de la date-heure zonée dans le fuseau horaire UTC&nbsp;: `14:40:12.345`. Cela est particulièrement utile pour la communication entre systèmes où l'autre extrémité peut s'attendre à l'heure dans un fuseau horaire différent.

### Réduire la précision temporelle

Pour offrir une protection contre les attaques par analyse temporelle et contre [l'empreinte numérique](/fr/docs/Glossary/Fingerprinting), la précision de l'heure actuelle retournée par les méthodes `Temporal.Now` peut être réduite en fonction des paramètres du navigateur.

Dans Chrome, l'intervalle d'arrondi est de `0.1ms`, ou de `0.005ms` dans les contextes isolés entre origines.

Dans Firefox, ces méthodes obtiennent l'heure actuelle de la même manière que {{JSxRef("Date.now()")}}. Elles héritent de la précision de cette lecture de l'horloge sans introduire d'inexactitude supplémentaire. L'horodatage est toujours un nombre entier de millisecondes, donc sa résolution est limitée à 1 ms dans tous les contextes. L'accès à `epochNanoseconds` n'augmente pas sa précision.

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

- L'objet natif {{JSxRef("Temporal")}}
- L'objet natif {{JSxRef("Temporal.Instant")}}
- L'objet natif {{JSxRef("Temporal.PlainDate")}}
- L'objet natif {{JSxRef("Temporal.PlainDateTime")}}
- L'objet natif {{JSxRef("Temporal.PlainTime")}}
- L'objet natif {{JSxRef("Temporal.ZonedDateTime")}}
