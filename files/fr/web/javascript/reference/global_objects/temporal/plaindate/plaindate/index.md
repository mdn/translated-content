---
title: Constructeur Temporal.PlainDate()
short-title: Temporal.PlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/PlainDate
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

{{SeeCompatTable}}

Le constructeur **`Temporal.PlainDate()`** crée des objets {{JSxRef("Temporal.PlainDate")}}.

Ce constructeur vous permet de créer des instances en fournissant directement les données sous-jacentes. Comme pour toutes les autres classes `Temporal`, vous devriez généralement construire des objets `Temporal.PlainDate` en utilisant la méthode statique {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}, qui peut gérer une variété de types d'entrée.

## Syntaxe

```js-nolint
new Temporal.PlainDate(year, month, day)
new Temporal.PlainDate(year, month, day, calendar)
```

> [!NOTE]
> `Temporal.PlainDate()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `year`
  - : Un nombre, tronqué à un entier, représentant l'année dans le système de calendrier ISO.
- `month`
  - : Un nombre, tronqué à un entier, représentant le mois dans le système de calendrier ISO.
- `day`
  - : Un nombre, tronqué à un entier, représentant le jour du mois dans le système de calendrier ISO.
- `calendar` {{Optional_Inline}}
  - : Une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) à utiliser. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut, `"iso8601"`. Notez que, quel que soit `calendar`, `year`, `month` et `day` doivent être dans le système de calendrier ISO 8601.

### Valeur de retour

Un nouvel objet `Temporal.PlainDate`, représentant la date définie par `year`, `month`, `day` (dans le calendrier ISO), interprétée dans le système de calendrier défini par `calendar`.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `calendar` n'est pas une chaîne de caractères ou `undefined`.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `year`, `month` ou `day` n'est pas un nombre fini.
    - La combinaison `year`, `month` et `day` ne représente pas une date valide dans le système de calendrier ISO, ou n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est de ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.
    - `calendar` n'est pas un identifiant de calendrier valide.

## Exemples

### Utiliser `Temporal.PlainDate()`

```js
const plainDate = new Temporal.PlainDate(2021, 7, 1);
console.log(plainDate.toString()); // 2021-07-01

// Notez que la date est stockée en interne au format ISO 8601, même
// lorsqu'elle est interprétée dans un système de calendrier différent.
// Par exemple, bien que 2021-07-01 ISO soit 5781-10-21 dans le
// calendrier hébraïque, vous passez toujours la date ISO au
// constructeur.
const plainDate2 = new Temporal.PlainDate(2021, 7, 1, "hebrew");
console.log(plainDate2.toString()); // 2021-07-01[u-ca=hebrew]
console.log(plainDate2.year); // 5781
console.log(plainDate2.month); // 10
console.log(plainDate2.day); // 21
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode statique {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
