---
title: Temporal.Instant
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

L'objet **`Temporal.Instant`** représente un point unique dans le temps, avec une précision à la nanoseconde. Il est fondamentalement représenté comme le nombre de nanosecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC), sans fuseau horaire ni système de calendrier.

## Description

`Temporal.Instant` est sémantiquement identique à {{JSxRef("Date")}}. Les deux encapsulent un point unique dans le temps, mais `Temporal.Instant` est plus précis car il stocke les nanosecondes plutôt que les millisecondes. `Temporal.Instant` évite également les pièges de `Date` car il ne suppose aucune information de calendrier ou de fuseau horaire—si vous souhaitez lire des informations de date ou d'heure telles que l'année ou le mois, vous devez d'abord le convertir en {{JSxRef("Temporal.ZonedDateTime")}}, en utilisant {{JSxRef("Temporal/Instant/toZonedDateTimeISO()", "toZonedDateTimeISO()")}}.

Vous pouvez convertir un objet `Date` en `Temporal.Instant` en utilisant la méthode {{JSxRef("Date.prototype.toTemporalInstant()")}}, qui doit être préférée à d'autres méthodes telles que {{JSxRef("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} car elle implique moins de code utilisateur·ice et peut être plus optimisée. Vous pouvez également convertir un `Temporal.Instant` en `Date` en utilisant ses millisecondes depuis l'époque, par exemple `new Date(instant.epochMilliseconds)`.

### Format RFC 9557

Les objets `Instant` peuvent être sérialisés et analysés en utilisant le format [RFC 9557 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc9557), une extension du format [ISO 8601 / RFC 3339 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc3339). La chaîne de caractères a la forme suivante (les espaces sont uniquement pour la lisibilité et ne doivent pas être présents dans la chaîne de caractères réelle)&nbsp;:

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm
```

- `YYYY`
  - : Soit un nombre à quatre chiffres, soit un nombre à six chiffres avec un signe `+` ou `-`.
- `MM`
  - : Un nombre à deux chiffres de `01` à `12`.
- `DD`
  - : Un nombre à deux chiffres de `01` à `31`. Les composants `YYYY`, `MM` et `DD` peuvent être séparés par `-` ou rien.
- `T`
  - : Le séparateur date-heure, qui peut être `T`, `t` ou un espace.
- `HH`
  - : Un nombre à deux chiffres de `00` à `23`.
- `mm` {{Optional_Inline}}
  - : Un nombre à deux chiffres de `00` à `59`. Par défaut `00`.
- `ss.sssssssss` {{Optional_Inline}}
  - : Un nombre à deux chiffres de `00` à `59`. Peut être suivi optionnellement par un `.` ou `,` et un à neuf chiffres. Par défaut `00`. Les composants `HH`, `mm` et `ss` peuvent être séparés par `:` ou rien. Vous pouvez omettre soit `ss` seul, soit `ss` et `mm`, donc l'heure peut être sous trois formes&nbsp;: `HH`, `HH:mm` ou `HH:mm:ss.sssssssss`.
- `Z/±HH:mm`
  - : Soit le désignateur UTC `Z` ou `z`, soit un décalage par rapport à l'UTC sous la forme `+` ou `-` suivi du même format que le composant horaire. Notez que la précision subminute (`:ss.sssssssss`) peut ne pas être prise en charge par d'autres systèmes, et est acceptée mais jamais affichée. Si un décalage est fourni, l'heure est interprétée dans le décalage défini.

En entrée, vous pouvez éventuellement inclure l'identifiant de fuseau horaire et le calendrier, dans le même format que [`ZonedDateTime`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format), mais ils seront ignorés. D'autres annotations au format `[key=value]` sont également ignorées, et elles ne doivent pas avoir le drapeau critique.

Lors de la sérialisation, vous pouvez configurer les chiffres fractionnaires des secondes et le décalage.

## Constructeur

- {{JSxRef("Temporal/Instant/Instant", "Temporal.Instant()")}} {{Experimental_Inline}}
  - : Crée un nouvel objet `Temporal.Instant` en fournissant directement les données sous-jacentes.

## Méthodes statiques

- {{JSxRef("Temporal/Instant/compare", "Temporal.Instant.compare()")}}
  - : Retourne un nombre (-1, 0 ou 1) indiquant si le premier instant précède, est identique ou suit le deuxième instant. Équivaut à comparer les {{JSxRef("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} des deux instants.
- {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}
  - : Crée un nouvel objet `Temporal.Instant` à partir d'un autre objet `Temporal.Instant` ou d'une chaîne de caractères au format [RFC 9557](#format_rfc_9557).
- {{JSxRef("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
  - : Crée un nouvel objet `Temporal.Instant` à partir du nombre de millisecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC).
- {{JSxRef("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
  - : Crée un nouvel objet `Temporal.Instant` à partir du nombre de nanosecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC).

## Propriétés d'instance

Ces propriétés sont définies sur `Temporal.Instant.prototype` et partagées par toutes les instances de `Temporal.Instant`.

- {{JSxRef("Object/constructor", "Temporal.Instant.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Temporal.Instant`, la valeur initiale est le constructeur {{JSxRef("Temporal/Instant/Instant", "Temporal.Instant()")}}.
- {{JSxRef("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
  - : Retourne un entier représentant le nombre de millisecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC) jusqu'à cet instant. Équivaut à diviser `epochNanoseconds` par `1e6` et à arrondir à l'entier inférieur.
- {{JSxRef("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
  - : Retourne un {{JSxRef("BigInt")}} représentant le nombre de nanosecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC) jusqu'à cet instant.
- `Temporal.Instant.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Temporal.Instant"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
  - : Retourne un nouvel objet `Temporal.Instant` représentant cet instant avancé d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{JSxRef("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}}
  - : Retourne `true` si cet instant est équivalent en valeur à un autre instant (sous une forme convertible par {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}), et `false` sinon. Ils sont comparés par leurs nanosecondes depuis l'époque. Équivaut à `Temporal.Instant.compare(this, other) === 0`.
- {{JSxRef("Temporal/Instant/round", "Temporal.Instant.prototype.round()")}}
  - : Retourne un nouvel objet `Temporal.Instant` représentant cet instant arrondi à l'unité donnée.
- {{JSxRef("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée écoulée depuis un autre instant (sous une forme convertible par {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}) jusqu'à cet instant. La durée est positive si l'autre instant est avant cet instant, et négative si après.
- {{JSxRef("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
  - : Retourne un nouvel objet `Temporal.Instant` représentant cet instant reculé d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{JSxRef("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
  - : Retourne une chaîne de caractères représentant cet instant dans le même [format RFC 9557](#rfc_9557_format) que l'appel à {{JSxRef("Temporal/Instant/toString", "toString()")}}. Destiné à être appelé implicitement par {{JSxRef("JSON.stringify()")}}.
- {{JSxRef("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères représentant cet instant de manière sensible à la langue. Dans les implémentations avec le support de l'API [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), cette méthode délègue à `Intl.DateTimeFormat`.
- {{JSxRef("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant cet instant dans le [format RFC 9557](#rfc_9557_format) en utilisant le fuseau horaire défini.
- {{JSxRef("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.ZonedDateTime")}} représentant cet instant dans le fuseau horaire défini en utilisant le système de calendrier ISO 8601.
- {{JSxRef("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cet instant et un autre instant (sous une forme convertible par {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}). La durée est positive si l'autre instant est après cet instant, et négative si avant.
- {{JSxRef("Temporal/Instant/valueOf", "Temporal.Instant.prototype.valueOf()")}}
  - : Lève un objet {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.Instant` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
