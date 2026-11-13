---
title: "CSSStyleSheet: propiedad ownerRule"
short-title: ownerRule
slug: Web/API/CSSStyleSheet/ownerRule
l10n:
  sourceCommit: bc464c855fc2a3d967f1684b72e78b39c6d1ab50
---

{{APIRef("CSSOM")}}

La propiedad de solo lectura **`ownerRule`** de {{domxref("CSSStyleSheet")}} devuelve la {{domxref("CSSImportRule")}} correspondiente a la regla @ {{cssxref("@import")}} que importó la hoja de estilos en el documento. Si la hoja de estilos no se importó al documento mediante `@import`, el valor devuelto es `null`.

## Valor

Una {{domxref("CSSImportRule")}} correspondiente a la regla {{cssxref("@import")}} que importó la hoja de estilos en el documento. Si la hoja de estilos no se importó al documento mediante `@import`, el valor devuelto es `null`.

## Ejemplos

Este fragmento de código busca las reglas que no se importaron al documento mediante una regla @ `@import`.

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  if (!rule.ownerRule) {
    /* la regla no está importada */
  }
}
```

Este fragmento obtiene una referencia a la hoja de estilos asociada al `@import` y la procesa de alguna manera:

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  if (rule.ownerRule) {
    checkStylesheet(rule.ownerRule.styleSheet);
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Modelo de objetos CSS](/es/docs/Web/API/CSS_Object_Model)
- [Uso de información de estilo dinámico](/es/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
