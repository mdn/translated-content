---
title: Element.clientWidth
slug: Web/API/Element/clientWidth
translation_of: Web/API/Element/clientWidth
---
{{ APIRef("DOM") }}

La propiedad **`Element.clientWidth`** es cero para elementos sin CSS o cajas de diseño (layout), en caso contrario es la anchura interior de un elemento en pixels, incluyendo la anchura de relleno (padding) pero no la anchura de la barra de desplazamiento vertical (si está presente, si está dibujada), el borde o el margen.

> **Nota:** El valor de esta propiedad será redondeado a un entero. Si necesita un valor fraccional, use {{ domxref("element.getBoundingClientRect()") }}.

## Sintaxis

    var intElemClientWidth = element.clientWidth;

_intElemClientWidth_ será un entero que corresponde con el **clientWidth** del \_element_o en pixels. **clientWidth** es de sólo-lectura.

## Ejemplo

![Image:Dimensions-client.png](/@api/deki/files/185/=Dimensions-client.png)

## Especificación

| Especificación                                                                               | Estado                           | Observaciones |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------- |
| {{SpecName('CSSOM View', '#dom-element-clientwidth', 'clientWidth')}} | {{Spec2("CSSOM View")}} |               |

### Notas

`clientWidth` fue introducida en el modelo de objetos DHTML de MS IE.

## Compatibilidad con navegadores

{{Compat("api.Element.clientWidth")}}

## Ver también

- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Determining the dimensions of elements](/es/docs/Determining_the_dimensions_of_elements)
- [MSDN Measuring Element Dimension and Location](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
