---
title: "Temporal.Duration : méthode toLocaleString()"
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toLocaleString()`** des instances de {{JSxRef("Temporal.Duration")}} retourne une chaîne de caractères contenant une représentation de cette durée adaptée à la langue. Dans les implémentations prenant en charge [l'API `Intl.DurationFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat), cette méthode délègue à `Intl.DurationFormat`.

Chaque fois que `toLocaleString` est appelé, il doit effectuer une recherche dans une grande base de données de chaînes de localisation, ce qui peut être potentiellement inefficace. Lorsque la méthode est appelée plusieurs fois avec les mêmes arguments, il est préférable de créer un objet {{JSxRef("Intl.DurationFormat")}} et d'utiliser sa méthode {{JSxRef("Intl/DurationFormat/format", "format()")}}, car un objet `DurationFormat` se souvient des arguments qui lui sont passés et peut décider de mettre en cache une partie de la base de données, de sorte que les appels futurs à `format` peuvent rechercher des chaînes de caractères de localisation dans un contexte plus restreint.

## Syntaxe

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Paramètres

Les paramètres `locales` et `options` personnalisent le comportement de la fonction et permettent aux applications de définir la langue dont les conventions de formatage doivent être utilisées.

Dans les implémentations prenant en charge [l'API `Intl.DurationFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat), ces paramètres correspondent exactement aux paramètres du constructeur [`Intl.DurationFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat). Les implémentations sans support de `Intl.DurationFormat` retournent exactement la même chaîne de caractères que {{JSxRef("Temporal/Duration/toString", "toString()")}}, en ignorant les deux paramètres.

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}, ou un tableau de telles chaînes de caractères. Correspond au paramètre [`locales`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#locales) du constructeur `Intl.DurationFormat()`.
- `options` {{Optional_Inline}}
  - : Un objet ajustant le format de sortie. Correspond au paramètre [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options) du constructeur `Intl.DurationFormat()`.

Voir le [constructeur `Intl.DurationFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat) pour plus de détails sur ces paramètres et comment les utiliser.

### Valeur de retour

Une chaîne de caractères représentant la durée donnée selon les conventions spécifiques à la langue.

Dans les implémentations avec `Intl.DurationFormat`, cela équivaut à `new Intl.DurationFormat(locales, options).format(duration)`.

> [!NOTE]
> La plupart du temps, le formatage retourné par `toLocaleString()` est cohérent. Cependant, la sortie peut varier entre les implémentations, même au sein du même paramètre régional — les variations de sortie sont prévues par la conception et autorisées par la spécification. Elle peut également ne pas être ce à quoi vous vous attendez. Par exemple, la chaîne de caractères peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `toLocaleString()` à des constantes codées en dur.

## Exemples

### Utiliser la méthode `toLocaleString()`

L'utilisation de base de cette méthode sans définir de `locale` retourne une chaîne de caractères formatée dans la langue par défaut et avec les options par défaut.

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });

console.log(duration.toLocaleString()); // 1 h, 30 min et 15 s
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- L'objet {{JSxRef("Intl.DurationFormat")}}
- La méthode {{JSxRef("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
