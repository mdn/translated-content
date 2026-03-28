---
title: "Temporal.PlainDate : méthode toLocaleString()"
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toLocaleString()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne une chaîne de caractères représentant cette date de manière sensible à la langue. Dans les implémentations prenant en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), cette méthode délègue à `Intl.DateTimeFormat`.

Chaque fois que `toLocaleString` est appelé, il doit effectuer une recherche dans une grande base de données de chaînes de localisation, ce qui peut être inefficace. Lorsque la méthode est appelée plusieurs fois avec les mêmes arguments, il est préférable de créer un objet {{JSxRef("Intl.DateTimeFormat")}} et d'utiliser sa méthode {{JSxRef("Intl/DateTimeFormat/format", "format()")}}, car un objet `DateTimeFormat` se souvient des arguments qui lui ont été passés et peut décider de mettre en cache une partie de la base de données, de sorte que les appels futurs à `format` peuvent rechercher des chaînes de localisation dans un contexte plus restreint.

## Syntaxe

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Paramètres

Les paramètres `locales` et `options` personnalisent le comportement de la fonction et permettent aux applications de définir la langue dont les conventions de formatage doivent être utilisées.

Dans les implémentations prenant en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), ces paramètres correspondent exactement aux paramètres du constructeur [`Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Les implémentations sans support de `Intl.DateTimeFormat` retournent exactement la même chaîne de caractères que {{JSxRef("Temporal/PlainDate/toString", "toString()")}}, en ignorant les deux paramètres.

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}, ou un tableau de telles chaînes de caractères. Correspond au paramètre [`locales`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) du constructeur `Intl.DateTimeFormat()`.
- `options` {{Optional_Inline}}
  - : Un objet ajustant le format de sortie. Correspond au paramètre [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) du constructeur `Intl.DateTimeFormat()`. Si le calendrier de cette date n'est pas `"iso8601"`, l'option `calendar` doit être fournie avec la même valeur&nbsp;; sinon, si le calendrier de cette date est `"iso8601"`, l'option `calendar` peut être n'importe quelle valeur. En ce qui concerne les [options de composant date-heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options_des_composants_de_date_et_dheure) et les raccourcis de style (`dateStyle` et `timeStyle`), les options doivent suivre l'une de ces formes&nbsp;:
    - Ne fournir aucune d'entre elles&nbsp;: `year`, `month` et `day` seront par défaut `"numeric"`.
    - Fournir uniquement `dateStyle`&nbsp;: cela s'étend aux formats `weekday`, `era`, `year`, `month` et `day`.
    - Fournir certaines options de composant date-heure, où au moins l'une d'entre elles est une option de date (`weekday`, `year`, `month`, `day`). Seuls les composants de date spécifiés seront inclus dans la sortie.

Voir le [constructeur `Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) pour plus de détails sur ces paramètres et comment les utiliser.

### Valeur de retour

Une chaîne de caractères représentant la date donnée selon les conventions spécifiques à la langue.

Dans les implémentations prenant en charge `Intl.DateTimeFormat`, cela équivaut à `new Intl.DateTimeFormat(locales, options).format(date)`, où `options` a été normalisé comme décrit ci-dessus.

> [!NOTE]
> La plupart du temps, le formatage retourné par `toLocaleString()` est cohérent. Cependant, la sortie peut varier entre les implémentations, même au sein du même paramètre régional — les variations de sortie sont prévues par la conception et autorisées par la spécification. Elle peut également ne pas être ce à quoi vous vous attendez. Par exemple, la chaîne de caractères peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `toLocaleString()` à des constantes codées en dur.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si l'une des options n'est pas du type attendu.

## Exemples

### Utiliser la méthode `toLocaleString()`

L'utilisation de base de cette méthode sans définir de `locale` renvoie une chaîne de caractères formatée dans la langue par défaut et avec les options par défaut.

```js
const date = Temporal.PlainDate.from("2021-08-01");

console.log(date.toLocaleString()); // 8/1/2021 (en supposant le paramètre régional en-US)
```

Si le calendrier de la date ne correspond pas au calendrier par défaut du paramètre régional, et que le calendrier de la date n'est pas `iso8601`, une option `calendar` explicite doit être fournie avec la même valeur.

```js
const date = Temporal.PlainDate.from("2021-08-01[u-ca=japanese]");
// Le paramètre régional ja-JP utilise le calendrier grégorien par défaut
date.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1
```

### Utiliser la méthode `toLocaleString()` avec des options

Vous pouvez personnaliser les parties de la date incluses dans la sortie en fournissant le paramètre `options`.

```js
const date = Temporal.PlainDate.from("2021-08-01");
date.toLocaleString("fr-FR", { dateStyle: "full" }); // dimanche 1 août 2021
date.toLocaleString("fr-FR", {
  year: "numeric",
  month: "long",
  day: "numeric",
}); // 1 août 2021
date.toLocaleString("fr-FR", { year: "numeric", month: "long" }); // août 2021
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- La méthode {{JSxRef("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
