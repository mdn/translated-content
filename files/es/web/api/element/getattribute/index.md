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

## Notas

Cuando es invocado en un elemento HTML desde un DOM marcado como documento HTML, `getAttribute()` convierte a minúsculas el argumento antes de proceder.

Esencialmente todos los navegadores (Firefox, Internet Explorer, versiones recientes de Opera, Safari, Konqueror, y iCab, siendo una lista no exhaustiva) devuelven `null` cuando el atributo especificado no existe en el elemento especificado y esto es lo que establece [el actual borrador de la especificación del DOM](http://dom.spec.whatwg.org/#dom-element-getattribute). Por otra parte, la antigua especificación del DOM 3 Core dice que el valor correcto de retorno es de hecho una _cadena vacía_, y algunas implementaciones de DOM aplican este comportamiento. La implementación de getAttribute en XUL (Gecko) sigue la especificación de DOM 3 Core y retorna una cadena vacía. Por consiguiente, es recomendable usar {{domxref("element.hasAttribute()")}} para verificar la existencia de un atributo previo a la utilización de `getAttribute()` si es posible que el atributo requerido no exista en el elemento especificado.

{{DOMAttributeMethods}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
