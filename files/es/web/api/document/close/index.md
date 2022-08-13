---
title: Document.close()
slug: Web/API/Document/close
translation_of: Web/API/Document/close
---
{{APIRef("DOM")}}

El método `document.close()` finaliza la escritura de un documento abierta con [document.open()](/en/DOM/document.open "en/DOM/document.open").

## Sintaxis

    document.close();

## Ejemplo

    // Abrir un documento.
    // Escribir contenido en el documento.
    // Cerrar el documento.
    document.open();
    document.write("<p>El único contenido.</p>");
    document.close();

## Especificación

[DOM Level 2 HTML: `close()` Method](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-98948567)
