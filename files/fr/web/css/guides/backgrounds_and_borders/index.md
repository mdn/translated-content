---
title: Arrière-plans et bordures CSS
slug: Web/CSS/Guides/Backgrounds_and_borders
original_slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: 3dcdca5a04e1a40d0fe8ed0f9694c57cfb138a4f
---

Le module de spécification **Arrière-plans et bordures CSS** (<i lang="en">CSS backgrounds and borders</i> en anglais) fournit des propriétés permettant d'ajouter des bordures, des coins arrondis et des ombres aux éléments.

Vous pouvez ajouter différents types de styles de bordures, y compris des bordures composées d'images de tous types, que ce soit [des images matricielles](https://fr.wikipedia.org/wiki/Image_matricielle) ou des dégradés CSS. Les bordures peuvent être carrées ou arrondies, et un rayon de courbure différent peut être défini pour chaque coin. Les éléments peuvent être arrondis, qu'ils aient ou non une bordure visible.

Les ombres des boîtes comprennent les ombres intérieures et extérieures, les ombres simples ou multiples, et les ombres opaques ou transparentes. Une ombre extérieure projette une ombre comme si la bordure de l'élément était opaque. Une ombre intérieure projette une ombre comme si tout ce qui se trouvait à l'extérieur du bord de remplissage était opaque. L'ombre peut être unie et opaque ou inclure une distance d'étalement avec une transition de la couleur de l'ombre vers la transparence.

Les propriétés de ce module vous permettent également de définir si les cellules à l'intérieur d'un élément {{HTMLElement("table")}} doivent avoir des bordures communes ou séparées.

### Arrière-plans, bordures et ombres de boîtes en action

Cet exemple de bordures, d'arrière-plans et d'ombres en boîte se compose d'images d'arrière-plan centrées composées de dégradés linéaires et radiaux. Une série d'ombres en boîte fait ressortir la bordure. L'élément de gauche a une image de bordure définie. L'élément de droite a une bordure arrondie en pointillés.

```html hidden live-sample___backgrounds
<article>
  <div></div>
  <div></div>
</article>
```

```css hidden live-sample___backgrounds
article {
  display: flex;
  gap: 10px;
}
div {
  color: #58ade3;
  height: 320px;
  width: 240px;
  padding: 20px;
  margin: 10px;
  border: dotted 15px; /* valeur par défaut `currentColor` */
  border-radius: 100px 0;
  background-image:
    radial-gradient(
      circle,
      transparent 60%,
      currentColor 60% 70%,
      transparent 70%
    ),
    linear-gradient(45deg, currentColor, white),
    linear-gradient(transparent, transparent);
  /* la troisième image d'arrière-plan transparente a été ajoutée pour fournir de l'espace à la couleur d'arrière-plan */
  background-color: currentColor;
  background-position: center;
  background-size:
    60px 60px,
    120px 120px;
  background-clip: content-box, content-box, padding-box;
  box-shadow:
    inset 5px 5px 5px rgb(0 0 0 / 0.4),
    inset -5px -5px 5px rgb(0 0 0 / 0.4),
    5px 5px 5px rgb(0 0 0 / 0.4),
    -5px -5px 5px rgb(0 0 0 / 0.4);
}
div:first-of-type {
  border-radius: 0;
  border-image-source: repeating-conic-gradient(
    from 3deg at 25% 25%,
    currentColor 0 3deg,
    transparent 3deg 6deg
  );
  border-image-slice: 30;
}
```

{{EmbedLiveSample("backgrounds", "", "450px")}}

Les images d'arrière-plan sont définies avec la propriété CSS {{cssxref("background-image")}}. Les images sont centrées avec la propriété {{cssxref("background-position")}}. Différentes valeurs de la propriété {{cssxref("background-clip")}} pour les images d'arrière-plan multiples sont utilisées pour faire en sorte que les images d'arrière-plan restent à l'intérieur de la boîte de contenu. La couleur d'arrière-plan est découpée dans le cadre de remplissage, ce qui empêche l'arrière-plan d'apparaître à travers les sections transparentes pour les propriétés {{cssxref("border-image")}} et {{cssxref("border-image")}} avec la valeur {{cssxref("border-style", "dotted")}}. Les coins arrondis de l'élément de droite sont créés à l'aide de la propriété {{cssxref("border-image")}}. Une seule déclaration {{cssxref("box-shadow")}} est utilisée pour définir toutes les ombres, tant à l'intérieur qu'à l'extérieur.

Cliquez sur «&nbsp;Play&nbsp;» dans l'exemple ci-dessus pour voir ou modifier le code de l'animation dans _MDN Playground_.

## Référence

### Propriétés CSS

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- {{cssxref("background")}} (version courte)
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom")}} (version courte)
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left")}} (version courte)
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right")}} (version courte)
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("border-top")}} (version courte)
- {{cssxref("border-color")}} (version courte)
- {{cssxref("border-style")}} (version courte)
- {{cssxref("border-width")}} (version courte)
- {{cssxref("border")}} (version courte)
- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-radius")}} (version courte)
- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} (version courte)
- {{cssxref("box-shadow")}}

Le module d'arrière-plan CSS niveau 4 introduit également les propriétés `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline`, `background-repeat-x`, `background-repeat-y` et `background-tbd`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

### Types de données

- Le type énuméré {{cssxref("line-style")}}

## Guides

- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : Dans cet article, on voit comment paramétrer un ou plusieurs arrière-plans pour un élément.
- [Redimensionner les images d'arrière-plan](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : Dans cet article, on voit comment modifier la taille et paramétrer la répétition d'une image d'arrière-plan.
- [Redimensionner les images d'arrière-plan SVG](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
  - : Comment le rapport d'aspect SVG, les valeurs de dimension SVG et la propriété CSS `background-size` impactent le redimensionnement des images d'arrière-plan SVG.
- [Utilisation de dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Dans cet article, on voit comment créer des images d'arrière-plan dégradées CSS.
- [Apprendre CSS&nbsp;: Arrière-plans et bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Dans cet article, on voit comment implémenter des images décoratives à l'aide d'images d'arrière-plan CSS.
- [Apprendre CSS&nbsp;: Le modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Dans cet article, on voit comment les bordures, ainsi que d'autres propriétés du modèle de boîte, affectent le modèle de boîte CSS.

## Notions associées

- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("box-sizing")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("text-shadow")}}
- Le type de donnée {{cssxref("url_value", "&lt;url&gt;")}}
- Le type de donnée {{cssxref("url")}}
- Le type de donnée {{cssxref("image")}}
- Le type de donnée {{cssxref("position")}}
- Le mot-clé [`currentcolor`](/fr/docs/Web/CSS/Reference/Values/color_value#le_mot_clé_currentcolor)

## Spécifications

{{Specifications}}

## Voir aussi

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- Le filtre de fonction [`drop-shadow()`](/fr/docs/Web/CSS/Reference/Values/filter-function/drop-shadow)
- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
- [Générateur pour `border-image`](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
- [Générateur pour `border-radius`](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
