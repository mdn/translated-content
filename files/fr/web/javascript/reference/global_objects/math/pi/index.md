---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
tags:
  - JavaScript
  - Math
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/PI
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/PI
---
{{JSRef}}

La propriété **`Math.PI`** représente le ratio entre le périmètre d'un cercle et son diamètre. Elle vaut environ 3.14159:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3.14159</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-pi.html")}}{{js_property_attributes(0,0,0)}}

## Description

`PI` est une propriété statique de l'objet `Math` et doit toujours être utilisée avec la syntaxe `Math.PI` plutôt que d'être appelée comme la propriété d'un autre objet qui aurait été crée (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.PI`

La fonction suivante utilise `Math.PI` afin de calculer le périmètre d'un cercle à partir du rayon passé en argument.

```js
function calculPérimètre(rayon) {
  return 2 * Math.PI * rayon;
}

calculPérimètre(1);  // 6.283185307179586
```

## Spécifications

| Spécification                                                        | Statut                       | Commentaires                                          |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.6', 'Math.PI')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.pi', 'Math.PI')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.pi', 'Math.PI')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.PI")}}

## Voir aussi

- {{jsxref("Math")}}
