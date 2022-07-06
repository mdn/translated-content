---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/exp
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/exp
---
{{JSRef}}

La fonction **`Math.exp()`** renvoie l'exponentielle d'un nombre (donnée par `e^x`, où `x` est la valeur passée en argument et `e` la valeur du {{jsxref("Objets_globaux/Math/E","nombre d'Euler (parfois appelé constante de Napier)","",1)}}.

{{EmbedInteractiveExample("pages/js/math-exp.html")}}

## Syntaxe

```js
Math.exp(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

L'exponentielle du nombre passé en argument (`e^x`).

## Description

`exp()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.exp()`, elle ne doit pas être utilisée avec un objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.exp()`

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0);  // 1
Math.exp(1);  // 2.718281828459045
```

## Spécifications

| Spécification                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.8', 'Math.exp')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.exp', 'Math.exp')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.exp', 'Math.exp')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.exp")}}

## Voir aussi

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
