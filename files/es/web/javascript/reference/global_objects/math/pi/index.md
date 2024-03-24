---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
---

{{JSRef}}La propiedad **`Math.PI`** representa la relacion entre la longitud de la circunferencia de un circulo y su diametro, la cual es aproximadamente 3.14159.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3.14159</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Descripción

Debido a que PI es una propiedad estatica del modulo **`Math`**, siempre debes de utilizarla como **`Math.PI`**, en lugar de una propiedad de un objeto **`Math`** que tu hayas creado ( **`Math`** no es un constructor ).

## Ejemplos

### Utilizando `Math.PI`

La siguiente función utiliza **`Math.PI`** para calcular la longitud de la circunferencia de un circulo mediante el radio del circulo proporcionado como parametro.

```js
function calculaCircunferencia(radio) {
  return 2 * Math.PI * radio;
}

calculaCircunferencia(1); // 6.283185307179586
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- {{jsxref("Math")}}
