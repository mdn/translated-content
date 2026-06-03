---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
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

`false` si la valeur donnée est {{JSxRef("NaN")}}, {{JSxRef("Infinity")}} ou `-Infinity` après avoir été [convertie en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre)&nbsp;; sinon, `true`.

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

// Aurait été false avec la méthode plus robuste Number.isFinite() :
isFinite(null); // true
isFinite("0"); // true
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
