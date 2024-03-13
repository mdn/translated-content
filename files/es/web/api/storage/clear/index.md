---
title: Storage.clear()
slug: Web/API/Storage/clear
---

{{APIRef("Web Storage API")}}

El método `clear()` de la interfaz {{domxref("Storage")}}, al invocarlo, elimina todos los registros del almacen local.

## Sintaxis

```js
storage.clear();
```

### Parámetros

_No recibe parámetros._

### Devuelve

_No devuelve ningún valor._

## Ejemplo

La siguiente función crea tres elementos con datos dentro del almacen local, seguidamente, los elimina usando `clear()`.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.clear();
}
```

> **Nota:** Para ver un ejemplo real, vea nuestro [Web Storage Demo](https://github.com/mdn/web-storage-demo).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

[Uso de la Web Storage API](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
