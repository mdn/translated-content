---
title: "Temporal.PlainDateTime : méthode withPlainTime()"
short-title: withPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withPlainTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`withPlainTime()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un nouvel objet `Temporal.PlainDateTime` représentant cette date et heure avec la partie temps entièrement remplacée par la nouvelle heure (sous une forme convertible par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}).

Cette méthode remplacera toutes les propriétés de temps, en prenant `0` par défaut lorsque des propriétés ne sont pas définies. Si vous souhaitez uniquement remplacer certaines des propriétés de temps, utilisez plutôt la méthode {{JSxRef("Temporal/PlainDateTime/with", "with()")}}.

## Syntaxe

```js-nolint
withPlainTime()
withPlainTime(plainTime)
```

### Paramètres

- `plainTime` {{Optional_Inline}}
  - : Une chaîne de caractères, un objet, ou une instance de {{JSxRef("Temporal.PlainTime")}} représentant la nouvelle heure. Il est converti en un objet `Temporal.PlainTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}. Si non défini, la partie temps est définie sur `00:00:00`.

### Valeur de retour

Un nouvel objet `Temporal.PlainDateTime`, avec la partie date copiée depuis la date et heure d'origine et la partie temps remplacée par la nouvelle heure.

## Exemples

### Utiliser la méthode `withPlainTime()`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");

// Vous pouvez passer une chaîne de caractères
const newDT = dt.withPlainTime("13:45:00");
console.log(newDT.toString()); // "2021-07-01T13:45:00"

// Vous pouvez seulement définir certaines propriétés de temps, et le reste passe à 0 ;
// pour la méthode with(), elles seraient copiées depuis la date et heure d'origine
const newDT2 = dt.withPlainTime({ hour: 13 });
console.log(newDT2.toString()); // "2021-07-01T13:00:00"

// Vous pouvez ne rien passer pour définir l'heure à minuit
const newDT3 = dt.withPlainTime();
console.log(newDT3.toString()); // "2021-07-01T00:00:00"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
- La méthode statique {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
