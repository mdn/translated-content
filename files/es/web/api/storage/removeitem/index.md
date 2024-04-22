---
title: Storage.removeItem()
slug: Web/API/Storage/removeItem
---

{{APIRef("Web Storage API")}}

El método `removeItem()` de la interfaz {{domxref("Storage")}} elimina la clave cuyo nombre recibe por parámetro del almacenamiento. La interfaz `Storage` de la [API de almacenamiento web](/es/docs/Web/API/API_de_almacenamiento_web) provee acceso al almacenamiento de la sesión (`sessionStorage`) o al almacenamiento local (`localStorage`).

## Sintaxis

```
storage.removeItem(keyName);
```

### Parámetros

- _**keyName**_
  - : Una {{domxref("DOMString")}} que contiene el nombre de la clave que se desea eliminar.

### Devuelve

_Ningún valor._

## Ejemplos

La siguiente función crea 3 elementos dentro del almacenamiento local y después elimina el elemento `image`.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.removeItem("image");
}
```

De la misma manera se podría manipular el almacenamiento de sesión:

```js
function populateSessionStorage() {
  sessionStorage.setItem("bgcolor", "red");
  sessionStorage.setItem("font", "Helvetica");
  sessionStorage.setItem("image", "myCat.png");

  sessionStorage.removeItem("image");
}
```

> **Nota:** Para ver esto en un ejemplo real, vea nuestra [Demo de Web Storage](https://github.com/mdn/web-storage-demo).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

[Utilizando la API de Web Storage](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
