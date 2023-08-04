---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
---

{{JSRef}}

La méthode **`toLocaleUpperCase()`** renvoie la chaîne de caractères qui appelle la méthode en caractères majuscules, selon les correspondances de caractères propres aux différentes locales.

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## Syntaxe

```js
str.toLocaleUpperCase()
str.toLocaleUpperCase(locale)
str.toLocaleUpperCase([locale, locale, ...])
```

### Paramètres

- `locale` {{optional_inline}}
  - : Le paramètre `locale` indique la locale dans laquelle convertir la chaîne en majuscules afin que la méthode utilise les correspondances de cette locale. Si plusieurs locales sont fournies au sein d'un tableau, la meilleure locale disponible est alors utilisée. La locale par défaut est celle utilisée par le système hôte.

### Valeur de retour

Une nouvelle chaîne de caractères obtenue en transformant la chaîne de caractères appelante en majuscules et en tenant compte de la locale.

### Exceptions

Cette méthode peut lever les exceptions suivantes :

- {{jsxref("RangeError")}} ("invalid language tag: xx_yy") si l'argument `locale` ne correspond pas à une balise de langue valide.
- {{jsxref("TypeError")}} ("invalid element in locales arguments") si un élément du tableau de locales passé en argument n'est pas une chaîne de caractères.

## Description

La méthode `toLocaleUpperCase()` renvoie la valeur de la chaîne de caractères, convertie en majuscules selon les correspondances propres à la la locale. `toLocaleUpperCase()` ne modifie pas la chaîne d'origine. Dans la plupart des cas, cette méthode produira le même résultat que {{jsxref("String.toUpperCase", "toUpperCase()")}}. En revanche, pour certaines locales, par exemple les locales turques dont les correspondances entre les caractères ne sont pas celles par défaut prévue par Unicode, cette méthode pourra produire un résultat différent.

On notera également que la conversion ne repose pas sur une correspondance un à un de chaque caractère. En effet, certains caractères produisent deux (voire plus) caractères lorsqu'ils sont convertis en majuscules. Ainsi, la longueur de la chaîne passée en majuscules peut être différente de la longueur de la chaîne originale. Cela implique que la transformation n'est pas stable, autrement dit, l'instruction suivante pourra renvoyer `false` : `x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`.

## Exemples

```js
"alphabet".toLocaleUpperCase(); // "ALPHABET"
"Gesäß".toLocaleUpperCase(); // 'GESÄSS'
"i\u0307".toLocaleUpperCase("lt-LT"); // "I"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
