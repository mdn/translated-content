---
title: Element.setAttributeNS()
slug: Web/API/Element/setAttributeNS
---

{{ APIRef }}

`setAttributeNS añade un nuevo atributo o cambia el valor de un atributo con el namespace dado y el nombre.`

## Sintaxis

```js
elemento.setAttributeNS(namespace, nombre, valor);
```

- `namespace` es un string especificando el namespace del atributo.
- `name es un string identificando el atributo a ser puesto.`
- `value es el string del valor deseado del nuevo atributo.`

## Ejemplo

```js
var d = document.getElementById("d1");
d.setAttributeNS("http://www.mozilla.org/ns/specialspace", "align", "center");
```

## Notas

{{ DOMAttributeMethods() }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
