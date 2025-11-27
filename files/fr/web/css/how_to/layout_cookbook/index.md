---
title: Livre de recettes CSS
slug: Web/CSS/How_to/Layout_cookbook
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Le livre de recettes CSS vise à rassembler des recettes pour les motifs de mise en page courants, que vous pourriez avoir besoin d'implémenter sur vos propres sites. En plus de fournir du code que vous pouvez utiliser comme point de départ dans vos projets, ces recettes mettent en avant les différentes façons d'utiliser les spécifications de mise en page, ainsi que les choix que vous pouvez faire en tant que développeur·euse.

> [!NOTE]
> Si vous débutez avec la mise en forme CSS, vous pouvez d'abord consulter notre [module d'apprentissage de la mise en page CSS](/fr/docs/Learn_web_development/Core/CSS_layout), qui vous donnera les bases nécessaires pour profiter pleinement des recettes proposées ici.

## Recettes

| Recette                                | Description                                                                                                                             | Méthodes de mise en page                                                                                   |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [Objets média][media-objects]          | Une boîte à deux colonnes avec une image d'un côté et un texte descriptif de l'autre, par exemple une publication sur un réseau social. | [Grille CSS][css-grid], solution de repli {{CSSxRef("float")}}, dimensionnement {{CSSxRef("fit-content")}} |
| [Colonnes][columns]                    | Quand choisir la mise en colonnes, flexbox ou grille pour vos colonnes.                                                                 | [Grille CSS][css-grid], [Colonnes multiples][multicol], [Flexbox][flexbox]                                 |
| [Centrer un élément][center]           | Comment centrer un élément horizontalement et verticalement.                                                                            | [Flexbox][flexbox], [Alignement des boîtes][box-alignment]                                                 |
| [Pied de page collant][sticky-footers] | Créer un pied de page qui reste en bas du conteneur ou de la zone d'affichage lorsque le contenu est court.                             | [Grille CSS][css-grid], [Flexbox][flexbox]                                                                 |
| [Navigation séparée][split-navigation] | Un motif de navigation où certains liens sont visuellement séparés des autres.                                                          | [Flexbox][flexbox], {{CSSxRef("margin")}}                                                                  |
| [Fil d'Ariane][breadcrumb]             | Créer une liste de liens permettant à l'utilisateur·ice de remonter dans la hiérarchie de la page.                                      | [Flexbox][flexbox]                                                                                         |
| [Liste avec indicateurs][list-badges]  | Une liste d'éléments avec un indicateur affichant un nombre.                                                                            | [Flexbox][flexbox], [Alignement des boîtes][box-alignment]                                                 |
| [Pagination][pagination]               | Liens vers des pages de contenu (par exemple des résultats de recherche).                                                               | [Flexbox][flexbox], [Alignement des boîtes][box-alignment]                                                 |
| [Carte][card]                          | Un composant carte, affiché dans une grille de cartes.                                                                                  | [Grille CSS][css-grid]                                                                                     |
| [Grille englobante][grid-wrapper]      | Pour aligner le contenu d'une grille dans un conteneur central tout en permettant à certains éléments de sortir du cadre.               | [Grille CSS][css-grid]                                                                                     |

[media-objects]: /fr/docs/Web/CSS/How_to/Layout_cookbook/Media_objects
[columns]: /fr/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts
[center]: /fr/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element
[sticky-footers]: /fr/docs/Web/CSS/How_to/Layout_cookbook/Sticky_footers
[split-navigation]: /fr/docs/Web/CSS/How_to/Layout_cookbook/Split_navigation
[breadcrumb]: /fr/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation
[list-badges]: /fr/docs/Web/CSS/How_to/Layout_cookbook/List_group_with_badges
[pagination]: /fr/docs/Web/CSS/How_to/Layout_cookbook/Pagination
[card]: /fr/docs/Web/CSS/How_to/Layout_cookbook/Card
[grid-wrapper]: /fr/docs/Web/CSS/How_to/Layout_cookbook/Grid_wrapper
[css-grid]: /fr/docs/Web/CSS/Guides/Grid_layout
[multicol]: /fr/docs/Web/CSS/Guides/Multicol_layout
[flexbox]: /fr/docs/Web/CSS/Guides/Flexible_box_layout
[box-alignment]: /fr/docs/Web/CSS/Guides/Box_alignment

## Contribuer une recette

Comme pour tout MDN, nous serions ravi·e·s que vous contribuiez en proposant une recette au même format que celles présentées ci-dessus. Consultez le [guide pour ajouter une recette au livre de recettes de mise en page](/fr/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe) pour obtenir un modèle et des conseils pour rédiger votre propre exemple.
