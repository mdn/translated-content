---
title: document.documentURIObject
slug: orphaned/Web/API/Document/documentURIObject
original_slug: Web/API/Document/documentURIObject
---

{{ ApiRef("DOM") }}

### Resumen

**Read-only**

Devuelve un objeto `nsIURI` que representa la URI de [document](/es/docs/Web/API/Document).

Esto sólo funciona para programas con privilegios (UniversalXPConnect) incluidas las extensiones. Para páginas web, esta propiedad no tiene significado especial y puede usarse de igual forma que cualquier otra propiedad del usuario.

El código con privilegios, debe tener cuidado de no leer o escribir esta propiedad en un objeto no controlado (e.g. on a `wrappedJSObject` of an [`XPCNativeWrapper`](/es/XPCNativeWrapper)). Ver [Error 324464 en Firefox](https://bugzil.la/324464)para más detalles.

### Sintaxis

```
varuri =doc.documentURIObject;
```

### Ejemplo

```
// Comprueba que el esquema URI de la pestaña de Firefox es 'http',
// asumiendo que este código se ejecuta dentro de browser.xul
var uriObj = content.document.documentURIObject;
var uriPort = uriObj.port;

if (uriObj.schemeIs('http')) {
  ...
}
```

### Especificación

No forma parte de ninguna especificación W3C.
