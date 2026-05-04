---
title: "Temporal.ZonedDateTime : méthode toPlainDateTime()"
short-title: toPlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDateTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toPlainDateTime()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet {{JSxRef("Temporal.PlainDateTime")}} représentant les parties date et heure de cette date et heure. Seules les informations de fuseau horaire sont supprimées.

> [!WARNING]
> Après qu'un `Temporal.ZonedDateTime` a été converti en `Temporal.PlainDateTime`, il n'est plus sensible au fuseau horaire. Les opérations ultérieures comme les opérations arithmétiques ou les opérations `with()` ne tiendront pas compte de l'heure d'été et peuvent ne pas produire les mêmes résultats que les opérations équivalentes avec le `Temporal.ZonedDateTime` d'origine. Cependant, à moins que vous n'effectuiez ces opérations lors d'une transition de décalage horaire, il est impossible de remarquer la différence. Par conséquent, soyez très prudent lors de cette conversion, car les résultats ultérieurs peuvent être corrects la plupart du temps, mais ne deviennent incorrects que lors des transitions de décalage comme le début ou la fin de l'heure d'été.

## Syntaxe

```js-nolint
toPlainDateTime()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.PlainDateTime")}} représentant les parties date et heure de cette date et heure.

## Exemples

### Utiliser la méthode `toPlainDateTime()`

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const plainDateTime = zdt.toPlainDateTime();
console.log(plainDateTime.toString()); // 2021-07-01T12:34:56.987654321
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}
