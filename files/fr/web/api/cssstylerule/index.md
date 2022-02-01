---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
translation_of: Web/API/CSSStyleRule
---
{{ APIRef("CSSOM") }}

CSSStyleRule représente une règle de style CSS unique. Il implémente l'interface {{domxref ("CSSRule")}} avec une valeur de type 1 (CSSRule STYLE_RULE).

## Syntax

La syntaxe est décrite à l'aide du format WebIDL.

    interface CSSStyleRule : CSSRule {
        attribute DOMString selectorText;
        readonly attribute CSSStyleDeclaration style;
    };

## Properties

- {{domxref("CSSStyleRule.selectorText")}}
  - : Obtient la représentation textuelle du sélecteur pour cette règle, par exemple "H1, H2".
- {{domxref("CSSStyleRule.style")}}
  - : Retourne l'objet {{domxref("CSSStyleDeclaration")}} pour cette règle.

## Specifications

| Specification                                                                                | Status                           | Comment           |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ----------------- |
| {{ SpecName('CSSOM', '#the-cssstylerule-interface', 'CSSStyleRule') }} | {{ Spec2('CSSOM') }}     | pas de changement |
| {{ SpecName('DOM2 Style', 'css.html#CSS-CSSStyleRule', 'CSSRule') }} | {{ Spec2('DOM2 Style') }} |                   |

## Compatibilité des navigateurs

{{Compat("api.CSSStyleRule")}}
