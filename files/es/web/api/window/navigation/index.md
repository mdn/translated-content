---
title: "Window: Propiedad navigation"
slug: Web/API/Window/navigation
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{SeeCompatTable}}

La propiedad de solo lectura `navigation` de la interfaz {{domxref("Window")}} devuelve el objeto {{domxref("Navigation")}} asociada a la ventana actual.

El punto de entrada para el {{domxref("Navigation API")}}.

## Valor

Una instancia del objeto {{domxref("Navigation")}}.

## Ejemplos

```js
let currentNavEntries = window.navigation.entries();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Enrutamiento moderno del lado del cliente: la API de navegación](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Explicación de la API de navegación](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Ejemplo en vivo de la API de navegación](https://gigantic-honored-octagon.glitch.me/)
