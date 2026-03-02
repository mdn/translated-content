---
title: Liste de groupes avec indicateurs
slug: Web/CSS/How_to/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Dans cette recette, vous allez créer un motif de liste de groupes avec des indicateurs affichant un nombre.

![Une liste d'éléments avec un indicateur affichant un nombre à droite du texte.](list-group-badges.png)

## Exigences

Les éléments de la liste doivent être affichés avec les indicateurs. L'indicateur doit être aligné à droite et centré verticalement. L'indicateur doit rester centré verticalement qu'il y ait une seule ligne de contenu ou plusieurs lignes de texte.

## Recette

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html live-sample___list-group-badges-example
<ul class="list-group">
  <li>
    Élément un
    <span class="badge">2</span>
  </li>
  <li>
    Élément deux
    <span class="badge">10</span>
  </li>
  <li>
    Élément trois
    <span class="badge">9</span>
  </li>
  <li>
    Élément quatre
    <span class="badge">0</span>
  </li>
</ul>
```

```css live-sample___list-group-badges-example
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 0;
  margin: 1em;
}
.list-group {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #cccccc;
  border-radius: 0.5em;
  width: 20em;
}

.list-group li {
  border-top: 1px solid #cccccc;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-group li:first-child {
  border-top: 0;
}

.list-group .badge {
  background-color: rebeccapurple;
  color: white;
  font-weight: bold;
  font-size: 80%;
  border-radius: 10em;
  min-width: 1.5em;
  padding: 0.25em;
  text-align: center;
}
```

{{EmbedLiveSample("list-group-badges-example", "", "250px")}}

## Choix effectués

Flexbox rend ce motif particulièrement simple et facilite également les modifications de la présentation.

Pour que le texte et l'indicateur soient correctement alignés, j'utilise la propriété {{CSSxRef("justify-content")}} avec la valeur `space-between`. Cela place l'espace supplémentaire entre les éléments. Dans l'exemple interactif, si vous retirez cette propriété, vous verrez l'indicateur se déplacer à la fin du texte pour les éléments dont le texte est plus court qu'une ligne.

Pour aligner le contenu horizontalement, j'utilise la propriété {{CSSxRef("align-items")}} pour aligner le texte et l'indicateur sur l'axe transversal. Si vous souhaitez que l'indicateur soit aligné en haut du contenu, remplacez cette valeur par `align-items: flex-start`.

## Voir aussi

- [Alignement des boîtes avec les boîtes flexibles](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
