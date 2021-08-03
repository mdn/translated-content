---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/tan
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/tan
---
{{JSRef}}

La fonction **`Math.tan()`** renvoie la tangente d'un nombre exprimant un angle en radians.

{{EmbedInteractiveExample("pages/js/math-tan.html")}}

## Syntaxe

    Math.tan(x)

### Paramètres

- `x`
  - : Un nombre qui représente un angle en radians.

### Valeur de retour

La tangente de l'angle fourni en argument (exprimé en radians).

## Description

La méthode `Math.tan()` renvoie une valeur numérique qui représente la tangente d'un angle.

`tan()` est une méthode statique de `Math` et doit toujours être utilisée avec la syntaxe `Math.tan()`, elle ne doit pas être utilisée comme méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.tan()`

```js
Math.tan(1); // 1.5574077246549023
```

`Math.tan()` considère un argument exprimé en radians. Cependant, on peut vouloir travailler avec des valeurs en degrés. Pour cela, on pourra utiliser la fonction suivante qui calcule la tangente après avoir converti l'argument en radians :

```js
function getTanDeg(deg) {
   var rad = deg * Math.PI/180;
   return Math.tan(rad);
}
```

## Spécifications

| Spécification                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.18', 'Math.tan')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.tan', 'Math.tan')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.tan', 'Math.tan')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.tan")}}

## Voir aussi

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
