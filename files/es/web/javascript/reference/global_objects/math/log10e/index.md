---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
tags:
  - JavaScript
  - Math
  - Propiedad
  - Referencia
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
original_slug: Web/JavaScript/Referencia/Objetos_globales/Math/LOG10E
---
{{JSRef}}La propiedad **`Math.LOG10E`** representa el logaritmo base 10 de e, el cual es aproximadamente 0.434:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0.434</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Descripción

Debido a que LOG10E es una propiedad estatica del módulo Math, se debe de invocar siempre como Math.LOG10E, en lugar de invocarla como una propiedad de algun objeto Math que hayas creado ( Math no es un constructor ).

## Ejemplos

### Utilizando `Math.LOG10E`

La siguiente funcion regresa el logaritmo base 10 de e:

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## Especificaciones

| Especificacion                                                               | Estatus                      | Comentarios                                         |
| ---------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Definición inicial. Implementado en JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.5', 'Math.LOG10E')}}     | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-math.log10e', 'Math.LOG10E')}}     | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-math.log10e', 'Math.LOG10E')}} | {{Spec2('ESDraft')}} |                                                     |

## Navegadores Compatibles

{{Compat("javascript.builtins.Math.LOG10E")}}

## Ver tambien

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
