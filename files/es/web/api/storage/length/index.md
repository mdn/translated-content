---
title: Storage.length
slug: Web/API/Storage/length
---

{{APIRef("Web Storage API")}}

La propiedad de sólo lectura `length` de la interfaz {{domxref("Storage")}} devuelve un entero que indica el numero de elementos guardados en el objeto`Storage`.

## Sintaxis

```
var aLength = storage.length;
```

### Valor devuelto

Entero

## Ejemplo

La siguiente función añade tres elementos de datos en el almacen local para el dominio actual, posteriormente, devuelve el número de elementos guardados en el almacen:

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "yellow");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "cats.png");

  localStorage.length; // should return 3
}
```

> **Nota:** Para un ejemplo real, vea nuestro [Web Storage Demo](https://github.com/mdn/web-storage-demo).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

[Uso de la Web Storage API](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
