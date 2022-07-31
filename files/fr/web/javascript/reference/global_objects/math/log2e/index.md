---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
tags:
  - JavaScript
  - Math
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/LOG2E
---
{{JSRef}}

La propriété **`Math.LOG2E`** représente la valeur du logarithme en base 2 de e, environ 1.442 :

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG2E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.442</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG2E}} = \log_2(e) \approx 1.442</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2e.html")}}{{js_property_attributes(0,0,0)}}

## Description

`LOG2E` est une propriété statique de l'objet `Math` et doit toujours être utilisé avec la syntaxe `Math.LOG2E` plutôt que comme la propriété d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.LOG2E`

La fonction suivante renvoie la valeur du logarithme en base 2 de e :

```js
function getLog2e() {
   return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
```

## Spécifications

| Spécification                                                                | Statut                       | Commentaires                                          |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.4', 'Math.LOG2E')}}         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.log2e', 'Math.LOG2E')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.log2e', 'Math.LOG2E')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.LOG2E")}}

## Voir aussi

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
