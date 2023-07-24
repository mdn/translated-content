---
title: Window.sessionStorage
slug: Web/API/Window/sessionStorage
---

{{APIRef()}}

La propiedad `sessionStorage` permite acceder a un objeto {{domxref("Storage")}} asociado a la sesión actual. La propiedad sessionStorage es similar a [`localStorage`](/es/docs/Web/API/Window.localStorage), la única diferencia es que la información almacenada en localStorage no posee tiempo de expiración, por el contrario la información almacenada en sessionStorage es eliminada al finalizar la sesion de la página. La sesión de la página perdura mientras el navegador se encuentra abierto, y se mantiene por sobre las recargas y reaperturas de la página. **Abrir una página en una nueva pestaña o ventana iniciará una nueva sesión**, lo que difiere en la forma en que trabajan las cookies de sesión.

## Sintaxis

```js
// Almacena la información en sessionStorage
sessionStorage.setItem("key", "value");

// Obtiene la información almacenada desde sessionStorage
var data = sessionStorage.getItem("key");
```

### Valor

Un objeto de tipo {{domxref("Storage")}}.

## Ejemplo

El siguiente código accede al objeto {{domxref("Storage")}} del la sesión actual del domino y le añade un elemento utilizando {{domxref("Storage.setItem()")}}.

```js
sessionStorage.setItem("myCat", "Tom");
```

El siguiente ejemplo graba de forma automática el contenido de un campo de texto, y si el navegador es actualizado accidentalmente, restaura el contenido del campo de texto para no perder lo escrito.

```js
// Obtiene el campo de texto que vamos a moniterear
var field = document.getElementById("field");

// Verificamos si tenemos algún valor auto guardado
// (esto solo ocurrirá si la página es recargada accidentalmente)
if (sessionStorage.getItem("autosave")) {
  // Restaura el contenido al campo de texto
  field.value = sessionStorage.getItem("autosave");
}

// Espera por cambios en el campo de texto
field.addEventListener("change", function () {
  // Almacena el resultado en el objeto de almacenamiento de sesión
  sessionStorage.setItem("autosave", field.value);
});
```

> **Nota:** Por favor diríjase al artículo [Usando la API de Web Storage](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) para un ejemplo completo.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea También

- [Usando la API de Web Storage](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Window.localStorage](/es/docs/Web/API/Window.localStorage)
