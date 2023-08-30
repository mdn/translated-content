---
title: Element.className
slug: Web/API/Element/className
---

{{APIRef}}

## Resumen

`className` obtiene y establece el valor del atributo `class` del elemento especificado.

## Sintaxis

```js
var cName = elementNodeReference.className;
elementNodeReference.className = cName;
```

_cName_ es una variable de cadena representando la clase o la lista de clases separada por espacios, del elemento en cuestión.

## Ejemplo

```js
let elm = document.getElementById("item");

if (elm.className === "active") {
  elm.className = "inactive";
} else {
  elm.className = "active";
}
```

## Notas

El nombre `className` es utilizado para esta propiedad en lugar de `class` para evitar conflictos con la palabra clave "class" existente en muchos de los lenguages que son usados para manipular el DOM.

`className` también puede ser una instancia de {{domxref("SVGAnimatedString")}} si `element` es un {{domxref("SVGElement")}}. Es mejor de obtener/establecer la propiedad `className` de un elemento utilizando {{domxref("Element.getAttribute")}} y {{domxref("Element.setAttribute")}} si estás tratando con elementos SVG.

```js
elm.setAttribute("class", elm.getAttribute("class"));
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("element.classList")}}
