---
title: Intl.DisplayNames.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
browser-compat: javascript.builtins.Intl.DisplayNames.resolvedOptions
---
{{JSRef}}

La méthode **`Intl.DisplayNames.prototype.resolvedOptions()`** renvoie un nouvel objet dont les propriétés reflètent les options de locale et de formatage calculées lors de l'instance de l'objet [`Intl.DisplayNames`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) courant.

## Syntaxe

```js
resolvedOptions()
```

### Valeur de retour

Un objet dont les propriétés reflètent les options de locale et de formatage obtenues lors de la construction de l'objet [`Intl.DisplayNames`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) courant.

## Description

L'objet renvoyé par `resolvedOptions()` possède les propriétés suivantes&nbsp;:

- `locale`
  - : La balise de langue BCP 47 pour la locale effectivement utilisée Si des extensions Unicode avaient été demandées dans la balise d'origine et ont mené à cette locale, les paires de clés-valeurs requises et qui sont prises en charge pour cette locale sont incluses dans `locale`.
- `style`
  - : La valeur fournie pour cette propriété dans l'argument `options` passé au constructeur ou la valeur par défaut ("`long`"). Sa valeur est soit "`long`", soit "`short`", soit "`narrow`".
- `type`
  - : La valeur fournie pour cette propriété dans l'argument `options` passé au constructeur ou la valeur par défaut ("`language`"). Sa valeur est soit "`language`", soit "`region`", soit "`script`", soit "`currency`".
- `fallback`
  - : La valeur fournie pour cette propriété dans l'argument `options` passé au constructeur ou la valeur par défaut ("`code`"). Sa valeur est soit "`code`", soit "`none`".

## Exemples

### Utiliser resolvedOptions()

```js
const displayNames = new Intl.DisplayNames(['de-DE'], {type: 'region'});

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.locale);   // "de-DE"
console.log(usedOptions.style);    // "long"
console.log(usedOptions.type);     // "region"
console.log(usedOptions.fallback); // "code"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.DisplayNames`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)
