---
title: Almacenamiento
slug: Web/API/Storage
---

{{APIRef("Web Storage API")}}

La interfaz `Storage` de la API de almacenamiento web provee acceso al almacenamiento de la sesión o al almacenamiento local para un dominio en particular, permitiéndote por ejemplo añadir, modificar o eliminar elementos de dato almacenados.

Si deseas manipular el almacenamiento de sesión para un dominio, debes llamar al método {{domxref("Window.sessionStorage")}}; Si deseas manipular el almacenamiento local para un dominio, debes llamar a {{domxref("Window.localStorage")}}.

## Propiedades

- {{domxref("Storage.length")}} {{readonlyInline}}
  - : Retorna un entero que representa el número de elementos almacenados en el objeto`Storage`.

## Métodos

- {{domxref("Storage.key()")}}
  - : Cuando se le pasa un número n, éste método retorna el nombre de la enésima clave en el almacenamiento.

<!---->

- {{domxref("Storage.getItem()")}}
  - : Cuando se le pasa un nombre de clave, retorna el valor de esa clave.
- {{domxref("Storage.setItem()")}}
  - : Cuando se le pasa un nombre de clave y un valor, añade dicha clave al almacenamiento, o la actualiza el valor de la clave si ya existe.
- {{domxref("Storage.removeItem()")}}
  - : Cuando se le pasa el nombre de una clave, eliminará dicha clave del almacenamiento.
- {{domxref("Storage.clear()")}}
  - : Cuando es invocado vacía todas las claves del almacenamiento.

## Ejemplos

Aquí tenemos un objeto `Storage` al llamar a `localStorage`. Primero probamos si el almacenamiento local contiene elementos de dato usando `!localStorage.getItem('bgcolor')`. Si lo hace, ejecutamos una función llamada `setStyles()` que obtiene los elementos usando {{domxref("localStorage.getItem()")}} y utiliza dichos valores para actualizar los estilos de la página. Si no, ejecutamos otra función, `populateStorage()`, que utiliza {{domxref("localStorage.setItem()")}} para definir los valores de los elementos, luego ejecuta `setStyles()`.

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}

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

> **Nota:** Para ver la ejecución de esto como un ejemplo funcional completo, mira nuestra [Demo de almacenamiento web](https://github.com/mdn/web-storage-demo).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

[Usar la API de almacenamiento Web](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
