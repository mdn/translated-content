---
title: Navigator.clipboard
slug: Web/API/Navigator/clipboard
l10n:
  sourceCommit: f3976b4130f066a6114aeb9617924cdcb0f994ce
---

{{APIRef("Clipboard API")}}

La [API de Portapapeles](/es/docs/Web/API/Clipboard_API) añade a la interfaz **{{domxref("Navigator")}}** la propiedad **`clipboard`** de solo lectura, que devuelve el objeto {{domxref("Clipboard")}} utilizado para leer y escribir el contenido del portapapeles.

La API del Portapapeles se puede utilizar para implementar funciones de cortar, copiar y pegar dentro de una aplicación web.

El uso de los métodos asincrónicos de lectura y escritura del portapapeles requiere que el usuario otorgue permiso al sitio web o a la aplicación para acceder al portapapeles. Este permiso debe obtenerse de la [API de Permisos](/es/docs/Web/API/Permissions_API) utilizando los permisos `"clipboard-read"` y/o `"clipboard-write"`.

## Valor

El objeto {{domxref("Clipboard")}} utilizado para acceder al portapapeles del sistema.

## Ejemplo

El siguiente código usa `navigator.clipboard` para acceder al portapapeles del sistema para leer el contenido del portapapeles.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".cliptext").innerText = clipText),
  );
```

Este fragmento reemplaza el contenido del elemento cuya clase es `"cliptext"` con el contenido de texto del portapapeles. Tal vez este código se esté utilizando en una extensión del navegador que muestra el contenido actual del portapapeles, actualizándose automáticamente periódicamente o cuando se activan eventos específicos.

Si el portapapeles está vacío o no contiene texto, el contenido del elemento `"cliptext"` se borra. Esto sucede porque {{domxref("Clipboard.readText", "readText()")}} devuelve una cadena vacía si el portapapeles está vacío o no contiene texto.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
