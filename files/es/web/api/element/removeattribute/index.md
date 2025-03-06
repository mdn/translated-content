---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
---

{{ APIRef }}

`removeAttribute` elimina un atributo del elemento especificado.

## Sintaxis

```js
element.removeAttribute(attrName);
```

- `attrName` es una cadena que nombra el atributo a ser eliminado de _element_.

## Ejemplo

```js
// <div id="div1" align="left" width="200px">
document.getElementById("div1").removeAttribute("align");
// ahora: <div id="div1" width="200px">
```

## Notas

Debe usarse preferiblemente `removeAttribute` en lugar de establecer el valor del atributo a `null` usando [setAttribute](/es/docs/Web/API/Element/setAttribute).

Intentar eliminar un atributo que no existe en el elemento no disparará una excepción.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
