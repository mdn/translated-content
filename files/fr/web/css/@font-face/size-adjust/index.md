---
title: size-adjust
slug: Web/CSS/@font-face/size-adjust
translation_of: Web/CSS/@font-face/size-adjust
browser-compat: css.at-rules.font-face.size-adjust
---
{{CSSRef}}{{SeeCompatTable}}

Le descripteur CSS **`size-adjust`** CSS définit un multiplicateur destiné aux contours des glyphes et aux mesures associées à la police. Cela facilite l'harmonisation de l'apparence des polices lorsqu'elles sont rendues avec la même taille.

Le descripteur `size-adjust` se comporte d'une manière similaire à la propriété {{cssxref("font-size-adjust")}}. Il calcule l'ajustement à effectuer par police en faisant la correspondance avec leurs hauteurs respectives.

## Syntaxe

```css
size-adjust: 90%;
```

### Valeurs

- `<percentage>`
  - : Une valeur exprimée en pourcentage (type {{cssxref("&lt;percentage&gt;")}}), avec une valeur initiale de 100%.

Toutes les mesures associées à la police sont mises à l'échelle en utilisant le pourcentage fourni. Cela comprend les glyphes, les tables de hauteur de ligne et surcharge les valeurs fournies par les descripteurs {{cssxref("@font-face")}}.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

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

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
