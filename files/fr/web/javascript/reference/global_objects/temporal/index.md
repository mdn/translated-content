---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

L'objet **`Temporal`** permet la gestion des dates et heures dans divers scénarios, y compris la représentation intégrée des fuseaux horaires et des calendriers, les conversions d'heures murales, les opérations arithmétiques, le formatage, et plus encore. Il est conçu comme un remplacement complet de l'objet {{JSxRef("Date")}}.

## Description

Contrairement à la plupart des objets globaux, `Temporal` n'est pas un constructeur. Vous ne pouvez pas utiliser [l'opérateur `new`](/fr/docs/Web/JavaScript/Reference/Operators/new) ni invoquer l'objet `Temporal` comme une fonction. Toutes les propriétés et méthodes de `Temporal` sont statiques (comme pour l'objet {{JSxRef("Math")}}).

`Temporal` possède une API complexe et puissante. Il expose plus de 200 méthodes utilitaires par l'intermédiaire de plusieurs classes, ce qui peut sembler très complexe. Nous proposons un aperçu général de la façon dont ces API sont liées entre elles.

### Contexte et concepts

JavaScript dispose de l'objet {{JSxRef("Date")}} pour gérer les dates et les heures depuis ses débuts. Cependant, l'API `Date` est basée sur la classe `java.util.Date` mal conçue de Java, remplacée au début des années 2010&nbsp;; mais, en raison de l'objectif de compatibilité ascendante de JavaScript, `Date` est restée dans le langage.

La leçon importante à prefacer l'ensemble de cette introduction est que **la gestion des dates est complexe**. La plupart des problèmes de `Date` peuvent être corrigés en ajoutant des méthodes, mais un défaut fondamental de conception subsiste&nbsp;: il expose tellement de méthodes sur le même objet que les développeur·euse·s sont souvent confus·e·s quant à ce qu'il faut utiliser, ce qui conduit à des pièges inattendus. Une API bien conçue doit non seulement faire plus, mais aussi faire _moins_ à chaque niveau d'abstraction, car prévenir les mauvais usages est aussi important que de permettre des cas d'utilisation.

Les objets `Date` portent deux casquettes simultanément&nbsp;:

- En tant [qu'horodatage](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide)&nbsp;: le nombre de millisecondes ou de nanosecondes écoulées depuis un moment précis (appelé _l'epoch_).
- En tant que combinaison de [composants](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#composants_de_date_et_fuseaux_horaires)&nbsp;: année, mois, jour, heure, minute, seconde, milliseconde et nanoseconde. Les identificateurs d'année, de mois et de jour n'ont de sens que s'ils sont considérés par rapport à un _système de calendrier_. L'ensemble de la combinaison correspond à un instant unique de l'histoire lorsqu'il est associé à un fuseau horaire. Les objets `Date` fournissent des méthodes pour lire et modifier ces composants.

[Les fuseaux horaires](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) sont à l'origine d'un grand nombre de bugs liés aux dates. Lorsqu'on interagit avec un `Date` par le modèle «&nbsp;combinaison de composants&nbsp;», l'heure ne peut être que dans deux fuseaux&nbsp;: UTC et local (appareil), et il n'est pas possible de définir un fuseau arbitraire. Il manque également le concept de «&nbsp;sans fuseau horaire&nbsp;»&nbsp;: on parle alors de _date civile_ (pour les dates) ou _d'heure murale_ (pour les heures), qui est une heure que l'on «&nbsp;lit sur un calendrier ou une horloge&nbsp;». Par exemple, si vous réglez une alarme quotidienne, vous voudrez la régler sur «&nbsp;8:00AM&nbsp;» indépendamment de l'heure d'été ou de vos déplacements vers un autre fuseau horaire.

Un second défaut de `Date` est l'absence d'un [système de calendrier](#calendriers). Beaucoup connaissent peut-être le calendrier grégorien, où il existe deux ères, BC et AD&nbsp;; il y a 12 mois&nbsp;; chaque mois compte un nombre de jours différent&nbsp;; il y a une année bissextile tous les 4 ans&nbsp;; et ainsi de suite. Cependant, certains de ces concepts peuvent ne pas s'appliquer lorsque vous travaillez avec un autre système de calendrier, comme le calendrier hébraïque, le calendrier chinois, le calendrier japonais, etc. Avec `Date`, vous ne pouvez travailler qu'avec le modèle du calendrier grégorien.

Il existe d'autres héritages indésirables de `Date`, tels que le fait que tous les mutateurs modifient l'objet (ce qui provoque souvent des effets secondaires indésirables), le [format de chaîne date-heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#format_de_chaîne_date-heure) impossible à analyser de façon cohérente, etc. En fin de compte, la meilleure solution est de construire une nouvelle API depuis le début, ce qui est le rôle de `Temporal`.

### Aperçu de l'API

`Temporal` est un espace de noms, comme {{JSxRef("Intl")}}. Il contient plusieurs classes et espaces de noms, chacun étant conçu pour gérer un aspect spécifique de la gestion des dates et des heures. Les classes peuvent être regroupées comme suit&nbsp;:

- Représentation d'une durée temporelle (une différence entre deux points dans le temps)&nbsp;: {{JSxRef("Temporal.Duration")}}
- Représentation d'un point dans le temps&nbsp;:
  - Représentation d'un instant unique dans l'histoire&nbsp;:
    - En tant qu'horodatage&nbsp;: {{JSxRef("Temporal.Instant")}}
    - En tant que combinaison de composants date-heure associée à un fuseau horaire&nbsp;: {{JSxRef("Temporal.ZonedDateTime")}}
  - Représentation d'une date/heure sans fuseau horaire (toutes préfixées par «&nbsp;Plain&nbsp;»)&nbsp;:
    - Date (année, mois, jour) + time (heure, minute, seconde, milliseconde, microseconde, nanoseconde)&nbsp;: {{JSxRef("Temporal.PlainDateTime")}} (Note&nbsp;: `ZonedDateTime` est équivalent à `PlainDateTime` plus un fuseau horaire)
      - Date (année, mois, jour)&nbsp;: {{JSxRef("Temporal.PlainDate")}}
        - Année, mois&nbsp;: {{JSxRef("Temporal.PlainYearMonth")}}
        - Mois, jour&nbsp;: {{JSxRef("Temporal.PlainMonthDay")}}
      - Heure (heure, minute, seconde, milliseconde, microseconde, nanoseconde)&nbsp;: {{JSxRef("Temporal.PlainTime")}}

De plus, il existe également un autre espace de noms utilitaire, {{JSxRef("Temporal.Now")}}, qui fournit des méthodes pour obtenir l'heure actuelle dans différents formats.

### Classes d'interface partagée

Il existe de nombreuses classes dans l'espace de noms `Temporal`, mais elles partagent de nombreuses méthodes similaires. Le tableau suivant répertorie toutes les méthodes de chaque classe (à l'exception des [méthodes de conversion](#conversion_entre_les_classes))&nbsp;:

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>Construction</th>
<td>{{JSxRef("Temporal/Instant/Instant", "Instant()")}}<br>{{JSxRef("Temporal/Instant/from", "Instant.from()")}}<br>{{JSxRef("Temporal/Instant/fromEpochMilliseconds", "Instant.fromEpochMilliseconds()")}}<br>{{JSxRef("Temporal/Instant/fromEpochNanoseconds", "Instant.fromEpochNanoseconds()")}}</td>
<td>{{JSxRef("Temporal/ZonedDateTime/ZonedDateTime", "ZonedDateTime()")}}<br>{{JSxRef("Temporal/ZonedDateTime/from", "ZonedDateTime.from()")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/PlainDateTime", "PlainDateTime()")}}<br>{{JSxRef("Temporal/PlainDateTime/from", "PlainDateTime.from()")}}</td>
<td>{{JSxRef("Temporal/PlainDate/PlainDate", "PlainDate()")}}<br>{{JSxRef("Temporal/PlainDate/from", "PlainDate.from()")}}</td>
<td>{{JSxRef("Temporal/PlainTime/PlainTime", "PlainTime()")}}<br>{{JSxRef("Temporal/PlainTime/from", "PlainTime.from()")}}</td>
<td>{{JSxRef("Temporal/PlainYearMonth/PlainYearMonth", "PlainYearMonth()")}}<br>{{JSxRef("Temporal/PlainYearMonth/from", "PlainYearMonth.from()")}}</td>
<td>{{JSxRef("Temporal/PlainMonthDay/PlainMonthDay", "PlainMonthDay()")}}<br>{{JSxRef("Temporal/PlainMonthDay/from", "PlainMonthDay.from()")}}</td>
</tr>
<tr>
<th>Mise à jour</th>
<td>N/A</td>
<td>{{JSxRef("Temporal/ZonedDateTime/with", "with()")}}<br>{{JSxRef("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}<br>{{JSxRef("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}<br>{{JSxRef("Temporal/ZonedDateTime/withPlainTime", "withPlainTime()")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/with", "with()")}}<br>{{JSxRef("Temporal/PlainDateTime/withCalendar", "withCalendar()")}}<br>{{JSxRef("Temporal/PlainDateTime/withPlainTime", "withPlainTime()")}}</td>
<td>{{JSxRef("Temporal/PlainDate/with", "with()")}}<br>{{JSxRef("Temporal/PlainDate/withCalendar", "withCalendar()")}}</td>
<td>{{JSxRef("Temporal/PlainTime/with", "with()")}}</td>
<td>{{JSxRef("Temporal/PlainYearMonth/with", "with()")}}</td>
<td>{{JSxRef("Temporal/PlainMonthDay/with", "with()")}}</td>
</tr>
<tr>
<th>Arithmétique</th>
<td>{{JSxRef("Temporal/Instant/add", "add()")}}<br>{{JSxRef("Temporal/Instant/subtract", "subtract()")}}<br>{{JSxRef("Temporal/Instant/since", "since()")}}<br>{{JSxRef("Temporal/Instant/until", "until()")}}</td>
<td>{{JSxRef("Temporal/ZonedDateTime/add", "add()")}}<br>{{JSxRef("Temporal/ZonedDateTime/subtract", "subtract()")}}<br>{{JSxRef("Temporal/ZonedDateTime/since", "since()")}}<br>{{JSxRef("Temporal/ZonedDateTime/until", "until()")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/add", "add()")}}<br>{{JSxRef("Temporal/PlainDateTime/subtract", "subtract()")}}<br>{{JSxRef("Temporal/PlainDateTime/since", "since()")}}<br>{{JSxRef("Temporal/PlainDateTime/until", "until()")}}</td>
<td>{{JSxRef("Temporal/PlainDate/add", "add()")}}<br>{{JSxRef("Temporal/PlainDate/subtract", "subtract()")}}<br>{{JSxRef("Temporal/PlainDate/since", "since()")}}<br>{{JSxRef("Temporal/PlainDate/until", "until()")}}</td>
<td>{{JSxRef("Temporal/PlainTime/add", "add()")}}<br>{{JSxRef("Temporal/PlainTime/subtract", "subtract()")}}<br>{{JSxRef("Temporal/PlainTime/since", "since()")}}<br>{{JSxRef("Temporal/PlainTime/until", "until()")}}</td>
<td>{{JSxRef("Temporal/PlainYearMonth/add", "add()")}}<br>{{JSxRef("Temporal/PlainYearMonth/subtract", "subtract()")}}<br>{{JSxRef("Temporal/PlainYearMonth/since", "since()")}}<br>{{JSxRef("Temporal/PlainYearMonth/until", "until()")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Arrondi</th>
<td>{{JSxRef("Temporal/Instant/round", "round()")}}</td>
<td>{{JSxRef("Temporal/ZonedDateTime/round", "round()")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/round", "round()")}}</td>
<td>N/A</td>
<td>{{JSxRef("Temporal/PlainTime/round", "round()")}}</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Comparaison</th>
<td>{{JSxRef("Temporal/Instant/equals", "equals()")}}<br>{{JSxRef("Temporal/Instant/compare", "Instant.compare()")}}</td>
<td>{{JSxRef("Temporal/ZonedDateTime/equals", "equals()")}}<br>{{JSxRef("Temporal/ZonedDateTime/compare", "ZonedDateTime.compare()")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/equals", "equals()")}}<br>{{JSxRef("Temporal/PlainDateTime/compare", "PlainDateTime.compare()")}}</td>
<td>{{JSxRef("Temporal/PlainDate/equals", "equals()")}}<br>{{JSxRef("Temporal/PlainDate/compare", "PlainDate.compare()")}}</td>
<td>{{JSxRef("Temporal/PlainTime/equals", "equals()")}}<br>{{JSxRef("Temporal/PlainTime/compare", "PlainTime.compare()")}}</td>
<td>{{JSxRef("Temporal/PlainYearMonth/equals", "equals()")}}<br>{{JSxRef("Temporal/PlainYearMonth/compare", "PlainYearMonth.compare()")}}</td>
<td>{{JSxRef("Temporal/PlainMonthDay/equals", "equals()")}}</td>
</tr>
<tr>
<th>Sérialisation</th>
<td>{{JSxRef("Temporal/Instant/toJSON", "toJSON()")}}<br>{{JSxRef("Temporal/Instant/toLocaleString", "toLocaleString()")}}<br>{{JSxRef("Temporal/Instant/toString", "toString()")}}<br>{{JSxRef("Temporal/Instant/valueOf", "valueOf()")}}</td>
<td>{{JSxRef("Temporal/ZonedDateTime/toJSON", "toJSON()")}}<br>{{JSxRef("Temporal/ZonedDateTime/toLocaleString", "toLocaleString()")}}<br>{{JSxRef("Temporal/ZonedDateTime/toString", "toString()")}}<br>{{JSxRef("Temporal/ZonedDateTime/valueOf", "valueOf()")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/toJSON", "toJSON()")}}<br>{{JSxRef("Temporal/PlainDateTime/toLocaleString", "toLocaleString()")}}<br>{{JSxRef("Temporal/PlainDateTime/toString", "toString()")}}<br>{{JSxRef("Temporal/PlainDateTime/valueOf", "valueOf()")}}</td>
<td>{{JSxRef("Temporal/PlainDate/toJSON", "toJSON()")}}<br>{{JSxRef("Temporal/PlainDate/toLocaleString", "toLocaleString()")}}<br>{{JSxRef("Temporal/PlainDate/toString", "toString()")}}<br>{{JSxRef("Temporal/PlainDate/valueOf", "valueOf()")}}</td>
<td>{{JSxRef("Temporal/PlainTime/toJSON", "toJSON()")}}<br>{{JSxRef("Temporal/PlainTime/toLocaleString", "toLocaleString()")}}<br>{{JSxRef("Temporal/PlainTime/toString", "toString()")}}<br>{{JSxRef("Temporal/PlainTime/valueOf", "valueOf()")}}</td>
<td>{{JSxRef("Temporal/PlainYearMonth/toJSON", "toJSON()")}}<br>{{JSxRef("Temporal/PlainYearMonth/toLocaleString", "toLocaleString()")}}<br>{{JSxRef("Temporal/PlainYearMonth/toString", "toString()")}}<br>{{JSxRef("Temporal/PlainYearMonth/valueOf", "valueOf()")}}</td>
<td>{{JSxRef("Temporal/PlainMonthDay/toJSON", "toJSON()")}}<br>{{JSxRef("Temporal/PlainMonthDay/toLocaleString", "toLocaleString()")}}<br>{{JSxRef("Temporal/PlainMonthDay/toString", "toString()")}}<br>{{JSxRef("Temporal/PlainMonthDay/valueOf", "valueOf()")}}</td>
</tr>
</tbody>
</table>

Le tableau suivant résume les propriétés disponibles pour chaque classe, vous donnant une idée des informations que chaque classe peut représenter.

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>Calendrier</th>
<td>N/A</td>
<td>{{JSxRef("Temporal/ZonedDateTime/calendarId", "calendarId")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/calendarId", "calendarId")}}</td>
<td>{{JSxRef("Temporal/PlainDate/calendarId", "calendarId")}}</td>
<td>N/A</td>
<td>{{JSxRef("Temporal/PlainYearMonth/calendarId", "calendarId")}}</td>
<td>{{JSxRef("Temporal/PlainMonthDay/calendarId", "calendarId")}}</td>
</tr>
<tr>
<th>Associé à l'année</th>
<td>N/A</td>
<td>{{JSxRef("Temporal/ZonedDateTime/era", "era")}}<br>{{JSxRef("Temporal/ZonedDateTime/eraYear", "eraYear")}}<br>{{JSxRef("Temporal/ZonedDateTime/year", "year")}}<br>{{JSxRef("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}<br>{{JSxRef("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}<br>{{JSxRef("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/era", "era")}}<br>{{JSxRef("Temporal/PlainDateTime/eraYear", "eraYear")}}<br>{{JSxRef("Temporal/PlainDateTime/year", "year")}}<br>{{JSxRef("Temporal/PlainDateTime/inLeapYear", "inLeapYear")}}<br>{{JSxRef("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}<br>{{JSxRef("Temporal/PlainDateTime/daysInYear", "daysInYear")}}</td>
<td>{{JSxRef("Temporal/PlainDate/era", "era")}}<br>{{JSxRef("Temporal/PlainDate/eraYear", "eraYear")}}<br>{{JSxRef("Temporal/PlainDate/year", "year")}}<br>{{JSxRef("Temporal/PlainDate/inLeapYear", "inLeapYear")}}<br>{{JSxRef("Temporal/PlainDate/monthsInYear", "monthsInYear")}}<br>{{JSxRef("Temporal/PlainDate/daysInYear", "daysInYear")}}</td>
<td>N/A</td>
<td>{{JSxRef("Temporal/PlainYearMonth/era", "era")}}<br>{{JSxRef("Temporal/PlainYearMonth/eraYear", "eraYear")}}<br>{{JSxRef("Temporal/PlainYearMonth/year", "year")}}<br>{{JSxRef("Temporal/PlainYearMonth/inLeapYear", "inLeapYear")}}<br>{{JSxRef("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}<br>{{JSxRef("Temporal/PlainYearMonth/daysInYear", "daysInYear")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Associé au mois</th>
<td>N/A</td>
<td>{{JSxRef("Temporal/ZonedDateTime/month", "month")}}<br>{{JSxRef("Temporal/ZonedDateTime/monthCode", "monthCode")}}<br>{{JSxRef("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/month", "month")}}<br>{{JSxRef("Temporal/PlainDateTime/monthCode", "monthCode")}}<br>{{JSxRef("Temporal/PlainDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{JSxRef("Temporal/PlainDate/month", "month")}}<br>{{JSxRef("Temporal/PlainDate/monthCode", "monthCode")}}<br>{{JSxRef("Temporal/PlainDate/daysInMonth", "daysInMonth")}}</td>
<td>N/A</td>
<td>{{JSxRef("Temporal/PlainYearMonth/month", "month")}}<br>{{JSxRef("Temporal/PlainYearMonth/monthCode", "monthCode")}}<br>{{JSxRef("Temporal/PlainYearMonth/daysInMonth", "daysInMonth")}}</td>
<td>{{JSxRef("Temporal/PlainMonthDay/monthCode", "monthCode")}}</td>
</tr>
<tr>
<th>Associé à la semaine</th>
<td>N/A</td>
<td>{{JSxRef("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}<br>{{JSxRef("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}<br>{{JSxRef("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}}<br>{{JSxRef("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}}<br>{{JSxRef("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{JSxRef("Temporal/PlainDate/weekOfYear", "weekOfYear")}}<br>{{JSxRef("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}}<br>{{JSxRef("Temporal/PlainDate/daysInWeek", "daysInWeek")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Associé au jour</th>
<td>N/A</td>
<td>{{JSxRef("Temporal/ZonedDateTime/day", "day")}}<br>{{JSxRef("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}<br>{{JSxRef("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/day", "day")}}<br>{{JSxRef("Temporal/PlainDateTime/dayOfWeek", "dayOfWeek")}}<br>{{JSxRef("Temporal/PlainDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{JSxRef("Temporal/PlainDate/day", "day")}}<br>{{JSxRef("Temporal/PlainDate/dayOfWeek", "dayOfWeek")}}<br>{{JSxRef("Temporal/PlainDate/dayOfYear", "dayOfYear")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>{{JSxRef("Temporal/PlainMonthDay/day", "day")}}</td>
</tr>
<tr>
<th>Composants temporels</th>
<td>N/A</td>
<td>{{JSxRef("Temporal/ZonedDateTime/hour", "hour")}}<br>{{JSxRef("Temporal/ZonedDateTime/minute", "minute")}}<br>{{JSxRef("Temporal/ZonedDateTime/second", "second")}}<br>{{JSxRef("Temporal/ZonedDateTime/millisecond", "millisecond")}}<br>{{JSxRef("Temporal/ZonedDateTime/microsecond", "microsecond")}}<br>{{JSxRef("Temporal/ZonedDateTime/nanosecond", "nanosecond")}}</td>
<td>{{JSxRef("Temporal/PlainDateTime/hour", "hour")}}<br>{{JSxRef("Temporal/PlainDateTime/minute", "minute")}}<br>{{JSxRef("Temporal/PlainDateTime/second", "second")}}<br>{{JSxRef("Temporal/PlainDateTime/millisecond", "millisecond")}}<br>{{JSxRef("Temporal/PlainDateTime/microsecond", "microsecond")}}<br>{{JSxRef("Temporal/PlainDateTime/nanosecond", "nanosecond")}}</td>
<td>N/A</td>
<td>{{JSxRef("Temporal/PlainTime/hour", "hour")}}<br>{{JSxRef("Temporal/PlainTime/minute", "minute")}}<br>{{JSxRef("Temporal/PlainTime/second", "second")}}<br>{{JSxRef("Temporal/PlainTime/millisecond", "millisecond")}}<br>{{JSxRef("Temporal/PlainTime/microsecond", "microsecond")}}<br>{{JSxRef("Temporal/PlainTime/nanosecond", "nanosecond")}}</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Fuseau horaire</th>
<td>N/A</td>
<td>{{JSxRef("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}<br>{{JSxRef("Temporal/ZonedDateTime/offset", "offset")}}<br>{{JSxRef("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}}<br>{{JSxRef("Temporal/ZonedDateTime/hoursInDay", "hoursInDay")}}<br>{{JSxRef("Temporal/ZonedDateTime/getTimeZoneTransition", "getTimeZoneTransition()")}}<br>{{JSxRef("Temporal/ZonedDateTime/startOfDay", "startOfDay()")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Temps epoch</th>
<td>{{JSxRef("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}<br>{{JSxRef("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}</td>
<td>{{JSxRef("Temporal/ZonedDateTime/epochMilliseconds", "epochMilliseconds")}}<br>{{JSxRef("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

### Conversion entre les classes

Le tableau ci-dessous résume toutes les méthodes de conversion existant sur chaque classe.

<table>
<tbody>
<tr>
<td rowspan="2" colspan="2"></td>
<td colspan="7">Comment convertir à partir de...</td>
</tr>
<tr>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
<tr><td rowspan="7">à...</td><th><code>Instant</code></th><td>/</td><td>{{JSxRef("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">Convertir d'abord en <code>ZonedDateTime</code></td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{JSxRef("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{JSxRef("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{JSxRef("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{JSxRef("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} (pass as argument)</td><td rowspan="2" colspan="2">Convertir d'abord en <code>PlainDate</code></td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">Convertir d'abord en <code>ZonedDateTime</code></td><td>{{JSxRef("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{JSxRef("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{JSxRef("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} (pass as argument)</td></tr>
<tr><th><code>PlainDate</code></th><td>{{JSxRef("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{JSxRef("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>Pas de chevauchement d'informations</td><td>{{JSxRef("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{JSxRef("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{JSxRef("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{JSxRef("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>Pas de chevauchement d'informations</td><td>/</td><td colspan="2">Pas de chevauchement d'informations</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Convertir d'abord en <code>PlainDate</code></td><td>{{JSxRef("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">Pas de chevauchement d'informations</td><td>/</td><td>Convertir d'abord en <code>PlainDate</code></td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{JSxRef("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Convertir d'abord en <code>PlainDate</code></td><td>/</td></tr>
</tbody>
</table>

Avec ces tableaux, vous devriez avoir une idée de base de la façon de naviguer dans l'API `Temporal`.

### Calendriers

Un calendrier est une façon d'organiser les jours, généralement en périodes de semaines, de mois, d'années et d'ères. La majeure partie du monde utilise le calendrier grégorien, mais il existe de nombreux autres calendriers, notamment dans des contextes religieux et culturels. Par défaut, tous les objets `Temporal` sensibles au calendrier utilisent le système de calendrier ISO 8601, qui est basé sur le calendrier grégorien et définit des règles supplémentaires de numérotation des semaines. [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendrier_pris_en_charge) liste la plupart des calendriers susceptibles d'être pris en charge par les navigateurs. Nous proposons ici un aperçu de la façon dont les systèmes de calendrier sont formés pour vous aider à comprendre les facteurs qui peuvent varier d'un calendrier à l'autre.

Il existe trois grands évènements périodiques sur Terre&nbsp;: sa révolution autour du soleil (365,242 jours pour un tour), la révolution de la lune autour de la Terre (29,53 jours de nouvelle lune à nouvelle lune), et sa rotation sur son axe (24 heures de lever de soleil à lever de soleil). Chaque culture a la même mesure d'un «&nbsp;jour&nbsp;», soit 24 heures. Les changements occasionnels comme l'heure d'été ne font pas partie du calendrier, mais relèvent des informations du [fuseau horaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages).

- Certains calendriers définissent principalement une année comme ayant en moyenne 365,242 jours, en définissant des années de 365 jours et en ajoutant un jour supplémentaire, le _jour intercalaire_, environ tous les 4 ans. Ensuite, l'année peut être divisée en parties appelées mois. Ces calendriers sont appelés _calendriers solaires_. Le calendrier grégorien et le calendrier solaire hijri sont des calendriers solaires.
- Certains calendriers définissent principalement un mois comme ayant en moyenne 29,5 jours, en alternant des mois de 29 et 30 jours. Ensuite, 12 mois peuvent former une année de 354 jours. Ces calendriers sont appelés _calendriers lunaires_. Le calendrier islamique est un calendrier lunaire. Comme une année lunaire est artificielle et ne correspond pas au cycle des saisons, les calendriers lunaires sont généralement plus rares.
- Certains calendriers définissent aussi principalement les mois selon les cycles lunaires, comme les calendriers lunaires. Ensuite, pour compenser l'écart de 11 jours avec l'année solaire, un mois supplémentaire, le _mois intercalaire_, est ajouté environ tous les 3 ans. Ces calendriers sont appelés _calendriers lunisolaire_. Le calendrier hébraïque et le calendrier chinois sont des calendriers lunisolaire.

Dans `Temporal`, chaque date selon un système de calendrier est identifiée de façon unique par trois composants&nbsp;: `year`, `month` et `day`. Si `year` est généralement un entier positif, il peut aussi être nul ou négatif, et il augmente de façon monotone avec le temps. L'année `1` (ou `0`, si elle existe) est appelée l'époque du calendrier, et elle est arbitraire pour chaque calendrier. `month` est un entier positif qui s'incrémente de 1 à chaque fois, en commençant à `1` et en finissant à `date.monthsInYear`, puis revient à `1` à mesure que l'année avance. `day` est aussi un entier positif, mais il peut ne pas commencer à 1 ou s'incrémenter de 1 à chaque fois, car des changements politiques peuvent entraîner des jours sautés ou répétés. Mais en général, `day` augmente de façon monotone et revient à 1 à mesure que le mois avance.

En plus de `year`, une année peut aussi être identifiée de façon unique par la combinaison de `era` et `eraYear`, pour les calendriers qui utilisent des ères. Par exemple, le calendrier grégorien utilise les ères «&nbsp;CE&nbsp;» (ère commune) et «&nbsp;BCE&nbsp;» (avant l'ère commune), et l'année `-1` est la même que `{ era: "bce", eraYear: 2 }` (notez que l'année `0` existe toujours pour tous les calendriers&nbsp;; pour le calendrier grégorien, elle correspond à 1 BCE selon la [numérotation astronomique des années <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Astronomical_year_numbering)). `era` est une chaîne en minuscules, et `eraYear` est un entier arbitraire qui peut être nul ou négatif, ou même décroître avec le temps (généralement pour l'ère la plus ancienne).

> [!NOTE]
> Toujours utiliser `era` et `eraYear` ensemble&nbsp;; n'utilisez pas une propriété sans l'autre. De plus, pour éviter les conflits, n'associez pas `year` et `era`/`eraYear` pour désigner une année. Choisissez une représentation d'année et utilisez-la de façon cohérente.
>
> Faites attention aux hypothèses incorrectes suivantes concernant les années&nbsp;:
>
> - Ne supposez pas que `era` et `eraYear` sont toujours présents&nbsp;; ils peuvent être `undefined`.
> - Ne supposez pas que `era` est une chaîne conviviale&nbsp;; utilisez `toLocaleString()` pour formater votre date.
> - Ne supposez pas que deux valeurs `year` de calendriers différents sont comparables&nbsp;; utilisez plutôt la méthode statique `compare()`.
> - Ne supposez pas que les années ont 365/366 jours et 12 mois&nbsp;; utilisez `daysInYear` et `monthsInYear`.
> - Ne supposez pas que les années bissextiles (`inLeapYear` vaut `true`) ont un jour supplémentaire&nbsp;; elles peuvent avoir un mois supplémentaire.

En plus de `month`, un mois dans une année peut aussi être identifié de façon unique par le `monthCode`. `monthCode` correspond généralement au nom du mois, mais pas `month`. Par exemple, dans le cas des calendriers lunisolaire, deux mois ayant le même `monthCode`, dont l'un appartient à une année bissextile et l'autre non, auront des valeurs `month` différentes s'ils viennent après le mois intercalaire, en raison de l'insertion d'un mois supplémentaire.

> [!NOTE]
> Pour éviter les conflits, n'associez pas `month` et `monthCode` pour désigner un mois. Choisissez une représentation de mois et utilisez-la de façon cohérente. `month` est plus utile si vous avez besoin de l'ordre des mois dans une année (par exemple, lors d'une boucle sur les mois), tandis que `monthCode` est plus utile si vous avez besoin du nom du mois (par exemple, pour stocker des anniversaires).
>
> Faites attention aux hypothèses incorrectes suivantes concernant les mois&nbsp;:
>
> - Ne supposez pas que `monthCode` et `month` correspondent toujours.
> - Ne supposez pas le nombre de jours dans un mois&nbsp;; utilisez `daysInMonth`.
> - Ne supposez pas que `monthCode` est une chaîne conviviale&nbsp;; utilisez `toLocaleString()` pour formater votre date.
> - En général, n'enregistrez pas le nom des mois dans un tableau ou un objet. Même si `monthCode` correspond généralement au nom du mois dans un calendrier, il est recommandé de toujours calculer le nom du mois, par exemple avec `date.toLocaleString("fr-FR", { calendar: date.calendarId, month: "long" })`.

En plus de `day` (qui est un index basé sur le mois), un jour dans une année peut aussi être identifié de façon unique par le `dayOfYear`. `dayOfYear` est un entier positif qui s'incrémente de 1 à chaque fois, en commençant à `1` et en finissant à `date.daysInYear`.

Le concept de «&nbsp;semaine&nbsp;» n'est lié à aucun évènement astronomique, mais est une construction culturelle. Bien que la longueur la plus courante soit de `7` jours, les semaines peuvent aussi avoir 4, 5, 6, 8 jours ou plus — ou même ne pas avoir de nombre fixe de jours. Pour obtenir le nombre exact de jours de la semaine d'une date, utilisez la propriété `daysInWeek` de la date. `Temporal` identifie les semaines par la combinaison de `weekOfYear` et `yearOfWeek`. `weekOfYear` est un entier positif qui s'incrémente de 1 à chaque fois, en commençant à `1`, puis revient à `1` à mesure que l'année avance. `yearOfWeek` est généralement identique à `year`, mais peut différer au début ou à la fin de chaque année, car une semaine peut chevaucher deux années, et `yearOfWeek` choisit l'une des deux années selon les règles du calendrier.

> [!NOTE]
> Toujours utiliser `weekOfYear` et `yearOfWeek` ensemble&nbsp;; n'utilisez pas `weekOfYear` et `year`.
>
> Faites attention aux hypothèses incorrectes suivantes concernant les semaines&nbsp;:
>
> - Ne supposez pas que `weekOfYear` et `yearOfWeek` sont toujours présents&nbsp;; ils peuvent être `undefined`.
> - Ne supposez pas que les semaines font toujours 7 jours&nbsp;; utilisez `daysInWeek`.
> - Notez que l'API `Temporal` actuelle ne prend pas en charge les dates année-semaine, vous ne pouvez donc pas construire de dates avec ces propriétés ni les sérialiser dans ce format. Ce sont uniquement des propriétés informatives.

### Format RFC 9557

Toutes les classes `Temporal` peuvent être sérialisées et désérialisées en utilisant le format défini dans la [RFC 9557 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc9557), qui est basé sur [ISO 8601 / RFC 3339 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc3339). Le format, dans sa forme complète, est le suivant (les espaces ne sont là que pour la lisibilité et ne doivent pas être présents dans la chaîne de caractères réelle)&nbsp;:

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Chaque classe a des exigences différentes concernant la présence de chaque composant, vous trouverez donc une section intitulée «&nbsp;Format RFC 9557&nbsp;» dans la documentation de chaque classe, qui précise le format reconnu par cette classe.

Ceci est très similaire au [format de chaîne date-heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#format_de_chaîne_date-heure) utilisé par {{JSxRef("Date")}}, qui est aussi basé sur ISO 8601. La principale nouveauté est la possibilité de définir des composants de microsecondes et nanosecondes, ainsi que la possibilité de définir le fuseau horaire et le système de calendrier.

### Dates représentables

Tous les objets `Temporal` qui représentent une date de calendrier spécifique imposent une limite similaire à l'étendue des dates représentables, qui est de ±10<sup>8</sup> jours (inclus) à partir de l'époque Unix, ou la plage d'instants de `-271821-04-20T00:00:00` à `+275760-09-13T00:00:00`. Il s'agit de la même plage que pour les [dates valides](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Plus précisément&nbsp;:

- {{JSxRef("Temporal.Instant")}} et {{JSxRef("Temporal.ZonedDateTime")}} appliquent cette limite directement sur leur valeur `epochNanoseconds`.
- {{JSxRef("Temporal.PlainDateTime")}} interprète la date-heure dans le fuseau horaire UTC et exige qu'elle soit dans la plage ±(10<sup>8</sup> + 1) jours (exclus) à partir de l'époque Unix, donc sa plage valide est de `-271821-04-19T00:00:00` à `+275760-09-14T00:00:00`, exclus. Cela permet de convertir n'importe quel `ZonedDateTime` en `PlainDateTime` quel que soit son décalage.
- {{JSxRef("Temporal.PlainDate")}} applique la même vérification que `PlainDateTime` au midi (`12:00:00`) de cette date, donc sa plage valide est de `-271821-04-19` à `+275760-09-13`. Cela permet de convertir n'importe quel `PlainDateTime` en `PlainDate` quelle que soit son heure, et inversement.
- {{JSxRef("Temporal.PlainYearMonth")}} a la plage valide de `-271821-04` à `+275760-09`. Cela permet de convertir n'importe quel `PlainDate` en `PlainYearMonth` quelle que soit sa date (sauf si le premier jour d'un mois non ISO tombe dans le mois ISO `-271821-03`).

Les objets `Temporal` refuseront de construire une instance représentant une date/heure au-delà de cette limite. Cela inclut&nbsp;:

- L'utilisation du constructeur ou de la méthode statique `from()`.
- L'utilisation de la méthode `with()` pour mettre à jour les champs du calendrier.
- L'utilisation de `add()`, `subtract()`, `round()`, ou toute autre méthode pour dériver de nouvelles instances.

## Propriétés statiques

- {{JSxRef("Temporal.Duration")}}
  - : Représente une différence entre deux points dans le temps, qui peut être utilisée dans l'arithmétique de date/heure. Elle est fondamentalement représentée comme une combinaison de valeurs d'années, mois, semaines, jours, heures, minutes, secondes, millisecondes, microsecondes et nanosecondes.
- {{JSxRef("Temporal.Instant")}}
  - : Représente un point unique dans le temps, avec une précision à la nanoseconde. Elle est fondamentalement représentée comme le nombre de nanosecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC), sans aucun fuseau horaire ni système de calendrier.
- {{JSxRef("Temporal.Now")}}
  - : Fournit des méthodes pour obtenir l'heure actuelle dans différents formats.
- {{JSxRef("Temporal.PlainDate")}}
  - : Représente une date de calendrier (une date sans heure ni fuseau horaire)&nbsp;; par exemple, un évènement sur un calendrier qui a lieu toute la journée, quel que soit le fuseau horaire. Elle est fondamentalement représentée comme une date de calendrier ISO 8601, avec les champs année, mois et jour, et un système de calendrier associé.
- {{JSxRef("Temporal.PlainDateTime")}}
  - : Représente une date (date de calendrier) et une heure (heure murale) sans fuseau horaire. Elle est fondamentalement représentée comme une combinaison d'une [date](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (avec un système de calendrier associé) et d'une [heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime).
- {{JSxRef("Temporal.PlainMonthDay")}}
  - : Représente le mois et le jour d'une date de calendrier, sans année ni fuseau horaire&nbsp;; par exemple, un évènement sur un calendrier qui revient chaque année et a lieu toute la journée. Elle est fondamentalement représentée comme une date de calendrier ISO 8601, avec les champs année, mois et jour, et un système de calendrier associé. L'année est utilisée pour lever l'ambiguïté du mois-jour dans les systèmes de calendrier non ISO.
- {{JSxRef("Temporal.PlainTime")}}
  - : Représente une heure sans date ni fuseau horaire&nbsp;; par exemple, un évènement récurrent qui a lieu à la même heure chaque jour. Elle est fondamentalement représentée comme une combinaison de valeurs d'heure, minute, seconde, milliseconde, microseconde et nanoseconde.
- {{JSxRef("Temporal.PlainYearMonth")}}
  - : Représente l'année et le mois d'une date de calendrier, sans jour ni fuseau horaire&nbsp;; par exemple, un évènement sur un calendrier qui a lieu tout le mois. Elle est fondamentalement représentée comme une date de calendrier ISO 8601, avec les champs année, mois et jour, et un système de calendrier associé. Le jour est utilisé pour lever l'ambiguïté de l'année-mois dans les systèmes de calendrier non ISO.
- {{JSxRef("Temporal.ZonedDateTime")}}
  - : Représente une date et une heure avec un fuseau horaire. Elle est fondamentalement représentée comme une combinaison d'un [instant](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), d'un fuseau horaire et d'un système de calendrier.
- `Temporal[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Temporal"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- L'objet {{JSxRef("Intl.RelativeTimeFormat")}}
- L'objet {{JSxRef("Intl.DurationFormat")}}
- [Prothèse d'émulation de Temporal par les champion·ne·s de la proposition <sup>(angl.)</sup>](https://www.npmjs.com/package/@js-temporal/polyfill)
- [Prothèse d'émulation de Temporal par FullCalendar <sup>(angl.)</sup>](https://www.npmjs.com/package/temporal-polyfill)
