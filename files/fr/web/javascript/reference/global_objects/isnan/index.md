---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

La fonction **`isNaN()`** détermine si une valeur est {{JSxRef("NaN")}}, en convertissant d'abord la valeur en nombre si nécessaire. Comme la contrainte à l'intérieur de la fonction `isNaN()` peut être [surprenante](#description), vous pouvez préférer utiliser {{JSxRef("Number.isNaN()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: isNaN()")}}

```js interactive-example
function milliseconds(x) {
  if (isNaN(x)) {
    return "N'est pas un nombre !";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// Résultat attendu : "N'est pas un nombre !"

console.log(milliseconds("0.0314E+2"));
// Résultat attendu : 3140
```

## Syntaxe

```js-nolint
isNaN(value)
```

### Paramètres

- `value`
  - : La valeur à tester.

### Valeur de retour

`true` si la valeur donnée est {{JSxRef("NaN")}} après avoir été [convertie en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre)&nbsp;; sinon, `false`.

## Description

`isNaN()` est une propriété fonction de l'objet global.

Pour les valeurs numériques, `isNaN()` teste si le nombre vaut [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN). Lorsque l'argument passé à la fonction `isNaN()` n'est pas de type [nombre](/fr/docs/Web/JavaScript/Guide/Data_structures#le_type_nombre), la valeur est d'abord contrainte à un nombre, puis la valeur résultante est comparée à {{JSxRef("NaN")}}.

Ce comportement de `isNaN()` pour les arguments non numériques peut prêter à confusion&nbsp;! Par exemple, une chaîne vide est convertie en 0, tandis qu'une valeur booléenne est convertie en 0 ou 1&nbsp;; ces deux valeurs ne sont intuitivement «&nbsp;pas des nombres&nbsp;», mais elles ne valent pas `NaN`, donc `isNaN()` retourne `false`. Ainsi, `isNaN()` ne répond ni à la question «&nbsp;l'entrée est-elle la valeur flottante {{JSxRef("NaN")}}&nbsp;» ni à la question «&nbsp;l'entrée n'est-elle pas un nombre&nbsp;».

{{JSxRef("Number.isNaN()")}} est une façon plus fiable de tester si une valeur est la valeur numérique `NaN` ou non. Alternativement, l'expression `x !== x` peut être utilisée, et aucune de ces solutions n'est sujette aux faux positifs qui rendent le `isNaN()` global peu fiable. Pour tester si une valeur est un nombre, utilisez [`typeof x === "number"`](/fr/docs/Web/JavaScript/Reference/Operators/typeof).

La fonction `isNaN()` répond à la question «&nbsp;l'entrée est-elle fonctionnellement équivalente à {{JSxRef("NaN")}} lorsqu'elle est utilisée dans un contexte numérique&nbsp;». Si `isNaN(x)` retourne `false`, vous pouvez utiliser `x` dans une expression arithmétique comme s'il s'agissait d'un nombre valide qui n'est pas `NaN`. Si `isNaN(x)` retourne `true`, `x` sera contraint à `NaN` et la plupart des expressions arithmétiques retourneront `NaN` (car `NaN` se propage). Vous pouvez utiliser cela, par exemple, pour tester si un argument d'une fonction est traitable arithmétiquement (utilisable «&nbsp;comme&nbsp;» un nombre), et gérer les valeurs qui ne sont pas assimilables à un nombre en lançant une erreur, en fournissant une valeur par défaut, etc. De cette façon, vous pouvez avoir une fonction qui exploite toute la polyvalence offerte par JavaScript en convertissant implicitement les valeurs selon le contexte.

> [!NOTE]
> [L'opérateur `+`](/fr/docs/Web/JavaScript/Reference/Operators/Addition) applique à la fois l'addition de nombre et la concaténation de chaîne de caractères. Ainsi, même si `isNaN()` retourne `false` pour les deux opérandes, l'opérateur `+` peut toujours retourner une chaîne de caractères, car il n'est pas utilisé comme opérateur arithmétique. Par exemple, `isNaN("1")` retourne `false`, mais `"1" + 1` retourne `"11"`. Pour être sûr de travailler avec des nombres, [contraignez la valeur à un nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) et utilisez {{JSxRef("Number.isNaN()")}} pour tester le résultat.

## Exemples

Notez comment `isNaN()` retourne `true` pour des valeurs qui ne sont pas la valeur `NaN` mais qui ne sont pas des nombres non plus&nbsp;:

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// Chaînes de caractères
isNaN("37"); // false : "37" est converti en nombre 37 qui n'est pas NaN
isNaN("37.37"); // false : "37.37" est converti en nombre 37.37 qui n'est pas NaN
isNaN("37,5"); // true
isNaN("123ABC"); // true : Number("123ABC") est NaN
isNaN(""); // false : la chaîne vide est convertie en 0 qui n'est pas NaN
isNaN(" "); // false : une chaîne avec des espaces est convertie en 0 qui n'est pas NaN

// Dates
isNaN(new Date()); // false ; Les objets Date peuvent être convertis en nombre (timestamp)
isNaN(new Date().toString()); // true ; la représentation sous forme de chaîne d'un objet Date ne peut pas être analysée comme un nombre

// Tableaux
isNaN([]); // false ; la représentation primitive est "", qui se convertit en nombre 0
isNaN([1]); // false ; la représentation primitive est "1"
isNaN([1, 2]); // true ; la représentation primitive est "1,2", qui ne peut pas être analysée comme un nombre
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété globale {{JSxRef("NaN")}}
- La méthode {{JSxRef("Number.isNaN()")}}
