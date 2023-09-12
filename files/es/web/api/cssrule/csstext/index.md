---
title: "CSSRule: cssText property"
short-title: cssText
slug: Web/API/CSSRule/cssText
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM") }}

La propiedad **`cssText`** de la interfaz {{domxref("CSSRule")}} devuelve el texto real de una regla de estilo {{domxref("CSSStyleSheet")}}.

> **Nota:** No confunda esta propiedad con el estilo de elemento {{domxref("CSSStyleDeclaration.cssText")}}.

Tenga en cuenta que esta propiedad ya no se puede configurar directamente, ya que [ahora se especifica](https://www.w3.org/TR/cssom-1/#changes-from-5-december-2013) para ser _funcionalmente_ solo modificable, y sin ser notado. En otras palabras, intentar configurarlo _no hace absolutamente nada_ y ni siquiera emite una advertencia o un error.
Además, no tiene subpropiedades configurables. Por lo tanto, para modificarlo, use las propiedades {{domxref("CSSStyleRule.selectorText", ".selectorText")}} y {{domxref ("CSSStyleRule.style", ".style")}} (o sus subpropiedades). Véase [Uso de información de estilo dinámico](/es/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) para más detalles.

## Valor

Una cadena que contiene el texto real de la regla {{domxref("CSSStyleSheet")}}.

## Ejemplos

```css
body {
  background-color: darkblue;
}
```

```js
let stylesheet = document.styleSheets[0];
console.log(stylesheet.cssRules[0].cssText); // body { background-color: darkblue; }
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
