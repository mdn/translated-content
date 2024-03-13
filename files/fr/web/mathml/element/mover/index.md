---
title: <mover>
slug: Web/MathML/Element/mover
---

{{MathMLRef()}}

L'élément MathML `<mover>` est utilisé pour attacher un accent ou une limite au-dessus d'une expression. La syntaxe est la suivante: `<mover> base overscript </mover>`

## Attributs

- accent
  - : Lorsqu'il vaut `true` le script au-dessus est un _accent_, qui est affiché plus près de la base.
    Lorsqu'il vaut `false` (valeur par défaut) le script au-dessus est une _limite_ au-dessus de la base.
- align
  - : L'alignement du script au-dessus. Les valeurs possibles sont&nbsp;: `left`, `center`, et `right`.
- class, id, style
  - : Afin d'être utilisés avec les [feuilles de styles](/fr/docs/CSS).
- href
  - : Un hyperlien pointant vers un URI donné.
- mathbackground
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- mathcolor
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).

## Exemples

Exemple de rendu: ![x+y+z](mover.png)

Rendu dans votre navigateur&nbsp;: <math><mover accent="true"><mrow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mrow><mo>⏞</mo></mover></math>

```html
<math>
  <mover accent="true">
    <mrow>
      <mi> x </mi>
      <mo> + </mo>
      <mi> y </mi>
      <mo> + </mo>
      <mi> z </mi>
    </mrow>
    <mo>
      &#x23DE;
      <!--TOP CURLY BRACKET-->
    </mo>
  </mover>
</math>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
