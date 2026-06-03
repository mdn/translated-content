---
title: "Temporal.PlainYearMonth : propriété monthCode"
short-title: monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/monthCode
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`monthCode`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne une chaîne de caractères spécifique au calendrier représentant le mois de cet objet de mois et d'année. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

En général, il s'agit de `M` suivi d'un numéro de mois à deux chiffres. Pour les mois intercalaires, il s'agit du code du mois précédent suivi de `L` (même si c'est conceptuellement un dérivé du mois suivant&nbsp;; par exemple, dans le calendrier hébraïque, Adar I a le code `M05L` mais Adar II a le code `M06`). Si le mois intercalaire est le premier mois de l'année, le code est `M00L`.

Le motateur d'accesseur de `monthCode` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainYearMonth/with", "with()")}} pour créer un nouvel objet `Temporal.PlainYearMonth` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}.

## Exemples

### Utiliser la propriété `monthCode`

```js
const date = Temporal.PlainYearMonth.from("2021-07-01"); // calendrier ISO 8601
console.log(date.monthCode); // "M07"
console.log(date.month); // 7
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
