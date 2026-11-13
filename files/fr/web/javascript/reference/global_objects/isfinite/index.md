---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: 52aca3c51ce0ff04036a13d4db471c9844d07b00
---

La fonction **`isFinite()`** détermine si une valeur est finie, en convertissant d'abord la valeur en nombre si nécessaire. Un nombre fini est un nombre qui n'est pas {{JSxRef("NaN")}} ou ±{{JSxRef("Infinity")}}. Comme la contrainte à l'intérieur de la fonction `isFinite()` peut être [surprenante](/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description), vous pouvez préférer utiliser {{JSxRef("Number.isFinite()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: isFinite()")}}

```js interactive-example
function div(x) {
  if (isFinite(1000 / x)) {
    return "Le nombre n'est PAS infini.";
  }
  return "Le nombre est infini !";
}

console.log(div(0));
// Résultat attendu : "Le nombre est infini !"

console.log(div(1));
// Résultat attendu : "Le nombre n'est PAS infini."
```

## Syntaxe

```js-nolint
isFinite(value)
```

### Paramètres

- `value`
  - : La valeur à tester.

### Valeur de retour

`true`, sauf lorsque la valeur donnée est soit {{JSxRef("Infinity")}}, `-Infinity`, ou {{JSxRef("NaN")}} après avoir été [convertie en un nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_en_nombre).

## Description

`isFinite()` est une propriété fonction de l'objet global.

Lorsque l'argument passé à la fonction `isFinite()` n'est pas de type [nombre](/fr/docs/Web/JavaScript/Guide/Data_structures#le_type_nombre), la valeur est d'abord contrainte à un nombre, puis la valeur résultante est comparée à `NaN` et ±`Infinity`. Ce comportement est aussi déroutant que celui de {{JSxRef("isNaN")}} — par exemple, `isFinite("1")` retourne `true`.

{{JSxRef("Number.isFinite()")}} est une façon plus fiable de tester si une valeur est un nombre fini, car elle retourne `false` pour toute entrée qui n'est pas un nombre.

## Exemples

### Utiliser la fonction `isFinite()`

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

// Ce qui suit est faux avec la méthode plus robuste `Number.isFinite()` :

isFinite(null); // true, parce que null est converti en 0
isFinite(""); // true, parce que la chaîne de caractères vide est convertie en 0
isFinite("123"); // true, parce que la chaîne de caractères peut être analysée comme un nombre
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Number.isFinite()")}}
- La propriété {{JSxRef("Number.NaN")}}
- La propriété {{JSxRef("Number.POSITIVE_INFINITY")}}
- La propriété {{JSxRef("Number.NEGATIVE_INFINITY")}}
