---
title: objeto Stylesheet
slug: Web/API/StyleSheet
---

{{ ApiRef("CSSOM") }}

Esta sección describe el objeto [CSSStyleSheet](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet), que representa una única hoja de estilos CSS.

Una hoja de estilos CSS consiste en reglas CSS que pueden, cada una de ellas, ser manipuladas a través del objeto [CSSRule](/Es/DOM/CssRule). El objeto de la hoja de estilo en sí mismo, te permite examinar y modificar la hoja de estilos, incluyendo su lista de reglas.

Puedes tomar la lista de estilos de un documento determinado mediante el uso de la propiedad [document.styleSheets](/es/DOM/document.styleSheets).

### Propiedades

- [stylesheet.cssRules](/Es/DOM/Stylesheet.cssRules)
  - : Devuelve todas las reglas CSS que hay en la hoja de estilo, en forma de arreglo.
- [stylesheet.disabled](/es/DOM/stylesheet.disabled)
  - : Esta propiedad indica si se ha aplicado o no, la hoja de estilo actual.
- [stylesheet.href](/es/DOM/stylesheet.href)
  - : Devuelve la localización de la hoja de estilo.
- [stylesheet.media](/es/DOM/stylesheet.media)
  - : Especifica el medio al que se tiene intención de aplicar la hoja de estilo.
- [stylesheet.ownerNode](/es/DOM/stylesheet.ownerNode)
  - : el nodo que asocia la hoja de estilo con el documento.
- [stylesheet.ownerRule](/es/DOM/stylesheet.ownerRule)
  - : Si la hoja de estilo tiene una regla marcada con @import, la propiedad ownerRule contendrá la CSSImportRule.
- [stylesheet.parentStyleSheet](/es/DOM/stylesheet.parentStyleSheet)
  - : Devuelve la hoja de estilo que que está incluida en esta, si existe.
- [stylesheet.title](/es/DOM/stylesheet.title)
  - : Devuelve el título de la hoja de estilo actual.
- [stylesheet.type](/es/DOM/stylesheet.type)
  - : Especifica el lenguaje de la hoja de estilo.

### Métodos

- [stylesheet.deleteRule](/es/DOM/stylesheet.deleteRule)
  - : Elimina una regla de la hoja de estilo.
- [stylesheet.insertRule](/es/DOM/stylesheet.insertRule)
  - : Agrega una nueva regla de estilo a la hoja de estilo actualmente usada.

### Especificación

[DOM Level 2 Style Sheets: StyleSheet](http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet)

[DOM Level 2 CSS: CSSStyleSheet](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet)
