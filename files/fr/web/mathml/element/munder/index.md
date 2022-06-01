---
title: <munder>
slug: Web/MathML/Element/munder
translation_of: Web/MathML/Element/munder
---
{{MathMLRef()}}

L'élément MathML `<munder>` est utilisé pour attacher un accent ou une limite sous une expression. La syntaxe est la suivante: `<munder> base script-en-dessous </munder>`

## Attributs

- accentunder
  - : Lorsqu'il a pour valeur `true`, l'élément est un _accent_, qui est affiché plus près de la base.
    Lorsqu'il a pour valeur `false` (valeur par défaut), l'élément est une _limite_ sous la base.
- align
  - : l'alignement du script en dessous. Les valeurs possibles sont: `left`, `center`, et `right`.
- class, id, style
  - : Afin d'être utilisés avec les [feuilles de style](/fr/docs/CSS).
- href
  - : Un hyperlien pointant vers un URI donné.
- mathbackground
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- mathcolor
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).

## Exemples

Exemple de rendu: ![x+y+z](munder.png)

Rendu dans votre navigateur: <math><munder accentunder="true"><mrow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mrow><mo>⏟</mo></munder></math>

```html
<math>

<munder accentunder="true">
  <mrow>
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
    <mo> + </mo>
    <mi> z </mi>
  </mrow>
  <mo> &#x23DF; <!--BOTTOM CURLY BRACKET--> </mo>
</munder>

</math>
```

## Spécifications

| Specification                                                                            | Status                       | Comment               |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.munder', 'munder') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.munder', 'munder') }} | {{ Spec2('MathML2') }} | Initial specification |

## Compatibilité des navigateurs

{{Compat("mathml.elements.munder")}}

## Voir aussi

- {{ MathMLElement("mover") }} (Overscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
