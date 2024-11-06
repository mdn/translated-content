---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
---

{{ APIRef("CSSOM") }}

CSSStyleRule représente une règle de style CSS unique. Il implémente l'interface {{domxref ("CSSRule")}} avec une valeur de type 1 (CSSRule STYLE_RULE).

## Syntaxe

La syntaxe est décrite à l'aide du format WebIDL.

```
interface CSSStyleRule : CSSRule {
    attribute DOMString selectorText;
    readonly attribute CSSStyleDeclaration style;
};
```

## Properties

- {{domxref("CSSStyleRule.selectorText")}}
  - : Obtient la représentation textuelle du sélecteur pour cette règle, par exemple "H1, H2".
- {{domxref("CSSStyleRule.style")}}
  - : Retourne l'objet {{domxref("CSSStyleDeclaration")}} pour cette règle.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
