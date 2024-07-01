---
title: Storage.getItem()
slug: Web/API/Storage/getItem
---

{{APIRef("Web Storage API")}}

El método `getItem()` de la interfaz {{domxref("Storage")}} devuelve el valor de la clave cuyo nombre se le pasa por parámetro.

## Sintaxis

```
var aValue = storage.getItem(keyName);
```

### Parámetros

- _`keyName`_
  - : Una {{domxref("DOMString")}} que contiene el nombre de la clave cuyo valor se quiere obtener.

### Devuelve

Una {{domxref("DOMString")}} que contiene el valor de la clave. Si la clave no existe, devuelve `null`.

## Ejemplo

La siguiente función toma 3 elementos del almacenamiento local (local storage) y los utiliza para establecer estilos personalizados en una página.

```js
function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> **Nota:** Para ver esto utilizado en un ejemplo real, vea nuestra [Demo de Web Storage](https://github.com/mdn/web-storage-demo).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

[Utilizando la API de Web Storage](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
