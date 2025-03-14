---
title: Intl.PluralRules.selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
---

{{JSRef}}

La méthode **`Intl.PluralRules.prototype.selectRange()`** reçoit deux valeurs en arguments et renvoie une chaîne de caractères qui indique la règle de nombre (pluriel) à utiliser pour un formatage tenant compte de la locale.

## Syntaxe

```js
selectRange(debutIntervalle, finIntervalle);
```

### Valeur de retour

Une chaîne de caractères qui représente la catégorie grammaticale de nombre. Ce peut être une chaîne parmi `"zero"`, `"one"`, `"two"`, `"few"`, `"many"` ou `"other"` et qui est pertinente pour la locale dont les règles de localisation sont définies dans [les règles de pluriel des langues LDML](https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html#rules).

## Description

Cette fonction sélectionne une catégorie de nombre selon les options de locale et de formatage portées par l'objet [`Intl.PluralRules`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules).

## Exemples

### Utiliser `selectRange()`

```js
new Intl.PluralRules("sl").selectRange(102, 201);
// → 'few'

new Intl.PluralRules("pt").selectRange(102, 102);
// → 'other'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.PluralRules`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)
