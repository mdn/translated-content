---
title: menclose
slug: Web/MathML/Element/menclose
tags:
  - MathML
  - MathML:Element
  - MathML:Référence
translation_of: Web/MathML/Element/menclose
---
L'élément MathML `<menclose>` permet d'afficher son contenu groupé au sein d'une même notation, définie par l'attribut `notation`.

## Attributs

- class, id, style
  - : Afin d'être utilisés avec les [feuilles de styles](/fr/docs/CSS).
- href
  - : Un hyperlien pointant vers un URI donné.
- mathbackground
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- mathcolor
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- notation

  - : Une liste de notations à appliquer aux éléments fils, séparées par des blancs. Les symboles sont dessinés indépendamment et peuvent donc parfois se superposer. Les valeurs possibles sont :

    | Valeur                        | Affichage                                     | Affichage dans votre navigateur                                                                                                                | Description                                                                                                                  |
    | ----------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (valeur par défaut) | ![longdiv](default.png)                       | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Symbole de division longue                                                                                                   |
    | `actuarial`                   | ![actuarial](actuarial.png)                   | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [Symbole actuaire](http://en.wikipedia.org/wiki/Actuarial_notation)                                                          |
    | `radical`                     | ![radical](radical.png)                       | <math><menclose notation="radical"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Symbole de la racine carrée                                                                                                  |
    | `box`                         | ![box](box.png)                               | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Boîte                                                                                                                        |
    | `roundedbox`                  | ![roundedbox](roundedbox.png)                 | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | Boîte arrondie                                                                                                               |
    | `circle`                      | ![circle](circle.png)                         | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Cercle                                                                                                                       |
    | `left`                        | ![left](left.png)                             | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | Ligne à la gauche du contenu                                                                                                 |
    | `right`                       | ![right](right.png)                           | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | Ligne à la droite du contenu                                                                                                 |
    | `top`                         | ![top](top.png)                               | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Ligne au-dessus du contenu                                                                                                   |
    | `bottom`                      | ![bottom](bottom.png)                         | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Ligne en-dessous du contenu                                                                                                  |
    | `updiagonalstrike`            | ![updiagonalstrike](updiagonalstrike.png)     | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Ligne de rayure allant du coin bas-gauche au coin haut-droit                                                                 |
    | `downdiagonalstrike`          | ![downdiagonalstrike](downdiagonalstrike.png) | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math> | Ligne de rayure allant du coin haut-gauche au coin bas-droit                                                                 |
    | `verticalstrike`              | ![verticalstrike](verticalstrike.png)         | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | Ligne de rayure verticale à travers le contenu                                                                               |
    | `horizontalstrike`            | ![horizontalstrike](horizontalstrike.png)     | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Ligne de rayure horizontale à travers le contenu                                                                             |
    | `madruwb`                     | ![madruwb](madruwb.png)                       | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Symbole arabe pour la factorielle](http://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`             | ![](updiagonalarrow.png)                      | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | flèche diagonale                                                                                                             |

## Exemples

```html
<math>

  <menclose notation="circle box">
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
  </menclose>

</math>
```

## Spécifications

| Spécification                                                                                | Statut                       | Commentaire         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.menclose', 'menclose') }} | {{ Spec2('MathML3') }} | Définition actuelle |
| {{ SpecName('MathML2', 'chapter3.html#presm.menclose', 'menclose') }} | {{ Spec2('MathML2') }} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("mathml.elements.menclose")}}
