---
title: <msub>
slug: Web/MathML/Element/msub
translation_of: Web/MathML/Element/msub
---
{{MathMLRef}}

L'élément MathML `<msub>` est utilisé pour attaché un indice à une expression. On utilise la syntaxe suivante: `<msub> base indice </msub>`.

## Attributes

- class, id, style
  - : Fournit pour être utilisé avec [stylesheets](/fr/docs/CSS).
- href
  - : Utilisé pour ajouter un hyperlien vers une URI.
- mathbackground
  - : La couleur d'arrière plan. Vous pouvez utiliser `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/Web/CSS/Type_color#Les_mots-cl%C3%A9s).
- mathcolor
  - : La couleur du texte. Vous pouvez utiliser `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/Web/CSS/Type_color#Les_mots-cl%C3%A9s).
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

| Specification                                                                    | Status                       | Comment                 |
| -------------------------------------------------------------------------------- | ---------------------------- | ----------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.msub', 'msub') }} | {{ Spec2('MathML3') }} | Spécification actuelle  |
| {{ SpecName('MathML2', 'chapter3.html#presm.msub', 'msub') }} | {{ Spec2('MathML2') }} | Spéficication initiale. |

## Compatibilité des navigateurs

{{Compat("mathml.elements.msub")}}

## Notes spécifiques à Gecko

- À partir de Gecko 26.0 {{geckoRelease("26")}} il ne sera bientôt plus possible d'utiliser `<none/>` comme un élément enfant. The rendering has been made more consistent with equivalent configurations of {{MathMLElement("msup")}} and {{MathMLElement("mmultiscripts")}} and a bug with an incorrect application of the `superscriptshift` attribute has been fixed (see {{bug("827713")}} for details).

## Voir aussi

- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
