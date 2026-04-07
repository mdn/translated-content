---
title: Temporal.Instant.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toLocaleString()`** des instances de {{JSxRef("Temporal.Instant")}} retourne une chaîne de caractères représentant cet instant de manière sensible à la langue. Dans les implémentations prenant en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), cette méthode délègue à `Intl.DateTimeFormat`.

Chaque fois que `toLocaleString` est appelée, elle doit effectuer une recherche dans une grande base de données de chaînes de caractères de localisation, ce qui peut être potentiellement inefficace. Lorsque la méthode est appelée plusieurs fois avec les mêmes arguments, il est préférable de créer un objet {{JSxRef("Intl.DateTimeFormat")}} et d'utiliser sa méthode {{JSxRef("Intl/DateTimeFormat/format", "format()")}}, car un objet `DateTimeFormat` se souvient des arguments qui lui ont été passés et peut décider de mettre en cache une partie de la base de données, de sorte que les appels futurs à `format` peuvent rechercher des chaînes de caractères de localisation dans un contexte plus restreint.

## Syntaxe

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Paramètres

Les paramètres `locales` et `options` personnalisent le comportement de la fonction et permettent aux applications de définir la langue dont les conventions de formatage doivent être utilisées.

Dans les implémentations qui prennent en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), ces paramètres correspondent exactement aux paramètres du constructeur [`Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Les implémentations sans support de `Intl.DateTimeFormat` renvoient exactement la même chaîne de caractères que {{JSxRef("Temporal/Instant/toString", "toString()")}}, en ignorant les deux paramètres.

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec un {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}, ou un tableau de telles chaînes. Correspond au paramètre [`locales`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) du constructeur `Intl.DateTimeFormat()`.
- `options` {{Optional_Inline}}
  - : Un objet ajustant le format de sortie. Correspond au paramètre [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) du constructeur `Intl.DateTimeFormat()`.

Voir le [constructeur `Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) pour plus de détails sur ces paramètres et comment les utiliser.

### Valeur de retour

Une chaîne de caractères représentant l'instant donné selon les conventions spécifiques à la langue.

Dans les implémentations avec `Intl.DateTimeFormat`, cela équivaut à `new Intl.DateTimeFormat(locales, options).format(instant)`.

> [!NOTE]
> La plupart du temps, le formatage retourné par `toLocaleString()` est cohérent. Cependant, la sortie peut varier entre les implémentations, même au sein du même paramètre régional — les variations de sortie sont prévues par la conception et autorisées par la spécification. Elle peut également ne pas être ce à quoi vous vous attendez. Par exemple, la chaîne de caractères peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `toLocaleString()` à des constantes codées en dur.

## Exemples

### Utiliser la méthode `toLocaleString()`

L'utilisation de base de cette méthode sans définir de `locale` retourne une chaîne de caractères formatée dans la langue par défaut et avec les options par défaut.

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56Z");

console.log(instant.toLocaleString()); // 8/1/2021, 12:34:56 AM (en supposant la locale en-US et l'appareil en fuseau horaire UTC)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- La méthode {{JSxRef("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
