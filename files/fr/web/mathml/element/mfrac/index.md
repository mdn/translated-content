---
title: mfrac
slug: Web/MathML/Element/mfrac
tags:
  - MathML
  - MathML:Element
  - MathML:Référence
translation_of: Web/MathML/Element/mfrac
---
L'élément MathML `<mfrac>` est utilisé pour afficher des fractions.

La syntaxe est la suivante : `<mfrac>numérateur dénominateur</mfrac>`.

## Attributs

- bevelled
  - : Définit la façon dont la fraction est affichée. Si l'attribut vaut `true`, la ligne de fraction est biseautée (/) et le numérateur et le dénominateur sont affichés côte à côté. S'il vaut `false` (la valeur par défaut), le numérateur sera au-dessus du dénominateur.
- class, id, style
  - : Afin d'être utilisés avec les [feuilles de styles](/fr/docs/CSS).
- denomalign
  - : L'alignement du dénominateur sous la fraction. Les valeurs possibles : `left`, `center` (valeur par défaut), et `right`.
- href
  - : Un hyperlien pointant vers un URI donné.
- linethickness
  - : L'épaisseur de la ligne de fraction horizontale. La valeur par défaut est `medium`, mais l'attribut peut prendre d'autres valeurs comme `thin`, `thick`, et [autres](/fr/docs/CSS/length).
- mathbackground
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- mathcolor
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- numalign
  - : L'alignement du numérateur au dessus de la barre de fraction. Les valeurs possibles sont : `left`, `center` (la valeur par défaut), et `right`.

## Exemple

Exemple d'affichage : ![(a/b)/(c/d)](mfrac.png)

Affichage dans votre navigateur: <math><mfrac bevelled="true"><mfrac><mi>a </mi><mi>b </mi></mfrac><mfrac><mi>c </mi><mi>d</mi></mfrac></mfrac></math>

```html
<math>
  <mfrac bevelled="true">
     <mfrac>
        <mi> a </mi>
        <mi> b </mi>
     </mfrac>
     <mfrac>
        <mi> c </mi>
        <mi> d </mi>
     </mfrac>
  </mfrac>
</math>
```

## Spécifications

| Spécification                                                                        | Statut                       | Commentaires           |
| ------------------------------------------------------------------------------------ | ---------------------------- | ---------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mfrac', 'mfrac') }} | {{ Spec2('MathML3') }} | Spécification actuelle |
| {{ SpecName('MathML2', 'chapter3.html#presm.mfrac', 'mfrac') }} | {{ Spec2('MathML2') }} | Spécification initiale |

## Compatibilité des navigateurs

{{Compat("mathml.elements.mfrac")}}
