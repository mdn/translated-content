---
title: "Temporal.Instant : méthode subtract()"
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`subtract()`** des instances de {{JSxRef("Temporal.Instant")}} retourne un nouvel objet `Temporal.Instant` représentant cet instant reculé d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).

Si vous souhaitez soustraire deux instants et obtenir une durée, utilisez plutôt {{JSxRef("Temporal/Instant/since", "since()")}} ou {{JSxRef("Temporal/Instant/until", "until()")}}.

## Syntaxe

```js-nolint
subtract(duration)
```

### Paramètres

- `duration`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à soustraire de cet instant. Elle est convertie en objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Instant")}} représentant la soustraction de `duration` de cet instant. Si `duration` est positive, l'instant retourné est antérieur à cet instant ; si `duration` est négative, l'instant retourné est postérieur à cet instant.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `duration` est une [durée calendaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires) (elle a des `years`, `months` ou `weeks` non nuls), ou a des `days` non nuls, car les durées calendaire sont ambiguës sans un calendrier et une référence temporelle.
    - Le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±10<sup>8</sup> jours, soit environ ±273 972,6 ans, depuis l'époque Unix.

## Description

Soustraire une durée équivaut à [ajouter](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add) sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), donc toutes les mêmes considérations s'appliquent.

## Exemples

### Soustraire une `Temporal.Duration`

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1000);
const duration = Temporal.Duration.from("PT1S"); // Durée d'une seconde
const newInstant = instant.subtract(duration);
console.log(newInstant.epochMilliseconds); // 0
```

Pour plus d'exemples, voir {{JSxRef("Temporal/Instant/add", "add()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
- La méthode {{JSxRef("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
- La méthode {{JSxRef("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
