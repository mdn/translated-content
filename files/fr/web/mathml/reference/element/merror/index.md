---
title: merror
slug: Web/MathML/Reference/Element/merror
original_slug: Web/MathML/Element/merror
---

{{MathMLRef}}

L'élément MathML `<merror>` est utilisé afin d'afficher des contenus en tant que messages d'erreur. Sous Firefox, ce message d'erreur est affiché de la même façon qu'un message d'erreur XML. Attention : cette erreur **n'est pas déclenchée** lorsque le contenu MahtML est incorrect ou mal formé. Ces deux cas de figure déclencheront une erreur d'analyse du XML (dans le cas de la notation XHTML de MathML), cette erreur n'ayant aucun lien avec `<merror>`.

## Attributs

- class, id, style
  - : Afin d'être utilisés avec les [feuilles de styles](/fr/docs/Web/CSS).
- href
  - : Un hyperlien pointant vers un URI donné.
- mathbackground
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/Web/CSS/Reference/Values/color_value#mots-clés).
- mathcolor
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/Web/CSS/Reference/Values/color_value#mots-clés).

## Exemple

```html
<math>
  <merror>
    <mrow>
      <mtext> Division par zéro : </mtext>
      <mfrac>
        <mn> 1 </mn>
        <mn> 0 </mn>
      </mfrac>
    </mrow>
  </merror>
</math>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
