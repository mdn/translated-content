---
title: "Temporal.PlainDateTime : méthode equals()"
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`equals()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne `true` si cette valeur de date et d'heure est équivalente en valeur à une autre valeur de date et d'heure (sous une forme convertible par {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDateTime.from()")}}), et `false` sinon. Elles sont comparées à la fois par leurs valeurs de date et d'heure et par leurs calendriers, donc deux valeurs de date et d'heure de calendriers différents peuvent être considérées comme égales par {{JSxRef("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} mais pas par `equals()`.

## Syntaxe

```js-nolint
equals(other)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainDateTime")}} représentant l'autre date-heure à comparer. Il est converti en un objet `Temporal.PlainDateTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}.

### Valeur de retour

`true` si la date et l'heure de cette instance sont égales à celles de `other` à la fois dans leur valeur de date/heure et dans leur calendrier, sinon `false`.

## Exemples

### Utiliser la méthode `equals()`

```js
const dt1 = Temporal.PlainDateTime.from("2021-08-01");
const dt2 = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
console.log(dt1.equals(dt2)); // true

const dt3 = Temporal.PlainDateTime.from("2021-08-01[u-ca=japanese]");
console.log(dt1.equals(dt3)); // false

const dt4 = Temporal.PlainDateTime.from("2021-08-01T01:00:00");
console.log(dt1.equals(dt4)); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode statique {{JSxRef("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}}
