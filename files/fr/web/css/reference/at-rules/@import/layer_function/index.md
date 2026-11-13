---
title: Fonction CSS `layer()`
short-title: layer()
slug: Web/CSS/Reference/At-rules/@import/layer_function
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`layer()`** est utilisée avec la [règle](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@import")}} pour placer la ressource importée dans une [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) nommée distincte.

## Syntaxe

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

La `framework.themes.dark` est la couche dans laquelle le fichier CSS serait importé.

## Syntaxe formelle

{{CSSSyntaxRaw(`layer() = layer( <layer-name> )`)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La règle {{CSSxRef("@import")}}
- [Les fonctions de règle @ CSS](/fr/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- Le module [cascade et héritage CSS](/fr/docs/Web/CSS/Guides/Cascade)
