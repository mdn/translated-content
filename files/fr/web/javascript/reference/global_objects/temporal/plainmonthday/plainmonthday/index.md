---
title: Constructeur Temporal.PlainMonthDay()
short-title: Temporal.PlainMonthDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/PlainMonthDay
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Le constructeur **`Temporal.PlainMonthDay()`** crée des objets {{JSxRef("Temporal.PlainMonthDay")}}.

Ce constructeur permet de créer des instances en fournissant directement les données sous-jacentes. Comme pour les autres classes `Temporal`, il est généralement recommandé d'utiliser la méthode statique {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}, qui accepte une variété de types d'entrée.

## Syntaxe

```js-nolint
new Temporal.PlainMonthDay(month, day)
new Temporal.PlainMonthDay(month, day, calendar)
new Temporal.PlainMonthDay(month, day, calendar, referenceYear)
```

> [!NOTE]
> `Temporal.PlainMonthDay()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` lève un {{JSxRef("TypeError")}}.

> [!WARNING]
> Évitez d'utiliser les paramètres `calendar` et `referenceYear`, car {{JSxRef("Temporal/PlainMonthDay/equals", "equals()")}} prendra en compte l'année de référence pour l'égalité, ce qui peut amener deux mois et jours équivalents à être considérés comme différents si leurs années de référence diffèrent. Pour créer un objet `Temporal.PlainMonthDay` avec un calendrier non ISO, utilisez la méthode statique {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}.

### Paramètres

- `month`
  - : Un nombre, tronqué en entier, représentant le mois dans le système de calendrier ISO.
- `day`
  - : Un nombre, tronqué en entier, représentant le jour du mois dans le système ISO.
- `calendar` {{Optional_Inline}}
  - : Une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) à utiliser. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour la liste des calendriers couramment pris en charge. Par défaut `"iso8601"`. Notez que, quel que soit le `calendar`, les valeurs `referenceYear`, `month` et `day` doivent être exprimées dans le système ISO 8601.
- `referenceYear` {{Optional_Inline}}
  - : Un nombre, tronqué en entier, représentant l'année dans le système ISO. Par défaut `1972`. Le même mois et jour ISO peut représenter des dates différentes selon les années dans des calendriers non ISO. Par exemple, 2021-07-01 et 1972-07-01 peuvent correspondre à des mois et jours différents dans un calendrier non grégorien et simplement définir "07-01" peut être insuffisant pour déterminer de manière non ambiguë un mois-jour dans le calendrier cible. Il est donc généralement souhaitable de fournir un `referenceYear` pour les calendriers non ISO.

### Valeur de retour

Un nouvel objet `Temporal.PlainMonthDay`, représentant le mois et le jour de la date définie par `referenceYear`, `month`, `day` (dans le calendrier ISO), interprété selon le calendrier défini par `calendar`.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `calendar` n'est pas une chaîne de caractères ou est `undefined`.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `referenceYear`, `month` ou `day` n'est pas un nombre fini.
    - La combinaison de `referenceYear`, `month` et `day` ne représente pas une date valide dans le système ISO, ou n'est pas dans la plage [représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), soit ±(10<sup>8</sup> + 1) jours (≈ ±273 972,6 années) par rapport à l'époque Unix.
    - `calendar` n'est pas un identifiant de calendrier valide.

## Exemples

### Utiliser `Temporal.PlainMonthDay()`

```js
const md = new Temporal.PlainMonthDay(7, 1);
console.log(md.toString()); // 07-01

const md2 = new Temporal.PlainMonthDay(7, 1, "chinese");
console.log(md2.toString()); // 1972-07-01[u-ca=chinese]

const md3 = new Temporal.PlainMonthDay(7, 1, "chinese", 2021);
console.log(md3.toString()); // 2021-07-01[u-ca=chinese]
```

### Utilisation inappropriée

Évitez d'utiliser les paramètres `calendar` et `referenceYear`, sauf si vous savez que le `referenceYear` est l'année canonique choisie par `Temporal.PlainMonthDay.from()` pour le même mois et jour.

```js
const md = new Temporal.PlainMonthDay(7, 1, "chinese", 2021);
const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=chinese]");
console.log(md.equals(md2)); // false
console.log(md.toString()); // 2021-07-01[u-ca=chinese]
console.log(md2.toString()); // 1972-07-02[u-ca=chinese]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
- La méthode statique {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
