---
title: Document.open()
slug: Web/API/Document/open
---

{{APIRef("DOM")}}

El método **`Document.open()`** abre un documento para escritura ([writing](/es/docs/Web/API/Document/write))

Esto viene con algunos efectos secundarios. Por ejemplo:

- Todos las atenciones de eventos actualmente registrados en el documento, los nodos dentro del documento o la ventana del documento son eliminados.
- Todos los nodos existentes se eliminan del documento.

## Sintaxis

```js
document.open();
```

### Parametros

Ninguno.

### Valor devuelto

Una instancia del objeto Document (`Document)`.

## Ejemplos

El código simple a continuación abre el documento y reemplaza su contenido con un número de diferentes fragmentos HTML antes de cerrarlo nuevamente.

```js
document.open();
document.write("<p>Hola mundo!</p>");
document.write("<p>Soy un pez</p>");
document.write("<p>El numero es 42</p>");
document.close();
```

## Notas

> **Nota:** Traducción pendiente para el texto que sigue

An automatic `document.open()` call happens when {{domxref("document.write()")}} is called after the page has loaded.

For years Firefox and Internet Explorer additionally erased all JavaScript variables, etc., in addition to removing all nodes. This is no longer the case.document non-spec'ed parameters to document.open

### Gecko-specific notes

Starting with Gecko 1.9, this method is subject to the same same-origin policy as other properties, and does not work if doing so would change the document's origin.

Starting with Gecko 1.9.2, `document.open()` uses the [principal](/docs/Security_check_basics) of the document whose URI it uses, instead of fetching the principal off the stack. As a result, you can no longer call {{domxref("document.write()")}} into an untrusted document from chrome, even using [`wrappedJSObject`](/en/wrappedJSObject). See [Security check basics](/en/Security_check_basics) for more about principals.

## Three-argument document.open()

There is a lesser-known and little-used three-argument version of `document.open()` , which is an alias of {{domxref("Window.open()")}} (see its page for full details).

This call, for example opens github.com in a new window, with its opener set to `null`:

```js
document.open("https://www.github.com", "", "noopener=true");
```

## Two-argument document.open()

Browsers used to support a two-argument `document.open()`, with the following signature:

```js
document.open(type, replace);
```

Where `type` specified the MIME type of the data you are writing (e.g. `text/html`) and replace if set (i.e. a string of `"replace"`) specified that the history entry for the new document would replace the current history entry of the document being written to.

This form is now obsolete; it won't throw an error, but instead just forwards to `document.open()` (i.e. is the equivalent of just running it with no arguments). The history-replacement behavior now always happens.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## See also

- {{domxref("Document")}}
- {{domxref("Window.open()")}}
