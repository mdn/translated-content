---
title: Objets avec média
slug: Web/CSS/How_to/Layout_cookbook/Media_objects
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Le motif _Media Object_ («&nbsp;objet média&nbsp;») est un modèle que l'on retrouve partout sur le Web. Il s'agit d'une boîte à deux colonnes avec une image d'un côté et un texte descriptif de l'autre, par exemple dans une publication sur un réseau social.

![Exemple d'objet média avec une image de profil à gauche et un texte lorem ipsum à droite occupant 80 % de l'espace](media-object.png)

## Exigences

Le motif objet média doit présenter tout ou partie des caractéristiques suivantes&nbsp;:

- Empilé sur mobile, deux colonnes sur ordinateur.
- L'image peut être à gauche ou à droite.
- L'image peut être petite ou grande.
- Les objets média peuvent être imbriqués.
- L'objet média doit gérer le contenu quel que soit le côté le plus haut.

## Recette

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html live-sample___media-objects-example
<div class="media">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Ballons" />
  </div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer">Un pied de page optionnel peut être ajouté ici.</div>
</div>

<div class="media">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/sharp-account_box-24px.svg"
      width="80px"
      alt="Compte" />
  </div>
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer"></div>
</div>
```

```html hidden live-sample___media-objects-example
<div class="media media-flip">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Ballons" />
  </div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer">Un pied de page optionnel peut être ajouté ici.</div>
</div>

<div class="media">
  <a class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Ballons" />
  </a>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>

  <div class="footer"></div>

  <div class="media">
    <a class="img">
      <img
        src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
        alt="Ballons" />
    </a>

    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
        vitae ligula sit amet maximus.
      </p>
    </div>

    <div class="footer"></div>
  </div>
</div>
```

```css live-sample___media-objects-example
body {
  font: 1.2em sans-serif;
}

img {
  max-width: 100%;
}

p {
  margin: 0 0 1em 0;
}

@media (width >= 500px) {
  .media {
    display: grid;
    grid-template-columns: fit-content(200px) 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "image content"
      "image footer";
    grid-gap: 20px;
    margin-bottom: 4em;
  }

  .media-flip {
    grid-template-columns: 1fr fit-content(250px);
    grid-template-areas:
      "content image"
      "footer image";
  }

  .img {
    grid-area: image;
  }

  .content {
    grid-area: content;
  }

  .footer {
    grid-area: footer;
  }
}
```

{{EmbedLiveSample("media-objects-example", "", 1500)}}

## Choix effectués

J'ai choisi d'utiliser la [mise en page par grille](/fr/docs/Web/CSS/Guides/Grid_layout) pour l'objet média, car elle permet de contrôler la disposition sur deux axes lorsque c'est nécessaire. Ainsi, lorsqu'il y a un pied de page avec un contenu court au-dessus, le pied de page peut être repoussé en bas de l'objet média.

Une autre raison d'utiliser la grille est de pouvoir utiliser {{CSSxRef("fit-content")}} pour la taille de la piste de l'image. En utilisant `fit-content` avec une taille maximale de 200 pixels, lorsqu'on a une petite image comme l'icône, la piste ne prend que la taille de cette image — la taille `max-content`. Si l'image est plus grande, la piste s'arrête à 200 pixels et comme l'image a un {{CSSxRef("max-width")}} de 100 % appliqué, elle est réduite pour continuer à tenir dans la colonne.

En utilisant {{CSSxRef("grid-template-areas")}} pour réaliser la disposition, on visualise le motif dans le CSS. Je définis la grille dès que la zone d'affichage (<i lang="en">viewport</i> en anglais) atteint 500 pixels de large, donc sur les petits appareils, l'objet média s'empile.

Une option pour ce motif est de l'inverser pour placer l'image de l'autre côté&nbsp;: cela se fait en ajoutant la classe `media-flip`, qui définit un modèle de grille inversé et provoque le miroir de la disposition.

Quand on imbrique un objet média dans un autre, il faut le placer dans la deuxième piste dans la disposition normale, et dans la première piste quand le motif est inversé.

## Voir aussi

- La propriété {{CSSxRef("fit-content")}}
- [Utiliser les zones de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Mise en page par grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
