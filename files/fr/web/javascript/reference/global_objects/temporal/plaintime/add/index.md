---
title: "Temporal.PlainTime : méthode add()"
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`add()`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne un nouvel objet `Temporal.PlainTime` représentant cette heure avancée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}), en faisant le tour de l'horloge si nécessaire.

## Syntaxe

```js-nolint
add(duration)
```

### Paramètres

- `duration`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à ajouter à cette heure. Elle est convertie en objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Valeur de retour

Un nouvel objet `Temporal.PlainTime` représentant l'heure définie par le `PlainTime` d'origine, plus la durée. Toutes les unités supérieures à `hours` sont ignorées, et si l'heure dépasse minuit, elle revient au jour suivant.

Ajouter une durée équivaut à [soustraire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract) sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Exemples

### Ajouter une durée

```js
const start = Temporal.PlainTime.from("12:34:56");
const end = start.add({ hours: 1, minutes: 30 });
console.log(end.toString()); // 14:04:56

const end2 = start.add({ hours: -1, minutes: -30 });
console.log(end2.toString()); // 11:04:56

const distance = Temporal.PlainTime.from("00:00:00").until("01:23:45"); // 1h 23m 45s
const end3 = start.add(distance);
console.log(end3.toString()); // 13:58:41
```

### Basculer l'heure

Si l'heure dépasse minuit, elle passe au jour suivant&nbsp;:

```js
const start = Temporal.PlainTime.from("12:34:56");
const end = start.add({ hours: 12 });
console.log(end.toString()); // 00:34:56
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
