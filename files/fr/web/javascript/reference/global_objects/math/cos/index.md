---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/cos
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/cos
---
{{JSRef}}

La fonction **`Math.cos()`** retourne le [cosinus](https://fr.wikipedia.org/wiki/Cosinus) d'un angle dont la valeur est exprimée en [radians](https://fr.wikipedia.org/wiki/Radian).

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

## Syntaxe

```js
Math.cos(x)
```

### Paramètres

- `x`
  - : Une valeur numérique (exprimée en radians).

### Valeur de retour

Le cosinus de l'angle fourni en argument (exprimé en radians).

## Description

La méthode `Math.cos()` renvoie une valeur numérique comprise entre -1 et 1. Cela représente la valeur du cosinus de l'angle correspondant à cette valeur.

`cos` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.cos()`, ne pas utiliser une méthode d'un objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.cos()`

```js
Math.cos(0);           // 1
Math.cos(1);           // 0.5403023058681398

Math.cos(Math.PI);     // -1
Math.cos(2 * Math.PI); // 1
```

## Spécifications

| Spécification                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.7', 'Math.cos')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.cos', 'Math.cos')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.cos', 'Math.cos')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.cos")}}

## Voir aussi

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
