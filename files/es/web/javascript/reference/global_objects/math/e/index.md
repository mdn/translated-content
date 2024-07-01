---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
---

{{JSRef}}

La propiedad **`Math.E`** representa la base de los logaritmos naturales, e, aproximadamente 2.718.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2.718</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-e.html")}}

{{js_property_attributes(0, 0, 0)}}

## Descripción

Porque `E` es una propiedad estática de `Math`, siempre usted lo usa como `Math.E`, en lugar de como una propiedad de un objeto `Math` creado (`Math` no es un constructor).

## Ejemplos

### Utilizando `Math.E`

La función siguiente devuelve e:

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
