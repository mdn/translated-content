---
title: Document.write()
slug: Web/API/Document/write
---

{{ ApiRef("DOM") }}

Escribe una cadena de texto dentro del hilo de un `document` abierto por [document.open()](/es/docs/Web/API/document.open).

> **Nota:** Dado que `document.write` escribe directo al hilo **(stream**) de un documento, la llamada a `document.write` en un documento ya cargado automáticamente ejecuta `document.open`, [lo cual limpiará todo el contenido del documento en cuestión](/es/docs/Web/API/document.open#Notes).

## Sintaxis

```js
document.write(texto);
```

`texto` es una cadena de texto que contiene el texto a ser impreso en el documento.

### Example

```html
<html>
  <head>
    <title>Ejemplo de write</title>

    <script>
      function nuevoContenido() {
        alert("carga el contenido nuevo");
        document.open();
        document.write(
          "<h1>Quita el contenido viejo - Agrega el contenido nuevo!</h1>",
        );
        document.close();
      }
    </script>
  </head>

  <body onload="nuevoContenido();">
    <p>Algo de contenido original del documento</p>
  </body>
</html>
```

## Notas

Escribir a un documento que ya tiene contenido cargado previamente sin llamar a [`document.open()`](/es/docs/Web/API/document.open), automáticamente hará una llamada a document.open(). Después de haber finalizado la escritura del documento, es recomendable llamar a [`document.close()`](/es/docs/Web/API/document.close), para informar al navegador que la carga de la página ya ha terminado. El texto que escribas allí es convertido a la estructura tipificada de HTML dentro del modelo estructural del documento. En el ejemplo de más arriba, el elemento h1 se convierte en un nodo dentro del documento.

Si la llamada a document.write() se ejecuta dentro de una etiqueta `<script>` incluído en el HTML, entonces la llamada a document.open() nunca ocurrirá. Por ejemplo:

```html
<script>
  document.write("<h1>Título Principal</h1>");
</script>
```

> **Nota:** `document.write` y `document.writeln` [no funcionan dentro de un documento XHTML](/es/docs/Archive/Web/Writing_JavaScript_for_HTML) (obtendrás un mensaje de error que dice "Operación no soportada" ("Operation is not supported") \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] en la consola). Esto sucede cuando abrimos un archivo local de extensión .xhtml o para cualquier document servido con un [MIME del tipo](/es/docs/Glossary/MIME_type) `application/xhtml+xml`. Hay más información disponible en [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

> **Nota:** `document.write` en scripts de modo [diferido](/es/docs/Web/HTML/Element/script#attr-defer) o [asyncrónico](/es/docs/Web/HTML/Element/script#attr-async) serán ignorados, y recibirás un mensaje de error en la consola del tipo "Una llamada a document.write() desde un script cargado asincrónicamente fue ignorado" ("A call to `document.write()` from an asynchronously-loaded external script was ignored").

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## También puedes ver

- {{ domxref("element.innerHTML") }}
- {{ domxref("document.createElement()") }}
