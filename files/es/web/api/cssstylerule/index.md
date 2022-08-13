---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
tags:
  - API
translation_of: Web/API/CSSStyleRule
---
{{ APIRef("CSSOM") }}

**`CSSStyleRule`** representa una sola regla de estilos CSS. Implementa la interfaz {{domxref("CSSRule")}} with a type value of `1` (`CSSRule.STYLE_RULE`).

## Sintaxis

La sintaxis es descrita usando el formato [WebIDL](http://dev.w3.org/2006/webapi/WebIDL/).

    interface CSSStyleRule : CSSRule {
        attribute DOMString selectorText;
        readonly attribute CSSStyleDeclaration style;
    };

## Propiedades

- {{domxref("CSSStyleRule.selectorText")}}
  - : Obtiene la representación textual del selector para esta regla, e.g. `"h1,h2"`.
- {{domxref("CSSStyleRule.style")}} {{readonlyinline}}
  - : Retorna el objeto {{domxref("CSSStyleDeclaration")}} para la regla. **Sólo lectura.**

## Especificaciones

| Especificación                                                                               | Estatus                          | Comentario  |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{ SpecName('CSSOM', '#the-cssstylerule-interface', 'CSSStyleRule') }} | {{ Spec2('CSSOM') }}     | Sin cambios |
| {{ SpecName('DOM2 Style', 'css.html#CSS-CSSStyleRule', 'CSSRule') }} | {{ Spec2('DOM2 Style') }} |             |

## Compatibilidad entre Navegadores

Para obtener informacion de compatibilidad en los distintos navegadores, por favor consulta la tabla de compatibilidad de la interfaz asociada.

{{Compat("api.CSSStyleRule")}}
