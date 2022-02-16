---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sin
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/sin
---
{{JSRef}}

La fonction **`Math.sin()`** renvoie le sinus d'un nombre.

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## Syntaxe

    Math.sin(x)

### Paramètres

- `x`
  - : Un nombre (qui exprime un angle en radians).

### Valeur de retour

Le sinus de la valeur passée en argument (qui correspond à un angle en radians).

## Description

La méthode `sin()` renvoie une valeur numérique comprise (au sens large) entre 1 et -1 et qui représente le sinus d'un angle donné en radians.

`sin()` est une méthode statique de `Math`, elle doit être utilisée avec la syntaxe `Math.sin()`, elle ne doit pas être utilisée comme une méthode d'un objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

```js
Math.sin(0);           // 0
Math.sin(1);           // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
```

## Spécifications

| Spécification                                                        | Statut                       | Commentaires                                          |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.16', 'Math.sin')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.sin', 'Math.sin')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.sin', 'Math.sin')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.sin")}}

## Voir aussi

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
