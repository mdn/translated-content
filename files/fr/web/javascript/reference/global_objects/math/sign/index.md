---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sign
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/sign
---
{{JSRef}}

La fonction **`Math.sign()`** renvoie le signe d'un nombre et permet de savoir si un nombre est positif, négatif ou nul.

{{EmbedInteractiveExample("pages/js/math-sign.html")}}

## Syntaxe

    Math.sign(x)

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Un nombre qui représente le signe de l'argument. Si l'argument est un nombre positif, négatif, un zéro positif ou un zéro négatif, la fonction renverra respectivement `1`, `-1`, `0`, `-0`. Sinon, ce sera {{jsxref("NaN")}} qui sera renvoyé.

## Description

`sign()` étant une méthode statique de `Math`, il faut utiliser `Math.sign()` et non pas la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

Cette fonction peut renvoyer 5 valeurs : `1, -1, 0, -0, NaN,` qui indiquent respectivement que `x` est un nombre positif, un nombre négatif, zéro, la limite négative de zéro, et n'est pas un nombre pour {{jsxref("NaN")}}.

L'argument passé à cette fonction sera implicitement converti au type `number`.

## Exemples

```js
Math.sign(3)     //  1
Math.sign(-3)    // -1
Math.sign("-3")  // -1
Math.sign(0)     //  0
Math.sign(-0)    // -0
Math.sign(NaN)   // NaN
Math.sign("foo") // NaN
Math.sign()      // NaN
```

## Spécifications

| Spécification                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-math.sign', 'Math.sign')}}     | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-math.sign', 'Math.sign')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.sign")}}

## Voir aussi

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
