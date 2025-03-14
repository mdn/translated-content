---
title: document.characterSet
slug: Web/API/Document/characterSet
---

{{ ApiRef("DOM") }}

### Resumen

Devuelve la codificación de caracteres (conjunto de caracteres) usado en el documento.

### Sintaxis

```js
string = document.characterSet;
```

### Ejemplo

```html
<button onclick="alert(document.characterSet);">
  Mostrar conjunto de caracteres
</button>

<!-- devuelve el conjunto de caracteres del documento, por ejemplo "ISO-8859-1 o UTF-8" -->
```

### Notas

La codificación de caracteres es el conjunto de caracteres usados para interpretar el documento, el cual puede ser diferente a la codificación especificada por la página (el usuario puede omitir la codificación).

Para una lista completa de juegos/conjuntos de caracteres, visite: <http://www.iana.org/assignments/character-sets>.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
