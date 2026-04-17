---
title: Constructeur Temporal.PlainYearMonth()
short-title: Temporal.PlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/PlainYearMonth
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Le constructeur **`Temporal.PlainYearMonth()`** crée des objets {{JSxRef("Temporal.PlainYearMonth")}}.

Ce constructeur permet de créer des instances en fournissant directement les données sous-jacentes. Comme pour toutes les autres classes `Temporal`, vous devriez généralement construire des objets `Temporal.PlainYearMonth` en utilisant la méthode statique {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}, qui peut gérer une variété de types d'entrée.

## Syntaxe

```js-nolint
new Temporal.PlainYearMonth(year, month)
new Temporal.PlainYearMonth(year, month, calendar)
new Temporal.PlainYearMonth(year, month, calendar, referenceDay)
```

> [!NOTE]
> `Temporal.PlainYearMonth()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` déclenche une {{JSxRef("TypeError")}}.

> [!WARNING]
> Évitez d'utiliser les paramètres `calendar` et `referenceDay`, car {{JSxRef("Temporal/PlainYearMonth/equals", "equals()")}} et {{JSxRef("Temporal/PlainYearMonth/compare", "compare()")}} prendront en compte le jour de référence pour la comparaison, ce qui peut entraîner que deux mois et années équivalentes soient considérées comme différentes si elles ont des jours de référence différents. Pour créer un objet `Temporal.PlainYearMonth` avec un calendrier non ISO, utilisez la méthode statique {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.

### Paramètres

- `year` {{Optional_Inline}}
  - : Un nombre, tronqué à un entier, représentant l'année dans le système de calendrier ISO.
- `month`
  - : Un nombre, tronqué à un entier, représentant le mois dans le système de calendrier ISO.
- `calendar` {{Optional_Inline}}
  - : Une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) à utiliser. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut, `"iso8601"`. Notez que, quel que soit le `calendar`, `year`, `month` et `referenceDay` doivent être dans le système de calendrier ISO 8601.
- `referenceDay`
  - : Un nombre, tronqué à un entier, représentant le jour du mois dans le système de calendrier ISO. Par défaut, `1`. Le même mois son année ISO peut représenter des mois différents selon les jours dans des calendriers non ISO. Par exemple, les jours 2021-07-01 et 2021-07-31 peuvent tomber dans des mois différents dans un calendrier non grégorien, et définir simplement "2021-07" est insuffisant pour déterminer de manière non ambiguë un mois dans le calendrier cible. Par conséquent, vous devez presque toujours définir un `referenceDay` lorsque vous utilisez un calendrier non ISO.

### Valeur de retour

Un nouvel objet `Temporal.PlainYearMonth`, représentant le mois et son année de la date définie par `year`, `month` et `referenceDay` (dans le calendrier ISO), interprété dans le système de calendrier défini par `calendar`.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `calendar` n'est pas une chaîne de caractères ou `undefined`.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `year`, `month` ou `referenceDay` n'est pas un nombre fini.
    - La combinaison `year`, `month` et `referenceDay` ne représente pas une date valide dans le système de calendrier ISO, ou n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est de ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.
    - `calendar` n'est pas un identifiant de calendrier valide.

## Exemples

### Utiliser `Temporal.PlainYearMonth()`

```js
const ym = new Temporal.PlainYearMonth(2021, 7);
console.log(ym.toString()); // 2021-07

const ym2 = new Temporal.PlainYearMonth(2021, 7, "chinese");
console.log(ym2.toString()); // 2021-07-01[u-ca=chinese]

const ym3 = new Temporal.PlainYearMonth(2021, 7, "chinese", 31);
console.log(ym3.toString()); // 2021-07-31[u-ca=chinese]
```

### Utilisation inappropriée

Vous devriez éviter d'utiliser les paramètres `calendar` et `referenceDay`, sauf si vous savez que le `referenceDay` est le jour de référence canonique qui serait sélectionné par `Temporal.PlainYearMonth.from()` pour la même année-mois.

```js
const ym = new Temporal.PlainYearMonth(2021, 7, "chinese", 1);
const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=chinese]");
console.log(ym.equals(ym2)); // false
console.log(ym.toString()); // 2021-07-01[u-ca=chinese]
console.log(ym2.toString()); // 2021-06-10[u-ca=chinese]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode statique {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
