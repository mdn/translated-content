---
title: Stylesheet.parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
---

{{ ApiRef() }}

### Resumen

Devuelve la hoja de estilo que incluye a la que está en curso, si existe.

### Sintaxis

```
objRef = stylesheet.parentStyleSheet
```

### Ejemplo

```
// encuentra la hoja de estilo de alto nivel
if (stylesheet.parentStyleSheet) {
  sheet = stylesheet.parentStyleSheet;
}
else
{ sheet = stylesheet; }
```

### Notas

Esta propiedad devuelve NULL si la hoja de estilo actual es una hoja de estilo de alto nivel o si la inclusión de hojas de estilo no está implementada.

### Specification

[parentStyleSheet](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-parentStyleSheet)
