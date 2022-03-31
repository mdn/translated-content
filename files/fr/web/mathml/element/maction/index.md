---
title: maction
slug: Web/MathML/Element/maction
tags:
  - MathML
  - MathML:Element
  - MathML:Référence
translation_of: Web/MathML/Element/maction
---
L'élément MathML `<maction>` permet de lier des actions à des (sous-)expressions.
L'action est définie par l'attribut `actiontype` qui peut prendre plusieurs valeurs. Pour définir quels éléments fils sont affectés par l'action, il est possible d'utiliser l'attribut `selection`.

## Attributs

- actiontype

  - : L'action qui se produit pour cet élément. Les valeurs possibles sont :

    - `statusline` : S'il y a un clic sur l'_expression_ ou que le lecteur passe la souris sur celle-ci, le _message_ est envoyé au statut du navigateur (_status line_). La syntaxe est la suivante : `<maction actiontype="statusline"> expression message </maction>.`
    - `toggle` : Quand il y a un clic sur la sous-expression, la mise en forme des sous-expressions sélectionnées change. Ainsi chaque clic augmente la valeur de `selection`.
      La syntaxe est la suivante : `<maction actiontype="toggle" selection="entier-positif" > expression1 expression2 expressionN </maction>`.
    - `tooltip` : Lorsque la souris passe au-dessus de l'_expression_, une info-bulle est affichée à proximité de l'expression.
      La syntaxe est la suivante : `<maction actiontype="tooltip"> expression message </maction>.`

- class, id, style
  - : Afin d'être utilisés avec les [feuilles de styles](/fr/docs/CSS).
- href
  - : Un hyperlien pointant vers un URI donné.
- mathbackground
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- mathcolor
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- selection
  - : L'élément fils auquel s'applique l'action. La valeur par défaut est `1`, ce qui correspond au premier élément fils.

## Exemples

```html
<math>

<maction actiontype="toggle">

  <mfrac>
    <mn>6</mn>
    <mn>8</mn>
  </mfrac>

  <mfrac>
    <mrow>
      <mn>3</mn>
      <mo>&sdot;</mo>
      <mn>2</mn>
    </mrow>
    <mrow>
      <mn>4</mn>
      <mo>&sdot;</mo>
      <mn>2</mn>
    </mrow>
  </mfrac>

  <mfrac>
    <mn>3</mn>
    <mn>4</mn>
  </mfrac>

</maction>

</math>
```

## Spécifications

| Spécification                                                                            | Statut                       | Commentaire         |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.maction', 'maction') }} | {{ Spec2('MathML3') }} | Définition actuelle |
| {{ SpecName('MathML2', 'chapter3.html#presm.maction', 'maction') }} | {{ Spec2('MathML2') }} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("mathml.elements.maction")}}

### Notes relatives à Gecko

- Avant Gecko 9.0 {{ geckoRelease("9.0") }} la valeur `restyle` (non-standard) était supportée pour l'attribut `actiontype`. Cette valeur a été retirée.
- Avant Gecko 14.0 {{ geckoRelease("14.0") }} le type d'action `statusline` utilisait une syntaxe non-standard (voir ci-dessous). Cela a été résolu afin de respecter la spécification MathML.

      <maction actiontype="statusline#(message)">
      (expression)
      </maction>

- Gecko 15.0 {{geckoRelease("15.0")}} ne prend en compte l'attribut `selection` seulement s'il est utilisé avec le type d'action `toggle`.
- À partir de Gecko 16.0 {{geckoRelease("16.0")}} l'attribut `selection` est également pris en compte lorsqu'un `actiontype` inconnu est spécifié. Si un `actiontype` n'est pas spécifié (il est vide) ou que l'attribut `selection` est invalide, cela entraînera une erreur de balisage MathML (« invalid-markup »).
