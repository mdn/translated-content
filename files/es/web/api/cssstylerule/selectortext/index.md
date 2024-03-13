---
title: CssRule.selectorText
slug: Web/API/CSSStyleRule/selectorText
---

{{ ApiRef() }}

### Resumen

**selectorText** recoge/establece la representación en forma de texto, del selector para el grupo de reglas.

### Sintaxis

```
string = cssRule.selectorText
cssRule.selectorText = string
```

### Ejemplo

```
 // for cssrule: body { background-color: darkblue; }
 cssrule = document.styleSheets[1]
 !!TODO!!
 selector = cssrule.selectorText;
 // selector is now "body"
```

### Notas

La implementación puede haber eliminado espacios en blanco no significativos, en el momento de comprobar el selector.

### Especificación

DOM Level 2 Style - cssRule
