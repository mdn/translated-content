---
title: "Window: método getScreenDetails()"
slug: Web/API/Window/getScreenDetails
l10n:
  sourceCommit: e089abbca14964a8ce945135d954cbfd098fd6f7
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

El método **`getScreenDetails()`** de la interfaz {{domxref("Window")}} devuelve una {{jsxref("Promise", "Promesa")}} que cumple con la instancia del objeto {{domxref("ScreenDetails")}} representando los detalles de todas las pantallas disponibles del dispositivo del usuario.

## Sintaxis

```js-nolint
getScreenDetails()
```

### Parametros

Ninguno.

### Valor devuelto

Una {{jsxref("Promise", "Promesa")}} que cumple con la instancia de un objeto {{domxref("ScreenDetails")}}.

### Excepciones

- `NotAllowedError` {{domxref("DOMException")}}
  - : Se produce si se establece una [Politica de permisos](/es/docs/Web/HTTP/Permissions_Policy) de {{httpheader("Permissions-Policy/window-management", "administración de ventanas")}} que bloquea el uso del [API de administracion de ventanas](/es/docs/Web/API/Window_Management_API), o si el usuario ha negado explícitamente la solicitud de permiso del navegador para utilizar la API.

## Ejemplos

Cuando `getScreenDetails()` es invocado se le pedirá permiso al usuario para administrar ventanas en todas sus pantallas (el estado de este permiso se puede verificar usando {{domxref("Permissions.query()")}} para consultar `window-management`). Cuando se concede el permiso, el objeto {{domxref("ScreenDetails")}} resultante contiene todos los detalles de todas las pantallas disponibles para el sistema del usuario.

El siguiente ejemplo abre una ventana de tamaño completo en cada pantalla disponible.

```js
const screenDetails = await window.getScreenDetails();

// Abre una ventana de tamaño completo en cada pantalla disponible.
for (const screen of screenDetails.screens) {
  window.open(
    "https://example.com",
    "_blank",
    `left=${screen.availLeft},
    top=${screen.availTop},
    width=${screen.availWidth},
    height=${screen.availHeight}`,
  );
}
```

> [!NOTE]
> Consulta [Entorno de aprendizaje de multiples ventanas](https://mdn.github.io/dom-examples/window-management-api/) para un ejemplo completo (consulta también el [codigo fuente](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [API de administración de ventanas](/es/docs/Web/API/Window_Management_API)
