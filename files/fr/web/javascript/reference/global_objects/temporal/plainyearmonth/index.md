---
title: Temporal.PlainYearMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

L'objet **`Temporal.PlainYearMonth`** représente l'année et le mois d'une date d'un calendrier, sans jour ni fuseau horaire&nbsp;; par exemple, un évènement sur un calendrier qui se produit pendant tout le mois. Il est fondamentalement représenté comme une date de calendrier ISO 8601, avec des champs pour l'année, le mois et le jour, et un système de calendrier associé. Le jour est utilisé pour faire disparaître l'ambiguïté de l'année et du mois dans les systèmes de calendrier non ISO.

## Description

Un `PlainYearMonth` est essentiellement la partie année et mois d'un objet {{JSxRef("Temporal.PlainDate")}}, sans le jour.

### Format RFC 9557

Les objets `PlainYearMonth` peuvent être sérialisés et analysés en utilisant le format [RFC 9557 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc9557), une extension du format [ISO 8601 / RFC 3339 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc3339). La chaîne de caractères a la forme suivante (les espaces sont uniquement pour la lisibilité et ne doivent pas être présents dans la chaîne de caractères réelle)&nbsp;:

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Soit un nombre à quatre chiffres, soit un nombre à six chiffres avec un signe `+` ou `-`.
- `MM`
  - : Un nombre à deux chiffres de `01` à `12`.
- `DD` {{Optional_Inline}}
  - : Un nombre à deux chiffres de `01` à `31`. Il est requis pour les calendriers non ISO, et optionnel sinon. S'il est omis, la chaîne de caractères ressemble à `YYYY-MM` ou `YYYYMM`. Notez que le jour de référence réellement stocké peut être différent de celui que vous fournissez, mais l'année et le mois représentés sont les mêmes. Voir {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} pour plus d'informations. Les composants `YYYY`, `MM` et `DD` peuvent être séparés par `-` ou rien.
- `[u-ca=calendar_id]` {{Optional_Inline}}
  - : Remplacez `calendar_id` par le calendrier à utiliser. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut, `[u-ca=iso8601]`. Peut avoir un _drapeau critique_ en préfixant la clé avec `!`&nbsp;: par exemple, `[!u-ca=iso8601]`. Ce drapeau indique généralement aux autres systèmes qu'il ne peut pas être ignoré s'ils ne le prennent pas en charge. L'analyseur `Temporal` générera une erreur si les annotations contiennent deux annotations de calendrier ou plus et qu'une d'entre elles est critique. Notez que le `YYYY-MM-DD` est toujours interprété comme une date de calendrier ISO 8601, puis converti en calendrier défini.

Comme entrée, vous pouvez éventuellement inclure l'heure, le décalage et l'identifiant du fuseau horaire, dans le même format que [`PlainDateTime`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#format_rfc_9557), mais ils seront ignorés. Les autres annotations au format `[clé=valeur]` sont également ignorées, et elles ne doivent pas avoir le drapeau critique.

Lors de la sérialisation, vous pouvez configurer l'affichage de l'identifiant du calendrier et l'ajout d'un drapeau critique pour celui-ci.

## Constructeur

- {{JSxRef("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} {{Experimental_Inline}}
  - : Crée un nouvel objet `Temporal.PlainYearMonth` en fournissant directement les données sous-jacentes.

## Méthodes statiques

- {{JSxRef("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}}
  - : Retourne un nombre (-1, 0 ou 1) indiquant si le premier mois de l'année qui précède, est identique ou suit le second mois de l'année. Équivaut à comparer leurs dates ISO 8601 sous-jacentes. Deux mois de l'année de calendriers différents peuvent être considérés comme égaux s'ils commencent à la même date ISO.
- {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
  - : Crée un nouvel objet `Temporal.PlainYearMonth` à partir d'un autre objet `Temporal.PlainYearMonth`, d'un objet avec des propriétés year et month, ou d'une chaîne [RFC 9557](#rfc_9557_format).

## Propriétés d'instance

Ces propriétés sont définies sur `Temporal.PlainYearMonth.prototype` et partagées par toutes les instances de `Temporal.PlainYearMonth`.

- {{JSxRef("Temporal/PlainYearMonth/calendarId", "Temporal.PlainYearMonth.prototype.calendarId")}}
  - : Retourne une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé pour interpréter la date ISO 8601 interne.
- {{JSxRef("Object/constructor", "Temporal.PlainYearMonth.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Temporal.PlainYearMonth`, la valeur initiale est le constructeur {{JSxRef("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}.
- {{JSxRef("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
  - : Retourne un entier positif représentant le nombre de jours dans le mois de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainYearMonth/daysInYear", "Temporal.PlainYearMonth.prototype.daysInYear")}}
  - : Retourne un entier positif représentant le nombre de jours dans l'année de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est 365, ou 366 dans une année bissextile.
- {{JSxRef("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}}
  - : Retourne une chaîne de caractères en minuscules spécifique au calendrier représentant l'ère de cette valeur mois et année, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier grégorien, c'est soit `"ce"` soit `"bce"`.
- {{JSxRef("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}}
  - : Retourne un entier qui n'est pas négatif représentant l'année de cette valeur mois et année dans l'ère, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). L'index de l'année commence généralement à 1 (plus courant) ou 0, et les années dans une ère peuvent diminuer avec le temps (par exemple, BCE grégorien). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainYearMonth/inLeapYear", "Temporal.PlainYearMonth.prototype.inLeapYear")}}
  - : Retourne un booléen indiquant si cette valeur mois et année se trouve dans une année bissextile. Une année bissextile est une année qui a plus de jours (en raison d'un jour ou d'un mois intercalaire) qu'une année commune. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}}
  - : Retourne un entier positif représentant l'index du mois dans l'année de cette valeur mois et année, basé sur 1. Le premier mois de cette année est `1`, et le dernier mois est le {{JSxRef("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Notez que contrairement à {{JSxRef("Date.prototype.getMonth()")}}, l'index est basé sur 1. Si le calendrier a des mois intercalaires, alors le mois avec le même {{JSxRef("Temporal/PlainDate/monthCode", "monthCode")}} peut avoir des index de `month` différents pour différentes années.
- {{JSxRef("Temporal/PlainYearMonth/monthCode", "Temporal.PlainYearMonth.prototype.monthCode")}}
  - : Retourne une chaîne de caractères spécifique au calendrier représentant le mois de cette valeur mois et année. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Généralement, c'est `M` suivi d'un numéro de mois à deux chiffres. Pour les mois intercalaires, c'est le code du mois précédent suivi de `L`. Si le mois intercalaire est le premier mois de l'année, le code est `M00L`.
- {{JSxRef("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}}
  - : Retourne un entier positif représentant le nombre de mois dans l'année de cette valeur mois et année. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est toujours 12, mais dans d'autres systèmes de calendrier, cela peut varier.
- {{JSxRef("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}}
  - : Retourne un entier représentant le nombre d'années de cette valeur mois et année par rapport au début d'une année d'époque spécifique au calendrier. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Généralement, l'année 1 est soit la première année de la dernière ère, soit l'année ISO 8601 `0001`. Si l'époque est au milieu de l'année, cette année aura la même valeur avant et après la date de début de l'ère.
- `Temporal.PlainYearMonth.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Temporal.PlainYearMonth"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
  - : Retourne un nouvel objet `Temporal.PlainYearMonth` représentant ce mois et cette année avancés d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{JSxRef("Temporal/PlainYearMonth/equals", "Temporal.PlainYearMonth.prototype.equals()")}}
  - : Retourne `true` si ce mois et cette année sont équivalents en valeur à un autre mois et année (sous une forme convertible par {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}), et `false` sinon. Ils sont comparés à la fois par leurs valeurs ISO sous-jacentes et leurs calendriers, donc deux mois et années de calendriers différents peuvent être considérés comme égaux par {{JSxRef("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} mais pas par `equals()`.
- {{JSxRef("Temporal/PlainYearMonth/since", "Temporal.PlainYearMonth.prototype.since()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée depuis un autre mois et année (sous une forme convertible par {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}) jusqu'à ce mois et cette année. La durée est positive si l'autre mois est avant ce mois, sinon elle est négative.
- {{JSxRef("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
  - : Retourne un nouvel objet `Temporal.PlainYearMonth` représentant ce mois et cette année reculés d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{JSxRef("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
  - : Retourne une chaîne de caractères représentant ce mois et cette année dans le même [format RFC 9557](#format_rfc_9557) que l'appel de {{JSxRef("Temporal/PlainYearMonth/toString", "toString()")}}. Destiné à être appelé implicitement par {{JSxRef("JSON.stringify()")}}.
- {{JSxRef("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères avec une représentation sensible à la langue de ce mois et cette année.
- {{JSxRef("Temporal/PlainYearMonth/toPlainDate", "Temporal.PlainYearMonth.prototype.toPlainDate()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.PlainDate")}} représentant ce mois et cette année et un jour fourni dans le même système de calendrier.
- {{JSxRef("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant ce mois et cette année dans le [format RFC 9557](#format_rfc_9557).
- {{JSxRef("Temporal/PlainYearMonth/until", "Temporal.PlainYearMonth.prototype.until()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre ce mois et cette année et un autre mois et année (sous une forme convertible par {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}). La durée est positive si l'autre mois est après ce mois, et négative si avant.
- {{JSxRef("Temporal/PlainYearMonth/valueOf", "Temporal.PlainYearMonth.prototype.valueOf()")}}
  - : Lève une {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.PlainYearMonth` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.
- {{JSxRef("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
  - : Retourne un nouvel objet `Temporal.PlainYearMonth` représentant ce mois et cette année avec certains champs remplacés par de nouvelles valeurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal")}}
- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
