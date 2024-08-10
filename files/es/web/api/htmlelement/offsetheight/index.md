---
title: HTMLElement.offsetHeight
slug: Web/API/HTMLElement/offsetHeight
---

{{ APIRef("HTML DOM") }}

La propiedad de sólo lectura **`HTMLElement.offsetHeight`** devuelve el alto de un elemento, incluyendo el _padding_ vertical y los bordes, en píxeles, como un número entero.

Generalmente, `offsetHeight` es una medida en píxeles que representa la altura CSS del elemento, incluyendo cualquier borde, padding, y barras de desplazamiento horizontales (si existieran). No incluye el alto de pseudo-elementos como `::before` y `::after`. Para el objeto body del documento, la medida incluye la altura total del contenido lineal en lugar de la altura CSS del elemento. Los elementos flotantes que se extienden por debajo de otros contenidos lineales son ignorados

Si un elemento está oculto (por ejemplo, al establecer `style.display` a `"none"` en el elemento o uno de sus ancestros), se devuelve `0`.

> [!NOTE]
> Esta propiedad redondea el valor a un entero. Si necesitas un valor decimal, usa {{ domxref("element.getBoundingClientRect()") }}.

## Sintaxis

```
var intElemOffsetHeight = element.offsetHeight;
```

`intElemOffsetHeight` es una variable que almacena el entero correspondiente al valor de `offsetHeight` en píxeles de un elemento. La propiedad `offsetHeight` es de sólo lectura.

## Ejemplo

![Image:Dimensions-offset.png](dimensions-offset.png)

El ejemplo de la imagen de superior muestra una barra de desplazamiento y un `offsetHeight` que cabe en la ventana. Sin embargo, los elementos no desplazables podrían tener un `offsetHeight` mucho más grande que el área visible. Esos elementos están típicamente contenidos en elementos desplazables (scroll); con lo cual esos elementos no desplazables podrían ser parcial o completamente invisibles, dependiendo de la configuración de `scrollTop` del elemento contenedor.

## Especificaciones

{{Specifications}}

### Notas

`offsetHeight` es una pripiedad del modelo del objeto DHTML que fue inicialmente introducido por MSIE. A veces se le conoce como las dimensiones físicas/gráficas de un elemento, o la altura `border-box` del elemento.

## Ver también

- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determinando las dimensiones de los elementos](/es/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [MSDN Midiendo las dimensiones y ubicación de los elementos](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
