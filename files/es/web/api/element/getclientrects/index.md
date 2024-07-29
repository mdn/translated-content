---
title: element.getClientRects
slug: Web/API/Element/getClientRects
---

{{ APIRef }}

El método `Element.getClientRects()` devuelve una colección de objetos {{domxref("DOMRect")}} que indican los rectángulos que delimitan el rectángulo de cada línea de texto en el navegador.

## Sintaxis

```js
var rectCollection = object.getClientRects();
```

## Devuelve

El valor devuelto es una colección de objetos rectangulares {{domxref("DOMRect")}}, uno para cada cuadro borde CSS asociado al elemento. Cada objeto {{domxref("DOMRect")}} contiene las propiedades de sólo lectura: `left`, `top`, `right` y `bottom`, que describen la caja, en pixeles, con el valor top-left relativo al valor top-left del _viewport._ En el caso de tablas con subtítulos, el subtítulo es incluido aún cuado esté fuera del cuadro borde de la tabla. En caso de ser ejecutado en algún elemento SVG que no sea el `<svg>` externo, el "viewport" al cual los rectángulos de resultado serán relativos será el "viewport" que establece el `<svg>` externo (y serán transformados por las trasnformaciones del `<svg>` externo, si estas existen).

> [!NOTE]
> Firefox 3.5 ha agregado las propiedades `width` y `height` al objeto `TextRectangle`.

La cantidad de desplazamiento que ha tenido el área del viewport (o cualquier otro elemento desplazable) se tiene en cuenta al calcular los rectángulos.

Los rectángulos devueltos no incluyen los márgenes de ningún elemento hijo que se haya podido haber desbordado.

Para los elementos de AREA en HTML, elementos SVG que no renderizen nada por si mismos, los elementos `display:none`, y generalmente cualquier elemento que no sea renderizado directamente, se devuelve una lista vacia.

Aún si la caja CSS tiene bordes vacios, se devuelven las coordenadas. Las coordenadas `left`, `top`, `right` y `bottom` pueden aún tener significado.

Es posible que los valores de desplazamiento sean fracciones de pixel.

## Ejemplo

```js
var rects = obj.getClientRects();
var numLines = rects.length;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Referencias

- [MSDN's getClientRects definition](https://msdn2.microsoft.com/en-us/library/ms536435.aspx)
