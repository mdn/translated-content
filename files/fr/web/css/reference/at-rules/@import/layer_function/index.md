---
title: layer()
slug: Web/CSS/Reference/At-rules/@import/layer_function
original_slug: Web/CSS/@import/layer_function
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`layer()`** est utilisée avec la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [`@import`](/fr/docs/Web/CSS/Reference/At-rules/@import) pour placer la ressource importée dans une [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) nommée distincte.

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

- {{CSSxRef("@import")}}
- Le module [cascade et héritage CSS](/fr/docs/Web/CSS/CSS_cascade)
