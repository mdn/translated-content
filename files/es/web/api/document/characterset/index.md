---
title: document.characterSet
slug: Web/API/Document/characterSet
translation_of: Web/API/Document/characterSet
---
{{ ApiRef("DOM") }}

### Resumen

Devuelve la codificación de caracteres (conjunto de caracteres) usado en el documento.

### Sintaxis

    string = document.characterSet

### Ejemplo

    <button onclick="alert(document.characterSet);"
    >Mostrar conjunto de caracteres</button>
    // devuelve el conjunto de caracteres del documento, por ejemplo "ISO-8859-1 o UTF-8"

### Notas

La codificación de caracteres es el conjunto de caracteres usados para interpretar el documento, el cual puede ser diferente a la codificación especificada por la página (el usuario puede omitir la codificación).

Para una lista completa de juegos/conjuntos de caracteres, visite: <http://www.iana.org/assignments/character-sets>.

### Especificación

DOM Nivel 0. No es parte de ningún estándar.
