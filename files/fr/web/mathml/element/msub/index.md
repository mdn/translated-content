---
title: <msub>
slug: Web/MathML/Element/msub
---

{{MathMLRef}}

L'élément MathML `<msub>` est utilisé pour attaché un indice à une expression. On utilise la syntaxe suivante: `<msub> base indice </msub>`.

## Attributes

- class, id, style
  - : Fournit pour être utilisé avec [stylesheets](/fr/docs/CSS).
- href
  - : Utilisé pour ajouter un hyperlien vers une URI.
- mathbackground
  - : La couleur d'arrière plan. Vous pouvez utiliser `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/Web/CSS/Type_color#Les_mots-clés).
- mathcolor
  - : La couleur du texte. Vous pouvez utiliser `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/Web/CSS/Type_color#Les_mots-clés).
- subscriptshift
  - : The minimum space by which to shift the subscript below the baseline of the expression, as a [length value](/fr/docs/MathML/Attributes/Values#Lengths).

## Example

Image fixe: ![x1](msub.png)

Rendu dans votre navigateur: <math><msub><mi>X</mi> <mn>1</mn></msub></math>

```html
<math>
  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>
</math>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
