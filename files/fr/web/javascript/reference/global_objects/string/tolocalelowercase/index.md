---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
---

{{JSRef}}

La méthode **`toLocaleLowerCase()`** renvoie la chaîne de caractères qui appelle la méthode en une chaîne de caractères représentées en minuscules, en tenant compte des correspondances de caractères propres aux différentes locales.

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## Syntaxe

```js
str.toLocaleLowerCase()
str.toLocaleLowerCase(locale)
str.toLocaleLowerCase([locale, locale, ...])
```

### Paramètres

- `locale` {{optional_inline}}
  - : Ce paramètre indique la locale dans laquelle convertir la chaîne en minuscules en utilisant les correspondances de cette locale. Si plusieurs locales sont fournies au sein d'un tableau, c'est la meilleure locale disponible qui est utilisée. La locale par défaut est celle utilisée par le système hôte.

### Valeur de retour

Une nouvelle chaîne de caractères obtenue à partir de la chaîne appelante, convertie en minuscules en tenant compte de la locale.

### Exceptions

Cette méthode peut lever les exceptions suivantes :

- {{jsxref("RangeError")}} ("invalid language tag: xx_yy") si l'argument `locale` ne correspond pas à une balise de langue valide.
- {{jsxref("TypeError")}} ("invalid element in locales argument") si un des éléments du tableau passé en argument n'est pas une chaîne de caractères.

## Description

La méthode `toLocaleLowerCase()` renvoie la valeur de la chaîne de caractères, convertie en minuscules selon les correspondances propres à la la locale. `toLocaleLowerCase()` ne modifie pas la chaîne d'origine. Dans la plupart des cas, cette méthode produira le même résultat que {{jsxref("String.toLowerCase", "toLowerCase()")}}. En revanche, pour certaines locales, par exemple les locales turques dont les correspondances entre les caractères ne sont pas celles par défaut, prévues par Unicode, cette méthode pourra produire un résultat différent.

## Exemples

```js
"ALPHABET".toLocaleLowerCase(); // "alphabet"

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
