---
title: "Temporal.PlainDate : propriété yearOfWeek"
short-title: yearOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/yearOfWeek
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`yearOfWeek`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier représentant l'année à associer à la {{JSxRef("Temporal/PlainDate/weekOfYear", "weekOfYear")}} de cette date, ou `undefined` si le calendrier n'a pas de système de semaine bien défini. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Habituellement, il s'agit de l'année de la date, mais pour l'ISO 8601, les premiers et derniers jours de l'année peuvent être attribués à la dernière semaine de l'année précédente ou à la première semaine de l'année suivante, ce qui fait que `yearOfWeek` diffère de 1. Voir {{JSxRef("Temporal/PlainDate/weekOfYear", "weekOfYear")}} pour plus de détails.

Le mutateur d'accesseur de `yearOfWeek` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Voir les exemples sur la page {{JSxRef("Temporal/PlainDate/weekOfYear", "weekOfYear")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("Temporal.PlainDate")}}
- {{JSxRef("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{JSxRef("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
- {{JSxRef("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
- {{JSxRef("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- {{JSxRef("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
- {{JSxRef("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
