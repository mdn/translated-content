---
title: Bas de page adhérant
slug: Web/CSS/How_to/Layout_cookbook/Sticky_footers
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Un motif de bas de page adhérant est un motif où le pied de page de votre page «&nbsp;colle&nbsp;» au bas de la zone d'affichage (<i lang="en">viewport</i> en anglais) lorsque le contenu est plus court que la hauteur de la zone d'affichage. Nous allons examiner quelques techniques pour en créer un dans cette recette.

## Exigences

Le motif de bas de page adhérant doit répondre aux exigences suivantes&nbsp;:

- Le pied de page colle au bas de la zone d'affichage lorsque le contenu est court.
- Si le contenu de la page dépasse le bas de la zone d'affichage, le pied de page est repoussé vers le bas et reste toujours en dessous du contenu comme d'habitude.

## Recette

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html live-sample___sticky-footer-example
<div class="wrapper">
  <header class="page-header">Ceci est l'en-tête</header>
  <main class="page-body">
    <p contenteditable>
      Le pied de page colle au bas même si ce paragraphe est court. Ajoutez du
      contenu dans cette zone modifiable pour voir le pied de page descendre
      lorsque c'est nécessaire pour s'adapter au contenu.
    </p>
  </main>
  <footer class="page-footer">Bas de page adhérant</footer>
</div>
```

```css live-sample___sticky-footer-example
* {
  box-sizing: inherit;
}

html {
  height: 100%;
  box-sizing: border-box;
}

body {
  height: 100%;
  font: 1.2em sans-serif;
}

.wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.page-header,
.page-footer {
  background-color: rgb(75 70 74);
  color: white;
  padding: 20px;
}

.page-body {
  padding: 20px;
}

.page-body p {
  border: 1px solid grey;
}
```

{{EmbedLiveSample("sticky-footer-example", "", "400px")}}

> [!NOTE]
> Dans cet exemple et le suivant, nous utilisons un conteneur principal avec `min-height: 100%`. Vous pouvez aussi obtenir ce résultat pour une page entière en appliquant {{CSSxRef("min-height")}} à `100vh` sur l'élement HTML {{HTMLElement("body")}} et en l'utilisant comme conteneur de grille.

## Choix effectués

Dans l'exemple ci-dessus, nous obtenons le bas de page adhérant en utilisant la [mise en page en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout). Le `.wrapper` a une hauteur minimale de `100%`, ce qui signifie qu'il est aussi haut que le conteneur dans lequel il se trouve. Nous créons ensuite une grille à une seule colonne avec trois lignes, une pour chaque partie de notre mise en page.

[Le placement automatique en grille](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement) place nos éléments dans l'ordre du code source&nbsp;: l'en-tête va dans la première piste de taille automatique, le contenu principal dans la piste `1fr` et le pied de page dans la dernière piste de taille automatique. La piste `1fr` prend tout l'espace disponible et s'agrandit pour combler l'écart.

## Méthode alternative

Vous pouvez aussi utiliser [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) pour créer un bas de page adhérant.

```html live-sample___sticky-footer-flexbox-example
<div class="wrapper">
  <header class="page-header">Ceci est l'en-tête</header>
  <main class="page-body">
    <p contenteditable>
      Le pied de page colle au bas même si ce paragraphe est court. Ajoutez du
      contenu dans cette zone modifiable pour voir le pied de page descendre
      lorsque c'est nécessaire pour s'adapter au contenu.
    </p>
  </main>
  <footer class="page-footer">Bas de page adhérant</footer>
</div>
```

```css live-sample___sticky-footer-flexbox-example
* {
  box-sizing: border-box;
}

html,
body {
  box-sizing: border-box;
  height: 100%;
  padding: 0;
  margin: 0;
  font: 1.2em sans-serif;
}

.wrapper {
  box-sizing: border-box;
  min-height: 100%;

  display: flex;
  flex-direction: column;
}

.page-header,
.page-footer {
  background-color: rgb(75 70 74);
  color: white;
  padding: 20px;

  flex-grow: 0;
  flex-shrink: 0;
}

.page-body {
  padding: 20px;

  flex-grow: 1;
}

.page-body p {
  border: 1px solid grey;
}
```

{{EmbedLiveSample("sticky-footer-flexbox-example", "", "400px")}}

L'exemple flexbox commence de la même manière, mais nous utilisons `display:flex` au lieu de `display:grid` sur le `.wrapper`&nbsp;; nous appliquons aussi {{CSSxRef("flex-direction")}} à `column`. Ensuite, nous appliquons [`flex-grow: 1`](/fr/docs/Web/CSS/Reference/Properties/flex-grow) au contenu principal et [`flex-shrink: 0`](/fr/docs/Web/CSS/Reference/Properties/flex-shrink) aux deux autres éléments — cela les empêche de rétrécir lorsque le contenu remplit la zone principale.

## Ressources sur MDN

- Propriétés CSS&nbsp;: {{CSSxRef("display")}}, {{CSSxRef("min-height")}}, {{CSSxRef("grid-template-rows")}}, {{CSSxRef("flex-direction")}}, {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}}
- [Concepts de base de la mise en page en grille](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Module de mise en page en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
- [Concepts de base de flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Module de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
