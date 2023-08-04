---
title: Bas de page adhérant
slug: Web/CSS/Layout_cookbook/Sticky_footers
---

{{CSSRef}}

Un bas de page adhérant est un motif où le bas de page reste en bas de la zone d'affichage (_viewport_) lorsque le contenu est moins haut que la zone d'affichage. Dans cet article, nous verrons quelques techniques pour parvenir à ce résultat.

![A sticky footer pushed to the bottom of a box](cookbook-footer.png)

## Spécifications sommaires

Voici les spécifications rapides pour décrire le résultat qu'on souhaite obtenir :

- Le pied de page est en bas de la zone d'affichage lorsque le contenu est suffisamment petit
- Si le contenu est plus grand que la zone d'affichage, le pied de page est situé sous le contenu.

## Recette

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer.html", '100%', 720)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/sticky-footer--download.html)

> **Note :** Dans cet exemple, ainsi que dans le suivant, on utilise un élément enveloppant avec `min-height: 100%` afin que l'exemple intégré à la page fonctionne. Pour reproduire cela sur une page complète, on peut utiliser {{cssxref("min-height")}} avec la valeur `100vh` sur l'élément {{htmlelement("body")}} qu'on utilise comme conteneur de grille.

## Choix effectués

Dans l'exemple précédent, on utilise une grille CSS pour réaliser ce bas de page adhérant. L'élément `.wrapper` a une hauteur minimale de `100%`, ce qui signifie qu'il est aussi grand que le conteneur dans lequel il est placé. On crée ensuite une grille avec une seule colonne et trois lignes, une pour chaque partie de la disposition.

Le placement automatique de la grille placera les objets selon l'ordre du document source. Le titre vient donc se placer sur la première piste (dimensionnée automatiquement), le contenu vient se placer sur la piste `1fr` et le pied de page se retrouve dans la troisième région (dimensionnée automatiquement). La piste du milieu, dimensionnée avec `1fr`, occupera tout l'espace disponible et grandira pour remplir l'espace disponible.

## Méthodes alternatives

Si vous devez prendre en charge des navigateurs qui ne permettent pas d'utiliser les grilles CSS, vous pouvez utiliser les boîtes flexibles (_flexbox_) pour avoir une note de bas de page adhérante.

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer-flexbox.html", '100%', 720)}}

On commence de la même façon mais on utilise `display:flex` plutôt que `display:grid` sur `.wrapper`. On définit `flex-direction` avec la valeur `column` afin d'avoir une organisation verticale. Pour le contenu principal, on utilise `flex-grow: 1` et pour les deux autres éléments, on utilise `flex-shrink: 0`. Cela évite de les réduire encore lorsque le contenu remplit la zone principale.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les concepts de base des grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
