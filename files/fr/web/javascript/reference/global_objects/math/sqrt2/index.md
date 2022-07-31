---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
tags:
  - JavaScript
  - Math
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/SQRT2
---
{{JSRef}}

La propriété **`Math.SQRT2`** représente la racine carrée de 2 et vaut environ 1.414 :

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT2</mi></mstyle><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT2}} = \sqrt{2} \approx 1.414</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt2.html")}}{{js_property_attributes(0,0,0)}}

## Description

`SQRT2` est une propriété statique de `Math` et doit toujours être utilisée avec la syntaxe `Math.SQRT2`, elle ne doit pas être appelée comme propriété d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

La fonction suivante renvoie la valeur de la racine carrée de 2 :

```js
function getRoot2() {
   return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## Spécifications

| Spécification                                                                | Statut                       | Commentaires                                          |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.8', 'Math.SQRT2')}}         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.sqrt2', 'Math.SQRT2')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.sqrt2', 'Math.SQRT2')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.SQRT2")}}

## Voir aussi

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
