---
title: document.URL
slug: Web/API/Document/URL
tags:
  - API
  - Documento
  - HTML DOM
  - Propiedad
  - Referencia
translation_of: Web/API/Document/URL
---
{{APIRef("DOM")}}

La propiedad de sólo lectura **`URL`** de la interfaz {{domxref("Document")}} devuelve la ubicación del documento como una cadena de texto.

## Sintaxis

```js
var string = document.URL
```

## Ejemplo

### JavaScript

```js
document.getElementById("url").textContent = document.URL;
```

### HTML

```html
<p id="urlText">
  URL:<br/>
  <span id="url">La URL va aquí</span>
</p>
```

### Resultado

{{EmbedLiveSample("Example", "100%", 100)}}

## Especificaciones

| Especificación                                                                                   | Estado                           | Comentario                                                                                                       |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName("DOM WHATWG", "#dom-document-url", "Document.URL")}}             | {{Spec2("DOM WHATWG")}} | Define que la propiedad es una {{domxref("USVString")}} en lugar de un {{domxref("DOMString")}}. |
| {{SpecName("DOM1", "level-one-html.html#attribute-URL", "Document.URL")}} | {{Spec2("DOM1")}}         | Definición inicial                                                                                               |

## Compatibilidad con navegadores

{{Compat("api.Document.URL")}}

## Ver también

- {{domxref("HTMLDocument")}}
