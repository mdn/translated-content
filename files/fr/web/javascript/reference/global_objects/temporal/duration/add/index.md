---
title: "Temporal.Duration : méthode add()"
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`add()`** des instances de {{JSxRef("Temporal.Duration")}} retourne un nouvel objet `Temporal.Duration` avec la somme de cette durée et d'une durée donnée. Le résultat est [équilibré](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#équilibrage_des_durées).

## Syntaxe

```js-nolint
add(other)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à ajouter à cette durée. Elle est convertie en objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Valeur de retour

Un nouvel objet `Temporal.Duration` représentant la somme de cette durée et de `other`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Soit `this` soit `other` est une [durée de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires) (elle a des `years`, `months` ou `weeks` non nuls), car les durées de calendrier sont ambiguës sans calendrier et référence temporelle.
    - La somme de `this` et `other` dépasse la durée maximale ou minimale représentable, qui est ±2<sup>53</sup> secondes.

## Description

Des durées non-calendaires représentent de manière non ambiguë une quantité de temps fixe. En interne, `this` et `other` sont tous deux convertis en nanosecondes (en supposant des jours de 24 heures) et additionnés. Le résultat est ensuite reconverti en objet `Temporal.Duration`, de sorte que le résultat est toujours [équilibré ou surchargé](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#équilibrage_des_durées) avec l'unité la plus grande possible étant `days`.

Si vous souhaitez effectuer une addition ou une soustraction avec une durée de calendrier, vous pouvez ajouter les deux durées à un point de départ, puis calculer la différence entre les deux instants résultants&nbsp;; c'est-à-dire que `dur1 + dur2` est équivalent à `(start + dur1 + dur2) - start`.

Pour ajouter une durée à une date ou une heure, utilisez plutôt la méthode `add()` de l'objet date ou heure.

## Exemples

### Utiliser la méthode `add()`

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -20 });

const d3 = d1.add(d2);
console.log(d3.toString()); // "PT10M"
```

### Ajouter des durées de calendrier

```js
const d1 = Temporal.Duration.from({ days: 1 });
const d2 = Temporal.Duration.from({ months: 1 });

d1.add(d2); // RangeError: for calendar duration arithmetic, use date arithmetic relative to a starting point

const start = Temporal.PlainDateTime.from("2022-01-01T00:00"); // ISO 8601 calendar
const result = start.add(d1).add(d2).since(start);
console.log(result.toString()); // "P32D"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
