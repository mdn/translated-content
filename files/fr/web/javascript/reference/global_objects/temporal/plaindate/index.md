---
title: Temporal.PlainDate
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

L'objet **`Temporal.PlainDate`** représente une date du calendrier (une date sans heure ni fuseau horaire)&nbsp;; par exemple, un évènement sur un calendrier qui se produit pendant toute la journée, quel que soit le fuseau horaire. Il est fondamentalement représenté comme une date du calendrier ISO 8601, avec des champs pour l'année, le mois et le jour, et un système de calendrier associé.

## Description

Un objet `PlainDate` est essentiellement la partie date d'un objet {{JSxRef("Temporal.PlainDateTime")}}, avec les informations de temps supprimées. Comme les informations de date et d'heure n'ont pas beaucoup d'interaction, toutes les informations générales sur les propriétés de date sont documentées ici.

### Format RFC 9557

Les objets `PlainDate` peuvent être sérialisés et analysés en utilisant le format [RFC 9557 <sup>(ang.)</sup>](https://datatracker.ietf.org/doc/html/rfc9557), une extension du format [ISO 8601 / RFC 3339 <sup>(ang.)</sup>](https://datatracker.ietf.org/doc/html/rfc3339). La chaîne de caractères a la forme suivante (les espaces sont uniquement pour la lisibilité et ne doivent pas être présents dans la chaîne de caractères réelle)&nbsp;:

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Soit un nombre à quatre chiffres, soit un nombre à six chiffres avec un signe `+` ou `-`.
- `MM`
  - : Un nombre à deux chiffres de `01` à `12`.
- `DD`
  - : Un nombre à deux chiffres de `01` à `31`. Les composants `YYYY`, `MM` et `DD` peuvent être séparés par `-` ou rien.
- `[u-ca=calendar_id]` {{Optional_Inline}}
  - : Remplacez `calendar_id` par le calendrier à utiliser. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut, `[u-ca=iso8601]`. Peut avoir un _drapeau critique_ en préfixant la clé avec `!`&nbsp;: par exemple, `[!u-ca=iso8601]`. Ce drapeau indique généralement aux autres systèmes qu'il ne peut pas être ignoré s'ils ne le prennent pas en charge. L'analyseur `Temporal` générera une erreur si les annotations contiennent deux annotations de calendrier ou plus et que l'une d'elles est critique. Notez que le `YYYY-MM-DD` est toujours interprété comme une date du calendrier ISO 8601, puis converti en calendrier défini.

Comme entrée, vous pouvez éventuellement inclure l'heure, le décalage et l'identifiant du fuseau horaire, dans le même format que [`PlainDateTime`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#format_rfc_9557), mais ils seront ignorés. Les autres annotations au format `[clé=valeur]` sont également ignorées et ne doivent pas avoir le drapeau critique.

Lors de la sérialisation, vous pouvez configurer l'affichage de l'identifiant du calendrier et l'ajout d'un drapeau critique pour celui-ci.

### Fixer les dates invalides

Les méthodes {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}, {{JSxRef("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}, {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}, {{JSxRef("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} et leurs homologues dans d'autres objets `Temporal`, permettent de construire des dates en utilisant des propriétés spécifiques au calendrier. Les composants de la date peuvent être hors de portée. Dans le calendrier ISO, il s'agit toujours d'un _dépassement_, comme le mois étant supérieur à 12 ou le jour étant supérieur au nombre de jours, et le corriger ne consisterait qu'à limiter la valeur à la valeur maximale autorisée. Dans d'autres calendriers, le cas invalide peut être plus complexe. Lors de l'utilisation de l'option `overflow: "constrain"`, les dates invalides sont corrigées pour devenir valides de la manière suivante&nbsp;:

- Si le jour n'existe pas mais que le mois existe&nbsp;: choisissez le jour le plus proche dans le même mois. S'il y a deux dates également proches dans ce mois, choisissez la plus tardive.
- Si le mois est un mois intercalaire qui n'existe pas dans l'année&nbsp;: choisissez une autre date selon les conventions culturelles des utilisateur·ice·s de ce calendrier. Cela se traduira généralement par le même jour dans le mois précédent ou suivant où ce mois tomberait normalement dans une année bissextile.
- Si le mois n'existe pas dans l'année pour d'autres raisons&nbsp;: choisissez la date la plus proche qui est encore dans la même année. S'il y a deux dates également proches dans cette année, choisissez la plus tardive.
- Si l'année entière n'existe pas&nbsp;: choisissez la date la plus proche dans une autre année. S'il y a deux dates également proches, choisissez la plus tardive.

## Constructeur

- {{JSxRef("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} {{Experimental_Inline}}
  - : Crée un nouvel objet `Temporal.PlainDate` en fournissant directement les données sous-jacentes.

## Méthodes statiques

- {{JSxRef("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}
  - : Retourne un nombre (-1, 0 ou 1) indiquant si la première date est antérieure, identique ou postérieure à la deuxième date. Équivaut à comparer les champs année, mois et jour des dates ISO 8601 sous-jacentes.
- {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
  - : Crée un nouvel objet `Temporal.PlainDate` à partir d'un autre objet `Temporal.PlainDate`, d'un objet avec des propriétés de date ou d'une chaîne au format [RFC 9557](#format_rfc_9557).

## Propriétés d'instance

Ces propriétés sont définies sur `Temporal.PlainDate.prototype` et partagées par toutes les instances de `Temporal.PlainDate`.

- {{JSxRef("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}}
  - : Retourne une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé pour interpréter la date ISO 8601 interne.
- {{JSxRef("Object/constructor", "Temporal.PlainDate.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Temporal.PlainDate`, la valeur initiale est le constructeur {{JSxRef("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}.
- {{JSxRef("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
  - : Retourne un entier positif représentant l'index du jour dans le mois de cette date, basé sur 1, ce qui correspond au numéro de jour que vous verriez sur un calendrier. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Généralement commence à 1 et est continu, mais pas toujours.
- {{JSxRef("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
  - : Retourne un entier positif représentant l'index du jour dans la semaine de cette date, basé sur 1. Les jours de la semaine sont numérotés séquentiellement de `1` à {{JSxRef("Temporal/PlainDate/daysInWeek", "daysInWeek")}}, chaque numéro correspondant à son nom. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). 1 représente généralement le lundi dans le calendrier, même lorsque les locales utilisant le calendrier peuvent considérer un autre jour comme le premier jour de la semaine (voir {{JSxRef("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{JSxRef("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
  - : Retourne un entier positif représentant l'index du jour dans l'année de cette date, basé sur 1. Le premier jour de cette année est `1`, et le dernier jour est le {{JSxRef("Temporal/PlainDate/daysInYear", "daysInYear")}}. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
  - : Retourne un entier positif représentant le nombre de jours dans le mois de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
  - : Retourne un entier positif représentant le nombre de jours dans la semaine de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est toujours 7, mais dans d'autres systèmes de calendrier, cela peut varier d'une semaine à l'autre.
- {{JSxRef("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
  - : Retourne un entier positif représentant le nombre de jours dans l'année de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est 365, ou 366 dans une année bissextile.
- {{JSxRef("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
  - : Retourne une chaîne de caractères en minuscules spécifique au calendrier représentant l'ère de cette date, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier grégorien, c'est soit `"ce"`, soit `"bce"`.
- {{JSxRef("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
  - : Retourne un entier qui n'est pas négatif représentant l'année de cette date dans l'ère, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). L'index de l'année commence généralement à 1 (plus courant) ou 0, et les années dans une ère peuvent diminuer avec le temps (par exemple, BCE grégorien). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}
  - : Retourne un booléen indiquant si cette date se trouve dans une année bissextile. Une année bissextile est une année qui a plus de jours (en raison d'un jour ou d'un mois intercalaire) qu'une année commune. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
  - : Retourne un entier positif représentant l'index du mois dans l'année de cette date, basé sur 1. Le premier mois de cette année est `1`, et le dernier mois est le {{JSxRef("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Notez que contrairement à {{JSxRef("Date.prototype.getMonth()")}}, l'index est basé sur 1. Si le calendrier a des mois intercalaires, alors le mois avec le même {{JSxRef("Temporal/PlainDate/monthCode", "monthCode")}} peut avoir des index de `month` différents pour différentes années.
- {{JSxRef("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
  - : Retourne une chaîne de caractères spécifique au calendrier représentant le mois de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Généralement, c'est `M` suivi d'un numéro de mois à deux chiffres. Pour les mois intercalaires, c'est le code du mois précédent suivi de `L`. Si le mois intercalaire est le premier mois de l'année, le code est `M00L`.
- {{JSxRef("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
  - : Retourne un entier positif représentant le nombre de mois dans l'année de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est toujours 12, mais dans d'autres systèmes de calendrier, cela peut varier.
- {{JSxRef("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
  - : Retourne un entier positif représentant l'index de la semaine dans l'année de cette date, basé sur 1, ou `undefined` si le calendrier n'a pas de système de semaine bien défini. La première semaine de l'année est `1`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Notez que pour ISO 8601, les premiers et derniers jours de l'année peuvent être attribués à la dernière semaine de l'année précédente ou à la première semaine de l'année suivante.
- {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
  - : Retourne un entier représentant le nombre d'années de cette date par rapport au début d'une année d'époque spécifique au calendrier. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Généralement, l'année 1 est soit la première année de la dernière ère, soit l'année ISO 8601 `0001`. Si l'époque est au milieu de l'année, cette année aura la même valeur avant et après la date de début de l'ère.
- {{JSxRef("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
  - : Retourne un entier représentant l'année à associer à l'index de la semaine de cette date, ou `undefined` si le calendrier n'a pas de système de semaine bien défini. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Généralement, c'est l'année de la date, mais pour ISO 8601, les premiers et derniers jours de l'année peuvent être attribués à la dernière semaine de l'année précédente ou à la première semaine de l'année suivante, ce qui fait que `yearOfWeek` peut différer de 1.
- `Temporal.PlainDate.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Temporal.PlainDate"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
  - : Retourne un nouvel objet `Temporal.PlainDate` représentant cette date avancée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{JSxRef("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}}
  - : Retourne `true` si cette date est équivalente en valeur à une autre date (sous une forme convertible par {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}), et `false` sinon. Elles sont comparées à la fois par leurs valeurs de date et leurs calendriers.
- {{JSxRef("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre une autre date (sous une forme convertible par {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}) et cette date. La durée est positive si l'autre date est avant cette date, et négative si elle est après.
- {{JSxRef("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
  - : Retourne un nouvel objet `Temporal.PlainDate` représentant cette date reculée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{JSxRef("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
  - : Retourne une chaîne de caractères représentant cette date dans le même [format RFC 9557](#format_rfc_9557) que l'appel de {{JSxRef("Temporal/PlainDate/toString", "toString()")}}. Destiné à être appelé implicitement par {{JSxRef("JSON.stringify()")}}.
- {{JSxRef("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères représentant cette date de manière sensible à la langue.
- {{JSxRef("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.PlainDateTime")}} représentant cette date et une heure fournie dans le même système de calendrier.
- {{JSxRef("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.PlainMonthDay")}} représentant le {{JSxRef("Temporal/PlainDate/monthCode", "monthCode")}} et le {{JSxRef("Temporal/PlainDate/day", "day")}} de cette date dans le même système de calendrier.
- {{JSxRef("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.PlainYearMonth")}} représentant l'{{JSxRef("Temporal/PlainDate/year", "year")}} et le {{JSxRef("Temporal/PlainDate/month", "month")}} de cette date dans le même système de calendrier.
- {{JSxRef("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant cette date dans le [format RFC 9557](#format_rfc_9557).
- {{JSxRef("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.ZonedDateTime")}} représentant cette date, une heure fournie et un fuseau horaire fourni, dans le même système de calendrier.
- {{JSxRef("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette date et une autre date (sous une forme convertible par {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}). La durée est positive si l'autre date est après cette date, et négative si elle est avant.
- {{JSxRef("Temporal/PlainDate/valueOf", "Temporal.PlainDate.prototype.valueOf()")}}
  - : Lève une {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.PlainDate` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.
- {{JSxRef("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
  - : Retourne un nouvel objet `Temporal.PlainDate` représentant cette date avec certains champs remplacés par de nouvelles valeurs.
- {{JSxRef("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}}
  - : Retourne un nouvel objet `Temporal.PlainDate` représentant cette date interprétée dans le nouveau système de calendrier.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
