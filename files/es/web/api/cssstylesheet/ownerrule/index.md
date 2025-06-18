---
title: Stylesheet.ownerRule
slug: Web/API/CSSStyleSheet/ownerRule
---

{{ ApiRef() }}

### Resumen

Si esta hoja de estilos viene de una regla `@import`, la propiedad **ownerRule** contendrá la CSSImportRule.

### Sintaxis

```
rule = stylesheet.ownerRule
```

### Parámetros

- `rule` es una cadena que contiene la regla de importación en el documento HTML o XML.

### Notas

Ten en cuenta que si el valor de la propiedad ownerNode en el elemento [STYLE](/es/docs/Web/API/HTMLElement/style) actual es NULL, el valor **ownerRule** devolverá !!TODO!! y viceversa.

### Specification

[ownerRule](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/css.html#CSS-CSSStyleSheet-ownerRule)
