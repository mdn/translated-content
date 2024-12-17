---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
---

{{ APIRef("CSSOM") }}

**`CSSStyleRule`** representa una sola regla de estilos CSS. Implementa la interfaz {{domxref("CSSRule")}} with a type value of `1` (`CSSRule.STYLE_RULE`).

## Sintaxis

La sintaxis es descrita usando el formato [WebIDL](https://dev.w3.org/2006/webapi/WebIDL/).

```
interface CSSStyleRule : CSSRule {
    attribute DOMString selectorText;
    readonly attribute CSSStyleDeclaration style;
};
```

## Propiedades

- {{domxref("CSSStyleRule.selectorText")}}
  - : Obtiene la representación textual del selector para esta regla, e.g. `"h1,h2"`.
- {{domxref("CSSStyleRule.style")}} {{readonlyinline}}
  - : Retorna el objeto {{domxref("CSSStyleDeclaration")}} para la regla. **Sólo lectura.**

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
