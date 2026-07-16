---
title: "Testez vos compétences : Grilles CSS"
short-title: "Test : Grille CSS"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Grid
l10n:
  sourceCommit: 143f7345a4276156679d816a153470fe1fc6f3f8
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout")}}

Le but de ce test de compétences est de vous aider à évaluer si vous comprenez comment [une grille et des éléments de grille](/fr/docs/Learn_web_development/Core/CSS_layout/Grids) se comportent. Vous allez travailler sur plusieurs petites tâches qui utilisent différents éléments du contenu que vous venez de voir.

> [!NOTE]
> Pour obtenir de l'aide, lisez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter en utilisant l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Disposition en grille 1

Dans cette tâche, nous vous demandons de créer une grille dans laquelle les quatre éléments enfants sont automatiquement placés. La grille doit comporter trois colonnes qui partagent également l'espace disponible, avec un écart de `20px` entre les pistes de colonnes et de lignes. Ensuite, essayez d'ajouter d'autres éléments enfants à l'intérieur du conteneur parent ayant la classe `grid` et observez leur comportement par défaut.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("grid1-start", "", 220)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___grid1-start live-sample___grid1-finish
<div class="grid">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
</div>
```

```css live-sample___grid1-start live-sample___grid1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

.grid {
  /* Ajoutez des styles ici */
}
```

La disposition finale devrait ressembler à ceci&nbsp;:

{{EmbedLiveSample("grid1-finish", "", 160)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Créez une grille en utilisant `display: grid` avec trois colonnes en utilisant `grid-template-columns` et un `gap` entre les éléments&nbsp;:

```css live-sample___grid1-finish
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

</details>

## Disposition en grille 2

Dans cette tâche, une grille est déjà définie. Nous vous demandons de modifier les règles CSS des deux éléments enfants afin que chacun couvre plusieurs pistes de la grille. Le deuxième élément doit se superposer au premier.

**Question bonus&nbsp;:** Pouvez-vous maintenant faire en sorte que le premier élément s'affiche au‑dessus sans modifier l'ordre des éléments dans le code source&nbsp;?

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("grid2-start", "", 340)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___grid2-start live-sample___grid2-finish
<div class="grid">
  <div class="item1">Un</div>
  <div class="item2">Deux</div>
</div>
```

```css live-sample___grid2-start live-sample___grid2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

.item1 {
  background-color: rgb(74 102 112 / 70%);
  border: 5px solid rgb(74 102 112 / 100%);
}

.item2 {
  background-color: rgb(214 162 173 / 70%);
  border: 5px solid rgb(214 162 173 / 100%);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  gap: 10px;
}

.item1 {
  /* Ajoutez des styles ici */
}

.item2 {
  /* Ajoutez des styles ici */
}
```

La disposition devrait ressembler à ceci après avoir terminé la tâche&nbsp;:

{{EmbedLiveSample("grid2-finish", "", 340)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Il est possible de superposer des éléments en les faisant occuper les mêmes cellules de la grille.
Une option consiste à utiliser les raccourcis ci-dessous, mais il serait correct d'utiliser les propriétés longues comme `grid-row-start`, par exemple.

```css live-sample___grid2-finish
.item1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.item2 {
  grid-column: 2 / 5;
  grid-row: 2 / 4;
}
```

Pour la question bonus, une façon d'y parvenir est d'utiliser `order`, que nous avons rencontré dans le tutoriel sur les boîtes flexibles.

```css live-sample___grid2-finish
.item1 {
  order: 1;
}
```

Une autre solution valide consiste à utiliser `z-index`&nbsp;:

```css
.item1 {
  z-index: 1;
}
```

</details>

## Disposition en grille 3

Dans cette tâche, la grille contient quatre enfants directs. Ils sont actuellement placés automatiquement dans la grille.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("grid3-start", "", 200)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___grid3-start live-sample___grid3-finish
<div class="grid">
  <div class="one">Un</div>
  <div class="two">Deux</div>
  <div class="three">Trois</div>
  <div class="four">Quatre</div>
</div>
```

```css live-sample___grid3-start live-sample___grid3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}
```

Pour compléter cette tâche, utilisez les propriétés `grid-area` et `grid-template-areas` afin de disposer les éléments comme indiqué ci-dessous&nbsp;:

{{EmbedLiveSample("grid3-finish", "", 200)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Chaque partie de la disposition doit avoir un nom en utilisant la propriété `grid-area` et `grid-template-areas` pour les disposer. Les points de confusion possibles seraient de ne pas réaliser que vous devez placer un `.` pour laisser une cellule vide, ou que vous devez répéter le nom pour qu'un élément occupe plus d'une piste&nbsp;:

```css live-sample___grid3-finish
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "aa aa"
    "bb cc"
    ". dd";
}

.one {
  grid-area: aa;
}

.two {
  grid-area: bb;
}

.three {
  grid-area: cc;
}

.four {
  grid-area: dd;
}
```

</details>

## Disposition en grille 4

Dans cette tâche, vous devrez utiliser à la fois la disposition en grille et la disposition flexible pour recréer la disposition finale. L'espacement entre les colonnes et les lignes doit être de `10px`. Vous n'avez pas besoin de modifier le HTML pour y parvenir.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("grid4-start", "", 400)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___grid4-start live-sample___grid4-finish
<div class="container">
  <div class="card">
    <img
      alt="un ballon rouge"
      src="https://mdn.github.io/shared-assets/images/examples/balloons1.jpg" />
    <ul class="tags">
      <li>ballon</li>
      <li>rouge</li>
      <li>ciel</li>
      <li>bleu</li>
      <li>Montgolfière</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="ballons au-dessus de certaines maisons"
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg" />
    <ul class="tags">
      <li>ballons</li>
      <li>maisons</li>
      <li>train</li>
      <li>bord de mer</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="gros plan de ballons en train de gonfler"
      src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
    <ul class="tags">
      <li>ballons</li>
      <li>gonflage</li>
      <li>vert</li>
      <li>bleu</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="un ballon au soleil"
      src="https://mdn.github.io/shared-assets/images/examples/balloons4.jpg" />
    <ul class="tags">
      <li>ballon</li>
      <li>soleil</li>
      <li>ciel</li>
      <li>été</li>
      <li>lumineux</li>
    </ul>
  </div>
</div>
```

```css live-sample___grid4-start live-sample___grid4-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.card {
  display: grid;
  grid-template-rows: 200px min-content;
}

.card > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tags {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tags > * {
  background-color: #999999;
  color: white;
  padding: 0.2em 0.8em;
  border-radius: 0.2em;
  font-size: 80%;
  margin: 5px;
}

.container {
  /* Ajoutez les styles ici */
}

.tags {
  /* Ajoutez les styles ici */
}
```

La disposition devrait ressembler à ceci après avoir terminé la tâche&nbsp;:

{{EmbedLiveSample("grid4-finish", "", 400)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Le conteneur devra être une disposition en grille, car nous avons un alignement en lignes et en colonnes — bidimensionnel.
Le `<ul>` doit être un conteneur flexible, car les balises (éléments `<li>`) ne sont pas alignées en colonnes, seulement en lignes et elles sont centrées dans l'espace avec la propriété d'alignement `justify-content` définie sur `center`.

Vous pouvez essayer d'utiliser les boîtes flexibles sur le conteneur et de restreindre les cartes avec des valeurs en pourcentage. Vous pouvez également essayer de transformer les éléments en une disposition en grille, mais notez que les éléments ne sont pas alignés en deux dimensions, donc les boîtes flexibles ne sont pas le meilleur choix.

```css live-sample___grid4-finish
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout")}}
