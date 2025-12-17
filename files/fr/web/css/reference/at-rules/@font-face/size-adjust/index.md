---
title: size-adjust
slug: Web/CSS/Reference/At-rules/@font-face/size-adjust
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`size-adjust`** CSS définit un multiplicateur destiné aux contours des glyphes et aux mesures associées à la police. Cela facilite l'harmonisation de l'apparence des polices lorsqu'elles sont rendues avec la même taille.

Le descripteur `size-adjust` se comporte d'une manière similaire à la propriété {{CSSxRef("font-size-adjust")}}. Il calcule l'ajustement à effectuer par police en faisant la correspondance avec leurs hauteurs respectives.

## Syntaxe

```css
size-adjust: 90%;
```

### Valeurs

- `<percentage>`
  - : Une valeur exprimée en pourcentage (type {{CSSxRef("&lt;percentage&gt;")}}), avec une valeur initiale de 100%.

Toutes les mesures associées à la police sont mises à l'échelle en utilisant le pourcentage fourni. Cela comprend les glyphes, les tables de hauteur de ligne et surcharge les valeurs fournies par les descripteurs {{CSSxRef("@font-face")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Surcharge de la mesure d'une police de recours

La propriété `size-adjust` peut aider à la surcharge des mesures d'une police de secours pour qu'elles correspondent mieux à celles de la police principale.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  size-adjust: 90%;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le descripteur {{CSSxRef("@font-face/font-display", "font-display")}}
- Le descripteur {{CSSxRef("@font-face/font-family", "font-family")}}
- Le descripteur {{CSSxRef("@font-face/font-weight", "font-weight")}}
- Le descripteur {{CSSxRef("@font-face/font-style", "font-style")}}
- Le descripteur {{CSSxRef("@font-face/font-stretch", "font-stretch")}}
- Le descripteur {{CSSxRef("@font-face/font-feature-settings", "font-feature-settings")}}
- Le descripteur {{CSSxRef("@font-face/font-variation-settings", "font-variation-settings")}}
- Le descripteur {{CSSxRef("@font-face/src", "src")}}
- Le descripteur {{CSSxRef("@font-face/unicode-range", "unicode-range")}}
- La propriété {{CSSxRef('font-size-adjust')}}
