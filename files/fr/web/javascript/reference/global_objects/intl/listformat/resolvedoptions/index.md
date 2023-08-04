---
title: Intl.ListFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
---

{{JSRef}}

La méthode **`Intl.ListFormat.prototype.resolvedOptions()`** renvoie un nouvel objet dont les propriétés reflètent les options de locale et de style calculées à l'initialisation de l'objet {{jsxref("ListFormat")}}.

## Syntaxe

```js
listFormat.resolvedOptions();
```

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options de locale et de style calculées lors de l'initialisation de l'objet {{jsxref("ListFormat")}}.

## Description

L'objet renvoyé par `resolvedOptions()` possède les propriétés suivantes :

- `locale`
  - : La balise de langue BCP 47 qui est réellement utilisée. Si des extensions Unicode étaient fournies avec la balise d'origine et sont supportées pour la locale utilisée, les paires de clés-valeurs seront incluses dans `locale`.
- `style`
  - : La valeur fournie au constructeur via l'argument `options` ou la valeur utilisée par défaut (`"long"`). Cette propriété peut valoir `"long"`, `"short"` ou `"narrow"`.
- `type`
  - : La valeur fournie au constructeur via l'argument `options` ou la valeur par défaut (`"conjunction"`). Cette propriété peut valoir `"conjunction"`, `"disjunction"` ou `"unit"`.

## Exemples

```js
const deListFormatter = new Intl.ListFormat("de-DE", { style: "short" });

const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "short"
console.log(usedOptions.type); // "conjunction" (la valeur par défaut)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("ListFormat", "Intl.ListFormat")}}
- {{jsxref("NumberFormat.prototype.resolvedOptions()", "Intl.NumberFormat.prototype.resolvedOptions()")}}
- {{jsxref("Collator.prototype.resolvedOptions()", "Intl.Collator.prototype.resolvedOptions()")}}
- {{jsxref("DateTimeFormat.prototype.resolvedOptions()", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
- {{jsxref("PluralRules.prototype.resolvedOptions()", "Intl.PluralRules.prototype.resolvedOptions()")}}
