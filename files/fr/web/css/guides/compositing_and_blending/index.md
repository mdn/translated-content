---
title: Composition et fusion CSS
slug: Web/CSS/Guides/Compositing_and_blending
original_slug: Web/CSS/CSS_compositing_and_blending
l10n:
  sourceCommit: 6cd62fb4482a2d6927cebd0223bf8d0386095340
---

Le module **Composition et fusion CSS** définit comment les couches d'arrière-plan d'un élément qui peuvent être fusionnées, comment un élément peut être fusionné avec son conteneur, et si l'élément doit créer un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).

Les propriétés de ce module CSS permettent de définir le mode de fusion à utiliser, le cas échéant, pour fusionner les images et couleurs d'arrière-plan d'un élément en une seule image de fond. Ce module propose 16 modes de fusion. Vous pouvez aussi définir comment les bordures, l'arrière-plan et le contenu d'un élément, y compris le texte, les emojis et les images, doivent être fusionnés avec l'arrière-plan de son conteneur.

## Composition et fusion en action

Dans cet exemple, chaque boîte possède une bordure, deux images de fond rayées et une couleur de fond unie. L'arrière-plan commun à toutes les boîtes contient un motif de cercles. Les trois boîtes de la deuxième ligne sont configurées pour fusionner avec l'arrière-plan du conteneur.

```html hidden live-sample___compositing
<section>
  <div><span>Normal, sans fusion</span></div>
  <div><span>Multiplie les couleurs</span></div>
  <div><span>Multiplication selon la couleur d'arrière-plan</span></div>
  <div>Normal, sans fusion</div>
  <div>Multiplie les couleurs</div>
  <div>Multiplication selon la couleur d'arrière-plan</div>
</section>
```

```css hidden live-sample___compositing
/* Crée un div avec deux images de fond rayées décalées et une couleur
   d'arrière-plan. */
div {
  width: 200px;
  height: 200px;
  background-image:
    repeating-linear-gradient(45deg, red 0 15px, pink 15px 30px),
    repeating-linear-gradient(-45deg, blue 0 15px, lightblue 15px 30px);
  background-size: 150px 150px;
  background-repeat: no-repeat;
  background-position:
    top left,
    bottom right;
  background-color: palegoldenrod;
  text-align: center;
  padding-top: 150px;
  font-family: sans-serif;
  box-sizing: border-box;
  border: 5px solid black;
}
div:nth-of-type(3n + 1) {
  background-blend-mode: normal;
}
div:nth-of-type(3n + 2) {
  background-blend-mode: multiply;
}
div:nth-of-type(3n + 3) {
  background-blend-mode: overlay;
}
div:nth-of-type(n + 4) {
  mix-blend-mode: difference;
}
/* Place un fond rose avec des trous ronds transparents qui couvre tout
   l'élément, et dispose les exemples en deux rangées de trois colonnes chacune
   */
section {
  padding: 0.75em;
  background: radial-gradient(
    circle,
    transparent 0 20px,
    rgb(255 200 200) 20px
  );
  background-size: 60px 60px;
  background-position: center;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
}
/* Rend une partie du texte plus lisible */
span {
  background-color: #ffffff99;
}
```

{{EmbedLiveSample("compositing", "", "450px")}}

Remarquez comment l'arrière-plan, la bordure et le contenu sont tous impactés par la fusion.
Cliquez sur «&nbsp;Exécuter&nbsp;» dans l'exemple ci-dessus pour voir ou modifier le code de l'animation dans le MDN Playground.

## Référence

### Propriétés

- {{cssxref("background-blend-mode")}}
- {{cssxref("isolation")}}
- {{cssxref("mix-blend-mode")}}

## Concepts associés

- Le type de donnée {{cssxref("blend-mode")}}
- La propriété CSS {{cssxref("backdrop-filter")}}
- La propriété CSS {{cssxref("filter")}}
- La propriété CSS {{cssxref("mask-composite")}}
- La propriété CSS {{cssxref("background-color")}}
- La propriété CSS {{cssxref("background-image")}}
- Le terme du glossaire {{glossary("stacking context")}}
- La primitive de filtre SVG {{ SVGElement("feBlend")}}
- La primitive de filtre SVG {{ SVGElement("feComposite")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Les propriétés du module [Effets de filtre CSS](/fr/docs/Web/CSS/Guides/Filter_effects) permettent d'appliquer des effets de filtre, comme le flou ou la modification de l'intensité des couleurs, aux images, arrière-plans et bordures.
- [Composition et fusion en CSS <sup>(angl.)</sup>](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/) (2015)
- [Éditer des images en CSS&nbsp;: modes de fusion <sup>(angl.)</sup>](https://webdesign.tutsplus.com/editing-images-in-css-blend-modes--cms-26058t) (2022)
- [web.dev&nbsp;: modes de fusion <sup>(angl.)</sup>](https://web.dev/learn/css/blend-modes) (2021)
