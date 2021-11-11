---
title: <munderover>
slug: Web/MathML/Element/munderover
tags:
  - MathML
  - MathML:Element
  - Référence MathML
translation_of: Web/MathML/Element/munderover
---
{{MathMLRef()}}

L'élément MathML `<munderover>` est utilisé pour attacher des accents et limites à la fois en-dessous et au-dessus d'une expression.
La syntaxe est la suivante: `<munder> base script-en-dessous script-au-dessus </munder>`

## Attributs

- accent
  - : Lorsqu'il vaut `true`, le script au dessus est un _accent_, qui est affiché plus près de la base.
    Lorsqu'il vaut `false` (valeur par défaut), le script au dessus est une _limite_ au dessus de la base.
- accentunder
  - : Lorsqu'il vaut `true`, le script en dessous est un _accent_, qui est affiché plus près de la base.
    Lorsqu'il vaut `false` (valeur par défaut), le script en dessous est une _limite_ en dessous de la base.
- align {{deprecated_inline}}
  - : L'alignment des scripts en dessous et au dessus. Les valeurs possibles sont: `left`, `center`, et `right`.
- class, id, style
  - : Afin d'être utilisés avec les [feuilles de styles](/fr/docs/CSS).
- href
  - : Un hyperlien pointant vers un URI donné.
- mathbackground
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- mathcolor
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).

## Exemples

Exemple de rendu: ![integral-0-infinity](munderover.png)

```html
<math displaystyle="true">

  <munderover >
    <mo> &#x222B; <!--INTEGRAL--> </mo>
    <mn> 0 </mn>
    <mi> &#x221E; <!--INFINITY--> </mi>
  </munderover>

</math>
```

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Specification                                                                                    | Status                       | Comment               |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.munderover', 'munderover') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.munderover', 'munderover') }} | {{ Spec2('MathML2') }} | Initial specification |

## Compatibilité des navigateurs

{{Compat("mathml.elements.munderover")}}

## Voir aussi

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("mover") }} (Overscript)
