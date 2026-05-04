---
title: "Temporal.Duration : méthode with()"
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`with()`** des instances de {{JSxRef("Temporal.Duration")}} retourne un nouvel objet `Temporal.Duration` représentant cette durée avec certains champs remplacés par de nouvelles valeurs. Comme tous les objets `Temporal` sont conçus pour être immuables, cette méthode fonctionne essentiellement comme le mutateur des champs de la durée.

## Syntaxe

```js-nolint
with(info)
```

### Paramètres

- `info`
  - : Un objet contenant au moins une des propriétés reconnues par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}&nbsp;: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Les propriétés non définies utilisent les valeurs de la durée originale.

### Valeur de retour

Un nouvel objet `Temporal.Duration`, où les champs définis dans `info` qui ne sont pas `undefined` sont remplacés par les valeurs correspondantes, et le reste des champs est copié à partir de la durée originale.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - L'une des propriétés reconnues dans l'objet `info` n'est pas un entier (y compris les valeurs non finies).
    - Une [unité de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_de_calendrier) (années, mois, semaines) a une valeur absolue ≥ 2<sup>32</sup>.
    - La partie non-calendrier de la durée (jours et en dessous), lorsqu'elle est exprimée en secondes, a une valeur absolue ≥ 2<sup>53</sup>.
- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - L'objet `info` n'est pas un objet.
    - Toutes les propriétés reconnues dans l'objet `info` sont `undefined`.

## Exemples

### Utiliser la méthode `with()`

Vous pouvez utiliser `with()` pour obtenir un contrôle précis sur les champs d'un objet `Temporal.Duration`. Par exemple, vous pouvez équilibrer manuellement une durée uniquement sur une unité, ce que `round()` ne permet pas&nbsp;:

```js
function balanceMinutes(duration) {
  const { hours, minutes } = duration;
  const totalMinutes = hours * 60 + minutes;
  const balancedMinutes = totalMinutes % 60;
  const balancedHours = (totalMinutes - balancedMinutes) / 60;
  return duration.with({ hours: balancedHours, minutes: balancedMinutes });
}

const d1 = Temporal.Duration.from({ hours: 100, minutes: 100, seconds: 100 });
const d2 = balanceMinutes(d1);
console.log(d2.hours); // 101
console.log(d2.minutes); // 40
console.log(d2.seconds); // 100 ; reste non équilibré
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode statique {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}
- La méthode {{JSxRef("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
- La méthode {{JSxRef("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
