---
title: Math.sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sinh
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/sinh
---
{{JSRef}}

La fonction **`Math.sinh()`** renvoie le sinus hyperbolique d'un nombre, dont la formule, utilisant la constante {{jsxref("Math.E","e")}}, est :

<math><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.sinh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh(x)}} = \frac{e^x - e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sinh.html")}}

## Syntaxe

    Math.sinh(x)

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le sinus hyperbolique de la valeur passée en argument.

## Description

`sinh()` est une méthode statique de `Math`, il faut utiliser la syntaxe `Math.sinh()`. Cette méthode ne doit pas être appelée depuis un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

```js
Math.sinh(0) // 0
Math.sinh(1) // 1.1752011936438014
```

## Prothèse d'émulation (_polyfill_)

Si cette fonction n'est pas disponible, elle peut être émulée en utilisant la fonction {{jsxref("Math.exp()")}}&nbsp;:

```js
Math.sinh = Math.sinh || function(x){
    return (Math.exp(x) - Math.exp(-x)) / 2;
};
```

ou encore, si on n'utilise qu'une fois {{jsxref("Math.exp()")}}, avec :

```js
Math.sinh = Math.sinh || function(x){
    var y = Math.exp(x);
    return (y - 1/y) / 2;
};
```

## Spécifications

| Spécification                                                            | État                         | Commentaires        |
| ------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-math.sinh', 'Math.sinh')}} | {{Spec2('ES2015')}}     | Définition initiale |
| {{SpecName('ESDraft', '#sec-math.sinh', 'Math.sinh')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.sinh")}}

## Voir aussi

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.tanh()")}}
