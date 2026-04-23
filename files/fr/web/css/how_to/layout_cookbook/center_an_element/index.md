---
title: Centrer un élément
slug: Web/CSS/How_to/Layout_cookbook/Center_an_element
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Dans cette recette, vous verrez comment centrer une boîte à l'intérieur d'une autre en utilisant [flexbox](#utiliser_flexbox) et [grid](#utiliser_grid), en centrant le contenu à la fois horizontalement et verticalement.

![Un élément centré dans une boîte plus grande](cookbook-center.png)

## Exigences

Placer un élément au centre d'une autre boîte, horizontalement et verticalement.

## Recette

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci‑dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html live-sample___center-example
<div class="container">
  <div class="item">Je suis centré&nbsp;!</div>
</div>
```

```css live-sample___center-example
.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

{{EmbedLiveSample("center-example", "", 250)}}

## Utiliser `flexbox`

Pour centrer une boîte à l'intérieur d'une autre, commencez par transformer la boîte englobante en [conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts#le_conteneur_flexible) en réglant sa propriété {{CSSxRef("display")}} sur `flex`. Ensuite, définissez {{CSSxRef("align-items")}} sur `center` pour le centrage vertical (sur l'axe de bloc) et {{CSSxRef("justify-content")}} sur `center` pour le centrage horizontal (sur l'axe en ligne). C'est tout ce qu'il faut pour centrer une boîte à l'intérieur d'une autre&nbsp;!

### HTML

```html
<div class="container">
  <div class="item">Je suis centré&nbsp;!</div>
</div>
```

### CSS

```css
div {
  border: solid 3px;
  padding: 1em;
  max-width: 75%;
}

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  height: 8em;
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
}
```

Nous donnons une hauteur au conteneur afin de montrer que l'élément intérieur est effectivement centré verticalement dans le conteneur.

### Résultat

{{EmbedLiveSample("Utiliser `flexbox`", "", 200)}}

Au lieu d'appliquer `align-items: center;` au conteneur, vous pouvez aussi centrer verticalement l'élément intérieur en définissant {{CSSxRef("align-self")}} sur `center` pour cet élément.

## Utiliser `grid`

Une autre méthode pour centrer une boîte à l'intérieur d'une autre consiste à transformer d'abord la boîte englobante en [conteneur de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#le_conteneur_de_grille) puis à régler sa propriété {{CSSxRef("place-items")}} sur `center` afin d'aligner ses éléments à la fois sur l'axe de bloc et sur l'axe en ligne.

### HTML

```html
<div class="container">
  <div class="item">Je suis centré&nbsp;!</div>
</div>
```

### CSS

```css
div {
  border: solid 3px;
  padding: 1em;
  max-width: 75%;
}

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  height: 8em;
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  display: grid;
  place-items: center;
}
```

### Résultat

{{EmbedLiveSample("Utiliser `grid`", "", 200)}}

Au lieu d'appliquer `place-items: center;` au conteneur, vous pouvez obtenir le même centrage en appliquant {{CSSxRef("place-content", "place-content: center;")}} sur le conteneur ou en appliquant soit {{CSSxRef("place-self", "place-self: center")}} soit {{CSSxRef("margin", "margin: auto;")}} sur l'élément intérieur.

## Voir aussi

- [L'alignement des boîtes avec Flexbox](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Guide d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
