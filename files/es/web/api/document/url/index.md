---
title: document.URL
slug: Web/API/Document/URL
---

{{APIRef("DOM")}}

La propiedad de sólo lectura **`URL`** de la interfaz {{domxref("Document")}} devuelve la ubicación del documento como una cadena de texto.

## Sintaxis

```js
var string = document.URL;
```

## Ejemplo

### JavaScript

```js
document.getElementById("url").textContent = document.URL;
```

### HTML

```html
<p id="urlText">
  URL:<br />
  <span id="url">La URL va aquí</span>
</p>
```

### Resultado

{{EmbedLiveSample("Example", "100%", 100)}}

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver también

- {{domxref("HTMLDocument")}}
