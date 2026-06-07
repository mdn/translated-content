---
title: "Temporal.ZonedDateTime : méthode withPlainTime()"
short-title: withPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withPlainTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`withPlainTime()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et cette heure avec la partie heure entièrement remplacée par la nouvelle heure (sous une forme convertible par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}})

Cette méthode remplace toutes les propriétés d'heure, en utilisant la valeur `0` pour les propriétés non définies. Si vous souhaitez uniquement remplacer certaines propriétés d'heure, utilisez plutôt la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}}.

## Syntaxe

```js-nolint
withPlainTime()
withPlainTime(plainTime)
```

### Paramètres

- `plainTime` {{Optional_Inline}}
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainTime")}} représentant la nouvelle heure. Elle est convertie en objet `Temporal.PlainTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}. Si elle n'est pas définie, la partie heure est définie au [début de la journée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/startOfDay) (généralement `00:00:00`, sauf si elle n'existe pas à cause des transitions de décalage). [La résolution des ambiguïtés](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) se produit toujours en mode `"compatible"`&nbsp;; si vous souhaitez utiliser un autre mode, utilisez plutôt la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}}.

### Valeur de retour

Un nouvel objet `Temporal.ZonedDateTime`, avec la partie date et le fuseau horaire copiés depuis la date et l'heure d'origine, et la partie heure remplacée par la nouvelle heure.

## Exemples

### Utiliser la méthode `withPlainTime()`

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56[America/New_York]",
);

// Vous pouvez passer une chaîne de caractères
const newZDT = zdt.withPlainTime("13:45:00");
console.log(newZDT.toString()); // "2021-07-01T13:45:00-04:00[America/New_York]"

// Vous pouvez ne définir que certaines propriétés d'heure, les autres
// seront à 0 ; avec la méthode with(), elles seraient copiées depuis la
// date et l'heure d'origine
const newZDT2 = zdt.withPlainTime({ hour: 13 });
console.log(newZDT2.toString()); // "2021-07-01T13:00:00-04:00[America/New_York]"

// Vous pouvez ne rien passer pour définir l'heure à minuit
const newZDT3 = zdt.withPlainTime();
console.log(newZDT3.toString()); // "2021-07-01T00:00:00-04:00[America/New_York]"

// Mais, si minuit n'existe pas, cela peut être une heure différente
const zdt2 = Temporal.ZonedDateTime.from(
  "2015-10-18T12:00-02:00[America/Sao_Paulo]",
);
console.log(zdt2.withPlainTime().toString()); // "2015-10-18T01:00:00-02:00[America/Sao_Paulo]"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- La méthode statique {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
