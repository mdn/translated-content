---
title: "Temporal.PlainYearMonth : méthode toLocaleString()"
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toLocaleString()`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne une chaîne de caractères représentant ce mois et cette année de manière sensible à la langue. Dans les implémentations avec le support de [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), cette méthode délègue à `Intl.DateTimeFormat`.

Chaque fois que `toLocaleString` est appelé, il doit effectuer une recherche dans une grande base de données de chaînes de caractères de localisation, ce qui peut être potentiellement inefficace. Lorsque la méthode est appelée plusieurs fois avec les mêmes arguments, il est préférable de créer un objet {{JSxRef("Intl.DateTimeFormat")}} et d'utiliser sa méthode {{JSxRef("Intl/DateTimeFormat/format", "format()")}}, car un objet `DateTimeFormat` se souvient des arguments qui lui ont été passés et peut décider de mettre en cache une partie de la base de données, de sorte que les appels futurs à `format` peuvent rechercher des chaînes de caractères de localisation dans un contexte plus restreint.

## Syntaxe

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Paramètres

Les paramètres `locales` et `options` personnalisent le comportement de la fonction et permettent aux applications de définir la langue dont les conventions de formatage doivent être utilisées.

Dans les implémentations qui prennent en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), ces paramètres correspondent exactement aux paramètres du constructeur [`Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Les implémentations sans support de `Intl.DateTimeFormat` retournent exactement la même chaîne de caractères que {{JSxRef("Temporal/PlainYearMonth/toString", "toString()")}}, en ignorant les deux paramètres.

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}, ou un tableau de telles chaînes de caractères. Correspond au paramètre [`locales`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) du constructeur `Intl.DateTimeFormat()`.
- `options` {{Optional_Inline}}
  - : Un objet ajustant le format de sortie. Correspond au paramètre [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) du constructeur `Intl.DateTimeFormat()`. L'option `calendar` doit être fournie avec la même valeur que le calendrier de ce mois et son année. En ce qui concerne les [options de composant de date et d'heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options_des_composants_de_date_et_dheure) et les raccourcis de style (`dateStyle` et `timeStyle`), les options doivent suivre l'une de ces formes&nbsp;:
    - Ne fournir aucune d'entre elles&nbsp;: `year` et `month` seront par défaut `"numeric"`.
    - Fournir uniquement `dateStyle`&nbsp;: cela se développe en formats `era`, `year` et `month`.
    - Fournir certaines options de composant de date et d'heure, où au moins l'une d'entre elles est `year` ou `month`. Seuls les composants de date définis seront inclus dans la sortie.

Voir le [constructeur `Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) pour plus de détails sur ces paramètres et comment les utiliser.

### Valeur de retour

Une chaîne de caractères représentant le mois et l'année donnés selon les conventions spécifiques à la langue.

Dans les implémentations avec `Intl.DateTimeFormat`, cela équivaut à `new Intl.DateTimeFormat(locales, options).format(yearMonth)`, où `options` a été normalisé comme décrit ci-dessus.

> [!NOTE]
> La plupart du temps, le formatage retourné par `toLocaleString()` est cohérent. Cependant, la sortie peut varier entre les implémentations, même au sein de la même locale — les variations de sortie sont prévues par la conception et autorisées par la spécification. Elle peut également ne pas être ce à quoi vous vous attendez. Par exemple, la chaîne de caractères peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `toLocaleString()` à des constantes codées en dur.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si l'une des options n'est pas du type attendu.

## Exemples

### Utiliser la méthode `toLocaleString()`

Une utilisation simple de cette méthode sans définir de `locale` retourne une chaîne de caractères formatée dans la locale par défaut et avec les options par défaut.

```js
// On notera que la simple spécification de "2021-08" utilise par défaut
// le calendrier ISO 8601, ce qui génère une erreur si le calendrier par
// défaut de la locale n'est pas ISO 8601.
const ym = Temporal.PlainYearMonth.from("2021-08-01[u-ca=gregory]");

console.log(ym.toLocaleString()); // 08/2021 (en supposant la locale fr-FR et le calendrier grégorien)
```

Si le calendrier du mois et de son année ne correspond pas au calendrier par défaut de la locale, même lorsque son calendrier est `iso8601`, une option `calendar` explicite doit être fournie avec la même valeur.

```js
const ym = Temporal.PlainYearMonth.from("2021-08");
ym.toLocaleString("fr-FR", { calendar: "iso8601" }); // 2021-08
```

### Utiliser la méthode `toLocaleString()` avec des options

Vous pouvez personnaliser les parties du mois et de son année incluses dans la sortie en fournissant le paramètre `options`.

```js
const ym = Temporal.PlainYearMonth.from("2021-08-01[u-ca=gregory]");
ym.toLocaleString("fr-FR", { dateStyle: "full" }); // août 2021
ym.toLocaleString("fr-FR", { year: "2-digit" }); // 21
ym.toLocaleString("fr-FR", { month: "long" }); // août
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
