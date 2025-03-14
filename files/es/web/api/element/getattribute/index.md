---
title: Element.getAttribute()
slug: Web/API/Element/getAttribute
---

{{APIRef}}

## Resumen

`getAttribute()` devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, el valor retornado puede ser tanto `null` como `""` (una cadena vacía); ver [Notes](#notes) para más detalles.

## Sintaxis

```js
var atributo = element.getAttribute(nombreAtributo);
```

donde

- `atributo` es una cadena que contiene el valor del atributo `nombreAtributo`.
- `nombreAtributo` es el nombre del atributo del cual se quiere obtener el valor.

## Ejemplo

```js
var div1 = document.getElementById("div1");
var align = div1.getAttribute("align");

alert(align); // Muestra el valor de la alineación(align) del elemento con id="div1"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
