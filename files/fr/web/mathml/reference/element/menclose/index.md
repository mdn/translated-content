---
title: <menclose>
slug: Web/MathML/Reference/Element/menclose
l10n:
  sourceCommit: d65519931193d5324b1751ea291824f465f4643f
---

{{Non-standard_Header}}

L'élément [MathML](/fr/docs/Web/MathML) **`<menclose>`** affiche son contenu à l'intérieur d'une notation englobante définie par l'attribut `notation`.

## Attributs

- `notation` {{Non-standard_Inline}}
  - : Une liste de notations, séparées par des espaces blancs, à appliquer aux éléments enfants. Les symboles sont dessinés indépendamment et peuvent donc parfois se superposer. Les valeurs possibles sont&nbsp;:

    | Valeur                 | Exemple d'affichage                                                   | Affichage dans votre navigateur                                                                                                              | Description                                                                                                                            |
    | ---------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (par défaut) | ![Exemple d'affichage de longdiv.](longdiv.svg)                       | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | symbole de division longue                                                                                                             |
    | `actuarial`            | ![Exemple d'affichage d'actuarial.](actuarial.svg)                    | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [symbole actuariel <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Actuarial_notation)                                               |
    | `box`                  | ![Exemple d'affichage de box.](box.svg)                               | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | boîte                                                                                                                                  |
    | `roundedbox`           | ![Exemple d'affichage de roundedbox.](roundedbox.svg)                 | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | boîte arrondie                                                                                                                         |
    | `circle`               | ![Exemple d'affichage de circle.](circle.svg)                         | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | cercle                                                                                                                                 |
    | `left`                 | ![Exemple d'affichage de left.](left.svg)                             | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | ligne à gauche du contenu                                                                                                              |
    | `right`                | ![Exemple d'affichage de right.](right.svg)                           | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | ligne à droite du contenu                                                                                                              |
    | `top`                  | ![Exemple d'affichage de top.](top.svg)                               | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | ligne au-dessus du contenu                                                                                                             |
    | `bottom`               | ![Exemple d'affichage de bottom.](bottom.svg)                         | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | ligne sous le contenu                                                                                                                  |
    | `updiagonalstrike`     | ![Exemple d'affichage d'updiagonalstrike.](updiagonalstrike.svg)      | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | ligne de biffage traversant le contenu du coin inférieur gauche au coin supérieur droit                                                |
    | `downdiagonalstrike`   | ![Exemple d'affichage de downdiagonalstrike.](downdiagonalstrike.svg) | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | ligne de biffage traversant le contenu du coin supérieur gauche au coin inférieur droit                                                |
    | `verticalstrike`       | ![Exemple d'affichage de verticalstrike.](verticalstrike.svg)         | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | ligne de biffage verticale traversant le contenu                                                                                       |
    | `horizontalstrike`     | ![Exemple d'affichage de horizontalstrike.](horizontalstrike.svg)     | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | ligne de biffage horizontale traversant le contenu                                                                                     |
    | `madruwb`              | ![Exemple d'affichage de madruwb.](madruwb.svg)                       | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [symbole factoriel arabe <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`      | ![Exemple d'affichage d'updiagonalarrow.](updiagonalarrow.svg)        | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | flèche diagonale                                                                                                                       |
    | `phasorangle`          | ![Exemple d'affichage de phasorangle.](phasorangle.svg)               | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | angle de phaseur                                                                                                                       |

## Exemples

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html
<math display="block">
  <menclose notation="circle box">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </menclose>
</math>
```

Exemple d'affichage&nbsp;:

![Un cercle et des valeurs de boîte appliquées en même temps.](circle-box.svg)

Affichage dans votre navigateur&nbsp;:

{{EmbedLiveSample("Exemples", 700, 200)}}

## Résumé technique

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles">Rôle ARIA implicite</a>
    </th>
    <td>
      Aucun
    </td>
  </tr>
</table>

## Spécifications

L'élément `<menclose>` n'est définit dans aucune spécification orientée navigateur, mais vous pouvez trouver une description dans [MathML 4 <sup>(angl.)</sup>](https://w3c.github.io/mathml/#presm_menclose).

## Compatibilité des navigateurs

{{Compat}}
