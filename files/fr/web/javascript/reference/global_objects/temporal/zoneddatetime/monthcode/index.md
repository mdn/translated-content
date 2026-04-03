---
title: "Temporal.ZonedDateTime : propriété monthCode"
short-title: monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/monthCode
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`monthCode`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne une chaîne de caractères propre au calendrier représentant le mois de cette date. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Habituellement, il s'agit de `M` suivi d'un numéro de mois à deux chiffres. Pour les mois intercalaires, il s'agit du code du mois précédent suivi de `L` (même s'il s'agit conceptuellement d'un dérivé du mois suivant&nbsp;; par exemple, dans le calendrier hébraïque, Adar I a le code `M05L` mais Adar II a le code `M06`). Si le mois intercalaire est le premier mois de l'année, le code est `M00L`.

Le mutateur d'accesseur de `monthCode` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}.

## Exemples

### Utiliser la propriété `monthCode`

```js
const date = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]"); // calendrier ISO 8601
console.log(date.monthCode); // "M07"
console.log(date.month); // 7
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
- La propriété {{JSxRef("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
