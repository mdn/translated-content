---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/pow
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/pow
---
{{JSRef}}

La fonction **`Math.pow()`** renvoie un nombre à une certaine puissance, c'est-à-dire `base^exposant`.

{{EmbedInteractiveExample("pages/js/math-pow.html")}}

## Syntaxe

    Math.pow(base, exposant);

### Paramètres

- `base`
  - : Le nombre correspondant à la base.
- `exponent`
  - : L'exposant auquel on élève le paramètre précédent.

### Valeur de retour

Un nombre qui représente un nombre (premier argument) élevé à une puissance donné (second argument).

## Description

`pow()` est une méthode statique de `Math` et doit toujours être utilisée avec la syntaxe `Math.pow()`, elle ne doit pas être utilisée comme une méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser `Math.pow()`

```js
// Utilisation simple
Math.pow(7, 2); // 49

// Exposants négatifs
Math.pow(7, -2); // 0.02040816326530612 (1/49)

// Exposants fractionnaires
Math.pow(2, 1/2); // 1.4142135623730951 (racine carrée de 2)

// Cas aux limites
Math.pow(-7, 0.5); // NaN
// (les nombres négatifs n'ont pas de racine carrée)
Math.pow(-7, 1/3); // NaN
// Nombre négatif avec une base décimale
```

## Spécifications

| Spécification                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.13', 'Math.pow')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.pow', 'Math.pow')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.pow', 'Math.pow')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.pow")}}

## Voir aussi

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [Opérateur d'exponentiation](</fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Exponentiation_(**)>) {{experimental_inline}}
