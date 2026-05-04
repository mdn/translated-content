---
title: "Temporal.Duration : méthode subtract()"
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`subtract()`** des instances de {{JSxRef("Temporal.Duration")}} retourne un nouvel objet `Temporal.Duration` avec la différence entre cette durée et une durée donnée. Elle est équivalente à [ajouter](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) la valeur [négative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) de l'autre durée.

## Syntaxe

```js-nolint
subtract(other)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à soustraire de cette durée. Elle est convertie en un objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Valeur de retour

Un nouvel objet `Temporal.Duration` représentant la différence entre cette durée et `other`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Soit `this` ou `other` est une [durée calendaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires) (ses valeurs `years`, `months` ou `weeks` sont différentes de zéro), car les durées calendaires sont ambiguës sans référence à un calendrier et à une heure.
    - La différence entre `this` et `other` dépasse la durée maximale ou descend en dessous de la durée minimale représentable, qui est de ±2<sup>53</sup> secondes.

## Exemples

### Utiliser la méthode `subtract()`

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -20 });

const d3 = d1.subtract(d2);
console.log(d3.toString()); // "PT2H50M"
```

Pour plus d'exemples et de mises en garde, voir la méthode [`add()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
- La méthode {{JSxRef("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
