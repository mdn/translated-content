---
title: Disposition en colonnes
slug: Web/CSS/How_to/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Il vous faudra souvent créer une mise en page comportant plusieurs colonnes, et CSS offre plusieurs moyens d'y parvenir. Le choix entre les dispositions [à plusieurs colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) ou [grille](/fr/docs/Web/CSS/Guides/Grid_layout) dépendra de l'objectif visé&nbsp;; dans cette recette nous explorons ces options.

![Trois styles de mise en page comportant deux colonnes dans le conteneur.](cookbook-multiple-columns.png)

## Exigences

Voici quelques modèles de mise en page que vous pouvez vouloir obtenir avec des colonnes&nbsp;:

- [Un flux de contenu continu divisé en colonnes façon journal](#un_flux_de_contenu_continu_—_mise_en_page_multi-colonnes).
- [Une seule rangée d'éléments disposés en colonnes, avec toutes les hauteurs égales](#une_seule_rangée_déléments_avec_des_hauteurs_égales_—_flexbox).
- [Plusieurs rangées de colonnes alignées par ligne et par colonne](#aligner_des_éléments_en_lignes_et_colonnes_—_mise_en_page_en_grille).

## Recettes

Il faut choisir des méthodes de mise en page différentes selon l'objectif à atteindre.

### Un flux de contenu continu — mise en page multi-colonnes

Si vous créez des colonnes avec la mise en page multi-colonnes, votre texte reste un flux continu qui remplit chaque colonne à tour de rôle. Les colonnes ont toutes la même taille et il n'est pas possible de cibler une colonne individuelle ni le contenu d'une colonne individuelle.

Vous pouvez contrôler l'écart entre les colonnes avec les propriétés {{CSSxRef("column-gap")}} ou {{CSSxRef("gap")}}, et ajouter une règle entre les colonnes avec {{CSSxRef("column-rule")}}.

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci‑dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html live-sample___multi-column-layout-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach.
  </p>
</div>
```

```css live-sample___multi-column-layout-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px;
  font: 1.2em sans-serif;

  column-width: 10em;
  column-rule: 1px solid rgb(75 70 74);
}
```

{{EmbedLiveSample("multi-column-layout-example", "", 350)}}

Dans cet exemple, nous utilisons la propriété {{CSSxRef("column-width")}} pour fixer une largeur minimale que doivent avoir les colonnes avant que le navigateur n'ajoute une colonne supplémentaire. La propriété raccourcie {{CSSxRef("columns")}} permet de définir `column-width` et {{CSSxRef("column-count")}}, l'une ou l'autre pouvant fixer le nombre maximal de colonnes autorisées.

Quand utiliser le multi-colonne&nbsp;:

- Lorsque vous souhaitez afficher votre texte en colonnes façon journal.
- Lorsque vous avez un ensemble de petits éléments à répartir en colonnes.
- Lorsque vous n'avez pas besoin de cibler les boîtes de colonnes individuelles pour la mise en forme.

### Une seule rangée d'éléments avec des hauteurs égales — flexbox

Flexbox peut être utilisé pour répartir du contenu en colonnes en réglant {{CSSxRef("display", "display: flex;")}} pour transformer un élément parent en conteneur flex. Ajouter cette seule propriété transforme tous les enfants (éléments enfants, pseudo-éléments et nœuds texte) en éléments flex alignés sur une seule ligne. Définir la propriété raccourcie {{CSSxRef("flex")}} avec une seule valeur numérique répartit également tout l'espace disponible, ce qui rend généralement tous les éléments flex de la même taille tant qu'aucun n'a de contenu qui empêche le retour à la ligne et force une taille plus grande.

On peut utiliser des marges ou la propriété `gap` pour créer des espaces entre les éléments, mais il n'existe actuellement aucune propriété CSS qui ajoute des règles entre les éléments flex.

```html live-sample___columns-flexbox-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___columns-flexbox-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px 10px;
  font: 1.2em sans-serif;

  display: flex;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;

  margin: 0 10px;
  flex: 1;
}
```

{{EmbedLiveSample("columns-flexbox-example", "", 400)}}

Pour créer une mise en page avec des éléments flex qui passent sur de nouvelles lignes, réglez la propriété {{CSSxRef("flex-wrap")}} du conteneur sur `wrap`. Notez que chaque ligne flex répartit l'espace pour cette ligne uniquement. Les éléments d'une ligne ne s'aligneront pas nécessairement avec ceux d'autres lignes, comme le montre l'exemple ci‑dessous. C'est pourquoi flexbox est qualifié d'unidimensionnel&nbsp;: il est conçu pour contrôler la mise en page en ligne ou en colonne, mais pas les deux à la fois.

```html live-sample___columns-flexbox-wrapping-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___columns-flexbox-wrapping-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px 10px;
  width: 500px;
  font: 1.2em sans-serif;

  display: flex;
  flex-wrap: wrap;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;

  margin: 0 10px;
  flex: 1 1 200px;
}
```

{{EmbedLiveSample("columns-flexbox-wrapping-example", "", 450)}}

Quand utiliser flexbox&nbsp;:

- Pour une seule rangée ou une seule colonne d'éléments.
- Lorsque vous souhaitez aligner les éléments sur l'axe secondaire après leur mise en page.
- Lorsque vous acceptez que les éléments renvoyés à la ligne partagent l'espace uniquement sur leur ligne et ne s'alignent pas avec les éléments d'autres lignes.

### Aligner des éléments en lignes et colonnes — mise en page en grille

Si vous voulez une grille bidimensionnelle où les éléments s'alignent en _lignes_ et en _colonnes_, choisissez la mise en page CSS Grid. De la même manière que flexbox fonctionne sur les enfants directs du conteneur flex, la grille fonctionne sur les enfants directs du conteneur de grille. Il suffit de régler {{CSSxRef("display", "display: grid;")}} sur le conteneur. Les propriétés définies sur ce conteneur — comme {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-template-rows")}} — définissent la répartition des éléments sur les lignes et les colonnes.

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci‑dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html live-sample___grid-layout-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens.
  </p>

  <p>
    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
    celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
    parsnip.
  </p>
</div>
```

```css live-sample___grid-layout-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px;
  width: 500px;
  font: 1.2em sans-serif;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  margin: 0;
}
```

{{EmbedLiveSample("grid-layout-example", "", 450)}}

Quand utiliser la grille&nbsp;:

- Pour plusieurs rangées ou colonnes d'éléments.
- Lorsque vous voulez pouvoir aligner les éléments sur les axes de bloc et en ligne.
- Lorsque vous souhaitez que les éléments s'alignent en lignes et en colonnes.

## Voir aussi

- [Guide pour les dispositions multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout)
- [Guide pour les boîtes flexibles (<i lang="en">flexbox</i>)](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- [Guide pour les grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
