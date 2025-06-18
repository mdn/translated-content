---
title: <munderover>
slug: Web/MathML/Element/munderover
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
  - : Afin d'être utilisés avec les [feuilles de styles](/fr/docs/Web/CSS).
- href
  - : Un hyperlien pointant vers un URI donné.
- mathbackground
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/Web/CSS/color_value#mots-cl.c3.a9s).
- mathcolor
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/Web/CSS/color_value#mots-cl.c3.a9s).

## Exemples

Exemple de rendu: ![integral-0-infinity](munderover.png)

```html
<math displaystyle="true">
  <munderover>
    <mo>
      &#x222B;
      <!--INTEGRAL-->
    </mo>
    <mn> 0 </mn>
    <mi>
      &#x221E;
      <!--INFINITY-->
    </mi>
  </munderover>
</math>
```

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("mover") }} (Overscript)
