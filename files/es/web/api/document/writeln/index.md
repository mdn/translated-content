---
title: Document.writeln()
slug: Web/API/Document/writeln
---

{{ ApiRef("DOM") }}

Escribe una cadena de texto en el documento, seguida de una nueva línea.

> [!NOTE]
> Dado que `document.writeln` (al igual que `document.write)` escribe directo al hilo (`stream`) de un documento, la llamada a `document.write` en un documento ya cargado automáticamente ejecuta `document.open`, [lo cual limpiará todo el contenido del documento en cuestión](/es/docs/Web/API/Document/open#notes).

## Sintaxis

```js
document.writeln(línea);
```

### Parámetros

- `línea` es la cadena conteniendo una línea de texto.

## Ejemplo

```js
document.writeln("<p>¡Hola mundo!</p>");
```

## Notas

**document.writeln** actúa igual que [document.write](/es/docs/Web/API/Document/write) exepto que agrega un carácter de nueva línea (`\n`) al final del texto a escribir.

> [!NOTE]
> `document.write` y `document.writeln` [no funcionan dentro de un documento XHTML](/es/docs/Archive/Web/Writing_JavaScript_for_HTML) (obtendrás un mensaje de error que dice "Operación no soportada" ("Operation is not supported") \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] en la consola). Esto sucede cuando abrimos un archivo local de extensión .xhtml o para cualquier document servido con un [MIME del tipo](/es/docs/Glossary/MIME_type) `application/xhtml+xml`. Hay más información disponible en [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

> [!NOTE]
> `document.writeln` y `document.write` en scripts de modo [diferido](/es/docs/Web/HTML/Reference/Elements/script#attr-defer) o [asyncrónico](/es/docs/Web/HTML/Reference/Elements/script#attr-async) serán ignorados, y recibirás un mensaje de error en la consola del tipo "Una llamada a document.write() desde un script cargado asincrónicamente fue ignorado" ("A call to `document.write()` from an asynchronously-loaded external script was ignored").

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
