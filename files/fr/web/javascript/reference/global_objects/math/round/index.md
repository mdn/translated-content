---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/round
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/round
---
{{JSRef}}

La fonction **`Math.round()`** retourne la valeur d'un nombre arrondi à l'entier le plus proche.

{{EmbedInteractiveExample("pages/js/math-round.html")}}

## Syntaxe

    Math.round(x)

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La valeur de l'entier le plus proche du nombre passé en argument.

## Description

Si la partie décimale du nombre est plus grande que 0.5, l'argument est arrondi à l'entier le plus proche dont la valeur absolue est plus grande. Si elle est plus petite que 0.5, l'argument est arrondi à l'entier le plus proche dont la valeur absolue est plus petite. Si la partie décimale du nombre vaut exactement 0.5, l'argument est arrondi à l'entier le plus proche en direction de l'infini positif (attention, pour la plupart des langages de programmation, c'est le nombre avec la plus grande valeur absolue qui est renvoyé ; on a donc une différence de comportement pour les nombres négatifs dont la partie décimale vaut exactement 0.5).

`round()` étant une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.round()`, elle ne doit pas être utilisée comme une méthode d'un objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

```js
Math.round(20.49); //  20
Math.round(20.5);  //  21
Math.round(42);    //  42
Math.round(-20.5); // -20
Math.round(-20.51);// -21
```

## Spécifications

| Spécification                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.15', 'Math.round')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.round', 'Math.round')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.round', 'Math.round')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.round")}}

## Voir aussi

- {{jsxref("Number.toPrecision()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
