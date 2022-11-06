---
title: Document.close()
slug: Web/API/Document/close
translation_of: Web/API/Document/close
---
{{APIRef("DOM")}}

El método `document.close()` finaliza la escritura de un documento abierta con [document.open()](/en/DOM/document.open).

## Sintaxis

```js
document.close();
```

## Ejemplo

```js
// Abrir un documento.
// Escribir contenido en el documento.
// Cerrar el documento.
document.open();
document.write("<p>El único contenido.</p>");
document.close();
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
