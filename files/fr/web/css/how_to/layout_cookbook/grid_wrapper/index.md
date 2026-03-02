---
title: Envelopper une grille
slug: Web/CSS/How_to/Layout_cookbook/Grid_wrapper
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Le motif d'enveloppe de grille est utile pour aligner le contenu d'une grille dans un conteneur central tout en permettant à des éléments de sortir et de s'aligner sur le bord de l'élément ou de la page.

## Exigences

Les éléments placés sur la grille doivent pouvoir s'aligner sur un conteneur centré horizontalement avec une largeur maximale, sur les bords extérieurs de la grille, ou les deux.

## Recette

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html live-sample___grid-wrapper-example
<div class="grid">
  <div class="wrapper">
    <p>
      Cet élément s'aligne sur un «&nbsp;wrapper&nbsp;» — des colonnes ayant une
      largeur maximale.
    </p>
  </div>
  <div class="full-width">
    <p>Cet élément s'aligne sur le bord du conteneur de grille.</p>
  </div>
  <div class="left-edge">
    <p>
      Cet élément s'aligne sur le bord gauche du conteneur de grille et le bord
      droit du «&nbsp;wrapper&nbsp;».
    </p>
  </div>
  <div class="right-wrapper">
    <p>
      Cet élément s'aligne sur le bord droit des colonnes du
      «&nbsp;wrapper&nbsp;».
    </p>
  </div>
</div>
```

```css live-sample___grid-wrapper-example
body {
  font: 1.2em sans-serif;
}
.grid {
  display: grid;
  grid-template-columns: minmax(20px, 1fr) repeat(6, minmax(0, 60px)) minmax(
      20px,
      1fr
    );
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
}

.grid > * {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
}

.full-width {
  grid-column: 1 / -1;
}

.wrapper {
  grid-column: 2 / -2;
}

.left-edge {
  grid-column: 1 / -2;
}

.right-wrapper {
  grid-column: 4 / -2;
}
```

{{EmbedLiveSample("grid-wrapper-example", "", "550px")}}

## Choix effectués

Cette recette utilise la fonction {{CSSxRef("minmax", "minmax()")}} de la grille CSS pour définir la taille des pistes dans la propriété {{CSSxRef("grid-template-columns")}}. Pour les colonnes centrales avec une largeur maximale, on peut définir une valeur minimale de `0` ou plus et une valeur maximale qui spécifie la taille maximale que les pistes de colonne peuvent atteindre. L'utilisation d'unités [relatives](/fr/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_font) ou [absolues](/fr/docs/Web/CSS/Reference/Values/length#absolute_length_units) {{CSSxRef("length")}} (pixels, em, rem) crée une taille maximale fixe pour le conteneur central, tandis que l'utilisation de valeurs en {{CSSxRef("percentage")}} ou d'[unités de la zone d'affichage](/fr/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) permet au conteneur de s'adapter à son contexte.

Les deux colonnes extérieures ont une taille maximale de `1fr`, ce qui signifie qu'elles s'étendent pour occuper l'espace restant dans le conteneur de grille.

## Méthodes de recours ou alternatives utiles

Pour centrer la grille horizontalement sur la page, vous pouvez définir une `max-width` ainsi que des {{CSSxRef("margin")}} gauche et droite à `auto`&nbsp;:

```css
.grid {
  max-width: 96vw; /* Limite la largeur à 96 % de la largeur de la zone d'affichage (« viewport » en anglais) */
  margin: 0 auto; /* Centre horizontalement le conteneur */
}
```

## Problèmes d'accessibilité

Bien que la grille CSS permette de positionner les éléments presque partout, il est important de s'assurer que votre balisage sous-jacent suit un ordre logique (voir [Disposition en grille CSS et accessibilité](/fr/docs/Web/CSS/Guides/Grid_layout/Accessibility) pour plus de détails).

## Voir aussi

- La propriété {{CSSxRef("grid-template-columns")}}
- [Les grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
- [Les grilles CSS, plus de flexibilité avec `minmax()` <sup>(angl.)</sup>](https://css-irl.info/more-flexibility-with-minmax/) (2018)
- [Isoler des éléments sur une grille CSS <sup>(angl.)</sup>](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/) (2017)
