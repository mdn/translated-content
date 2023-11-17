---
title: Navigation segmentée
slug: Web/CSS/Layout_cookbook/Split_Navigation
---

{{CSSRef}}

Une barre de navigation divisée consiste en un ou plusieurs éléments de navigation séparés des autres éléments de navigation.

![Items separated into two groups.](split-navigation.png)

## Spécifications sommaires

Une telle barre de navigation consiste généralement à avoir un élément écarté des autres. Pour cela, on va pouvoir utiliser les boîtes flexibles sans avoir besoin de deux conteneurs flexibles.

## Exemple appliqué

{{EmbedGHLiveSample("css-examples/css-cookbook/split-navigation.html", '100%', 520)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/split-navigation--download.html).

## Choix effectués

Ce composant utilise les marges automatiques et les boîtes flexibles pour séparer l'élément voulu.

Une marge automatique absorbe tout l'espace disponible sur la direction à laquelle elle est appliquée. C'est comme cela qu'on peut centrer un bloc avec des marges automatiques, de chaque côté du bloc, la marge essaye de consommer le plus d'espace possible et _pousse_ le bloc au milieu.

Dans notre exemple, c'est la marge à gauche du dernier élément qui est automatique et qui consomme l'espace, poussant ainsi l'élément sur la droite. Pour déplacer la séparation, on peut appliquer la classe `push` à n'importe quel élément de la liste.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le module de spécification _CSS Flexible Box Layout_](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout)
