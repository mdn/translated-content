---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
---

{{JSRef}}

La función **`Math.cbrt()`** nos retorna la raíz del cubo del numero, eso es

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>c</mi><mi>b</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{Math.cbrt(x)} = \sqrt[3]{x} = \text{un unico} \; y \; \text{de tal manera que} \; y^3 = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-cbrt.html")}}The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

## Sintaxis

```
Math.cbrt(x)
```

### Parametros

- _x_
  - : Un numero

### Valor retornado

La raíz cubica del numero proporcionado

## Descripción

Al `cbrt()` ser un metodo estatico de `Math`, tu siempre la puedes usar como `Math.cbrt()`,un metodo de `Math` que es un objeto que se crea (`Math` no es un constructor).

## Poliformismo

Para <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding="TeX">x \geq 0</annotation></semantics></math>, tenemos <math><semantics><mrow><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup></mrow><annotation encoding="TeX">\sqrt[3]{x} = x^{1/3}</annotation></semantics></math> esto puede ser emulado con la siguiente función:

```js
if (!Math.cbrt) {
  Math.cbrt = (function (pow) {
    return function cbrt(x) {
      // Esto asegura que numeros negativos sigan siendo negativos
      return x < 0 ? -pow(-x, 1 / 3) : pow(x, 1 / 3);
    };
  })(Math.pow); // Localiza Math.pow para una mayor eficiencía
}
```

## Ejemplos

### Usando Math.cbrt()

```js
Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(-Infinity); // -Infinito
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(Infinity); // Infinito
Math.cbrt(null); // 0
Math.cbrt(2); // 1.2599210498948732
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Puedes leer

- [{{jsxref("Math.pow()")}}](https://github.com/mdn/browser-compat-data)
- [{{jsxref("Math.sqrt()")}}](https://github.com/mdn/browser-compat-data)
