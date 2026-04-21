---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

L'objet **`Temporal.PlainMonthDay`** représente le mois et le jour d'une date calendaire, sans année ni fuseau horaire&nbsp;; par exemple, un évènement sur un calendrier qui se répète chaque année et couvre toute la journée. Il est fondamentalement représenté comme une date au format ISO 8601, avec des champs année, mois et jour, et un système de calendrier associé. L'année est utilisée pour lever l'ambiguïté du mois et du jour dans les systèmes calendaires non ISO.

## Description

Un `PlainMonthDay` est essentiellement la partie mois et jour d'un objet {{JSxRef("Temporal.PlainDate")}}, sans l'année. Parce que la signification d'un mois et jour peut changer d'une année à l'autre (par exemple, s'il existe ou quelle est la date du jour suivant), cet objet n'offre pas beaucoup de fonctionnalités en lui-même, telles que la comparaison, l'addition ou la soustraction. Il n'a même pas de propriété {{JSxRef("Temporal/PlainDate/month", "month")}}, car l'indice du mois n'a pas de sens sans une année (par exemple, deux mois provenant de deux années ayant le même indice peuvent porter des noms différents dans le cas des mois intercalaires).

### Format RFC 9557

Les objets `PlainMonthDay` peuvent être sérialisés et analysés en utilisant le format [RFC 9557 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc9557), une extension du format [ISO 8601 / RFC 3339 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc3339). La chaîne de caractères a la forme suivante (les espaces sont uniquement pour la lisibilité et ne doivent pas figurer dans la chaîne de caractères réelle)&nbsp;:

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY` {{Optional_Inline}}
  - : Soit un nombre à quatre chiffres, soit un nombre à six chiffres précédé d'un signe `+` ou `-`. Il est requis pour les calendriers non ISO, et optionnel sinon. S'il est omis, vous pouvez soit remplacer `YYYY-` par `--` (de sorte que la chaîne de caractères ressemble à `--MM-DD` ou `--MMDD`), soit omettre entièrement la partie `YYYY-` (de sorte que la chaîne de caractères ressemble à `MM-DD` ou `MMDD`). Notez que l'année de référence effectivement stockée peut être différente de celle que vous fournissez, mais le mois et le jour représenté est le même. Voir {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} pour plus d'informations.
- `MM`
  - : Un nombre à deux chiffres de `01` à `12`.
- `DD`
  - : Un nombre à deux chiffres de `01` à `31`. Les composants `YYYY`, `MM` et `DD` peuvent être séparés par `-` ou non.
- `[u-ca=calendar_id]` {{Optional_Inline}}
  - : Remplacez `calendar_id` par le calendrier à utiliser. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut `[u-ca=iso8601]`. Peut comporter un _drapeau critique_ en préfixant la clé par `!`&nbsp;: par exemple, `[!u-ca=iso8601]`. Ce drapeau indique généralement aux autres systèmes qu'il ne peut pas être ignoré s'ils ne le prennent pas en charge. L'analyseur `Temporal` lèvera une erreur si les annotations contiennent deux annotations de calendrier ou plus et que l'une d'elles est critique. Notez que `YYYY-MM-DD` est toujours interprété comme une date au format ISO 8601 puis converti vers le calendrier défini.

En entrée, vous pouvez optionnellement inclure l'heure, le décalage et l'identifiant du fuseau horaire, dans le même format que [`PlainDateTime`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#format_rfc_9557), mais ils seront ignorés. D'autres annotations au format `[clé=valeur]` sont également ignorées et ne doivent pas comporter le drapeau critique.

Lors de la sérialisation, vous pouvez configurer l'affichage de l'identifiant de calendrier et l'ajout éventuel d'un drapeau critique.

## Constructeur

- {{JSxRef("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} {{Experimental_Inline}}
  - : Crée un nouvel objet `Temporal.PlainMonthDay` en fournissant directement les données sous-jacentes.

## Méthodes statiques

- {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
  - : Crée un nouvel objet `Temporal.PlainMonthDay` à partir d'un autre objet `Temporal.PlainMonthDay`, d'un objet avec des propriétés mois et jour, ou d'une chaîne de caractères au format [RFC 9557](#format_rfc_9557).

## Propriétés d'instance

Ces propriétés sont définies sur `Temporal.PlainMonthDay.prototype` et partagées par toutes les instances `Temporal.PlainMonthDay`.

- {{JSxRef("Temporal/PlainMonthDay/calendarId", "Temporal.PlainMonthDay.prototype.calendarId")}}
  - : Retourne une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé pour interpréter la date ISO 8601 interne.
- {{JSxRef("Object/constructor", "Temporal.PlainMonthDay.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances `Temporal.PlainMonthDay`, la valeur initiale est le constructeur {{JSxRef("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}.
- {{JSxRef("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}}
  - : Retourne un entier positif représentant l'indice du jour (commençant à 1) dans le mois de cette date, qui correspond au numéro affiché sur un calendrier. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Généralement commence à 1 et est continu, mais pas toujours.
- {{JSxRef("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}}
  - : Retourne une chaîne de caractères spécifique au calendrier représentant le mois de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). En général, il s'agit de `M` suivi d'un numéro de mois à deux chiffres. Pour les mois intercalaires, il s'agit du code du mois précédent suivi de `L`. Si le mois intercalaire est le premier mois de l'année, le code est `M00L`.
- `Temporal.PlainMonthDay.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Temporal.PlainMonthDay"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Temporal/PlainMonthDay/equals", "Temporal.PlainMonthDay.prototype.equals()")}}
  - : Retourne `true` si ce mois et ce jour est équivalent en valeur à un autre mois et jour (dans une forme convertible par {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}), et `false` sinon. Ils sont comparés à la fois selon leurs valeurs de date et selon leurs calendriers.
- {{JSxRef("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}}
  - : Retourne une chaîne de caractères représentant ce mois et ce jour dans le même format [RFC 9557](#format_rfc_9557) que l'appel à {{JSxRef("Temporal/PlainMonthDay/toString", "toString()")}}. Destiné à être appelé implicitement par {{JSxRef("JSON.stringify()")}}.
- {{JSxRef("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères avec une représentation adaptée à la langue de ce mois et ce jour.
- {{JSxRef("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.PlainDate")}} représentant ce mois et ce jour et une année fournie dans le même système de calendrier.
- {{JSxRef("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant ce mois et ce jour au format [RFC 9557](#format_rfc_9557).
- {{JSxRef("Temporal/PlainMonthDay/valueOf", "Temporal.PlainMonthDay.prototype.valueOf()")}}
  - : Lève une {{JSxRef("TypeError")}}, ce qui empêche les instances `Temporal.PlainMonthDay` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.
- {{JSxRef("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
  - : Retourne un nouvel objet `Temporal.PlainMonthDay` représentant ce mois et ce jour avec certains champs remplacés par de nouvelles valeurs.

## Exemples

### Obtenir la prochaine occurrence d'une fête

```js
// Le Nouvel An chinois a lieu le 1/1 dans le calendrier chinois
const chineseNewYear = Temporal.PlainMonthDay.from({
  monthCode: "M01",
  day: 1,
  calendar: "chinese",
});
const currentYear = Temporal.Now.plainDateISO().withCalendar("chinese").year;
let nextCNY = chineseNewYear.toPlainDate({ year: currentYear });
if (Temporal.PlainDate.compare(nextCNY, Temporal.Now.plainDateISO()) <= 0) {
  nextCNY = nextCNY.add({ years: 1 });
}
console.log(
  `Le prochain Nouvel An chinois est le ${nextCNY.withCalendar("iso8601").toLocaleString()}`,
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal")}}
- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
