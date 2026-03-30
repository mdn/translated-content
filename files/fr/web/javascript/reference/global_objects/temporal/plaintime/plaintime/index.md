---
title: Constructeur Temporal.PlainTime()
short-title: Temporal.PlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/PlainTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Le constructeur **`Temporal.PlainTime()`** crée des objets {{JSxRef("Temporal.PlainTime")}}.

Ce constructeur vous permet de créer des instances en fournissant directement les données sous-jacentes. Comme pour toutes les autres classes `Temporal`, vous devriez généralement construire des objets `Temporal.PlainTime` en utilisant la méthode statique {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}, qui peut gérer une variété de types d'entrée.

## Syntaxe

```js-nolint
new Temporal.PlainTime()
new Temporal.PlainTime(hour)
new Temporal.PlainTime(hour, minute)
new Temporal.PlainTime(hour, minute, second)
new Temporal.PlainTime(hour, minute, second, millisecond)
new Temporal.PlainTime(hour, minute, second, millisecond, microsecond)
new Temporal.PlainTime(hour, minute, second, millisecond, microsecond, nanosecond)
```

> [!NOTE]
> `Temporal.PlainTime()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `hour` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, représentant la composante heure.
- `minute` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, représentant la composante minute.
- `second` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, représentant la composante seconde.
- `millisecond` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, représentant la composante milliseconde.
- `microsecond` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, représentant la composante microseconde.
- `nanosecond` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, représentant la composante nanoseconde.

### Valeur de retour

Un nouvel objet `Temporal.PlainTime`, représentant l'heure définie par les paramètres.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des composantes n'est pas un nombre fini ou si elles ne représentent pas une heure valide.

## Exemples

### Utiliser `Temporal.PlainTime()`

```js
const time = new Temporal.PlainTime(12, 34, 56, 123, 456, 789);
console.log(time.toString()); // 12:34:56.123456789
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode statique {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
