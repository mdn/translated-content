---
title: Navigation segmentée
slug: Web/CSS/How_to/Layout_cookbook/Split_navigation
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

La **navigation segmentée** est un motif de navigation où un ou plusieurs éléments sont séparés du reste des éléments de navigation.

![Éléments séparés en deux groupes.](split-navigation.png)

## Exigences

Un motif courant de navigation consiste à éloigner un élément des autres. On peut utiliser flexbox pour obtenir ce résultat, sans avoir besoin de créer deux conteneurs flex distincts.

## Recette

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html live-sample___split-navigation-example
<nav>
  <ul class="main-nav">
    <li><a href="">À propos</a></li>
    <li><a href="">Produits</a></li>
    <li><a href="">Notre équipe</a></li>
    <li class="push"><a href="">Contact</a></li>
  </ul>
</nav>
```

```css live-sample___split-navigation-example
.main-nav {
  margin: 0;
  padding: 0;
  list-style: none;
  font: 1.2em sans-serif;

  display: flex;
}

.main-nav a {
  padding: 0.5em 1em;
  display: block;
}

.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("split-navigation-example")}}

## Choix effectués

Ce motif combine les marges automatiques avec flexbox pour séparer les éléments.

Une marge automatique absorbe tout l'espace disponible dans la direction où elle est appliquée. C'est ainsi que le centrage d'un bloc avec des marges automatiques fonctionne — vous avez une marge de chaque côté du bloc qui tente de prendre tout l'espace, ce qui pousse le bloc au centre.

Dans ce cas, la marge automatique à gauche prend tout l'espace disponible et pousse l'élément vers la droite. Vous pouvez appliquer la classe `push` à n'importe quel élément de la liste.

## Voir aussi

- [Mise en page flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- La propriété {{CSSxRef("display")}}
- La propriété {{CSSxRef("margin")}}
