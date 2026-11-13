---
title: "String : méthode concat()"
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`concat()`** des valeurs {{JSxRef("String")}} concatène les arguments de chaîne de caractères à cette chaîne de caractères et retourne une nouvelle chaîne de caractères.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.concat()")}}

```js interactive-example
const str1 = "Bonjour";
const str2 = "Le monde";

console.log(str1.concat(" ", str2));
// Résultat attendu : "Bonjour Le monde"

console.log(str2.concat(", ", str1));
// Résultat attendu : "Le monde, Bonjour"
```

## Syntaxe

```js-nolint
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)
```

### Paramètres

- `str1`, …, `strN`
  - : Une ou plusieurs chaînes de caractères à concaténer à `str`. Bien que techniquement autorisé, appeler `String.prototype.concat()` sans arguments est une opération inutile, car elle ne résulte pas en une copie observable (comme {{JSxRef("Array.prototype.concat()")}}), étant donné que les chaînes de caractères sont immuables. Cela ne doit se produire que si vous utilisez la syntaxe de [décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) pour passer un tableau de chaînes de caractères en tant qu'arguments, et que ce tableau est vide.

### Valeur de retour

Une nouvelle chaîne de caractères qui contient la concaténation des chaînes de caractères fournies.

## Description

La fonction `concat()` concatène les arguments de chaîne de caractères à la chaîne de caractères appelante et retourne une nouvelle chaîne de caractères.

Si les arguments ne sont pas de type chaîne de caractères, ils sont convertis en valeurs de type chaîne de caractères avant la concaténation.

La méthode `concat()` est très similaire aux [opérateurs d'addition/concaténation de chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`), sauf que `concat()` [force directement ses arguments à être des chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), tandis que l'addition force d'abord ses opérandes à être des valeurs primitives. Pour plus d'informations, voir la page de référence pour [l'opérateur `+`](/fr/docs/Web/JavaScript/Reference/Operators/Addition).

## Exemples

### Utiliser la méthode `concat()`

L'exemple suivant combine plusieurs chaînes de caractères afin d'en former une nouvelle.

```js
const bonjour = "Bonjour, ";
console.log(bonjour.concat("Kevin", ". Passez une bonne journée."));
// Bonjour, Kevin. Passez une bonne journée.

const listeSalutations = ["Bonjour", " ", "Kevin", "!"];
"".concat(...listeSalutations); // "Bonjour Kevin!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Array.prototype.concat()")}}
- [L'addition (`+`)](/fr/docs/Web/JavaScript/Reference/Operators/Addition)
