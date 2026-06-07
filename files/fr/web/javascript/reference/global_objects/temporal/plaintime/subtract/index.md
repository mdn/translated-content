---
title: "Temporal.PlainTime : méthode subtract()"
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`subtract()`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne un nouvel objet `Temporal.PlainTime` représentant cette heure reculée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}), en faisant le tour de l'horloge si nécessaire.

Si vous souhaitez soustraire deux heures et obtenir une durée, utilisez plutôt {{JSxRef("Temporal/PlainTime/since", "since()")}} ou {{JSxRef("Temporal/PlainTime/until", "until()")}}.

## Syntaxe

```js-nolint
subtract(duration)
```

### Paramètres

- `duration`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à soustraire de cette heure. Elle est convertie en objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Valeur de retour

Un nouvel objet `Temporal.PlainTime` représentant l'heure définie par le `PlainTime` original, moins la durée.

Soustraire une durée équivaut à [ajouter](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add) sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), donc toutes les mêmes considérations s'appliquent.

## Exemples

### Soustraire une durée

```js
const start = Temporal.PlainTime.from("12:34:56");
const end = start.subtract({ hours: 1, minutes: 30 });
console.log(end.toString()); // 11:04:56
```

Pour plus d'exemples, voir {{JSxRef("Temporal/PlainTime/add", "add()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}
- La méthode {{JSxRef("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}}
