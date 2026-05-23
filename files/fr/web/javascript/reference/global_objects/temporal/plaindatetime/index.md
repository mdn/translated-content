---
title: Temporal.PlainDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

L'objet **`Temporal.PlainDateTime`** représente une date (date du calendrier) et une heure (heure murale) sans fuseau horaire. Il est fondamentalement représenté comme une combinaison d'une [date](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (avec un système de calendrier associé) et d'une [heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime).

## Description

Un `PlainDateTime` est essentiellement la combinaison d'un {{JSxRef("Temporal.PlainDate")}} et d'un {{JSxRef("Temporal.PlainTime")}}. Comme les informations de date et d'heure n'ont pas beaucoup d'interaction, toutes les informations générales sur les propriétés de date sont documentées dans l'objet `PlainDate`, et toutes les informations générales sur les propriétés de temps sont documentées dans l'objet `PlainTime`.

Si la date et l'heure représentent un instant défini qui doit rester invariant à travers les fuseaux horaires, vous devriez utiliser l'objet {{JSxRef("Temporal.ZonedDateTime")}} à la place. Utilisez `PlainDateTime` lorsque vous devez représenter un événement se produisant à une heure murale spécifique qui peut être un instant différent dans différents fuseaux horaires.

### Format RFC 9557

Les objets `PlainDateTime` peuvent être sérialisés et analysés en utilisant le format [RFC 9557 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc9557), une extension du format [ISO 8601 / RFC 3339 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc3339). La chaîne de caractères a la forme suivante (les espaces sont uniquement pour la lisibilité et ne doivent pas être présents dans la chaîne de caractères réelle)&nbsp;:

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss [u-ca=calendar_id]
```

- `YYYY`
  - : Soit un nombre à quatre chiffres, soit un nombre à six chiffres avec un signe `+` ou `-`.
- `MM`
  - : Un nombre à deux chiffres de `01` à `12`.
- `DD`
  - : Un nombre à deux chiffres de `01` à `31`. Les composants `YYYY`, `MM` et `DD` peuvent être séparés par `-` ou rien.
- `T` {{Optional_Inline}}
  - : Le séparateur ca valeur de date et d'heure, qui peut être `T`, `t` ou un espace. Présent si et seulement si `HH` est présent.
- `HH` {{Optional_Inline}}
  - : Un nombre à deux chiffres de `00` à `23`. Par défaut `00`.
- `mm` {{Optional_Inline}}
  - : Un nombre à deux chiffres de `00` à `59`. Par défaut `00`.
- `ss.sssssssss` {{Optional_Inline}}
  - : Un nombre à deux chiffres de `00` à `59`. Peut être suivi optionnellement d'un `.` ou `,` et d'un à neuf chiffres. Par défaut `00`. Les composants `HH`, `mm` et `ss` peuvent être séparés par `:` ou rien. Vous pouvez omettre soit `ss` seul, soit `ss` et `mm`, donc l'heure peut être sous trois formes&nbsp;: `HH`, `HH:mm` ou `HH:mm:ss.sssssssss`.
- `[u-ca=calendar_id]` {{Optional_Inline}}
  - : Remplacez `calendar_id` par le calendrier à utiliser. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut `[u-ca=iso8601]`. Peut avoir un _drapeau critique_ en préfixant la clé avec `!`&nbsp;: par exemple, `[!u-ca=iso8601]`. Ce drapeau indique généralement aux autres systèmes qu'il ne peut pas être ignoré s'ils ne le prennent pas en charge. L'analyseur `Temporal` générera une erreur si les annotations contiennent deux annotations de calendrier ou plus et qu'une d'entre elles est critique. Notez que le `YYYY-MM-DD` est toujours interprété comme une date du calendrier ISO 8601, puis converti en calendrier défini.

Comme entrée, vous pouvez éventuellement inclure le décalage et l'identifiant du fuseau horaire, dans le même format que [`ZonedDateTime`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#format_rfc_9557), mais ils seront ignorés. Notez que le décalage ne doit _pas_ être `Z`. Les autres annotations au format `[clé=valeur]` sont également ignorées, et elles ne doivent pas avoir le drapeau critique.

Lors de la sérialisation, vous pouvez configurer le nombre de chiffres fractionnaires pour les secondes, décider d'afficher l'identifiant du calendrier et ajouter un drapeau critique pour celui-ci.

## Constructeur

- {{JSxRef("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} {{Experimental_Inline}}
  - : Crée un nouvel objet `Temporal.PlainDateTime` en fournissant directement les données sous-jacentes.

## Méthodes statiques

- {{JSxRef("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}}
  - : Retourne un nombre (-1, 0 ou 1) indiquant si le premier valeur de date et d'heure vient avant, est le même que, ou vient après le deuxième ca valeur de date et d'heure. Équivaut à comparer d'abord leurs dates, puis à comparer leurs heures si les dates sont les mêmes.
- {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
  - : Crée un nouvel objet `Temporal.PlainDateTime` à partir d'un autre objet `Temporal.PlainDateTime`, d'un objet avec des propriétés de date et d'heure, ou d'une chaîne de caractères au format [RFC 9557](#format_rfc_9557).

## Propriétés d'instance

Ces propriétés sont définies sur `Temporal.PlainDateTime.prototype` et partagées par toutes les instances de `Temporal.PlainDateTime`.

- {{JSxRef("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}}
  - : Retourne une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé pour interpréter la date ISO 8601 interne.
- {{JSxRef("Object/constructor", "Temporal.PlainDateTime.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Temporal.PlainDateTime`, la valeur initiale est le constructeur {{JSxRef("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}}.
- {{JSxRef("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
  - : Retourne un entier positif représentant l'indice du jour dans le mois de cette date, basé sur 1, ce qui correspond au même numéro de jour que vous verriez sur un calendrier. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Généralement commence à 1 et est continu, mais pas toujours.
- {{JSxRef("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
  - : Retourne un entier positif représentant l'indice du jour dans la semaine de cette date, basé sur 1. Les jours de la semaine sont numérotés séquentiellement de `1` à {{JSxRef("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}, chaque numéro correspondant à son nom. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). 1 représente généralement le lundi dans le calendrier, même lorsque les locales utilisant le calendrier peuvent considérer un autre jour comme le premier jour de la semaine (voir {{JSxRef("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{JSxRef("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}}
  - : Retourne un entier positif représentant l'indice du jour dans l'année de cette date, basé sur 1. Le premier jour de cette année est `1`, et le dernier jour est le {{JSxRef("Temporal/PlainDateTime/daysInYear", "daysInYear")}}. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
  - : Retourne un entier positif représentant le nombre de jours dans le mois de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}}
  - : Retourne un entier positif représentant le nombre de jours dans la semaine de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est toujours 7, mais dans d'autres systèmes de calendrier, cela peut varier d'une semaine à l'autre.
- {{JSxRef("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
  - : Retourne un entier positif représentant le nombre de jours dans l'année de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est 365, ou 366 dans une année bissextile.
- {{JSxRef("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}}
  - : Retourne une chaîne de caractères, en minuscules, spécifique au calendrier représentant l'ère de cette date, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier grégorien, c'est soit `"ce"`, soit `"bce"`.
- {{JSxRef("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}}
  - : Retourne un entier non négatif représentant l'année de cette date dans l'ère, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). L'indice de l'année commence généralement à 1 (plus courant) ou 0, et les années dans une ère peuvent diminuer avec le temps (par exemple, BCE grégorien). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainDateTime/hour", "Temporal.PlainDateTime.prototype.hour")}}
  - : Retourne un entier de 0 à 23 représentant la composante heure de cette heure.
- {{JSxRef("Temporal/PlainDateTime/inLeapYear", "Temporal.PlainDateTime.prototype.inLeapYear")}}
  - : Retourne un booléen indiquant si cette date se trouve dans une année bissextile. Une année bissextile est une année qui a plus de jours (en raison d'un jour ou d'un mois intercalaire) qu'une année commune. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainDateTime/microsecond", "Temporal.PlainDateTime.prototype.microsecond")}}
  - : Retourne un entier de 0 à 999 représentant la composante microseconde (10<sup>-6</sup> seconde) de cette heure.
- {{JSxRef("Temporal/PlainDateTime/millisecond", "Temporal.PlainDateTime.prototype.millisecond")}}
  - : Retourne un entier de 0 à 999 représentant la composante milliseconde (10<sup>-3</sup> seconde) de cette heure.
- {{JSxRef("Temporal/PlainDateTime/minute", "Temporal.PlainDateTime.prototype.minute")}}
  - : Retourne un entier de 0 à 59 représentant la composante minute de cette heure.
- {{JSxRef("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
  - : Retourne un entier positif représentant l'indice du mois dans l'année de cette date, basé sur 1. Le premier mois de cette année est `1`, et le dernier mois est le {{JSxRef("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Notez que contrairement à {{JSxRef("Date.prototype.getMonth()")}}, l'indice est basé sur 1. Si le calendrier a des mois intercalaires, alors le mois avec le même {{JSxRef("Temporal/PlainDateTime/monthCode", "monthCode")}} peut avoir des indices de `month` différents pour différentes années.
- {{JSxRef("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}}
  - : Retourne une chaîne de caractères d'un calendrier défini représentant le mois de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Habituellement, c'est `M` suivi d'un numéro de mois à deux chiffres. Pour les mois intercalaires, c'est le code du mois précédent suivi de `L`. Si le mois intercalaire est le premier mois de l'année, le code est `M00L`.
- {{JSxRef("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}}
  - : Retourne un entier positif représentant le nombre de mois dans l'année de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est toujours 12, mais dans d'autres systèmes de calendrier, cela peut varier.
- {{JSxRef("Temporal/PlainDateTime/nanosecond", "Temporal.PlainDateTime.prototype.nanosecond")}}
  - : Retourne un entier de 0 à 999 représentant la composante nanoseconde (10<sup>-9</sup> seconde) de cette heure.
- {{JSxRef("Temporal/PlainDateTime/second", "Temporal.PlainDateTime.prototype.second")}}
  - : Retourne un entier de 0 à 59 représentant la composante seconde de cette heure.
- {{JSxRef("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}}
  - : Retourne un entier positif représentant l'indice de la semaine dans l'année de cette date, basé sur 1, ou `undefined` si le calendrier n'a pas de système de semaine bien défini. La première semaine de l'année est `1`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Notez que pour ISO 8601, les premiers et derniers jours de l'année peuvent être attribués à la dernière semaine de l'année précédente ou à la première semaine de l'année suivante.
- {{JSxRef("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
  - : Retourne un entier représentant le nombre d'années de cette date par rapport au début d'une année d'époque spécifique au calendrier. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Habituellement, l'année 1 est soit la première année de la dernière ère, soit l'année ISO 8601 `0001`. Si l'époque est au milieu de l'année, cette année aura la même valeur avant et après la date de début de l'ère.
- {{JSxRef("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
  - : Retourne un entier représentant l'année à associer à l'indice de la semaine de cette date, ou `undefined` si le calendrier n'a pas de système de semaine bien défini. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Habituellement, c'est l'année de la date, mais pour ISO 8601, les premiers et derniers jours de l'année peuvent être attribués à la dernière semaine de l'année précédente ou à la première semaine de l'année suivante, ce qui fait que `yearOfWeek` peut différer de 1.
- `Temporal.PlainDateTime.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne `"Temporal.PlainDateTime"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
  - : Retourne un nouvel objet `Temporal.PlainDateTime` représentant cette valeur de date et d'heure avancée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{JSxRef("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}}
  - : Retourne `true` si cette valeur de date et d'heure est équivalente en valeur à une autre date et d'heure (sous une forme convertible par {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}), et `false` sinon. Elles sont comparées à la fois par leurs valeurs de date et d'heure et par leurs calendriers, donc deux dates-heures de calendriers différents peuvent être considérées comme égales par {{JSxRef("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} mais pas par `equals()`.
- {{JSxRef("Temporal/PlainDateTime/round", "Temporal.PlainDateTime.prototype.round()")}}
  - : Retourne un nouvel objet `Temporal.PlainDateTime` représentant cette valeur de date et d'heure arrondie à l'unité donnée.
- {{JSxRef("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre une autre valeur de date et d'heure (sous une forme convertible par {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}) et cette valeur de date et d'heure. La durée est positive si l'autre valeur de date et d'heure est avant cette valeur de date et d'heure, et négative si elle est après.
- {{JSxRef("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
  - : Retourne un nouvel objet `Temporal.PlainDateTime` représentant cette valeur de date et d'heure reculée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{JSxRef("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
  - : Retourne une chaîne de caractères représentant cette valeur de date et d'heure dans le même [format RFC 9557](#format_rfc_9557) que l'appel de {{JSxRef("Temporal/PlainDateTime/toString", "toString()")}}. Destiné à être appelé implicitement par {{JSxRef("JSON.stringify()")}}.
- {{JSxRef("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères avec une représentation sensible à la langue de cette valeur de date et d'heure.
- {{JSxRef("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.PlainDate")}} représentant la partie date (année, mois, jour) de cette valeur de date et d'heure dans le même système de calendrier.
- {{JSxRef("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.PlainTime")}} représentant la partie temps (heure, minute, seconde et composantes de sous-seconde) de cette valeur de date et d'heure.
- {{JSxRef("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant cette valeur de date et d'heure dans le [format RFC 9557](#format_rfc_9557).
- {{JSxRef("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}
  - : Retourne une nouvelle instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant la même date et heure que le `Temporal.PlainDateTime`, mais dans le fuseau horaire défini.
- {{JSxRef("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette valeur de date et d'heure et une autre valeur de date et d'heure (sous une forme convertible par {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}). La durée est positive si l'autre valeur de date et d'heure est après cette ca valeur de date et d'heure, et négative si elle est avant.
- {{JSxRef("Temporal/PlainDateTime/valueOf", "Temporal.PlainDateTime.prototype.valueOf()")}}
  - : Lève un objet {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.PlainDateTime` d'être [implicitement converties en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.
- {{JSxRef("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
  - : Retourne un nouvel objet `Temporal.PlainDateTime` représentant cette valeur de date et d'heure avec certains champs remplacés par de nouvelles valeurs.
- {{JSxRef("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}}
  - : Retourne un nouvel objet `Temporal.PlainDateTime` représentant cette valeur de date et d'heure interprétée dans le nouveau système de calendrier.
- {{JSxRef("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}}
  - : Retourne un nouvel objet `Temporal.PlainDateTime` représentant cette valeur de date et d'heure avec la partie temps entièrement remplacée par le nouveau temps (sous une forme convertible par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.PlainTime")}}
- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
