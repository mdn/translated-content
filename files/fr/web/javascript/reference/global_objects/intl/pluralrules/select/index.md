---
title: "Intl.PluralRules : méthode select()"
short-title: select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`select()`** des instances de {{JSxRef("Intl.PluralRules")}} retourne une chaîne de caractères qui indique la règle de nombre utilisée pour le formatage relatif à la locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.PluralRules.prototype.select()")}}

```js interactive-example
console.log(new Intl.PluralRules("ar-EG").select(0));
// Résultat attendu : "zero"

console.log(new Intl.PluralRules("ar-EG").select(5));
// Résultat attendu : "few"

console.log(new Intl.PluralRules("ar-EG").select(55));
// Résultat attendu : "many"

console.log(new Intl.PluralRules("en").select(0));
// Résultat attendu : "other"
```

## Syntaxe

```js-nolint
select(number)
```

### Paramètres

- `number`
  - : Le nombre pour lequel on souhaite obtenir la règle de nombre associée.

### Valeur de retour

Une chaîne de caractères représentant la catégorie de pluriel du `number`.
Cela peut être l'une des valeurs `zero`, `one`, `two`, `few`, `many` ou `other`.

## Description

Cette fonction permet de sélectionner une catégorie de pluriel en fonction de la locale et des options de formatage d'un objet {{JSxRef("Intl.PluralRules")}}.
Ces options sont définies dans le constructeur [`Intl.PluralRules()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules).

## Exemples

### Utiliser la méthode `select()`

Tout d'abord, créez un objet `Intl.PluralRules`, en passant les paramètres `locales` et `options` appropriés.
Ici, nous créons un objet de règles de pluriel pour l'arabe dans le dialecte égyptien.
Comme le `type` n'est pas défini, l'objet de règles fournira un formatage pour les nombres cardinaux (par défaut).

```js
const pr = new Intl.PluralRules("ar-EG");
```

Ensuite, appelez `select()` sur l'objet de règles, en spécifiant le nombre pour lequel la forme plurielle est requise.
Notez que l'arabe a 5 formes pour les nombres cardinaux, comme indiqué.

```js
pr.select(0); // 'zero'
pr.select(1); // 'one'
pr.select(2); // 'two'
pr.select(6); // 'few'
pr.select(18); // 'many'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.PluralRules")}}
